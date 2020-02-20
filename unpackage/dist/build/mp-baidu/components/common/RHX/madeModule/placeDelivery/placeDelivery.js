(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/madeModule/placeDelivery/placeDelivery"],{"4ce9":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"77cb":function(e,t,n){"use strict";n.r(t);var a=n("df91"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},df91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return n.e("components/common/RHX/madeModule/placeDelivery/editOrPreview/edit/edit").then(n.bind(null,"2bc7"))},i=function(){return n.e("components/common/RHX/madeModule/placeDelivery/editOrPreview/preview/preview").then(n.bind(null,"4156"))},o={components:{edit:a,preview:i},props:["disabled","deleteMoveShow","basicData","dataList"],data:function(){return{dataLists:this.dataList}},created:function(){},watch:{dataList:{handler:function(e,t){console.log(e,t,"-----------dataList----------"),this.dataLists=e},deep:!0}},methods:{tapUpDataEdit:function(e){console.log(e,"更新编辑模块数据"),this.dataLists=e,this.$emit("tap-PriceDetails",this.dataLists)}}};t.default=o},f432:function(e,t,n){"use strict";n.r(t);var a=n("4ce9"),i=n("77cb");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);var c=n("2877"),r=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/madeModule/placeDelivery/placeDelivery-create-component',
    {
        'components/common/RHX/madeModule/placeDelivery/placeDelivery-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("f432"))
        })
    },
    [['components/common/RHX/madeModule/placeDelivery/placeDelivery-create-component']]
]);
