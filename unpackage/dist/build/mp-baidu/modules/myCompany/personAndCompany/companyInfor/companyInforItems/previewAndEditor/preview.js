(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/preview"],{"55dd":function(n,e,o){"use strict";o.r(e);var t=o("cfbc"),r=o.n(t);for(var i in t)"default"!==i&&function(n){o.d(e,n,function(){return t[n]})}(i);e["default"]=r.a},"78a8":function(n,e,o){},"7f06":function(n,e,o){"use strict";var t=o("78a8"),r=o.n(t);r.a},8169:function(n,e,o){"use strict";o.r(e);var t=o("f2f98"),r=o("55dd");for(var i in r)"default"!==i&&function(n){o.d(e,n,function(){return r[n]})}(i);o("7f06");var a=o("2877"),c=Object(a["a"])(r["default"],t["a"],t["b"],!1,null,"01e37bd4",null);e["default"]=c.exports},cfbc:function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o("2f62");function r(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),t.forEach(function(e){i(n,e,o[e])})}return n}function i(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}var a=function(){return o.e("components/mbbo/topBox/topBox").then(o.bind(null,"6938"))},c=function(){return o.e("modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/preview/companyInforTitle").then(o.bind(null,"946b"))},u=function(){return Promise.all([o.e("common/vendor"),o.e("modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/preview/previewItems/basicInfor")]).then(o.bind(null,"0348"))},f=function(){return Promise.all([o.e("common/vendor"),o.e("modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/preview/previewItems/qualificatCert")]).then(o.bind(null,"23a8"))},l=function(){return Promise.all([o.e("common/vendor"),o.e("components/mbbo/navigation/navigation")]).then(o.bind(null,"ce22"))},m={name:"preview",components:{topBox:a,companyInforTitle:c,basicInfor:u,qualificatCert:f,navigation:l},data:function(){return{clickItemsIndex:1,num:1}},computed:r({},(0,t.mapGetters)(["GET_MY","QUICKNAVCO"])),watch:{GET_MY:{handler:function(n,e){this.clickItemsIndex=n.PersonTitle,console.log(n,e)},deep:!0}},onLoad:function(){n.setNavigationBarTitle({title:"公司信息"})},methods:{PersonTitle:function(n){console.log(n),this.num=n}}};e.default=m}).call(this,o("5486")["default"])},f2f98:function(n,e,o){"use strict";var t=function(){var n=this,e=n.$createElement;n._self._c},r=[];o.d(e,"a",function(){return t}),o.d(e,"b",function(){return r})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/preview-create-component',
    {
        'modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/preview-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("8169"))
        })
    },
    [['modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/preview-create-component']]
]);
