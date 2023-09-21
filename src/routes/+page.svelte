<style>

    .main-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;

        background-color: #C6C6C6;
        outline: 6px outset #FFFFFF;
        outline-offset: -6px;
        padding: 12px;

        width: fit-content;
    }

    
    * {
        font-family: 'Pixel Sans Serif';
        font-size: small;
    }

    .big-text {
        font-family: 'Alagard';
        font-weight: 600;
        font-size: xx-large;

        background: linear-gradient(45deg, rgba(241,0,255,1) 1%, rgba(9,9,121,1) 49%, rgba(0,212,255,1) 100%);;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .small-text {
        font-size: large;

        color: #222;

        text-align: center;
    }

    .difficulty-select {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        
        background-color: #C6C6C6;
        outline: 6px inset #FFFFFF;
        outline-offset: -6px;
        padding: 12px;
    }

    .difficulty-select > * {
        width: 100%;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 48px;
        width: 100%;

        background-color: #C6C6C6;
        outline: 4px outset #FFFFFF;
        outline-offset: -4px;

        font-size: x-large;

        cursor: pointer;
    }

    button:active {
        outline-style: inset;
    }

    button:hover {
        background-color: #ABABAB;
    }

    a {
        text-decoration: none;
    }
    
</style>

<div class="main-menu">
    <div class="big-text">Minesweeper</div>
    <div class="difficulty-select">
        <div class="small-text">Select Difficulty</div>
        <a href="/minesweeper/play?size=8x8&mines=10">
            <button style="color: green;">Beginner</button>
        </a>
        <a href="/minesweeper/play?size=16x16&mines=40">
            <button style="color: yellow;">Intermediate</button>
        </a>
        <a href="/minesweeper/play?size=30x16&mines=99">
            <button style="color: red;">Expert</button>
        </a>
    </div>
</div>
