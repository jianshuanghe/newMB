(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-mySetup-mySetups-mySetup-pass"],{"0da6":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".password[data-v-4cbafb9b]{position:relative;width:100%;height:100%;background:#fff}.password-one[data-v-4cbafb9b]{width:100%;height:100%;position:absolute;top:0}.password-one-zi[data-v-4cbafb9b]{font-size:%?48?%;color:#2e2e30;padding-top:%?82?%;padding-left:%?56?%}.password-one-inp[data-v-4cbafb9b]{width:85%;height:%?100?%;border-bottom:%?2?% solid #f5f5f5;margin:%?40?% auto auto auto;line-height:%?100?%;position:relative}.password-one-inp>uni-input[data-v-4cbafb9b]{width:100%;height:100%}.password-one-inp>span[data-v-4cbafb9b]{font-size:%?30?%;color:#2e2e30;position:absolute;right:0;top:0}.password-one-add[data-v-4cbafb9b]{width:85%;height:%?90?%;margin:%?80?% auto auto auto;text-align:center;line-height:%?90?%;font-size:%?32?%;color:#fff;background:#02c2a2;opacity:.3}.password-one-adds[data-v-4cbafb9b]{width:85%;height:%?90?%;margin:%?80?% auto auto auto;text-align:center;line-height:%?90?%;font-size:%?32?%;color:#fff;background:#02c2a2}",""])},2021:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{ispass:!1,phone:"",Code:"",password:"",passwords:""}},components:{},computed:{},onLoad:function(){},methods:{addjiao:function(){if(this.password!==this.passwords)return uni.showToast({title:"前后输入密码不一致",icon:"none",duration:1e3}),!1;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));t.log(i.user.id);var n={passWord:this.passwords};uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+i.user.id,data:n,method:"POST",header:{Authorization:"Bearer "+i.token},success:function(i){uni.hideLoading(),t.log(i.data),uni.navigateBack({})},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},addti:function(){var i=this;if(""==this.phone)return uni.showToast({title:"请输入手机号",icon:"none",duration:1e3}),!1;if(!/^1[34578]\d{9}$/.test(this.phone))return uni.showToast({title:"手机号码有误,请重填",icon:"none",duration:500}),!1;if(""==this.Code)return uni.showToast({title:"手机号码有误,请重填",icon:"none",duration:500}),!1;if(uni.getStorageSync("landRegist")){var n=JSON.parse(uni.getStorageSync("landRegist"));t.log(n.user.id);var o={phone:this.phone,businessName:"1",phoneCode:this.Code,portal:"iambuyer"};uni.showLoading({title:"加载中"}),uni.request({url:this.api1+"/rest-sso/phoneSmsVali",data:o,method:"POST",success:function(n){if(uni.hideLoading(),t.log(n.data),200!=n.data.ret)return uni.showToast({title:"验证码已失效",icon:"none",duration:500}),!1;i.ispass=!0},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},getcode:function(){if(""==this.phone)return uni.showToast({title:"请输入手机号",icon:"none",duration:1e3}),!1;if(!/^1[34578]\d{9}$/.test(this.phone))return uni.showToast({title:"手机号码有误,请重填",icon:"none",duration:500}),!1;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));t.log(i.user.id);var n={phone:this.phone,businessName:"1",portal:"iambuyer"};uni.showLoading({title:"加载中"}),uni.request({url:this.api1+"/rest-sso/phoneSms",data:n,method:"POST",success:function(i){return uni.hideLoading(),t.log(i.data),400==i.data.ret?(uni.showToast({title:"验证码已达当天发送上限",icon:"none",duration:1e3}),!1):200==i.data.ret?(uni.showToast({title:"验证码已发送",icon:"none",duration:1e3}),!1):void 0},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}}}};i.default=n}).call(this,n("5a52")["default"])},"4eb8":function(t,i,n){"use strict";n.r(i);var o=n("a4709"),a=n("73cc");for(var e in a)"default"!==e&&function(t){n.d(i,t,function(){return a[t]})}(e);n("ff2e");var s=n("2877"),d=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,"4cbafb9b",null);i["default"]=d.exports},"73cc":function(t,i,n){"use strict";n.r(i);var o=n("2021"),a=n.n(o);for(var e in o)"default"!==e&&function(t){n.d(i,t,function(){return o[t]})}(e);i["default"]=a.a},8279:function(t,i,n){var o=n("0da6");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("262c8284",o,!0,{sourceMap:!1,shadowMode:!1})},a4709:function(t,i,n){"use strict";var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"password"},[t.ispass?t._e():n("v-uni-view",{staticClass:"password-one"},[n("v-uni-view",{staticClass:"password-one-zi"},[t._v("验证手机")]),n("v-uni-view",{staticClass:"password-one-inp"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入手机号",maxlength:"11"},model:{value:t.phone,callback:function(i){t.phone=i},expression:"phone"}})],1),n("v-uni-view",{staticClass:"password-one-inp",staticStyle:{margin:"10upx auto auto auto"}},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入验证码",maxlength:"4"},model:{value:t.Code,callback:function(i){t.Code=i},expression:"Code"}}),n("span",{on:{click:function(i){i=t.$handleEvent(i),t.getcode(i)}}},[t._v("获取验证码")])],1),""==this.phone||""==this.Code?n("v-uni-view",{staticClass:"password-one-add"},[t._v("提交")]):t._e(),""!==this.phone&&""!==this.Code?n("v-uni-view",{staticClass:"password-one-adds",on:{click:function(i){i=t.$handleEvent(i),t.addti()}}},[t._v("提交")]):t._e()],1),t.ispass?n("v-uni-view",{staticClass:"password-one"},[n("v-uni-view",{staticClass:"password-one-zi"},[t._v("设置密码")]),n("v-uni-view",{staticClass:"password-one-inp"},[n("v-uni-input",{attrs:{type:"password",placeholder:"请输入新登录密码"},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}})],1),n("v-uni-view",{staticClass:"password-one-inp",staticStyle:{margin:"10upx auto auto auto"}},[n("v-uni-input",{attrs:{type:"password",placeholder:"请确认新登录密码"},model:{value:t.passwords,callback:function(i){t.passwords=i},expression:"passwords"}})],1),""==this.password||""==this.passwords?n("v-uni-view",{staticClass:"password-one-add"},[t._v("提交")]):t._e(),""!==this.password&&""!==this.passwords?n("v-uni-view",{staticClass:"password-one-adds",on:{click:function(i){i=t.$handleEvent(i),t.addjiao()}}},[t._v("提交")]):t._e()],1):t._e()],1)},a=[];n.d(i,"a",function(){return o}),n.d(i,"b",function(){return a})},ff2e:function(t,i,n){"use strict";var o=n("8279"),a=n.n(o);a.a}}]);