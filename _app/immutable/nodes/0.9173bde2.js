import{s as h,c as _,u as g,g as y,d as w}from"../chunks/scheduler.bc760b9c.js";import{S as v,i as x,g as m,s as S,x as $,h as u,y as C,f,c as b,k as d,z as p,a as k,d as P,t as E}from"../chunks/index.b6611d32.js";function M(l){let n,s,r=`body {
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
        }`,i,o;const c=l[1].default,t=_(c,l,l[0],null);return{c(){n=m("meta"),s=m("style"),s.textContent=r,i=S(),t&&t.c(),this.h()},l(e){const a=$("svelte-anxrlp",document.head);n=u(a,"META",{name:!0,content:!0}),s=u(a,"STYLE",{"data-svelte-h":!0}),C(s)!=="svelte-12pu5aw"&&(s.textContent=r),a.forEach(f),i=b(e),t&&t.l(e),this.h()},h(){document.title="Minesweeper",d(n,"name","description"),d(n,"content","Minesweeper clone built in Svelte.")},m(e,a){p(document.head,n),p(document.head,s),k(e,i,a),t&&t.m(e,a),o=!0},p(e,[a]){t&&t.p&&(!o||a&1)&&g(t,c,e,e[0],o?w(c,e[0],a,null):y(e[0]),null)},i(e){o||(P(t,e),o=!0)},o(e){E(t,e),o=!1},d(e){e&&f(i),f(n),f(s),t&&t.d(e)}}}function A(l,n,s){let{$$slots:r={},$$scope:i}=n;return l.$$set=o=>{"$$scope"in o&&s(0,i=o.$$scope)},[i,r]}class j extends v{constructor(n){super(),x(this,n,A,M,h,{})}}export{j as component};
