(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/rhx/InstrModule/INPUT_TEXT_A"],{"2f4a":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e=function(){return a.e("components/common/RHX/madeCustModule/remarks/remarks").then(a.bind(null,"14f5"))},i=function(){return a.e("components/common/RHX/rTitle/rTitle").then(a.bind(null,"02dc"))},n=function(){return a.e("components/common/RHX/manageCopyTips/manageCopyTips").then(a.bind(null,"7554"))},o=function(){return a.e("components/common/RHX/deleteMoveTips/deleteMoveTips").then(a.bind(null,"9140"))},d={components:{remarks:e,rTitle:i,manageCopyTips:n,deleteMoveTips:o},props:["disabled","basicData","scrollTop","defaultImg","dataList","indexNum","tabYItemsIndex"],data:function(){return{indexs:-1,delsss:this.Static+"publish/createBusiness/delsss.png",basicDatas:this.basicData,defaultAddImg:this.defaultImg,dataLists:this.dataList,deleteMoveTipsShow:!1,manageType:0}},created:function(){console.log(this.dataLists,"-------------------------dataLists-----------------------")},watch:{scrollTop:{handler:function(t,s){console.log(t,s,"--------------------------------------监听TITLE_CONTENT_IMG_B变化---------------------------------------"),this.scrollTitleChange(this.dataLists.id,60,[this.dataLists,this.indexNum])},deep:!0}},methods:{deleteModule:function(t){console.log(t,"删除当前模块"),this.basicDatas.splice(t,1),this.$emit("tap-INPUTTEXTA",this.basicDatas)},tapRemarks:function(t){console.log(t,"备注说明"),this.dataLists.dataList=t;var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",s)},tabIconTitle:function(t){console.log(t,"顶部标题修改"),this.dataLists.iconTitle=t[0];var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",s)},tapIndex:function(t){console.log(t,"用户修改的数据的index"),this.indexs=t},tapTitleContent:function(t){var s=this;console.log(t,"点击标题返回值----数组"),this.dataLists.dataList.map(function(a,e){e===s.indexs&&(a.title=t[0],a.content=t[1])});var a=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",a)},tapDeleteMoveTips:function(t){console.log(t[0],t[1],"删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1],!1===t[1]?this.manageType=1:this.manageType=0,console.log(this.manageType,"------------------this.manageType-------------------");var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",s)},tapManageCopyTips:function(t){console.log(t,"管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1];var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",s)}}};s.default=d},"816f":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c},i=[];a.d(s,"a",function(){return e}),a.d(s,"b",function(){return i})},"8dfc":function(t,s,a){},d7a4:function(t,s,a){"use strict";a.r(s);var e=a("816f"),i=a("f0cd");for(var n in i)"default"!==n&&function(t){a.d(s,t,function(){return i[t]})}(n);a("fa6b");var o=a("2877"),d=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,null,null);s["default"]=d.exports},f0cd:function(t,s,a){"use strict";a.r(s);var e=a("2f4a"),i=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(s,t,function(){return e[t]})}(n);s["default"]=i.a},fa6b:function(t,s,a){"use strict";var e=a("8dfc"),i=a.n(e);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/rhx/InstrModule/INPUT_TEXT_A-create-component',
    {
        'components/rhx/InstrModule/INPUT_TEXT_A-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("d7a4"))
        })
    },
    [['components/rhx/InstrModule/INPUT_TEXT_A-create-component']]
]);                