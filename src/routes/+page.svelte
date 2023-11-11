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

<style lang="scss">

    .text-titlecolor {
        background: linear-gradient(45deg,rgba(241,0,255,1) 1%,rgb(35, 35, 204) 49%,rgba(0,212,255,1) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

</style>

<div class="flex flex-col items-center gap-2 bg-zinc-900 w-fit p-5 border-4 [border-style:outset] border-zinc-600">
    <span class="font-alagard text-titlecolor text-4xl font-semibold">Minesweeper</span>
    <div class="flex flex-col items-center gap-4">
        <div class="font-pixelsans text-zinc-200">Play Difficulty</div>
        <a href="/minesweeper/play/beginner" class="w-full">
            <button class="font-pixelsans text-xl text-green-500  p-2 w-full border-4 [border-style:outset] border-zinc-600 active:[outline-style:inset] hover:bg-zinc-800" tabindex="-1">Beginner</button>
        </a>
        <a href="/minesweeper/play/intermediate" class="w-full">
            <button class="font-pixelsans text-xl text-yellow-300  p-2 w-full border-4 [border-style:outset] border-zinc-600 active:[outline-style:inset] hover:bg-zinc-800" tabindex="-1">Intermediate</button>
        </a>
        <a href="/minesweeper/play/expert" class="w-full">
            <button class="font-pixelsans text-xl text-red-500  p-2 w-full border-4 [border-style:outset] border-zinc-600 active:[outline-style:inset] hover:bg-zinc-800" tabindex="-1">Expert</button>
        </a>
    </div>
</div>
