(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/project/MBBO/home"],{"34c4":function(t,e,n){"use strict";n.r(e);var i=n("d543"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a},"7df3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},8695:function(t,e,n){"use strict";n.r(e);var i=n("7df3"),o=n("34c4");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var s=n("2877"),a=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},d543:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){return n.e("components/mbbo/navigation/navigation").then(n.bind(null,"ddba"))},a=function(){return n.e("components/mbbo/publish/publish").then(n.bind(null,"7f09"))},l=function(){return n.e("pages/project/MBBO/aLittle/aLittle").then(n.bind(null,"26e5"))},c=function(){return n.e("pages/project/MBBO/find/find").then(n.bind(null,"7741"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("pages/project/MBBO/my/my")]).then(n.bind(null,"530c"))},d=function(){return Promise.all([n.e("common/vendor"),n.e("pages/project/MBBO/news/news")]).then(n.bind(null,"cb0f"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/homeTabBar/tab_bar")]).then(n.bind(null,"5245"))},h=function(){return n.e("pages/project/MBBO/KeyWords").then(n.bind(null,"9a3d"))},g={data:function(){return{tabItems:"",KeyWord:!1,Refr:""}},components:{navigation:s,aLittle:l,find:c,my:u,news:d,publish:a,tabBar:f,KeyWords:h},computed:o({i18n:function(){return this.$t("Home_title")}},(0,i.mapGetters)(["GET_HOME","QUICKNAVCO"])),watch:{GET_HOME:{handler:function(e,n){this.tabItems=e.tabItems,console.log(e.tabItems,"用户切换"),!0===e.publishShow?t.setNavigationBarTitle({title:this.i18n.title5}):this.upTitle(this.tabItems)},deep:!0},QUICKNAVCO:{handler:function(t,e){console.log(t.show,"--------------快捷导航---------------")},deep:!0}},onLoad:function(e){t.getStorageSync("clickItems")?(this.clickItems=t.getStorageSync("clickItems"),this.upTitle(this.clickItems)):this.upTitle(2),this.$store.commit("setAuthShow",!1)},created:function(){this.Key(),this.shareEachPage()},methods:o({keys:function(t){this.KeyWord=t},Refresh:function(t){this.Refr=t,this.$store.commit("setRefresh",this.Refr),console.log(this.Refr)},Key:function(){var e=this;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/userKeys/isSelectKeys?userId="+n.user.id,method:"GET",success:function(n){t.hideLoading(),console.log(n.data),"0"===n.data.content?e.KeyWord=!0:(e.KeyWord=!1,e.Refr=1)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}else if(t.getStorageSync("UUID")){var i=t.getStorageSync("UUID");console.log(i),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/userKeys/isSelectKeys?userId="+i,method:"GET",success:function(n){t.hideLoading(),console.log(n.data,"---------------------------------------------"),"0"===n.data.content?e.KeyWord=!0:(e.KeyWord=!1,e.Refr=1)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}},(0,i.mapMutations)({setAuthShow:"setAuthShow"}),{upTitle:function(e){console.log("跟新主页的title"),1==e?t.setNavigationBarTitle({title:this.i18n.title1}):2==e?t.setNavigationBarTitle({title:this.i18n.title2}):3==e?t.setNavigationBarTitle({title:this.i18n.title3}):4==e?t.setNavigationBarTitle({title:this.i18n.title4}):5==e&&t.setNavigationBarTitle({title:this.i18n.title5})}})};e.default=g}).call(this,n("543d")["default"])}},[["a73a","common/runtime","common/vendor"]]]);