(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/memberCenter/memberCenterItems/buyMember/buyMember"],{"083a":function(e,t,n){"use strict";n.r(t);var o=n("fdf7"),m=n("b28f");for(var r in m)"default"!==r&&function(e){n.d(t,e,function(){return m[e]})}(r);n("8eca");var a=n("2877"),s=Object(a["a"])(m["default"],o["a"],o["b"],!1,null,"58e41380",null);t["default"]=s.exports},"4bb5":function(e,t,n){},8110:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var m=function(){return n.e("components/mbbo/topBox/topBox").then(n.bind(null,"87f7"))},r={name:"buyMember",components:{topBox:m},data:function(){return{UserData:null,imgList:null,weixin:this.Static+"images/business/home/personCenter/WXPay.png",zhifubao:this.Static+"images/business/home/personCenter/ALIPay.png",select:this.Static+"images/business/home/personCenter/勾选-未选择.png",selected:this.Static+"images/business/home/personCenter/勾选-选中.png",lose:this.Static+"images/business/home/personCenter/订单提交失败.png",userLogo:this.Static+"my/sasf.png",ZhiFuBao:!0,WeiXin:!1,browserType:"FWX",PayMethod:1,applyVipNum:"",isShowPopup:!1,paramsWx:""}},mounted:function(){},computed:{},watch:{},methods:{getUserData:function(){var t=this;if(console.log(e("获取用户信息，全部"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:111")),o.getStorageSync("landRegist")){var n=JSON.parse(o.getStorageSync("landRegist"));o.showLoading({title:"加载中"}),o.request({url:this.api2+"/rest-rp/vip/vipInfo?userId="+n.user.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){o.hideLoading(),console.log(e(n.data,"会员支付页"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:128")),t.UserData=n.data.content;var m=n.data.content.headImg;console.log(e(m,"logoImglist"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:131")),t.imgList=m.slice(-5),console.log(e(imgList,"imgList"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:133"))},fail:function(t){o.hideLoading(),o.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:142"))}})}},checkType:function(t){1===t?(console.log(e("支付宝"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:150")),this.ZhiFuBao=!this.ZhiFuBao,!0===this.WeiXin&&(this.WeiXin=!1)):2===t&&(console.log(e("微信"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:157")),this.WeiXin=!this.WeiXin,!0===this.ZhiFuBao&&(this.ZhiFuBao=!1)),this.PayMethod===t?this.PayMethod="":this.PayMethod=t,console.log(e(this.PayMethod,"----支付方式-----"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:164"))},zhiFuBaoPay:function(t){console.log(e("支付宝支付"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:167")),console.log(e(t," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:168")),location.href=this.api2+"/rest-rp/vip/createZfbPayOrder?applyVipNum="+t},clickImmedPay:function(){if(console.log(e("触发立即支付按钮"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:204")),console.log(e(this.UserData,"this.UserData"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:205")),""!==this.PayMethod)if(this.UserData.applyNum){console.log(e("走继续支付流程"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:211"));var t=this.UserData.applyNum;1===this.PayMethod?this.zhiFuBaoPay(t):this.WXpay(this.paramsWx)}else console.log(e("走支付流程"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:222")),this.createOrder();else console.log(e("请选择支付方式！"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:207"))},outTradeNo:function(){var t=this;if(console.log(e(this.$route.query.out_trade_no,"支付宝支付成功后传送过来的订单号"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:228")),this.$route.query.out_trade_no&&o.getStorageSync("landRegist")){var n=JSON.parse(o.getStorageSync("landRegist"));o.showLoading({title:"加载中"}),o.request({url:this.api2+"/rest-rp/vip/selectPayNumByState?out_trade_no="+this.$route.query.out_trade_no,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){o.hideLoading(),console.log(e(n,"支付宝支付成功后传送过来的订单号"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:246")),"1"==n.data.content?(console.log(e("支付成功"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:248")),o.redirectTo({url:"../../memberCenter"})):"0"==n.data.content&&(console.log(e("未支付成功"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:253")),t.isShowPopup=!0)},fail:function(t){o.hideLoading(),o.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:264"))}})}},WXreturnNum:function(){var t=this;if(console.log(e(this.$route.query.applyVipNum,"微信传送过来的订单号"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:271")),this.$route.query.applyVipNum&&(this.applyVipNum=this.$route.query.applyVipNum,console.log(e(this.applyVipNum,"微信传送过来的订单号保存早data"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:274")),o.getStorageSync("landRegist"))){var n=JSON.parse(o.getStorageSync("landRegist"));o.showLoading({title:"加载中"}),o.request({url:this.api2+"/rest-rp/vip/createWxPayOrderDo?applyVipNum="+this.applyVipNum,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){o.hideLoading(),console.log(e(n,"微信成功后传送过来的订单号"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:290")),t.paramsWx=n.data.content},fail:function(t){o.hideLoading(),o.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:301"))}})}},WXpay:function(t){var m=n("a8b4");console.log(e(t,"拉起微信支付"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:310"));var r=t;m.config({debug:!1,appId:r.appId,timestamp:r.timeStamp,nonceStr:r.nonceStr,signature:r.signJs,jsApiList:["chooseWXPay"]}),m.chooseWXPay({timestamp:r.timeStamp,nonceStr:r.nonceStr,package:r.packageValue,signType:"MD5",paySign:r.paySign,success:function(t){"chooseWXPay:ok"===t.errMsg?(console.log(e("支付成功"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:328")),setTimeout(function(){o.redirectTo({url:"../../memberCenter"})},500)):(console.log(e("未支付成功"," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:335")),this.isShowPopup=!0)},cancel:function(e){}})},ContinuPayment:function(){this.isShowPopup=!1},PhoneCall:function(){o.makePhoneCall({phoneNumber:"4006182288"})}},created:function(){if(this.getUserData(),this.outTradeNo(),this.WXreturnNum(),o.getStorageSync("browserType")){var t=o.getStorageSync("browserType");console.log(e(t," at modules\\myCompany\\personAndCompany\\memberCenter\\memberCenterItems\\buyMember\\buyMember.vue:359")),"WX"===t?(this.browserType="WX",this.PayMethod=2,this.WeiXin=!0):"FWX"===t&&(this.browserType="FWX",this.PayMethod=1)}}};t.default=r}).call(this,n("0de9")["default"],n("6e42")["default"])},"8eca":function(e,t,n){"use strict";var o=n("4bb5"),m=n.n(o);m.a},b28f:function(e,t,n){"use strict";n.r(t);var o=n("8110"),m=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=m.a},cf91:function(e,t,n){"use strict";(function(e){n("ad90"),n("921b");o(n("66fd"));var t=o(n("083a"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},fdf7:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},m=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return m})}},[["cf91","common/runtime","common/vendor"]]]);