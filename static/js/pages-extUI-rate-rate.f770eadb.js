(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-rate-rate"],{"2f76":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-rate[data-v-588f4815]{display:flex;line-height:1;font-size:0;flex-direction:row;cursor:pointer}.uni-rate__icon[data-v-588f4815]{position:relative;line-height:1;font-size:0}.uni-rate__icon-on[data-v-588f4815]{overflow:hidden;position:absolute;top:0;left:0;line-height:1;text-align:left}.uni-cursor-not-allowed[data-v-588f4815]{cursor:not-allowed!important}',""]),t.exports=e},3160:function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4");var n={components:{},data:function(){return{rateValue:0}},onLoad:function(){var t=this;setTimeout((function(){t.rateValue=3}),1e3)},methods:{onChange:function(e){t.log("rate发生改变:"+JSON.stringify(e))}}};e.default=n}).call(this,i("5a52")["default"])},"454c":function(t,e,i){"use strict";i.r(e);var n=i("92dc"),a=i.n(n);for(var u in n)["default"].indexOf(u)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(u);e["default"]=a.a},5826:function(t,e,i){"use strict";var n=i("9c9d"),a=i.n(n);a.a},"5aee":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return n}));var n={uniCard:i("8d2e").default,uniSection:i("a842").default,uniRate:i("64e1").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[i("v-uni-text",{staticClass:"uni-h6"},[t._v("评分组件多用于商品评价打分、服务态度评价、用户满意度等场景。")])],1),i("uni-section",{attrs:{title:"基本用法",type:"line",padding:!0}},[i("uni-rate",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}},model:{value:t.rateValue,callback:function(e){t.rateValue=e},expression:"rateValue"}})],1),i("uni-section",{attrs:{title:"不支持滑动手势选择评分",subTitle:"设置 touchable 属性控制是否开启手势选择",type:"line",padding:!0}},[i("uni-rate",{attrs:{touchable:!1,value:5},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}})],1),i("uni-section",{attrs:{title:"设置尺寸大小",subTitle:"设置 size 属性控制组件大小",type:"line",padding:!0}},[i("uni-rate",{attrs:{size:"18",value:5}})],1),i("uni-section",{attrs:{title:"设置评分数",subTitle:"设置 max 属性控制组件最大星星数量",type:"line",padding:!0}},[i("uni-rate",{attrs:{max:10,value:5}})],1),i("uni-section",{attrs:{title:"设置星星间隔",subTitle:"设置 margin 属性控制星星间隔",type:"line",padding:!0}},[i("uni-rate",{attrs:{value:4,margin:"20"}})],1),i("uni-section",{attrs:{title:"设置颜色",subTitle:"使用 color 属性设置星星颜色",type:"line",padding:!0}},[i("uni-rate",{attrs:{value:3,color:"#bbb","active-color":"red"}})],1),i("uni-section",{attrs:{title:"半星",subTitle:"使用 allow-half 属性设置是否显示半星",type:"line",padding:!0}},[i("uni-rate",{attrs:{"allow-half":!0,value:3.5}})],1),i("uni-section",{attrs:{title:"只读状态",subTitle:"使用 readonly 属性设置组件只读",type:"line",padding:!0}},[i("uni-rate",{attrs:{readonly:!0,value:2}})],1),i("uni-section",{attrs:{title:"禁用状态",subTitle:"使用 disabled 属性设置组件禁用",type:"line",padding:!0}},[i("uni-rate",{attrs:{disabled:!0,disabledColor:"#ccc",value:3}})],1),i("uni-section",{attrs:{title:"未选中的星星为镂空状态",subTitle:"使用 is-fill 属性设置星星镂空",type:"line",padding:!0}},[i("uni-rate",{attrs:{value:3,"is-fill":!1}})],1)],1)},u=[]},"64e1":function(t,e,i){"use strict";i.r(e);var n=i("e2a2"),a=i("454c");for(var u in a)["default"].indexOf(u)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(u);i("5826");var s=i("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"588f4815",null,!1,n["a"],void 0);e["default"]=o.exports},8604:function(t,e,i){"use strict";i.r(e);var n=i("5aee"),a=i("fb92");for(var u in a)["default"].indexOf(u)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(u);var s=i("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"45fb37f4",null,!1,n["a"],void 0);e["default"]=o.exports},"92dc":function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("14d9"),i("c975"),i("d9e2"),i("d401"),i("e25e"),i("ac1f");var n={name:"UniRate",props:{isFill:{type:[Boolean,String],default:!0},color:{type:String,default:"#ececec"},activeColor:{type:String,default:"#ffca3e"},disabledColor:{type:String,default:"#c0c0c0"},size:{type:[Number,String],default:24},value:{type:[Number,String],default:0},modelValue:{type:[Number,String],default:0},max:{type:[Number,String],default:5},margin:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},readonly:{type:[Boolean,String],default:!1},allowHalf:{type:[Boolean,String],default:!1},touchable:{type:[Boolean,String],default:!0}},data:function(){return{valueSync:"",userMouseFristMove:!0,userRated:!1,userLastRate:1}},watch:{value:function(t){this.valueSync=Number(t)},modelValue:function(t){this.valueSync=Number(t)}},computed:{stars:function(){for(var t=this.valueSync?this.valueSync:0,e=[],i=Math.floor(t),n=Math.ceil(t),a=0;a<this.max;a++)i>a?e.push({activeWitch:"100%"}):n-1===a?e.push({activeWitch:100*(t-i)+"%"}):e.push({activeWitch:"0"});return e},marginNumber:function(){return Number(this.margin)}},created:function(){this.valueSync=Number(this.value||this.modelValue),this._rateBoxLeft=0,this._oldValue=null},mounted:function(){var t=this;setTimeout((function(){t._getSize()}),100),this.PC=this.IsPC()},methods:{touchstart:function(t){if(!this.IsPC()&&!this.readonly&&!this.disabled){var e=t.changedTouches[0],i=e.clientX,n=e.screenX;this._getRateCount(i||n)}},touchmove:function(t){if(!this.IsPC()&&!this.readonly&&!this.disabled&&this.touchable){var e=t.changedTouches[0],i=e.clientX,n=e.screenX;this._getRateCount(i||n)}},mousedown:function(t){if(this.IsPC()&&!this.readonly&&!this.disabled){var e=t.clientX;this.userLastRate=this.valueSync,this._getRateCount(e),this.userRated=!0}},mousemove:function(e){if(this.IsPC()&&!this.userRated&&(this.userMouseFristMove&&(t.log("---mousemove----",this.valueSync),this.userLastRate=this.valueSync,this.userMouseFristMove=!1),!this.readonly&&!this.disabled&&this.touchable)){var i=e.clientX;this._getRateCount(i)}},mouseleave:function(t){this.IsPC()&&(this.readonly||this.disabled||!this.touchable||(this.userRated?this.userRated=!1:this.valueSync=this.userLastRate))},IsPC:function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],i=!0,n=0;n<e.length-1;n++)if(t.indexOf(e[n])>0){i=!1;break}return i},_getRateCount:function(t){this._getSize();var e=Number(this.size);if(isNaN(e))return new Error("size 属性只能设置为数字");var i=t-this._rateBoxLeft,n=parseInt(i/(e+this.marginNumber));n=n<0?0:n,n=n>this.max?this.max:n;var a=parseInt(i-(e+this.marginNumber)*n),u=0;(this._oldValue!==n||this.PC)&&(this._oldValue=n,u=this.allowHalf?a>e/2?n+1:n+.5:n+1,u=Math.max(.5,Math.min(u,this.max)),this.valueSync=u,this._onChange())},_onChange:function(){this.$emit("input",this.valueSync),this.$emit("update:modelValue",this.valueSync),this.$emit("change",{value:this.valueSync})},_getSize:function(){var t=this;uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((function(e){e&&(t._rateBoxLeft=e[0].left)}))}}};e.default=n}).call(this,i("5a52")["default"])},"9c9d":function(t,e,i){var n=i("2f76");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("e13dc752",n,!0,{sourceMap:!1,shadowMode:!1})},e2a2:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("7d33").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{ref:"uni-rate",staticClass:"uni-rate"},t._l(t.stars,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-rate__icon",class:{"uni-cursor-not-allowed":t.disabled},style:{"margin-right":t.marginNumber+"px"},on:{touchstart:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},mousedown:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.mousedown.apply(void 0,arguments)},mousemove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.mousemove.apply(void 0,arguments)},mouseleave:function(e){arguments[0]=e=t.$handleEvent(e),t.mouseleave.apply(void 0,arguments)}}},[i("uni-icons",{attrs:{color:t.color,size:t.size,type:t.isFill?"star-filled":"star"}}),i("v-uni-view",{staticClass:"uni-rate__icon-on",style:{width:e.activeWitch}},[i("uni-icons",{attrs:{color:t.disabled?t.disabledColor:t.activeColor,size:t.size,type:"star-filled"}})],1)],1)})),1)],1)},u=[]},fb92:function(t,e,i){"use strict";i.r(e);var n=i("3160"),a=i.n(n);for(var u in n)["default"].indexOf(u)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(u);e["default"]=a.a}}]);