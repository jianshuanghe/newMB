(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/mySetup/mySetups/mySetup-phone"],{"24af":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){return n.e("components/common/watch-login/watch-input").then(n.bind(null,"2a48"))},r=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/quickBtn/quickBtn")]).then(n.bind(null,"2de2"))},c=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/navigation/navigation")]).then(n.bind(null,"5a67"))},d={name:"phoneBind",data:function(){return{UserData:{},width:"100%",phoneLand:{phone:"",code:"",passWord:""},isShow:!0,loadingShow:!1,isOvertime:!1,word:"发送验证码",setPassWorld:!1}},components:{wInput:u,quickBtn:r,navigation:c},computed:i({i18n:function(){return this.$t("Mypersonal")}},(0,a.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),created:function(){e.getStorageSync("UserData")&&(this.UserData=JSON.parse(e.getStorageSync("UserData"))),this.getmy()},mounted:function(){},methods:i({},(0,a.mapMutations)({setheader:"setheader",setMation:"setMation"}),{clickStep:function(e){console.log(o("触发步进器"," at modules\\myCompany\\mySetup\\mySetups\\mySetup-phone.vue:113")),1===e&&!0!==this.isShow&&(this.isShow=!this.isShow),2===e&&this.clickNextStep()},sendMessage:function(){if(this.isOvertime)return!1;this.getCode()},sendState:function(){var e=this,t=60,n=setInterval(function(){e.isOvertime=!0,t--,e.word="重新获取("+t+"s)",t<0&&(e.isOvertime=!1,clearInterval(n),e.word="获取验证码")},1e3)},getCode:function(){var t=this;e.showLoading({title:"加载中"});var n={phone:this.phoneLand.phone,businessName:"1",portal:"iambuyer"};e.request({url:this.api1+"/rest-sso/phoneSms",data:n,method:"POST",success:function(n){console.log(o(n.data," at modules\\myCompany\\mySetup\\mySetups\\mySetup-phone.vue:160")),"200"===n.data.ret?(e.hideLoading(),e.showToast({title:"短信发送成功",icon:"none",duration:1e3}),t.sendState()):(e.hideLoading(),e.showToast({title:n.data.msg,icon:"none",duration:1e3}))},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o(t,"网络繁忙，请稍后"," at modules\\myCompany\\mySetup\\mySetups\\mySetup-phone.vue:185"))}})},clickNextStep:function(){console.log(o("触发下一步"," at modules\\myCompany\\mySetup\\mySetups\\mySetup-phone.vue:190"));var t=this.phoneLand.phone;return""===t?(e.showToast({title:"手机号为不能为空",icon:"none",duration:1e3}),!1):/^1[34578]\d{9}$/.test(t)?t===this.GET_MY.headers.userPhone?(e.showToast({title:"不能和当前已经绑定的手机号相同",icon:"none",duration:1e3}),!1):void(this.isShow=!this.isShow):(e.showToast({title:"手机号码有误,请重填",icon:"none",duration:1e3}),!1)},clickUpData:function(){var t=this;console.log(o("触发完成绑定"," at modules\\myCompany\\mySetup\\mySetups\\mySetup-phone.vue:222"));var n={phone:this.phoneLand.phone,businessName:"1",phoneCode:this.phoneLand.code,portal:"iambuyer"};if(e.getStorageSync("landRegist")){var a=JSON.parse(e.getStorageSync("landRegist"));console.log(o(a.user.id," at modules\\myCompany\\mySetup\\mySetups\\mySetup-phone.vue:232")),e.showLoading({title:"加载中"}),e.request({url:this.api1+"/rest-sso/phoneSmsVali",data:n,method:"POST",success:function(n){"200"===n.data.ret?(e.hideLoading(),e.showToast({title:"验证码校验成功！",icon:"none",duration:1e3}),t.addjiao()):(e.hideLoading(),e.showToast({title:n.data.msg,icon:"none",duration:1e3}))},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o(t,"网络繁忙，请稍后"," at modules\\myCompany\\mySetup\\mySetups\\mySetup-phone.vue:266"))}})}},addjiao:function(){var t=this;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));console.log(o(n.user.id," at modules\\myCompany\\mySetup\\mySetups\\mySetup-phone.vue:274"));var a={userPhone:this.phoneLand.phone};e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/user/"+n.user.id,data:a,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(n){e.hideLoading(),console.log(o(n.data," at modules\\myCompany\\mySetup\\mySetups\\mySetup-phone.vue:291")),400==n.data.ret?(e.showToast({title:n.data.msg,icon:"none",duration:1e3}),t.isShow=!0):(e.showToast({title:"修改成功",icon:"none",duration:1e3}),t.getmy(),e.navigateBack({}))},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o(t,"网络繁忙，请稍后"," at modules\\myCompany\\mySetup\\mySetups\\mySetup-phone.vue:318"))}})}},getmy:function(){var t=this;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));console.log(o(n.user.id," at modules\\myCompany\\mySetup\\mySetups\\mySetup-phone.vue:326"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/user/"+n.user.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){e.hideLoading(),t.list=n.data.content,t.$store.commit("setMy",t.list)},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o(t,"网络繁忙，请稍后"," at modules\\myCompany\\mySetup\\mySetups\\mySetup-phone.vue:354"))}})}}})};t.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},"2f17":function(e,t,n){},"664c":function(e,t,n){"use strict";(function(e){n("ad90"),n("921b");o(n("66fd"));var t=o(n("7f93"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"699d":function(e,t,n){"use strict";n.r(t);var o=n("24af"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},"7f93":function(e,t,n){"use strict";n.r(t);var o=n("fa8c"),a=n("699d");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("eec8");var s=n("2877"),u=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},eec8:function(e,t,n){"use strict";var o=n("2f17"),a=n.n(o);a.a},fa8c:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})}},[["664c","common/runtime","common/vendor"]]]);