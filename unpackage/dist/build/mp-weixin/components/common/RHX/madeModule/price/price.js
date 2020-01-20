(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/madeModule/price/price"],{"440c":function(t,e,n){"use strict";n.r(e);var i=n("d94e"),a=n("e955");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"52bc":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/common/RHX/madeModule/price/editOrPreview/edit/edit").then(n.bind(null,"5c05"))},a=function(){return n.e("components/common/RHX/madeModule/price/editOrPreview/preview/preview").then(n.bind(null,"32a9"))},o={components:{edit:i,preview:a},props:["disabled","deleteMoveShow","dataList"],data:function(){return{dataLists:this.dataList}},created:function(){},watch:{dataList:{handler:function(t,e){console.log(t,e,"-----------dataList----------"),this.dataLists=t},deep:!0}},methods:{tapUpDataEdit:function(t){console.log(t,"更新编辑模块数据"),this.dataLists=t,this.$emit("tap-PriceDetails",this.dataLists)}}};e.default=o},d94e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},e955:function(t,e,n){"use strict";n.r(e);var i=n("52bc"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/madeModule/price/price-create-component',
    {
        'components/common/RHX/madeModule/price/price-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("440c"))
        })
    },
    [['components/common/RHX/madeModule/price/price-create-component']]
]);
