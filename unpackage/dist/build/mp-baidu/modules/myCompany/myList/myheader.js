(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/myList/myheader"],{"33ac":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("50d4")),a=n("2f62");function i(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/quickBtn/quickBtn")]).then(n.bind(null,"ec6c"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/navigation/navigation")]).then(n.bind(null,"ce22"))},c=function(){return n.e("components/common/imageUpload/imageUploadOne").then(n.bind(null,"1837"))},d={data:function(){return{right:o.default,Listdata:[],imageData:"",logo:"",logos:"",serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload",list:[],name:""}},components:{quickBtn:l,navigation:u,imageUploadOne:c},computed:r({i18n:function(){return this.$t("Mypersonal")}},(0,a.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){e.setNavigationBarTitle({title:this.i18n.title1})},watch:{GET_MY:{handler:function(e,t){console.log(e,t,"header----list"),this.list=e.headers,this.name=this.list.nickname},deep:!0}},created:function(){this.list=this.GET_MY.headers,this.shareEachPage(),console.log(this.list,"myheader"),this.getmy()},methods:{getmy:function(){var t=this;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));console.log(n.user.id);e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/user/"+n.user.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){e.hideLoading(),t.list=n.data.content,t.$store.commit("setMy",t.list)},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},deleteImage:function(e){console.log(e,"删除图片"),this.logo=""},addImage:function(e){console.log(e,"添加图片"),e.allImages&&(this.logo=e.allImages[0].imgName,this.logos=e.allImages[0].imgUrl,console.log(this.logo))},gotoPersonal:function(){console.log("简单介绍"),e.navigateTo({url:"/modules/myCompany/myList/myheader-list/myheader-Personal"})},gotointerested:function(){console.log("感兴趣的行业"),e.navigateTo({url:"/modules/myCompany/myList/myheader-list/myheader-interested"})},gotoKeyword:function(){console.log("采购关键词"),e.navigateTo({url:"/modules/myCompany/myList/myheader-list/myheader-Keyword"})},gotoPurchase:function(){console.log("供应关键词"),e.navigateTo({url:"/modules/myCompany/myList/myheader-list/KeyWords"})},Preservation:function(){var t=this;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));console.log(n.user.id);var o={nickname:this.name,headImg:this.logo};e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/user/"+n.user.id,data:o,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(n){e.hideLoading(),console.log(n.data),t.GET_MY.headers.nickname=t.name,t.logo?t.GET_MY.headers.headImg=t.logos:t.GET_MY.headers.headImg=t.list.headImg,t.$store.commit("setMy",t.GET_MY.headers),e.navigateBack({})},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}}}};t.default=d}).call(this,n("5486")["default"])},"374e":function(e,t,n){"use strict";var o=n("5519"),a=n.n(o);a.a},3856:function(e,t,n){"use strict";n.r(t);var o=n("33ac"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},5519:function(e,t,n){},"67b4":function(e,t,n){"use strict";(function(e){n("f43d"),n("921b");o(n("66fd"));var t=o(n("af07"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("5486")["createPage"])},"6f6f":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},af07:function(e,t,n){"use strict";n.r(t);var o=n("6f6f"),a=n("3856");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("374e");var r=n("2877"),s=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports}},[["67b4","common/runtime","common/vendor"]]]);