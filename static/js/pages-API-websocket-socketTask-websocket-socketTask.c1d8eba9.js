(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-websocket-socketTask-websocket-socketTask"],{"8b76":function(t,n,e){"use strict";e.r(n);var o=e("d222"),s=e.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=s.a},"8f84":function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}));var o={pageHead:e("7f90").default},s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:"websocket通讯示例"}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-view",{staticClass:"websocket-msg"},[t._v(t._s(t.showMsg))]),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.connect.apply(void 0,arguments)}}},[t._v("连接websocket服务")]),e("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:t.connected,expression:"connected"}],attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.send.apply(void 0,arguments)}}},[t._v("发送一条消息")]),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.close.apply(void 0,arguments)}}},[t._v("断开websocket服务")]),e("v-uni-view",{staticClass:"websocket-tips"},[t._v("发送消息后会收到一条服务器返回的消息（与发送的消息内容一致）")])],1)],1)],1)},c=[]},c00c:function(t,n,e){var o=e("ede0");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=e("4f06").default;s("60a58fce",o,!0,{sourceMap:!1,shadowMode:!1})},cc82:function(t,n,e){"use strict";e.r(n);var o=e("8f84"),s=e("8b76");for(var c in s)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return s[t]}))}(c);e("e2d2");var i=e("f0c5"),a=Object(i["a"])(s["default"],o["b"],o["c"],!1,null,"1b5e77b8",null,!1,o["a"],void 0);n["default"]=a.exports},d222:function(t,n,e){"use strict";(function(t){e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("d401"),e("d3b7"),e("25f0"),e("e25e");var o=uni.getSystemInfoSync().platform,s={data:function(){return{connected:!1,connecting:!1,socketTask:!1,msg:!1}},computed:{showMsg:function(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload:function(){uni.hideLoading(),this.socketTask&&this.socketTask.close&&this.socketTask.close()},methods:{connect:function(){var n=this;if(this.connected||this.connecting)return uni.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1;this.connecting=!0,uni.showLoading({title:"连接中..."}),this.socketTask=uni.connectSocket({url:"wss://echo.websocket.org",data:function(){return{msg:"Hello"}},success:function(t){},fail:function(t){}}),t.log(this.socketTask),this.socketTask.onOpen((function(e){n.connecting=!1,n.connected=!0,uni.hideLoading(),uni.showToast({icon:"none",title:"连接成功"}),t.log("onOpen",e)})),this.socketTask.onError((function(e){n.connecting=!1,n.connected=!1,uni.hideLoading(),uni.showModal({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),t.log("onError",e)})),this.socketTask.onMessage((function(e){n.msg=e.data,t.log("onMessage",e)})),this.socketTask.onClose((function(e){n.connected=!1,n.startRecive=!1,n.socketTask=!1,n.msg=!1,t.log("onClose",e)})),t.log("task",this.socketTask)},send:function(){this.socketTask.send({data:"from "+o+" : "+parseInt(1e4*Math.random()).toString(),success:function(n){t.log(n)},fail:function(n){t.log(n)}})},close:function(){this.socketTask&&this.socketTask.close&&this.socketTask.close()}}};n.default=s}).call(this,e("5a52")["default"])},e2d2:function(t,n,e){"use strict";var o=e("c00c"),s=e.n(o);s.a},ede0:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".uni-btn-v[data-v-1b5e77b8]{padding:%?10?% 0}.uni-btn-v uni-button[data-v-1b5e77b8]{margin:%?20?% 0}.websocket-msg[data-v-1b5e77b8]{padding:40px 0;text-align:center;font-size:14px;line-height:40px;color:#666}.websocket-tips[data-v-1b5e77b8]{padding:40px 0;text-align:center;font-size:14px;line-height:24px;color:#666}",""]),t.exports=n}}]);