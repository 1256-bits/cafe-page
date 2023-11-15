(()=>{"use strict";var e,t,n,r={680:(e,t,n)=>{function r(){const e=document.createElement("div"),t=document.createElement("h2");return e.classList.add("tab"),t.classList.add("center"),t.innerText="Welcome to Real Human cafe",e.append(t,function(){const e=document.createElement("section"),t=document.createElement("h3"),n=document.createElement("div"),r=document.createElement("p"),i=document.createElement("p");return e.classList.add("section"),t.classList.toggle("center"),n.classList.add("justify"),r.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas hendrerit vulputate diam sed interdum.Nulla maximus tincidunt purus, eu aliquet sem pulvinar id.Ut id dictum tortor.Quisque ut blandit diam, vel laoreet lorem.Morbi in sapien diam.Fusce eu sem sapien.Aenean hendrerit tincidunt lorem, id dictum tellus sagittis ut.Nunc ac risus in magna ultrices commodo.Proin a dui quam.Donec efficitur elementum elit in rutrum.Quisque pharetra eget elit sit amet ultricies.Ut pellentesque congue ex, sed luctus urna egestas in.Praesent egestas volutpat mauris. Suspendisse et turpis id dui posuere porta.",i.innerText="Nulla interdum malesuada orci id maximus. Sed tempor ligula nonneque suscipit, id laoreet libero posuere. Praesent lobortis arcueu pretium gravida. Duis ac laoreet enim. Fusce velit libero,ullamcorper auctor faucibus eu, consectetur et velit. Pellentesquehabitant morbi tristique senectus et netus et malesuada fames acturpis egestas. Sed tincidunt ultricies orci ac mattis. Ut nonsapien ullamcorper, rutrum sapien sed, facilisis ipsum. Phaselluspretium nisi a eros pulvinar mollis.",n.append(r,i),e.append(t,n),e}(),function(){const e={mon:{day:"Monday",open:9,close:22},teu:{day:"Teusday",open:9,close:22},wed:{day:"Wednesday",open:9,close:22},thu:{day:"Thursday",open:9,close:22},fri:{day:"Friday",open:9,close:22},sat:{day:"Saturday",open:8,close:23},sun:{day:"Sunday",open:9,close:24}},t=document.createElement("section"),n=document.createElement("h3"),r=document.createElement("ul");t.classList.add("section","hours","center"),n.classList.add("center"),n.innerText="Our working hours:",r.classList.add("schedule");for(let t in e){const n=document.createElement("li"),i=e[t].close-12;n.innerText=`${e[t].day}: ${e[t].open}am - ${i}pm`,r.appendChild(n)}return t.append(n,r),t}(),function(){const e=document.createElement("section"),t=document.createElement("h3"),n=document.createElement("p");return e.classList.add("section","address","center"),t.classList.add("center"),t.innerText="Our address:",n.innerText="12 Meow Street, Cat City, Republic of Sealand",e.append(t,n),e}()),e}const i=document.querySelector("main"),a=document.getElementById("about-us"),s=document.getElementById("testimonials"),o=document.getElementById("thanks");a.addEventListener("click",(()=>{i.lastElementChild&&i.removeChild(i.lastElementChild),i.appendChild(r())})),s.addEventListener("click",(async function(){const e=await n.e(543).then(n.bind(n,189));i.lastElementChild&&i.removeChild(i.lastElementChild),i.appendChild(e.default())})),o.addEventListener("click",(async function(){const e=await n.e(965).then(n.bind(n,965));i.lastElementChild&&i.removeChild(i.lastElementChild),i.appendChild(e.default())})),i.appendChild(r())}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return r[e](n,n.exports,a),n.exports}a.m=r,e=[],a.O=(t,n,r,i)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,r,i]=e[u],o=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(a.O).every((e=>a.O[e](n[l])))?n.splice(l--,1):(o=!1,i<s&&(s=i));if(o){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+".js",a.miniCssF=e=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="my-webpack-project:",a.l=(e,r,i,s)=>{if(t[e])t[e].push(r);else{var o,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+i){o=d;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",n+i),o.src=e),t[e]=[r];var m=(n,r)=>{o.onerror=o.onload=null,clearTimeout(p);var i=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((e=>e(r))),n)return n(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),l&&document.head.appendChild(o)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0,532:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(532!=t){var i=new Promise(((n,i)=>r=e[t]=[n,i]));n.push(r[2]=i);var s=a.p+a.u(t),o=new Error;a.l(s,(n=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",o.name="ChunkLoadError",o.type=i,o.request=s,r[1](o)}}),"chunk-"+t,t)}else e[t]=0},a.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[s,o,l]=n,c=0;if(s.some((t=>0!==e[t]))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(l)var u=l(a)}for(t&&t(n);c<s.length;c++)i=s[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var s=a.O(void 0,[532],(()=>a(680)));s=a.O(s)})();
//# sourceMappingURL=main.js.map