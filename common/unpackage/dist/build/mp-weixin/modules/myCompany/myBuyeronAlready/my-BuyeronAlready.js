(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/myBuyeronAlready/my-BuyeronAlready"],{"2dd4":function(e,n,t){"use strict";var o=t("8fee"),i=t.n(o);i.a},"5f8e":function(e,n,t){"use strict";t.r(n);var o=t("8562"),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);n["default"]=i.a},"813e":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return i})},8562:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("2f62");function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){r(e,n,t[n])})}return e}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a=function(){return Promise.all([t.e("common/vendor"),t.e("components/mbbo/quickBtn/quickBtn")]).then(t.bind(null,"270e"))},s=function(){return t.e("components/mbbo/navigation/navigation").then(t.bind(null,"9063"))},u=function(){return t.e("modules/myCompany/myBuyeronAlready/my-BuyeronAlready/my-Buyer").then(t.bind(null,"1df6"))},l=function(){return t.e("modules/myCompany/myBuyeronAlready/my-BuyeronAlready/my-Already").then(t.bind(null,"f0c4"))},c={data:function(){return{list:[],num:0,Mess:[],Alr:[],pages:"1"}},components:{Buyer:u,Already:l,quickBtn:a,navigation:s},computed:i({i18n:function(){return this.$t("Mypersonal")}},(0,o.mapGetters)(["GET_HOME","QUICKNAVCO"])),onLoad:function(n){console.log(n.id),"1"===n.id?this.num=0:"2"===n.id&&(this.num=1),e.setNavigationBarTitle({title:this.i18n.message1}),this.list.push(this.i18n.message2),this.list.push(this.i18n.message3)},created:function(){this.Message(),this.Already(),this.shareEachPage()},methods:{gotoGood:function(e){this.num=e},Message:function(){var n=this;if(e.getStorageSync("landRegist")){var t=JSON.parse(e.getStorageSync("landRegist"));console.log(t.user.id),e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/msg/selectList?userId="+t.user.id+"&page="+this.pages,method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){e.hideLoading(),console.log(t.data),n.Mess=t.data.content.list,n.pages++,n.$store.commit("setnews",n.Mess)},fail:function(n){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(n,"网络繁忙，请稍后")}})}},Already:function(){var n=this;if(e.getStorageSync("landRegist")){var t=JSON.parse(e.getStorageSync("landRegist"));console.log(t.user.id),e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/msg/selectList?myUserId="+t.user.id+"&page=1",method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){e.hideLoading(),console.log(t.data),n.Alr=t.data.content.list,n.$store.commit("setAlr",n.Alr)},fail:function(n){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(n,"网络繁忙，请稍后")}})}}}};n.default=c}).call(this,t("543d")["default"])},"8fee":function(e,n,t){},b13c:function(e,n,t){"use strict";t.r(n);var o=t("813e"),i=t("5f8e");for(var r in i)"default"!==r&&function(e){t.d(n,e,function(){return i[e]})}(r);t("2dd4");var a=t("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports}},[["6a07","common/runtime","common/vendor"]]]);