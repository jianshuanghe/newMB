(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor"],{"19b9":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return s})},"25a1":function(t,e,o){},"2c9b":function(t,e,o){"use strict";o.r(e);var n=o("19b9"),s=o("dbc8");for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);o("88b1");var i=o("2877"),r=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,"59b1511a",null);e["default"]=r.exports},"3ea5":function(t,e,o){"use strict";var n=o("25a1"),s=o.n(n);s.a},4858:function(t,e,o){},"88b1":function(t,e,o){"use strict";var n=o("4858"),s=o.n(n);s.a},b681:function(t,e,o){"use strict";o.r(e);var n=o("e6aa"),s=o("ee54");for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);o("3ea5");var i=o("2877"),r=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,"d409d9a4",null);e["default"]=r.exports},db6e:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("4add")),s=r(o("270c")),a=r(o("777c")),i=(r(o("b681")),o("2f62"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){d(t,e,o[e])})}return t}function d(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var u=function(){return o.e("components/common/watch-login/watch-input1").then(o.bind(null,"5d15"))},l=function(){return o.e("components/common/imageUpload/imageUploadOne").then(o.bind(null,"dc3a"))},m={name:"editBasicInfor",components:{wInput:u,imageUploadOne:l},data:function(){return{text:"",touxiang:"",touxiang1:n.default,lineRightArrow:s.default,xing:a.default,timeOutEvent:0,previewImgShow:!1,ImgSrc:"",action:"http://img01.iambuyer.com/imgup/upLoad/fileUpload",files:[],files2:[],industryShow:!1,addressDetail:"",idStringAddress:"",addrPcode:"",addrCcode:"",addrAcode:"",industryDataCkeck:{compTypePcodeStr:"",compTypePcode:0},listData:{imageData:[],serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload"},UserData:{passWord:null,compLogo:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKB0hUYibokE4jkgia3wClLMz8l20TYbdX0uibziavftrg0ylDne3W9N7mIQI7SRtibpmic5p0KP1WK7ONw/132",wechatQrImg:"https://img04.iambuyer.com/imgup/upload/images/2019/07/15/PM1sECJS2n1G7n5sCDwcQWlB8kNlPrHoEYnQPJ79b4I7LpNNxN0v9Eb46SDBm4fk.jpeg",companyName:"菅双鹤",nickname:"菅双鹤",companyIntro:"",addressDetail:"肉丸无语",contactTelphone:"13146296160",contactEmail:"274088960@qq.com",contactMan:"偶遇语音",userPhone:"13146296160",userEmail:"11@qq.com",money:2718,beyondUser:"91.00%",wxId:"12555",content:"购物与物无忤",headImg:"https://img04.iambuyer.com/imgup/upload/images/2019/06/18/M2Mhcjjc2Bu5b6jatbBmSPsyLgfdTRBTuT88rYVpgQmcsOAOjxlFNfgZ20B5FbyUoXe6nT.jpeg",toBCount:9,toCCount:11,companyAccountVo:{money:0,frozenMoney:null,consMoney:0,putInCount:0,authState:"2",toDayRechMoney:null,yesterdayConsMoney:null},compTypePcode:120,compTypeCode:0,compTypePcodeStr:"计算机服务和软件业",compTypeCodeStr:null,provinceCode:"110000",cityCode:"110100",areaCode:"110101",provinceCodeStr:"北京",cityCodeStr:"北京市",areaCodeStr:"东城区",vipState:"1",cydVipLv:null},imgData:{}}},created:function(){},computed:c({},(0,i.mapGetters)(["PERSONCENTER","IMGDATA"])),watch:{PERSONCENTER:{handler:function(t,e){this.UserData=t.basicInforEdit,this.addressDetail=t.info.idStringAddress,this.industryShow=t.industry.industryShow,this.industryDataCkeck=t.industry.industryCheck,this.addrPcode=t.info.addrPcode,this.addrCcode=t.info.addrCcode,this.addrAcode=t.info.addrAcode},deep:!0},IMGDATA:{handler:function(t,e){this.imgData=t},deep:!0}},mounted:function(){},methods:c({},(0,i.mapMutations)({setAddShow:"setAddShow",setIdStringAddress:"setIdStringAddress",setIdString:"setIdString",setAddrPcode:"setAddrPcode",setAddrCcode:"setAddrCcode",setAddrAcode:"setAddrAcode",setIdAddress:"setIdAddress",setLoadingShow:"setLoadingShow",setLoadingText:"setLoadingText",setIndustryShow:"setIndustryShow",setIndustryData:"setIndustryData",setIndustryCheck:"setIndustryCheck",setBasicInforEdit:"setBasicInforEdit",setCompLogo:"setCompLogo",setWechatQrImg:"setWechatQrImg"}),{fuzhi:function(){t.setClipboardData({data:"hello",success:function(){console.log("success")}})},goToBriefIntro:function(){console.log("to个人介绍"),this.$router.push({path:"/briefIntro",query:{}})},clickAddress:function(){console.log("to地址选择"),this.$store.commit("setAddShow",!0)},clickIndustry:function(){console.log("触发所属行业按钮"),this.$store.commit("setIndustryShow",!0)},getUserData:function(){var t=this;console.log("获取用户信息，全部"),this.$store.commit("setLoadingShow",!0);var e=JSON.parse(localStorage.getItem("landRegist"));console.log(e.user.id),axios.get(this.api2+"/rest-rp/user/"+e.user.id).then(function(e){if(console.log(e),"200"===e.data.ret){t.$store.commit("setLoadingShow",!1),t.$store.commit("setBasicInforEdit",e.data.content);var o={compTypePcodeStr:e.data.content.compTypePcodeStr,compTypePcode:e.data.content.compTypePcode};if(t.$store.commit("setIndustryCheck",o),t.$store.commit("setCompLogo",e.data.content.compLogo),t.$store.commit("setWechatQrImg",e.data.content.wechatQrImg),e.data.content.addressDetail){var n=e.data.content.provinceCodeStr,s=e.data.content.cityCodeStr,a=e.data.content.areaCodeStr,i=e.data.content.addressDetail,r=n+s+a,c="";i&&(c=i),t.$store.commit("setIdString",r),t.$store.commit("setIdAddress",c),t.$store.commit("setIdStringAddress",r+","+c)}}else t.$store.commit("setLoadingShow",!1),Toast(e.data.msg)}).catch(function(e){t.$store.commit("setLoadingShow",!1),Toast("网络繁忙，请稍后"),console.log(e,"网络繁忙，请稍后")})},goTouchStart:function(t,e){var o=this;clearTimeout(o.timeOutEvent),o.timeOutEvent=0,o.timeOutEvent=setTimeout(function(){o.longPress(t,e)},600)},goTouchend:function(t){clearTimeout(this.timeOutEvent),this.timeOutEvent},goTouchMove:function(t){clearTimeout(this.timeOutEvent),this.timeOutEvent=0},longPress:function(t,e){if(this.timeOutEvent=0,console.log(t,"触发长按行为"),"faRen"===t){if(""===e)return!1;this.ImgSrc=e,this.previewImgShow=!0}},processFile:function(t,e){console.log(t),lrz(t).then(function(o){t=o.file,console.log(t),e(t)})},addedHandler:function(){var t=this.files[0];t&&this.$refs.upload.removeFile(t),console.log(t)},errHandler:function(t){Toast("上传失败！")},sucHandlerLogo:function(t){console.log(t),console.log("更新logo"),this.UserData.compLogo=t.response.httpUrl,this.$store.commit("setBasicInforEdit",this.UserData),this.$store.commit("setCompLogo",t.response.name)},sucHandlerQrImg:function(t){console.log(t),console.log("更新二维码"),this.UserData.wechatQrImg=t.response.httpUrl,this.$store.commit("setBasicInforEdit",this.UserData),this.$store.commit("setWechatQrImg",t.response.name)},clickSaveBasicInfor:function(){console.log("触发保存基本信息按钮");var t=JSON.parse(JSON.stringify(this.UserData));return t.compLogo=this.imgData.compLogo,t.wechatQrImg=this.imgData.wechatQrImg,t.compTypePcodeStr=this.industryDataCkeck.compTypePcodeStr,t.compTypePcode=this.industryDataCkeck.compTypePcode,t.addressDetail=this.addressDetail.split(",")[3],t.provinceCode=this.addrPcode,t.cityCode=this.addrCcode,t.areaCode=this.addrAcode,console.log(this.addressDetail,"地址"),delete t.userPhone,delete t.userEmail,delete t.passWord,delete t.wxId,""===t.compLogo?(Toast("企业logo不能为空"),!1):""===t.companyName?(Toast("企业名称不能为空"),!1):t.companyName.length<2?(Toast("企业名称必须大于两个字符"),!1):""===t.compTypePcodeStr?(Toast("所属行业不能为空"),!1):""===t.addressDetail?(Toast("联系地址不能为空"),!1):""===t.contactMan?(Toast("联系人不能为空"),!1):/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(t.contactTelphone)?t.contactEmail&&!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(t.contactEmail)?(Toast("邮箱格式有误"),!1):void this.upUserData(t):(Toast("联系电话格式有误"),!1)},upUserData:function(t){var e=this;if(console.log("更新用户基本信息"),this.$store.commit("setLoadingShow",!0),localStorage.getItem("landRegist")){var o=JSON.parse(localStorage.getItem("landRegist"));console.log(o.user.id),axios.post(this.api2+"/rest-rp/user/"+o.user.id,t).then(function(t){console.log(t),"200"===t.data.ret?(e.$store.commit("setLoadingShow",!1),Toast("保存成功！"),setTimeout(function(){e.$router.back(-1)},1e3)):(e.$store.commit("setLoadingShow",!1),Toast(t.data.msg))}).catch(function(t){e.$store.commit("setLoadingShow",!1),Toast("网络繁忙，请稍后"),console.log(t,"网络繁忙，请稍后")})}},getValueFromChild:function(t){this.previewImgShow=t}})};e.default=m}).call(this,o("543d")["default"])},dbc8:function(t,e,o){"use strict";o.r(e);var n=o("db6e"),s=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},e6aa:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return s})},ee54:function(t,e,o){"use strict";o.r(e);var n=o("ff1b"),s=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},ff1b:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("2f62");function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){a(t,e,o[e])})}return t}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var i={name:"industry",data:function(){return{industryData:{},industryDataCkeck:{},clisckItems:"",clickItemsIndex:""}},computed:s({},(0,n.mapGetters)(["PERSONCENTER"])),watch:{PERSONCENTER:{handler:function(t,e){this.industryData=t.industry.industryData,this.industryDataCkeck=t.industry.industryCheck},deep:!0}},created:function(){},methods:s({},(0,n.mapMutations)({setIndustryShow:"setIndustryShow",setIndustryData:"setIndustryData",setIndustryCheck:"setIndustryCheck",setLoadingShow:"setLoadingShow",setLoadingText:"setLoadingText"}),{clickCloseMask:function(){this.$store.commit("setIndustryShow",!1),console.log("触发关闭所属行业")},getIndustry:function(){var t=this;this.$store.commit("setLoadingShow",!0);var e=JSON.parse(localStorage.getItem("landRegist"));console.log(e.user.id),axios.get(this.api2+"/rest-rp/compIndustry/selectList?userId="+e.user.id).then(function(e){console.log(e),"200"===e.data.ret?(t.$store.commit("setLoadingShow",!1),t.$store.commit("setIndustryData",e.data.content)):(t.$store.commit("setLoadingShow",!1),Toast(e.data.msg))}).catch(function(e){t.$store.commit("setLoadingShow",!1),Toast("网络繁忙，请稍后"),console.log(e,"网络繁忙，请稍后")})},clickCheckitems:function(t,e){console.log(t,e,"点击的子项的"),this.industryDataCkeck={compTypePcodeStr:t,compTypePcode:e},this.clickItemsIndex===e?this.clickItemsIndex="":this.clickItemsIndex=e},clickReset:function(){console.log("出发取消按钮"),this.$store.commit("setIndustryCheck",{}),this.clickCloseMask()},clickConfirm:function(){console.log("触发了保存按钮"),this.$store.commit("setIndustryCheck",this.industryDataCkeck),this.clickCloseMask()}})};e.default=i}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor-create-component',
    {
        'modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2c9b"))
        })
    },
    [['modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor-create-component']]
]);                
