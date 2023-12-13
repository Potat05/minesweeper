<script lang="ts">
    import { Timer } from "$lib/Timer";
    import Minesweeper from "../components/Minesweeper.svelte";
    import SegmentDisplay from "./SegmentDisplay.svelte";

    export let width: number = 30;
    export let height: number = 16;
    export let numMines = 99;

    let state: 'waiting' | 'playing' | 'ended' = 'waiting';
    let timer: Timer = new Timer(1000);
    let currentTime: number = 0;
    timer.addEventListener('tick', time => {
        currentTime = time;
    });

    $: state, (function() {
        if(state == 'playing') {
            timer.start();
        } else if(state == 'ended') {
            timer.stop();
        } else if(state == 'waiting') {
            timer.stop();
            currentTime = 0;
        }
    })();

    let toBeFlagged: number = 0;

</script>

<div>
    <div class="flex justify-center h-16 w-max">
        <div class="flex">
            <SegmentDisplay number={toBeFlagged} />
        </div>
        <div class="flex">
            <SegmentDisplay number={Math.floor(currentTime / 1000)} />
        </div>
    </div>
    
    <Minesweeper
        {width} {height} {numMines}
        on:statechange={ev => {
            console.log(ev);
            if(ev.detail.state == 'playing') {
                state = 'playing';
            } else if(ev.detail.state == 'won' || ev.detail.state == 'lost') {
                state = 'ended';
            }
        }}
        on:tilechange={ev => {
            toBeFlagged = ev.detail.game.numMines - ev.detail.game.numFlags;
        }}
    />
</div>
