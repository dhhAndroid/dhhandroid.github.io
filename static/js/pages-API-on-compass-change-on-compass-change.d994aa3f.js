(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-on-compass-change-on-compass-change"],{7201:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("e25e");var a={data:function(){return{title:"onCompassChange",direction:0}},onReady:function(){var t=this;uni.onCompassChange((function(i){t.direction=parseInt(i.direction)}))},onUnload:function(){uni.stopCompass(),this.direction=0}};i.default=a},"7d6d":function(t,i,e){t.exports=e.p+"static/img/compass.acb5847f.png"},"8d85":function(t,i,e){var a=e("a237");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("76e2ef41",a,!0,{sourceMap:!1,shadowMode:!1})},"8ef8":function(t,i,e){"use strict";var a=e("8d85"),n=e.n(a);n.a},"9d57":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={pageHead:e("7f90").default},n=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:this.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"uni-hello-text uni-center",staticStyle:{"padding-bottom":"50rpx"}},[this._v("旋转手机即可获取方位信息")]),i("v-uni-view",{staticClass:"direction"},[i("v-uni-view",{staticClass:"bg-compass-line"}),i("v-uni-image",{staticClass:"bg-compass",style:"transform: rotate("+this.direction+"deg)",attrs:{src:e("7d6d")}}),i("v-uni-view",{staticClass:"direction-value"},[i("v-uni-text",[this._v(this._s(this.direction))]),i("v-uni-text",{staticClass:"direction-degree"},[this._v("o")])],1)],1)],1)],1)},o=[]},a237:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".direction[data-v-0af6da47]{position:relative;margin-top:%?70?%;display:flex;width:%?540?%;height:%?540?%;align-items:center;justify-content:center;margin:0 auto}.direction-value[data-v-0af6da47]{position:relative;font-size:%?200?%;color:#353535;line-height:1;z-index:1}.direction-degree[data-v-0af6da47]{position:absolute;top:0;right:%?-40?%;font-size:%?60?%}.bg-compass[data-v-0af6da47]{position:absolute;top:0;left:0;width:%?540?%;height:%?540?%;transition:.1s}.bg-compass-line[data-v-0af6da47]{position:absolute;left:%?267?%;top:%?-10?%;width:%?6?%;height:%?56?%;background-color:#1aad19;border-radius:%?999?%;z-index:1}",""]),t.exports=i},c524:function(t,i,e){"use strict";e.r(i);var a=e("9d57"),n=e("ed29");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("8ef8");var s=e("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"0af6da47",null,!1,a["a"],void 0);i["default"]=r.exports},ed29:function(t,i,e){"use strict";e.r(i);var a=e("7201"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a}}]);