(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-transition-transition"],{"15f2":function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={components:{},data:function(){return{show:!0,modeClass:"fade",styles:{}}},onLoad:function(){},methods:{handle:function(t){this.show=!this.show,this.modeClass=t},custom:function(){this.$refs.ani.step({width:"100px",height:"100px",rotate:"180"},{delay:200,duration:300}),this.$refs.ani.step({width:"100px",height:"100px",rotate:"0"},{transformOrigin:"50% 50%"}),this.$refs.ani.step({translateX:"-100px"},{timingFunction:"ease-in",duration:100}),this.$refs.ani.step({translateX:"100px"},{timingFunction:"ease",duration:300}),this.$refs.ani.step({translateX:"50px",scale:1.5},{timingFunction:"linear",duration:100}),this.$refs.ani.step({translateX:"0px",scale:1},{timingFunction:"linear",duration:150}),this.$refs.ani.run()}}}},2533:function(t,n,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.createAnimation=function(t,n){if(!n)return;return clearTimeout(n.timer),new r(t,n)},i("caad"),i("2532"),i("99af"),i("d3b7"),i("159b");var e=a(i("5530")),s=a(i("d4ec")),o=a(i("bee2")),r=function(){function t(n,i){(0,s.default)(this,t),this.options=n,this.animation=uni.createAnimation(n),this.currentStepAnimates={},this.next=0,this.$=i}return(0,o.default)(t,[{key:"_nvuePushAnimates",value:function(t,n){var i=this.currentStepAnimates[this.next],a={};if(a=i||{styles:{},config:{}},u.includes(t)){a.styles.transform||(a.styles.transform="");var e="";"rotate"===t&&(e="deg"),a.styles.transform+="".concat(t,"(").concat(n+e,") ")}else a.styles[t]="".concat(n);this.currentStepAnimates[this.next]=a}},{key:"_animateRun",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.$.$refs["ani"].ref;if(i)return new Promise((function(a,s){nvueAnimation.transition(i,(0,e.default)({styles:t},n),(function(t){a()}))}))}},{key:"_nvueNextAnimate",value:function(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0,e=t[i];if(e){var s=e.styles,o=e.config;this._animateRun(s,o).then((function(){i+=1,n._nvueNextAnimate(t,i,a)}))}else this.currentStepAnimates={},"function"===typeof a&&a(),this.isEnd=!0}},{key:"step",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.animation.step(t),this}},{key:"run",value:function(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((function(){"function"===typeof t&&t()}),this.$.durationTime)}}]),t}(),u=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];u.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((function(t){r.prototype[t]=function(){var n;return(n=this.animation)[t].apply(n,arguments),this}}))},3191:function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.example[data-v-7a81201a]{display:flex;justify-content:center;align-items:center;height:150px;background-color:#fff}.example-body[data-v-7a81201a]{padding:10px 20px;padding-bottom:0}.transition-button[data-v-7a81201a]{width:100%;flex:1;margin-bottom:10px}.example[data-v-7a81201a]  .transition{display:flex;justify-content:center;align-items:center;width:100px;height:100px;border-radius:5px;text-align:center;background-color:#4cd964;box-shadow:0 0 5px 1px rgba(0,0,0,.2)}.text[data-v-7a81201a]{font-size:14px;color:#fff}',""]),t.exports=n},"3f1a":function(t,n,i){var a=i("3191");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("99151b3a",a,!0,{sourceMap:!1,shadowMode:!1})},"44e6":function(t,n,i){"use strict";i.r(n);var a=i("15f2"),e=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(s);n["default"]=e.a},"5dc5":function(t,n,i){"use strict";var a=i("3f1a"),e=i.n(a);e.a},"9b82":function(t,n,i){"use strict";i.r(n);var a=i("fd81"),e=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(s);n["default"]=e.a},c75b:function(t,n,i){"use strict";i.r(n);var a=i("e5e5"),e=i("9b82");for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(s);var o=i("f0c5"),r=Object(o["a"])(e["default"],a["b"],a["c"],!1,null,"acf5fb64",null,!1,a["a"],void 0);n["default"]=r.exports},e5e5:function(t,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return e})),i.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return t.isShow?i("v-uni-view",{ref:"ani",class:t.customClass,style:t.transformStyles,attrs:{animation:t.animationData},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},e=[]},e882:function(t,n,i){"use strict";i.r(n);var a=i("ff7a"),e=i("44e6");for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(s);i("5dc5");var o=i("f0c5"),r=Object(o["a"])(e["default"],a["b"],a["c"],!1,null,"7a81201a",null,!1,a["a"],void 0);n["default"]=r.exports},fd81:function(t,n,i){"use strict";(function(t){i("7a82");var a=i("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a(i("2909")),s=a(i("53ca")),o=a(i("5530"));i("a9e3"),i("d3b7"),i("159b"),i("99af"),i("ac1f"),i("5319");var r=i("2533"),u={name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:function(){return"fade"}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}},customClass:{type:String,default:""}},data:function(){return{isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}},watch:{show:{handler:function(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,o.default)((0,o.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),n="";for(var i in t){var a=this.toLine(i);n+=a+":"+t[i]+";"}return n},transformStyles:function(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created:function(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.duration&&(this.durationTime=t.duration),this.animation=(0,r.createAnimation)(Object.assign(this.config,t),this)},onClick:function(){this.$emit("click",{detail:this.isShow})},step:function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.animation){for(var a in n)try{var o;if("object"===(0,s.default)(n[a]))(o=this.animation)[a].apply(o,(0,e.default)(n[a]));else this.animation[a](n[a])}catch(r){t.error("方法 ".concat(a," 不存在"))}return this.animation.step(i),this}},run:function(t){this.animation&&this.animation.run(t)},open:function(){var t=this;clearTimeout(this.timer),this.transform="",this.isShow=!0;var n=this.styleInit(!1),i=n.opacity,a=n.transform;"undefined"!==typeof i&&(this.opacity=i),this.transform=a,this.$nextTick((function(){t.timer=setTimeout((function(){t.animation=(0,r.createAnimation)(t.config,t),t.tranfromInit(!1).step(),t.animation.run(),t.$emit("change",{detail:t.isShow})}),20)}))},close:function(t){var n=this;this.animation&&this.tranfromInit(!0).step().run((function(){n.isShow=!1,n.animationData=null,n.animation=null;var t=n.styleInit(!1),i=t.opacity,a=t.transform;n.opacity=i||1,n.transform=a,n.$emit("change",{detail:n.isShow})}))},styleInit:function(t){var n=this,i={transform:""},a=function(t,a){"fade"===a?i.opacity=n.animationType(t)[a]:i.transform+=n.animationType(t)[a]+" "};return"string"===typeof this.modeClass?a(t,this.modeClass):this.modeClass.forEach((function(n){a(t,n)})),i},tranfromInit:function(t){var n=this,i=function(t,i){var a=null;"fade"===i?a=t?0:1:(a=t?"-100%":"0","zoom-in"===i&&(a=t?.8:1),"zoom-out"===i&&(a=t?1.2:1),"slide-right"===i&&(a=t?"100%":"0"),"slide-bottom"===i&&(a=t?"100%":"0")),n.animation[n.animationMode()[i]](a)};return"string"===typeof this.modeClass?i(t,this.modeClass):this.modeClass.forEach((function(n){i(t,n)})),this.animation},animationType:function(t){return{fade:t?1:0,"slide-top":"translateY(".concat(t?"0":"-100%",")"),"slide-right":"translateX(".concat(t?"0":"100%",")"),"slide-bottom":"translateY(".concat(t?"0":"100%",")"),"slide-left":"translateX(".concat(t?"0":"-100%",")"),"zoom-in":"scaleX(".concat(t?1:.8,") scaleY(").concat(t?1:.8,")"),"zoom-out":"scaleX(".concat(t?1:1.2,") scaleY(").concat(t?1:1.2,")")}},animationMode:function(){return{fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};n.default=u}).call(this,i("5a52")["default"])},ff7a:function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return a}));var a={uniCard:i("8d2e").default,uniSection:i("a842").default,uniTransition:i("c75b").default},e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[i("v-uni-text",{staticClass:"uni-h6"},[t._v("过渡动画，通常用于元素的过渡效果，例如淡隐淡出效果，遮罩层的效果、放大缩小的效果等")])],1),i("uni-section",{attrs:{title:"示例",type:"line"}},[i("v-uni-view",{staticClass:"example"},[i("uni-transition",{ref:"ani",attrs:{"custom-class":"transition","mode-class":t.modeClass,styles:t.styles,show:t.show}},[i("v-uni-text",{staticClass:"text"},[t._v("示例元素")])],1)],1)],1),i("uni-section",{attrs:{title:"操作",subTitle:"点击按钮 ,切换动画效果",type:"line"}},[i("v-uni-view",{staticClass:"example-body"},[i("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handle("fade")}}},[t._v("淡隐淡出")]),i("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handle(["fade","slide-top"])}}},[t._v("由上至下")]),i("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handle(["fade","slide-right"])}}},[t._v("由右至左过")]),i("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handle(["fade","zoom-in"])}}},[t._v("由小到大过")]),i("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.custom.apply(void 0,arguments)}}},[t._v("自定义动画")])],1)],1)],1)},s=[]}}]);