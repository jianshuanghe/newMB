(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/createBusiness/templateFinish/templateFinish"],{"35bb":function(t,e,i){"use strict";(function(t){i("f43d"),i("921b");n(i("66fd"));var e=n(i("eaaa"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("5486")["createPage"])},"6c5b":function(t,e,i){},"6e24":function(t,e,i){"use strict";i.r(e);var n=i("81a3"),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},7851:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"81a3":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u(i("cf07")),s=u(i("8e02")),o=u(i("6945")),a=u(i("50d4")),r=i("2f62");function u(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){d(t,e,i[e])})}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l=function(){return Promise.all([i.e("common/vendor"),i.e("components/mbbo/quickBtn/quickBtn")]).then(i.bind(null,"ec6c"))},h=function(){return Promise.all([i.e("common/vendor"),i.e("components/mbbo/navigation/navigation")]).then(i.bind(null,"ce22"))},g=function(){return i.e("components/common/RHX/rTitle/rTitle").then(i.bind(null,"09a6"))},f=function(){return Promise.all([i.e("common/vendor"),i.e("modules/createBusiness/templateFinish/skipMask")]).then(i.bind(null,"5df4"))},m={data:function(){return{xing:n.default,remnane:0,rem:0,desc:"",des:"",look:s.default,hiden:2,num:0,nums:9999999999,edit:"",del:o.default,list:[],id:"",editleiid:"",arr:[],editleis:"",right:a.default,iscategory:!1,arrs:[],tips:[{show:!1},{show:!1}],skipMaskShow:!1,shipPublish:!1,dateLists:null,publishOrUpdata:0}},components:{quickBtn:l,navigation:h,rTitle:g,skipMask:f},onLoad:function(){},created:function(){this.shareEachPage();var e=JSON.parse(t.getStorageSync("urlParamsTemp"));this.dateLists=this.urlCrypto(e,1)[0],this.publishOrUpdata=this.urlCrypto(e,1)[1],console.log(this.publishOrUpdata,"发布还是跟新"),console.log(this.publishOrUpdata,"---------------this.publishOrUpdata---------------"),this.editleis=this.dateLists.instrucCategoryStr,this.list=this.dateLists.keyList,this.Varieties(),t.getStorageSync("templateFinishSkip")?!0===t.getStorageSync("templateFinishSkip")&&(this.shipPublish=!0):this.shipPublish=!1},methods:{clickShowTitle:function(t){this.tips[t].show=!this.tips[t].show},Varieties:function(){var e=this;if(t.getStorageSync("landRegist")){var i=JSON.parse(t.getStorageSync("landRegist"));t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc/getTypes",method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){t.hideLoading(),"200"===i.data.ret?e.arrs=i.data.content:"202"===i.data.ret?(t.removeStorageSync("landRegist"),t.removeStorageSync("clickItems"),e.$store.commit("setHome",1),e.$store.commit("setLandRegist",0),t.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),t.getStorageSync("landRegist")||e.landRegistra()):"400"===i.data.ret?t.showToast({title:i.data.msg,icon:"none",duration:1e3}):(t.hideLoading(),t.showToast({title:"网络开小差了，请稍后重试",icon:"none",duration:1e3}))},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}},hidens:function(t,e){this.dateLists.instrucCategory=t.id,this.editleis=t.typeName,this.iscategory=!this.iscategory},editpin:function(){var t=this;this.iscategory=!0,this.arrs.map(function(e,i){t.editleis===e.typeName&&(t.nums=i)})},quxiao:function(){this.iscategory=!1},dele:function(t){this.list.splice(t,1)},instrucTitle:function(t){this.dateLists.instrucTitle=t[1]},instrucIntro:function(t){this.dateLists.instrucIntro=t[1]},add:function(){this.hiden="1",this.num="1"},sub:function(){if(""===this.edit)this.hiden=2;else{if(this.hiden=2,this.list.length>14)return this.edit="",t.showToast({title:"最多只能添加15个标签",icon:"none",duration:1e3}),!1;this.list.push(this.edit),this.edit=""}},clickSkipBtn:function(){t.getStorageSync("templateFinishSkip")||(this.skipMaskShow=!0)},tapSkipMask:function(t){console.log(t,"操作shipMask"),this.skipMaskShow=t[0],1===t[1]&&(this.shipPublish=!0,this.editbao())},editbao:function(){var e=this,i={};if(t.getStorageSync("landRegist")){if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));if(i=this.dateLists,i.keyList=this.list,""===i.instrucTitle)return void t.showToast({title:"请填写说明书名称!",icon:"none",duration:1e3});if(""===i.instrucIntro)return void t.showToast({title:"请填写说明书简介!",icon:"none",duration:1e3});if(""===i.instrucCategory)return void t.showToast({title:"请选择所属品类!",icon:"none",duration:1e3});var s=[];if(i.keyList&&i.keyList.map(function(t,e){""!==t&&s.push(t)}),i.keyList=s,i.keyList.length<1&&!1===this.shipPublish&&!t.getStorageSync("templateFinishSkip"))return void(this.skipMaskShow=!0);if(t.showLoading({title:"加载中"}),0===this.publishOrUpdata)delete i.instrucCategoryStr,t.request({url:this.api2+"/rest-rp/instruc",data:i,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(n){"200"===n.data.ret?(t.hideLoading(),"0"===i.instrucState?t.navigateTo({url:"/modules/InstructionsPrice/myproduct/myproduct-shu"}):t.navigateTo({url:"/modules/createBusiness/templateFinish/templateFinishShare?urlParams="+e.urlCrypto(n.data.content,0)})):"202"===n.data.ret?(t.removeStorageSync("landRegist"),t.removeStorageSync("clickItems"),e.$store.commit("setHome",1),e.$store.commit("setLandRegist",0),t.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),t.getStorageSync("landRegist")||e.landRegistra()):"400"===n.data.ret?t.showToast({title:n.data.msg,icon:"none",duration:1e3}):(t.hideLoading(),t.showToast({title:"网络开小差了，请稍后重试",icon:"none",duration:1e3}))},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}});else if(1===this.publishOrUpdata){delete i.instrucCategoryStr;var o=[];i.keyList.map(function(t,e){""!==t&&o.push(t)}),i.keyList=o,t.request({url:this.api2+"/rest-rp/instruc/"+i.context.instrucId,data:i,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(i){"200"===i.data.ret?(t.hideLoading(),t.navigateTo({url:"modules/InstructionsPrice/myproduct/myproduct-shu"})):"202"===i.data.ret?(t.hideLoading(),t.removeStorageSync("landRegist"),t.removeStorageSync("clickItems"),e.$store.commit("setHome",1),e.$store.commit("setLandRegist",0),t.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),t.getStorageSync("landRegist")||e.landRegistra()):"400"===i.data.ret?(t.hideLoading(),t.showToast({title:i.data.msg,icon:"none",duration:1e3})):(t.hideLoading(),t.showToast({title:"网络开小差了，请稍后重试",icon:"none",duration:1e3}))},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}}}else this.landRegistra()}},computed:c({i18n:function(){return this.$t("Howtoshow")}},(0,r.mapGetters)(["GET_NEWS","GET_HOME","QUICKNAVCO"]))};e.default=m}).call(this,i("5486")["default"])},eaaa:function(t,e,i){"use strict";i.r(e);var n=i("7851"),s=i("6e24");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("ee3e");var a=i("2877"),r=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},ee3e:function(t,e,i){"use strict";var n=i("6c5b"),s=i.n(n);s.a}},[["35bb","common/runtime","common/vendor"]]]);