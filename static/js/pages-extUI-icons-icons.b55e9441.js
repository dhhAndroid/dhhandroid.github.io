(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-icons-icons"],{"3fc9":function(e,n,i){"use strict";i.r(n);var a=i("551c"),c=i("40d3");for(var o in c)["default"].indexOf(o)<0&&function(e){i.d(n,e,(function(){return c[e]}))}(o);i("3fe9");var d=i("f0c5"),u=Object(d["a"])(c["default"],a["b"],a["c"],!1,null,"8096f904",null,!1,a["a"],void 0);n["default"]=u.exports},"3fe9":function(e,n,i){"use strict";var a=i("4d17"),c=i.n(a);c.a},"40d3":function(e,n,i){"use strict";i.r(n);var a=i("646c"),c=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(n,e,(function(){return a[e]}))}(o);n["default"]=c.a},4607:function(e,n,i){var a=i("24fb");n=a(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.icon-content[data-v-8096f904]{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center}.icon-content .icon-item[data-v-8096f904]{display:flex;box-sizing:border-box;width:calc(100% / 4);align-items:center;padding:10px;text-align:center;flex-direction:column}',""]),e.exports=n},"4d17":function(e,n,i){var a=i("4607");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var c=i("4f06").default;c("5d28ce01",a,!0,{sourceMap:!1,shadowMode:!1})},"551c":function(e,n,i){"use strict";i.d(n,"b",(function(){return c})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return a}));var a={uniCard:i("8d2e").default,uniSection:i("a842").default,uniIcons:i("7d33").default},c=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-uni-view",{staticClass:"container"},[i("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[i("v-uni-text",{staticClass:"uni-h6"},[e._v("图标组件方便用户在设计页面的时候，减少小图片的使用。可方便自定义图标单色、尺寸。")])],1),i("uni-section",{attrs:{title:"图标",type:"line"},scopedSlots:e._u([{key:"right",fn:function(){return[i("v-uni-view",[i("v-uni-switch",{attrs:{checked:e.checked},on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.change.apply(void 0,arguments)}}})],1)]},proxy:!0}])},[i("v-uni-view",{staticClass:"icon-content"},e._l(e.iconClassList,(function(n,a){return i("v-uni-view",{key:a,staticClass:"icon-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.switchActive(a,n)}}},[i("uni-icons",{attrs:{type:n.name,color:e.activeIndex===a?"#007aff":"#5e6d82",size:"30"}}),i("v-uni-text",{staticClass:"uni-mt-5 uni-subtitle",style:{color:e.activeIndex===a?"#007aff":"#5e6d82"}},[e._v(e._s(e.checked?n.unicode:n.name))])],1)})),1)],1),i("uni-section",{attrs:{title:"自定义图标",subTitle:"引入参考App.vue",type:"line"}},[i("v-uni-view",{staticClass:"icon-content"},[i("v-uni-view",{staticClass:"icon-item"},[i("uni-icons",{attrs:{customPrefix:"customicons",type:"youxi",color:"#5e6d82",size:"22"}}),i("v-uni-text",{staticStyle:{color:"#5e6d82"}},[e._v("youxi")])],1),i("v-uni-view",{staticClass:"icon-item"},[i("uni-icons",{attrs:{customPrefix:"customicons",type:"wenjian",color:"#5e6d82",size:"22"}}),i("v-uni-text",{staticStyle:{color:"#5e6d82"}},[e._v("wenjian")])],1),i("v-uni-view",{staticClass:"icon-item"},[i("uni-icons",{attrs:{customPrefix:"customicons",type:"zhuanfa",color:"#5e6d82",size:"22"}}),i("v-uni-text",{staticStyle:{color:"#5e6d82"}},[e._v("zhuanfa")])],1)],1)],1)],1)},o=[]},"646c":function(e,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={components:{},data:function(){return{iconClassList:[{name:"arrow-down",unicode:"e6be"},{name:"arrow-left",unicode:"e6bc"},{name:"arrow-right",unicode:"e6bb"},{name:"arrow-up",unicode:"e6bd"},{name:"bottom",unicode:"e6b8"},{name:"left",unicode:"e6b7"},{name:"right",unicode:"e6b5"},{name:"top",unicode:"e6b6"},{name:"back",unicode:"e6b9"},{name:"forward",unicode:"e6ba"},{name:"checkmarkempty",unicode:"e65c"},{name:"closeempty",unicode:"e66c"},{name:"color",unicode:"e6cf"},{name:"color-filled",unicode:"e6c9"},{name:"wallet",unicode:"e6b1"},{name:"wallet-filled",unicode:"e6c2"},{name:"tune",unicode:"e6aa"},{name:"tune-filled",unicode:"e6ca"},{name:"settings",unicode:"e560"},{name:"settings-filled",unicode:"e6ce"},{name:"folder-add",unicode:"e6a9"},{name:"folder-add-filled",unicode:"e6c8"},{name:"calendar",unicode:"e6a8"},{name:"calendar-filled",unicode:"e6c0"},{name:"vip",unicode:"e6a8"},{name:"vip-filled",unicode:"e6c6"},{name:"notification",unicode:"e6a6"},{name:"notification-filled",unicode:"e6c1"},{name:"gift",unicode:"e6a4"},{name:"gift-filled",unicode:"e6c4"},{name:"medal",unicode:"e6a2"},{name:"medal-filled",unicode:"e6c3"},{name:"fire",unicode:"e6a1"},{name:"fire-filled",unicode:"e6c5"},{name:"camera",unicode:"e301"},{name:"camera-filled",unicode:"e7ef"},{name:"cart",unicode:"e7f5"},{name:"cart-filled",unicode:"e7f4"},{name:"chat",unicode:"e263"},{name:"chat-filled",unicode:"e847"},{name:"chatboxes",unicode:"e203"},{name:"chatboxes-filled",unicode:"e233"},{name:"chatbubble",unicode:"e202"},{name:"chatbubble-filled",unicode:"e232"},{name:"minus",unicode:"e410"},{name:"minus-filled",unicode:"e440"},{name:"plus",unicode:"e409"},{name:"plus-filled",unicode:"e439"},{name:"checkbox",unicode:"e7fa"},{name:"checkbox-filled",unicode:"e442"},{name:"close",unicode:"e404"},{name:"clear",unicode:"e434"},{name:"circle",unicode:"e411"},{name:"circle-filled",unicode:"e441"},{name:"help",unicode:"e505"},{name:"help-filled",unicode:"e535"},{name:"info",unicode:"e504"},{name:"info-filled",unicode:"e534"},{name:"smallcircle",unicode:"e868"},{name:"smallcircle-filled",unicode:"e801"},{name:"upload",unicode:"e402"},{name:"upload-filled",unicode:"e8b1"},{name:"download",unicode:"e403"},{name:"download-filled",unicode:"e8a4"},{name:"cloud-download",unicode:"e8e4"},{name:"cloud-download-filled",unicode:"e8e9"},{name:"cloud-upload",unicode:"e8e6"},{name:"cloud-upload-filled",unicode:"e8e5"},{name:"email",unicode:"e201"},{name:"email-filled",unicode:"e231"},{name:"mail-open",unicode:"e84e"},{name:"mail-open-filled",unicode:"e84d"},{name:"eye",unicode:"e824"},{name:"eye-filled",unicode:"e568"},{name:"eye-slash",unicode:"e823"},{name:"eye-slash-filled",unicode:"e822"},{name:"hand-down",unicode:"e83c"},{name:"hand-down-filled",unicode:"e83b"},{name:"hand-up",unicode:"e83f"},{name:"hand-up-filled",unicode:"e83d"},{name:"gear",unicode:"e502"},{name:"gear-filled",unicode:"e532"},{name:"flag",unicode:"e508"},{name:"flag-filled",unicode:"e825"},{name:"heart",unicode:"e840"},{name:"heart-filled",unicode:"e83e"},{name:"home",unicode:"e500"},{name:"home-filled",unicode:"e530"},{name:"image",unicode:"e363"},{name:"image-filled",unicode:"e877"},{name:"images",unicode:"e87b"},{name:"images-filled",unicode:"e87a"},{name:"locked",unicode:"e506"},{name:"locked-filled",unicode:"e856"},{name:"location",unicode:"e303"},{name:"location-filled",unicode:"e333"},{name:"map",unicode:"e364"},{name:"map-filled",unicode:"e85c"},{name:"map-pin",unicode:"e85e"},{name:"map-pin-ellipse",unicode:"e864"},{name:"mic",unicode:"e302"},{name:"mic-filled",unicode:"e332"},{name:"micoff",unicode:"e360"},{name:"micoff-filled",unicode:"e892"},{name:"more",unicode:"e507"},{name:"more-filled",unicode:"e537"},{name:"navigate",unicode:"e501"},{name:"navigate-filled",unicode:"e884"},{name:"paperplane",unicode:"e503"},{name:"paperplane-filled",unicode:"e86e"},{name:"contact",unicode:"e100"},{name:"contact-filled",unicode:"e130"},{name:"auth",unicode:"e6ab"},{name:"auth-filled",unicode:"e6cc"},{name:"staff",unicode:"e6a7"},{name:"staff-filled",unicode:"e6cb"},{name:"person",unicode:"e101"},{name:"person-filled",unicode:"e131"},{name:"personadd",unicode:"e102"},{name:"personadd-filled",unicode:"e132"},{name:"phone",unicode:"e200"},{name:"phone-filled",unicode:"e230"},{name:"refresh",unicode:"e407"},{name:"refresh-filled",unicode:"e437"},{name:"redo",unicode:"e405"},{name:"redo-filled",unicode:"e7d9"},{name:"undo",unicode:"e406"},{name:"undo-filled",unicode:"e7d6"},{name:"qq",unicode:"e264"},{name:"weibo",unicode:"e260"},{name:"weixin",unicode:"e261"},{name:"pyq",unicode:"e262"},{name:"sound",unicode:"e590"},{name:"sound-filled",unicode:"e8a1"},{name:"videocam",unicode:"e300"},{name:"videocam-filled",unicode:"e8af"},{name:"trash",unicode:"e401"},{name:"trash-filled",unicode:"e8dc"},{name:"refreshempty",unicode:"e461"},{name:"reload",unicode:"e462"},{name:"star",unicode:"e408"},{name:"star-filled",unicode:"e438"},{name:"starhalf",unicode:"e463"},{name:"spinner-cycle",unicode:"e465"},{name:"link",unicode:"e6a5"},{name:"font",unicode:"e6a3"},{name:"scan",unicode:"e612"},{name:"search",unicode:"e466"},{name:"compose",unicode:"e400"},{name:"bars",unicode:"e563"},{name:"list",unicode:"e562"},{name:"loop",unicode:"e565"},{name:"paperclip",unicode:"e567"},{name:"plusempty",unicode:"e468"},{name:"pulldown",unicode:"e588"},{name:"headphones",unicode:"e8bf"},{name:"shop",shop:"e609"},{name:"shop-filled",unicode:"e6cd"}],activeIndex:-1,checked:!1}},methods:{change:function(e){this.checked=!("false"===e.detail.value||!e.detail.value)},switchActive:function(e,n){var i=this;this.activeIndex=e,uni.setClipboardData({data:this.checked?n.unicode:n.name,success:function(){uni.showToast({icon:"none",title:"".concat(i.checked?"unicode":"图标名称","复制成功")})}})}}};n.default=a}}]);