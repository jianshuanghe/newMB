(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/myList/myheader"],{5408:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},"8c03":function(e,t,n){"use strict";var o=n("add5"),a=n.n(o);a.a},a24f:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/quickBtn/quickBtn")]).then(n.bind(null,"4455"))},s=function(){return n.e("components/mbbo/navigation/navigation").then(n.bind(null,"ddba"))},l=function(){return n.e("components/common/imageUpload/imageUploadOne").then(n.bind(null,"add4"))},c={data:function(){return{right:this.Static+"my/right.png",Listdata:[],imageData:"",logo:"",logos:"",serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload",list:[],name:""}},components:{quickBtn:r,navigation:s,imageUploadOne:l},computed:a({i18n:function(){return this.$t("Mypersonal")}},(0,o.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){e.setNavigationBarTitle({title:this.i18n.title1})},watch:{GET_MY:{handler:function(e,t){console.log(e,t,"header----list"),this.list=e.headers,this.name=this.list.nickname},deep:!0}},created:function(){this.list=this.GET_MY.headers,this.shareEachPage(),console.log(this.list,"myheader"),this.getmy()},methods:{getmy:function(){var t=this;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));console.log(n.user.id);e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/user/"+n.user.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){e.hideLoading(),t.list=n.data.content,t.$store.commit("setMy",t.list)},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},deleteImage:function(e){console.log(e,"删除图片"),this.logo=""},addImage:function(e){console.log(e,"添加图片"),e.allImages&&(this.logo=e.allImages[0].imgName,this.logos=e.allImages[0].imgUrl,console.log(this.logo))},gotoPersonal:function(){console.log("简单介绍"),e.navigateTo({url:"/modules/myCompany/myList/myheader-list/myheader-Personal"})},gotointerested:function(){console.log("感兴趣的行业"),e.navigateTo({url:"/modules/myCompany/myList/myheader-list/myheader-interested"})},gotoKeyword:function(){console.log("采购关键词"),e.navigateTo({url:"/modules/myCompany/myList/myheader-list/myheader-Keyword"})},gotoPurchase:function(){console.log("供应关键词"),e.navigateTo({url:"/modules/myCompany/myList/myheader-list/KeyWords"})},Preservation:function(){var t=this;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));console.log(n.user.id);var o={nickname:this.name,headImg:this.logo};e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/user/"+n.user.id,data:o,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(n){e.hideLoading(),console.log(n.data),t.GET_MY.headers.nickname=t.name,t.logo?t.GET_MY.headers.headImg=t.logos:t.GET_MY.headers.headImg=t.list.headImg,t.$store.commit("setMy",t.GET_MY.headers),e.navigateBack({})},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}}}};t.default=c}).call(this,n("543d")["default"])},add5:function(e,t,n){},aef2:function(e,t,n){"use strict";n.r(t);var o=n("5408"),a=n("c5f4");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("8c03");var r=n("2877"),s=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},c5f4:function(e,t,n){"use strict";n.r(t);var o=n("a24f"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a}},[["1d8a","common/runtime","common/vendor"]]]);