(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/publishPurchase/publishPurchase"],{5187:function(t,e,i){"use strict";i.r(e);var o=i("ac37"),a=i("8b31");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);var u=i("2877"),r=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"8b31":function(t,e,i){"use strict";i.r(e);var o=i("f3b9"),a=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},ac37:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a})},f3b9:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(i("c39e")),a=i("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},o=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),o.forEach(function(e){r(t,e,i[e])})}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var n=function(){return i.e("modules/publishPurchase/selectTemplate/contontEdit").then(i.bind(null,"883e"))},c=function(){return i.e("modules/publishPurchase/selectTemplate/contontPreview").then(i.bind(null,"f8a0"))},l=function(){return i.e("components/mbbo/navigation/navigation").then(i.bind(null,"9063"))},p={components:{navigation:l,contontEdit:n,contontPreview:c},data:function(){return{loadEnd:!1,routeParam:null,businessTemList:null,caiGouDetileData:null,listData:{serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload",imageData:[]},caiGouList:{paraList:[],requList:[],imgList:[],userId:760,purcTitle:"",purcSpec:"",purcCount:1,purcUnit:"",purcPcode:"",purcCcode:"",purcCcodeStr:"",purcContent:"",purcDefault:"0",purcInvo:"1",purcFrei:"1",purcEndTime:"",purcReceTime:"0-0-0",purcState:"",purcType:"0"}}},onLoad:function(t){this.$store.commit("setPreviceCaiGou",!1),this.$store.commit("setImgList",this.listData),this.$store.commit("setCaiGouList",this.caiGouList),console.log("加载发布采购");var e=this.urlCrypto(t.urlParams,1);console.log(e,"---------------加载发布采购参数-------------"),this.routeParam=e,0===e.sourceTemp?(console.log("来源模板！"),this.caiGouList=this.GET_PUBLISH.publishPurchase.caiGouList,this.caiGouList.purcEndTime=this.getDate(3,"later"),this.getCaiGouTemplate(),this.getBusinessList(),this.shareEachPage()):4===e.sourceTemp?this.getPurchaseList(e):2===e.sourceTemp&&this.getPurchaseList(e)},computed:u({},(0,a.mapGetters)(["GET_PUBLISH","QUICKNAVCO"])),watch:{GET_PUBLISH:{handler:function(t,e){this.caiGouList=t.publishPurchase.caiGouList},deep:!0}},created:function(){},mounted:function(){},beforeDestroy:function(){console.log("页面销毁之前缓存数据更新-----------setImgList、setCaiGouList"),2!==this.routeParam.sourceTemp&&3!==this.routeParam.sourceTemp||this.$store.commit("setPreviceCaiGou",!1)},methods:u({},(0,a.mapMutations)({setTempletType:"setTempletType",setCaiGouList:"setCaiGouList"}),{getBusinessList:function(e){var i=this,o={};t.showLoading({title:"加载中"});var a=null;if(t.getStorageSync("landRegist")){var s=JSON.parse(t.getStorageSync("landRegist"));a=s.user.id}e&&void 0!==e&&(a=e),t.request({url:this.api2+"/rest-rp/instruc/userInfo?userId="+a,data:o,method:"GET",header:{Authorization:"Bearer "},success:function(e){console.log(e.data,"---------------response.data--------------"),"200"===e.data.ret?(t.hideLoading(),i.businessTemList=e.data,i.loadEnd=!0):(t.hideLoading(),t.showToast({title:"网络开小差了，请稍后重试",icon:"none",duration:1e3}))},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})},getPurchaseList:function(e){var i=this;console.log("获取采购信息数据！"),console.log(e,"链接上的参数"),this.$store.commit("setPreviceCaiGou",!0);var a={};t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/purc/selectInfo?id="+e.purcId+"&lookUserId="+e.lookUserId,data:a,method:"GET",header:{Authorization:"Bearer "},success:function(e){if(console.log(e.data,"---------------response.data--------------"),"200"===e.data.ret){i.caiGouDetileData=e.data.content,t.setNavigationBarTitle({title:i.caiGouDetileData.purcTitle});var a=e.data.content;i.caiGouList.purcType=a.purcType,i.caiGouList.paraList=a.paraList,i.caiGouList.requList=a.requList,"0"===i.caiGouList.purcType?(i.$store.commit("setTempletType",0),t.setStorageSync("purcType",0),i.caiGouList.purcDefault="0"):"1"===i.caiGouList.purcType&&(i.$store.commit("setTempletType",1),t.setStorageSync("purcType",1),i.caiGouList.purcDefault="1"),i.caiGouList.id=a.id,i.caiGouList.purcEndTime=o.default.dateTime("-",a.purcEndTime),i.caiGouList.day=a.day,i.caiGouList.hour=a.hour,i.caiGouList.minute=a.minute,i.caiGouList.purcCcodeStr=a.purcCcodeStr,i.caiGouList.purcTitle=a.purcTitle,i.caiGouList.purcContent=a.purcContent,0===a.purcReceTime?i.caiGouList.purcReceTime="":i.caiGouList.purcReceTime=o.default.dateTime("-",a.purcReceTime);var s={serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload",imageData:[]};if(a.imgList.map(function(t,e){if(t){var i={imgUrl:t};s.imageData.push(i)}}),console.log(s,"附件数据"),i.$store.commit("setImgList",s),i.caiGouList.imgList=a.imgList,console.log(i.caiGouList,"------------this.caiGouList-------------"),i.$store.commit("setCaiGouList",i.caiGouList),i.loadEnd=!0,"1"!==i.routeParam.purcState)i.shareEachPage(null,null,null,null,null);else{var u="采购者:【".concat(i.caiGouDetileData.createMan,"】"),r={shareTitle:i.caiGouDetileData.purcTitle,shareIntro:u,shareImg:i.caiGouDetileData.imgList.length>0?i.caiGouDetileData.imgList[0]:"https://style.iambuyer.com/img/shareimg.png",shareLink:i.origin+"/#/modules/publishPurchase/publishPurchase?urlParams="+i.urlCrypto(i.routeParam,0)},n={userId:i.routeParam.lookUserId,id:i.routeParam.purcId,type:1},c=i.routeParam.isFlow;i.shareEachPage(r,1,n,c,i.routeParam)}var l=i;setTimeout(function(){l.pageStatus=!1,t.hideLoading()},150),i.getBusinessList(a.userId)}else t.hideLoading(),t.showToast({title:"网络开小差了，请稍后重试",icon:"none",duration:1e3})},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})},clickBusinessPutIn:function(){this.$store.commit("setTempletType",0),console.log("触发商机投放组件按钮")},getCaiGouTemplate:function(){var e=this;if(console.log("记载用户默认采购模板"),t.getStorageSync("landRegist")){var i=JSON.parse(t.getStorageSync("landRegist"));console.log(i.user.id);var o={};t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/purc/getDefault?userId="+i.user.id,data:o,method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){if("200"===i.data.ret){t.hideLoading();var o=i.data.content;e.caiGouList.purcType=o.purcType,e.caiGouList.paraList=o.paraList,e.caiGouList.requList=o.requList,"0"===e.caiGouList.purcType?e.$store.commit("setTempletType",0):"1"===e.caiGouList.purcType&&e.$store.commit("setTempletType",1),e.$store.commit("setCaiGouList",e.caiGouList),e.loadEnd=!0}else t.hideLoading(),t.showToast({title:"网络开小差了，请稍后重试",icon:"none",duration:1e3})},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}})};e.default=p}).call(this,i("543d")["default"])}},[["307f","common/runtime","common/vendor"]]]);