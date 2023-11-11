<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import SegmentDisplay from "./SegmentDisplay.svelte";
    import { Timer } from "../lib/Timer";



    enum GameState {
        Waiting,
        Generated,
        Won,
        Lost
    }

    let state: GameState = GameState.Waiting;

    export let width: number;
    export let height: number;
    export let numMines: number;

    let flagsLeft: number = 0;



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

    function hasCoveredTilesNearby(x: number, y: number): boolean {
        for(const tile of checkPatternIter(x, y)) {
            if(tile.type == TileType.Covered) return true;
        }
        return false;
    }



    function generateBoard(safeX: number, safeY: number): void {

        if(tiles.length - 9 <= numMines) {
            throw new Error('Too many mines for board, cannot generate board.');
        }

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
        start();

    }

    function checkWin(): void {

        if(state != GameState.Generated) return;

        const numFlaggedMines = tiles.reduce((count, tile) => {
            return (tile.isMine && tile.type == TileType.Flagged) ? ++count : count;
        }, 0);

        if(
            numFlaggedMines == numMines &&
            flagsLeft == 0 &&
            tiles.every(tile => tile.type == TileType.Flagged || tile.type == TileType.Open)
        ) {
            state = GameState.Won;
            stop();
        }

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
                stop();
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



        checkWin();

    }

    function tileFlag(x: number, y: number): void {

        if(state != GameState.Generated) return;

        const tile = get(x, y);

        if(tile.type == TileType.Open) return;
        tile.type = (tile.type == TileType.Covered) ? TileType.Flagged : TileType.Covered;


        const numFlags = tiles.reduce((count, tile) => {
            return tile.type == TileType.Flagged ? ++count : count;
        }, 0);

        flagsLeft = numMines - numFlags;


        
        checkWin();

    }





    let currentTime: number = 0;
    let timer: Timer = new Timer(1000);

    timer.addEventListener('tick', time => {
        currentTime = Math.floor(time / 1000);
    });

    function start(): void {
        timer.start();
    }

    function stop(): void {
        timer.stop();
    }

    function reset(): void {
        state = GameState.Waiting;
        tilesEmpty();
        flagsLeft = numMines;
        stop();
        currentTime = 0;
    }

    onMount(() => {
        reset();
    });

    onDestroy(() => {
        stop();
    });

</script>

<svelte:head>

    {#key currentTime}
        {#if state == GameState.Waiting}
            <title>Minesweeper</title>
        {:else if state == GameState.Generated}
            <title>Minesweeper - ⏱ {Math.floor(currentTime / 60).toString().padStart(2, '0')}:{(currentTime % 60).toString().padStart(2, '0')} - 🚩 {flagsLeft}</title>
        {:else if state == GameState.Won}
            <title>Minesweeper - Victory - ⏱ {Math.floor(currentTime / 60).toString().padStart(2, '0')}:{(currentTime % 60).toString().padStart(2, '0')}</title>
        {:else if state == GameState.Lost}
            <title>Minesweeper - Lost</title>
        {/if}
    {/key}

</svelte:head>

<style lang="scss">

    .opened {
        outline: 2px solid theme('colors.zinc.800');
        outline-offset: -2px;
    }

    .mines-nearby-1::before { content: "1" !important; color: cyan; }
    .mines-nearby-2::before { content: "2" !important; color: lime; }
    .mines-nearby-3::before { content: "3" !important; color: hotpink; }
    .mines-nearby-4::before { content: "4" !important; color: dodgerblue; }
    .mines-nearby-5::before { content: "5" !important; color: red; }
    .mines-nearby-6::before { content: "6" !important; color: teal; }
    .mines-nearby-7::before { content: "7" !important; color: white; }
    .mines-nearby-8::before { content: "8" !important; color: black; }

    .displayMine::before {
        content: "💣" !important;
        font-size: large;
    }

    .exploded::before {
        content: "💥" !important;
    }

    .flagged::before {
        content: "🚩" !important;
        font-size: large;
    }

</style>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="flex flex-col items-center gap-2 p-3 w-fit border-4 [border-style:outset] border-zinc-600"
>

    <div class="flex justify-between items-center p-3 w-full bg-zinc-900 border-4 [border-style:outset] border-zinc-600">
        <div class="h-11 m-1 flex outline-2 [outline-style:outset] outline-zinc-600">
            <SegmentDisplay minDigits={3} maxDigits={Infinity} bind:number={flagsLeft}/>
        </div>
        <button
            class="flex justify-center items-center w-12 h-12 bg-zinc-900 border-4 [border-style:outset] border-zinc-600 text-2xl active:[border-style:inset] hover:bg-zinc-800"
            on:click={reset}
        >
            {
                state == GameState.Won ? '😎' :
                state == GameState.Lost ? '😵' :
                '😊'
            }
        </button>
        <div class="h-11 m-1 flex outline-2 [outline-style:outset] outline-zinc-600">
            <SegmentDisplay minDigits={3} maxDigits={Infinity} bind:number={currentTime}/>
        </div>
    </div>

    <div
        class="grid w-fit bg-zinc-900 border-4 [border-style:outset] border-zinc-600"
        style:grid-template-columns={`repeat(${width}, 1fr)`}
        style:grid-template-rows={`repeat(${height}, 1fr)`}
    >

        {#each tiles as tile}

            {#if state == GameState.Waiting || (state == GameState.Generated && (
                    tile.type != TileType.Open ||
                    (hasCoveredTilesNearby(tile.x, tile.y) && minesNearby(tile.x, tile.y) == flagsNearby(tile.x, tile.y))
                )
            )}

                <button
                    class="
                        flex justify-center items-center w-8 h-8 font-alagard font-extrabold text-2xl bg-zinc-900 outline-4 [outline-style:outset] outline-zinc-600 -outline-offset-4
                        {tile.type == TileType.Open ? ` mines-nearby-${minesNearby(tile.x, tile.y)}` : ''}
                    "
                    class:opened={tile.type == TileType.Open}
                    class:flagged={tile.type == TileType.Flagged}
                    class:exploded={tile.isMine && tile.type == TileType.Open}
                    title="x{tile.x} y{tile.y}{tile.type == TileType.Open ? ` - ${minesNearby(tile.x, tile.y)} Nearby` : (tile.type == TileType.Flagged ? ' - Flagged' : '')}"
                    on:click={ev => {
                        if(state != GameState.Waiting && state != GameState.Generated) return;
                        ev.preventDefault();

                        tileReveal(tile.x, tile.y);
                        tile = get(tile.x, tile.y);
                    }}
                    on:contextmenu={ev => {
                        if(state != GameState.Generated) return;
                        ev.preventDefault();

                        tileFlag(tile.x, tile.y);
                        tile = get(tile.x, tile.y);
                    }}
                    on:keydown={ev => {
                        if(state != GameState.Generated) return;
                        if(ev.code != 'KeyF') return;
                        ev.preventDefault();

                        tileFlag(tile.x, tile.y);
                        tile = get(tile.x, tile.y);
                    }}
                />

            {:else}
        
                <div
                    class="
                        flex justify-center items-center w-8 h-8 font-alagard font-extrabold text-2xl bg-zinc-900 outline-4 [outline-style:outset] outline-zinc-600 -outline-offset-4
                        {tile.type == TileType.Open ? ` mines-nearby-${minesNearby(tile.x, tile.y)}` : ''}
                    "
                    class:opened={tile.type == TileType.Open}
                    class:flagged={tile.type == TileType.Flagged}
                    class:exploded={tile.isMine && tile.type == TileType.Open}
                    class:displayMine={state == GameState.Lost && tile.isMine}
                    title="x{tile.x} y{tile.y}{tile.type == TileType.Open ? ` - ${minesNearby(tile.x, tile.y)} Nearby` : (tile.type == TileType.Flagged ? ' - Flagged' : '')}"
                />
        
            {/if}

        {/each}

    </div>

</div>