<script lang="ts">
    import { onMount } from "svelte";

    onMount(async () => {

        const commitReq = await fetch('/minesweeper/git_commit.txt', {
            cache: 'no-store'
        });

        if(commitReq.ok) {
            const commit = new TextDecoder().decode(await commitReq.arrayBuffer()).trim();
            console.log(`%cRunning on commit:\n${commit}`, 'color: cyan; font-size: 15px; font-weight: 900;');
        } else {
            console.warn('%cFailed to fetch git commit.', 'color: yellow; font-size: 15px; font-weight: 900;');
        }

    });

</script>

<style>

    .main-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;

        background-color: var(--background-color);
        outline: 6px var(--outline);
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

        color: var(--text-color);

        text-align: center;
    }

    .difficulty-select {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        
        background-color: var(--background-color);
        outline: 6px var(--outline);
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

        background-color: var(--background-color);
        outline: 4px var(--outline);
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

    a:focus-visible {
        content: '';
        outline: 1px var(--focus-outline);
        outline-offset: -2px;
    }

    a {
        text-decoration: none;
    }
    
</style>

<div class="main-menu">
    <div class="big-text">Minesweeper</div>
    <div class="difficulty-select">
        <div class="small-text">Select Difficulty</div>
        <a href="/minesweeper/play/beginner">
            <button style="color: green;" tabindex="-1">Beginner</button>
        </a>
        <a href="/minesweeper/play/intermediate">
            <button style="color: yellow;" tabindex="-1">Intermediate</button>
        </a>
        <a href="/minesweeper/play/expert">
            <button style="color: red;" tabindex="-1">Expert</button>
        </a>
    </div>
</div>
