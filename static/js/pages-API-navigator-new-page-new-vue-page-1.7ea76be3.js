(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-vue-page-1"],{"1de4":function(t,e,n){var a=n("2de3");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("4727b910",a,!0,{sourceMap:!1,shadowMode:!1})},"2de3":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".new-page__text[data-v-23553570]{font-size:14px;color:#666}.root[data-v-23553570]{display:flex;flex:1;flex-direction:column}.page-body[data-v-23553570]{\n\t\t/* flex: 1; */display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.new-page__text-box[data-v-23553570]{padding:20px}.new-page__color[data-v-23553570]{display:flex;width:200px;height:100px;justify-content:center;align-items:center}.new-page__color-text[data-v-23553570]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-23553570]{margin-top:15px;width:300px}",""]),t.exports=e},"3cd4":function(t,e,n){"use strict";n.r(e);var a=n("fb3e"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"61cb":function(t,e,n){"use strict";n.r(e);var a=n("e3e8"),o=n("3cd4");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("ebab");var u=n("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"23553570",null,!1,a["a"],void 0);e["default"]=c.exports},e3e8:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={pageHead:n("7f90").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"root"},[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[t._v("从上个页面接收到参数："+t._s(t.data))])],1),n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:t.currentColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setColorIndex(t.colorIndex>1?0:t.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[t._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[t._v("点击上方色块使用vuex在页面之间进行通讯")])],1),n("v-uni-view",{staticClass:"new-page__button"},[n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToNvue.apply(void 0,arguments)}}},[t._v("跳转NVUE页面")]),n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToVue.apply(void 0,arguments)}}},[t._v("跳转VUE页面")])],1)],1)],1)},i=[]},ebab:function(t,e,n){"use strict";var a=n("1de4"),o=n.n(a);o.a},fb3e:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("5530")),i=n("26cb"),u={data:function(){return{title:"新页面",data:""}},computed:(0,o.default)((0,o.default)({},(0,i.mapState)(["colorIndex","colorList"])),(0,i.mapGetters)(["currentColor"])),onLoad:function(t){t.data&&(this.data=t.data),uni.$on("postMsg",(function(t){uni.showModal({content:"收到uni.$emit消息:".concat(t.msg),showCancel:!1})}))},onUnload:function(){uni.$off("postMsg")},methods:(0,o.default)((0,o.default)({},(0,i.mapMutations)(["setColorIndex"])),{},{navToNvue:function(){uni.navigateTo({url:"new-nvue-page-1"})},navToVue:function(){uni.navigateTo({url:"new-vue-page-2"})}})};e.default=u}}]);