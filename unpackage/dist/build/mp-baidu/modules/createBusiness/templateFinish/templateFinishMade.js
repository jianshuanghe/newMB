(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/createBusiness/templateFinish/templateFinishMade"],{"0421":function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s("2f62");function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),a.forEach(function(t){d(e,t,s[t])})}return e}function d(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var n=function(){return Promise.all([s.e("common/vendor"),s.e("components/mbbo/quickBtn/quickBtn")]).then(s.bind(null,"4455"))},r=function(){return s.e("modules/createBusiness/templateFinish/madeAddress").then(s.bind(null,"153f"))},o=function(){return s.e("components/mbbo/navigation/navigation").then(s.bind(null,"ddba"))},c={data:function(){return{right:this.Static+"my/right.png",selectEd:this.Static+"publish/createBusiness/selectEd.png",select:this.Static+"publish/createBusiness/select.png",agreementImg:this.Static+"publish/createBusiness/select.png",list:null,tapIndex:0,dataLists:null,isSelctOrAddAddress:!1,addressList:null,madeAddressShow:!1,addressItems:{addrAcode:"",addrAcodeStr:"",addrCcode:"",addrCcodeStr:"",addrName:"",addrPcode:"",addrPcodeStr:"",addrPhone:"",addrState:"",address:"",createTime:null,cteateMan:"",id:null,states:"",updateMan:"",updateTime:null,userId:null},btnList:[{type:0,tempType:0,name:"大约应支付：",text:"¥0",width:"66.6666%",style:{}},{type:1,tempType:0,name:"提交",style:{backgroundImage:"linear-gradient(134deg, #15D49F 0%, #57D6CF 100%)",color:"#FFFFFF"}}]}},components:{quickBtn:n,navigation:o,madeAddress:r},onLoad:function(){},created:function(){this.shareEachPage();var t=JSON.parse(e.getStorageSync("madeParams"));this.dataLists=this.urlCrypto(t,1),this.btnList[0].text="¥"+this.dataLists.orderSpMoney,this.getUserAddress()},computed:i({},(0,a.mapGetters)(["GET_MY","QUICKNAVCO"])),watch:{GET_MY:{handler:function(e,t){var s=this;this.addressList=e.address,this.addressList.length>0?this.addressList.map(function(e,t){"1"===e.addrState&&(s.isSelctOrAddAddress=!0,s.addressItems=e,s.dataLists.receivPcode=e.addrPcode,s.dataLists.receivAcode=e.addrAcode,s.dataLists.receivCcode=e.addrCcode,s.dataLists.receivPhone=e.receivPhone,s.dataLists.receivName=e.addrName)}):this.isSelctOrAddAddress=!1},deep:!0}},methods:{getUserAddress:function(){var t=this;if(e.getStorageSync("landRegist")){var s=JSON.parse(e.getStorageSync("landRegist"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/address?userId="+s.user.id,method:"GET",header:{Authorization:"Bearer "+s.token},success:function(s){"200"===s.data.ret?(e.hideLoading(),t.addressList=s.data.content,t.addressList.length>0?t.addressList.map(function(e,s){"1"===e.addrState&&(t.isSelctOrAddAddress=!0,t.addressItems=e,t.dataLists.receivPcode=e.addrPcode,t.dataLists.receivAcode=e.addrAcode,t.dataLists.receivCcode=e.addrCcode,t.dataLists.receivPhone=e.addrPhone,t.dataLists.receivName=e.address,t.dataLists.receivUser=e.addrName)}):t.isSelctOrAddAddress=!1,t.$store.commit("setaddress",t.addressList)):"202"===s.data.ret?(e.hideLoading(),e.removeStorageSync("landRegist"),e.removeStorageSync("clickItems"),t.$store.commit("setHome",1),t.$store.commit("setLandRegist",0),e.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),e.getStorageSync("landRegist")||t.landRegistra()):"400"===s.data.ret?(e.hideLoading(),e.showToast({title:s.data.msg,icon:"none",duration:1e3})):(e.hideLoading(),e.showToast({title:"网络开小差了，请稍后重试",icon:"none",duration:1e3}))},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}},tapXuanZeAddress:function(e){!0===e&&(this.madeAddressShow=!1,this.getUserAddress())},gotoSetupaddress:function(){this.madeAddressShow=!0},agreementTips:function(){this.agreementImg===this.select?this.agreementImg=this.selectEd:this.agreementImg===this.selectEd&&(this.agreementImg=this.select)},clickBtnBox:function(t){var s=this;if(1===t.type){if(""===this.dataLists.receivPcode)return void e.showToast({title:"请选择收货地址！",icon:"none",duration:1e3});if(this.agreementImg!==this.selectEd)return void e.showToast({title:"请确认已阅读采购协议！",icon:"none",duration:1e3});if(delete this.dataLists.bannerImg,delete this.dataLists.instrucIntro,delete this.dataLists.instrucTitle,delete this.dataLists.compLogo,delete this.dataLists.companyName,delete this.dataLists.expressAddr,e.getStorageSync("landRegist")){var a=JSON.parse(e.getStorageSync("landRegist")),i=this.dataLists;e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/order/createOrder",data:i,method:"POST",header:{Authorization:"Bearer "+a.token},success:function(t){e.hideLoading(),"200"===t.data.ret?(e.hideLoading(),e.showToast({title:"提交成功！",icon:"none",duration:1e3}),e.navigateTo({url:"/modules/InstructionsPrice/Order/Order?id=2"})):"202"===t.data.ret?(e.hideLoading(),e.removeStorageSync("landRegist"),e.removeStorageSync("clickItems"),s.$store.commit("setHome",1),s.$store.commit("setLandRegist",0),e.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),e.getStorageSync("landRegist")||s.landRegistra()):"400"===t.data.ret?(e.hideLoading(),e.showToast({title:t.data.msg,icon:"none",duration:1e3})):(e.hideLoading(),e.showToast({title:"网络开小差了，请稍后重试",icon:"none",duration:1e3}))},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}}}}};t.default=c}).call(this,s("5486")["default"])},1442:function(e,t,s){"use strict";s.r(t);var a=s("0421"),i=s.n(a);for(var d in a)"default"!==d&&function(e){s.d(t,e,function(){return a[e]})}(d);t["default"]=i.a},"44ca":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];s.d(t,"a",function(){return a}),s.d(t,"b",function(){return i})},"8f18":function(e,t,s){},"9e41":function(e,t,s){"use strict";s.r(t);var a=s("44ca"),i=s("1442");for(var d in i)"default"!==d&&function(e){s.d(t,e,function(){return i[e]})}(d);s("ef69");var n=s("2877"),r=Object(n["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},ef69:function(e,t,s){"use strict";var a=s("8f18"),i=s.n(a);i.a}},[["4da9","common/runtime","common/vendor"]]]);