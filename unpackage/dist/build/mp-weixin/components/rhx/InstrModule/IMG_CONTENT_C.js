(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/rhx/InstrModule/IMG_CONTENT_C"],{"369b":function(t,s,i){},4495:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a=function(){return i.e("components/common/RHX/rTitle/rTitle").then(i.bind(null,"57e2"))},e=function(){return i.e("components/common/RHX/singlePicture/singlePicture").then(i.bind(null,"0a3c"))},n=function(){return i.e("components/common/RHX/deleteMoveTips/deleteMoveTips").then(i.bind(null,"3edc"))},o=function(){return i.e("components/common/RHX/manageCopyTips/manageCopyTips").then(i.bind(null,"5e17"))},c={components:{rTitle:a,singlePicture:e,deleteMoveTips:n,manageCopyTips:o},props:["basicData","dataList","disabled","tabYItemsIndex","indexNum","defaultImg","scrollTop"],data:function(){return{indexs:-1,dataLists:this.dataList,basicDatas:this.basicData,defaultAddImg:this.defaultImg,deleteMoveTipsShow:!1,manageType:0,isconContentShow:!0}},watch:{scrollTop:{handler:function(t,s){console.log(t,s,"--------------------------------------监听IMG_CONTENT_C变化---------------------------------------"),this.scrollTitleChange(this.dataLists.id,60,[this.dataLists,this.indexNum])},deep:!0},disabled:{handler:function(t,s){console.log(t,s,this.dataLists.dataList[0].content,"--------------------------------------监听当前文本框组件---------------------------------------"),!0===s&&""==this.dataLists.dataList[0].content&&""==this.dataLists.dataList[0].content2||!0===s&&"此处点击可输入内容"==this.dataLists.dataList[0].content&&"此处点击可输入内容"==this.dataLists.dataList[0].content2?this.isconContentShow=!1:this.isconContentShow=!0},deep:!0}},methods:{tabPicture:function(t){console.log(t,"操作单张图片返回值"),this.dataLists.dataList=t;var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-IMGCONTENTA",s)},tapIndex:function(t){console.log(t,"用户修改的数据的index"),this.indexs=t},tabIconTitle:function(t){console.log(t,"顶部标题修改"),this.dataLists.iconTitle=t[0];var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-IMGCONTENTC",s)},tabcontent:function(t){var s=this;console.log(t,"细节1修改"),this.dataLists.dataList.map(function(i,a){a===s.indexs&&(i.content=t[0])});var i=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-IMGCONTENTC",i)},tabcontent2:function(t){var s=this;console.log(t,"细节2修改"),this.dataLists.dataList.map(function(i,a){a===s.indexs&&(i.content2=t[0])});var i=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-IMGCONTENTC",i)},tapDeleteMoveTips:function(t){console.log(t[0],t[1],"删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1],!1===t[1]?this.manageType=1:this.manageType=0,console.log(this.manageType,"------------------this.manageType-------------------");var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-IMGCONTENTC",s)},tapManageCopyTips:function(t){console.log(t,"管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1];var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-IMGCONTENTC",s)}}};s.default=c},"81d6":function(t,s,i){"use strict";var a=i("369b"),e=i.n(a);e.a},ca15:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c},e=[];i.d(s,"a",function(){return a}),i.d(s,"b",function(){return e})},d75a:function(t,s,i){"use strict";i.r(s);var a=i("4495"),e=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(s,t,function(){return a[t]})}(n);s["default"]=e.a},e7eb:function(t,s,i){"use strict";i.r(s);var a=i("ca15"),e=i("d75a");for(var n in e)"default"!==n&&function(t){i.d(s,t,function(){return e[t]})}(n);i("81d6");var o=i("2877"),c=Object(o["a"])(e["default"],a["a"],a["b"],!1,null,null,null);s["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/rhx/InstrModule/IMG_CONTENT_C-create-component',
    {
        'components/rhx/InstrModule/IMG_CONTENT_C-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e7eb"))
        })
    },
    [['components/rhx/InstrModule/IMG_CONTENT_C-create-component']]
]);                
