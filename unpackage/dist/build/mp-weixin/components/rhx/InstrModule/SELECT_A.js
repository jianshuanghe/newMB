(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/rhx/InstrModule/SELECT_A"],{"596c":function(t,e,a){"use strict";a.r(e);var s=a("b3c7"),i=a("8ee4");for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a("b83a");var o=a("2877"),d=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,null,null);e["default"]=d.exports},"8ee4":function(t,e,a){"use strict";a.r(e);var s=a("f2a5"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);e["default"]=i.a},b3c7:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})},b83a:function(t,e,a){"use strict";var s=a("d69e"),i=a.n(s);i.a},d69e:function(t,e,a){},f2a5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return a.e("components/common/RHX/madeModule/caseGuarantee/caseGuarantee").then(a.bind(null,"878b"))},i=function(){return a.e("components/common/RHX/rTitle/rTitle").then(a.bind(null,"02dc"))},n=function(){return a.e("components/common/RHX/addButton/addButton").then(a.bind(null,"1e1e"))},o=function(){return a.e("components/common/RHX/pickerButton/pickerButton").then(a.bind(null,"2eb9"))},d={components:{caseGuarantee:s,rTitle:i,addButton:n,pickerButton:o},props:["disabled","basicData","scrollTop","defaultImg","dataList","indexNum","tabYItemsIndex"],data:function(){return{indexs:-1,basicDatas:this.basicData,defaultAddImg:this.defaultImg,dataLists:this.dataList,deleteMoveTipsShow:!1,manageType:0}},created:function(){console.log(this.dataLists,"-------------------------dataLists-----------------------")},watch:{scrollTop:{handler:function(t,e){console.log(t,e,"--------------------------------------监听TITLE_CONTENT_IMG_B变化---------------------------------------"),this.scrollTitleChange(this.dataLists.id,60,[this.dataLists,this.indexNum])},deep:!0}},methods:{tapCaseGuarantee:function(t){console.log(t,"用户操作里边删除"),this.dataLists.dataList=t;var e=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-SELECTA",e)},tapManageCopyTips:function(t){this.$emit("set-FixedShow",!1),console.log(t,"管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1];var e=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-SELECTA",e)},tapPickerButton:function(t){this.$emit("set-FixedShow",!0),console.log(t,"点击添加模块"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1];var e=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-SELECTA",e)}}};e.default=d}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/rhx/InstrModule/SELECT_A-create-component',
    {
        'components/rhx/InstrModule/SELECT_A-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("596c"))
        })
    },
    [['components/rhx/InstrModule/SELECT_A-create-component']]
]);                
