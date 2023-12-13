<script lang="ts">
    import { Minesweeper } from "$lib/minesweeper";
    import { onDestroy } from "svelte";
    import { createEventDispatcher } from "svelte";
    const dispatcher = createEventDispatcher();

    export let width: number = 30;
    export let height: number = 16;
    export let numMines = 99;

    let game: Minesweeper | null = null;

    // TODO: Instead of rerendering the entire board, only rerender the tiles that need.
    let rerender: number = 0;

    function generateGame(startX: number, startY: number) {
        if(game) {
            game.destroyDispatcher();
        }

        game = Minesweeper.generate({
            width, height, numMines,
            forceZeroAtPos: { x: startX, y: startY }
        });

        game.addEventListener('tile_update', (x, y, game) => {
            rerender++;
            dispatcher('tilechange', { x, y, game });
        });

        game.addEventListener('state_update', (state, game) => {
            dispatcher('statechange', { state, game });
        });

        game.uncover(startX, startY);

        dispatcher('statechange', { state: 'playing', game });

    }

    onDestroy(() => {
        if(game) {
            game.destroyDispatcher();
        }
    });

</script>

<style lang="scss">

    .text-nearby-1 { color: theme('colors.nearby.1'); }
    .text-nearby-2 { color: theme('colors.nearby.2'); }
    .text-nearby-3 { color: theme('colors.nearby.3'); }
    .text-nearby-4 { color: theme('colors.nearby.4'); }
    .text-nearby-5 { color: theme('colors.nearby.5'); }
    .text-nearby-6 { color: theme('colors.nearby.6'); }
    .text-nearby-7 { color: theme('colors.nearby.7'); }
    .text-nearby-8 { color: theme('colors.nearby.8'); }

    .uncovered {
        outline: 2px solid theme('colors.zinc.700');
        outline-offset: -2px;
    }

    .clickable {
        cursor: pointer;
    }

</style>

<!-- Svelte is smart enough to know, that this may change many times in one instant. -->
<!-- And so this correctly only updates once when needed. -->
{#key rerender}
    <div
        class="grid"
        style="grid-template-columns: repeat({width}, 1fr); grid-template-rows: repeat({height}, 1fr);"
    >
        {#if game}
            {#each game.tiles as tile}
                <button
                    class="
                        w-8 h-8
                        text-white font-alagard font-bold
                        {((game.state == 'lost' && tile.isMine) || tile.state == 'flagged') ? 'text-lg' : 'text-2xl'}
                        {tile.state == 'uncovered' ? `text-nearby-${tile.minesNearby}` : ''}
                        bg-zinc-800 outline-4 -outline-offset-4 [outline-style:outset] outline-zinc-700
                        cursor-default
                    "
                    class:uncovered={tile.state == 'uncovered'}
                    class:clickable={
                        game.state == 'playing' &&
                        (
                            tile.state == 'flagged' ||
                            tile.state == 'covered' ||
                            (
                                tile.minesNearby > 0 &&
                                game.tilesPattern(tile.x, tile.y).some(tile => tile.state == 'covered') &&
                                tile.minesNearby == game.tilesPattern(tile.x, tile.y).reduce((flagged, tile) => tile.state == 'flagged' ? flagged + 1 : flagged, 0)
                            )
                        )
                    }
                    title="x{tile.x} y{tile.y}"
                    on:click={() => {
                        if(game?.state != 'playing') return;
                        game?.uncover(tile.x, tile.y);
                    }}
                    on:contextmenu={ev => {
                        if(game?.state != 'playing') return;
                        ev.preventDefault();
                        game?.toggleFlag(tile.x, tile.y);
                    }}
                >
                    {#if tile.state == 'flagged'}
                        🚩
                    {:else if tile.state == 'uncovered'}
                        {#if tile.isMine}
                            💥
                        {:else}
                            {tile.minesNearby || ''}
                        {/if}
                    {:else}
                        {#if game.state == 'lost' && tile.isMine}
                            💣
                        {/if}
                    {/if}
                </button>
            {/each}
        {:else}
            {#each new Array(height).fill(0).map((_, i) => i) as y}
                {#each new Array(width).fill(0).map((_, i) => i) as x}
                    <button
                        class="
                            w-8 h-8
                            bg-zinc-800 outline-4 -outline-offset-4 [outline-style:outset] outline-zinc-700
                        "
                        on:click={() => {
                            generateGame(x, y);
                        }}
                    />
                {/each}
            {/each}
        {/if}
    </div>
{/key}