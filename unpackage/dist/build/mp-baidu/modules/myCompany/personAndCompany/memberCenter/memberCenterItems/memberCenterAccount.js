(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/memberCenter/memberCenterItems/memberCenterAccount"],{1199:function(e,t,r){"use strict";r.r(t);var a=r("5e9e"),o=r("ef8d");for(var s in o)"default"!==s&&function(e){r.d(t,e,function(){return o[e]})}(s);r("8e50");var n=r("2877"),i=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,"29d9cc1d",null);t["default"]=i.exports},"5e9e":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=(e._self._c,e._f("formatDate")(this.userDatas.endTimeStr)),a=e._f("formatDate")(this.userDatas.endTimeStr),o=e._f("formatDate")(this.userDatas.endTimeStr);e.$mp.data=Object.assign({},{$root:{f0:r,f1:a,f2:o}})},o=[];r.d(t,"a",function(){return a}),r.d(t,"b",function(){return o})},7213:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"memberCenterAccount",components:{},props:["userDatas","selected"],data:function(){return{user:[],userLogo:this.Static+"my/sasf.png",vipBackground:this.Static+"images/business/home/personCenter/银卡.png",overdueDay:"",effectiveTime:"",progress:""}},created:function(){this.getDay()},computed:{},watch:{},filters:{formatDate:function(e){return e.replace(/\//g,".")}},mounted:function(){},methods:{getDay:function(){var e=this.userDatas.starTime,t=(new Date).getTime(),r=this.userDatas.endTime;console.log(e,t,r);var a=r-e,o=r-t,s=o/a,n=100*s.toFixed(6)+"%";console.log(r-e,r-t,o/a),console.log(n,"还有多少时间"),"1"==this.userDatas.vipState||"2"==this.userDatas.vipState?this.progress=n:"3"==this.userDatas.vipState&&(this.progress="0%")},goToBuyMember:function(){console.log("to购买会员"),"WX"===e.getStorageSync("browserType")?this.createOrder():"FWX"===e.getStorageSync("browserType")&&this.FWXcreateOrder()},createOrder:function(){var t=this;if(console.log("创建订单"),this.userDatas.applyNum)location.href=this.api2+"/rest-rp/vip/createWxPayOrder?applyVipNum="+this.userDatas.applyNum;else if(e.getStorageSync("landRegist")){var r=JSON.parse(e.getStorageSync("landRegist"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/vip/vipApply?userId="+r.user.id+"&lvId="+this.userDatas.lvId,method:"GET",header:{Authorization:"Bearer "+r.token},success:function(r){e.hideLoading(),console.log(r.data.content,"会员订单号");var a=r.data.content;location.href=t.api2+"/rest-rp/vip/createWxPayOrder?applyVipNum="+a},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},FWXcreateOrder:function(){if(this.userDatas.applyNum)e.redirectTo({url:"./memberCenterItems/buyMember/buyMember"});else if(e.getStorageSync("landRegist")){var t=JSON.parse(e.getStorageSync("landRegist"));console.log(t.user.id),e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/vip/vipApply?userId="+t.user.id+"&lvId="+this.userDatas.lvId,method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){e.hideLoading(),console.log(t.data.content,"会员订单号"),e.redirectTo({url:"./memberCenterItems/buyMember/buyMember"})},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},openVip:function(){console.log(this.selected,"155555555555555"),1==this.selected?this.goToBuyMember():(this.$emit("scrollTo"),e.showToast({icon:"none",title:"  请勾选并同意用户协议哦  ",duration:800}))}}};t.default=r}).call(this,r("5486")["default"])},"7a30":function(e,t,r){},"8e50":function(e,t,r){"use strict";var a=r("7a30"),o=r.n(a);o.a},ef8d:function(e,t,r){"use strict";r.r(t);var a=r("7213"),o=r.n(a);for(var s in a)"default"!==s&&function(e){r.d(t,e,function(){return a[e]})}(s);t["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/myCompany/personAndCompany/memberCenter/memberCenterItems/memberCenterAccount-create-component',
    {
        'modules/myCompany/personAndCompany/memberCenter/memberCenterItems/memberCenterAccount-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("1199"))
        })
    },
    [['modules/myCompany/personAndCompany/memberCenter/memberCenterItems/memberCenterAccount-create-component']]
]);                
