(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/mySetup/mySetups/mySetup-pass"],{"22c6":function(t,o,e){},"26b0":function(t,o,e){"use strict";e.r(o);var n=e("f533"),a=e("caea");for(var i in a)"default"!==i&&function(t){e.d(o,t,function(){return a[t]})}(i);e("ba47");var s=e("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);o["default"]=r.exports},2968:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={data:function(){return{ispass:!1,phone:"",Code:"",password:"",passwords:""}},components:{},computed:{},onLoad:function(){},methods:{addjiao:function(){if(this.password!==this.passwords)return t.showToast({title:"前后输入密码不一致",icon:"none",duration:1e3}),!1;if(t.getStorageSync("landRegist")){var o=JSON.parse(t.getStorageSync("landRegist"));console.log(o.user.id);var e={passWord:this.passwords};t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/user/"+o.user.id,data:e,method:"POST",header:{Authorization:"Bearer "+o.token},success:function(o){t.hideLoading(),console.log(o.data),t.navigateBack({})},fail:function(o){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o,"网络繁忙，请稍后")}})}},addti:function(){var o=this;if(""==this.phone)return t.showToast({title:"请输入手机号",icon:"none",duration:1e3}),!1;if(!/^1[34578]\d{9}$/.test(this.phone))return t.showToast({title:"手机号码有误,请重填",icon:"none",duration:500}),!1;if(""==this.Code)return t.showToast({title:"手机号码有误,请重填",icon:"none",duration:500}),!1;if(t.getStorageSync("landRegist")){var e=JSON.parse(t.getStorageSync("landRegist"));console.log(e.user.id);var n={phone:this.phone,businessName:"1",phoneCode:this.Code,portal:"iambuyer"};t.showLoading({title:"加载中"}),t.request({url:this.api1+"/rest-sso/phoneSmsVali",data:n,method:"POST",success:function(e){if(t.hideLoading(),console.log(e.data),200!=e.data.ret)return t.showToast({title:"验证码已失效",icon:"none",duration:500}),!1;o.ispass=!0},fail:function(o){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o,"网络繁忙，请稍后")}})}},getcode:function(){if(""==this.phone)return t.showToast({title:"请输入手机号",icon:"none",duration:1e3}),!1;if(!/^1[34578]\d{9}$/.test(this.phone))return t.showToast({title:"手机号码有误,请重填",icon:"none",duration:500}),!1;if(t.getStorageSync("landRegist")){var o=JSON.parse(t.getStorageSync("landRegist"));console.log(o.user.id);var e={phone:this.phone,businessName:"1",portal:"iambuyer"};t.showLoading({title:"加载中"}),t.request({url:this.api1+"/rest-sso/phoneSms",data:e,method:"POST",success:function(o){return t.hideLoading(),console.log(o.data),400==o.data.ret?(t.showToast({title:o.data.msg,icon:"none",duration:1e3}),!1):200==o.data.ret?(t.showToast({title:"验证码已发送",icon:"none",duration:1e3}),!1):void 0},fail:function(o){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o,"网络繁忙，请稍后")}})}}}};o.default=e}).call(this,e("543d")["default"])},ba47:function(t,o,e){"use strict";var n=e("22c6"),a=e.n(n);a.a},caea:function(t,o,e){"use strict";e.r(o);var n=e("2968"),a=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(o,t,function(){return n[t]})}(i);o["default"]=a.a},f533:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement;t._self._c},a=[];e.d(o,"a",function(){return n}),e.d(o,"b",function(){return a})}},[["4f52","common/runtime","common/vendor"]]]);