(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-swiper-swiper"],{"16ef":function(i,t,a){"use strict";a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}));var n={pageHead:a("7f90").default},e=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:"swiper,可滑动视图"}}),a("v-uni-view",{staticClass:"uni-margin-wrap"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,"indicator-dots":i.indicatorDots,autoplay:i.autoplay,interval:i.interval,duration:i.duration}},[a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item uni-bg-red"},[i._v("A")])],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item uni-bg-green"},[i._v("B")])],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item uni-bg-blue"},[i._v("C")])],1)],1)],1),a("v-uni-view",{staticClass:"swiper-list"},[a("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-view",{staticClass:"uni-list-cell-db"},[i._v("指示点")]),a("v-uni-switch",{attrs:{checked:i.indicatorDots},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.changeIndicatorDots.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-view",{staticClass:"uni-list-cell-db"},[i._v("自动播放")]),a("v-uni-switch",{attrs:{checked:i.autoplay},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.changeAutoplay.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-text",[i._v("幻灯片切换时长(ms)")]),a("v-uni-text",{staticClass:"info"},[i._v(i._s(i.duration))])],1),a("v-uni-slider",{attrs:{value:i.duration,min:"500",max:"2000"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.durationChange.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-text",[i._v("自动播放间隔时长(ms)")]),a("v-uni-text",{staticClass:"info"},[i._v(i._s(i.interval))])],1),a("v-uni-slider",{attrs:{value:i.interval,min:"2000",max:"10000"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.intervalChange.apply(void 0,arguments)}}})],1)],1)},s=[]},"17cf":function(i,t,a){var n=a("24fb");t=n(!1),t.push([i.i,".uni-margin-wrap[data-v-87ad3da6]{width:%?690?%;width:100%}.swiper[data-v-87ad3da6]{height:%?300?%}.swiper-item[data-v-87ad3da6]{display:block;height:%?300?%;line-height:%?300?%;text-align:center}.swiper-list[data-v-87ad3da6]{margin-top:%?40?%;margin-bottom:0}.uni-common-mt[data-v-87ad3da6]{margin-top:%?60?%;position:relative}.info[data-v-87ad3da6]{position:absolute;right:%?20?%}.uni-padding-wrap[data-v-87ad3da6]{width:%?550?%;padding:0 %?100?%}",""]),i.exports=t},"78c9":function(i,t,a){"use strict";var n=a("e08b"),e=a.n(n);e.a},ba72:function(i,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(i){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(i){this.autoplay=!this.autoplay},intervalChange:function(i){this.interval=i.detail.value},durationChange:function(i){this.duration=i.detail.value}}}},dbf3:function(i,t,a){"use strict";a.r(t);var n=a("ba72"),e=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(i){a.d(t,i,(function(){return n[i]}))}(s);t["default"]=e.a},e08b:function(i,t,a){var n=a("17cf");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var e=a("4f06").default;e("4bfaf348",n,!0,{sourceMap:!1,shadowMode:!1})},ee05e:function(i,t,a){"use strict";a.r(t);var n=a("16ef"),e=a("dbf3");for(var s in e)["default"].indexOf(s)<0&&function(i){a.d(t,i,(function(){return e[i]}))}(s);a("78c9");var u=a("f0c5"),o=Object(u["a"])(e["default"],n["b"],n["c"],!1,null,"87ad3da6",null,!1,n["a"],void 0);t["default"]=o.exports}}]);