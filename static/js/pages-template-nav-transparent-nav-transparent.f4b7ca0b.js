(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-transparent-nav-transparent"],{4301:function(i,e,t){var n=t("24fb");e=n(!1),e.push([i.i,"uni-image[data-v-b07a8036],\nuni-swiper[data-v-b07a8036],\n.img-view[data-v-b07a8036]{width:%?750?%;width:100%;height:%?500?%}.page-section-title[data-v-b07a8036]{margin-top:%?50?%}",""]),i.exports=e},"4baa":function(i,e,t){"use strict";t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){}));var n=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"page"},[i.showSwiper?i._e():t("v-uni-view",{staticClass:"img-view"},[t("v-uni-image",{attrs:{src:i.imgUrls[0]}})],1),i.showSwiper?t("v-uni-swiper",{attrs:{"indicator-dots":"true"}},i._l(i.imgUrls,(function(i,e){return t("v-uni-swiper-item",{key:e},[t("v-uni-image",{attrs:{src:i}})],1)})),1):i._e(),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[t("v-uni-view",[i._v("在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。")]),t("v-uni-view",[i._v("在微信小程序端，导航栏始终为不透明样式。")])],1),t("v-uni-view",{staticClass:"uni-title uni-common-mt"},[i._v("图片类型")])],1),t("v-uni-view",{staticClass:"uni-list"},[t("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=i.$handleEvent(e),i.radioChange.apply(void 0,arguments)}}},i._l(i.items,(function(e,n){return t("v-uni-label",{key:n,staticClass:"uni-list-cell uni-list-cell-pd"},[t("v-uni-view",[i._v(i._s(e.name))]),t("v-uni-view",[t("v-uni-radio",{attrs:{value:e.value,checked:e.checked}})],1)],1)})),1)],1),t("v-uni-view",{staticStyle:{height:"1000rpx"}})],1)},a=[]},7538:function(i,e,t){"use strict";t.r(e);var n=t("4baa"),a=t("e96d");for(var u in a)["default"].indexOf(u)<0&&function(i){t.d(e,i,(function(){return a[i]}))}(u);t("e66c");var s=t("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"b07a8036",null,!1,n["a"],void 0);e["default"]=r.exports},"8e92":function(i,e,t){"use strict";t("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{showSwiper:!1,imgUrls:["../../../static/shuijiao.jpg","https://web-assets.dcloud.net.cn/unidoc/zh/muwu.jpg","https://web-assets.dcloud.net.cn/unidoc/zh/cbd.jpg"],items:[{value:"img",name:"静态图",checked:!0},{value:"swiper",name:"轮播图",checked:!1}]}},methods:{radioChange:function(i){this.showSwiper="swiper"===i.detail.value}}}},bf00:function(i,e,t){var n=t("4301");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=t("4f06").default;a("18bc66c6",n,!0,{sourceMap:!1,shadowMode:!1})},e66c:function(i,e,t){"use strict";var n=t("bf00"),a=t.n(n);a.a},e96d:function(i,e,t){"use strict";t.r(e);var n=t("8e92"),a=t.n(n);for(var u in n)["default"].indexOf(u)<0&&function(i){t.d(e,i,(function(){return n[i]}))}(u);e["default"]=a.a}}]);