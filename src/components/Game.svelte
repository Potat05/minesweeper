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

</script>

<SegmentDisplay number={Math.floor(currentTime / 1000)} />

<Minesweeper
    {width} {height} {numMines}
    on:statechange={ev => {
        if(ev.detail == 'playing') {
            state = 'playing';
        } else if(ev.detail == 'won' || ev.detail == 'lost') {
            state = 'ended';
        }
    }}
/>
