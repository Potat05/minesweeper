import{s as o,n as i,o as l}from"../chunks/scheduler.0298b666.js";import{S as r,i as c,g as f,h as m,y,k as d,a as p,f as u}from"../chunks/index.1d5e33a4.js";const v=!0,x=Object.freeze(Object.defineProperty({__proto__:null,prerender:v},Symbol.toStringTag,{value:"Module"}));function w(n){let e,s='<div class="big-text svelte-w3ifyi">Minesweeper</div> <div class="difficulty-select svelte-w3ifyi"><div class="small-text svelte-w3ifyi">Select Difficulty</div> <a href="/minesweeper/play/beginner" class="svelte-w3ifyi"><button style="color: green;" tabindex="-1" class="svelte-w3ifyi">Beginner</button></a> <a href="/minesweeper/play/intermediate" class="svelte-w3ifyi"><button style="color: yellow;" tabindex="-1" class="svelte-w3ifyi">Intermediate</button></a> <a href="/minesweeper/play/expert" class="svelte-w3ifyi"><button style="color: red;" tabindex="-1" class="svelte-w3ifyi">Expert</button></a></div>';return{c(){e=f("div"),e.innerHTML=s,this.h()},l(t){e=m(t,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-11zeslh"&&(e.innerHTML=s),this.h()},h(){d(e,"class","main-menu svelte-w3ifyi")},m(t,a){p(t,e,a)},p:i,i,o:i,d(t){t&&u(e)}}}function g(n){return l(async()=>{const e=await fetch("/minesweeper/git_commit.txt",{cache:"no-store"});if(e.ok){const s=new TextDecoder().decode(await e.arrayBuffer()).trim();console.log(`%cRunning on commit:
${s}`,"color: cyan; font-size: 15px; font-weight: 900;")}else console.warn("%cFailed to fetch git commit.","color: yellow; font-size: 15px; font-weight: 900;")}),[]}class b extends r{constructor(e){super(),c(this,e,g,w,o,{})}}export{b as component,x as universal};
