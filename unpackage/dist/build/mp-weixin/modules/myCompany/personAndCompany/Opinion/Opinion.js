(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/Opinion/Opinion"],{"1db3":function(n,t,e){},"6f63":function(n,t,e){"use strict";e.r(t);var o=e("8768"),i=e("a44d");for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);e("e702");var r=e("2877"),a=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},8768:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},a44d:function(n,t,e){"use strict";e.r(t);var o=e("fb97"),i=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=i.a},e702:function(n,t,e){"use strict";var o=e("1db3"),i=e.n(o);i.a},fb97:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("2f62");function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){u(n,t,e[t])})}return n}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var r=function(){return e.e("modules/myCompany/personAndCompany/Opinion/OpinionList/Opinion-feedback").then(e.bind(null,"8c30"))},a=function(){return e.e("modules/myCompany/personAndCompany/Opinion/OpinionList/Opinion-myfeedback").then(e.bind(null,"494f"))},c=function(){return e.e("components/mbbo/navigation/navigation").then(e.bind(null,"ddba"))},l=function(){return Promise.all([e.e("common/vendor"),e.e("components/mbbo/quickBtn/quickBtn")]).then(e.bind(null,"4455"))},f={data:function(){return{list:[],num:0}},components:{quickBtn:l,navigation:c,myfeedback:a,feedback:r},computed:i({i18n:function(){return this.$t("Mypersonal")}},(0,o.mapGetters)(["GET_HOME","QUICKNAVCO"])),created:function(){this.shareEachPage()},onLoad:function(t){n.setNavigationBarTitle({title:this.i18n.title25}),this.list.push(this.i18n.title25),this.list.push(this.i18n.title26)},methods:{nums:function(n){console.log(n),this.num=n},gotoGood:function(n){this.num=n}}};t.default=f}).call(this,e("543d")["default"])}},[["cc53","common/runtime","common/vendor"]]]);