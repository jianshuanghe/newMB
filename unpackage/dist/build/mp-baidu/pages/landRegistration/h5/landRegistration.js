(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/landRegistration/h5/landRegistration"],{"02c4":function(e,o,n){"use strict";var t=function(){var e=this,o=e.$createElement;e._self._c},a=[];n.d(o,"a",function(){return t}),n.d(o,"b",function(){return a})},"1a7b":function(e,o,n){"use strict";var t=n("8b2c"),a=n.n(t);a.a},"25cc":function(e,o,n){"use strict";n.r(o);var t=n("b337"),a=n.n(t);for(var s in t)"default"!==s&&function(e){n.d(o,e,function(){return t[e]})}(s);o["default"]=a.a},8994:function(e,o,n){"use strict";(function(e){n("f43d"),n("921b");t(n("66fd"));var o=t(n("b13b"));function t(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,n("5486")["createPage"])},"8b2c":function(e,o,n){},b13b:function(e,o,n){"use strict";n.r(o);var t=n("02c4"),a=n("25cc");for(var s in a)"default"!==s&&function(e){n.d(o,e,function(){return a[e]})}(s);n("1a7b");var i=n("2877"),r=Object(i["a"])(a["default"],t["a"],t["b"],!1,null,"69fed1de",null);o["default"]=r.exports},b337:function(e,o,n){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=a(n("1610"));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(){return n.e("components/common/watch-login/watch-input").then(n.bind(null,"f873"))},i={name:"landRegistration",components:{wInput:s},data:function(){return{browserType:"",logo:t.default,loadingShow:!1,isOvertime:!1,phoneLand:{phone:"",code:"",passWord:""},passWordLand:{phone:"",passWord:""},word:"发送验证码",setPassWorld:!1,landType:1,password:""}},created:function(){if(e.getStorageSync("landRegist")){var o=JSON.parse(e.getStorageSync("landRegist"));""!==o.user.password&&null!==o.user.password&&void 0!==o.user.password||(this.setPassWorld=!0)}else e.setStorageSync("tabItems",1);e.getStorageSync("landType")&&(this.landType=Number(e.getStorageSync("landType"))),"WX"===e.getStorageSync("browserType")?this.browserType="WX":"FWX"===e.getStorageSync("browserType")&&(this.browserType="FWX")},mounted:function(){console.log(this.api2,"全局数据")},methods:{sendMessage:function(){var o=this.phoneLand.phone;return""===o?(e.showToast({title:"手机号为不能为空",icon:"none",duration:1e3}),!1):/^1[345789]\d{9}$/.test(o)?!this.isOvertime&&void this.getCode():(e.showToast({title:"手机号码有误,请重填",icon:"none",duration:1e3}),!1)},sendState:function(){var e=this,o=60,n=setInterval(function(){e.isOvertime=!0,o--,e.word="重新获取("+o+"s)",o<0&&(e.isOvertime=!1,clearInterval(n),e.word="获取验证码")},1e3)},getCode:function(){var o=this;e.showLoading({title:"加载中"});var n={phone:this.phoneLand.phone,businessName:"1",portal:"ruhexiu"};e.request({url:this.api1+"/rest-sso/phoneSms",data:n,method:"POST",header:{"custom-header":"hello"},success:function(n){console.log(n.data),"200"===n.data.ret?(e.hideLoading(),e.showToast({title:"短信发送成功",icon:"none",duration:1e3}),o.sendState()):(e.hideLoading(),e.showToast({title:n.data.msg,icon:"none",duration:1e3}))},fail:function(o){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o,"网络繁忙，请稍后")}})},clickPassWordLand:function(){console.log("触发账号密码登录按钮"),this.landType=2,""!==this.phoneLand.phone&&(this.passWordLand.phone=this.phoneLand.phone),e.setStorageSync("landType",this.landType)},clickPhoneLand:function(){console.log("触发手机号登录按钮"),this.landType=1,""!==this.passWordLand.phone&&(this.phoneLand.phone=this.passWordLand.phone),e.setStorageSync("landType",this.landType)},clickForgetPassWord:function(){console.log("触发忘记密码按钮"),e.navigateTo({url:"/pages/landRegistration/h5/forgetPassWord"})},clickLand:function(){console.log("触发登录按钮"),1===this.landType?(console.log("手机号登录"),this.phoneLandFn()):2===this.landType&&(console.log("密码登录"),this.passWordLandFn())},phoneLandFn:function(){var o=this,n=this.phoneLand.code,t=this.phoneLand.phone;if(""===t)return e.showToast({title:"手机号为不能为空",icon:"none",duration:1e3}),!1;if(!/^1[345789]\d{9}$/.test(t))return e.showToast({title:"手机号码有误,请重填",icon:"none",duration:1e3}),!1;if(""===n)return e.showToast({title:"短信验证码不能为空",icon:"none",duration:1e3}),!1;if(!/^\d{4}$/.test(n))return e.showToast({title:"验证码格式有误,请重填",icon:"none",duration:1e3}),!1;e.showLoading({title:"加载中"});var a={phone:this.phoneLand.phone,loginType:"0",phoneCode:this.phoneLand.code};e.request({url:this.api2+"/rest-rp/mbUser/login",data:a,method:"POST",header:{},success:function(n){if(console.log(n.data),"200"===String(n.data.ret)){e.hideLoading();var t={randomKey:"",token:n.data.content.sign,user:{id:n.data.content.user.id}};e.setStorageSync("landRegist",JSON.stringify(t)),console.log("登陆成功！"),o.password=n.data.content.user.password,o.getUserData()}else e.hideLoading(),e.showToast({title:n.data.msg,icon:"none",duration:1e3})},fail:function(o){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o,"网络繁忙，请稍后")}})},passWordLandFn:function(){var o=this,n=this.passWordLand.phone,t=this.passWordLand.passWord;if(console.log(this.passWordLand),""===n)return e.showToast({title:"手机号为不能为空",icon:"none",duration:1e3}),!1;if(!/^1[345789]\d{9}$/.test(n))return e.showToast({title:"手机号码有误,请重填",icon:"none",duration:1e3}),!1;if(""===t)return e.showToast({title:"密码为不能为空",icon:"none",duration:1e3}),!1;if(t.length<6)return e.showToast({title:"密码不能少于6个字符",icon:"none",duration:1e3}),!1;e.showLoading({title:"加载中"});var a={phone:this.passWordLand.phone,loginType:"1",passWord:this.passWordLand.passWord};e.request({url:this.api2+"/rest-rp/mbUser/login",data:a,method:"POST",header:{"custom-header":"hello"},success:function(n){if(console.log(n.data),"200"===String(n.data.ret)){e.hideLoading();var t={randomKey:"",token:n.data.content.sign,user:{id:n.data.content.user.id}};e.setStorageSync("landRegist",JSON.stringify(t)),o.password=n.data.content.user.password,o.getUserData()}else e.hideLoading(),e.showToast({title:n.data.msg,icon:"none",duration:1e3})},fail:function(o){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o,"网络繁忙，请稍后")}})},mergeUserData:function(){console.log("合并用户信息");var o=JSON.parse(e.getStorageSync("landRegist"));console.log(e.getStorageSync("UUID"),"uuid");var n=e.getStorageSync("UUID");console.log(n,"存在的游客id"),console.log(o.user.id),e.request({url:this.api2+"/rest-rp/follow/merg?uuid="+n+"&userId="+o.user.id,data:{},header:{Authorization:"Bearer "+o.token},success:function(o){console.log(o.data),"200"===String(o.data.ret)?console.log("游客模式和登录模式合并成功！"):(e.hideLoading(),e.showToast({title:o.data.msg,icon:"none",duration:500}))},fail:function(o){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o,"网络繁忙，请稍后")}})},getUserData:function(){var o=this;console.log("获取用户信息，全部");var n=JSON.parse(e.getStorageSync("landRegist"));console.log(n.user.id),e.request({url:this.api2+"/rest-rp/user/"+n.user.id,data:{},header:{Authorization:"Bearer "+n.token},success:function(n){if(console.log(n.data),o.mergeUserData(),"200"===String(n.data.ret)){var t=n.data.content;e.setStorageSync("UserData",JSON.stringify(t)),""===o.password||null===o.password||void 0===o.password?o.setPassWorld=!0:(e.showToast({title:"登陆成功",icon:"none",duration:500}),e.navigateBack({delta:1}),setTimeout(function(){e.navigateTo({url:"/pages/project/MBBO/home"})},500))}else e.hideLoading(),e.showToast({title:n.data.msg,icon:"none",duration:500})},fail:function(o){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o,"网络繁忙，请稍后")}})},clickSetPassWorld:function(){var o=this;console.log("触发保存密码按钮");var n=this.phoneLand.passWord;if(""===n)return e.showToast({title:"密码不能为空",icon:"none",duration:500}),!1;if(n.length<6)return e.showToast({title:"密码不能少于6个字符",icon:"none",duration:500}),!1;var t={passWord:this.phoneLand.passWord};if(e.getStorageSync("landRegist")){var a=JSON.parse(e.getStorageSync("landRegist"));console.log(a.user.id),e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/user/"+a.user.id,data:t,method:"POST",header:{Authorization:"Bearer "+a.token},success:function(n){if(console.log(n.data),"200"===String(n.data.ret)){if(e.hideLoading(),e.showToast({title:"登陆成功！",icon:"none",duration:500}),e.getStorageSync("landRegist")){var t=JSON.parse(e.getStorageSync("landRegist"));t.user.password=o.phoneLand.passWord,e.setStorageSync("landRegist",JSON.stringify(t))}setTimeout(function(){e.navigateTo({url:"/pages/project/MBBO/home"})},500)}else e.hideLoading(),e.showToast({title:n.data.msg,icon:"none",duration:500})},fail:function(o){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o,"网络繁忙，请稍后")}})}},clickSkipLand:function(){console.log("触发暂不设置"),e.navigateTo({url:"/pages/project/MBBO/home"})},clickWxLand:function(){console.log("触发微信登录");var o=e.getStorageSync("UUID");window.location.href=this.api2+"/rest-rp/mbUser/goWxLogin?uuid="+o}}};o.default=i}).call(this,n("5486")["default"])}},[["8994","common/runtime","common/vendor"]]]);