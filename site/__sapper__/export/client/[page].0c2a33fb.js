import{S as t,i as s,s as a,b as e,e as c,t as n,q as o,h as i,f as r,c as l,d as h,g as d,j as u,k as p,l as f,y as m,o as g}from"./client.5c8c2906.js";function v(t){let s,a,v,E,T,j,x,H=t[0].title+"",$=t[0].html+"";return document.title=s=t[0].headTitle,{c(){a=e(),v=c("section"),E=c("h1"),T=n(H),j=e(),x=c("div"),this.h()},l(t){o('[data-svelte="svelte-5cvdq3"]',document.head).forEach(i),a=r(t),v=l(t,"SECTION",{class:!0});var s=h(v);E=l(s,"H1",{class:!0});var e=h(E);T=d(e,H),e.forEach(i),j=r(s),x=l(s,"DIV",{class:!0}),h(x).forEach(i),s.forEach(i),this.h()},h(){u(E,"class","title"),u(x,"class","md-content"),u(v,"class","md")},m(t,s){p(t,a,s),p(t,v,s),f(v,E),f(E,T),f(v,j),f(v,x),x.innerHTML=$},p(t,[a]){1&a&&s!==(s=t[0].headTitle)&&(document.title=s),1&a&&H!==(H=t[0].title+"")&&m(T,H),1&a&&$!==($=t[0].html+"")&&(x.innerHTML=$)},i:g,o:g,d(t){t&&i(a),t&&i(v)}}}async function E({params:{page:t}}){const s=await this.fetch(`component/${t}.json`);if(200===s.status){return{page:await s.json()}}this.error(404,"Not Found")}function T(t,s,a){let{page:e}=s;return t.$$set=t=>{"page"in t&&a(0,e=t.page)},[e]}export default class extends t{constructor(t){super(),s(this,t,T,v,a,{page:0})}}export{E as preload};
