(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/accountCenter/surveyAndrunWater/runWaterItems/runWaterAccount"],{"0481":function(t,e,a){"use strict";a.r(e);var n=a("7de6"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=o.a},5021:function(t,e,a){"use strict";a.r(e);var n=a("50d2"),o=a("0481");for(var r in o)"default"!==r&&function(t){a.d(e,t,function(){return o[t]})}(r);a("6b06");var s=a("2877"),u=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"08293abe",null);e["default"]=u.exports},"50d2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},"6b06":function(t,e,a){"use strict";var n=a("be04"),o=a.n(n);o.a},"7de6":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("e356")),o=a("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){u(t,e,a[e])})}return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var i={name:"runWaterAccount",components:{},data:function(){return{rightArrow:n.default,dataPopup:!1,changeRunWaterTime:{code:1,text:"昨天"},runWaterTextShow:"昨天",pageNum:0,num:1,dataRunWater:{userId:"",starTime:"",endTime:""},UserData:{passWord:null,compLogo:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKB0hUYibokE4jkgia3wClLMz8l20TYbdX0uibziavftrg0ylDne3W9N7mIQI7SRtibpmic5p0KP1WK7ONw/132",wechatQrImg:"https://img04.iambuyer.com/imgup/upload/images/2019/07/15/PM1sECJS2n1G7n5sCDwcQWlB8kNlPrHoEYnQPJ79b4I7LpNNxN0v9Eb46SDBm4fk.jpeg",companyName:"菅双鹤",nickname:"菅双鹤",companyIntro:"肉丸无语",addressDetail:"肉丸无语",contactTelphone:"13146296160",contactEmail:"274088960@qq.com",contactMan:"偶遇语音",userPhone:"13146296160",userEmail:"11@qq.com",money:2718,beyondUser:"91.00%",wxId:"12555",content:"购物与物无忤",headImg:"https://img04.iambuyer.com/imgup/upload/images/2019/06/18/M2Mhcjjc2Bu5b6jatbBmSPsyLgfdTRBTuT88rYVpgQmcsOAOjxlFNfgZ20B5FbyUoXe6nT.jpeg",toBCount:9,toCCount:11,companyAccountVo:{money:0,frozenMoney:null,consMoney:0,putInCount:0,authState:"2",toDayRechMoney:null,yesterdayConsMoney:null},compTypePcode:120,compTypeCode:0,compTypePcodeStr:"计算机服务和软件业",compTypeCodeStr:null,provinceCode:"110000",cityCode:"110100",areaCode:"110101",provinceCodeStr:"北京",cityCodeStr:"北京市",areaCodeStr:"东城区",vipState:"1",cydVipLv:null}}},computed:s({},(0,o.mapGetters)(["ACCOUNTCENTER"])),created:function(){this.dataRunWater.starTime=this.getDate(1),this.dataRunWater.endTime=this.getDate(0)},watch:{ACCOUNTCENTER:{handler:function(t,e){this.dataRunWater=t.dataRunWaterParams,this.UserData=t.runWaterTopData,console.log(this.UserData,"顶部数据")},deep:!0}},methods:s({},(0,o.mapMutations)({setRunWaterPageNum:"setRunWaterPageNum",setRunWaterNum:"setRunWaterNum",setDataRunWaterParams:"setDataRunWaterParams",setRunWaterTopData:"setRunWaterTopData",setReportRunWaterData:"setReportRunWaterData",setLoadingShow:"setLoadingShow",setLoadingText:"setLoadingText"}),{getDate:function(t){var e=new Date;e.setTime(e.getTime()-24*t*60*60*1e3);var a="";a=Number(e.getMonth()+1)<10?"0"+String(e.getMonth()+1):String(e.getMonth()+1);var n="";return n=Number(e.getDate())<10?"0"+String(e.getDate()):String(e.getDate()),e.getFullYear()+"-"+a+"-"+n},getRunWaterData:function(){var t=this;console.log("获取数据账户流水");var e=this.dataRunWater;this.$store.commit("setLoadingShow",!0),axios.post(this.api2+"/rest-rp/compAccount/selectListCount",e).then(function(e){if("200"===e.data.ret){t.$store.commit("setLoadingShow",!1),console.log("数据账户流水");var a=e.data.content;a||(a={rechMoney:0,consMoney:0}),t.$store.commit("setRunWaterTopData",a),t.getReportRunWaterData()}else t.$store.commit("setLoadingShow",!1),Toast("网络错误")}).catch(function(e){t.$store.commit("setLoadingShow",!1),Toast("网络繁忙，请稍后"),console.log(e,"网络繁忙，请稍后")})},getReportRunWaterData:function(){var t=this;console.log("获取流水报表数据");var e=this.dataRunWater;this.$store.commit("setLoadingShow",!0),axios.post(this.api2+"/rest-rp/compAccount/selectList?page="+this.num,e).then(function(a){if("200"===a.data.ret){t.$store.commit("setLoadingShow",!1),console.log("数据流水报表");var n=a.data.content;t.pageNums(n.count),console.log(e,"跟新参数"),t.$store.commit("setDataRunWaterParams",e),t.$store.commit("setReportRunWaterData",n.list)}else t.$store.commit("setLoadingShow",!1),Toast("网络错误")}).catch(function(e){t.$store.commit("setLoadingShow",!1),Toast("网络繁忙，请稍后"),console.log(e,"网络繁忙，请稍后")})},pageNums:function(t){this.pageNum=Math.ceil(t/10),this.$store.commit("setRunWaterPageNum",this.pageNum)},screenDataPopup:function(){this.dataPopup=!0},confirmScreen:function(){console.log("1"),this.runWaterTextShow=this.changeRunWaterTime.text;var t=JSON.parse(localStorage.getItem("landRegist"));console.log(t.user.id),this.dataRunWater.userId=t.user.id,this.dataRunWater.starTime=this.getDate(this.changeRunWaterTime.code),"001"===this.changeRunWaterTime.code&&(this.dataRunWater.starTime="2019-01-01"),this.dataRunWater.endTime=this.getDate(0),console.log(this.dataRunWater),this.$store.commit("setRunWaterNum",1),this.getRunWaterData(),this.dataPopup=!1},onValuesChange:function(t,e){console.log(e),this.changeRunWaterTime=e[0]}})};e.default=i},be04:function(t,e,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/myCompany/personAndCompany/accountCenter/surveyAndrunWater/runWaterItems/runWaterAccount-create-component',
    {
        'modules/myCompany/personAndCompany/accountCenter/surveyAndrunWater/runWaterItems/runWaterAccount-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5021"))
        })
    },
    [['modules/myCompany/personAndCompany/accountCenter/surveyAndrunWater/runWaterItems/runWaterAccount-create-component']]
]);                
