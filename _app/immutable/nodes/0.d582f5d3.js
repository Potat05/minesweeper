import{s as w,c as C,u as x,g as S,d as B,o as A}from"../chunks/scheduler.0298b666.js";import{S as E,i as F,g as d,e as k,s as $,x as L,h as y,y as _,f as u,c as M,k as v,z as b,a as p,d as P,t as T}from"../chunks/index.1d5e33a4.js";function q(r){let e,t=`:root {
                
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

            }`;return{c(){e=d("style"),e.textContent=t},l(o){e=y(o,"STYLE",{"data-svelte-h":!0}),_(e)!=="svelte-63lz1d"&&(e.textContent=t)},m(o,s){p(o,e,s)},d(o){o&&u(e)}}}function Y(r){let e,t=`:root {
                
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

            }`;return{c(){e=d("style"),e.textContent=t},l(o){e=y(o,"STYLE",{"data-svelte-h":!0}),_(e)!=="svelte-1qhapu2"&&(e.textContent=t)},m(o,s){p(o,e,s)},d(o){o&&u(e)}}}function j(r){let e,t,o=`body {
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

    `,s,f,c;function g(n,i){if(n[0]=="light")return Y;if(n[0]=="dark")return q}let m=g(r),a=m&&m(r);const h=r[2].default,l=C(h,r,r[1],null);return{c(){e=d("meta"),t=d("style"),t.textContent=o,a&&a.c(),s=k(),f=$(),l&&l.c(),this.h()},l(n){const i=L("svelte-1ig484e",document.head);e=y(i,"META",{name:!0,content:!0}),t=y(i,"STYLE",{"data-svelte-h":!0}),_(t)!=="svelte-1skjscq"&&(t.textContent=o),a&&a.l(i),s=k(),i.forEach(u),f=M(n),l&&l.l(n),this.h()},h(){document.title="Minesweeper",v(e,"name","description"),v(e,"content","Minesweeper clone built in Svelte.")},m(n,i){b(document.head,e),b(document.head,t),a&&a.m(document.head,null),b(document.head,s),p(n,f,i),l&&l.m(n,i),c=!0},p(n,[i]){m!==(m=g(n))&&(a&&a.d(1),a=m&&m(n),a&&(a.c(),a.m(s.parentNode,s))),l&&l.p&&(!c||i&2)&&x(l,h,n,n[1],c?B(h,n[1],i,null):S(n[1]),null)},i(n){c||(P(l,n),c=!0)},o(n){T(l,n),c=!1},d(n){n&&u(f),u(e),u(t),a&&a.d(n),u(s),l&&l.d(n)}}}function z(r,e,t){let{$$slots:o={},$$scope:s}=e,f="light";return A(()=>{t(0,f=localStorage.getItem("theme")??"light")}),r.$$set=c=>{"$$scope"in c&&t(1,s=c.$$scope)},[f,s,o]}class D extends E{constructor(e){super(),F(this,e,z,j,w,{})}}export{D as component};
