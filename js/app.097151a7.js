(function(){"use strict";var e={2399:function(e,n,t){var r=t(5130),o=t(6768);function i(e,n,t,r,i,a){const u=(0,o.g2)("Header"),l=(0,o.g2)("DisplaySettings");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(u),(0,o.bF)(l)],64)}const a={class:"display-settings"},u={class:"view-toggle"},l={class:"view-container"},c={id:"map-view"},s={id:"list-view"};function p(e,n,t,i,p,d){const m=(0,o.g2)("OpenMap");return(0,o.uX)(),(0,o.CE)("div",a,[n[7]||(n[7]=(0,o.Lk)("h3",null,"Display Settings",-1)),(0,o.Lk)("div",u,[(0,o.Lk)("label",null,[(0,o.bo)((0,o.Lk)("input",{type:"radio",name:"view",value:"map","onUpdate:modelValue":n[0]||(n[0]=e=>p.currentView=e),onChange:n[1]||(n[1]=(...e)=>d.toggleView&&d.toggleView(...e))},null,544),[[r.XL,p.currentView]]),n[4]||(n[4]=(0,o.eW)(" Map View "))]),(0,o.Lk)("label",null,[(0,o.bo)((0,o.Lk)("input",{type:"radio",name:"view",value:"list","onUpdate:modelValue":n[2]||(n[2]=e=>p.currentView=e),onChange:n[3]||(n[3]=(...e)=>d.toggleView&&d.toggleView(...e))},null,544),[[r.XL,p.currentView]]),n[5]||(n[5]=(0,o.eW)(" List View "))])]),(0,o.Lk)("div",l,[(0,o.bo)((0,o.Lk)("div",c,[(0,o.bF)(m)],512),[[r.aG,"map"===p.currentView]]),(0,o.bo)((0,o.Lk)("div",s,n[6]||(n[6]=[(0,o.Lk)("p",null,"List View Content",-1),(0,o.Lk)("ul",{class:"item"},[(0,o.Lk)("li",null,"Item 1"),(0,o.Lk)("li",null,"Item 2"),(0,o.Lk)("li",null,"Item 3")],-1)]),512),[[r.aG,"list"===p.currentView]])])])}const d={id:"map"};function m(e,n,t,r,i,a){return(0,o.uX)(),(0,o.CE)("div",d)}t(1454);var f=t(6886),v=t.n(f),g=t.p+"img/marker-icon.d79f37cb.png",h={name:"OpenMap",data(){return{map:null}},mounted(){this.map=v().map("map").setView([55.0152622,11.9150684],13),v().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map);const e=v().icon({iconUrl:g,iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32]});v().marker([55.0152622,11.9150684],{icon:e}).addTo(this.map).bindPopup("Home Sweet Home").openPopup()}},w=t(1241);const b=(0,w.A)(h,[["render",m]]);var k=b,L={name:"App",components:{OpenMap:k},data(){return{currentView:"map"}},methods:{toggleView(){console.log(`View changed to: ${this.currentView}`)}}};const V=(0,w.A)(L,[["render",p]]);var y=V;const O={class:"app-header"};function A(e,n,t,r,i,a){return(0,o.uX)(),(0,o.CE)("header",O,n[0]||(n[0]=[(0,o.Lk)("nav",{class:"navbar"},[(0,o.Lk)("div",{class:"logo"},[(0,o.Lk)("h1",null,"ImmersiHome")]),(0,o.Lk)("ul",{class:"nav-links"},[(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#home"},"Home")])])],-1)]))}var C={name:"AppHeader"};const H=(0,w.A)(C,[["render",A],["__scopeId","data-v-0b03d7f8"]]);var j=H,x={name:"App",components:{Header:j,DisplaySettings:y}};const E=(0,w.A)(x,[["render",i]]);var F=E;(0,r.Ef)(F).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/ImmersiHome-Frontend/"}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],l=r[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(l)var s=l(t)}for(n&&n(r);c<a.length;c++)i=a[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunkimmersihome"]=self["webpackChunkimmersihome"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(2399)}));r=t.O(r)})();
//# sourceMappingURL=app.097151a7.js.map