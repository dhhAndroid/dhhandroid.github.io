(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-node-info-get-node-info"],{"03a1":function(t,e,n){var i=n("abc2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("51804b0f",i,!0,{sourceMap:!1,shadowMode:!1})},"18e3":function(t,e,n){"use strict";n.r(e);var i=n("4972"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},4972:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("14d9");var i={data:function(){return{title:"createSelectorQuery",top:0,left:"0px",info:[]}},onReady:function(){this.getNodeInfo()},methods:{setPosition:function(){this.left=Math.random()*uni.upx2px(320)+"px",this.top=Math.random()*uni.upx2px(320)+"px",this.getNodeInfo()},getNodeInfo:function(){var t=this;uni.createSelectorQuery().select(".target").boundingClientRect().exec((function(e){var n=e[0];if(n){var i=["left","right","top","bottom","width","height"],a=[];for(var o in i){var r=i[o];a.push({key:r,val:n[r]})}t.info=a}}))}}};e.default=i},"73f0":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={pageHead:n("7f90").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"movable block"},[n("v-uni-movable-area",[n("v-uni-movable-view",{staticClass:"target",attrs:{direction:"all"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.getNodeInfo.apply(void 0,arguments)}}},[t._v("Drag")])],1)],1),n("v-uni-view",{staticClass:"movable"},[n("v-uni-view",{staticClass:"info"},t._l(t.info,(function(e,i){return n("v-uni-view",{key:i},[n("v-uni-text",{staticClass:"b"},[t._v(t._s(e.key))]),n("v-uni-text",{staticClass:"span"},[t._v(t._s(e.val))])],1)})),1)],1)],1)],1)},o=[]},abc2:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".movable[data-v-5e600282]{display:flex;justify-content:center}.block[data-v-5e600282]{height:%?400?%;width:%?400?%;background-color:#fff;border:1px solid #ccc;position:relative;margin:0 auto;margin-bottom:%?30?%}uni-movable-area[data-v-5e600282]{height:%?400?%;width:%?400?%;position:relative}.target[data-v-5e600282]{height:%?80?%;width:%?80?%;line-height:%?80?%;text-align:center;color:#fff;background-color:#4cd964;font-size:%?28?%;position:absolute}.info[data-v-5e600282]{display:flex;flex-direction:column;justify-content:center;align-items:center}.b[data-v-5e600282]{font-weight:700;width:%?150?%;display:inline-block}.span[data-v-5e600282]{width:%?100?%;display:inline-block}",""]),t.exports=e},be3f:function(t,e,n){"use strict";n.r(e);var i=n("73f0"),a=n("18e3");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("e8c4");var r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5e600282",null,!1,i["a"],void 0);e["default"]=c.exports},e8c4:function(t,e,n){"use strict";var i=n("03a1"),a=n.n(i);a.a}}]);