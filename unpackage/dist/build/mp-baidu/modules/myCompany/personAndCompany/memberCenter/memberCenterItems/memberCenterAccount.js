(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/memberCenter/memberCenterItems/memberCenterAccount"],{"0141":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("d99c")),o=n(r("5d99"));function n(e){return e&&e.__esModule?e:{default:e}}var s={name:"memberCenterAccount",components:{},props:["userDatas","selected"],data:function(){return{user:[],userLogo:o.default,vipBackground:a.default,overdueDay:"",effectiveTime:"",progress:""}},created:function(){this.getDay()},computed:{},watch:{},filters:{formatDate:function(e){return e.replace(/\//g,".")}},mounted:function(){},methods:{getDay:function(){var e=this.userDatas.starTime,t=(new Date).getTime(),r=this.userDatas.endTime;console.log(e,t,r);var a=r-e,o=r-t,n=o/a,s=100*n.toFixed(6)+"%";console.log(r-e,r-t,o/a),console.log(s,"还有多少时间"),"1"==this.userDatas.vipState||"2"==this.userDatas.vipState?this.progress=s:"3"==this.userDatas.vipState&&(this.progress="0%")},goToBuyMember:function(){console.log("to购买会员"),"WX"===e.getStorageSync("browserType")?this.createOrder():"FWX"===e.getStorageSync("browserType")&&this.FWXcreateOrder()},createOrder:function(){var t=this;if(console.log("创建订单"),this.userDatas.applyNum)location.href=this.api2+"/rest-rp/vip/createWxPayOrder?applyVipNum="+this.userDatas.applyNum;else if(e.getStorageSync("landRegist")){var r=JSON.parse(e.getStorageSync("landRegist"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/vip/vipApply?userId="+r.user.id+"&lvId="+this.userDatas.lvId,method:"GET",header:{Authorization:"Bearer "+r.token},success:function(r){e.hideLoading(),console.log(r.data.content,"会员订单号");var a=r.data.content;location.href=t.api2+"/rest-rp/vip/createWxPayOrder?applyVipNum="+a},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},FWXcreateOrder:function(){if(this.userDatas.applyNum)e.redirectTo({url:"./memberCenterItems/buyMember/buyMember"});else if(e.getStorageSync("landRegist")){var t=JSON.parse(e.getStorageSync("landRegist"));console.log(t.user.id),e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/vip/vipApply?userId="+t.user.id+"&lvId="+this.userDatas.lvId,method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){e.hideLoading(),console.log(t.data.content,"会员订单号"),e.redirectTo({url:"./memberCenterItems/buyMember/buyMember"})},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},openVip:function(){console.log(this.selected,"155555555555555"),1==this.selected?this.goToBuyMember():(this.$emit("scrollTo"),e.showToast({icon:"none",title:"  请勾选并同意用户协议哦  ",duration:800}))}}};t.default=s}).call(this,r("5486")["default"])},"053fa":function(e,t,r){"use strict";r.r(t);var a=r("e8b0"),o=r("bff1");for(var n in o)"default"!==n&&function(e){r.d(t,e,function(){return o[e]})}(n);r("f953");var s=r("2877"),i=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"7a586f92",null);t["default"]=i.exports},5483:function(e,t,r){},bff1:function(e,t,r){"use strict";r.r(t);var a=r("0141"),o=r.n(a);for(var n in a)"default"!==n&&function(e){r.d(t,e,function(){return a[e]})}(n);t["default"]=o.a},e8b0:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=(e._self._c,e._f("formatDate")(this.userDatas.endTimeStr)),a=e._f("formatDate")(this.userDatas.endTimeStr),o=e._f("formatDate")(this.userDatas.endTimeStr);e.$mp.data=Object.assign({},{$root:{f0:r,f1:a,f2:o}})},o=[];r.d(t,"a",function(){return a}),r.d(t,"b",function(){return o})},f953:function(e,t,r){"use strict";var a=r("5483"),o=r.n(a);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/myCompany/personAndCompany/memberCenter/memberCenterItems/memberCenterAccount-create-component',
    {
        'modules/myCompany/personAndCompany/memberCenter/memberCenterItems/memberCenterAccount-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("053fa"))
        })
    },
    [['modules/myCompany/personAndCompany/memberCenter/memberCenterItems/memberCenterAccount-create-component']]
]);
