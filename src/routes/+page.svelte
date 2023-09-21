<script lang="ts">
    import Board from "../components/Board.svelte";

</script>

<svelte:head>

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

    </style>

</svelte:head>

<Board width={30} height={16} numMines={99} />
