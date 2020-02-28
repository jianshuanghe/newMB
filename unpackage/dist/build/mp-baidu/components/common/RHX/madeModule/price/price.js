(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/madeModule/price/price"],{5865:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/common/RHX/madeModule/price/editOrPreview/edit/edit").then(n.bind(null,"e13a"))},a=function(){return n.e("components/common/RHX/madeModule/price/editOrPreview/preview/preview").then(n.bind(null,"2b97"))},o={components:{edit:i,preview:a},props:["disabled","deleteMoveShow","dataList"],data:function(){return{dataLists:this.dataList}},created:function(){},watch:{dataList:{handler:function(t,e){console.log(t,e,"-----------dataList----------"),this.dataLists=t},deep:!0}},methods:{tapUpDataEdit:function(t){console.log(t,"更新编辑模块数据"),this.dataLists=t,this.$emit("tap-PriceDetails",this.dataLists)}}};e.default=o},"84df":function(t,e,n){"use strict";n.r(e);var i=n("5865"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},c8ed:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},c967:function(t,e,n){"use strict";n.r(e);var i=n("c8ed"),a=n("84df");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);var r=n("2877"),d=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=d.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/madeModule/price/price-create-component',
    {
        'components/common/RHX/madeModule/price/price-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("c967"))
        })
    },
    [['components/common/RHX/madeModule/price/price-create-component']]
]);                
