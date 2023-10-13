<script lang="ts">
    import { onMount } from "svelte";

    let theme = 'light';

    onMount(() => {
        theme = localStorage.getItem('theme') ?? 'light';
    });

</script>

<svelte:head>

    <title>Minesweeper</title>

    <meta
        name="description"
        content="Minesweeper clone built in Svelte."
    />

    <style>

        body {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 100vw;
            height: 100vh;

            margin: 0px;

            background-color: var(--background-color);
        }

        @font-face {
            font-family: 'Alagard';
            font-style: normal;
            font-weight: 400;
            src: url('/minesweeper/fonts/alagard.ttf') format('truetype');

            font-smooth: never;
            -webkit-font-smoothing: none;
            text-rendering: geometricPrecision;

            font-display: swap;
        }

        @font-face {
            font-family: 'Pixel Sans Serif';
            font-style: normal;
            font-weight: 400;
            src: url('/minesweeper/fonts/Pixel Sans Serif.ttf') format('truetype');

            font-smooth: never;
            -webkit-font-smoothing: none;
            text-rendering: geometricPrecision;

            font-display: swap;
        }

    </style>

    {#if theme == 'light'}

        <style>
            :root {
                
                --background-color: #C6C6C6;
                --outline: outset #FFFFFF;
                --text-color: #222;
                --button-hover: #ABABAB;
                --outline-flat: solid #ABABAB;

                --mines-nearby-1: blue;
                --mines-nearby-2: green;
                --mines-nearby-3: red;
                --mines-nearby-4: darkblue;
                --mines-nearby-5: darkred;
                --mines-nearby-6: teal;
                --mines-nearby-7: black;
                --mines-nearby-8: gray;

                --focus-outline: dotted black;

            }
        </style>

    {:else if theme == 'dark'}

        <style>
            :root {
                
                --background-color: #2B2B2B;
                --outline: outset #000000;
                --text-color: #EEE;
                --button-hover: #606060;
                --outline-flat: solid #414141;

                --mines-nearby-1: cyan;
                --mines-nearby-2: lime;
                --mines-nearby-3: hotpink;
                --mines-nearby-4: dodgerblue;
                --mines-nearby-5: red;
                --mines-nearby-6: teal;
                --mines-nearby-7: white;
                --mines-nearby-8: black;

                --focus-outline: dotted white;

            }
        </style>

    {/if}

</svelte:head>

<slot />
