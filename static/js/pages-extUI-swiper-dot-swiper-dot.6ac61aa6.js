(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-swiper-dot-swiper-dot"],{1804:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={uniSwiperDot:n("8840").default,uniSection:n("a842").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("uni-swiper-dot",{staticClass:"uni-swiper-dot-box",attrs:{info:t.info,current:t.current,mode:t.mode,"dots-styles":t.dotsStyles,field:"content"},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem.apply(void 0,arguments)}}},[n("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.swiperDotIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(3,(function(e,i){return n("v-uni-swiper-item",{key:i},[n("v-uni-view",{staticClass:"swiper-item",class:"swiper-item"+i},[n("v-uni-text",{staticStyle:{color:"#fff","font-size":"32px"}},[t._v(t._s(i+1))])],1)],1)})),1)],1),n("uni-section",{attrs:{title:"模式选择",type:"line"}},[n("v-uni-view",{staticClass:"example-body"},[n("v-uni-view",{staticClass:"example-body-item",class:{active:0===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("default",0)}}},[n("v-uni-text",{staticClass:"example-body-item-text"},[t._v("default")])],1),n("v-uni-view",{staticClass:"example-body-item",class:{active:1===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("dot",1)}}},[n("v-uni-text",{staticClass:"example-body-item-text"},[t._v("dot")])],1),n("v-uni-view",{staticClass:"example-body-item",class:{active:2===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("round",2)}}},[n("v-uni-text",{staticClass:"example-body-item-text"},[t._v("round")])],1),n("v-uni-view",{staticClass:"example-body-item",class:{active:3===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("nav",3)}}},[n("v-uni-text",{staticClass:"example-body-item-text"},[t._v("nav")])],1),n("v-uni-view",{staticClass:"example-body-item",class:{active:4===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("indexes",4)}}},[n("v-uni-text",{staticClass:"example-body-item-text"},[t._v("indexes")])],1)],1)],1),n("uni-section",{attrs:{title:"颜色样式选择",type:"line"}},[n("v-uni-view",{staticClass:"example-body"},["nav"!==t.mode?t._l(t.dotStyle,(function(e,i){return n("v-uni-view",{key:i,staticClass:"example-body-item",class:{active:t.styleIndex===i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectStyle(i)}}},[n("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":e.selectedBackgroundColor,border:e.selectedBorder}}),n("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":e.backgroundColor,border:e.border}}),n("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":e.backgroundColor,border:e.border}})],1)})):t._e(),"nav"===t.mode?t._l(t.dotStyle,(function(e,i){return n("v-uni-view",{key:i,staticClass:"example-body-item",class:{active:t.styleIndex===i},style:{"background-color":e.selectedBackgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectStyle(i)}}},[n("v-uni-text",{staticClass:"example-body-item-text",style:{color:e.color}},[t._v("内容")])],1)})):t._e()],2)],1)],1)},s=[]},"20b1e":function(t,e,n){"use strict";n.r(e);var i=n("604a"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},"3a7f":function(t,e,n){"use strict";var i=n("48c8"),o=n.n(i);o.a},"48c8":function(t,e,n){var i=n("dab3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("14c1dc90",i,!0,{sourceMap:!1,shadowMode:!1})},"54d6":function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",content:"内容 A"},{colorClass:"uni-bg-green",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"内容 B"},{colorClass:"uni-bg-blue",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"内容 C"}],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},{backgroundColor:"rgba(83, 200, 249,0.3)",border:"1px rgba(83, 200, 249,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(83, 200, 249,0.9)",selectedBorder:"1px rgba(83, 200, 249,0.9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{},swiperDotIndex:0}},onLoad:function(){},methods:{change:function(t){this.current=t.detail.current},selectStyle:function(t){this.dotsStyles=this.dotStyle[t],this.styleIndex=t},selectMode:function(t,e){this.mode=t,this.modeIndex=e,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]},clickItem:function(t){this.swiperDotIndex=t},onBanner:function(e){t.log(22222,e)}}};e.default=i}).call(this,n("5a52")["default"])},"604a":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"UniSwiperDot",emits:["clickItem"],props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:6,height:6,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=14,this.dots.height=14):(this.dots.width=6,this.dots.height=6)}},created:function(){"indexes"===this.mode&&(this.dots.width=12,this.dots.height=12),this.dots=Object.assign(this.dots,this.dotsStyles)},methods:{clickItem:function(t){this.$emit("clickItem",t)}}};e.default=i},"645c":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding:function(){return"string"===typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"710c":function(t,e,n){"use strict";var i=n("eb38"),o=n.n(i);o.a},7534:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiper-box[data-v-07f0c574]{height:200px}.swiper-item[data-v-07f0c574]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:200px;color:#fff}.swiper-item0[data-v-07f0c574]{background-color:#cee1fd}.swiper-item1[data-v-07f0c574]{background-color:#b2cef7}.swiper-item2[data-v-07f0c574]{background-color:#cee1fd}.image[data-v-07f0c574]{width:%?750?%}[data-v-07f0c574] .image img{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none}@media screen and (min-width:500px){.uni-swiper-dot-box[data-v-07f0c574]{width:400px;margin:0 auto;margin-top:8px}.image[data-v-07f0c574]{width:100%}}.uni-bg-red[data-v-07f0c574]{background-color:#ff5a5f}.uni-bg-green[data-v-07f0c574]{background-color:#09bb07}.uni-bg-blue[data-v-07f0c574]{background-color:#007aff}.example-body[data-v-07f0c574]{display:flex;flex-direction:row;padding:%?20?%}.example-body-item[data-v-07f0c574]{flex-direction:row;justify-content:center;align-items:center;margin:%?15?%;padding:%?15?%;height:%?60?%;display:flex;padding:0 %?15?%;flex:1;border-color:#e5e5e5;border-style:solid;border-width:1px;border-radius:5px}.example-body-item-text[data-v-07f0c574]{font-size:%?28?%;color:#333}.example-body-dots[data-v-07f0c574]{width:%?16?%;height:%?16?%;border-radius:50px;background-color:#333;margin-left:%?10?%}.active[data-v-07f0c574]{border-style:solid;border-color:#007aff;border-width:1px}',""]),t.exports=e},8840:function(t,e,n){"use strict";n.r(e);var i=n("ce19e"),o=n("20b1e");for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("3a7f");var d=n("f0c5"),a=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"3274adde",null,!1,i["a"],void 0);e["default"]=a.exports},"973a":function(t,e,n){"use strict";n.r(e);var i=n("54d6"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},a312:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section"},[n("v-uni-view",{staticClass:"uni-section-header",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.type?n("v-uni-view",{staticClass:"uni-section-header__decoration",class:t.type}):t._t("decoration"),n("v-uni-view",{staticClass:"uni-section-header__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle},style:{"font-size":t.titleFontSize,color:t.titleColor}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section-header__content-sub",style:{"font-size":t.subTitleFontSize,color:t.subTitleColor}},[t._v(t._s(t.subTitle))]):t._e()],1),n("v-uni-view",{staticClass:"uni-section-header__slot-right"},[t._t("right")],2)],2),n("v-uni-view",{staticClass:"uni-section-content",style:{padding:t._padding}},[t._t("default")],2)],1)},o=[]},a842:function(t,e,n){"use strict";n.r(e);var i=n("a312"),o=n("ef75");for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("b86e");var d=n("f0c5"),a=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"52a816e0",null,!1,i["a"],void 0);e["default"]=a.exports},b86e:function(t,e,n){"use strict";var i=n("e320"),o=n.n(i);o.a},ce19e:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?n("v-uni-view",{key:"default",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(i===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/2+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(i)}}})})),1):t._e(),"dot"===t.mode?n("v-uni-view",{key:"dot",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(i)}}})})),1):t._e(),"round"===t.mode?n("v-uni-view",{key:"round",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swiper__dots-item ",class:[i===t.current&&"uni-swiper__dots-long"],style:{width:(i===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(i)}}})})),1):t._e(),"nav"===t.mode?n("v-uni-view",{key:"nav",staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[n("v-uni-text",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?n("v-uni-view",{key:"indexes",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:i===t.current?t.dots.selectedColor:t.dots.color,"background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(i)}}},[n("v-uni-text",{staticClass:"uni-swiper__dots-indexes-text"},[t._v(t._s(i+1))])],1)})),1):t._e()],2)},o=[]},dab3:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-swiper__warp[data-v-3274adde]{display:flex;flex:1;flex-direction:column;position:relative;overflow:hidden}.uni-swiper__dots-box[data-v-3274adde]{position:absolute;bottom:10px;left:0;right:0;display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center}.uni-swiper__dots-item[data-v-3274adde]{width:8px;border-radius:100px;margin-left:6px;background-color:rgba(0,0,0,.4);cursor:pointer}.uni-swiper__dots-item[data-v-3274adde]:first-child{margin:0}.uni-swiper__dots-default[data-v-3274adde]{border-radius:100px}.uni-swiper__dots-long[data-v-3274adde]{border-radius:50px}.uni-swiper__dots-bar[data-v-3274adde]{border-radius:50px}.uni-swiper__dots-nav[data-v-3274adde]{bottom:0;padding:8px 0;display:flex;flex:1;flex-direction:row;justify-content:flex-start;align-items:center;background-color:rgba(0,0,0,.2)}.uni-swiper__dots-nav-item[data-v-3274adde]{\n  /* overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; */font-size:14px;color:#fff;margin:0 15px}.uni-swiper__dots-indexes[data-v-3274adde]{display:flex;justify-content:center;align-items:center}.uni-swiper__dots-indexes-text[data-v-3274adde]{color:#fff;font-size:12px;line-height:14px}',""]),t.exports=e},e320:function(t,e,n){var i=n("fbc8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("c6beee2c",i,!0,{sourceMap:!1,shadowMode:!1})},eb38:function(t,e,n){var i=n("7534");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("ab32c036",i,!0,{sourceMap:!1,shadowMode:!1})},ef75:function(t,e,n){"use strict";n.r(e);var i=n("645c"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},f893:function(t,e,n){"use strict";n.r(e);var i=n("1804"),o=n("973a");for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("710c");var d=n("f0c5"),a=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"07f0c574",null,!1,i["a"],void 0);e["default"]=a.exports},fbc8:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-section[data-v-52a816e0]{background-color:#fff}.uni-section .uni-section-header[data-v-52a816e0]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section .uni-section-header__decoration[data-v-52a816e0]{margin-right:6px;background-color:#2979ff}.uni-section .uni-section-header__decoration.line[data-v-52a816e0]{width:4px;height:12px;border-radius:10px}.uni-section .uni-section-header__decoration.circle[data-v-52a816e0]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px}.uni-section .uni-section-header__decoration.square[data-v-52a816e0]{width:8px;height:8px}.uni-section .uni-section-header__content[data-v-52a816e0]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section .uni-section-header__content .distraction[data-v-52a816e0]{flex-direction:row;align-items:center}.uni-section .uni-section-header__content-sub[data-v-52a816e0]{margin-top:2px}.uni-section .uni-section-header__slot-right[data-v-52a816e0]{font-size:14px}.uni-section .uni-section-content[data-v-52a816e0]{font-size:14px}',""]),t.exports=e}}]);