(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/mySetup/mySetups/mySetup-mailbox"],{"18e4":function(t,e,n){"use strict";n.r(e);var o=n("3311"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"2e05":function(t,e,n){"use strict";var o=n("4cf8"),i=n.n(o);i.a},3311:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/quickBtn/quickBtn")]).then(n.bind(null,"4455"))},u=function(){return n.e("components/mbbo/navigation/navigation").then(n.bind(null,"ddba"))},c=function(){return n.e("components/common/watch-login/watch-input").then(n.bind(null,"5902"))},s={data:function(){return{UserData:"",confirmShow:!1,confirmBtn:"确定",cancelBtn:"取消",confirmTitle:"提示",confirmText:"是否要解除微信绑定?",width:"100%"}},components:{quickBtn:r,navigation:u,wInput:c},computed:i({i18n:function(){return this.$t("Mypersonal")}},(0,o.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){t.setNavigationBarTitle({title:this.i18n.title12}),this.UserData=this.GET_MY.headers.userEmail},methods:{clickUpData:function(){var e=this;if(""===this.UserData)return t.showToast({title:"邮箱不能为空",icon:"none",duration:1e3}),!1;if(this.UserData&&!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.UserData))return t.showToast({title:"邮箱格式有误",icon:"none",duration:1e3}),!1;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id);var o={userEmail:this.UserData};t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/user/"+n.user.id,data:o,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),console.log(n.data),e.getmy(),t.navigateBack({})},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},getmy:function(){var e=this;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id);t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/user/"+n.user.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),e.list=n.data.content,e.$store.commit("setMy",e.list)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}}};e.default=s}).call(this,n("5486")["default"])},"4cf8":function(t,e,n){},"4eeb":function(t,e,n){"use strict";n.r(e);var o=n("de34"),i=n("18e4");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("2e05");var r=n("2877"),u=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},de34:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})}},[["cff5","common/runtime","common/vendor"]]]);