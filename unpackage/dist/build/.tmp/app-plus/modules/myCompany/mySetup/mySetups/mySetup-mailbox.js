(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/mySetup/mySetups/mySetup-mailbox"],{"2aae":function(t,e,n){"use strict";var o=n("7693"),a=n.n(o);a.a},"651c":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},7693:function(t,e,n){},8565:function(t,e,n){"use strict";n.r(e);var o=n("651c"),a=n("eebb");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("2aae");var u=n("2877"),r=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"9c86":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62");function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/quickBtn/quickBtn")]).then(n.bind(null,"2de2"))},s=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/navigation/navigation")]).then(n.bind(null,"5a67"))},c=function(){return n.e("components/common/watch-login/watch-input").then(n.bind(null,"2a48"))},l={data:function(){return{UserData:"",confirmShow:!1,confirmBtn:"确定",cancelBtn:"取消",confirmTitle:"提示",confirmText:"是否要解除微信绑定?",width:"100%"}},components:{quickBtn:r,navigation:s,wInput:c},computed:i({i18n:function(){return this.$t("Mypersonal")}},(0,a.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){t.setNavigationBarTitle({title:this.i18n.title12}),this.UserData=this.GET_MY.headers.userEmail},methods:{clickUpData:function(){var e=this;if(""===this.UserData)return t.showToast({title:"邮箱不能为空",icon:"none",duration:1e3}),!1;if(this.UserData&&!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.UserData))return t.showToast({title:"邮箱格式有误",icon:"none",duration:1e3}),!1;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(o(n.user.id," at modules\\myCompany\\mySetup\\mySetups\\mySetup-mailbox.vue:80"));var a={userEmail:this.UserData};t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/user/"+n.user.id,data:a,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),console.log(o(n.data," at modules\\myCompany\\mySetup\\mySetups\\mySetup-mailbox.vue:97")),e.getmy(),t.navigateBack({})},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o(e,"网络繁忙，请稍后"," at modules\\myCompany\\mySetup\\mySetups\\mySetup-mailbox.vue:109"))}})}},getmy:function(){var e=this;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(o(n.user.id," at modules\\myCompany\\mySetup\\mySetups\\mySetup-mailbox.vue:117"));t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/user/"+n.user.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),e.list=n.data.content,e.$store.commit("setMy",e.list)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o(e,"网络繁忙，请稍后"," at modules\\myCompany\\mySetup\\mySetups\\mySetup-mailbox.vue:144"))}})}}}};e.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},db19:function(t,e,n){"use strict";(function(t){n("ad90"),n("921b");o(n("66fd"));var e=o(n("8565"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},eebb:function(t,e,n){"use strict";n.r(e);var o=n("9c86"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a}},[["db19","common/runtime","common/vendor"]]]);