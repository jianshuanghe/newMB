(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/InstructionsPrice/myproduct/myproduct-shu"],{"11f6":function(t,e,n){"use strict";n.r(e);var o=n("6a34"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},"608e":function(t,e,n){"use strict";var o=n("7b7b"),i=n.n(o);i.a},"6a34":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){return n.e("modules/InstructionsPrice/myproduct/myproduct").then(n.bind(null,"cf89"))},a={data:function(){return{list:[],chan:[],ding:[],zi:[],id:""}},components:{myproduct:s},created:function(){this.shareEachPage()},onLoad:function(e){this.id=e.id,console.log(e),t.setNavigationBarTitle({title:this.i18n.product1}),this.myproduct(),this.product(),this.Cus(),this.inf()},methods:{myproduct:function(){var e=this;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc?userId="+n.user.id+"&page=1&lookUserId="+n.user.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),console.log(n.data),e.list=n.data.content.list,e.$store.commit("setproduct",e.list)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},product:function(){var e=this;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc?userId="+n.user.id+"&page=1&instrucCustType=0",method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),console.log(n.data),e.chan=n.data.content.list,e.$store.commit("setchan",e.chan)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},Cus:function(){var e=this;if(console.log(123),t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc?userId="+n.user.id+"&page=1&instrucCustType=1",method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),console.log(n.data),e.ding=n.data.content.list,e.$store.commit("setding",e.ding)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},inf:function(){var e=this;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc?userId="+n.user.id+"&page=1&instrucCustType=2",method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),console.log(n.data),e.zi=n.data.content.list,e.$store.commit("setzi",e.zi)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}},computed:i({i18n:function(){return this.$t("Howtoshow")}},(0,o.mapGetters)(["GET_NEWS","GET_HOME","QUICKNAVCO"]))};e.default=a}).call(this,n("543d")["default"])},"6dcc":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"7b7b":function(t,e,n){},af47:function(t,e,n){"use strict";n.r(e);var o=n("6dcc"),i=n("11f6");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("608e");var s=n("2877"),a=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports}},[["4a53","common/runtime","common/vendor"]]]);