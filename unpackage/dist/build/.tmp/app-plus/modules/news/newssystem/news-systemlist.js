(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/news/newssystem/news-systemlist"],{6705:function(e,t,n){"use strict";n.r(t);var s=n("cf30"),o=n("871f");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("8bea");var r=n("2877"),a=Object(r["a"])(o["default"],s["a"],s["b"],!1,null,null,null);t["default"]=a.exports},"7f0e":function(e,t,n){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){return n.e("modules/news/newssystem/news-system").then(n.bind(null,"f746"))},u={data:function(){return{lists:[]}},components:{system:a},created:function(){this.system(),this.shareEachPage()},onLoad:function(){e.setNavigationBarTitle({title:this.i18n.title1})},computed:i({i18n:function(){return this.$t("News")}},(0,o.mapGetters)(["GET_NEWS"])),methods:{system:function(){var t=this;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));console.log(s(n.user.id," at modules\\news\\newssystem\\news-systemlist.vue:43"));var o={page:"1",userId:n.user.id};e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/notice",data:o,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(n){e.hideLoading(),console.log(s(n.data," at modules\\news\\newssystem\\news-systemlist.vue:62")),t.lists=n.data.content.list,console.log(s(t.lists," at modules\\news\\newssystem\\news-systemlist.vue:64")),t.$store.commit("setsystem",t.lists)},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(s(t,"网络繁忙，请稍后"," at modules\\news\\newssystem\\news-systemlist.vue:74"))}})}}}};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"871f":function(e,t,n){"use strict";n.r(t);var s=n("7f0e"),o=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);t["default"]=o.a},"8bea":function(e,t,n){"use strict";var s=n("ea38"),o=n.n(s);o.a},cf30:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o})},ea38:function(e,t,n){},ecc6:function(e,t,n){"use strict";(function(e){n("ad90"),n("921b");s(n("66fd"));var t=s(n("6705"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["ecc6","common/runtime","common/vendor"]]]);