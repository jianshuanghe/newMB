(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/myList/myheader"],{"13ec":function(e,t,o){"use strict";var n=o("1d79"),a=o.n(n);a.a},"1d79":function(e,t,o){},"37c8":function(e,t,o){"use strict";o.r(t);var n=o("5ade"),a=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},"4e45":function(e,t,o){"use strict";(function(e){o("ad90"),o("921b");n(o("66fd"));var t=n(o("c61d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},"5ade":function(e,t,o){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o("2f62");function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){s(e,t,o[t])})}return e}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var r=function(){return Promise.all([o.e("common/vendor"),o.e("components/mbbo/quickBtn/quickBtn")]).then(o.bind(null,"2de2"))},m=function(){return Promise.all([o.e("common/vendor"),o.e("components/mbbo/navigation/navigation")]).then(o.bind(null,"5a67"))},l=function(){return o.e("components/common/imageUpload/imageUploadOne").then(o.bind(null,"2ec6"))},u={data:function(){return{right:this.Static+"my/right.png",Listdata:[],imageData:"",logo:"",logos:"",serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload",list:[],name:""}},components:{quickBtn:r,navigation:m,imageUploadOne:l},computed:i({i18n:function(){return this.$t("Mypersonal")}},(0,a.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){e.setNavigationBarTitle({title:this.i18n.title1})},watch:{GET_MY:{handler:function(e,t){console.log(n(e,t,"header----list"," at modules\\myCompany\\myList\\myheader.vue:146")),this.list=e.headers,this.name=this.list.nickname},deep:!0}},created:function(){this.list=this.GET_MY.headers,this.shareEachPage(),console.log(n(this.list,"myheader"," at modules\\myCompany\\myList\\myheader.vue:156")),this.getmy()},methods:{getmy:function(){var t=this;if(e.getStorageSync("landRegist")){var o=JSON.parse(e.getStorageSync("landRegist"));console.log(n(o.user.id," at modules\\myCompany\\myList\\myheader.vue:163"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/user/"+o.user.id,method:"GET",header:{Authorization:"Bearer "+o.token},success:function(o){e.hideLoading(),t.list=o.data.content,t.$store.commit("setMy",t.list)},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(n(t,"网络繁忙，请稍后"," at modules\\myCompany\\myList\\myheader.vue:190"))}})}},deleteImage:function(e){console.log(n(e,"删除图片"," at modules\\myCompany\\myList\\myheader.vue:196")),this.logo=""},addImage:function(e){console.log(n(e,"添加图片"," at modules\\myCompany\\myList\\myheader.vue:200")),e.allImages&&(this.logo=e.allImages[0].imgName,this.logos=e.allImages[0].imgUrl,console.log(n(this.logo," at modules\\myCompany\\myList\\myheader.vue:204")))},gotoPersonal:function(){console.log(n("简单介绍"," at modules\\myCompany\\myList\\myheader.vue:208")),e.navigateTo({url:"/modules/myCompany/myList/myheader-list/myheader-Personal"})},gotointerested:function(){console.log(n("感兴趣的行业"," at modules\\myCompany\\myList\\myheader.vue:214")),e.navigateTo({url:"/modules/myCompany/myList/myheader-list/myheader-interested"})},gotoKeyword:function(){console.log(n("采购关键词"," at modules\\myCompany\\myList\\myheader.vue:220")),e.navigateTo({url:"/modules/myCompany/myList/myheader-list/myheader-Keyword"})},gotoPurchase:function(){console.log(n("供应关键词"," at modules\\myCompany\\myList\\myheader.vue:226")),e.navigateTo({url:"/modules/myCompany/myList/myheader-list/KeyWords"})},Preservation:function(){var t=this;if(e.getStorageSync("landRegist")){var o=JSON.parse(e.getStorageSync("landRegist"));console.log(n(o.user.id," at modules\\myCompany\\myList\\myheader.vue:238"));var a={nickname:this.name,headImg:this.logo};e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/user/"+o.user.id,data:a,method:"POST",header:{Authorization:"Bearer "+o.token},success:function(o){e.hideLoading(),console.log(n(o.data," at modules\\myCompany\\myList\\myheader.vue:256")),t.GET_MY.headers.nickname=t.name,t.logo?t.GET_MY.headers.headImg=t.logos:t.GET_MY.headers.headImg=t.list.headImg,t.$store.commit("setMy",t.GET_MY.headers),e.navigateBack({})},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(n(t,"网络繁忙，请稍后"," at modules\\myCompany\\myList\\myheader.vue:275"))}})}}}};t.default=u}).call(this,o("6e42")["default"],o("0de9")["default"])},"6d4d":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},c61d:function(e,t,o){"use strict";o.r(t);var n=o("6d4d"),a=o("37c8");for(var i in a)"default"!==i&&function(e){o.d(t,e,function(){return a[e]})}(i);o("13ec");var s=o("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports}},[["4e45","common/runtime","common/vendor"]]]);