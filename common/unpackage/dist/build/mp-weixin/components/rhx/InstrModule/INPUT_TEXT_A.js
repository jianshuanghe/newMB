(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/rhx/InstrModule/INPUT_TEXT_A"],{"11f3":function(t,s,e){},"245e":function(t,s,e){"use strict";e.r(s);var a=e("67e8"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);s["default"]=i.a},"3c59":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c},i=[];e.d(s,"a",function(){return a}),e.d(s,"b",function(){return i})},"67e8":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a=function(){return e.e("components/common/RHX/madeCustModule/remarks/remarks").then(e.bind(null,"b1f3"))},i=function(){return e.e("components/common/RHX/rTitle/rTitle").then(e.bind(null,"57e2"))},n=function(){return e.e("components/common/RHX/manageCopyTips/manageCopyTips").then(e.bind(null,"5e17"))},o=function(){return e.e("components/common/RHX/deleteMoveTips/deleteMoveTips").then(e.bind(null,"3edc"))},c={components:{remarks:a,rTitle:i,manageCopyTips:n,deleteMoveTips:o},props:["disabled","basicData","scrollTop","defaultImg","dataList","indexNum","tabYItemsIndex"],data:function(){return{indexs:-1,delsss:this.Static+"publish/createBusiness/delsss.png",basicDatas:this.basicData,defaultAddImg:this.defaultImg,dataLists:this.dataList,deleteMoveTipsShow:!1,manageType:0}},created:function(){console.log(this.dataLists,"-------------------------dataLists-----------------------")},watch:{scrollTop:{handler:function(t,s){console.log(t,s,"--------------------------------------监听TITLE_CONTENT_IMG_B变化---------------------------------------"),this.scrollTitleChange(this.dataLists.id,60,[this.dataLists,this.indexNum])},deep:!0}},methods:{deleteModule:function(t){console.log(t,"删除当前模块"),this.basicDatas.splice(t,1),this.$emit("tap-INPUTTEXTA",this.basicDatas)},tapRemarks:function(t){console.log(t,"备注说明"),this.dataLists.dataList=t;var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",s)},tabIconTitle:function(t){console.log(t,"顶部标题修改"),this.dataLists.iconTitle=t[0];var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",s)},tapIndex:function(t){console.log(t,"用户修改的数据的index"),this.indexs=t},tapTitleContent:function(t){var s=this;console.log(t,"点击标题返回值----数组"),this.dataLists.dataList.map(function(e,a){a===s.indexs&&(e.title=t[0],e.content=t[1])});var e=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",e)},tapDeleteMoveTips:function(t){console.log(t[0],t[1],"删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1],!1===t[1]?this.manageType=1:this.manageType=0,console.log(this.manageType,"------------------this.manageType-------------------");var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",s)},tapManageCopyTips:function(t){console.log(t,"管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1];var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",s)}}};s.default=c},"6c50":function(t,s,e){"use strict";e.r(s);var a=e("3c59"),i=e("245e");for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);e("a3d9");var o=e("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);s["default"]=c.exports},a3d9:function(t,s,e){"use strict";var a=e("11f3"),i=e.n(a);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/rhx/InstrModule/INPUT_TEXT_A-create-component',
    {
        'components/rhx/InstrModule/INPUT_TEXT_A-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6c50"))
        })
    },
    [['components/rhx/InstrModule/INPUT_TEXT_A-create-component']]
]);                
