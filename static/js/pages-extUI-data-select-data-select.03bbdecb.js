(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-data-select-data-select"],{"0271":function(t,e,a){"use strict";(function(t){a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{value:0,range:[{value:0,text:"篮球",disable:!0},{value:1,text:"足球"},{value:2,text:"游泳"}]}},methods:{change:function(e){t.log("e:",e)}}};e.default=i}).call(this,a("5a52")["default"])},2256:function(t,e,a){"use strict";a.r(e);var i=a("4959"),n=a("62bb");for(var l in n)["default"].indexOf(l)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(l);a("2348");var o=a("f0c5"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"4f60648c",null,!1,i["a"],void 0);e["default"]=s.exports},"229e":function(t,e,a){"use strict";var i=a("99a4"),n=a.n(i);n.a},2348:function(t,e,a){"use strict";var i=a("345c"),n=a.n(i);n.a},"345c":function(t,e,a){var i=a("ddf6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3219e389",i,!0,{sourceMap:!1,shadowMode:!1})},"38bd":function(t,e,a){"use strict";a.r(e);var i=a("8795"),n=a.n(i);for(var l in i)["default"].indexOf(l)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(l);e["default"]=n.a},4959:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return i}));var i={uniCard:a("8d2e").default,uniSection:a("a842").default,uniDataSelect:a("9fb0").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[a("v-uni-text",{staticClass:"uni-h6"},[t._v("通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用")])],1),a("uni-section",{attrs:{title:"本地数据",type:"line"}},[a("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[a("uni-data-select",{attrs:{localdata:t.range},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),a("uni-section",{attrs:{title:"禁用状态",type:"line"}},[a("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[a("uni-data-select",{attrs:{disabled:!0,localdata:t.range},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),a("uni-section",{attrs:{title:"是否可清除已选项",type:"line"}},[a("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[a("uni-data-select",{attrs:{localdata:t.range,clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),a("uni-section",{attrs:{title:"配置左侧标题",type:"line"}},[a("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[a("uni-data-select",{attrs:{localdata:t.range,label:"应用选择"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)],1)},l=[]},"4cb2":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@media screen and (max-width:500px){.hide-on-phone[data-v-34c48282]{display:none}}.uni-stat__select[data-v-34c48282]{display:flex;align-items:center;cursor:pointer;width:100%;flex:1;box-sizing:border-box}.uni-stat-box[data-v-34c48282]{width:100%;flex:1}.uni-stat__actived[data-v-34c48282]{width:100%;flex:1}.uni-label-text[data-v-34c48282]{font-size:14px;font-weight:700;color:#6a6a6a;margin:auto 0;margin-right:5px}.uni-select[data-v-34c48282]{font-size:14px;border:1px solid #e5e5e5;box-sizing:border-box;border-radius:4px;padding:0 5px;padding-left:10px;position:relative;display:flex;-webkit-user-select:none;user-select:none;flex-direction:row;align-items:center;border-bottom:solid 1px #e5e5e5;width:100%;flex:1;height:35px}.uni-select--disabled[data-v-34c48282]{background-color:#f5f7fa;cursor:not-allowed}.uni-select__label[data-v-34c48282]{font-size:16px;height:35px;padding-right:10px;color:#909399}.uni-select__input-box[data-v-34c48282]{height:35px;position:relative;display:flex;flex:1;flex-direction:row;align-items:center}.uni-select__input[data-v-34c48282]{flex:1;font-size:14px;height:22px;line-height:22px}.uni-select__input-plac[data-v-34c48282]{font-size:14px;color:#909399}.uni-select__selector[data-v-34c48282]{box-sizing:border-box;position:absolute;top:calc(100% + 12px);left:0;width:100%;background-color:#fff;border:1px solid #ebeef5;border-radius:6px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:3;padding:4px 0}.uni-select__selector-scroll[data-v-34c48282]{max-height:200px;box-sizing:border-box}.uni-select__selector-empty[data-v-34c48282],\n.uni-select__selector-item[data-v-34c48282]{display:flex;cursor:pointer;line-height:35px;font-size:14px;text-align:center;\n  /* border-bottom: solid 1px $uni-border-3; */padding:0 10px}.uni-select__selector-item[data-v-34c48282]:hover{background-color:#f9f9f9}.uni-select__selector-empty[data-v-34c48282]:last-child,\n.uni-select__selector-item[data-v-34c48282]:last-child{border-bottom:none}.uni-select__selector__disabled[data-v-34c48282]{opacity:.4;cursor:default}\n/* picker 弹出层通用的指示小三角 */.uni-popper__arrow[data-v-34c48282],\n.uni-popper__arrow[data-v-34c48282]::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.uni-popper__arrow[data-v-34c48282]{-webkit-filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));top:-6px;left:10%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.uni-popper__arrow[data-v-34c48282]::after{content:" ";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.uni-select__input-text[data-v-34c48282]{width:100%;color:#333;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden}.uni-select__input-placeholder[data-v-34c48282]{color:#6a6a6a;font-size:12px}.uni-select--mask[data-v-34c48282]{position:fixed;top:0;bottom:0;right:0;left:0}',""]),t.exports=e},"62bb":function(t,e,a){"use strict";a.r(e);var i=a("0271"),n=a.n(i);for(var l in i)["default"].indexOf(l)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(l);e["default"]=n.a},8795:function(t,e,a){"use strict";(function(t){a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("7db0"),a("d3b7"),a("159b"),a("ac1f"),a("5319"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("c975"),a("99af");var i={name:"uni-stat-select",mixins:[t.mixinDatacom||{}],data:function(){return{showSelector:!1,current:"",mixinDatacomResData:[],apps:[],channels:[]}},props:{localdata:{type:Array,default:function(){return[]}},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},emptyTips:{type:String,default:"无选项"},clear:{type:Boolean,default:!0},defItem:{type:Number,default:0},disabled:{type:Boolean,default:!1},format:{type:String,default:""}},created:function(){this.last="".concat(this.collection,"_last_selected_option_value"),this.collection&&!this.localdata.length&&this.query()},computed:{typePlaceholder:function(){var t=this.placeholder,e={"opendb-stat-app-versions":"版本","opendb-app-channels":"渠道","opendb-app-list":"应用"}[this.collection];return e?t+e:t}},watch:{localdata:{immediate:!0,handler:function(t,e){Array.isArray(t)&&e!==t&&(this.mixinDatacomResData=t)}},value:function(){this.initDefVal()},mixinDatacomResData:{immediate:!0,handler:function(t){t.length&&this.initDefVal()}}},methods:{query:function(){this.mixinDatacomEasyGet()},onMixinDatacomPropsChange:function(){this.collection&&this.query()},initDefVal:function(){var t="";if(!this.value&&0!==this.value||this.isDisabled(this.value))if(!this.modelValue&&0!==this.modelValue||this.isDisabled(this.modelValue)){var e;if(this.collection&&(e=uni.getStorageSync(this.last)),e||0===e)t=e;else{var a="";this.defItem>0&&this.defItem<=this.mixinDatacomResData.length&&(a=this.mixinDatacomResData[this.defItem-1].value),t=a}(t||0===t)&&this.emit(t)}else t=this.modelValue;else t=this.value;var i=this.mixinDatacomResData.find((function(e){return e.value===t}));this.current=i?this.formatItemName(i):""},isDisabled:function(t){var e=!1;return this.mixinDatacomResData.forEach((function(a){a.value===t&&(e=a.disable)})),e},clearVal:function(){this.emit(""),this.collection&&uni.removeStorageSync(this.last)},change:function(t){t.disable||(this.showSelector=!1,this.current=this.formatItemName(t),this.emit(t.value))},emit:function(t){this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t),this.collection&&uni.setStorageSync(this.last,t)},toggleSelector:function(){this.disabled||(this.showSelector=!this.showSelector)},formatItemName:function(t){var e=t.text,a=t.value,i=t.channel_code;if(i=i?"(".concat(i,")"):"",this.format){var n="";for(var l in n=this.format,t)n=n.replace(new RegExp("{".concat(l,"}"),"g"),t[l]);return n}return this.collection.indexOf("app-list")>0?"".concat(e,"(").concat(a,")"):e||"未命名".concat(i)}}};e.default=i}).call(this,a("a9ff")["default"])},"99a4":function(t,e,a){var i=a("4cb2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1ec149e8",i,!0,{sourceMap:!1,shadowMode:!1})},"9fb0":function(t,e,a){"use strict";a.r(e);var i=a("a008"),n=a("38bd");for(var l in n)["default"].indexOf(l)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(l);a("229e");var o=a("f0c5"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"34c48282",null,!1,i["a"],void 0);e["default"]=s.exports},a008:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return i}));var i={uniIcons:a("7d33").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-stat__select"},[t.label?a("span",{staticClass:"uni-label-text hide-on-phone"},[t._v(t._s(t.label+"："))]):t._e(),a("v-uni-view",{staticClass:"uni-stat-box",class:{"uni-stat__actived":t.current}},[a("v-uni-view",{staticClass:"uni-select",class:{"uni-select--disabled":t.disabled}},[a("v-uni-view",{staticClass:"uni-select__input-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelector.apply(void 0,arguments)}}},[t.current?a("v-uni-view",{staticClass:"uni-select__input-text"},[t._v(t._s(t.current))]):a("v-uni-view",{staticClass:"uni-select__input-text uni-select__input-placeholder"},[t._v(t._s(t.typePlaceholder))]),t.current&&t.clear?a("uni-icons",{attrs:{type:"clear",color:"#c0c4cc",size:"24"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearVal.apply(void 0,arguments)}}}):a("uni-icons",{attrs:{type:t.showSelector?"top":"bottom",size:"14",color:"#999"}})],1),t.showSelector?a("v-uni-view",{staticClass:"uni-select--mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelector.apply(void 0,arguments)}}}):t._e(),t.showSelector?a("v-uni-view",{staticClass:"uni-select__selector"},[a("v-uni-view",{staticClass:"uni-popper__arrow"}),a("v-uni-scroll-view",{staticClass:"uni-select__selector-scroll",attrs:{"scroll-y":"true"}},[0===t.mixinDatacomResData.length?a("v-uni-view",{staticClass:"uni-select__selector-empty"},[a("v-uni-text",[t._v(t._s(t.emptyTips))])],1):t._l(t.mixinDatacomResData,(function(e,i){return a("v-uni-view",{key:i,staticClass:"uni-select__selector-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change(e)}}},[a("v-uni-text",{class:{"uni-select__selector__disabled":e.disable}},[t._v(t._s(t.formatItemName(e)))])],1)}))],2)],1):t._e()],1)],1)],1)},l=[]},ddf6:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.text[data-v-4f60648c]{font-size:12px;color:#666;margin-top:5px}.uni-px-5[data-v-4f60648c]{padding-left:10px;padding-right:10px}.uni-pb-5[data-v-4f60648c]{padding-bottom:10px}',""]),t.exports=e}}]);