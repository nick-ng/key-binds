import{M as E,N as b,O as I,P as O,o as Y,Q as j,t as q,R as B,S as L,T as C,H as $,V as F,W as T,f as w,s as A,d as Q,j as p,X,Y as Z,Z as z,_ as G,a0 as J,a1 as K,a2 as U,i as x,h as S,F as rr,c as tr,I as er}from"./pVTWfFso.js";import{r as ar,b as nr}from"./DFNmXMAF.js";const sr=["touchstart","touchmove"];function ir(r){return sr.includes(r)}let D=!1;function or(){D||(D=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var t;if(!r.defaultPrevented)for(const a of r.target.elements)(t=a.__on_r)==null||t.call(a)})},{capture:!0}))}function V(r){var t=I,a=O;E(null),b(null);try{return r()}finally{E(t),b(a)}}function lr(r,t,a,i=a){r.addEventListener(t,()=>V(a));const n=r.__on_r;n?r.__on_r=()=>{n(),i(!0)}:r.__on_r=()=>i(!0),or()}const k=new Set,N=new Set;function ur(r,t,a,i={}){function n(e){if(i.capture||g.call(t,e),!e.cancelBubble)return V(()=>a==null?void 0:a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?B(()=>{t.addEventListener(r,n,i)}):t.addEventListener(r,n,i),n}function dr(r,t,a,i,n){var e={capture:i,passive:n},u=ur(r,t,a,e);(t===document.body||t===window||t===document)&&q(()=>{t.removeEventListener(r,u,e)})}function hr(r){for(var t=0;t<r.length;t++)k.add(r[t]);for(var a of N)a(r)}function g(r){var P;var t=this,a=t.ownerDocument,i=r.type,n=((P=r.composedPath)==null?void 0:P.call(r))||[],e=n[0]||r.target,u=0,d=r.__root;if(d){var _=n.indexOf(d);if(_!==-1&&(t===document||t===window)){r.__root=t;return}var h=n.indexOf(t);if(h===-1)return;_<=h&&(u=_)}if(e=n[u]||r.target,e!==t){Y(r,"currentTarget",{configurable:!0,get(){return e||a}});var m=I,f=O;E(null),b(null);try{for(var s,o=[];e!==null;){var c=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+i];if(l!=null&&(!e.disabled||r.target===e))if(j(l)){var[M,...W]=l;M.apply(e,[r,...W])}else l.call(e,r)}catch(y){s?o.push(y):s=y}if(r.cancelBubble||c===t||c===null)break;e=c}if(s){for(let y of o)queueMicrotask(()=>{throw y});throw s}}finally{r.__root=t,delete r.currentTarget,E(m),b(f)}}}function vr(r,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a+"")}function fr(r,t){return H(r,t)}function pr(r,t){L(),t.intro=t.intro??!1;const a=t.target,i=S,n=p;try{for(var e=C(a);e&&(e.nodeType!==8||e.data!==$);)e=F(e);if(!e)throw T;w(!0),A(e),Q();const u=H(r,{...t,anchor:e});if(p===null||p.nodeType!==8||p.data!==X)throw Z(),T;return w(!1),u}catch(u){if(u===T)return t.recover===!1&&z(),L(),G(a),w(!1),fr(r,t);throw u}finally{w(i),A(n),ar()}}const v=new Map;function H(r,{target:t,anchor:a,props:i={},events:n,context:e,intro:u=!0}){L();var d=new Set,_=f=>{for(var s=0;s<f.length;s++){var o=f[s];if(!d.has(o)){d.add(o);var c=ir(o);t.addEventListener(o,g,{passive:c});var l=v.get(o);l===void 0?(document.addEventListener(o,g,{passive:c}),v.set(o,1)):v.set(o,l+1)}}};_(J(k)),N.add(_);var h=void 0,m=K(()=>{var f=a??t.appendChild(U());return x(()=>{if(e){rr({});var s=tr;s.c=e}n&&(i.$$events=n),S&&nr(f,null),h=r(f,i)||{},S&&(O.nodes_end=p),e&&er()}),()=>{var c;for(var s of d){t.removeEventListener(s,g);var o=v.get(s);--o===0?(document.removeEventListener(s,g),v.delete(s)):v.set(s,o)}N.delete(_),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return R.set(h,m),h}let R=new WeakMap;function gr(r,t){const a=R.get(r);return a?(R.delete(r),a(t)):Promise.resolve()}export{or as a,hr as d,dr as e,pr as h,lr as l,fr as m,vr as s,gr as u};
