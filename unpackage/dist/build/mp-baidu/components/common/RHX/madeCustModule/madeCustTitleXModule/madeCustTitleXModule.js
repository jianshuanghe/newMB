(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/madeCustModule/madeCustTitleXModule/madeCustTitleXModule"],{"0df2":function(t,e,s){"use strict";var i=s("8d5a"),o=s.n(i);o.a},"5e11":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return s.e("components/common/RHX/madeCustModule/madeCustTitleXModule/custTitleXList/custTitleXList").then(s.bind(null,"fca4"))},o=function(){return s.e("components/common/RHX/rPicker/rPicker").then(s.bind(null,"cc95"))},n=function(){return s.e("components/common/RHX/moduleList/moduleList").then(s.bind(null,"a55f"))},u={components:{custTitleXList:i,rPicker:o,moduleList:n},props:["disabled","dataList","column","custIndexShow","moduleCustTempList"],data:function(){return{dataLists:this.dataList,dataListsM:JSON.parse(JSON.stringify(this.dataList)),tapIndex:0,pickerCancel:!0,scrollHeight:0,addModuleTop:0,isModuleListShow:!1,isModuleListShows:!0,radioValue:{},lineHeights:0,content:null,selIconLists:this.selIconList,moduleCustTempLists:this.moduleCustTempList}},created:function(){this.isModuleListShows=!0,console.log(this.dataList,"----------------------dataList-----------------------"),this.scrollHeight=this.VwVhToPx(80,"vh")-18+"px",this.addModuleTop=this.VwVhToPx(90,"vh")-60+"px"},mounted:function(){},watch:{moduleCustTempList:{handler:function(t,e){console.log(t,e,"--------------------------------------监听moduleCustTempList变化---------------------------------------"),this.moduleCustTempLists=t},deep:!0},dataList:{handler:function(t,e){console.log(t,e,"--------------------------------------监听content变化---------------------------------------"),this.dataLists=t},deep:!0},custIndexShow:{handler:function(t,e){console.log(t,e,"------------------------------------------scrollIntoCust-----------------------------------"),this.tapIndex=t},deep:!0}},methods:{tapCustTitleXList:function(t){console.log(t,"定制模板里的横向管理模块"),this.$emit("tap-CustModuleYList",t)},tapModuleYitems:function(t){console.log(t,"点击横向列表子项"),this.tapIndex=t},tapAddModule:function(){this.isModuleListShow=!0,this.$emit("set-FixedShow",!1),console.log(this.isModuleListShow,"展示管理模块内容")},tapPickerCancel:function(){console.log("点击picker取消按钮"),this.pickerCancel=!1,console.log(this.pickerCancel,"----------------this.pickerCancel--------------"),this.isModuleListShow=!1,this.$emit("set-FixedShow",!0),this.dataListsM=JSON.parse(JSON.stringify(this.dataList))},tapPickerPreserve:function(t){console.log(t,"点击picker确定按钮"),this.isModuleListShow=!1;var e=this.dataListsM.content.context.tempCon.custModules;this.dataLists=JSON.parse(JSON.stringify(this.dataListsM)),this.$emit("set-FixedShow",!0),this.$emit("tap-CustTitle",[e,""])},tabModuleList:function(t){console.log(t,"++++++++++++++++++++++++++++点击模块List组件+++++++++++++++++++++++++++"),this.dataListsM.content.context.tempCon.custModules=t},tapPreserveBotttom:function(t){if(console.log(t,"点击添加模块底部确定按钮"),this.isModuleListShow=!1,void 0!==t&&"undefined"!==t&&""!==t){var e=this.dataListsM.content.context.tempCon.custModules;e.push(t),console.log(e,"---------------tap-PreserveBotttom---------------"),this.resetData(e)}this.$emit("set-FixedShow",!0)},resetData:function(t){var e=t,s=Number(e.length-1);this.tapIndex=s,this.dataLists=e,console.log(this.tapIndex,"-------------------this.tapIndex-------------------"),this.$emit("tap-CustTitle",[e,s])}}};e.default=u},"7acb":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=(t._self._c,this.VwVhToPx(10,"vh"));t.$mp.data=Object.assign({},{$root:{g0:s}})},o=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return o})},"844c":function(t,e,s){"use strict";s.r(e);var i=s("5e11"),o=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},"8d5a":function(t,e,s){},c688:function(t,e,s){"use strict";s.r(e);var i=s("7acb"),o=s("844c");for(var n in o)"default"!==n&&function(t){s.d(e,t,function(){return o[t]})}(n);s("0df2");var u=s("2877"),a=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/madeCustModule/madeCustTitleXModule/madeCustTitleXModule-create-component',
    {
        'components/common/RHX/madeCustModule/madeCustTitleXModule/madeCustTitleXModule-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("c688"))
        })
    },
    [['components/common/RHX/madeCustModule/madeCustTitleXModule/madeCustTitleXModule-create-component']]
]);
