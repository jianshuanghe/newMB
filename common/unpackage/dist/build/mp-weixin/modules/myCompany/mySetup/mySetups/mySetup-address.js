(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/mySetup/mySetups/mySetup-address"],{"22b2":function(e,t,n){"use strict";var o=n("5891"),i=n.n(o);i.a},"3ce8":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/quickBtn/quickBtn")]).then(n.bind(null,"270e"))},s=function(){return n.e("components/mbbo/navigation/navigation").then(n.bind(null,"9063"))},d={data:function(){return{weixuan:this.Static+"my/15.png",xuanzhong:this.Static+"my/16.png",bot:this.Static+"my/bot.png",list:[],add:[]}},components:{quickBtn:r,navigation:s},computed:i({i18n:function(){return this.$t("Mypersonal")}},(0,o.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),watch:{GET_MY:{handler:function(e,t){console.log(e,t),this.add=e.address},deep:!0}},onLoad:function(){e.setNavigationBarTitle({title:this.i18n.title23}),this.address()},methods:{xuanadd:function(t){var n=this;if(e.getStorageSync("landRegist")){var o=JSON.parse(e.getStorageSync("landRegist"));console.log(o.user.id);var i={addrState:1,userId:o.user.id,id:t};e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/address/",data:i,method:"POST",header:{Authorization:"Bearer "+o.token},success:function(t){e.hideLoading(),console.log(t.data),n.address()},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},gotoaddressnew:function(){console.log("添加地址"),e.navigateTo({url:"/modules/myCompany/mySetup/mySetups/mySetup-address-new"})},xiuadd:function(t){var n=this;if(e.getStorageSync("landRegist")){var o=JSON.parse(e.getStorageSync("landRegist"));console.log(o.user.id),e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/address/"+t,method:"GET",header:{Authorization:"Bearer "+o.token},success:function(o){e.hideLoading(),console.log(o.data),n.list=o.data.content,n.$store.commit("setress",n.list),e.navigateTo({url:"/modules/myCompany/mySetup/mySetups/mySetup-address-new2?id="+t})},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}console.log("编辑地址")},deladd:function(t){var n=this;if(e.getStorageSync("landRegist")){var o=JSON.parse(e.getStorageSync("landRegist"));console.log(o.user.id);e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/address/del/"+t,method:"GET",header:{Authorization:"Bearer "+o.token},success:function(t){e.hideLoading(),console.log(t.data),n.address()},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},address:function(){var t=this;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));console.log(n.user.id);e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/address?userId="+n.user.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){e.hideLoading(),console.log(n.data),t.list=n.data.content,t.$store.commit("setaddress",t.list)},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}}}};t.default=d}).call(this,n("543d")["default"])},5891:function(e,t,n){},"7c64":function(e,t,n){"use strict";n.r(t);var o=n("3ce8"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},cd88:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},d295:function(e,t,n){"use strict";n.r(t);var o=n("cd88"),i=n("7c64");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("22b2");var r=n("2877"),s=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports}},[["2003","common/runtime","common/vendor"]]]);