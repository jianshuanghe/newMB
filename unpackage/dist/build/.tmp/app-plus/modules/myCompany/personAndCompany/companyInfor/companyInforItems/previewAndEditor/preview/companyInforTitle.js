(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/preview/companyInforTitle"],{"265d":function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("2f62");function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){i(e,n,t[n])})}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a={name:"companyInforTitle",components:{},data:function(){return{confirmShow:!1,clickItemsIndex:1}},computed:c({},(0,r.mapGetters)(["GET_MY"])),watch:{GET_MY:{handler:function(e,n){this.clickItemsIndex=e.PersonTitle},deep:!0}},created:function(){},onLoad:function(){e.setNavigationBarTitle({title:"公司信息"})},methods:c({},(0,r.mapMutations)({setPersonTitle:"setPersonTitle"}),{clickAllRead:function(){this.confirmShow=!0},clickNewsType:function(e){console.log(o(e,"切换基本信息和资质认证类型"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\preview\\companyInforTitle.vue:65")),this.$store.commit("setPersonTitle",e),this.$emit("PersonTitle",e)}})};n.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},"3d5b":function(e,n,t){"use strict";var o=t("c16d"),r=t.n(o);r.a},c16d:function(e,n,t){},c72d:function(e,n,t){"use strict";t.r(n);var o=t("265d"),r=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,function(){return o[e]})}(c);n["default"]=r.a},e64a:function(e,n,t){"use strict";t.r(n);var o=t("ec72"),r=t("c72d");for(var c in r)"default"!==c&&function(e){t.d(n,e,function(){return r[e]})}(c);t("3d5b");var i=t("2877"),a=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,"098a75f0",null);n["default"]=a.exports},ec72:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/preview/companyInforTitle-create-component',
    {
        'modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/preview/companyInforTitle-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("e64a"))
        })
    },
    [['modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/preview/companyInforTitle-create-component']]
]);