(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/moduleTitle/moduleTitle"],{"5aff":function(t,e,o){},"69d7":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return o.e("components/mbbo/topBox/topBox").then(o.bind(null,"52bd"))},n=function(){return o.e("components/common/RHX/rSelect/rSelect").then(o.bind(null,"857a"))},s=function(){return o.e("components/common/RHX/rPicker/rPicker").then(o.bind(null,"8f05"))},l=function(){return o.e("components/common/RHX/moduleList/moduleList").then(o.bind(null,"4d3f8"))},c={components:{topBox:i,rSelect:n,rPicker:s,moduleList:l},props:["disabled","titleText","manngeShow","dataList","moduleTempList"],data:function(){return{pickerCancel:!0,scrollHeight:0,addModuleTop:0,isModuleListShow:!1,isModuleListShows:!0,radioValue:{},lineHeights:0,content:null,selIconLists:this.selIconList,moduleTempLists:this.moduleTempList,dataLists:this.dataList}},created:function(){this.isModuleListShows=!0,console.log(this.dataList,"----------------------dataList-----------------------"),this.content=this.dataList,console.log(this.content,"-------------------------this.content--------------------"),this.scrollHeight=this.VwVhToPx(90,"vh")-20+"px",this.addModuleTop=this.VwVhToPx(90,"vh")-60+"px"},mounted:function(){this.titleHeight()},watch:{fixedScroll:{handler:function(t,e){console.log(t,e,"--------------------------------------监听valueOne变化---------------------------------------")},deep:!0}},methods:{titleHeight:function(){var e=this;console.log("判断当前很想模块所在位置");var o=t.createSelectorQuery().in(this);o.select("#titleHeight").boundingClientRect(),o.exec(function(t){console.log(t,"-------------res-------------");var o=t[0].height;e.lineHeights=o+"px",console.log(o,"---------------------height------------------"),e.$emit("title-Height",o)})},tapModuleYitems:function(t){console.log(t,"点击横向列表子项"),this.tapIndex=t,this.$emit("tap-ModuleItemsDel",this.indexNum)},tapModuleItems:function(t){this.isModuleListShows=!1,console.log(t,"点击目录子项"),this.$emit("tap-TitleScroll",t)},tapModuleListShow:function(t){console.log(t,"更新用户是否点击菜单头部，以及判断当前菜单是否需要展示"),this.isModuleListShows=t},tapManageModule:function(){this.isModuleListShow=!0,console.log(this.isModuleListShow)},tapPickerCancel:function(){console.log("点击picker取消按钮"),this.pickerCancel=!1,console.log(this.pickerCancel,"----------------this.pickerCancel--------------"),this.isModuleListShow=!1},tapPickerPreserve:function(e){console.log(e,"点击picker确定按钮"),this.isModuleListShow=!1,this.dataLists.content=this.content;var o=this.dataLists.content.context.tempCon.modules;if(this.$emit("tap-Title",[o,""]),t.getStorageSync("currentList")){var i=t.getStorageSync("currentList"),n=[];i.map(function(t,e){1===t.isShow&&(delete t.SortNumber,delete t.index,delete t.isShow,delete t.animation,delete t.y,delete t.x,n.push(t))}),console.log(n,"----------处理后的数据-----------"),this.$emit("tap-Title",[n,""])}},tabModuleList:function(t){console.log(t,"++++++++++++++++++++++++++++点击模块List组件+++++++++++++++++++++++++++"),this.content.context.tempCon.modules=t},tapPreserveBotttom:function(t){if(console.log(t,"点击添加模块底部确定按钮"),this.isModuleListShow=!1,void 0!==t&&"undefined"!==t&&""!==t){var e=this.content.context.tempCon.modules;e.push(t),console.log(e,"---------------tap-PreserveBotttom---------------"),this.distributeId(e)}},distributeId:function(t){var e=this,o=t;o.map(function(t,o){t.id="mb"+e.newGuid()});var i=o[o.length-1].id;this.$emit("tap-Title",[o,i])}}};e.default=c}).call(this,o("543d")["default"])},a97e:function(t,e,o){"use strict";o.r(e);var i=o("e1f8"),n=o("d624");for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);o("be57");var l=o("2877"),c=Object(l["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},be57:function(t,e,o){"use strict";var i=o("5aff"),n=o.n(i);n.a},d624:function(t,e,o){"use strict";o.r(e);var i=o("69d7"),n=o.n(i);for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},e1f8:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=(t._self._c,this.VwVhToPx(2,"vh"));t.$mp.data=Object.assign({},{$root:{g0:o}})},n=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return n})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/moduleTitle/moduleTitle-create-component',
    {
        'components/common/RHX/moduleTitle/moduleTitle-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a97e"))
        })
    },
    [['components/common/RHX/moduleTitle/moduleTitle-create-component']]
]);                