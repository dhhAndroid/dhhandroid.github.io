(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-file-file"],{"2a7b":function(e,t,n){"use strict";var a=n("eb2e"),i=n.n(a);i.a},"7b2c":function(e,t,n){"use strict";n.r(t);var a=n("f558"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=i.a},a0e1:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a}));var a={pageHead:n("7f90").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e.tempFilePath?[n("v-uni-image",{staticClass:"image",attrs:{src:e.tempFilePath,mode:"aspectFit"}})]:e._e(),!e.tempFilePath&&e.savedFilePath?[n("v-uni-image",{staticClass:"image",attrs:{src:e.savedFilePath,mode:"aspectFit"}})]:e._e(),e.tempFilePath||e.savedFilePath?e._e():[n("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[e._v("+ 请选择文件")])],n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{staticClass:"btn-savefile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveFile.apply(void 0,arguments)}}},[e._v("保存文件")]),n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[e._v("删除文件")])],1),n("v-uni-view",{staticClass:"btn-area"},[n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openDocument.apply(void 0,arguments)}}},[e._v("打开pdf文件")])],1)],2)],1)},c=[]},c2d6:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".image[data-v-75f2ce26]{width:100%;height:%?360?%}.btn-savefile[data-v-75f2ce26]{background-color:#007aff;color:#fff}",""]),e.exports=t},c59b:function(e,t,n){"use strict";n.r(t);var a=n("a0e1"),i=n("7b2c");for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("2a7b");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"75f2ce26",null,!1,a["a"],void 0);t["default"]=s.exports},eb2e:function(e,t,n){var a=n("c2d6");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("10dd852e",a,!0,{sourceMap:!1,shadowMode:!1})},f558:function(e,t,n){"use strict";(function(e){n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("e9c4");var a={data:function(){return{title:"saveFile",tempFilePath:"",savedFilePath:""}},onLoad:function(){this.savedFilePath=uni.getStorageSync("savedFilePath")},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,success:function(t){e.tempFilePath=t.tempFilePaths[0]},fail:function(e){}})},saveFile:function(){var e=this;this.tempFilePath.length>0?uni.saveFile({tempFilePath:this.tempFilePath,success:function(t){e.savedFilePath=t.savedFilePath,uni.setStorageSync("savedFilePath",t.savedFilePath),uni.showModal({title:"保存成功",content:"下次进入页面时，此文件仍可用",showCancel:!1})},fail:function(e){uni.showModal({title:"保存失败",content:"失败原因: "+JSON.stringify(e),showCancel:!1})}}):uni.showModal({content:"请选择文件",showCancel:!1})},clear:function(){uni.setStorageSync("savedFilePath",""),this.tempFilePath="",this.savedFilePath=""},openDocument:function(){uni.downloadFile({url:"https://web-assets.dcloud.net.cn/unidoc/zh/helloworld.pdf",success:function(t){uni.openDocument({filePath:t.tempFilePath,success:function(){e.log("打开文档成功")}})}})}}};t.default=a}).call(this,n("5a52")["default"])}}]);