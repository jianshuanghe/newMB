(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/madeCustModule/madeCustTitleXModule/madeCustTitleXModule"],{"0b08":function(t,e,s){"use strict";s.r(e);var i=s("4738"),o=s("29df");for(var n in o)"default"!==n&&function(t){s.d(e,t,function(){return o[t]})}(n);s("92e0");var u=s("2877"),l=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=l.exports},"1e0e":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return s.e("components/common/RHX/madeCustModule/madeCustTitleXModule/custTitleXList/custTitleXList").then(s.bind(null,"f7cc"))},o=function(){return s.e("components/common/RHX/rPicker/rPicker").then(s.bind(null,"8f05"))},n=function(){return s.e("components/common/RHX/moduleList/moduleList").then(s.bind(null,"4d3f8"))},u={components:{custTitleXList:i,rPicker:o,moduleList:n},props:["disabled","dataList","column","custIndexShow","moduleCustTempList"],data:function(){return{dataLists:this.dataList,dataListsM:JSON.parse(JSON.stringify(this.dataList)),tapIndex:0,pickerCancel:!0,scrollHeight:0,addModuleTop:0,isModuleListShow:!1,isModuleListShows:!0,radioValue:{},lineHeights:0,content:null,selIconLists:this.selIconList,moduleCustTempLists:this.moduleCustTempList}},created:function(){this.isModuleListShows=!0,console.log(this.dataList,"----------------------dataList-----------------------"),this.scrollHeight=this.VwVhToPx(80,"vh")-18+"px",this.addModuleTop=this.VwVhToPx(90,"vh")-60+"px"},mounted:function(){},watch:{moduleCustTempList:{handler:function(t,e){console.log(t,e,"--------------------------------------监听moduleCustTempList变化---------------------------------------"),this.moduleCustTempLists=t},deep:!0},dataList:{handler:function(t,e){console.log(t,e,"--------------------------------------监听content变化---------------------------------------"),this.dataLists=t},deep:!0},custIndexShow:{handler:function(t,e){console.log(t,e,"------------------------------------------scrollIntoCust-----------------------------------"),this.tapIndex=t},deep:!0}},methods:{tapCustTitleXList:function(t){console.log(t,"定制模板里的横向管理模块"),this.$emit("tap-CustModuleYList",t)},tapModuleYitems:function(t){console.log(t,"点击横向列表子项"),this.tapIndex=t},tapAddModule:function(){this.isModuleListShow=!0,this.$emit("set-FixedShow",!1),console.log(this.isModuleListShow,"展示管理模块内容")},tapPickerCancel:function(){console.log("点击picker取消按钮"),this.pickerCancel=!1,console.log(this.pickerCancel,"----------------this.pickerCancel--------------"),this.isModuleListShow=!1,this.$emit("set-FixedShow",!0),this.dataListsM=JSON.parse(JSON.stringify(this.dataList))},tapPickerPreserve:function(t){console.log(t,"点击picker确定按钮"),this.isModuleListShow=!1;var e=this.dataListsM.content.context.tempCon.custModules;this.dataLists=JSON.parse(JSON.stringify(this.dataListsM)),this.$emit("set-FixedShow",!0),this.$emit("tap-CustTitle",[e,""])},tabModuleList:function(t){console.log(t,"++++++++++++++++++++++++++++点击模块List组件+++++++++++++++++++++++++++"),this.dataListsM.content.context.tempCon.custModules=t},tapPreserveBotttom:function(t){if(console.log(t,"点击添加模块底部确定按钮"),this.isModuleListShow=!1,void 0!==t&&"undefined"!==t&&""!==t){var e=this.dataListsM.content.context.tempCon.custModules;e.push(t),console.log(e,"---------------tap-PreserveBotttom---------------"),this.resetData(e)}this.$emit("set-FixedShow",!0)},resetData:function(t){var e=t,s=Number(e.length-1);this.tapIndex=s,this.dataLists=e,console.log(this.tapIndex,"-------------------this.tapIndex-------------------"),this.$emit("tap-CustTitle",[e,s])}}};e.default=u},"29df":function(t,e,s){"use strict";s.r(e);var i=s("1e0e"),o=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},4738:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=(t._self._c,this.VwVhToPx(10,"vh"));t.$mp.data=Object.assign({},{$root:{g0:s}})},o=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return o})},"92e0":function(t,e,s){"use strict";var i=s("e986"),o=s.n(i);o.a},e986:function(t,e,s){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/madeCustModule/madeCustTitleXModule/madeCustTitleXModule-create-component',
    {
        'components/common/RHX/madeCustModule/madeCustTitleXModule/madeCustTitleXModule-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0b08"))
        })
    },
    [['components/common/RHX/madeCustModule/madeCustTitleXModule/madeCustTitleXModule-create-component']]
]);                
