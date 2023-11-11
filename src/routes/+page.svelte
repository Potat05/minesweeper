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

<div class="flex flex-col items-center gap-2 bg-zinc-900 outline-[6px] [outline-style:outset] outline-offset-[-6px] outline-zinc-600 w-fit p-5">
    <span class="font-alagard text-titlecolor text-4xl font-semibold">Minesweeper</span>
    <div class="flex flex-col items-center gap-4">
        <div class="font-pixelsans text-zinc-200">Select Difficulty</div>
        <a href="/minesweeper/play/beginner" class="w-full">
            <button class="font-pixelsans text-green-500 outline-4 [outline-style:outset] outline-zinc-600 p-2 w-full" tabindex="-1">Beginner</button>
        </a>
        <a href="/minesweeper/play/intermediate" class="w-full">
            <button class="font-pixelsans text-yellow-400 outline-4 [outline-style:outset] outline-zinc-600 p-2 w-full" tabindex="-1">Intermediate</button>
        </a>
        <a href="/minesweeper/play/expert" class="w-full">
            <button class="font-pixelsans text-red-500 outline-4 [outline-style:outset] outline-zinc-600 p-2 w-full" tabindex="-1">Expert</button>
        </a>
    </div>
</div>
