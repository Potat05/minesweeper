<script lang="ts">
    import { onMount } from "svelte";
    import Board from "../../components/Board.svelte";

    let width: number = 30;
    let height: number = 16;
    let numMines: number;
    
    let mounted: boolean = false;

    onMount(() => {

        const urlParams = new URLSearchParams(window.location.search);

        const size = urlParams.get('size');
        if(size) {
            [ width, height ] = size.split('x').map(Number).map(Math.floor);
        }

        const mines = urlParams.get('mines');
        if(mines) {
            numMines = Math.floor(Number(mines));
        }

        if(numMines === undefined) {
            numMines = Math.floor((width * height) * 0.20);
        }

        mounted = true;

    });

</script>

{#if mounted}
    <Board {width} {height} {numMines} />
{/if}
