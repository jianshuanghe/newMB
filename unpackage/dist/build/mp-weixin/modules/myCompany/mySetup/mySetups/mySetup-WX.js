(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/mySetup/mySetups/mySetup-WX"],{"1e34":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"49af":function(t,e,n){"use strict";var o=n("8e81"),i=n.n(o);i.a},"7d9f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/quickBtn/quickBtn")]).then(n.bind(null,"4455"))},s=function(){return n.e("components/mbbo/navigation/navigation").then(n.bind(null,"ddba"))},u=function(){return n.e("components/common/watch-login/watch-input").then(n.bind(null,"5902"))},c={data:function(){return{UserData:"",UserWxId:!0}},components:{quickBtn:r,navigation:s,wInput:u},computed:i({i18n:function(){return this.$t("Mypersonal")}},(0,o.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){t.setNavigationBarTitle({title:this.i18n.title12}),this.UserData=this.GET_MY.headers.wxId,""==this.UserData?this.UserWxId=!1:this.UserWxId=!0},methods:{clickUpData:function(e){var n=this,o=this;if(3===e)t.showModal({title:"提示",content:"是否确定解绑微信？",success:function(t){t.confirm?(console.log("用户点击确定"),o.UserWxId=!1,o.UserData=""):t.cancel&&console.log("用户点击取消")}});else if(2===e){if(!/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(this.UserData))return t.showToast({title:"微信号格式有误",icon:"none",duration:1e3}),!1;if(t.getStorageSync("landRegist")){var i=JSON.parse(t.getStorageSync("landRegist"));console.log(i.user.id);var a={wxId:this.UserData};t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/user/"+i.user.id,data:a,method:"POST",header:{Authorization:"Bearer "+i.token},success:function(e){t.hideLoading(),console.log(e.data),n.getmy(),t.navigateBack({})},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}},getmy:function(){var e=this;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id);t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/user/"+n.user.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),e.list=n.data.content,e.$store.commit("setMy",e.list)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}}};e.default=c}).call(this,n("543d")["default"])},8408:function(t,e,n){"use strict";n.r(e);var o=n("7d9f"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"8e81":function(t,e,n){},ec11:function(t,e,n){"use strict";n.r(e);var o=n("1e34"),i=n("8408");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("49af");var r=n("2877"),s=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports}},[["13ad","common/runtime","common/vendor"]]]);