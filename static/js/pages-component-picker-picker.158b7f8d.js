(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-picker-picker"],{"09ec":function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,".uni-picker-tips[data-v-fb544068]{font-size:12px;color:#666;margin-bottom:15px;padding:0 15px\n\t/* text-align: right; */}",""]),i.exports=t},"1c99":function(i,t,e){"use strict";var a=e("379a"),n=e.n(a);n.a},"379a":function(i,t,e){var a=e("09ec");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("b8010d3a",a,!0,{sourceMap:!1,shadowMode:!1})},"4a7a":function(i,t,e){"use strict";e.r(t);var a=e("e83c"),n=e("c445");for(var s in n)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(s);e("1c99");var l=e("f0c5"),u=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"fb544068",null,!1,a["a"],void 0);t["default"]=u.exports},9517:function(i,t,e){"use strict";(function(i){function a(i){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return"start"===i?e-=10:"end"===i&&(e+=10),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(e,"-").concat(a,"-").concat(n)}e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("99af"),e("a434");var n={data:function(){return{title:"picker",array:[{name:"中国"},{name:"美国"},{name:"巴西"},{name:"日本"}],index:0,multiArray:[["亚洲","欧洲"],["中国","日本"],["北京","上海","广州"]],multiIndex:[0,0,0],date:a({format:!0}),startDate:a("start"),endDate:a("end"),time:"12:01"}},methods:{bindPickerChange:function(t){i.log("picker发送选择改变，携带值为："+t.detail.value),this.index=t.detail.value},bindMultiPickerColumnChange:function(t){switch(i.log("修改的列为："+t.detail.column+"，值为："+t.detail.value),this.multiIndex[t.detail.column]=t.detail.value,t.detail.column){case 0:switch(this.multiIndex[0]){case 0:this.multiArray[1]=["中国","日本"],this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[1]=["英国","法国"],this.multiArray[2]=["伦敦","曼彻斯特"];break}this.multiIndex.splice(1,1,0),this.multiIndex.splice(2,1,0);break;case 1:switch(this.multiIndex[0]){case 0:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[2]=["东京","北海道"];break}break;case 1:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["伦敦","曼彻斯特"];break;case 1:this.multiArray[2]=["巴黎","马赛"];break}break}this.multiIndex.splice(2,1,0);break}this.$forceUpdate()},bindDateChange:function(i){this.date=i.detail.value},bindTimeChange:function(i){this.time=i.detail.value}}};t.default=n}).call(this,e("5a52")["default"])},c445:function(i,t,e){"use strict";e.r(t);var a=e("9517"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return a[i]}))}(s);t["default"]=n.a},e83c:function(i,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return a}));var a={pageHead:e("7f90").default},n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:i.title}}),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[i._v("普通选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[i._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{value:i.index,range:i.array,"range-key":"name"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.bindPickerChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[i._v(i._s(i.array[i.index].name))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[i._v("多列选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[i._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"multiSelector",value:i.multiIndex,range:i.multiArray},on:{columnchange:function(t){arguments[0]=t=i.$handleEvent(t),i.bindMultiPickerColumnChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[i._v(i._s(i.multiArray[0][i.multiIndex[0]])+"，"+i._s(i.multiArray[1][i.multiIndex[1]])+"，"+i._s(i.multiArray[2][i.multiIndex[2]]))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[i._v("时间选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[i._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"time",value:i.time,start:"09:01",end:"21:01"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.bindTimeChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[i._v(i._s(i.time))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-picker-tips"},[i._v("注：选择 09:01 ~ 21:01 之间的时间, 不在区间内不能选中")]),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[i._v("日期选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[i._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"date",value:i.date,start:i.startDate,end:i.endDate},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.bindDateChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[i._v(i._s(i.date))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-picker-tips"},[i._v("注：选择当前时间 ±10 年之间的时间, 不在区间内不能选中")])],1)},s=[]}}]);