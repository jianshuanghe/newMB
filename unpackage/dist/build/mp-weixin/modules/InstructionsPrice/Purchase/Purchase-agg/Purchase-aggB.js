(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/InstructionsPrice/Purchase/Purchase-agg/Purchase-aggB"],{b48c:function(t,e,n){"use strict";n.r(e);var i=n("f13a"),r=n("c4dc");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("bdbf7");var c=n("2877"),o=Object(c["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},bdbf7:function(t,e,n){"use strict";var i=n("dc40"),r=n.n(i);r.a},c4dc:function(t,e,n){"use strict";n.r(e);var i=n("e31a"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},dc40:function(t,e,n){},e31a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{Images:this.Static+"my/Images.png",Image:this.Static+"my/Image.png",zan:this.Static+"my/zan.png",look:this.Static+"my/look.png",phone:this.Static+"my/phone.png",liu:this.Static+"my/liu.png",shou:this.Static+"my/shou.png",fen:this.Static+"my/fen.png",arr:[],wa:this.Static+"my/w-a.png",wb:this.Static+"my/w-b.png",wc:this.Static+"my/w-c.png",wd:this.Static+"my/w-d.png",yiover:this.Static+"my/yiover.png",xia:this.Static+"my/xia.png"}},watch:{GET_MY:{handler:function(t,e){console.log(t),this.arr=t.PurchaseB},deep:!0}},created:function(){this.arr=this.GET_MY.PurchaseB,console.log(this.arr)},mounted:function(){},methods:{gotoPurchasedetails:function(e){console.log("to我的采购-详情"),t.navigateTo({url:"/modules/InstructionsPrice/Purchase/Purchase-details/Purchase-details?id="+e})}},filters:{ellipsis:function(t){return t?t.length>15?t.slice(0,15)+"...":t:""}},computed:r({},(0,i.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"]))};e.default=c}).call(this,n("543d")["default"])},f13a:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.arr,function(e,n){var i=t._f("ellipsis")(e.purcTitle);return{$orig:t.__get_orig(e),f0:i}})),i=t.__map(t.arr,function(e,n){var i=t._f("ellipsis")(e.purcTitle);return{$orig:t.__get_orig(e),f1:i}});t.$mp.data=Object.assign({},{$root:{l0:n,l1:i}})},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/InstructionsPrice/Purchase/Purchase-agg/Purchase-aggB-create-component',
    {
        'modules/InstructionsPrice/Purchase/Purchase-agg/Purchase-aggB-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b48c"))
        })
    },
    [['modules/InstructionsPrice/Purchase/Purchase-agg/Purchase-aggB-create-component']]
]);                
