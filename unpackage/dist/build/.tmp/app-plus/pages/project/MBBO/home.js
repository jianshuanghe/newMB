(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/project/MBBO/home"],{"36be":function(e,t,n){"use strict";n.r(t);var o=n("ecac"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},"7da8":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},d14d:function(e,t,n){"use strict";n.r(t);var o=n("7da8"),i=n("36be");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var r=n("2877"),s=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},ecac:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/navigation/navigation")]).then(n.bind(null,"5a67"))},c=function(){return n.e("components/mbbo/publish/publish").then(n.bind(null,"cb5c"))},l=function(){return n.e("pages/project/MBBO/aLittle/aLittle").then(n.bind(null,"5658"))},u=function(){return n.e("pages/project/MBBO/find/find").then(n.bind(null,"46d6"))},d=function(){return Promise.all([n.e("common/vendor"),n.e("pages/project/MBBO/my/my")]).then(n.bind(null,"05e5"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("pages/project/MBBO/news/news")]).then(n.bind(null,"8ac3"))},h=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/homeTabBar/tab_bar")]).then(n.bind(null,"201e"))},p=function(){return n.e("pages/project/MBBO/KeyWords").then(n.bind(null,"a0a2"))},g={data:function(){return{tabItems:"",KeyWord:!1,Refr:""}},components:{navigation:s,aLittle:l,find:u,my:d,news:f,publish:c,tabBar:h,KeyWords:p},computed:a({i18n:function(){return this.$t("Home_title")}},(0,i.mapGetters)(["GET_HOME","QUICKNAVCO"])),watch:{GET_HOME:{handler:function(t,n){this.tabItems=t.tabItems,console.log(e(t.tabItems,"用户切换"," at pages\\project\\MBBO\\home.vue:64")),!0===t.publishShow?o.setNavigationBarTitle({title:this.i18n.title5}):this.upTitle(this.tabItems)},deep:!0},QUICKNAVCO:{handler:function(t,n){console.log(e(t.show,"--------------快捷导航---------------"," at pages\\project\\MBBO\\home.vue:77"))},deep:!0}},onLoad:function(e){o.getStorageSync("clickItems")?(this.clickItems=o.getStorageSync("clickItems"),this.upTitle(this.clickItems)):this.upTitle(2),this.$store.commit("setAuthShow",!1)},created:function(){this.Key(),this.shareEachPage()},methods:a({keys:function(e){this.KeyWord=e},Refresh:function(t){this.Refr=t,this.$store.commit("setRefresh",this.Refr),console.log(e(this.Refr," at pages\\project\\MBBO\\home.vue:104"))},Key:function(){var t=this;if(o.getStorageSync("landRegist")){var n=JSON.parse(o.getStorageSync("landRegist"));console.log(e(n.user.id," at pages\\project\\MBBO\\home.vue:109")),o.showLoading({title:"加载中"}),o.request({url:this.api2+"/rest-rp/userKeys/isSelectKeys?userId="+n.user.id,method:"GET",success:function(n){o.hideLoading(),console.log(e(n.data," at pages\\project\\MBBO\\home.vue:120")),"0"===n.data.content?t.KeyWord=!0:(t.KeyWord=!1,t.Refr=1)},fail:function(t){o.hideLoading(),o.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at pages\\project\\MBBO\\home.vue:135"))}})}else if(o.getStorageSync("UUID")){var i=o.getStorageSync("UUID");console.log(e(i," at pages\\project\\MBBO\\home.vue:140")),o.showLoading({title:"加载中"}),o.request({url:this.api2+"/rest-rp/userKeys/isSelectKeys?userId="+i,method:"GET",success:function(n){o.hideLoading(),console.log(e(n.data,"---------------------------------------------"," at pages\\project\\MBBO\\home.vue:149")),"0"===n.data.content?t.KeyWord=!0:(t.KeyWord=!1,t.Refr=1)},fail:function(t){o.hideLoading(),o.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at pages\\project\\MBBO\\home.vue:165"))}})}}},(0,i.mapMutations)({setAuthShow:"setAuthShow"}),{upTitle:function(t){console.log(e("跟新主页的title"," at pages\\project\\MBBO\\home.vue:174")),1==t?o.setNavigationBarTitle({title:this.i18n.title1}):2==t?o.setNavigationBarTitle({title:this.i18n.title2}):3==t?o.setNavigationBarTitle({title:this.i18n.title3}):4==t?o.setNavigationBarTitle({title:this.i18n.title4}):5==t&&o.setNavigationBarTitle({title:this.i18n.title5})}})};t.default=g}).call(this,n("0de9")["default"],n("6e42")["default"])},f52b:function(e,t,n){"use strict";(function(e){n("ad90"),n("921b");o(n("66fd"));var t=o(n("d14d"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["f52b","common/runtime","common/vendor"]]]);