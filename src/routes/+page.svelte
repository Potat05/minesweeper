<script lang="ts">
    import { Minesweeper } from "$lib/minesweeper";
    import { onDestroy, onMount } from "svelte";

    const width: number = 30;
    const height: number = 16;
    const numMines = 99;

    let game: Minesweeper | null = null;
    let container: HTMLDivElement;

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

        game.addEventListener('update', (x, y) => {
            rerender++;
        });

        game.uncover(startX, startY);

    }

    onDestroy(() => {
        if(game) {
            game.destroyDispatcher();
        }
    });

</script>

<!-- Svelte is smart enough to know, that this may change many times in one instant. -->
<!-- And so this correctly only updates once when needed. -->
{#key rerender}
    <div
        bind:this={container}
        class="grid"
        style="grid-template-columns: repeat({width}, 1fr); grid-template-rows: repeat({height}, 1fr);"
    >
        {#if game}
            {#each game.tiles as tile}
                <button
                    class="
                        w-8 h-8
                        text-white text-2xl font-alagard
                        bg-zinc-800 outline-4 -outline-offset-4 [outline-style:outset] outline-zinc-800
                    "
                    title="x{tile.x} y{tile.y}"
                    on:click={() => {
                        game?.uncover(tile.x, tile.y);
                    }}
                    on:contextmenu={ev => {
                        ev.preventDefault();
                        game?.toggleFlag(tile.x, tile.y);
                    }}
                >
                    {#if tile.state == 'flagged'}
                        🚩
                    {:else if tile.state == 'uncovered'}
                        {#if tile.isMine}
                            💣
                        {:else}
                            {tile.minesNearby}
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
                            bg-zinc-800 outline-4 -outline-offset-4 [outline-style:outset] outline-zinc-800
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