
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

            background-color: #C6C6C6;
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
</svelte:head>

<slot />