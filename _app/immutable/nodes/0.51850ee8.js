import{s as c,c as u,u as _,g as d,d as m}from"../chunks/scheduler.bc760b9c.js";import{S as p,i as h,g as y,s as g,x as $,h as v,y as b,f as i,c as C,z as k,a as S,d as x,t as E}from"../chunks/index.b6611d32.js";function L(o){let a,f=`body {
            background-color: black;
        }

        @font-face {
            font-family: 'Alagard';
            font-style: normal;
            font-weight: 400;
            src: url('/fonts/alagard.ttf') format('truetype');
        }`,l,s;const r=o[1].default,e=u(r,o,o[0],null);return{c(){a=y("style"),a.textContent=f,l=g(),e&&e.c()},l(t){const n=$("svelte-vctx6k",document.head);a=v(n,"STYLE",{"data-svelte-h":!0}),b(a)!=="svelte-1aevj5h"&&(a.textContent=f),n.forEach(i),l=C(t),e&&e.l(t)},m(t,n){k(document.head,a),S(t,l,n),e&&e.m(t,n),s=!0},p(t,[n]){e&&e.p&&(!s||n&1)&&_(e,r,t,t[0],s?m(r,t[0],n,null):d(t[0]),null)},i(t){s||(x(e,t),s=!0)},o(t){E(e,t),s=!1},d(t){t&&i(l),i(a),e&&e.d(t)}}}function j(o,a,f){let{$$slots:l={},$$scope:s}=a;return o.$$set=r=>{"$$scope"in r&&f(0,s=r.$$scope)},[s,l]}class z extends p{constructor(a){super(),h(this,a,j,L,c,{})}}export{z as component};
