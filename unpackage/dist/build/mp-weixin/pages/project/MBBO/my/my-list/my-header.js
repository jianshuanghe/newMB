(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/project/MBBO/my/my-list/my-header"],{"12fa":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e._f("ellipsis")(e.GET_MY.headers.companyName));e.$mp.data=Object.assign({},{$root:{f0:n}})},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},2063:function(e,t,n){"use strict";var o=n("8776"),r=n.n(o);r.a},"440c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=n("2f62");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=(o={data:function(){return{logo:this.Static+"my/logo.png",rightArrow:this.Static+"my/rightArrow.png",renzheng:this.Static+"my/renzheng.png",list:[],VIP:this.Static+"my/VIP.png",sasf:this.Static+"my/sasf.png",weirenzheng:this.Static+"my/weirenzheng.png"}},mounted:function(){},created:function(){},watch:{GET_MY:{handler:function(e,t){console.log(e,t,"header----list")},deep:!0}},filters:{ellipsis:function(e){return e?e.length>13?e.slice(0,13)+"...":e:""}}},a(o,"created",function(){}),a(o,"methods",{gotomyheader:function(){console.log("个人资料"),e.navigateTo({url:"/modules/myCompany/myList/myheader"})},gotomybusiness:function(){if(""==this.GET_MY.headers.companyName)console.log("基本信息编辑"),e.navigateTo({url:"/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor"});else{console.log("商家详情");var t=JSON.parse(e.getStorageSync("landRegist"));console.log(t.user.id),e.navigateTo({url:"/modules/myCompany/mybusiness/my-business?id="+t.user.id})}}}),a(o,"computed",i({},(0,r.mapGetters)(["GET_MY"]))),o);t.default=c}).call(this,n("543d")["default"])},8776:function(e,t,n){},9503:function(e,t,n){"use strict";n.r(t);var o=n("12fa"),r=n("c943");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("2063");var a=n("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},c943:function(e,t,n){"use strict";n.r(t);var o=n("440c"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/project/MBBO/my/my-list/my-header-create-component',
    {
        'pages/project/MBBO/my/my-list/my-header-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9503"))
        })
    },
    [['pages/project/MBBO/my/my-list/my-header-create-component']]
]);                
