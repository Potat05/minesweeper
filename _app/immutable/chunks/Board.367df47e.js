var Fe=Object.defineProperty;var Le=(e,t,s)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var P=(e,t,s)=>(Le(e,typeof t!="symbol"?t+"":t,s),s);import{s as re,n as j,b as ae,f as oe,r as Me,o as Ne,h as je}from"./scheduler.0298b666.js";import{S as Ee,i as De,e as G,a as V,f as g,A as Oe,B as I,C as U,j as M,k as d,D as v,z as E,E as fe,s as x,g as R,r as ue,x as We,c as ee,h as K,u as de,l as te,v as he,F as J,d as pe,t as ge,w as me,m as ie,n as le}from"./index.1d5e33a4.js";function ne(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function _e(e,t,s){const i=e.slice();return i[5]=t[s],i}function ce(e){let t,s,i,n,l,a,u,y,c,h,b;return{c(){t=I("svg"),s=I("defs"),i=I("pattern"),n=I("line"),l=I("path"),a=I("path"),u=I("path"),y=I("path"),c=I("path"),h=I("path"),b=I("path"),this.h()},l(_){t=U(_,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var m=M(t);s=U(m,"defs",{});var W=M(s);i=U(W,"pattern",{id:!0,width:!0,height:!0,patternUnits:!0,patternTransform:!0});var S=M(i);n=U(S,"line",{stroke:!0,"stroke-width":!0,y2:!0}),M(n).forEach(g),S.forEach(g),W.forEach(g),l=U(m,"path",{d:!0,class:!0}),M(l).forEach(g),a=U(m,"path",{d:!0,class:!0}),M(a).forEach(g),u=U(m,"path",{d:!0,class:!0}),M(u).forEach(g),y=U(m,"path",{d:!0,class:!0}),M(y).forEach(g),c=U(m,"path",{d:!0,class:!0}),M(c).forEach(g),h=U(m,"path",{d:!0,class:!0}),M(h).forEach(g),b=U(m,"path",{d:!0,class:!0}),M(b).forEach(g),m.forEach(g),this.h()},h(){d(n,"stroke","#800"),d(n,"stroke-width","1px"),d(n,"y2","1"),d(i,"id","off-fill"),d(i,"width","1"),d(i,"height","1"),d(i,"patternUnits","userSpaceOnUse"),d(i,"patternTransform","rotate(10)"),d(l,"d","M1 1l1-1h6l1 1-1 1H2z"),d(l,"class","svelte-n5l988"),v(l,"on",e[1][e[5]][0]),d(a,"d","M9 1l1 1v6L9 9 8 8V2z"),d(a,"class","svelte-n5l988"),v(a,"on",e[1][e[5]][1]),d(u,"d","M9 9l1 1v6l-1 1-1-1v-6z"),d(u,"class","svelte-n5l988"),v(u,"on",e[1][e[5]][2]),d(y,"d","M9 17l-1 1H2l-1-1 1-1h6z"),d(y,"class","svelte-n5l988"),v(y,"on",e[1][e[5]][3]),d(c,"d","M1 17l-1-1v-6l1-1 1 1v6z"),d(c,"class","svelte-n5l988"),v(c,"on",e[1][e[5]][4]),d(h,"d","M1 9L0 8V2l1-1 1 1v6z"),d(h,"class","svelte-n5l988"),v(h,"on",e[1][e[5]][5]),d(b,"d","M1 9l1-1h6l1 1-1 1H2z"),d(b,"class","svelte-n5l988"),v(b,"on",e[1][e[5]][6]),d(t,"xmlns","http://www.w3.org/2000/svg"),d(t,"width","192"),d(t,"height","320"),d(t,"viewBox","-1 -1 12 20"),d(t,"class","segment svelte-n5l988")},m(_,m){V(_,t,m),E(t,s),E(s,i),E(i,n),E(t,l),E(t,a),E(t,u),E(t,y),E(t,c),E(t,h),E(t,b)},p(_,m){m&3&&v(l,"on",_[1][_[5]][0]),m&3&&v(a,"on",_[1][_[5]][1]),m&3&&v(u,"on",_[1][_[5]][2]),m&3&&v(y,"on",_[1][_[5]][3]),m&3&&v(c,"on",_[1][_[5]][4]),m&3&&v(h,"on",_[1][_[5]][5]),m&3&&v(b,"on",_[1][_[5]][6])},d(_){_&&g(t)}}}function Se(e){let t,s=ne(e[0]),i=[];for(let n=0;n<s.length;n+=1)i[n]=ce(_e(e,s,n));return{c(){for(let n=0;n<i.length;n+=1)i[n].c();t=G()},l(n){for(let l=0;l<i.length;l+=1)i[l].l(n);t=G()},m(n,l){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(n,l);V(n,t,l)},p(n,[l]){if(l&3){s=ne(n[0]);let a;for(a=0;a<s.length;a+=1){const u=_e(n,s,a);i[a]?i[a].p(u,l):(i[a]=ce(u),i[a].c(),i[a].m(t.parentNode,t))}for(;a<i.length;a+=1)i[a].d(1);i.length=s.length}},i:j,o:j,d(n){n&&g(t),Oe(i,n)}}}function Be(e,t,s){let i,{minDigits:n=3}=t,{maxDigits:l=3}=t,{number:a}=t;const u={0:[!0,!0,!0,!0,!0,!0,!1],1:[!1,!0,!0,!1,!1,!1,!1],2:[!0,!0,!1,!0,!0,!1,!0],3:[!0,!0,!0,!0,!1,!1,!0],4:[!1,!0,!0,!1,!1,!0,!0],5:[!0,!1,!0,!0,!1,!0,!0],6:[!0,!1,!0,!0,!0,!0,!0],7:[!0,!0,!0,!1,!1,!1,!1],8:[!0,!0,!0,!0,!0,!0,!0],9:[!0,!0,!0,!0,!1,!0,!0],"-":[!1,!1,!1,!1,!1,!1,!0]," ":[!1,!1,!1,!1,!1,!1,!1]};return e.$$set=y=>{"minDigits"in y&&s(2,n=y.minDigits),"maxDigits"in y&&s(3,l=y.maxDigits),"number"in y&&s(4,a=y.number)},e.$$.update=()=>{e.$$.dirty&28&&s(0,i=Math.floor(a).toString().padStart(n," ").slice(-l).split(""))},[i,u,n,l,a]}class ye extends Ee{constructor(t){super(),De(this,t,Be,Se,re,{minDigits:2,maxDigits:3,number:4})}}let ve=0;class Ie{constructor(){P(this,"destroyed",!1);P(this,"listeners",new Map)}addEventListener(t,s,i=!1){var n;if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");return this.listeners.has(t)||this.listeners.set(t,[]),(n=this.listeners.get(t))==null||n.push({callbackfn:s,once:i,id:ve}),ve++}removeEventListener(){if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");if(typeof arguments[0]=="number"){for(const t of this.listeners.values())for(let s=0;s<t.length;s++)if(t[s].id==arguments[0])return t.splice(s,1),!0;return!1}else{const t=arguments[0],s=arguments[1],i=arguments[2],n=this.listeners.get(t);if(n===void 0)return!1;for(let l=0;l<n.length;l++){const a=n[l];if(a.callbackfn===s&&a.once===i)return n.splice(l,1),!0}return!1}}dispatchEvent(t,...s){if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");const i=this.listeners.get(t);i!==void 0&&i.forEach(n=>{n.callbackfn(...s),n.once&&this.removeEventListener(t,n.callbackfn,n.once)})}destroyDispatcher(){if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");this.destroyed=!0,this.listeners.forEach((t,s)=>{this.listeners.delete(s)})}}class Ue extends Ie{constructor(s){super();P(this,"interval");P(this,"_running",!1);P(this,"_startDate",-1);P(this,"timeout",-1);P(this,"expected",-1);this.interval=s}get running(){return this._running}get startDate(){return this._startDate}step(){const s=Date.now(),i=s-this.expected,n=s-this._startDate;i>this.interval&&this.dispatchEvent("error",n,i),this.dispatchEvent("tick",n),this.expected+=this.interval,clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.step(),Math.max(0,this.interval-i))}start(){this._running||(this._running=!0,this._startDate=Date.now(),this.expected=this._startDate+this.interval,this.timeout=setTimeout(()=>this.step(),this.interval))}stop(){this._running&&(this._running=!1,this._startDate=-1,clearTimeout(this.timeout))}}function be(e,t,s){const i=e.slice();return i[31]=t[s],i[32]=t,i[33]=s,i}function Ve(e){return{c(){this.h()},l(t){this.h()},h(){document.title="Minesweeper - Lost"},m:j,d:j}}function ze(e){return document.title="Minesweeper - Victory - ⏱ "+Math.floor(e[5]/60).toString().padStart(2,"0")+":"+(e[5]%60).toString().padStart(2,"0"),{c:j,l:j,m:j,d:j}}function Ce(e){return document.title="Minesweeper - ⏱ "+Math.floor(e[5]/60).toString().padStart(2,"0")+":"+(e[5]%60).toString().padStart(2,"0")+" - 🚩 "+e[3],{c:j,l:j,m:j,d:j}}function Ae(e){return{c(){this.h()},l(t){this.h()},h(){document.title="Minesweeper"},m:j,d:j}}function ke(e){let t;function s(l,a){if(l[2]==l[6].Waiting)return Ae;if(l[2]==l[6].Generated)return Ce;if(l[2]==l[6].Won)return ze;if(l[2]==l[6].Lost)return Ve}let i=s(e),n=i&&i(e);return{c(){n&&n.c(),t=G()},l(l){n&&n.l(l),t=G()},m(l,a){n&&n.m(l,a),V(l,t,a)},p(l,a){i!==(i=s(l))&&(n&&n.d(1),n=i&&i(l),n&&(n.c(),n.m(t.parentNode,t)))},d(l){l&&g(t),n&&n.d(l)}}}function Te(e){let t;return{c(){t=ie("😵")},l(s){t=le(s,"😵")},m(s,i){V(s,t,i)},d(s){s&&g(t)}}}function He(e){let t;return{c(){t=ie("😎")},l(s){t=le(s,"😎")},m(s,i){V(s,t,i)},d(s){s&&g(t)}}}function Pe(e){let t;return{c(){t=ie("😊")},l(s){t=le(s,"😊")},m(s,i){V(s,t,i)},d(s){s&&g(t)}}}function Re(e){let t,s,i;return{c(){t=R("div"),this.h()},l(n){t=K(n,"DIV",{class:!0,title:!0}),M(t).forEach(g),this.h()},h(){d(t,"class",s="tile"+(e[31].type==e[7].Open?` mines-nearby-${e[9](e[31].x,e[31].y)}`:"")+" svelte-m86jyx"),d(t,"title",i="x"+e[31].x+" y"+e[31].y+(e[31].type==e[7].Open?` - ${e[9](e[31].x,e[31].y)} Nearby`:e[31].type==e[7].Flagged?" - Flagged":"")),v(t,"opened",e[31].type==e[7].Open),v(t,"flagged",e[31].type==e[7].Flagged),v(t,"exploded",e[31].isMine&&e[31].type==e[7].Open),v(t,"displayMine",e[2]==e[6].Lost&&e[31].isMine)},m(n,l){V(n,t,l)},p(n,l){l[0]&16&&s!==(s="tile"+(n[31].type==n[7].Open?` mines-nearby-${n[9](n[31].x,n[31].y)}`:"")+" svelte-m86jyx")&&d(t,"class",s),l[0]&16&&i!==(i="x"+n[31].x+" y"+n[31].y+(n[31].type==n[7].Open?` - ${n[9](n[31].x,n[31].y)} Nearby`:n[31].type==n[7].Flagged?" - Flagged":""))&&d(t,"title",i),l[0]&144&&v(t,"opened",n[31].type==n[7].Open),l[0]&144&&v(t,"flagged",n[31].type==n[7].Flagged),l[0]&144&&v(t,"exploded",n[31].isMine&&n[31].type==n[7].Open),l[0]&84&&v(t,"displayMine",n[2]==n[6].Lost&&n[31].isMine)},d(n){n&&g(t)}}}function Ke(e){let t,s,i,n,l;function a(...c){return e[18](e[31],e[32],e[33],...c)}function u(...c){return e[19](e[31],e[32],e[33],...c)}function y(...c){return e[20](e[31],e[32],e[33],...c)}return{c(){t=R("button"),this.h()},l(c){t=K(c,"BUTTON",{class:!0,title:!0}),M(t).forEach(g),this.h()},h(){d(t,"class",s="tile"+(e[31].type==e[7].Open?` mines-nearby-${e[9](e[31].x,e[31].y)}`:"")+" svelte-m86jyx"),d(t,"title",i="x"+e[31].x+" y"+e[31].y+(e[31].type==e[7].Open?` - ${e[9](e[31].x,e[31].y)} Nearby`:e[31].type==e[7].Flagged?" - Flagged":"")),v(t,"opened",e[31].type==e[7].Open),v(t,"flagged",e[31].type==e[7].Flagged),v(t,"exploded",e[31].isMine&&e[31].type==e[7].Open)},m(c,h){V(c,t,h),n||(l=[J(t,"click",a),J(t,"contextmenu",u),J(t,"keydown",y)],n=!0)},p(c,h){e=c,h[0]&16&&s!==(s="tile"+(e[31].type==e[7].Open?` mines-nearby-${e[9](e[31].x,e[31].y)}`:"")+" svelte-m86jyx")&&d(t,"class",s),h[0]&16&&i!==(i="x"+e[31].x+" y"+e[31].y+(e[31].type==e[7].Open?` - ${e[9](e[31].x,e[31].y)} Nearby`:e[31].type==e[7].Flagged?" - Flagged":""))&&d(t,"title",i),h[0]&144&&v(t,"opened",e[31].type==e[7].Open),h[0]&144&&v(t,"flagged",e[31].type==e[7].Flagged),h[0]&144&&v(t,"exploded",e[31].isMine&&e[31].type==e[7].Open)},d(c){c&&g(t),n=!1,Me(l)}}}function we(e){let t,s;function i(a,u){return u[0]&20&&(t=null),t==null&&(t=!!(a[2]==a[6].Waiting||a[2]==a[6].Generated&&(a[31].type!=a[7].Open||a[11](a[31].x,a[31].y)&&a[9](a[31].x,a[31].y)==a[10](a[31].x,a[31].y)))),t?Ke:Re}let n=i(e,[-1,-1]),l=n(e);return{c(){l.c(),s=G()},l(a){l.l(a),s=G()},m(a,u){l.m(a,u),V(a,s,u)},p(a,u){n===(n=i(a,u))&&l?l.p(a,u):(l.d(1),l=n(a),l&&(l.c(),l.m(s.parentNode,s)))},d(a){a&&g(s),l.d(a)}}}function Ge(e){let t=e[5],s,i,n,l,a,u,y,c,h,b,_,m,W,S,F,z,Q,X,L=ke(e);function Y(o){e[16](o)}let C={minDigits:3,maxDigits:1/0};e[3]!==void 0&&(C.number=e[3]),u=new ye({props:C}),ae.push(()=>fe(u,"number",Y));function q(o,O){if(o[2]==o[6].Waiting||o[2]==o[6].Generated)return Pe;if(o[2]==o[6].Won)return He;if(o[2]==o[6].Lost)return Te}let A=q(e),k=A&&A(e);function Z(o){e[17](o)}let $={minDigits:3,maxDigits:1/0};e[5]!==void 0&&($.number=e[5]),m=new ye({props:$}),ae.push(()=>fe(m,"number",Z));let T=ne(e[4]),w=[];for(let o=0;o<T.length;o+=1)w[o]=we(be(e,T,o));return{c(){L.c(),s=G(),i=x(),n=R("div"),l=R("div"),a=R("div"),ue(u.$$.fragment),c=x(),h=R("button"),k&&k.c(),b=x(),_=R("div"),ue(m.$$.fragment),S=x(),F=R("div");for(let o=0;o<w.length;o+=1)w[o].c();this.h()},l(o){const O=We("svelte-1fu1i1v",document.head);L.l(O),s=G(),O.forEach(g),i=ee(o),n=K(o,"DIV",{class:!0});var N=M(n);l=K(N,"DIV",{class:!0});var B=M(l);a=K(B,"DIV",{class:!0});var r=M(a);de(u.$$.fragment,r),r.forEach(g),c=ee(B),h=K(B,"BUTTON",{class:!0});var f=M(h);k&&k.l(f),f.forEach(g),b=ee(B),_=K(B,"DIV",{class:!0});var p=M(_);de(m.$$.fragment,p),p.forEach(g),B.forEach(g),S=ee(N),F=K(N,"DIV",{class:!0,style:!0});var D=M(F);for(let H=0;H<w.length;H+=1)w[H].l(D);D.forEach(g),N.forEach(g),this.h()},h(){d(a,"class","display svelte-m86jyx"),d(h,"class","button svelte-m86jyx"),d(_,"class","display svelte-m86jyx"),d(l,"class","toparea svelte-m86jyx"),d(F,"class","board svelte-m86jyx"),te(F,"grid-template-columns","repeat("+e[0]+", 1fr)"),te(F,"grid-template-rows","repeat("+e[1]+", 1fr)"),d(n,"class","game svelte-m86jyx")},m(o,O){L.m(document.head,null),E(document.head,s),V(o,i,O),V(o,n,O),E(n,l),E(l,a),he(u,a,null),E(l,c),E(l,h),k&&k.m(h,null),E(l,b),E(l,_),he(m,_,null),E(n,S),E(n,F);for(let N=0;N<w.length;N+=1)w[N]&&w[N].m(F,null);z=!0,Q||(X=[J(h,"click",e[14]),J(F,"contextmenu",e[21]),J(n,"keydown",e[22])],Q=!0)},p(o,O){O[0]&32&&re(t,t=o[5])?(L.d(1),L=ke(o),L.c(),L.m(s.parentNode,s)):L.p(o,O);const N={};!y&&O[0]&8&&(y=!0,N.number=o[3],oe(()=>y=!1)),u.$set(N),A!==(A=q(o))&&(k&&k.d(1),k=A&&A(o),k&&(k.c(),k.m(h,null)));const B={};if(!W&&O[0]&32&&(W=!0,B.number=o[5],oe(()=>W=!1)),m.$set(B),O[0]&16340){T=ne(o[4]);let r;for(r=0;r<T.length;r+=1){const f=be(o,T,r);w[r]?w[r].p(f,O):(w[r]=we(f),w[r].c(),w[r].m(F,null))}for(;r<w.length;r+=1)w[r].d(1);w.length=T.length}(!z||O[0]&1)&&te(F,"grid-template-columns","repeat("+o[0]+", 1fr)"),(!z||O[0]&2)&&te(F,"grid-template-rows","repeat("+o[1]+", 1fr)")},i(o){z||(pe(u.$$.fragment,o),pe(m.$$.fragment,o),z=!0)},o(o){ge(u.$$.fragment,o),ge(m.$$.fragment,o),z=!1},d(o){o&&(g(i),g(n)),g(s),L.d(o),me(u),k&&k.d(),me(m),Oe(w,o),Q=!1,Me(X)}}}function qe(e,t,s){var i=(r=>(r[r.Waiting=0]="Waiting",r[r.Generated=1]="Generated",r[r.Won=2]="Won",r[r.Lost=3]="Lost",r))(i||{});let n=0,{width:l}=t,{height:a}=t,{numMines:u}=t,y=0;var c=(r=>(r[r.Covered=0]="Covered",r[r.Open=1]="Open",r[r.Flagged=2]="Flagged",r))(c||{});let h=[];function b(r,f){return r<0||r>=l||f<0||f>=a?{x:r,y:f,isMine:!1,type:1}:h[r+f*l]}function _(){s(4,h=new Array(l*a));for(let r=0;r<l;r++)for(let f=0;f<a;f++)s(4,h[r+f*l]={x:r,y:f,isMine:!1,type:0},h)}const m=[{x:0,y:0},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:-1,y:1},{x:-1,y:0}];function*W(r,f){for(const p of m)yield b(r+p.x,f+p.y)}function S(r,f){let p=0;for(const D of W(r,f))D.isMine&&p++;return p}function F(r,f){let p=0;for(const D of W(r,f))D.type==2&&p++;return p}function z(r,f){for(const p of W(r,f))if(p.type==0)return!0;return!1}function Q(r,f){if(h.length-9<=u)throw new Error("Too many mines for board, cannot generate board.");do{_();const p=[...h];for(let D=0;D<u;D++){const H=Math.floor(Math.random()*p.length),se=p.splice(H,1)[0];se.isMine=!0}}while(S(r,f)>0);s(2,n=1),A()}function X(){if(n!=1)return;h.reduce((f,p)=>p.isMine&&p.type==2?++f:f,0)==u&&y==0&&h.every(f=>f.type==2||f.type==1)&&(s(2,n=2),k())}function L(r,f){if(n==0&&Q(r,f),n==1&&b(r,f).type!=2){if(b(r,f).type==0){if(b(r,f).type=1,b(r,f).isMine){s(2,n=3),k();return}if(S(r,f)==0)for(const p of W(r,f))L(p.x,p.y)}else if(b(r,f).type==1&&S(r,f)==F(r,f))for(const p of W(r,f))b(p.x,p.y).type==0&&L(p.x,p.y);X()}}function Y(r,f){if(n!=1)return;const p=b(r,f);if(p.type==1)return;p.type=p.type==0?2:0;const D=h.reduce((H,se)=>se.type==2?++H:H,0);s(3,y=u-D),X()}let C=0,q=new Ue(1e3);q.addEventListener("tick",r=>{s(5,C=Math.floor(r/1e3))});function A(){q.start()}function k(){q.stop()}function Z(){s(2,n=0),_(),s(3,y=u),k(),s(5,C=0)}Ne(()=>{Z()}),je(()=>{k()});function $(r){y=r,s(3,y)}function T(r){C=r,s(5,C)}const w=(r,f,p,D)=>{n!=i.Waiting&&n!=i.Generated||(D.preventDefault(),L(r.x,r.y),s(4,f[p]=b(r.x,r.y),h))},o=(r,f,p,D)=>{n==i.Generated&&(D.preventDefault(),Y(r.x,r.y),s(4,f[p]=b(r.x,r.y),h))},O=(r,f,p,D)=>{n==i.Generated&&D.code=="KeyF"&&(D.preventDefault(),Y(r.x,r.y),s(4,f[p]=b(r.x,r.y),h))},N=r=>{n==i.Generated&&r.preventDefault()},B=r=>{r.code=="KeyR"&&(r.preventDefault(),Z())};return e.$$set=r=>{"width"in r&&s(0,l=r.width),"height"in r&&s(1,a=r.height),"numMines"in r&&s(15,u=r.numMines)},[l,a,n,y,h,C,i,c,b,S,F,z,L,Y,Z,u,$,T,w,o,O,N,B]}class Ye extends Ee{constructor(t){super(),De(this,t,qe,Ge,re,{width:0,height:1,numMines:15},null,[-1,-1])}}export{Ye as B};
