(function(){"use strict";var e={2459:function(e,t,a){var n=a(5130),r=a(6768);function o(e,t,a,n,o,i){const l=(0,r.g2)("HeaderBar"),s=(0,r.g2)("DisplaySettings"),c=(0,r.g2)("FooterBar");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(l),(0,r.bF)(s),(0,r.bF)(c)],64)}const i={class:"headerbar"};function l(e,t,a,n,o,l){return(0,r.uX)(),(0,r.CE)("header",i,t[0]||(t[0]=[(0,r.Fv)('<div class="container" data-v-c88ccd18><nav data-v-c88ccd18><ul class="headerbar-links" data-v-c88ccd18><li data-v-c88ccd18><a href="#home" data-v-c88ccd18>Home</a></li><li data-v-c88ccd18><a href="#about" data-v-c88ccd18>About</a></li><li data-v-c88ccd18><a href="#services" data-v-c88ccd18>Services</a></li><li data-v-c88ccd18><a href="#contact" data-v-c88ccd18>Contact</a></li></ul></nav></div>',1)]))}var s={name:"HeaderBar"},c=a(1241);const d=(0,c.A)(s,[["render",l],["__scopeId","data-v-c88ccd18"]]);var u=d;const p={class:"footbar"};function h(e,t,a,n,o,i){return(0,r.uX)(),(0,r.CE)("footer",p,t[0]||(t[0]=[(0,r.Fv)('<div class="container" data-v-62ca682e><p data-v-62ca682e>© 2024 ImmersiHome. All rights reserved.</p><nav data-v-62ca682e><ul class="footbar-links" data-v-62ca682e><li data-v-62ca682e><a href="#privacy" data-v-62ca682e>Privacy Policy</a></li><li data-v-62ca682e><a href="#terms" data-v-62ca682e>Terms of Service</a></li><li data-v-62ca682e><a href="#contact" data-v-62ca682e>Contact Us</a></li></ul></nav></div>',1)]))}var m={name:"FootBar"};const v=(0,c.A)(m,[["render",h],["__scopeId","data-v-62ca682e"]]);var g=v,k=a(4232);const f={class:"display-settings"},L={class:"view-toggle"},y={class:"view-container"},b={id:"map-view"},w={id:"grid-view"},C={class:"grid-container"},_=["onClick"],A=["src"],V={class:"item-details"},E={class:"item-address"},F={class:"item-price"};function H(e,t,a,o,i,l){const s=(0,r.g2)("OpenMap");return(0,r.uX)(),(0,r.CE)("div",f,[t[6]||(t[6]=(0,r.Lk)("h3",null,"Display Settings",-1)),(0,r.Lk)("div",L,[(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"radio",name:"view",value:"map","onUpdate:modelValue":t[0]||(t[0]=e=>i.currentView=e),onChange:t[1]||(t[1]=(...e)=>l.toggleView&&l.toggleView(...e))},null,544),[[n.XL,i.currentView]]),t[4]||(t[4]=(0,r.eW)(" Map View "))]),(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"radio",name:"view",value:"list","onUpdate:modelValue":t[2]||(t[2]=e=>i.currentView=e),onChange:t[3]||(t[3]=(...e)=>l.toggleView&&l.toggleView(...e))},null,544),[[n.XL,i.currentView]]),t[5]||(t[5]=(0,r.eW)(" Grid View "))])]),(0,r.Lk)("div",y,[(0,r.bo)((0,r.Lk)("div",b,[(0,r.bF)(s)],512),[[n.aG,"map"===i.currentView]]),(0,r.bo)((0,r.Lk)("div",w,[(0,r.Lk)("div",C,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.items,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{key:t,class:"grid-item",onClick:t=>l.viewDetails(e)},[(0,r.Lk)("img",{src:e.image,alt:"Item image",class:"item-image"},null,8,A),(0,r.Lk)("div",V,[(0,r.Lk)("p",E,(0,k.v_)(e.address),1),(0,r.Lk)("p",F,(0,k.v_)(e.price),1)])],8,_)))),128))])],512),[[n.aG,"list"===i.currentView]])])])}a(4114);const O={class:"map-container"},X={class:"controls"};function x(e,t,a,o,i,l){return(0,r.uX)(),(0,r.CE)("div",O,[t[3]||(t[3]=(0,r.Lk)("div",{id:"map"},null,-1)),(0,r.Lk)("div",X,[t[2]||(t[2]=(0,r.Lk)("label",{for:"range"},"Set Range (km):",-1)),(0,r.bo)((0,r.Lk)("input",{type:"number",id:"range","onUpdate:modelValue":t[0]||(t[0]=e=>i.range=e),onInput:t[1]||(t[1]=(...e)=>l.updateRange&&l.updateRange(...e)),min:"1",max:"500"},null,544),[[n.Jo,i.range]])])])}a(1454);var j=a(6886),D=a.n(j),I=(a(1561),a.p+"img/marker-icon.d79f37cb.png"),M={name:"OpenMap",data(){return{map:null,centerMarker:null,rangeCircle:null,range:10}},mounted(){this.map=D().map("map").setView([55.0152622,11.9150684],13),D().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map);const e=D().icon({iconUrl:I,iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32]});this.centerMarker=D().marker(this.map.getCenter(),{icon:e}).addTo(this.map).bindPopup("Marker follows the map's center").openPopup(),this.rangeCircle=D().circle(this.map.getCenter(),{radius:1e3*this.range,color:"blue",fillColor:"blue",fillOpacity:.1}).addTo(this.map),this.map.on("move",(()=>{requestAnimationFrame((()=>{const e=this.map.getCenter();this.centerMarker.setLatLng(e),this.rangeCircle.setLatLng(e)}))}));const t=D().Control.geocoder({defaultMarkGeocode:!1,collapsed:!1,geocoder:D().Control.Geocoder.nominatim({geocodingQueryParams:{countrycodes:"dk",featuretype:"postcode"}})}).on("markgeocode",(e=>{const{bbox:t,center:a}=e.geocode;this.map.fitBounds(t),this.centerMarker.setLatLng(a),this.rangeCircle.setLatLng(a),this.centerMarker.bindPopup(e.geocode.name).openPopup()})).addTo(this.map),a=t.getContainer(),n=document.getElementById("map");n.insertBefore(a,n.firstChild)},methods:{updateRange(){this.range<1&&(this.range=1),this.range>500&&(this.range=500),this.rangeCircle.setRadius(1e3*this.range)}}};const P=(0,c.A)(M,[["render",x]]);var S=P,B={name:"App",components:{OpenMap:S},data(){return{currentView:"map",items:[{id:1,image:"https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg",address:"Address placeholder",price:"200,000 kr"},{id:2,image:"https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg",address:"Address placeholder",price:"300,000 kr"},{id:3,image:"https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg",address:"Address placeholder",price:"400,000 kr"},{id:4,image:"https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg",address:"Address placeholder",price:"500,000 kr"},{id:5,image:"https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg",address:"Address placeholder",price:"600,000 kr"},{id:6,image:"https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg",address:"Address placeholder",price:"700,000 kr"},{id:7,image:"https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg",address:"Address placeholder",price:"800,000 kr"},{id:8,image:"https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg",address:"Address placeholder",price:"900,000 kr"}]}},methods:{toggleView(){console.log(`View changed to: ${this.currentView}`)},viewDetails(e){e.id?(console.log("Navigating to HomeDetail with id:",e.id),this.$router.push({name:"HomeDetail",params:{id:e.id}})):console.error("Item does not have an id:",e)}}};const G=(0,c.A)(B,[["render",H],["__scopeId","data-v-3f20b68c"]]);var T=G,W={name:"App",components:{HeaderBar:u,FooterBar:g,DisplaySettings:T}};const K=(0,c.A)(W,[["render",o]]);var N=K,R=a(1387);const U={class:"home-detail"},z={key:0},$=["src"],q={key:1};function J(e,t,a,n,o,i){return(0,r.uX)(),(0,r.CE)("div",U,[t[13]||(t[13]=(0,r.Lk)("h2",null,"Home Details",-1)),o.home?((0,r.uX)(),(0,r.CE)("div",z,[(0,r.Lk)("img",{src:o.home.image,alt:"Home image",class:"home-image"},null,8,$),(0,r.Lk)("h3",null,(0,k.v_)(o.home.address),1),(0,r.Lk)("p",null,[t[0]||(t[0]=(0,r.Lk)("strong",null,"Price:",-1)),(0,r.eW)(" "+(0,k.v_)(o.home.price),1)]),(0,r.Lk)("p",null,[t[1]||(t[1]=(0,r.Lk)("strong",null,"Deposit:",-1)),(0,r.eW)(" "+(0,k.v_)(o.home.deposit),1)]),(0,r.Lk)("p",null,[t[2]||(t[2]=(0,r.Lk)("strong",null,"Public Valuation:",-1)),(0,r.eW)(" "+(0,k.v_)(o.home.publicValuation),1)]),t[7]||(t[7]=(0,r.Lk)("h3",null,"Overview",-1)),(0,r.Lk)("p",null,(0,k.v_)(o.home.overview),1),t[8]||(t[8]=(0,r.Lk)("h3",null,"Price and Development",-1)),(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.home.priceHistory,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.date},(0,k.v_)(e.date)+": "+(0,k.v_)(e.event)+" - "+(0,k.v_)(e.price),1)))),128))]),t[9]||(t[9]=(0,r.Lk)("h3",null,"Nearby Schools",-1)),(0,r.Lk)("table",null,[t[3]||(t[3]=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"Name"),(0,r.Lk)("th",null,"Trivsel"),(0,r.Lk)("th",null,"Karaktergennemsnit"),(0,r.Lk)("th",null,"Afstand")])],-1)),(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.home.nearbySchools,(e=>((0,r.uX)(),(0,r.CE)("tr",{key:e.name},[(0,r.Lk)("td",null,(0,k.v_)(e.name),1),(0,r.Lk)("td",null,(0,k.v_)(e.trivsel),1),(0,r.Lk)("td",null,(0,k.v_)(e.averageGrade),1),(0,r.Lk)("td",null,(0,k.v_)(e.distance),1)])))),128))])]),t[10]||(t[10]=(0,r.Lk)("h3",null,"Additional Details",-1)),t[11]||(t[11]=(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,"Internet Availability:")],-1)),(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.home.internetConnections,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.type},(0,k.v_)(e.type)+": "+(0,k.v_)(e.speed),1)))),128))]),t[12]||(t[12]=(0,r.Lk)("h3",null,"Contact",-1)),(0,r.Lk)("p",null,[t[4]||(t[4]=(0,r.Lk)("strong",null,"Agent:",-1)),(0,r.eW)(" "+(0,k.v_)(o.home.agent.name),1)]),(0,r.Lk)("p",null,[t[5]||(t[5]=(0,r.Lk)("strong",null,"Phone:",-1)),(0,r.eW)(" "+(0,k.v_)(o.home.agent.phone),1)]),(0,r.Lk)("p",null,[t[6]||(t[6]=(0,r.Lk)("strong",null,"Email:",-1)),(0,r.eW)(" "+(0,k.v_)(o.home.agent.email),1)])])):((0,r.uX)(),(0,r.CE)("p",q,"Loading..."))])}var Q={name:"HomeDetail",props:["id"],data(){return{home:null}},created(){console.log("HomeDetail created with id:",this.id),this.fetchHomeDetails(this.id)},methods:{fetchHomeDetails(e){const t=[{id:1,image:"https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg",address:"address",price:"1.000.000 kr.",deposit:"100.000 kr.",publicValuation:"1.000.000 kr.",overview:"Overview of the home",priceHistory:[{date:"22. januar",event:"Listed for sale",price:"100.000 kr."},{date:"Nov. 2024",event:"Price drop",price:"50.000 kr."}],nearbySchools:[{name:"Skole 1",trivsel:"3.8",averageGrade:"6.8",distance:"1.07 km"},{name:"Skole 2",trivsel:"3.7",averageGrade:"7.1",distance:"1.53 km"}],internetConnections:[{type:"Fiber",speed:"1000 / 1000 Mbit/s"},{type:"Kabel-tv",speed:"1000 / 500 Mbit/s"}],agent:{name:"Name",phone:"Phone",email:"Email"}}];this.home=t.find((t=>t.id===parseInt(e,10))),console.log("Fetched home details:",this.home)}}};const Y=(0,c.A)(Q,[["render",J],["__scopeId","data-v-cf50f9b8"]]);var Z=Y;const ee=[{path:"/",name:"Home",component:T},{path:"/home/:id",name:"HomeDetail",component:Z,props:!0}],te=(0,R.aE)({history:(0,R.LA)(),routes:ee});var ae=te;const ne=(0,n.Ef)(N);ne.use(ae),ne.mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var l=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/ImmersiHome-Frontend/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],l=n[1],s=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var d=s(a)}for(t&&t(n);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},n=self["webpackChunkimmersihome"]=self["webpackChunkimmersihome"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(2459)}));n=a.O(n)})();
//# sourceMappingURL=app.e63d7c0e.js.map