import{s as x,c as C,u as w,g as S,d as B,o as A}from"../chunks/scheduler.0298b666.js";import{S as E,i as F,g as m,e as k,s as $,x as L,h,y as g,f as u,c as M,k as v,z as p,a as y,d as P,t as T}from"../chunks/index.1d5e33a4.js";function q(r){let t,n=`:root {
                
                --background-color: #2B2B2B;
                --outline: outset #000000;
                --text-color: #EEE;
                --button-hover: #606060;
                --outline-flat: solid #808080;

            }`;return{c(){t=m("style"),t.textContent=n},l(o){t=h(o,"STYLE",{"data-svelte-h":!0}),g(t)!=="svelte-137k3zq"&&(t.textContent=n)},m(o,s){y(o,t,s)},d(o){o&&u(t)}}}function Y(r){let t,n=`:root {
                
                --background-color: #C6C6C6;
                --outline: outset #FFFFFF;
                --text-color: #222;
                --button-hover: #ABABAB;
                --outline-flat: solid #ABABAB;

            }`;return{c(){t=m("style"),t.textContent=n},l(o){t=h(o,"STYLE",{"data-svelte-h":!0}),g(t)!=="svelte-x6x6p6"&&(t.textContent=n)},m(o,s){y(o,t,s)},d(o){o&&u(t)}}}function j(r){let t,n,o=`body {
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

    `,s,c,f;function b(e,i){if(e[0]=="light")return Y;if(e[0]=="dark")return q}let d=b(r),l=d&&d(r);const _=r[2].default,a=C(_,r,r[1],null);return{c(){t=m("meta"),n=m("style"),n.textContent=o,l&&l.c(),s=k(),c=$(),a&&a.c(),this.h()},l(e){const i=L("svelte-18uap7l",document.head);t=h(i,"META",{name:!0,content:!0}),n=h(i,"STYLE",{"data-svelte-h":!0}),g(n)!=="svelte-1skjscq"&&(n.textContent=o),l&&l.l(i),s=k(),i.forEach(u),c=M(e),a&&a.l(e),this.h()},h(){document.title="Minesweeper",v(t,"name","description"),v(t,"content","Minesweeper clone built in Svelte.")},m(e,i){p(document.head,t),p(document.head,n),l&&l.m(document.head,null),p(document.head,s),y(e,c,i),a&&a.m(e,i),f=!0},p(e,[i]){d!==(d=b(e))&&(l&&l.d(1),l=d&&d(e),l&&(l.c(),l.m(s.parentNode,s))),a&&a.p&&(!f||i&2)&&w(a,_,e,e[1],f?B(_,e[1],i,null):S(e[1]),null)},i(e){f||(P(a,e),f=!0)},o(e){T(a,e),f=!1},d(e){e&&u(c),u(t),u(n),l&&l.d(e),u(s),a&&a.d(e)}}}function z(r,t,n){let{$$slots:o={},$$scope:s}=t,c="light";return A(()=>{n(0,c=localStorage.getItem("theme")??"light")}),r.$$set=f=>{"$$scope"in f&&n(1,s=f.$$scope)},[c,s,o]}class D extends E{constructor(t){super(),F(this,t,z,j,x,{})}}export{D as component};
