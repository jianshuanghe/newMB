(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/rhx/InstrModule/TEXT_A"],{"2dbd":function(t,s,e){},4247:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a=function(){return e.e("components/common/RHX/madeModule/shopAddress/shopAddress").then(e.bind(null,"2d07"))},i=function(){return e.e("components/common/RHX/rTitle/rTitle").then(e.bind(null,"57e2"))},n=function(){return e.e("components/common/RHX/manageCopyTips/manageCopyTips").then(e.bind(null,"5e17"))},o=function(){return e.e("components/common/RHX/deleteMoveTips/deleteMoveTips").then(e.bind(null,"3edc"))},d={components:{shopAddress:a,rTitle:i,manageCopyTips:n,deleteMoveTips:o},props:["disabled","basicData","scrollTop","defaultImg","dataList","indexNum","tabYItemsIndex"],data:function(){return{indexs:-1,basicDatas:this.basicData,defaultAddImg:this.defaultImg,dataLists:this.dataList,deleteMoveTipsShow:!1,manageType:0}},created:function(){console.log(this.dataLists,"-------------------------dataLists-----------------------")},watch:{scrollTop:{handler:function(t,s){console.log(t,s,"--------------------------------------监听TITLE_CONTENT_IMG_B变化---------------------------------------"),this.scrollTitleChange(this.dataLists.id,60,[this.dataLists,this.indexNum])},deep:!0}},methods:{tapShopAddress:function(t){console.log(t,"点击发货地返回的按数据"),this.dataLists.dataList=t;var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TEXTA",s)},tabIconTitle:function(t){console.log(t,"顶部标题修改"),this.dataLists.iconTitle=t[0];var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TEXTA",s)},tapIndex:function(t){console.log(t,"用户修改的数据的index"),this.indexs=t},tapTitleContent:function(t){var s=this;console.log(t,"点击标题返回值----数组"),this.dataLists.dataList.map(function(e,a){a===s.indexs&&(e.title=t[0],e.content=t[1])});var e=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TEXTA",e)},tapDeleteMoveTips:function(t){console.log(t[0],t[1],"删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1],!1===t[1]?this.manageType=1:this.manageType=0,console.log(this.manageType,"------------------this.manageType-------------------");var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TEXTA",s)},tapManageCopyTips:function(t){console.log(t,"管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值"),this.dataLists.dataList=t[0],this.deleteMoveTipsShow=t[1];var s=this.mergeBasicData(this.basicDatas,this.dataLists.type,this.dataLists,this.indexNum);this.$emit("tap-TEXTA",s)}}};s.default=d},"5d03":function(t,s,e){"use strict";var a=e("2dbd"),i=e.n(a);i.a},"7d27":function(t,s,e){"use strict";e.r(s);var a=e("4247"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);s["default"]=i.a},acaf:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c},i=[];e.d(s,"a",function(){return a}),e.d(s,"b",function(){return i})},f9b7:function(t,s,e){"use strict";e.r(s);var a=e("acaf"),i=e("7d27");for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);e("5d03");var o=e("2877"),d=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);s["default"]=d.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/rhx/InstrModule/TEXT_A-create-component',
    {
        'components/rhx/InstrModule/TEXT_A-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f9b7"))
        })
    },
    [['components/rhx/InstrModule/TEXT_A-create-component']]
]);                
