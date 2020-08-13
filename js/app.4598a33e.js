(function(t){function e(e){for(var o,a,i=e[0],u=e[1],c=e[2],l=0,m=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&m.push(n[a][0]),n[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],o=!0,a=1;a<r.length;a++){var u=r[a];0!==n[u]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={app:0},s=[];function a(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"92270dd3"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=o);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(t);var c=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(l);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",c.name="ChunkLoadError",c.type=o,c.request=s,r[1](c)}n[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/simon-game/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),r("router-view")],1)},s=[],a=(r("5c0b"),r("2877")),i={},u=Object(a["a"])(i,n,s,!1,null,null,null),c=u.exports,l=(r("d3b7"),r("8c4f")),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"container"},[r("h1",[t._v("Simon Says")]),r("div",{staticClass:"simon"},[r("ul",[r("li",{ref:"1",staticClass:"red",class:{hoverable:t.status},on:{click:function(e){return t.clickChecker(1)}}}),r("li",{ref:"2",staticClass:"blue",class:{hoverable:t.status},on:{click:function(e){return t.clickChecker(2)}}}),r("li",{ref:"3",staticClass:"yellow",class:{hoverable:t.status},on:{click:function(e){return t.clickChecker(3)}}}),r("li",{ref:"4",staticClass:"green",class:{hoverable:t.status},on:{click:function(e){return t.clickChecker(4)}}})])]),r("div",{staticClass:"game-info"},[r("h2",[t._v(" Round: "),r("span",[t._v(t._s(t.level))])]),r("button",{attrs:{disabled:t.starterStatus},on:{click:function(e){return t.gameStarter()}}},[t._v("Start")]),r("p",[t._v(" "+t._s(t.message)+" ")])]),r("div",{staticClass:"game-options"},[r("h2",[t._v("Game Options:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],attrs:{type:"radio",name:"mode",value:"3.75",checked:""},domProps:{checked:t._q(t.mode,"3.75")},on:{change:function(e){t.mode="3.75"}}}),t._v("Легкий "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],attrs:{type:"radio",name:"mode",value:"2.5"},domProps:{checked:t._q(t.mode,"2.5")},on:{change:function(e){t.mode="2.5"}}}),t._v("Средний "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],attrs:{type:"radio",name:"mode",value:"1"},domProps:{checked:t._q(t.mode,"1")},on:{change:function(e){t.mode="1"}}}),t._v("Сложный "),r("br")])]),r("div",{ref:"sounds",attrs:{"data-action":"sound"}},t._l(t.sounds,(function(e){return r("audio",{key:e.id,ref:"sound "+e.id,refInFor:!0,attrs:{preload:"",src:t.publicPath+e.src}},[r("source",{attrs:{src:t.publicPath+e.src}})])})),0)])},m=[],f={data:function(){return{publicPath:"/simon-game/",randoms:[],level:0,clickCount:0,message:"",mode:1,status:!1,starterStatus:!1,tumblerTimer:400,sounds:[{id:1,src:"audio/1.mp3"},{id:2,src:"audio/2.mp3"},{id:3,src:"audio/3.mp3"},{id:4,src:"audio/4.mp3"}]}},methods:{colorTumbler:function(){for(var t=this,e=function(e){setTimeout((function(){t.$refs[t.randoms[e]].style.opacity=1,t.$refs["sound "+t.randoms[e]][0].play(),setTimeout((function(){t.$refs[t.randoms[e]].style.opacity=.6,t.$refs["sound "+t.randoms[e]][0].pause()}),t.tumblerTimer-100)}),e*t.tumblerTimer)},r=0;r<this.randoms.length;r++)e(r)},gameStarter:function(){this.starterStatus=!0,this.status=!0,this.level++,this.getRandom(1,4),this.colorTumbler()},getRandom:function(t,e){t=Math.ceil(t),e=Math.floor(e),this.randoms.push(Math.floor(Math.random()*(e-t+1))+t)},clickCounter:function(){this.clickCount++},clickChecker:function(t){var e=this;this.status?(this.$refs[t].style.opacity=1,setTimeout((function(){e.$refs[t].style.opacity=.6}),500),this.clickCount===this.randoms.length-1&&this.randoms[this.clickCount]===t?(this.clickCount=0,this.message="Отлично! Следующий уровень!",this.status=!1,setTimeout((function(){e.gameStarter()}),1e3),this.$refs["sound "+t][0].play()):this.randoms[this.clickCount]===t?(this.clickCounter(),this.$refs["sound "+t][0].play(),this.message="Хорошо, следующий клик!"):(this.message="Проигрыш, твой последний успех "+this.level+" уровень.",this.$refs["sound "+t][0].play(),this.clickCount=0,this.randoms=[],this.level=0,this.starterStatus=!1,this.status=!1)):(this.message="Жми старт, что бы начать/продолжить игру c "+this.level+" уровня!",this.status=!1,this.starterStatus=!1)}},watch:{mode:function(){this.tumblerTimer=400*+this.mode}}},h=f,p=Object(a["a"])(h,d,m,!1,null,null,null),v=p.exports;o["a"].use(l["a"]);var b=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],g=new l["a"]({mode:"history",base:"/simon-game/",routes:b}),y=g,k=r("2f62");o["a"].use(k["a"]);var _=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,o["a"].config.devtools=!0,new o["a"]({router:y,store:_,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var o=r("9c0c"),n=r.n(o);n.a},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.4598a33e.js.map