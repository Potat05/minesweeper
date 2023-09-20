<script lang="ts">
    import { onMount } from "svelte";


    let generated: boolean;

    export let width: number = 30;
    export let height: number = 16;
    export let numMines: number = 99;



    enum TileType {
        Covered = 1,
        Open = 2,
        Flagged = 3
    }

    type Tile = {
        x: number;
        y: number;
        isMine: boolean;
        type: TileType;
    }

    let tiles: Tile[];

    function get(x: number, y: number): Tile {
        if(x < 0 || x >= width || y < 0 || y >= height) return { x, y, isMine: false, type: TileType.Open };
        return tiles[x + y * width];
    }

    function tilesEmpty(): void {
        tiles = new Array(width * height);
        for(let x = 0; x < width; x++) {
            for(let y = 0; y < height; y++) {
                tiles[x + y * width] = { x, y, isMine: false, type: TileType.Covered };
            }
        }
    }
    

    const CHECK_PATTERN: { x: number, y: number }[] = [
        { x: 0, y: 0 },
        { x: -1, y: -1 },
        { x: 0, y: -1 },
        { x: 1, y: -1 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: 1 },
        { x: -1, y: 1 },
        { x: -1, y: 0 }
    ];

    function* checkPatternIter(x: number, y: number): Iterable<Tile> {
        for(const offset of CHECK_PATTERN) {
            yield get(x + offset.x, y + offset.y);
        }
    }



    function minesNearby(x: number, y: number): number {
        let count = 0;
        for(const tile of checkPatternIter(x, y)) {
            if(tile.isMine) count++;
        }
        return count;
    }

    function flagsNearby(x: number, y: number): number {
        let count = 0;
        for(const tile of checkPatternIter(x, y)) {
            if(tile.type == TileType.Flagged) count++;
        }
        return count;
    }



    function generateBoard(safeX: number, safeY: number): void {

        do {

            tilesEmpty();

            const validMinePlacements = [ ...tiles ];

            for(let i = 0; i < numMines; i++) {
                const ind = Math.floor(Math.random() * validMinePlacements.length);
                const tile = validMinePlacements.splice(ind, 1)[0];
                tile.isMine = true;
            }

        } while(minesNearby(safeX, safeY) > 0);

        generated = true;

    }



    function tileReveal(x: number, y: number): void {
        
        if(!generated) {
            generateBoard(x, y);
        }

        if(get(x, y).type == TileType.Flagged) return;
        
        if(get(x, y).type == TileType.Covered) {

            get(x, y).type = TileType.Open;
    
            if(minesNearby(x, y) == 0) {
                for(const tile of checkPatternIter(x, y)) {
                    tileReveal(tile.x, tile.y);
                }
            }

        } else if(get(x, y).type == TileType.Open) {

            if(minesNearby(x, y) == flagsNearby(x, y)) {
                for(const tile of checkPatternIter(x, y)) {
                    if(get(tile.x, tile.y).type == TileType.Covered) {
                        tileReveal(tile.x, tile.y);
                    }
                }
            }

        }

    }

    function tileFlag(x: number, y: number): void {

        if(!generated) {
            return;
        }

        const tile = get(x, y);

        if(tile.type == TileType.Open) return;
        tile.type = (tile.type == TileType.Covered) ? TileType.Flagged : TileType.Covered;

    }



    onMount(() => {

        generated = false;
        tiles = new Array(width * height);
        tilesEmpty();

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

{#if tiles}

    <div class="board" style="grid-template-columns: repeat({width}, 1fr); grid-template-rows: repeat({height}, 1fr);">

        {#each tiles as tile}

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="tile"
                class:opened={tile.type == TileType.Open}
                on:click={ev => {
                    ev.preventDefault();

                    tileReveal(tile.x, tile.y);
                    tile = get(tile.x, tile.y);
                }}
                on:contextmenu={ev => {
                    ev.preventDefault();

                    tileFlag(tile.x, tile.y);
                    tile = get(tile.x, tile.y);
                }}
            >
                {#if tile.type == TileType.Open}
                    {#if tile.isMine}
                        💥
                    {:else if minesNearby(tile.x, tile.y) > 0}
                        {minesNearby(tile.x, tile.y)}
                    {/if}
                {:else if tile.type == TileType.Flagged}
                    🚩
                {/if}
            </div>
                
        {/each}
        
    </div>

{/if}
