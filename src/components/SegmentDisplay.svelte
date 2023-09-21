<script lang="ts">

    export let minDigits: number = 3;
    export let maxDigits: number = 3;
    export let number: number;

    $: digits = Math.floor(number).toString().padStart(minDigits, '0').split('').slice(-maxDigits).map(Number);

    const DIGIT_SEGMENT_MAP: [ boolean, boolean, boolean, boolean, boolean, boolean, boolean ][] = [
        [ true, true, true, true, true, true, false ],
        [ false, true, true, false, false, false, false ],
        [ true, true, false, true, true, false, true ],
        [ true, true, true, true, false, false, true ],
        [ false, true, true, false, false, true, true ],
        [ true, false, true, true, false, true, true ],
        [ true, false, true, true, true, true, true ],
        [ true, true, true, false, false, false, false ],
        [ true, true, true, true, true, true, true ],
        [ true, true, true, true, false, true, true ]
    ];

</script>

<style>

    .segment {
        background-color: black;

        fill: url(#off-fill);
        stroke: black;
        stroke-width: 0.25;

        height: inherit;
        width: inherit;
    }

    .on {
        fill: red;
    }

</style>

{#each digits as digit}
    
    <svg xmlns="http://www.w3.org/2000/svg" width="192" height="320" viewBox="-1 -1 12 20" class="segment">
        <defs>
            <pattern
                id="off-fill"
                width="1"
                height="1"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(10)"
            >
                <line stroke="#800" stroke-width="1px" y2="1"/>
        </pattern>
        </defs>
        <path class:on={DIGIT_SEGMENT_MAP[digit][0]} d="M1 1l1-1h6l1 1-1 1H2z"/>
        <path class:on={DIGIT_SEGMENT_MAP[digit][1]} d="M9 1l1 1v6L9 9 8 8V2z"/>
        <path class:on={DIGIT_SEGMENT_MAP[digit][2]} d="M9 9l1 1v6l-1 1-1-1v-6z"/>
        <path class:on={DIGIT_SEGMENT_MAP[digit][3]} d="M9 17l-1 1H2l-1-1 1-1h6z"/>
        <path class:on={DIGIT_SEGMENT_MAP[digit][4]} d="M1 17l-1-1v-6l1-1 1 1v6z"/>
        <path class:on={DIGIT_SEGMENT_MAP[digit][5]} d="M1 9L0 8V2l1-1 1 1v6z"/>
        <path class:on={DIGIT_SEGMENT_MAP[digit][6]} d="M1 9l1-1h6l1 1-1 1H2z"/>
    </svg>

{/each}
