<script lang="ts">
    import { onMount } from "svelte";



    enum GameState {
        Waiting,
        Generated,
        Won,
        Lost
    }

    let state: GameState = GameState.Waiting;

    export let width: number = 30;
    export let height: number = 16;
    export let numMines: number = 99;



    enum TileType {
        Covered,
        Open,
        Flagged
    }

    type Tile = {
        x: number;
        y: number;
        isMine: boolean;
        type: TileType;
    }

    let tiles: Tile[] = [];

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

        state = GameState.Generated;

    }



    function tileReveal(x: number, y: number): void {

        if(state == GameState.Waiting) {
            generateBoard(x, y);
        }

        if(state != GameState.Generated) return;

        if(get(x, y).type == TileType.Flagged) return;
        
        if(get(x, y).type == TileType.Covered) {

            get(x, y).type = TileType.Open;

            if(get(x, y).isMine) {
                state = GameState.Lost;
                return;
            }
    
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

        if(state != GameState.Generated) return;

        const tile = get(x, y);

        if(tile.type == TileType.Open) return;
        tile.type = (tile.type == TileType.Covered) ? TileType.Flagged : TileType.Covered;

        if(numFlaggedMines() == numMines) {
            state = GameState.Won;
        }

    }



    function numFlaggedMines(): number {
        return tiles.reduce((count, tile) => {
            return (tile.isMine && tile.type == TileType.Flagged) ? ++count : count;
        }, 0);
    }



    function reset(): void {
        state = GameState.Waiting;
        tilesEmpty();
    }

    onMount(() => {

        state = GameState.Waiting;
        tiles = new Array(width * height);
        tilesEmpty();

    });

</script>

<style>

    .game {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: #C6C6C6;
        outline: 6px outset #FFFFFF;
        outline-offset: -6px;
        padding: 12px;
        gap: 6px;

        width: fit-content;
    }


    .toparea {
        display: flex;
        justify-content: center;
        align-items: center;
        
        background-color: #C6C6C6;
        outline: 6px inset #FFFFFF;
        outline-offset: -6px;
        padding: 12px;
        width: calc(100% - 24px);
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 48px;
        height: 48px;

        background-color: #C6C6C6;
        outline: 4px outset #FFFFFF;
        outline-offset: -4px;

        font-size: x-large;
    }

    .button:active {
        outline-style: inset;
    }

    .button:hover {
        background-color: #ABABAB;
    }


    .board {
        display: grid;

        width: fit-content;

        background-color: #C6C6C6;
        outline: 6px inset #FFFFFF;
        outline-offset: -6px;
        padding: 6px;
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
    }

    .opened {
        outline: 2px solid #ABABAB;
        outline-offset: -2px;

        cursor: default;

        font-family: 'Alagard';
        font-size: x-large;
        font-weight: 900;
    }

    .mines-nearby-1::before { content: "1"; color: blue; }
    .mines-nearby-2::before { content: "2"; color: green; }
    .mines-nearby-3::before { content: "3"; color: red; }
    .mines-nearby-4::before { content: "4"; color: darkblue; }
    .mines-nearby-5::before { content: "5"; color: darkred; }
    .mines-nearby-6::before { content: "6"; color: teal; }
    .mines-nearby-7::before { content: "7"; color: black; }
    .mines-nearby-8::before { content: "8"; color: gray; }

    .flagged::before {
        content: "🚩";
    }

    .exploded::before {
        content: "💥";
    }

</style>

<div class="game">

    <div class="toparea">
        <button
            class="button"
            on:click={reset}
        >😊</button>
    </div>

    <div
        class="board"
        style="grid-template-columns: repeat({width}, 1fr); grid-template-rows: repeat({height}, 1fr);"
    >

        {#each tiles as tile}

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="tile{tile.type == TileType.Open ? ` mines-nearby-${minesNearby(tile.x, tile.y)}` : ''}"
                class:opened={tile.type == TileType.Open}
                class:flagged={tile.type == TileType.Flagged}
                class:exploded={tile.isMine && tile.type == TileType.Open}
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
            />
                
        {/each}
        
    </div>

</div>