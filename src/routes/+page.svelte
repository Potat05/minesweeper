<script lang="ts">
    import { MineSweeper, TileState } from "$lib/minesweeper";
    import { onMount } from "svelte";

    let game: MineSweeper;

    let rerender: number = 0;

    onMount(() => {
        
        game = new MineSweeper(30, 16, 99);

        game.addEventListener('open', () => {
            rerender++;
        });

        game.addEventListener('lose', () => {
            // Stupid workaround until this is fixed.
            location.reload();
            // game = new MineSweeper(30, 16, 99);
            // rerender++;
        });

    });

</script>

<style>

    .board {
        display: grid;

        width: fit-content;
    }

    .tile {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 32px;
        height: 32px;

        background-color: #C6C6C6;
        outline: 4px outset #FFFFFF;
        outline-offset: -4px;

        cursor: pointer;

        font-family: 'Alagard';
        font-size: large;
    }

    .opened {
        outline: 2px solid #ABABAB;
        outline-offset: -2px;

        cursor: default;
    }

</style>

{#if game}

    {#key rerender}

        <div class="board" style="grid-template-columns: repeat({game.width}, 1fr); grid-template-rows: repeat({game.height}, 1fr);">

            {#each game.tiles as tile}

                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div
                    class="tile x{tile.x} y{tile.y}"
                    class:opened={tile.state == TileState.Open}
                    on:click={ev => {
                        ev.preventDefault();
                        tile.open();
                    }}
                    on:contextmenu={ev => {
                        ev.preventDefault();
                        if(tile.state == TileState.Open) return;
                        tile.state = (tile.state == TileState.Covered) ? TileState.Flagged : TileState.Covered;
                    }}
                >
                    {#if tile.state == TileState.Open}
                        {#if tile.isMine}
                            💥
                        {:else if tile.minesNearby > 0}
                            {tile.minesNearby}
                        {/if}
                    {:else if tile.state == TileState.Flagged}
                        🚩
                    {/if}
                </div>

            {/each}

        </div>

    {/key}

{/if}
