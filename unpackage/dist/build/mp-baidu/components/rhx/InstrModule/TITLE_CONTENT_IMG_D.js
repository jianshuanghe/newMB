(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/rhx/InstrModule/TITLE_CONTENT_IMG_D"],{1951:function(t,e,i){"use strict";var a=i("a949"),s=i.n(a);s.a},"274a":function(t,e,i){"use strict";i.r(e);var a=i("d18a"),s=i("9d7b");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("1951");var o=i("2877"),d=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=d.exports},"9d7b":function(t,e,i){"use strict";i.r(e);var a=i("aed1"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},a949:function(t,e,i){},aed1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return i.e("components/common/RHX/singlePicture/singlePicture").then(i.bind(null,"b853"))},s=function(){return i.e("components/common/RHX/rTitle/rTitle").then(i.bind(null,"09a6"))},n=function(){return Promise.all([i.e("common/vendor"),i.e("components/common/RHX/manageCopyTips/manageCopyTips")]).then(i.bind(null,"bd0a"))},o=function(){return i.e("components/common/RHX/deleteMoveTips/deleteMoveTips").then(i.bind(null,"4c3c"))},d={components:{singlePicture:a,rTitle:s,manageCopyTips:n,deleteMoveTips:o},props:["disabled","basicData","scrollTop","defaultImg","dataList","indexNum","tabYItemsIndex"],data:function(){return{indexs:-1,basicDatas:this.basicData,defaultAddImg:this.defaultImg,dataLists:this.dataList,deleteMoveTipsShow:!1,manageType:0}},created:function(){console.log(this.dataLists,"-------------------------dataLists-----------------------")},watch:{scrollTop:{handler:function(t,e){console.log(t,e,"--------------------------------------监听TITLE_CONTENT_IMG_C变化---------------------------------------"),this.scrollTitleChange(this.dataLists.id,60,[this.dataLists,this.indexNum])},deep:!0}},methods:{tabPicture:function(t){console.log(t,"操作单张图片返回值"),this.dataLists.dataList=t;var e=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TITLECONTENTIMGC",e)},tabIconTitle:function(t){console.log(t,"顶部标题修改"),this.dataLists.iconTitle=t[0];var e=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TITLECONTENTIMGC",e)},tapIndex:function(t){console.log(t,"用户修改的数据的index"),this.indexs=t},tapTitleContent:function(t){var e=this;console.log(t,"点击标题返回值----数组"),this.dataLists.dataList.map(function(i,a){a===e.indexs&&(i.title=t[0],i.content=t[1])});var i=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TITLECONTENTIMGC",i)},tapDeleteMoveTips:function(t){console.log(t[0],t[1],"删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1],!1===t[1]?this.manageType=1:this.manageType=0,console.log(this.manageType,"------------------this.manageType-------------------");var e=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TITLECONTENTIMGC",e)},tapManageCopyTips:function(t){console.log(t,"管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1];var e=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TITLECONTENTIMGC",e)}}};e.default=d},d18a:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/rhx/InstrModule/TITLE_CONTENT_IMG_D-create-component',
    {
        'components/rhx/InstrModule/TITLE_CONTENT_IMG_D-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("274a"))
        })
    },
    [['components/rhx/InstrModule/TITLE_CONTENT_IMG_D-create-component']]
]);
