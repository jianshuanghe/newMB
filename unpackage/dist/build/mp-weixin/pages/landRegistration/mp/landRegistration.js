(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/landRegistration/mp/landRegistration"],{"29c2":function(e,n,o){"use strict";var t=o("bc5f"),a=o.n(t);a.a},"87df":function(e,n,o){"use strict";o.r(n);var t=o("8c9c"),a=o("940b");for(var i in a)"default"!==i&&function(e){o.d(n,e,function(){return a[e]})}(i);o("29c2");var s=o("2877"),c=Object(s["a"])(a["default"],t["a"],t["b"],!1,null,"18b3a035",null);n["default"]=c.exports},"8c9c":function(e,n,o){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},a=[];o.d(n,"a",function(){return t}),o.d(n,"b",function(){return a})},"8cec":function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(o("3deb")),a=o("2f62");function i(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(n){c(e,n,o[n])})}return e}function c(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var r={name:"",components:{},data:function(){return{logo:t.default,phoneIsGet:!0}},computed:s({},(0,a.mapGetters)(["LANDREGIST"])),watch:{LANDREGIST:{handler:function(e,n){console.log(e,n,"登录状态")},deep:!0}},created:function(){},mounted:function(){console.log(this.api2,"全局数据"),this.getSessionKey()},methods:s({},(0,a.mapMutations)({setLandRegist:"setLandRegist"}),{getSessionKey:function(){var n=this;e.login({provider:"weixin",scopes:"auth_base",success:function(o){console.log(o,"微信返回的code mounted"),e.request({url:n.api2+"/wechat/portal/wxMiniSessionKey?code="+o.code,data:{},header:{},success:function(n){if(console.log(n.data),"200"===String(n.data.code)){var o=n.data.content;e.setStorageSync("sessionKey",o)}else e.hideLoading(),e.showToast({title:n.data.msg,icon:"none",duration:500})},fail:function(n){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(n,"网络繁忙，请稍后")}})}})},bindGetUserInfo:function(e){console.log(e)},getPhoneNumber:function(e){if(console.log(e),"getPhoneNumber:fail user deny"===e.detail.errMsg)console.log("用户拒绝提供手机号");else if("getUserInfo:fail auth deny"===e.detail.errMsg)console.log("用户拒绝授权");else{console.log("用户同意提供手机号且同意授权");var n=JSON.stringify(e.detail.encryptedData),o=JSON.stringify(e.detail.iv);console.log(n,o,"带你花------------"),this.clickMpLand(n,o)}},clickMpLand:function(n,o){e.showLoading({title:"登陆中···"});var t=this;console.log("触发小程序登录"),wx.checkSession({success:function(){t.mpWxLand(n,o)},fail:function(){console.log("session_key已经过期！"),t.getSessionKey()}})},mpWxLand:function(n,o){console.log("微信小程序登录"),e.showLoading({title:"登录中···"});var t=this;e.getUserInfo({provider:"weixin",success:function(a){console.log(a,"拉取到的用户信息");var i=e.getStorageSync("sessionKey"),s={sessionKey:i,nickname:a.userInfo.nickName,compLogo:a.userInfo.avatarUrl,signature:a.signature,rawData:a.rawData,phoneEncryptedData:JSON.parse(n),phoneIv:JSON.parse(o),userEncryptedData:a.encryptedData,userIv:a.iv};e.request({url:t.api2+"/wechat/portal/wxMiniLogin",data:s,method:"POST",header:{},success:function(n){if(console.log(n.data),"200"===String(n.data.code)){var o={randomKey:n.data.content.randomKey,token:n.data.content.token,user:{id:n.data.content.userId}};e.setStorageSync("landRegist",JSON.stringify(o)),t.getUserData()}else"400"===String(n.data.code)?(e.hideLoading(),t.phoneIsGet=!1,e.showToast({title:"请同意获取手机号注册，再登录！",icon:"none",duration:500})):"500"===String(n.data.code)?(e.hideLoading(),console.log(n.data,"---------------------response.data---------------------"),console.log("------------------------5000-----------------------"),e.showToast({title:"网络开小差了，请再次点击登录！",icon:"none",duration:500})):(e.hideLoading(),e.showToast({title:n.data.msg,icon:"none",duration:500}))},fail:function(n){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(n,"网络繁忙，请稍后")}})}})},mpTtLand:function(){console.log("头条小程序登录")},mpBdLand:function(){console.log("百度小程序登录")},mpApLand:function(){console.log("支付宝小程序登录")},getUserData:function(){var n=this;console.log("获取用户信息，全部");var o=JSON.parse(e.getStorageSync("landRegist"));console.log(o.user.id),e.request({url:this.api2+"/user/"+o.user.id,data:{},header:{Authorization:"Bearer "+o.token},success:function(o){if(console.log(o.data),"200"===String(o.data.code)){var t=o.data.content;e.setStorageSync("UserData",JSON.stringify(t)),console.log("-----------------------------登录成功-----------------------"),n.$store.commit("setLandRegist",1),e.showToast({title:"登录成功",icon:"none",duration:500}),e.navigateBack({delta:1})}else e.hideLoading(),e.showToast({title:o.data.msg,icon:"none",duration:500})},fail:function(n){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(n,"网络繁忙，请稍后")}})}})};n.default=r}).call(this,o("543d")["default"])},"940b":function(e,n,o){"use strict";o.r(n);var t=o("8cec"),a=o.n(t);for(var i in t)"default"!==i&&function(e){o.d(n,e,function(){return t[e]})}(i);n["default"]=a.a},bc5f:function(e,n,o){}},[["0b4c","common/runtime","common/vendor"]]]);