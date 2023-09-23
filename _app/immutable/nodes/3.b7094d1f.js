import{s as ne,n as F,b as me,f as ce,o as ke,r as Ee}from"../chunks/scheduler.bc760b9c.js";import{S as fe,i as ue,e as H,a as P,f as _,A as De,B as C,C as I,j as k,k as m,D as y,z as M,E as pe,s as $,g as R,r as se,x as Oe,c as x,h as j,u as le,l as ee,v as ie,F as oe,d as J,t as Y,w as ae,m as he,n as de,b as ze,p as Ne}from"../chunks/index.b6611d32.js";function te(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const Le=!0,Ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:Le},Symbol.toStringTag,{value:"Module"}));function ge(e,t,s){const n=e.slice();return n[5]=t[s],n}function _e(e){let t,s,n,r,i,a,u,h,w,p,b;return{c(){t=C("svg"),s=C("defs"),n=C("pattern"),r=C("line"),i=C("path"),a=C("path"),u=C("path"),h=C("path"),w=C("path"),p=C("path"),b=C("path"),this.h()},l(g){t=I(g,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var c=k(t);s=I(c,"defs",{});var S=k(s);n=I(S,"pattern",{id:!0,width:!0,height:!0,patternUnits:!0,patternTransform:!0});var V=k(n);r=I(V,"line",{stroke:!0,"stroke-width":!0,y2:!0}),k(r).forEach(_),V.forEach(_),S.forEach(_),i=I(c,"path",{d:!0,class:!0}),k(i).forEach(_),a=I(c,"path",{d:!0,class:!0}),k(a).forEach(_),u=I(c,"path",{d:!0,class:!0}),k(u).forEach(_),h=I(c,"path",{d:!0,class:!0}),k(h).forEach(_),w=I(c,"path",{d:!0,class:!0}),k(w).forEach(_),p=I(c,"path",{d:!0,class:!0}),k(p).forEach(_),b=I(c,"path",{d:!0,class:!0}),k(b).forEach(_),c.forEach(_),this.h()},h(){m(r,"stroke","#800"),m(r,"stroke-width","1px"),m(r,"y2","1"),m(n,"id","off-fill"),m(n,"width","1"),m(n,"height","1"),m(n,"patternUnits","userSpaceOnUse"),m(n,"patternTransform","rotate(10)"),m(i,"d","M1 1l1-1h6l1 1-1 1H2z"),m(i,"class","svelte-n5l988"),y(i,"on",e[1][e[5]][0]),m(a,"d","M9 1l1 1v6L9 9 8 8V2z"),m(a,"class","svelte-n5l988"),y(a,"on",e[1][e[5]][1]),m(u,"d","M9 9l1 1v6l-1 1-1-1v-6z"),m(u,"class","svelte-n5l988"),y(u,"on",e[1][e[5]][2]),m(h,"d","M9 17l-1 1H2l-1-1 1-1h6z"),m(h,"class","svelte-n5l988"),y(h,"on",e[1][e[5]][3]),m(w,"d","M1 17l-1-1v-6l1-1 1 1v6z"),m(w,"class","svelte-n5l988"),y(w,"on",e[1][e[5]][4]),m(p,"d","M1 9L0 8V2l1-1 1 1v6z"),m(p,"class","svelte-n5l988"),y(p,"on",e[1][e[5]][5]),m(b,"d","M1 9l1-1h6l1 1-1 1H2z"),m(b,"class","svelte-n5l988"),y(b,"on",e[1][e[5]][6]),m(t,"xmlns","http://www.w3.org/2000/svg"),m(t,"width","192"),m(t,"height","320"),m(t,"viewBox","-1 -1 12 20"),m(t,"class","segment svelte-n5l988")},m(g,c){P(g,t,c),M(t,s),M(s,n),M(n,r),M(t,i),M(t,a),M(t,u),M(t,h),M(t,w),M(t,p),M(t,b)},p(g,c){c&3&&y(i,"on",g[1][g[5]][0]),c&3&&y(a,"on",g[1][g[5]][1]),c&3&&y(u,"on",g[1][g[5]][2]),c&3&&y(h,"on",g[1][g[5]][3]),c&3&&y(w,"on",g[1][g[5]][4]),c&3&&y(p,"on",g[1][g[5]][5]),c&3&&y(b,"on",g[1][g[5]][6])},d(g){g&&_(t)}}}function Se(e){let t,s=te(e[0]),n=[];for(let r=0;r<s.length;r+=1)n[r]=_e(ge(e,s,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();t=H()},l(r){for(let i=0;i<n.length;i+=1)n[i].l(r);t=H()},m(r,i){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(r,i);P(r,t,i)},p(r,[i]){if(i&3){s=te(r[0]);let a;for(a=0;a<s.length;a+=1){const u=ge(r,s,a);n[a]?n[a].p(u,i):(n[a]=_e(u),n[a].c(),n[a].m(t.parentNode,t))}for(;a<n.length;a+=1)n[a].d(1);n.length=s.length}},i:F,o:F,d(r){r&&_(t),De(n,r)}}}function We(e,t,s){let n,{minDigits:r=3}=t,{maxDigits:i=3}=t,{number:a}=t;const u={0:[!0,!0,!0,!0,!0,!0,!1],1:[!1,!0,!0,!1,!1,!1,!1],2:[!0,!0,!1,!0,!0,!1,!0],3:[!0,!0,!0,!0,!1,!1,!0],4:[!1,!0,!0,!1,!1,!0,!0],5:[!0,!1,!0,!0,!1,!0,!0],6:[!0,!1,!0,!0,!0,!0,!0],7:[!0,!0,!0,!1,!1,!1,!1],8:[!0,!0,!0,!0,!0,!0,!0],9:[!0,!0,!0,!0,!1,!0,!0],"-":[!1,!1,!1,!1,!1,!1,!0]," ":[!1,!1,!1,!1,!1,!1,!1]};return e.$$set=h=>{"minDigits"in h&&s(2,r=h.minDigits),"maxDigits"in h&&s(3,i=h.maxDigits),"number"in h&&s(4,a=h.number)},e.$$.update=()=>{e.$$.dirty&28&&s(0,n=Math.floor(a).toString().padStart(r," ").slice(-i).split(""))},[n,u,r,i,a]}class be extends fe{constructor(t){super(),ue(this,t,We,Se,ne,{minDigits:2,maxDigits:3,number:4})}}function ye(e,t,s){const n=e.slice();return n[30]=t[s],n[31]=t,n[32]=s,n}function Fe(e){return{c(){this.h()},l(t){this.h()},h(){document.title="Minesweeper - Lost"},m:F,d:F}}function Ve(e){return document.title="Minesweeper - Victory - ⏱ "+Math.floor(e[5]/60).toString().padStart(2,"0")+":"+(e[5]%60).toString().padStart(2,"0"),{c:F,l:F,m:F,d:F}}function Ce(e){return document.title="Minesweeper - ⏱ "+Math.floor(e[5]/60).toString().padStart(2,"0")+":"+(e[5]%60).toString().padStart(2,"0")+" - 🚩 "+e[3],{c:F,l:F,m:F,d:F}}function ve(e){let t;function s(i,a){if(i[2]==i[6].Generated)return Ce;if(i[2]==i[6].Won)return Ve;if(i[2]==i[6].Lost)return Fe}let n=s(e),r=n&&n(e);return{c(){r&&r.c(),t=H()},l(i){r&&r.l(i),t=H()},m(i,a){r&&r.m(i,a),P(i,t,a)},p(i,a){n!==(n=s(i))&&(r&&r.d(1),r=n&&n(i),r&&(r.c(),r.m(t.parentNode,t)))},d(i){i&&_(t),r&&r.d(i)}}}function Ie(e){let t;return{c(){t=he("😵")},l(s){t=de(s,"😵")},m(s,n){P(s,t,n)},d(s){s&&_(t)}}}function Pe(e){let t;return{c(){t=he("😎")},l(s){t=de(s,"😎")},m(s,n){P(s,t,n)},d(s){s&&_(t)}}}function Be(e){let t;return{c(){t=he("😊")},l(s){t=de(s,"😊")},m(s,n){P(s,t,n)},d(s){s&&_(t)}}}function Me(e){let t,s,n,r;function i(...u){return e[18](e[30],e[31],e[32],...u)}function a(...u){return e[19](e[30],e[31],e[32],...u)}return{c(){t=R("div"),this.h()},l(u){t=j(u,"DIV",{class:!0}),k(t).forEach(_),this.h()},h(){m(t,"class",s="tile"+(e[30].type==e[7].Open?` mines-nearby-${e[9](e[30].x,e[30].y)}`:"")+" svelte-xu5y"),y(t,"opened",e[30].type==e[7].Open),y(t,"flagged",e[30].type==e[7].Flagged),y(t,"exploded",e[30].isMine&&e[30].type==e[7].Open),y(t,"displayMine",e[2]==e[6].Lost&&e[30].isMine),y(t,"clickable",e[2]==e[6].Waiting||e[2]==e[6].Generated&&(e[30].type!=e[7].Open||e[11](e[30].x,e[30].y)&&e[9](e[30].x,e[30].y)==e[10](e[30].x,e[30].y)))},m(u,h){P(u,t,h),n||(r=[oe(t,"click",i),oe(t,"contextmenu",a)],n=!0)},p(u,h){e=u,h[0]&16&&s!==(s="tile"+(e[30].type==e[7].Open?` mines-nearby-${e[9](e[30].x,e[30].y)}`:"")+" svelte-xu5y")&&m(t,"class",s),h[0]&144&&y(t,"opened",e[30].type==e[7].Open),h[0]&144&&y(t,"flagged",e[30].type==e[7].Flagged),h[0]&144&&y(t,"exploded",e[30].isMine&&e[30].type==e[7].Open),h[0]&84&&y(t,"displayMine",e[2]==e[6].Lost&&e[30].isMine),h[0]&3796&&y(t,"clickable",e[2]==e[6].Waiting||e[2]==e[6].Generated&&(e[30].type!=e[7].Open||e[11](e[30].x,e[30].y)&&e[9](e[30].x,e[30].y)==e[10](e[30].x,e[30].y)))},d(u){u&&_(t),n=!1,Ee(r)}}}function Ae(e){let t=e[5],s,n,r,i,a,u,h,w,p,b,g,c,S,V,z,A,Q,X,N=ve(e);function Z(f){e[16](f)}let q={minDigits:3};e[3]!==void 0&&(q.number=e[3]),u=new be({props:q}),me.push(()=>pe(u,"number",Z));function G(f,E){if(f[2]==f[6].Waiting||f[2]==f[6].Generated)return Be;if(f[2]==f[6].Won)return Pe;if(f[2]==f[6].Lost)return Ie}let W=G(e),D=W&&W(e);function re(f){e[17](f)}let K={minDigits:3};e[5]!==void 0&&(K.number=e[5]),c=new be({props:K}),me.push(()=>pe(c,"number",re));let B=te(e[4]),v=[];for(let f=0;f<B.length;f+=1)v[f]=Me(ye(e,B,f));return{c(){N.c(),s=H(),n=$(),r=R("div"),i=R("div"),a=R("div"),se(u.$$.fragment),w=$(),p=R("button"),D&&D.c(),b=$(),g=R("div"),se(c.$$.fragment),V=$(),z=R("div");for(let f=0;f<v.length;f+=1)v[f].c();this.h()},l(f){const E=Oe("svelte-d4ouuz",document.head);N.l(E),s=H(),E.forEach(_),n=x(f),r=j(f,"DIV",{class:!0});var L=k(r);i=j(L,"DIV",{class:!0});var l=k(i);a=j(l,"DIV",{class:!0});var o=k(a);le(u.$$.fragment,o),o.forEach(_),w=x(l),p=j(l,"BUTTON",{class:!0});var d=k(p);D&&D.l(d),d.forEach(_),b=x(l),g=j(l,"DIV",{class:!0});var O=k(g);le(c.$$.fragment,O),O.forEach(_),l.forEach(_),V=x(L),z=j(L,"DIV",{class:!0,style:!0});var T=k(z);for(let U=0;U<v.length;U+=1)v[U].l(T);T.forEach(_),L.forEach(_),this.h()},h(){m(a,"class","display svelte-xu5y"),m(p,"class","button svelte-xu5y"),m(g,"class","display svelte-xu5y"),m(i,"class","toparea svelte-xu5y"),m(z,"class","board svelte-xu5y"),ee(z,"grid-template-columns","repeat("+e[0]+", 1fr)"),ee(z,"grid-template-rows","repeat("+e[1]+", 1fr)"),m(r,"class","game svelte-xu5y")},m(f,E){N.m(document.head,null),M(document.head,s),P(f,n,E),P(f,r,E),M(r,i),M(i,a),ie(u,a,null),M(i,w),M(i,p),D&&D.m(p,null),M(i,b),M(i,g),ie(c,g,null),M(r,V),M(r,z);for(let L=0;L<v.length;L+=1)v[L]&&v[L].m(z,null);A=!0,Q||(X=oe(p,"click",e[14]),Q=!0)},p(f,E){E[0]&32&&ne(t,t=f[5])?(N.d(1),N=ve(f),N.c(),N.m(s.parentNode,s)):N.p(f,E);const L={};!h&&E[0]&8&&(h=!0,L.number=f[3],ce(()=>h=!1)),u.$set(L),W!==(W=G(f))&&(D&&D.d(1),D=W&&W(f),D&&(D.c(),D.m(p,null)));const l={};if(!S&&E[0]&32&&(S=!0,l.number=f[5],ce(()=>S=!1)),c.$set(l),E[0]&16340){B=te(f[4]);let o;for(o=0;o<B.length;o+=1){const d=ye(f,B,o);v[o]?v[o].p(d,E):(v[o]=Me(d),v[o].c(),v[o].m(z,null))}for(;o<v.length;o+=1)v[o].d(1);v.length=B.length}(!A||E[0]&1)&&ee(z,"grid-template-columns","repeat("+f[0]+", 1fr)"),(!A||E[0]&2)&&ee(z,"grid-template-rows","repeat("+f[1]+", 1fr)")},i(f){A||(J(u.$$.fragment,f),J(c.$$.fragment,f),A=!0)},o(f){Y(u.$$.fragment,f),Y(c.$$.fragment,f),A=!1},d(f){f&&(_(n),_(r)),_(s),N.d(f),ae(u),D&&D.d(),ae(c),De(v,f),Q=!1,X()}}}function He(e,t,s){var n=(l=>(l[l.Waiting=0]="Waiting",l[l.Generated=1]="Generated",l[l.Won=2]="Won",l[l.Lost=3]="Lost",l))(n||{});let r=0,{width:i}=t,{height:a}=t,{numMines:u}=t,h=0;var w=(l=>(l[l.Covered=0]="Covered",l[l.Open=1]="Open",l[l.Flagged=2]="Flagged",l))(w||{});let p=[];function b(l,o){return l<0||l>=i||o<0||o>=a?{x:l,y:o,isMine:!1,type:1}:p[l+o*i]}function g(){s(4,p=new Array(i*a));for(let l=0;l<i;l++)for(let o=0;o<a;o++)s(4,p[l+o*i]={x:l,y:o,isMine:!1,type:0},p)}const c=[{x:0,y:0},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:-1,y:1},{x:-1,y:0}];function*S(l,o){for(const d of c)yield b(l+d.x,o+d.y)}function V(l,o){let d=0;for(const O of S(l,o))O.isMine&&d++;return d}function z(l,o){let d=0;for(const O of S(l,o))O.type==2&&d++;return d}function A(l,o){for(const d of S(l,o))if(d.type==0)return!0;return!1}function Q(l,o){if(p.length-9<=u)throw new Error("Too many mines for board, cannot generate board.");do{g();const d=[...p];for(let O=0;O<u;O++){const T=Math.floor(Math.random()*d.length),U=d.splice(T,1)[0];U.isMine=!0}}while(V(l,o)>0);s(2,r=1),re()}function X(){if(r!=1)return;p.reduce((o,d)=>d.isMine&&d.type==2?++o:o,0)==u&&h==0&&p.every(o=>o.type==2||o.type==1)&&(s(2,r=2),K())}function N(l,o){if(r==0&&Q(l,o),r==1&&b(l,o).type!=2){if(b(l,o).type==0){if(b(l,o).type=1,b(l,o).isMine){s(2,r=3),K();return}if(V(l,o)==0)for(const d of S(l,o))N(d.x,d.y)}else if(b(l,o).type==1&&V(l,o)==z(l,o))for(const d of S(l,o))b(d.x,d.y).type==0&&N(d.x,d.y);X()}}function Z(l,o){if(r!=1)return;const d=b(l,o);if(d.type==1)return;d.type=d.type==0?2:0;const O=p.reduce((T,U)=>U.type==2?++T:T,0);s(3,h=u-O),X()}let q=-1,G=0,W=0;function D(){clearTimeout(q);const l=Date.now()-G+1005;q=setTimeout(()=>D(),Math.floor(l/1e3)*1e3%1e3),s(5,W=Math.floor((Date.now()-G)/1e3))}function re(){G=Date.now(),D()}function K(){clearTimeout(q)}function B(){s(2,r=0),g(),s(3,h=u),K(),s(5,W=0)}ke(()=>{B()});function v(l){h=l,s(3,h)}function f(l){W=l,s(5,W)}const E=(l,o,d,O)=>{r!=n.Waiting&&r!=n.Generated||(O.preventDefault(),N(l.x,l.y),s(4,o[d]=b(l.x,l.y),p))},L=(l,o,d,O)=>{r==n.Generated&&(O.preventDefault(),Z(l.x,l.y),s(4,o[d]=b(l.x,l.y),p))};return e.$$set=l=>{"width"in l&&s(0,i=l.width),"height"in l&&s(1,a=l.height),"numMines"in l&&s(15,u=l.numMines)},[i,a,r,h,p,W,n,w,b,V,z,A,N,Z,B,u,v,f,E,L]}class Te extends fe{constructor(t){super(),ue(this,t,He,Ae,ne,{width:0,height:1,numMines:15},null,[-1,-1])}}function we(e){let t,s;return t=new Te({props:{width:e[0],height:e[1],numMines:e[2]}}),{c(){se(t.$$.fragment)},l(n){le(t.$$.fragment,n)},m(n,r){ie(t,n,r),s=!0},p(n,r){const i={};r&1&&(i.width=n[0]),r&2&&(i.height=n[1]),r&4&&(i.numMines=n[2]),t.$set(i)},i(n){s||(J(t.$$.fragment,n),s=!0)},o(n){Y(t.$$.fragment,n),s=!1},d(n){ae(t,n)}}}function Ue(e){let t,s,n=e[3]&&we(e);return{c(){n&&n.c(),t=H()},l(r){n&&n.l(r),t=H()},m(r,i){n&&n.m(r,i),P(r,t,i),s=!0},p(r,[i]){r[3]?n?(n.p(r,i),i&8&&J(n,1)):(n=we(r),n.c(),J(n,1),n.m(t.parentNode,t)):n&&(Ne(),Y(n,1,1,()=>{n=null}),ze())},i(r){s||(J(n),s=!0)},o(r){Y(n),s=!1},d(r){r&&_(t),n&&n.d(r)}}}function Re(e,t,s){let n=30,r=16,i,a=!1;return ke(()=>{const u=new URLSearchParams(window.location.search),h=u.get("size");h&&s(0,[n,r]=h.split("x").map(Number).map(Math.floor),n,s(1,r));const w=u.get("mines");w&&s(2,i=Math.floor(Number(w))),i===void 0&&s(2,i=Math.floor(n*r*.2)),s(3,a=!0)}),[n,r,i,a]}class Ke extends fe{constructor(t){super(),ue(this,t,Re,Ue,ne,{})}}export{Ke as component,Ge as universal};