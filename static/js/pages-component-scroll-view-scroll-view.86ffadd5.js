(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-scroll-view-scroll-view"],{"01b7":function(t,i,e){var l=e("24fb");i=l(!1),i.push([t.i,".scroll-Y[data-v-5a471886]{height:%?300?%}.scroll-view_H[data-v-5a471886]{white-space:nowrap;width:100%}.scroll-view-item[data-v-5a471886]{height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}.scroll-view-item_H[data-v-5a471886]{display:inline-block;width:100%;height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}",""]),t.exports=i},"1a1a":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return l}));var l={pageHead:e("7f90").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("page-head",{attrs:{title:"scroll-view,区域滚动视图"}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Vertical Scroll"),e("v-uni-text",[t._v("\\n纵向滚动")])],1),e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"},on:{scrolltoupper:function(i){arguments[0]=i=t.$handleEvent(i),t.upper.apply(void 0,arguments)},scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.lower.apply(void 0,arguments)},scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"scroll-view-item uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),e("v-uni-view",{staticClass:"scroll-view-item uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),e("v-uni-view",{staticClass:"scroll-view-item uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),e("v-uni-view",{staticClass:"uni-link uni-center uni-common-mt",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTop.apply(void 0,arguments)}}},[t._v("点击这里返回顶部")]),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Horizontal Scroll"),e("v-uni-text",[t._v("\\n横向滚动")])],1),e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"120"},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),e("v-uni-view",{staticClass:"uni-common-pb"})],1)],1)},o=[]},2927:function(t,i,e){var l=e("01b7");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);var n=e("4f06").default;n("1791f4ba",l,!0,{sourceMap:!1,shadowMode:!1})},"3ff6":function(t,i,e){"use strict";(function(t){e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var l={data:function(){return{scrollTop:0,old:{scrollTop:0}}},methods:{upper:function(i){t.log(i)},lower:function(i){t.log(i)},scroll:function(i){t.log(i),this.old.scrollTop=i.detail.scrollTop},goTop:function(t){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),uni.showToast({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})}}};i.default=l}).call(this,e("5a52")["default"])},a11c:function(t,i,e){"use strict";e.r(i);var l=e("3ff6"),n=e.n(l);for(var o in l)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return l[t]}))}(o);i["default"]=n.a},d306:function(t,i,e){"use strict";e.r(i);var l=e("1a1a"),n=e("a11c");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("f9be");var s=e("f0c5"),a=Object(s["a"])(n["default"],l["b"],l["c"],!1,null,"5a471886",null,!1,l["a"],void 0);i["default"]=a.exports},f9be:function(t,i,e){"use strict";var l=e("2927"),n=e.n(l);n.a}}]);