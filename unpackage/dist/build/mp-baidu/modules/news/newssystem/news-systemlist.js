(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/news/newssystem/news-systemlist"],{"1a22":function(e,t,n){"use strict";n.r(t);var o=n("c39c"),r=n("2e6b");for(var s in r)"default"!==s&&function(e){n.d(t,e,function(){return r[e]})}(s);n("79d6");var i=n("2877"),a=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},2085:function(e,t,n){"use strict";(function(e){n("f43d"),n("921b");o(n("66fd"));var t=o(n("1a22"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("5486")["createPage"])},"2e6b":function(e,t,n){"use strict";n.r(t);var o=n("8fee"),r=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=r.a},"79d6":function(e,t,n){"use strict";var o=n("a873"),r=n.n(o);r.a},"8fee":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){return Promise.all([n.e("common/vendor"),n.e("modules/news/newssystem/news-system")]).then(n.bind(null,"0e9c"))},a={data:function(){return{lists:[]}},components:{system:i},created:function(){this.system(),this.shareEachPage()},onLoad:function(){e.setNavigationBarTitle({title:this.i18n.title1})},computed:r({i18n:function(){return this.$t("News")}},(0,o.mapGetters)(["GET_NEWS"])),methods:{system:function(){var t=this;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));console.log(n.user.id);var o={page:"1",userId:n.user.id};e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/notice",data:o,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(n){e.hideLoading(),console.log(n.data),t.lists=n.data.content.list,console.log(t.lists),t.$store.commit("setsystem",t.lists)},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}}}};t.default=a}).call(this,n("5486")["default"])},a873:function(e,t,n){},c39c:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})}},[["2085","common/runtime","common/vendor"]]]);