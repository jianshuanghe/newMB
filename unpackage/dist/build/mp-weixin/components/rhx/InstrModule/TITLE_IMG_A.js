(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/rhx/InstrModule/TITLE_IMG_A"],{"07d9":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=function(){return s.e("components/common/RHX/singlePicture/singlePicture").then(s.bind(null,"751f"))},a=function(){return s.e("components/common/RHX/rTitle/rTitle").then(s.bind(null,"02dc"))},n=function(){return s.e("components/common/RHX/manageCopyTips/manageCopyTips").then(s.bind(null,"7554"))},o=function(){return s.e("components/common/RHX/deleteMoveTips/deleteMoveTips").then(s.bind(null,"9140"))},d={components:{singlePicture:e,rTitle:a,manageCopyTips:n,deleteMoveTips:o},props:["disabled","basicData","scrollTop","defaultImg","dataList","indexNum","tabYItemsIndex"],data:function(){return{indexs:-1,basicDatas:this.basicData,defaultAddImg:this.defaultImg,dataLists:this.dataList,deleteMoveTipsShow:!1,manageType:0}},created:function(){console.log(this.dataLists,"-------------------------dataLists-----------------------")},watch:{scrollTop:{handler:function(t,i){console.log(t,i,"--------------------------------------监听TITLE_IMG_A变化---------------------------------------"),this.scrollTitleChange(this.dataLists.id,60,[this.dataLists,this.indexNum])},deep:!0}},methods:{tabPicture:function(t){console.log(t,"操作单张图片返回值"),this.dataLists.dataList=t;var i=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TITLEIMGA",i)},tabIconTitle:function(t){console.log(t,"顶部标题修改"),this.dataLists.iconTitle=t[0];var i=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TITLEIMGA",i)},tapIndex:function(t){console.log(t,"用户修改的数据的index"),this.indexs=t},tapTitleContent:function(t){var i=this;console.log(t,"点击标题返回值----数组"),this.dataLists.dataList.map(function(s,e){e===i.indexs&&(s.title=t[0],s.content=t[1])});var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TITLEIMGA",s)},tapDeleteMoveTips:function(t){console.log(t[0],t[1],"删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1],!1===t[1]?this.manageType=1:this.manageType=0,console.log(this.manageType,"------------------this.manageType-------------------");var i=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TITLEIMGA",i)},tapManageCopyTips:function(t){console.log(t,"管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1];var i=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TITLEIMGA",i)}}};i.default=d},"21d5":function(t,i,s){"use strict";s.r(i);var e=s("07d9"),a=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(i,t,function(){return e[t]})}(n);i["default"]=a.a},2648:function(t,i,s){},"7b7f":function(t,i,s){"use strict";s.r(i);var e=s("a2b7"),a=s("21d5");for(var n in a)"default"!==n&&function(t){s.d(i,t,function(){return a[t]})}(n);s("7d69");var o=s("2877"),d=Object(o["a"])(a["default"],e["a"],e["b"],!1,null,null,null);i["default"]=d.exports},"7d69":function(t,i,s){"use strict";var e=s("2648"),a=s.n(e);a.a},a2b7:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c},a=[];s.d(i,"a",function(){return e}),s.d(i,"b",function(){return a})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/rhx/InstrModule/TITLE_IMG_A-create-component',
    {
        'components/rhx/InstrModule/TITLE_IMG_A-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7b7f"))
        })
    },
    [['components/rhx/InstrModule/TITLE_IMG_A-create-component']]
]);                
