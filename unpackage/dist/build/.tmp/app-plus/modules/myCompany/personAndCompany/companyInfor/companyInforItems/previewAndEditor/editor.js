(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor"],{"0eca":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement;e._self._c},r=[];t.d(o,"a",function(){return n}),t.d(o,"b",function(){return r})},"195f":function(e,o,t){"use strict";var n=t("9db6"),r=t.n(n);r.a},2162:function(e,o,t){"use strict";t.r(o);var n=t("9513"),r=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(o,e,function(){return n[e]})}(i);o["default"]=r.a},2464:function(e,o,t){"use strict";t.r(o);var n=t("430e"),r=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(o,e,function(){return n[e]})}(i);o["default"]=r.a},"430e":function(e,o,t){"use strict";(function(e,n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=t("2f62");function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(o){a(e,o,t[o])})}return e}function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var d=function(){return t.e("components/common/watch-login/watch-input1").then(t.bind(null,"e7b3"))},s=function(){return Promise.all([t.e("common/vendor"),t.e("components/common/provinceCity/provinceCity")]).then(t.bind(null,"4e15"))},c={name:"addressBs",components:{wInput:d,provinceCity:s},data:function(){return{text:"",lineRightArrow:this.Static+"images/common/line-right-arrow.png",xing:this.Static+"images/common/xing.png",addressDetail:"",info:{idStringAddress:"",idString:"",addrPcode:"",addrCcode:"",addrAcode:"",idaddress:""},province:[],city:[],county:[],imgData:{},arr:[],listData:{multiArray:[],multiIndex:[0,0],areaPorC:{},province:{index:0,text:"",pcode:""},city:{text:"",ccode:""},paramsPC:{ptext:"",pcode:"",ctext:"",ccode:""},dizhi:""}}},created:function(){console.log(e(this.GET_MY.headers," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\industryAddress\\address.vue:116")),this.dizhi=this.GET_MY.headers.addressDetail,this.listData.paramsPC.text=this.GET_MY.headers.addrStr},onLoad:function(){},mounted:function(){},computed:i({i18n:function(){return this.$t("qualificatCert")}},(0,r.mapGetters)(["PERSONCENTER","IMGDATA","GET_MY"])),methods:i({},(0,r.mapMutations)({setAddressBsShow:"setAddressBsShow"}),{clickCity:function(o){this.arr=o,console.log(e(this.arr," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\industryAddress\\address.vue:138"))},clickReset:function(){console.log(e("取消"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\industryAddress\\address.vue:141")),n.navigateBack({})},clickSaveAddress:function(){if(console.log(e("触发保存地址按钮"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\industryAddress\\address.vue:147")),""==this.arr){if(console.log(e("1"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\industryAddress\\address.vue:149")),""==this.GET_MY.headers.addrStr)return n.showToast({title:"请选择地区",icon:"none",duration:1e3}),!1}else if(""==this.dizhi)return n.showToast({title:"请输入详细地址",icon:"none",duration:1e3}),!1;if(""!==this.arr){var o={idString:this.arr.cityText,addrPcode:this.arr.pcode,addrCcode:this.arr.ccode,addrTcode:this.arr.tcode,idaddress:this.GET_MY.headers.addressDetail};this.$store.commit("setclickCity",o)}n.navigateBack({})}})};o.default=c}).call(this,t("0de9")["default"],t("6e42")["default"])},"4c1b":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement;e._self._c},r=[];t.d(o,"a",function(){return n}),t.d(o,"b",function(){return r})},5293:function(e,o,t){"use strict";var n=t("7b73"),r=t.n(n);r.a},"5eba":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement;e._self._c},r=[];t.d(o,"a",function(){return n}),t.d(o,"b",function(){return r})},"6f0c":function(e,o,t){"use strict";(function(e,n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=t("2f62");function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(o){a(e,o,t[o])})}return e}function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var d=function(){return t.e("modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/industryAddress/industry").then(t.bind(null,"e846"))},s=function(){return t.e("components/common/watch-login/watch-input1").then(t.bind(null,"e7b3"))},c=function(){return t.e("components/common/imageUpload/imageUploadOne").then(t.bind(null,"2ec6"))},m=function(){return Promise.all([t.e("common/vendor"),t.e("components/mbbo/quickBtn/quickBtn")]).then(t.bind(null,"2de2"))},u=function(){return Promise.all([t.e("common/vendor"),t.e("components/mbbo/navigation/navigation")]).then(t.bind(null,"5a67"))},l={name:"editBasicInfor",components:{wInput:s,imageUploadOne:c,quickBtn:m,navigation:u,industry:d},data:function(){return{text:"",touxiang:"",touxiang1:this.Static+"images/business/home/extendManageList/touxiang.png",lineRightArrow:this.Static+"images/common/line-right-arrow.png",xing:this.Static+"images/common/xing.png",logo:"",logos:"",logoo:"",logoos:"",placker:"",hangye:0,industryss:"",timeOutEvent:0,previewImgShow:!1,ImgSrc:"",action:"http://img01.iambuyer.com/imgup/upLoad/fileUpload",files:[],files2:[],industryShow:!1,addressDetail:"",idStringAddress:"",addrPcode:"",addrCcode:"",addrAcode:"",industryDataCkeck:{compTypePcodeStr:"",compTypePcode:0},listData:{imageData:[],serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload"},UserData:{passWord:null,compLogo:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKB0hUYibokE4jkgia3wClLMz8l20TYbdX0uibziavftrg0ylDne3W9N7mIQI7SRtibpmic5p0KP1WK7ONw/132",wechatQrImg:"https://img04.iambuyer.com/imgup/upload/images/2019/07/15/PM1sECJS2n1G7n5sCDwcQWlB8kNlPrHoEYnQPJ79b4I7LpNNxN0v9Eb46SDBm4fk.jpeg",companyName:"菅双鹤",nickname:"菅双鹤",companyIntro:"",addressDetail:"肉丸无语",contactTelphone:"13146296160",contactEmail:"274088960@qq.com",contactMan:"偶遇语音",userPhone:"13146296160",userEmail:"11@qq.com",money:2718,beyondUser:"91.00%",wxId:"12555",content:"购物与物无忤",headImg:"https://img04.iambuyer.com/imgup/upload/images/2019/06/18/M2Mhcjjc2Bu5b6jatbBmSPsyLgfdTRBTuT88rYVpgQmcsOAOjxlFNfgZ20B5FbyUoXe6nT.jpeg",toBCount:9,toCCount:11,companyAccountVo:{money:0,frozenMoney:null,consMoney:0,putInCount:0,authState:"2",toDayRechMoney:null,yesterdayConsMoney:null},compTypePcode:120,compTypeCode:0,compTypePcodeStr:"计算机服务和软件业",compTypeCodeStr:null,provinceCode:"110000",cityCode:"110100",areaCode:"110101",provinceCodeStr:"北京",cityCodeStr:"北京市",areaCodeStr:"东城区",vipState:"1",cydVipLv:null},imgData:{}}},created:function(){},onLoad:function(){e.setNavigationBarTitle({title:"公司信息"})},computed:i({},(0,r.mapGetters)(["PERSONCENTER","IMGDATA","QUICKNAVCO","GET_MY"])),watch:{PERSONCENTER:{handler:function(e,o){this.UserData=e.basicInforEdit,this.addressDetail=e.info.idStringAddress,this.industryShow=e.industry.industryShow,this.industryDataCkeck=e.industry.industryCheck,this.addrPcode=e.info.addrPcode,this.addrCcode=e.info.addrCcode,this.addrAcode=e.info.addrAcode},deep:!0},GET_MY:{handler:function(e,o){console.log(n(e,o,"header----list"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:354")),this.Effec=e.Effective,void 0!==e.clickCity.idString&&(this.placker=e.clickCity.idString,this.regPcode=e.clickCity.addrPcode,this.regCcode=e.clickCity.addrCcode,this.regAcode=e.clickCity.addrTcode,this.regAddr=e.clickCity.idaddress)},deep:!0}},mounted:function(){},methods:i({},(0,r.mapMutations)({setAddShow:"setAddShow",setIdStringAddress:"setIdStringAddress",setIdString:"setIdString",setAddrPcode:"setAddrPcode",setAddrCcode:"setAddrCcode",setAddrAcode:"setAddrAcode",setIdAddress:"setIdAddress",setLoadingShow:"setLoadingShow",setLoadingText:"setLoadingText",setIndustryShow:"setIndustryShow",setIndustryData:"setIndustryData",setIndustryCheck:"setIndustryCheck",setBasicInforEdit:"setBasicInforEdit",setCompLogo:"setCompLogo",setWechatQrImg:"setWechatQrImg"}),{CloseMask:function(e){this.hangye=e},clickConfirm:function(e){console.log(n(e," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:393")),this.industryss=e.name,this.id=e.id},area:function(){console.log(n("to地址选择"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:398")),e.navigateTo({url:"/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/industryAddress/address"})},clickIndustry:function(){console.log(n("触发所属行业按钮"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:404")),this.hangye=1,console.log(n(this.hangye," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:406"))},clickSaveBasicInfor:function(){var o=this;if(""==this.logo&&""==this.GET_MY.headers.compLogo)return e.showToast({title:"请选择企业logo",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.headers.companyName)return e.showToast({title:"请填写企业名称",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.headers.compTypePcodeStr&&""==this.industryss)return e.showToast({title:"请选择所属行业",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.headers.addrStr&&""==this.placker)return e.showToast({title:"请选择联系地址",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.headers.contactMan)return e.showToast({title:"请输入联系人",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.headers.contactTelphone)return e.showToast({title:"请输入联系电话",icon:"none",duration:1e3}),!1;if(""!==this.GET_MY.headers.contactEmail&&!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.GET_MY.headers.contactEmail))return e.showToast({title:"邮箱格式有误",icon:"none",duration:1e3}),!1;if(e.getStorageSync("landRegist")){var t=JSON.parse(e.getStorageSync("landRegist"));console.log(n(t.user.id," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:463"));var r={compLogo:this.logo,companyName:this.GET_MY.headers.companyName,companyIntro:this.GET_MY.headers.companyIntro,compTypePcode:this.id,provinceCode:this.regPcode,cityCode:this.regCcode,areaCode:this.regAcode,addressDetail:this.regAddr,wechatQrImg:this.logoo,contactTelphone:this.GET_MY.headers.contactTelphone,contactEmail:this.GET_MY.headers.contactEmail,contactMan:this.GET_MY.headers.contactMan};e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/user/"+t.user.id,data:r,method:"POST",header:{Authorization:"Bearer "+t.token},success:function(t){e.hideLoading(),console.log(n(t.data," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:490")),o.logo?(o.GET_MY.headers.compLogo=o.logos,console.log(n(1," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:493"))):(o.GET_MY.headers.compLogo=o.GET_MY.headers.compLogo,console.log(n(2," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:496"))),""!==o.industryss&&(o.GET_MY.headers.compTypePcodeStr=o.industryss),""!==o.placker&&(o.GET_MY.headers.addressDetail=o.regAddr),o.logoo?o.GET_MY.headers.wechatQrImg=o.logoos:o.GET_MY.headers.wechatQrImg=o.GET_MY.headers.wechatQrImg,o.getmy()},fail:function(o){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(n(o,"网络繁忙，请稍后"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:520"))}})}},getmy:function(){var o=this;if(e.getStorageSync("landRegist")){var t=JSON.parse(e.getStorageSync("landRegist"));console.log(n(t.user.id," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:530"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/user/"+t.user.id,method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){e.hideLoading(),"202"===t.data.ret?(e.removeStorageSync("landRegist"),e.removeStorageSync("clickItems"),o.$store.commit("setHome",1),o.$store.commit("setLandRegist",0),e.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),e.getStorageSync("landRegist")||o.landRegistra()):(e.navigateBack({}),o.list=t.data.content,o.$store.commit("setMy",o.list))},fail:function(o){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(n(o,"网络繁忙，请稍后"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:573"))}})}},deleteImage:function(e){console.log(n(e,"删除图片"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:580")),this.logo=""},addImage:function(e){console.log(n(e,"添加图片"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:584")),e.allImages&&(this.logo=e.allImages[0].imgName,this.logos=e.allImages[0].imgUrl,console.log(n(this.logo," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:588")))},deleteImages:function(e){console.log(n(e,"删除图片"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:593")),this.logoo=""},addImages:function(e){console.log(n(e,"添加图片"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:597")),e.allImages&&(this.logoo=e.allImages[0].imgName,this.logoos=e.allImages[0].imgUrl,console.log(n(this.logo," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor\\editorItems\\editBasicInfor.vue:601")))}})};o.default=l}).call(this,t("6e42")["default"],t("0de9")["default"])},7135:function(e,o,t){"use strict";t.r(o);var n=t("0eca"),r=t("7a95");for(var i in r)"default"!==i&&function(e){t.d(o,e,function(){return r[e]})}(i);t("b3cc");var a=t("2877"),d=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,"05bfd3cc",null);o["default"]=d.exports},"7a95":function(e,o,t){"use strict";t.r(o);var n=t("6f0c"),r=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(o,e,function(){return n[e]})}(i);o["default"]=r.a},"7b73":function(e,o,t){},"7f6c":function(e,o,t){},"94f3":function(e,o,t){"use strict";t.r(o);var n=t("5eba"),r=t("2464");for(var i in r)"default"!==i&&function(e){t.d(o,e,function(){return r[e]})}(i);t("5293");var a=t("2877"),d=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,"73c779d1",null);o["default"]=d.exports},9513:function(e,o,t){"use strict";(function(e,n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=d(t("7135")),i=d(t("94f3")),a=t("2f62");function d(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(o){c(e,o,t[o])})}return e}function c(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var m=function(){return t.e("components/mbbo/topBox/topBox").then(t.bind(null,"87f7"))},u=function(){return t.e("modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editQualificatCert").then(t.bind(null,"437d"))},l=function(){return Promise.all([t.e("common/vendor"),t.e("components/mbbo/navigation/navigation")]).then(t.bind(null,"5a67"))},p={name:"editor",components:{addressBs:i.default,topBox:m,editBasicInfor:r.default,editQualificatCert:u,navigation:l},data:function(){return{}},props:["listid"],created:function(){},computed:s({},(0,a.mapGetters)(["PERSONCENTER","ADDRESSBS","QUICKNAVCO"])),onLoad:function(){e.setNavigationBarTitle({title:"公司信息"})},methods:s({},(0,a.mapMutations)({setPersonTitle:"setPersonTitle"}),{clickAllRead:function(){this.confirmShow=!0},clickNewsType:function(e){console.log(n(e,"切换基本信息和资质认证类型"," at modules\\myCompany\\personAndCompany\\companyInfor\\companyInforItems\\previewAndEditor\\editor.vue:68")),this.$store.commit("setPersonTitle",e)}})};o.default=p}).call(this,t("6e42")["default"],t("0de9")["default"])},"9db6":function(e,o,t){},b3cc:function(e,o,t){"use strict";var n=t("7f6c"),r=t.n(n);r.a},f603:function(e,o,t){"use strict";t.r(o);var n=t("4c1b"),r=t("2162");for(var i in r)"default"!==i&&function(e){t.d(o,e,function(){return r[e]})}(i);t("195f");var a=t("2877"),d=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,"1a9f5df4",null);o["default"]=d.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor-create-component',
    {
        'modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("f603"))
        })
    },
    [['modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor-create-component']]
]);
