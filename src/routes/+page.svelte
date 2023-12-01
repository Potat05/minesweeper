<script lang="ts">
    import { Minesweeper } from "$lib/minesweeper";
    import { onDestroy, onMount } from "svelte";

    let game: Minesweeper;
    let container: HTMLDivElement;

    // TODO: Instead of rerendering the entire board, only rerender the tiles that need.
    let rerender: number = 0;

    onMount(() => {
        console.clear();

        game = Minesweeper.generate({
            // width: 30,
            // height: 16,
            // numMines: 99,
            width: 8,
            height: 8,
            numMines: 10,
            forceZeroAtPos: { x: 0, y: 0 }
        });

        game.addEventListener('update', (x, y) => {
            rerender++;
        });

        console.log(game);

    });

    onDestroy(() => {
        if(game) {
            game.destroyDispatcher();
        }
    });

</script>

{#if game}
    <div class="flex flex-col gap-3 items-center">
        {#key rerender}
            <span class="text-white text-4xl font-pixelSans">{game.state}</span>
            <div
                bind:this={container}
                class="grid"
                style="grid-template-columns: repeat({game.width}, 1fr); grid-template-rows: repeat({game.height}, 1fr);"
            >
                {#each game.tiles as tile}
                    <button
                        class="
                            w-8 h-8
                            text-white text-2xl font-alagard
                            bg-zinc-800 outline-4 -outline-offset-4 [outline-style:outset] outline-zinc-800
                        "
                        title="x{tile.x} y{tile.y}"
                        on:click={() => {
                            game.uncover(tile.x, tile.y);
                        }}
                        on:contextmenu={ev => {
                            ev.preventDefault();
                            game.toggleFlag(tile.x, tile.y);
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
            </div>
        {/key}
    </div>
{/if}
