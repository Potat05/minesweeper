import{s as re,n as G,b as fe,f as he,o as ye,r as Me}from"../chunks/scheduler.bc760b9c.js";import{S as ie,i as ae,e as ce,a as T,f as p,A as be,B as L,C as F,j as E,k as h,D as b,z as M,E as de,g as B,r as $,s as J,h as P,u as x,c as Q,l as Y,v as ee,F as te,d as ne,t as se,w as le,m as oe,n as ue,x as we,y as De}from"../chunks/index.b6611d32.js";function X(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}const Ee=!0,Pe=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ee},Symbol.toStringTag,{value:"Module"}));function me(t,e,s){const l=t.slice();return l[5]=e[s],l}function ge(t){let e,s,l,r,u,i,a,c,w,g,v;return{c(){e=L("svg"),s=L("defs"),l=L("pattern"),r=L("line"),u=L("path"),i=L("path"),a=L("path"),c=L("path"),w=L("path"),g=L("path"),v=L("path"),this.h()},l(_){e=F(_,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var d=E(e);s=F(d,"defs",{});var C=E(s);l=F(C,"pattern",{id:!0,width:!0,height:!0,patternUnits:!0,patternTransform:!0});var I=E(l);r=F(I,"line",{stroke:!0,"stroke-width":!0,y2:!0}),E(r).forEach(p),I.forEach(p),C.forEach(p),u=F(d,"path",{d:!0,class:!0}),E(u).forEach(p),i=F(d,"path",{d:!0,class:!0}),E(i).forEach(p),a=F(d,"path",{d:!0,class:!0}),E(a).forEach(p),c=F(d,"path",{d:!0,class:!0}),E(c).forEach(p),w=F(d,"path",{d:!0,class:!0}),E(w).forEach(p),g=F(d,"path",{d:!0,class:!0}),E(g).forEach(p),v=F(d,"path",{d:!0,class:!0}),E(v).forEach(p),d.forEach(p),this.h()},h(){h(r,"stroke","#800"),h(r,"stroke-width","1px"),h(r,"y2","1"),h(l,"id","off-fill"),h(l,"width","1"),h(l,"height","1"),h(l,"patternUnits","userSpaceOnUse"),h(l,"patternTransform","rotate(10)"),h(u,"d","M1 1l1-1h6l1 1-1 1H2z"),h(u,"class","svelte-n5l988"),b(u,"on",t[1][t[5]][0]),h(i,"d","M9 1l1 1v6L9 9 8 8V2z"),h(i,"class","svelte-n5l988"),b(i,"on",t[1][t[5]][1]),h(a,"d","M9 9l1 1v6l-1 1-1-1v-6z"),h(a,"class","svelte-n5l988"),b(a,"on",t[1][t[5]][2]),h(c,"d","M9 17l-1 1H2l-1-1 1-1h6z"),h(c,"class","svelte-n5l988"),b(c,"on",t[1][t[5]][3]),h(w,"d","M1 17l-1-1v-6l1-1 1 1v6z"),h(w,"class","svelte-n5l988"),b(w,"on",t[1][t[5]][4]),h(g,"d","M1 9L0 8V2l1-1 1 1v6z"),h(g,"class","svelte-n5l988"),b(g,"on",t[1][t[5]][5]),h(v,"d","M1 9l1-1h6l1 1-1 1H2z"),h(v,"class","svelte-n5l988"),b(v,"on",t[1][t[5]][6]),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"width","192"),h(e,"height","320"),h(e,"viewBox","-1 -1 12 20"),h(e,"class","segment svelte-n5l988")},m(_,d){T(_,e,d),M(e,s),M(s,l),M(l,r),M(e,u),M(e,i),M(e,a),M(e,c),M(e,w),M(e,g),M(e,v)},p(_,d){d&3&&b(u,"on",_[1][_[5]][0]),d&3&&b(i,"on",_[1][_[5]][1]),d&3&&b(a,"on",_[1][_[5]][2]),d&3&&b(c,"on",_[1][_[5]][3]),d&3&&b(w,"on",_[1][_[5]][4]),d&3&&b(g,"on",_[1][_[5]][5]),d&3&&b(v,"on",_[1][_[5]][6])},d(_){_&&p(e)}}}function ke(t){let e,s=X(t[0]),l=[];for(let r=0;r<s.length;r+=1)l[r]=ge(me(t,s,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=ce()},l(r){for(let u=0;u<l.length;u+=1)l[u].l(r);e=ce()},m(r,u){for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(r,u);T(r,e,u)},p(r,[u]){if(u&3){s=X(r[0]);let i;for(i=0;i<s.length;i+=1){const a=me(r,s,i);l[i]?l[i].p(a,u):(l[i]=ge(a),l[i].c(),l[i].m(e.parentNode,e))}for(;i<l.length;i+=1)l[i].d(1);l.length=s.length}},i:G,o:G,d(r){r&&p(e),be(l,r)}}}function ze(t,e,s){let l,{minDigits:r=3}=e,{maxDigits:u=3}=e,{number:i}=e;const a=[[!0,!0,!0,!0,!0,!0,!1],[!1,!0,!0,!1,!1,!1,!1],[!0,!0,!1,!0,!0,!1,!0],[!0,!0,!0,!0,!1,!1,!0],[!1,!0,!0,!1,!1,!0,!0],[!0,!1,!0,!0,!1,!0,!0],[!0,!1,!0,!0,!0,!0,!0],[!0,!0,!0,!1,!1,!1,!1],[!0,!0,!0,!0,!0,!0,!0],[!0,!0,!0,!0,!1,!0,!0]];return t.$$set=c=>{"minDigits"in c&&s(2,r=c.minDigits),"maxDigits"in c&&s(3,u=c.maxDigits),"number"in c&&s(4,i=c.number)},t.$$.update=()=>{t.$$.dirty&28&&s(0,l=Math.floor(i).toString().padStart(r,"0").split("").slice(-u).map(Number))},[l,a,r,u,i]}class pe extends ie{constructor(e){super(),ae(this,e,ze,ke,re,{minDigits:2,maxDigits:3,number:4})}}function _e(t,e,s){const l=t.slice();return l[28]=e[s],l[29]=e,l[30]=s,l}function je(t){let e;return{c(){e=oe("😵")},l(s){e=ue(s,"😵")},m(s,l){T(s,e,l)},d(s){s&&p(e)}}}function Ce(t){let e;return{c(){e=oe("😎")},l(s){e=ue(s,"😎")},m(s,l){T(s,e,l)},d(s){s&&p(e)}}}function Oe(t){let e;return{c(){e=oe("😊")},l(s){e=ue(s,"😊")},m(s,l){T(s,e,l)},d(s){s&&p(e)}}}function ve(t){let e,s,l,r;function u(...a){return t[16](t[28],t[29],t[30],...a)}function i(...a){return t[17](t[28],t[29],t[30],...a)}return{c(){e=B("div"),this.h()},l(a){e=P(a,"DIV",{class:!0}),E(e).forEach(p),this.h()},h(){h(e,"class",s="tile"+(t[28].type==t[7].Open?` mines-nearby-${t[9](t[28].x,t[28].y)}`:"")+" svelte-74z2jo"),b(e,"opened",t[28].type==t[7].Open),b(e,"flagged",t[28].type==t[7].Flagged),b(e,"exploded",t[28].isMine&&t[28].type==t[7].Open),b(e,"displayMine",t[2]==t[6].Lost&&t[28].isMine)},m(a,c){T(a,e,c),l||(r=[te(e,"click",u),te(e,"contextmenu",i)],l=!0)},p(a,c){t=a,c&16&&s!==(s="tile"+(t[28].type==t[7].Open?` mines-nearby-${t[9](t[28].x,t[28].y)}`:"")+" svelte-74z2jo")&&h(e,"class",s),c&144&&b(e,"opened",t[28].type==t[7].Open),c&144&&b(e,"flagged",t[28].type==t[7].Flagged),c&144&&b(e,"exploded",t[28].isMine&&t[28].type==t[7].Open),c&84&&b(e,"displayMine",t[2]==t[6].Lost&&t[28].isMine)},d(a){a&&p(e),l=!1,Me(r)}}}function Ie(t){let e,s,l,r,u,i,a,c,w,g,v,_,d,C,I,R;function Z(o){t[14](o)}let W={minDigits:3};t[3]!==void 0&&(W.number=t[3]),r=new pe({props:W}),fe.push(()=>de(r,"number",Z));function S(o,z){if(o[2]==o[6].Waiting||o[2]==o[6].Generated)return Oe;if(o[2]==o[6].Won)return Ce;if(o[2]==o[6].Lost)return je}let N=S(t),D=N&&N(t);function A(o){t[15](o)}let U={minDigits:3};t[5]!==void 0&&(U.number=t[5]),g=new pe({props:U}),fe.push(()=>de(g,"number",A));let V=X(t[4]),y=[];for(let o=0;o<V.length;o+=1)y[o]=ve(_e(t,V,o));return{c(){e=B("div"),s=B("div"),l=B("div"),$(r.$$.fragment),i=J(),a=B("button"),D&&D.c(),c=J(),w=B("div"),$(g.$$.fragment),_=J(),d=B("div");for(let o=0;o<y.length;o+=1)y[o].c();this.h()},l(o){e=P(o,"DIV",{class:!0});var z=E(e);s=P(z,"DIV",{class:!0});var j=E(s);l=P(j,"DIV",{class:!0});var H=E(l);x(r.$$.fragment,H),H.forEach(p),i=Q(j),a=P(j,"BUTTON",{class:!0});var k=E(a);D&&D.l(k),k.forEach(p),c=Q(j),w=P(j,"DIV",{class:!0});var n=E(w);x(g.$$.fragment,n),n.forEach(p),j.forEach(p),_=Q(z),d=P(z,"DIV",{class:!0,style:!0});var f=E(d);for(let m=0;m<y.length;m+=1)y[m].l(f);f.forEach(p),z.forEach(p),this.h()},h(){h(l,"class","display svelte-74z2jo"),h(a,"class","button svelte-74z2jo"),h(w,"class","display svelte-74z2jo"),h(s,"class","toparea svelte-74z2jo"),h(d,"class","board svelte-74z2jo"),Y(d,"grid-template-columns","repeat("+t[0]+", 1fr)"),Y(d,"grid-template-rows","repeat("+t[1]+", 1fr)"),h(e,"class","game svelte-74z2jo")},m(o,z){T(o,e,z),M(e,s),M(s,l),ee(r,l,null),M(s,i),M(s,a),D&&D.m(a,null),M(s,c),M(s,w),ee(g,w,null),M(e,_),M(e,d);for(let j=0;j<y.length;j+=1)y[j]&&y[j].m(d,null);C=!0,I||(R=te(a,"click",t[12]),I=!0)},p(o,[z]){const j={};!u&&z&8&&(u=!0,j.number=o[3],he(()=>u=!1)),r.$set(j),N!==(N=S(o))&&(D&&D.d(1),D=N&&N(o),D&&(D.c(),D.m(a,null)));const H={};if(!v&&z&32&&(v=!0,H.number=o[5],he(()=>v=!1)),g.$set(H),z&4052){V=X(o[4]);let k;for(k=0;k<V.length;k+=1){const n=_e(o,V,k);y[k]?y[k].p(n,z):(y[k]=ve(n),y[k].c(),y[k].m(d,null))}for(;k<y.length;k+=1)y[k].d(1);y.length=V.length}(!C||z&1)&&Y(d,"grid-template-columns","repeat("+o[0]+", 1fr)"),(!C||z&2)&&Y(d,"grid-template-rows","repeat("+o[1]+", 1fr)")},i(o){C||(ne(r.$$.fragment,o),ne(g.$$.fragment,o),C=!0)},o(o){se(r.$$.fragment,o),se(g.$$.fragment,o),C=!1},d(o){o&&p(e),le(r),D&&D.d(),le(g),be(y,o),I=!1,R()}}}function Le(t,e,s){var l=(n=>(n[n.Waiting=0]="Waiting",n[n.Generated=1]="Generated",n[n.Won=2]="Won",n[n.Lost=3]="Lost",n))(l||{});let r=0,{width:u}=e,{height:i}=e,{numMines:a}=e,c=0;var w=(n=>(n[n.Covered=0]="Covered",n[n.Open=1]="Open",n[n.Flagged=2]="Flagged",n))(w||{});let g=[];function v(n,f){return n<0||n>=u||f<0||f>=i?{x:n,y:f,isMine:!1,type:1}:g[n+f*u]}function _(){s(4,g=new Array(u*i));for(let n=0;n<u;n++)for(let f=0;f<i;f++)s(4,g[n+f*u]={x:n,y:f,isMine:!1,type:0},g)}const d=[{x:0,y:0},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:-1,y:1},{x:-1,y:0}];function*C(n,f){for(const m of d)yield v(n+m.x,f+m.y)}function I(n,f){let m=0;for(const O of C(n,f))O.isMine&&m++;return m}function R(n,f){let m=0;for(const O of C(n,f))O.type==2&&m++;return m}function Z(n,f){do{_();const m=[...g];for(let O=0;O<a;O++){const q=Math.floor(Math.random()*m.length),K=m.splice(q,1)[0];K.isMine=!0}}while(I(n,f)>0);s(2,r=1),V()}function W(n,f){if(r==0&&Z(n,f),r==1&&v(n,f).type!=2){if(v(n,f).type==0){if(v(n,f).type=1,v(n,f).isMine){s(2,r=3),y();return}if(I(n,f)==0)for(const m of C(n,f))W(m.x,m.y)}else if(v(n,f).type==1&&I(n,f)==R(n,f))for(const m of C(n,f))v(m.x,m.y).type==0&&W(m.x,m.y)}}function S(n,f){if(r!=1)return;const m=v(n,f);if(m.type==1)return;m.type=m.type==0?2:0;const O=g.reduce((q,K)=>K.isMine&&K.type==2?++q:q,0);s(3,c=a-O),c==0&&(s(2,r=2),y())}let N=-1,D=0,A=0;function U(){clearTimeout(N);const n=Date.now()-D+1005;N=setTimeout(()=>U(),Math.floor(n/1e3)*1e3%1e3),s(5,A=Math.floor((Date.now()-D)/1e3))}function V(){D=Date.now(),U()}function y(){clearTimeout(N)}function o(){s(2,r=0),_(),s(3,c=a),y(),s(5,A=0)}ye(()=>{o()});function z(n){c=n,s(3,c)}function j(n){A=n,s(5,A)}const H=(n,f,m,O)=>{O.preventDefault(),W(n.x,n.y),s(4,f[m]=v(n.x,n.y),g)},k=(n,f,m,O)=>{O.preventDefault(),S(n.x,n.y),s(4,f[m]=v(n.x,n.y),g)};return t.$$set=n=>{"width"in n&&s(0,u=n.width),"height"in n&&s(1,i=n.height),"numMines"in n&&s(13,a=n.numMines)},[u,i,r,c,g,A,l,w,v,I,W,S,o,a,z,j,H,k]}class Fe extends ie{constructor(e){super(),ae(this,e,Le,Ie,re,{width:0,height:1,numMines:13})}}function Ne(t){let e,s=`body {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 100vw;
            height: 100vh;

            margin: 0px;

            background-color: #C6C6C6;
        }`,l,r,u;return r=new Fe({props:{width:30,height:16,numMines:99}}),{c(){e=B("style"),e.textContent=s,l=J(),$(r.$$.fragment)},l(i){const a=we("svelte-14g35tl",document.head);e=P(a,"STYLE",{"data-svelte-h":!0}),De(e)!=="svelte-15oxlt6"&&(e.textContent=s),a.forEach(p),l=Q(i),x(r.$$.fragment,i)},m(i,a){M(document.head,e),T(i,l,a),ee(r,i,a),u=!0},p:G,i(i){u||(ne(r.$$.fragment,i),u=!0)},o(i){se(r.$$.fragment,i),u=!1},d(i){i&&p(l),p(e),le(r,i)}}}class Te extends ie{constructor(e){super(),ae(this,e,null,Ne,re,{})}}export{Te as component,Pe as universal};
