(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/Opinion/Opinion"],{"007f":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},"3e42":function(n,t,e){},"7dec":function(n,t,e){"use strict";e.r(t);var o=e("9f8f"),i=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=i.a},"9f8f":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("2f62");function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){u(n,t,e[t])})}return n}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var r=function(){return e.e("modules/myCompany/personAndCompany/Opinion/OpinionList/Opinion-feedback").then(e.bind(null,"d076"))},a=function(){return Promise.all([e.e("common/vendor"),e.e("modules/myCompany/personAndCompany/Opinion/OpinionList/Opinion-myfeedback")]).then(e.bind(null,"6afb"))},c=function(){return Promise.all([e.e("common/vendor"),e.e("components/mbbo/navigation/navigation")]).then(e.bind(null,"ce22"))},f=function(){return Promise.all([e.e("common/vendor"),e.e("components/mbbo/quickBtn/quickBtn")]).then(e.bind(null,"ec6c"))},l={data:function(){return{list:[],num:0}},components:{quickBtn:f,navigation:c,myfeedback:a,feedback:r},computed:i({i18n:function(){return this.$t("Mypersonal")}},(0,o.mapGetters)(["GET_HOME","QUICKNAVCO"])),created:function(){this.shareEachPage()},onLoad:function(t){n.setNavigationBarTitle({title:this.i18n.title25}),this.list.push(this.i18n.title25),this.list.push(this.i18n.title26)},methods:{nums:function(n){console.log(n),this.num=n},gotoGood:function(n){this.num=n}}};t.default=l}).call(this,e("5486")["default"])},ad3a:function(n,t,e){"use strict";e.r(t);var o=e("007f"),i=e("7dec");for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);e("be49");var r=e("2877"),a=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},be49:function(n,t,e){"use strict";var o=e("3e42"),i=e.n(o);i.a},df19:function(n,t,e){"use strict";(function(n){e("f43d"),e("921b");o(e("66fd"));var t=o(e("ad3a"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("5486")["createPage"])}},[["df19","common/runtime","common/vendor"]]]);