(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/rhx/InstrModule/INPUT_IMG_A"],{"03e1":function(t,a,e){},"1a6c":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c},i=[];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})},"1c95":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=i(e("ca4b"));function i(t){return t&&t.__esModule?t:{default:t}}var n=function(){return e.e("components/common/RHX/madeCustModule/addImage/addImage").then(e.bind(null,"66bd"))},o=function(){return e.e("components/common/RHX/rTitle/rTitle").then(e.bind(null,"09a6"))},d=function(){return Promise.all([e.e("common/vendor"),e.e("components/common/RHX/manageCopyTips/manageCopyTips")]).then(e.bind(null,"bd0a"))},c=function(){return e.e("components/common/RHX/deleteMoveTips/deleteMoveTips").then(e.bind(null,"4c3c"))},l={components:{addImage:n,rTitle:o,manageCopyTips:d,deleteMoveTips:c},props:["disabled","basicData","scrollTop","defaultImg","dataList","indexNum","tabYItemsIndex"],data:function(){return{indexs:-1,delsss:s.default,basicDatas:this.basicData,defaultAddImg:this.defaultImg,dataLists:this.dataList,deleteMoveTipsShow:!1,manageType:0}},created:function(){console.log(this.dataLists,"-------------------------dataLists-----------------------")},watch:{scrollTop:{handler:function(t,a){console.log(t,a,"--------------------------------------监听TITLE_CONTENT_IMG_B变化---------------------------------------"),this.scrollTitleChange(this.dataLists.id,60,[this.dataLists,this.indexNum])},deep:!0}},methods:{deleteModule:function(t){console.log(t,"删除当前模块"),this.basicDatas.splice(t,1),this.$emit("tap-INPUTTEXTA",this.basicDatas)},tapAddImage:function(t){console.log(t,"添加照片"),this.dataLists.dataList=t;var a=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",a)},tabIconTitle:function(t){console.log(t,"顶部标题修改"),this.dataLists.iconTitle=t[0];var a=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",a)},tapIndex:function(t){console.log(t,"用户修改的数据的index"),this.indexs=t},tapTitleContent:function(t){var a=this;console.log(t,"点击标题返回值----数组"),this.dataLists.dataList.map(function(e,s){s===a.indexs&&(e.title=t[0],e.content=t[1])});var e=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",e)},tapDeleteMoveTips:function(t){console.log(t[0],t[1],"删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1],!1===t[1]?this.manageType=1:this.manageType=0,console.log(this.manageType,"------------------this.manageType-------------------");var a=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",a)},tapManageCopyTips:function(t){console.log(t,"管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1];var a=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-INPUTTEXTA",a)}}};a.default=l},4395:function(t,a,e){"use strict";e.r(a);var s=e("1c95"),i=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);a["default"]=i.a},"4e71":function(t,a,e){"use strict";e.r(a);var s=e("1a6c"),i=e("4395");for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);e("65ae");var o=e("2877"),d=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=d.exports},"65ae":function(t,a,e){"use strict";var s=e("03e1"),i=e.n(s);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/rhx/InstrModule/INPUT_IMG_A-create-component',
    {
        'components/rhx/InstrModule/INPUT_IMG_A-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("4e71"))
        })
    },
    [['components/rhx/InstrModule/INPUT_IMG_A-create-component']]
]);
