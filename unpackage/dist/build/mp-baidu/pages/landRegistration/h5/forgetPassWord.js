(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/landRegistration/h5/forgetPassWord"],{1102:function(e,t,o){"use strict";o.r(t);var n=o("1597"),a=o("20f6");for(var i in a)"default"!==i&&function(e){o.d(t,e,function(){return a[e]})}(i);o("580f");var r=o("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"2b7584ba",null);t["default"]=s.exports},1597:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},"20f6":function(e,t,o){"use strict";o.r(t);var n=o("969c"),a=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},2755:function(e,t,o){"use strict";(function(e){o("f43d"),o("921b");n(o("66fd"));var t=n(o("1102"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("5486")["createPage"])},"580f":function(e,t,o){"use strict";var n=o("e9c4"),a=o.n(n);a.a},"969c":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return o.e("components/common/watch-login/watch-input").then(o.bind(null,"f873"))},a={name:"forgetPassWord",components:{wInput:n},data:function(){return{loadingShow:!1,word:"发送验证码",isOvertime:!1,phone:"",code:"",passWord:"",passWord1:""}},created:function(){e.removeStorageSync("tabItems"),e.removeStorageSync("UserData"),e.removeStorageSync("landRegist"),e.removeStorageSync("userId")},mounted:function(){},methods:{sendMessage:function(){var t=this.phone;return""===t?(e.showToast({title:"手机号为不能为空",icon:"none",duration:1e3}),!1):/^1[34578]\d{9}$/.test(t)?!this.isOvertime&&void this.getCode():(e.showToast({title:"手机号码有误,请重填",icon:"none",duration:1e3}),!1)},sendState:function(){var e=this,t=60,o=setInterval(function(){e.isOvertime=!0,t--,e.word="重新获取("+t+"s)",t<0&&(e.isOvertime=!1,clearInterval(o),e.word="获取验证码")},1e3)},getCode:function(){var t=this;e.showLoading({title:"加载中"});var o={phone:this.phone,businessName:"1",portal:"ruhexiu"};e.request({url:this.api1+"/rest-sso/phoneSms",data:o,method:"POST",header:{"custom-header":"hello"},success:function(o){console.log(o.data),"200"===o.data.ret?(e.hideLoading(),e.showToast({title:"短信发送成功",icon:"none",duration:1e3}),t.sendState()):(e.hideLoading(),e.showToast({title:o.data.msg,icon:"none",duration:1e3}))},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})},clickSubmit:function(){var t=this;console.log("触发提交按钮");var o=this.phone,n=this.code,a=this.passWord,i=this.passWord1;if(""===o)return e.showToast({title:"手机号为不能为空",icon:"none",duration:1e3}),!1;if(!/^1[34578]\d{9}$/.test(o))return e.showToast({title:"手机号码有误,请重填",icon:"none",duration:1e3}),!1;if(""===n)return e.showToast({title:"短信验证码不能为空",icon:"none",duration:1e3}),!1;if(!/^\d{4}$/.test(n))return e.showToast({title:"验证码格式有误,请重填",icon:"none",duration:1e3}),!1;if(""===a)return e.showToast({title:"密码不能为空",icon:"none",duration:1e3}),!1;if(a.length<6)return e.showToast({title:"密码不能少于6个字符",icon:"none",duration:1e3}),!1;if(""===i)return e.showToast({title:"确认密码不能为空",icon:"none",duration:1e3}),!1;if(i!==a)return e.showToast({title:"两次输入密码不一致！",icon:"none",duration:1e3}),!1;e.showLoading({title:"加载中"});var r={phone:this.phone,loginType:"0",phoneCode:this.code};e.request({url:this.api2+"/rest-rp/mbUser/login",data:r,method:"POST",header:{},success:function(o){if(console.log(o.data),"200"===String(o.data.ret)){e.hideLoading();var n={randomKey:o.data.content.randomKey,token:o.data.content.token,user:{id:o.data.content.user.id}};console.log(n),e.setStorageSync("landRegist",JSON.stringify(n));var a={passWord:t.passWord};if(console.log(a,"-------------------params------------------"),e.getStorageSync("landRegist")){var i=JSON.parse(e.getStorageSync("landRegist"));console.log(i.user.id),e.showLoading({title:"加载中"}),e.request({url:t.api2+"/rest-rp/user/"+i.user.id,data:a,method:"POST",header:{Authorization:"Bearer "+i.token},success:function(t){console.log(t.data),"200"===String(t.data.ret)?(e.hideLoading(),e.showToast({title:"密码重置成功！",icon:"none",duration:1e3}),e.removeStorageSync("tabItems"),e.removeStorageSync("UserData"),e.removeStorageSync("landRegist"),e.removeStorageSync("userId"),console.log("清空用户信息"),setTimeout(function(){e.navigateTo({url:"/pages/landRegistration/h5/landRegistration"})},1e3)):(e.hideLoading(),e.showToast({title:t.data.msg,icon:"none",duration:1e3}))},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}else e.hideLoading(),e.showToast({title:o.data.msg,icon:"none",duration:1e3})}}})}}};t.default=a}).call(this,o("5486")["default"])},e9c4:function(e,t,o){}},[["2755","common/runtime","common/vendor"]]]);