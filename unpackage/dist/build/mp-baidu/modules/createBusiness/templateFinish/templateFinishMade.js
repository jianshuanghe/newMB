(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/createBusiness/templateFinish/templateFinishMade"],{"0b9c":function(e,t,a){"use strict";var d=a("dd59"),s=a.n(d);s.a},"404f":function(e,t,a){"use strict";(function(e){a("f43d"),a("921b");d(a("66fd"));var t=d(a("a91a"));function d(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("5486")["createPage"])},"5ebb":function(e,t,a){"use strict";var d=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"a",function(){return d}),a.d(t,"b",function(){return s})},"98e8":function(e,t,a){"use strict";a.r(t);var d=a("f50d"),s=a.n(d);for(var n in d)"default"!==n&&function(e){a.d(t,e,function(){return d[e]})}(n);t["default"]=s.a},a91a:function(e,t,a){"use strict";a.r(t);var d=a("5ebb"),s=a("98e8");for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);a("0b9c");var i=a("2877"),r=Object(i["a"])(s["default"],d["a"],d["b"],!1,null,null,null);t["default"]=r.exports},dd59:function(e,t,a){},f50d:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=r(a("59fb")),s=r(a("96fe")),n=r(a("50d4")),i=a("2f62");function r(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},d=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),d.forEach(function(t){c(e,t,a[t])})}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=function(){return Promise.all([a.e("common/vendor"),a.e("components/mbbo/quickBtn/quickBtn")]).then(a.bind(null,"ec6c"))},l=function(){return Promise.all([a.e("common/vendor"),a.e("modules/createBusiness/templateFinish/madeAddress")]).then(a.bind(null,"54a1"))},m=function(){return Promise.all([a.e("common/vendor"),a.e("components/mbbo/navigation/navigation")]).then(a.bind(null,"ce22"))},h={data:function(){return{right:n.default,selectEd:d.default,select:s.default,agreementImg:s.default,list:null,tapIndex:0,dataLists:null,isSelctOrAddAddress:!1,addressList:null,madeAddressShow:!1,addressItems:{addrAcode:"",addrAcodeStr:"",addrCcode:"",addrCcodeStr:"",addrName:"",addrPcode:"",addrPcodeStr:"",addrPhone:"",addrState:"",address:"",createTime:null,cteateMan:"",id:null,states:"",updateMan:"",updateTime:null,userId:null},btnList:[{type:0,tempType:0,name:"大约应支付：",text:"¥0",width:"66.6666%",style:{}},{type:1,tempType:0,name:"提交",style:{backgroundImage:"linear-gradient(134deg, #15D49F 0%, #57D6CF 100%)",color:"#FFFFFF"}}]}},components:{quickBtn:u,navigation:m,madeAddress:l},onLoad:function(){},created:function(){this.shareEachPage();var t=JSON.parse(e.getStorageSync("madeParams"));this.dataLists=this.urlCrypto(t,1),this.btnList[0].text="¥"+this.dataLists.orderSpMoney,this.getUserAddress()},computed:o({},(0,i.mapGetters)(["GET_MY","QUICKNAVCO"])),watch:{GET_MY:{handler:function(e,t){var a=this;this.addressList=e.address,this.addressList.length>0?this.addressList.map(function(e,t){"1"===e.addrState&&(a.isSelctOrAddAddress=!0,a.addressItems=e,a.dataLists.receivPcode=e.addrPcode,a.dataLists.receivAcode=e.addrAcode,a.dataLists.receivCcode=e.addrCcode,a.dataLists.receivPhone=e.receivPhone,a.dataLists.receivName=e.addrName)}):this.isSelctOrAddAddress=!1},deep:!0}},methods:{getUserAddress:function(){var t=this;if(e.getStorageSync("landRegist")){var a=JSON.parse(e.getStorageSync("landRegist"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/address?userId="+a.user.id,method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){"200"===a.data.ret?(e.hideLoading(),t.addressList=a.data.content,t.addressList.length>0?t.addressList.map(function(e,a){"1"===e.addrState&&(t.isSelctOrAddAddress=!0,t.addressItems=e,t.dataLists.receivPcode=e.addrPcode,t.dataLists.receivAcode=e.addrAcode,t.dataLists.receivCcode=e.addrCcode,t.dataLists.receivPhone=e.addrPhone,t.dataLists.receivName=e.address,t.dataLists.receivUser=e.addrName)}):t.isSelctOrAddAddress=!1,t.$store.commit("setaddress",t.addressList)):"202"===a.data.ret?(e.hideLoading(),e.removeStorageSync("landRegist"),e.removeStorageSync("clickItems"),t.$store.commit("setHome",1),t.$store.commit("setLandRegist",0),e.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),e.getStorageSync("landRegist")||t.landRegistra()):"400"===a.data.ret?(e.hideLoading(),e.showToast({title:a.data.msg,icon:"none",duration:1e3})):(e.hideLoading(),e.showToast({title:"网络开小差了，请稍后重试",icon:"none",duration:1e3}))},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}},tapXuanZeAddress:function(e){!0===e&&(this.madeAddressShow=!1,this.getUserAddress())},gotoSetupaddress:function(){this.madeAddressShow=!0},agreementTips:function(){this.agreementImg===this.select?this.agreementImg=this.selectEd:this.agreementImg===this.selectEd&&(this.agreementImg=this.select)},clickBtnBox:function(t){var a=this;if(1===t.type){if(""===this.dataLists.receivPcode)return void e.showToast({title:"请选择收货地址！",icon:"none",duration:1e3});if(this.agreementImg!==this.selectEd)return void e.showToast({title:"请确认已阅读采购协议！",icon:"none",duration:1e3});if(delete this.dataLists.bannerImg,delete this.dataLists.instrucIntro,delete this.dataLists.instrucTitle,delete this.dataLists.compLogo,delete this.dataLists.companyName,delete this.dataLists.expressAddr,e.getStorageSync("landRegist")){var d=JSON.parse(e.getStorageSync("landRegist")),s=this.dataLists;e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/order/createOrder",data:s,method:"POST",header:{Authorization:"Bearer "+d.token},success:function(t){e.hideLoading(),"200"===t.data.ret?(e.hideLoading(),e.showToast({title:"提交成功！",icon:"none",duration:1e3}),e.navigateTo({url:"/modules/InstructionsPrice/Order/Order?id=2"})):"202"===t.data.ret?(e.hideLoading(),e.removeStorageSync("landRegist"),e.removeStorageSync("clickItems"),a.$store.commit("setHome",1),a.$store.commit("setLandRegist",0),e.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),e.getStorageSync("landRegist")||a.landRegistra()):"400"===t.data.ret?(e.hideLoading(),e.showToast({title:t.data.msg,icon:"none",duration:1e3})):(e.hideLoading(),e.showToast({title:"网络开小差了，请稍后重试",icon:"none",duration:1e3}))},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}}}}};t.default=h}).call(this,a("5486")["default"])}},[["404f","common/runtime","common/vendor"]]]);