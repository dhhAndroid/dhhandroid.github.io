(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-component-communication-component-communication"],{"07afa":function(t,e,n){"use strict";n.r(e);var a=n("28bf"),i=n("945e");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"7c80fd46",null,!1,a["a"],void 0);e["default"]=c.exports},"112d":function(t,e,n){"use strict";var a=n("7b24"),i=n.n(a);i.a},"167e":function(t,e,n){"use strict";n.r(e);var a=n("2ce7"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"28bf":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={pageHead:n("7f90").default},i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:"组件通讯示例"}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("reciver"),e("sender"),e("sender-bus")],1)],1)],1)},r=[]},"29c9":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("d81e")),r=a(n("82a3")),u=a(n("95df")),c={components:{reciver:i.default,sender:r.default,senderBus:u.default},data:function(){return{}},methods:{}};e.default=c},"2ce7":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e25e");var a={methods:{send:function(){var t=parseInt(1e4*Math.random());uni.$emit("cc",{msg:"From event bus -> "+t})}}};e.default=a},"2d7c":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{msg:""}},created:function(){uni.$on("cc",this.recive)},beforeDestroy:function(){uni.$off("cc",this.recive)},methods:{recive:function(t){this.msg=t.msg}}};e.default=a},"32ca":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"reciver"},[this._v(this._s(""===this.msg?"等待发送":"收到消息：")+this._s(this.msg))])],1)},i=[]},4942:function(t,e,n){var a=n("a018");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("131e7cc0",a,!0,{sourceMap:!1,shadowMode:!1})},"5eb5":function(t,e,n){"use strict";var a=n("4942"),i=n.n(a);i.a},"66a2":function(t,e,n){"use strict";var a=n("c7bf"),i=n.n(a);i.a},"701b":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".sender-container[data-v-8a1ffc22]{padding:20px}",""]),t.exports=e},"7b24":function(t,e,n){var a=n("701b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("7edc74f4",a,!0,{sourceMap:!1,shadowMode:!1})},"82a3":function(t,e,n){"use strict";n.r(e);var a=n("c8f4"),i=n("9151");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("112d");var u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"8a1ffc22",null,!1,a["a"],void 0);e["default"]=c.exports},9151:function(t,e,n){"use strict";n.r(e);var a=n("e5c2"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"945e":function(t,e,n){"use strict";n.r(e);var a=n("29c9"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"95df":function(t,e,n){"use strict";n.r(e);var a=n("d66d8"),i=n("167e");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("66a2");var u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"6c33cc76",null,!1,a["a"],void 0);e["default"]=c.exports},a018:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".reciver[data-v-6fc920a8]{padding:40px 0;text-align:center;line-height:40px}",""]),t.exports=e},a3df:function(t,e,n){"use strict";n.r(e);var a=n("2d7c"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},bcf3:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".sender-container[data-v-6c33cc76]{padding:20px}",""]),t.exports=e},c7bf:function(t,e,n){var a=n("bcf3");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("5d86f636",a,!0,{sourceMap:!1,shadowMode:!1})},c8f4:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[t._v("点击发送消息")])],1)},i=[]},d66d8:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[t._v("自定义EventBus")])],1)},i=[]},d81e:function(t,e,n){"use strict";n.r(e);var a=n("32ca"),i=n("a3df");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("5eb5");var u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"6fc920a8",null,!1,a["a"],void 0);e["default"]=c.exports},e5c2:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e25e");var a={methods:{send:function(){var t=parseInt(1e4*Math.random());uni.$emit("cc",{msg:"From uni.$emit -> "+t})}}};e.default=a}}]);