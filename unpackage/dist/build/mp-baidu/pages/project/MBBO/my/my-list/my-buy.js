(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/project/MBBO/my/my-list/my-buy"],{"201b":function(t,e,n){"use strict";n.r(e);var o=n("de79"),u=n("473f");for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n("f741");var r=n("2877"),i=Object(r["a"])(u["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},"473f":function(t,e,n){"use strict";n.r(e);var o=n("b4b5"),u=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=u.a},a73d:function(t,e,n){},b4b5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("3460")),u=r(n("3c14")),a=r(n("c728"));function r(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{wode:o.default,caigou:u.default,yifa:a.default,list:[]}},mounted:function(){},created:function(){this.buy()},methods:{buy:function(){var e=this;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id);t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/user/indexCountData/"+n.user.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),console.log(n.data),e.list=n.data.content,console.log(e.list)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},gotosell:function(e){1===e?(console.log("to买家留言"),t.navigateTo({url:"/modules/myCompany/myBuyeronAlready/my-BuyeronAlready?id="+e})):2===e&&(console.log("已发留言"),t.navigateTo({url:"/modules/myCompany/myBuyeronAlready/my-BuyeronAlready?id="+e}))},gotosupply:function(e){console.log("to供应订单"),t.navigateTo({url:"/modules/InstructionsPrice/Order/Order?id="+e})},gotoPurchase:function(){console.log("to我的采购"),t.navigateTo({url:"/modules/InstructionsPrice/Purchase/Purchase"})}},computed:{i18n:function(){return this.$t("My")}}};e.default=i}).call(this,n("5486")["default"])},de79:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u})},f741:function(t,e,n){"use strict";var o=n("a73d"),u=n.n(o);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/project/MBBO/my/my-list/my-buy-create-component',
    {
        'pages/project/MBBO/my/my-list/my-buy-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("201b"))
        })
    },
    [['pages/project/MBBO/my/my-list/my-buy-create-component']]
]);
