(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/savePreviewPublish/savePreviewPublish"],{1460:function(e,t,n){"use strict";n.r(t);var i=n("9a30"),u=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=u.a},"269d":function(e,t,n){"use strict";var i=n("e2a3"),u=n.n(i);u.a},4741:function(e,t,n){"use strict";n.r(t);var i=n("5329"),u=n("1460");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("269d");var r=n("2877"),a=Object(r["a"])(u["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},5329:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u})},"9a30":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(){return n.e("components/common/button/fixedBgBtn").then(n.bind(null,"18f2"))},a=function(){return n.e("components/common/button/savePreviewBtn").then(n.bind(null,"c46d"))},c={data:function(){return{save:this.Static+"publish/purchase/save.png",preview:this.Static+"publish/purchase/preview.png",publish:this.Static+"publish/purchase/publish.png"}},components:{fixedBgBtn:r,savePreviewBtn:a},computed:u({i18n:function(){return this.$t("navigation")}},(0,i.mapGetters)(["GET_PUBLISH"])),watch:{GET_PUBLISH:{handler:function(e,t){},deep:!0}},methods:u({},(0,i.mapMutations)({setPreviceCaiGou:"setPreviceCaiGou"}),{Save:function(){console.log("触发保存按钮"),this.$emit("tap-Save")},Preview:function(){console.log("触发预览按钮"),this.$emit("tap-Preview")},Publish:function(){console.log("触发发布按钮"),this.$emit("tap-Publish")}})};t.default=c},e2a3:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/savePreviewPublish/savePreviewPublish-create-component',
    {
        'components/common/RHX/savePreviewPublish/savePreviewPublish-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("4741"))
        })
    },
    [['components/common/RHX/savePreviewPublish/savePreviewPublish-create-component']]
]);                
