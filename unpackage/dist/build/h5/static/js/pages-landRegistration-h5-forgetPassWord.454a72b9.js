(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-landRegistration-h5-forgetPassWord"],{2995:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"landRegistration-content"},[n("v-uni-view",{staticClass:"landRegistration"},[n("v-uni-view",{staticClass:"phone-passWord-LR"},[n("v-uni-view",{staticClass:"phonw-LR"},[n("v-uni-view",{staticClass:"top-PLR1"},[n("p",{},[t._v("找回密码")]),n("v-uni-view",{staticClass:"line"})],1),n("v-uni-view",{staticClass:"LR-cont"},[n("v-uni-view",{staticClass:"inputPhone-PLR"},[n("wInput",{attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号码",inputWidth:"85vw"},model:{value:t.phone,callback:function(i){t.phone=i},expression:"phone"}}),n("v-uni-view",{staticClass:"line"})],1),n("v-uni-view",{staticClass:"inputYan-PLR"},[n("v-uni-view",{staticClass:"yan-left-PLR left"},[n("wInput",{attrs:{type:"number",maxlength:"4",placeholder:"请输入验证码",inputWidth:"60vw"},model:{value:t.code,callback:function(i){t.code=i},expression:"code"}})],1),n("v-uni-view",{staticClass:"ma-right-PLR left"},[n("v-uni-view",{class:{yazm:t.isOvertime,"re-yazm":!t.isOvertime},attrs:{type:"primary","action-type":"button",mini:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sendMessage.apply(void 0,arguments)}}},[t._v(t._s(t.word))])],1),n("v-uni-view",{staticClass:"clear"}),n("v-uni-view",{staticClass:"line"})],1),n("v-uni-view",{staticClass:"inputPhone-PLR"},[n("wInput",{attrs:{type:"password",placeholder:"请输入新密码",inputWidth:"85vw"},model:{value:t.passWord,callback:function(i){t.passWord=i},expression:"passWord"}}),n("v-uni-view",{staticClass:"line"})],1),n("v-uni-view",{staticClass:"inputPhone-PLR"},[n("wInput",{attrs:{type:"password",placeholder:"确认新密码",inputWidth:"85vw"},model:{value:t.passWord1,callback:function(i){t.passWord1=i},expression:"passWord1"}}),n("v-uni-view",{staticClass:"line"})],1)],1)],1),n("v-uni-view",{staticClass:"landBtn"},[n("v-uni-view",{},[n("v-uni-view",{staticClass:"land-btn-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickSubmit.apply(void 0,arguments)}}},[n("p",{},[t._v("提交")])])],1)],1)],1)],1)],1)},a=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return a})},"2a19":function(t,i,n){"use strict";var e=n("bf29"),a=n.n(e);a.a},"603b":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".landRegistration-content[data-v-69b75314]{position:relative;width:100vw;height:100vh;background:#fff}.landRegistration[data-v-69b75314]{position:relative;padding:%?18?% %?40?%;background:#fff}.phone-passWord-LR[data-v-69b75314]{position:relative;width:100%}.phonw-LR[data-v-69b75314]{position:relative;width:100%}.top-PLR1[data-v-69b75314]{position:relative;width:100%}.top-PLR1>p[data-v-69b75314]{ont-family:PingFangSC-Regular;font-size:3.5vw;color:#2e2e30;letter-spacing:0;text-align:center;line-height:12vw}.LR-cont[data-v-69b75314]{position:relative;width:100%}.inputPhone-PLR[data-v-69b75314]{position:relative;width:100%;margin-top:5vw}.inputYan-PLR[data-v-69b75314]{position:relative;width:100%}.yan-left-PLR[data-v-69b75314]{position:relative;width:60%}.ma-right-PLR[data-v-69b75314]{position:relative;width:40%}.yazm[data-v-69b75314]{font-family:PingFangSC-Light;font-size:4vw;color:#ccc;line-height:12vw;text-align:right}.re-yazm[data-v-69b75314]{font-family:PingFangSC-Light;font-size:4vw;color:#02c2a2;line-height:11vw;text-align:right}.top-PWLR>img[data-v-69b75314]{position:relative;width:100%}.landBtn[data-v-69b75314]{position:relative;width:100%;margin-top:8vw}.land-btn-box[data-v-69b75314]{position:relative;width:100%;height:12vw;margin-bottom:6vw}.land-btn-box>p[data-v-69b75314]{font-family:PingFangSC-Regular;font-size:4.266vw;color:#fff;letter-spacing:0;text-align:center;line-height:12vw;background:#02c2a2}",""])},8257:function(t,i,n){"use strict";n.r(i);var e=n("8818"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);i["default"]=a.a},8818:function(t,i,n){"use strict";(function(t){var e=n("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(n("f499")),o=e(n("2a48")),s={name:"forgetPassWord",components:{wInput:o.default},data:function(){return{loadingShow:!1,word:"发送验证码",isOvertime:!1,phone:"",code:"",passWord:"",passWord1:""}},created:function(){uni.removeStorageSync("tabItems"),uni.removeStorageSync("UserData"),uni.removeStorageSync("landRegist"),uni.removeStorageSync("userId")},mounted:function(){},methods:{sendMessage:function(){var t=this.phone;return""===t?(uni.showToast({title:"手机号为不能为空",icon:"none",duration:1e3}),!1):/^1[34578]\d{9}$/.test(t)?!this.isOvertime&&void this.getCode():(uni.showToast({title:"手机号码有误,请重填",icon:"none",duration:1e3}),!1)},sendState:function(){var t=this,i=60,n=setInterval(function(){t.isOvertime=!0,i--,t.word="重新获取("+i+"s)",i<0&&(t.isOvertime=!1,clearInterval(n),t.word="获取验证码")},1e3)},getCode:function(){var i=this;uni.showLoading({title:"加载中"});var n={phone:this.phone,businessName:"1",portal:"ruhexiu"};uni.request({url:this.api1+"/rest-sso/phoneSms",data:n,method:"POST",header:{"custom-header":"hello"},success:function(n){t.log(n.data),"200"===n.data.ret?(uni.hideLoading(),uni.showToast({title:"短信发送成功",icon:"none",duration:1e3}),i.sendState()):(uni.hideLoading(),uni.showToast({title:n.data.msg,icon:"none",duration:1e3}))},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})},clickSubmit:function(){var i=this;t.log("触发提交按钮");var n=this.phone,e=this.code,o=this.passWord,s=this.passWord1;if(""===n)return uni.showToast({title:"手机号为不能为空",icon:"none",duration:1e3}),!1;if(!/^1[34578]\d{9}$/.test(n))return uni.showToast({title:"手机号码有误,请重填",icon:"none",duration:1e3}),!1;if(""===e)return uni.showToast({title:"短信验证码不能为空",icon:"none",duration:1e3}),!1;if(!/^\d{4}$/.test(e))return uni.showToast({title:"验证码格式有误,请重填",icon:"none",duration:1e3}),!1;if(""===o)return uni.showToast({title:"密码不能为空",icon:"none",duration:1e3}),!1;if(o.length<6)return uni.showToast({title:"密码不能少于6个字符",icon:"none",duration:1e3}),!1;if(""===s)return uni.showToast({title:"确认密码不能为空",icon:"none",duration:1e3}),!1;if(s!==o)return uni.showToast({title:"两次输入密码不一致！",icon:"none",duration:1e3}),!1;uni.showLoading({title:"加载中"});var r={phone:this.phone,loginType:"0",phoneCode:this.code};uni.request({url:this.api2+"/rest-rp/mbUser/login",data:r,method:"POST",header:{},success:function(n){if(t.log(n.data),"200"===String(n.data.ret)){uni.hideLoading();var e={randomKey:n.data.content.randomKey,token:n.data.content.token,user:{id:n.data.content.user.id}};t.log(e),uni.setStorageSync("landRegist",(0,a.default)(e));var o={passWord:i.passWord};if(t.log(o,"-------------------params------------------"),uni.getStorageSync("landRegist")){var s=JSON.parse(uni.getStorageSync("landRegist"));t.log(s.user.id),uni.showLoading({title:"加载中"}),uni.request({url:i.api2+"/rest-rp/user/"+s.user.id,data:o,method:"POST",header:{Authorization:"Bearer "+s.token},success:function(i){t.log(i.data),"200"===String(i.data.ret)?(uni.hideLoading(),uni.showToast({title:"密码重置成功！",icon:"none",duration:1e3}),uni.removeStorageSync("tabItems"),uni.removeStorageSync("UserData"),uni.removeStorageSync("landRegist"),uni.removeStorageSync("userId"),t.log("清空用户信息"),setTimeout(function(){uni.navigateTo({url:"/pages/landRegistration/h5/landRegistration"})},1e3)):(uni.hideLoading(),uni.showToast({title:i.data.msg,icon:"none",duration:1e3}))},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}else uni.hideLoading(),uni.showToast({title:n.data.msg,icon:"none",duration:1e3})}}})}}};i.default=s}).call(this,n("5a52")["default"])},b207:function(t,i,n){"use strict";n.r(i);var e=n("2995"),a=n("8257");for(var o in a)"default"!==o&&function(t){n.d(i,t,function(){return a[t]})}(o);n("2a19");var s=n("2877"),r=Object(s["a"])(a["default"],e["a"],e["b"],!1,null,"69b75314",null);i["default"]=r.exports},bf29:function(t,i,n){var e=n("603b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("502257eb",e,!0,{sourceMap:!1,shadowMode:!1})}}]);