(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/memberCenter/memberCenterItems/buyMember/buyMember"],{2353:function(e,t,o){"use strict";o.r(t);var n=o("6476"),a=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},"2abc":function(e,t,o){},"48ed":function(e,t,o){"use strict";var n=o("2abc"),a=o.n(n);a.a},6476:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(o("2b0e")),a=c(o("a2a2")),i=c(o("2441")),s=c(o("8fab")),r=c(o("00fd")),u=c(o("5d99"));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(){return o.e("components/mbbo/topBox/topBox").then(o.bind(null,"6938"))},d={name:"buyMember",components:{topBox:l},data:function(){return{UserData:null,imgList:null,weixin:n.default,zhifubao:a.default,select:i.default,selected:s.default,lose:r.default,userLogo:u.default,ZhiFuBao:!0,WeiXin:!1,browserType:"FWX",PayMethod:1,applyVipNum:"",isShowPopup:!1,paramsWx:""}},mounted:function(){},computed:{},watch:{},methods:{getUserData:function(){var t=this;if(console.log("获取用户信息，全部"),e.getStorageSync("landRegist")){var o=JSON.parse(e.getStorageSync("landRegist"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/vip/vipInfo?userId="+o.user.id,method:"GET",header:{Authorization:"Bearer "+o.token},success:function(o){e.hideLoading(),console.log(o.data,"会员支付页"),t.UserData=o.data.content;var n=o.data.content.headImg;console.log(n,"logoImglist"),t.imgList=n.slice(-5),console.log(imgList,"imgList")},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},checkType:function(e){1===e?(console.log("支付宝"),this.ZhiFuBao=!this.ZhiFuBao,!0===this.WeiXin&&(this.WeiXin=!1)):2===e&&(console.log("微信"),this.WeiXin=!this.WeiXin,!0===this.ZhiFuBao&&(this.ZhiFuBao=!1)),this.PayMethod===e?this.PayMethod="":this.PayMethod=e,console.log(this.PayMethod,"----支付方式-----")},zhiFuBaoPay:function(e){console.log("支付宝支付"),console.log(e),location.href=this.api2+"/rest-rp/vip/createZfbPayOrder?applyVipNum="+e},clickImmedPay:function(){if(console.log("触发立即支付按钮"),console.log(this.UserData,"this.UserData"),""!==this.PayMethod)if(this.UserData.applyNum){console.log("走继续支付流程");var e=this.UserData.applyNum;1===this.PayMethod?this.zhiFuBaoPay(e):this.WXpay(this.paramsWx)}else console.log("走支付流程"),this.createOrder();else console.log("请选择支付方式！")},outTradeNo:function(){var t=this;if(console.log(this.$route.query.out_trade_no,"支付宝支付成功后传送过来的订单号"),this.$route.query.out_trade_no&&e.getStorageSync("landRegist")){var o=JSON.parse(e.getStorageSync("landRegist"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/vip/selectPayNumByState?out_trade_no="+this.$route.query.out_trade_no,method:"GET",header:{Authorization:"Bearer "+o.token},success:function(o){e.hideLoading(),console.log(o,"支付宝支付成功后传送过来的订单号"),"1"==o.data.content?(console.log("支付成功"),e.redirectTo({url:"../../memberCenter"})):"0"==o.data.content&&(console.log("未支付成功"),t.isShowPopup=!0)},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},WXreturnNum:function(){var t=this;if(console.log(this.$route.query.applyVipNum,"微信传送过来的订单号"),this.$route.query.applyVipNum&&(this.applyVipNum=this.$route.query.applyVipNum,console.log(this.applyVipNum,"微信传送过来的订单号保存早data"),e.getStorageSync("landRegist"))){var o=JSON.parse(e.getStorageSync("landRegist"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/vip/createWxPayOrderDo?applyVipNum="+this.applyVipNum,method:"GET",header:{Authorization:"Bearer "+o.token},success:function(o){e.hideLoading(),console.log(o,"微信成功后传送过来的订单号"),t.paramsWx=o.data.content},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},WXpay:function(t){var n=o("ece3");console.log(t,"拉起微信支付");var a=t;n.config({debug:!1,appId:a.appId,timestamp:a.timeStamp,nonceStr:a.nonceStr,signature:a.signJs,jsApiList:["chooseWXPay"]}),n.chooseWXPay({timestamp:a.timeStamp,nonceStr:a.nonceStr,package:a.packageValue,signType:"MD5",paySign:a.paySign,success:function(t){"chooseWXPay:ok"===t.errMsg?(console.log("支付成功"),setTimeout(function(){e.redirectTo({url:"../../memberCenter"})},500)):(console.log("未支付成功"),this.isShowPopup=!0)},cancel:function(e){}})},ContinuPayment:function(){this.isShowPopup=!1},PhoneCall:function(){e.makePhoneCall({phoneNumber:"4006182288"})}},created:function(){if(this.getUserData(),this.outTradeNo(),this.WXreturnNum(),e.getStorageSync("browserType")){var t=e.getStorageSync("browserType");console.log(t),"WX"===t?(this.browserType="WX",this.PayMethod=2,this.WeiXin=!0):"FWX"===t&&(this.browserType="FWX",this.PayMethod=1)}}};t.default=d}).call(this,o("5486")["default"])},"73ec":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},a5e1:function(e,t,o){"use strict";o.r(t);var n=o("73ec"),a=o("2353");for(var i in a)"default"!==i&&function(e){o.d(t,e,function(){return a[e]})}(i);o("48ed");var s=o("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"66f50ecb",null);t["default"]=r.exports},a770:function(e,t,o){"use strict";(function(e){o("f43d"),o("921b");n(o("66fd"));var t=n(o("a5e1"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("5486")["createPage"])}},[["a770","common/runtime","common/vendor"]]]);