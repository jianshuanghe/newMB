(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-personAndCompany-companyInfor-companyInforItems-previewAndEditor-editor-editorItems-editBasicInfor"],{"0c16":function(t,i,e){var a=e("45cb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("4167184e",a,!0,{sourceMap:!1,shadowMode:!1})},"0c22":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;e("2f62");var a={name:"industry",props:["data"],data:function(){return{industryData:{},industryDataCkeck:{},clisckItems:"",clickItemsIndex:"",num:0,arr:[],name:"",id:""}},computed:{},watch:{},created:function(){this.industry()},methods:{xuanzhong:function(i){this.num=i,this.name=this.arr[i].typeName,this.id=this.arr[i].id,t.log(this.name)},industry:function(){var i=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));t.log(e.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/compIndustry/selectList",method:"GET",header:{Authorization:"Bearer "+e.token},success:function(e){uni.hideLoading(),t.log(e.data),i.arr=e.data.content},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},clickCloseMask:function(){this.$emit("CloseMask","0"),t.log("触发关闭所属行业")},clickReset:function(){t.log("出发取消按钮"),this.clickCloseMask()},clickConfirm:function(){t.log("触发了保存按钮"),""==this.name&&(this.name=this.arr[0].typeName,this.id=this.arr[0].id),this.$emit("clickConfirm",{name:this.name,id:this.id}),this.clickCloseMask()}}};i.default=a}).call(this,e("5a52")["default"])},1320:function(t,i,e){"use strict";(function(t){var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(e("cebc")),o=a(e("e846")),n=a(e("e7b3")),d=a(e("2ec6")),r=a(e("2de2")),l=a(e("5a67")),c=e("2f62"),g={name:"editBasicInfor",components:{wInput:n.default,imageUploadOne:d.default,quickBtn:r.default,navigation:l.default,industry:o.default},data:function(){return{text:"",touxiang:"",touxiang1:this.Static+"images/business/home/extendManageList/touxiang.png",lineRightArrow:this.Static+"images/common/line-right-arrow.png",xing:this.Static+"images/common/xing.png",logo:"",logos:"",logoo:"",logoos:"",placker:"",hangye:0,industryss:"",timeOutEvent:0,previewImgShow:!1,ImgSrc:"",action:"http://img01.iambuyer.com/imgup/upLoad/fileUpload",files:[],files2:[],industryShow:!1,addressDetail:"",idStringAddress:"",addrPcode:"",addrCcode:"",addrAcode:"",industryDataCkeck:{compTypePcodeStr:"",compTypePcode:0},listData:{imageData:[],serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload"},UserData:{passWord:null,compLogo:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKB0hUYibokE4jkgia3wClLMz8l20TYbdX0uibziavftrg0ylDne3W9N7mIQI7SRtibpmic5p0KP1WK7ONw/132",wechatQrImg:"https://img04.iambuyer.com/imgup/upload/images/2019/07/15/PM1sECJS2n1G7n5sCDwcQWlB8kNlPrHoEYnQPJ79b4I7LpNNxN0v9Eb46SDBm4fk.jpeg",companyName:"菅双鹤",nickname:"菅双鹤",companyIntro:"",addressDetail:"肉丸无语",contactTelphone:"13146296160",contactEmail:"274088960@qq.com",contactMan:"偶遇语音",userPhone:"13146296160",userEmail:"11@qq.com",money:2718,beyondUser:"91.00%",wxId:"12555",content:"购物与物无忤",headImg:"https://img04.iambuyer.com/imgup/upload/images/2019/06/18/M2Mhcjjc2Bu5b6jatbBmSPsyLgfdTRBTuT88rYVpgQmcsOAOjxlFNfgZ20B5FbyUoXe6nT.jpeg",toBCount:9,toCCount:11,companyAccountVo:{money:0,frozenMoney:null,consMoney:0,putInCount:0,authState:"2",toDayRechMoney:null,yesterdayConsMoney:null},compTypePcode:120,compTypeCode:0,compTypePcodeStr:"计算机服务和软件业",compTypeCodeStr:null,provinceCode:"110000",cityCode:"110100",areaCode:"110101",provinceCodeStr:"北京",cityCodeStr:"北京市",areaCodeStr:"东城区",vipState:"1",cydVipLv:null},imgData:{}}},created:function(){},onLoad:function(){uni.setNavigationBarTitle({title:"公司信息"})},computed:(0,s.default)({},(0,c.mapGetters)(["PERSONCENTER","IMGDATA","QUICKNAVCO","GET_MY"])),watch:{PERSONCENTER:{handler:function(t,i){this.UserData=t.basicInforEdit,this.addressDetail=t.info.idStringAddress,this.industryShow=t.industry.industryShow,this.industryDataCkeck=t.industry.industryCheck,this.addrPcode=t.info.addrPcode,this.addrCcode=t.info.addrCcode,this.addrAcode=t.info.addrAcode},deep:!0},GET_MY:{handler:function(i,e){t.log(i,e,"header----list"),this.Effec=i.Effective,void 0!==i.clickCity.idString&&(this.placker=i.clickCity.idString,this.regPcode=i.clickCity.addrPcode,this.regCcode=i.clickCity.addrCcode,this.regAcode=i.clickCity.addrTcode,this.regAddr=i.clickCity.idaddress)},deep:!0}},mounted:function(){},methods:(0,s.default)({},(0,c.mapMutations)({setAddShow:"setAddShow",setIdStringAddress:"setIdStringAddress",setIdString:"setIdString",setAddrPcode:"setAddrPcode",setAddrCcode:"setAddrCcode",setAddrAcode:"setAddrAcode",setIdAddress:"setIdAddress",setLoadingShow:"setLoadingShow",setLoadingText:"setLoadingText",setIndustryShow:"setIndustryShow",setIndustryData:"setIndustryData",setIndustryCheck:"setIndustryCheck",setBasicInforEdit:"setBasicInforEdit",setCompLogo:"setCompLogo",setWechatQrImg:"setWechatQrImg"}),{CloseMask:function(t){this.hangye=t},clickConfirm:function(i){t.log(i),this.industryss=i.name,this.id=i.id},area:function(){t.log("to地址选择"),uni.navigateTo({url:"/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/industryAddress/address"})},clickIndustry:function(){t.log("触发所属行业按钮"),this.hangye=1,t.log(this.hangye)},clickSaveBasicInfor:function(){var i=this;if(""==this.logo&&""==this.GET_MY.headers.compLogo)return uni.showToast({title:"请选择企业logo",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.headers.companyName)return uni.showToast({title:"请填写企业名称",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.headers.compTypePcodeStr&&""==this.industryss)return uni.showToast({title:"请选择所属行业",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.headers.addrStr&&""==this.placker)return uni.showToast({title:"请选择联系地址",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.headers.contactMan)return uni.showToast({title:"请输入联系人",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.headers.contactTelphone)return uni.showToast({title:"请输入联系电话",icon:"none",duration:1e3}),!1;if(!/^1[3456789]\d{9}$/.test(this.GET_MY.headers.contactTelphone))return uni.showToast({title:"手机号格式有误，请重输",icon:"none",duration:1e3}),!1;if(""!==this.GET_MY.headers.contactEmail&&!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.GET_MY.headers.contactEmail))return uni.showToast({title:"邮箱格式有误",icon:"none",duration:1e3}),!1;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));t.log(e.user.id);var a={compLogo:this.logo,companyName:this.GET_MY.headers.companyName,companyIntro:this.GET_MY.headers.companyIntro,compTypePcode:this.id,provinceCode:this.regPcode,cityCode:this.regCcode,areaCode:this.regAcode,addressDetail:this.regAddr,wechatQrImg:this.logoo,contactTelphone:this.GET_MY.headers.contactTelphone,contactEmail:this.GET_MY.headers.contactEmail,contactMan:this.GET_MY.headers.contactMan};uni.showLoading({title:"加载中"}),t.log(a),uni.request({url:this.api2+"/rest-rp/user/"+e.user.id,data:a,method:"POST",header:{Authorization:"Bearer "+e.token},success:function(e){uni.hideLoading(),t.log(e.data),i.logo?(i.GET_MY.headers.compLogo=i.logos,t.log(1)):(i.GET_MY.headers.compLogo=i.GET_MY.headers.compLogo,t.log(2)),""!==i.industryss&&(i.GET_MY.headers.compTypePcodeStr=i.industryss),""!==i.placker&&(i.GET_MY.headers.addressDetail=i.regAddr),i.logoo?i.GET_MY.headers.wechatQrImg=i.logoos:i.GET_MY.headers.wechatQrImg=i.GET_MY.headers.wechatQrImg,i.getmy()},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},getmy:function(){var i=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));t.log(e.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+e.user.id,method:"GET",header:{Authorization:"Bearer "+e.token},success:function(t){uni.hideLoading(),"202"===t.data.ret?(uni.removeStorageSync("landRegist"),uni.removeStorageSync("clickItems"),i.$store.commit("setHome",1),i.$store.commit("setLandRegist",0),uni.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),uni.getStorageSync("landRegist")||i.landRegistra()):(uni.navigateBack({}),i.list=t.data.content,i.$store.commit("setMy",i.list))},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},deleteImage:function(i){t.log(i,"删除图片"),this.logo=""},addImage:function(i){t.log(i,"添加图片"),i.allImages&&(this.logo=i.allImages[0].imgName,this.logos=i.allImages[0].imgUrl,t.log(this.logo))},deleteImages:function(i){t.log(i,"删除图片"),this.logoo=""},addImages:function(i){t.log(i,"添加图片"),i.allImages&&(this.logoo=i.allImages.imgName,this.logoos=i.allImages.imgUrl,t.log(this.logo))}})};i.default=g}).call(this,e("5a52")["default"])},"15a8":function(t,i,e){var a=e("5e92");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("0b10d814",a,!0,{sourceMap:!1,shadowMode:!1})},"25aa":function(t,i,e){var a=e("5a05");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("1daf40a8",a,!0,{sourceMap:!1,shadowMode:!1})},"2ec6":function(t,i,e){"use strict";e.r(i);var a=e("a747"),s=e("cad6");for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);e("4a8e");var n=e("2877"),d=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"485daf7e",null);i["default"]=d.exports},"3d8a":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"industry-content"},[e("div",{staticClass:"mask-popup",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickCloseMask.apply(void 0,arguments)}}}),e("div",{staticClass:"insBSP-box"},[e("div",{staticClass:"industry-box"},[e("div",{staticClass:"tian"}),e("div",{staticClass:"BSP-con"},t._l(t.arr,function(i,a){return e("div",{key:a,class:t.num==a?"changeColor":"",staticStyle:{color:"#2E2E30","font-size":"26upx",padding:"10upx 20upx 10upx 20upx",border:"2upx solid #E2E2E2",float:"left","margin-left":"20upx","margin-top":"10upx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.xuanzhong(a)}}},[t._v(t._s(i.typeName))])}),0)]),e("div",{staticClass:"BSP-button"},[e("div",{staticClass:"btn-I"},[e("div",{staticClass:"line"}),e("div",{staticClass:"btn-bsp"},[e("div",{staticClass:"reset-bsp-I left"},[e("div",{staticClass:"reset-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickReset.apply(void 0,arguments)}}},[e("p",{},[t._v("取消")])])]),e("div",{staticClass:"confirm-bsp-I right"},[e("div",{staticClass:"confirm-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickConfirm.apply(void 0,arguments)}}},[e("p",{},[t._v("保存")])])])])])])])])},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},"45cb":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".uni-textarea>uni-textarea[data-v-25cd755a]{margin-left:4%}.info[data-v-25cd755a]{position:absolute;bottom:0;right:0;font-size:%?24?%;color:#d2d2d2}.tian[data-v-25cd755a]{width:100%;height:%?88?%}.my-title[data-v-25cd755a]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-25cd755a]{width:5%;margin-left:%?38?%}.myproduct-title[data-v-25cd755a]{width:67%;height:100%;margin-left:%?120?%;line-height:%?90?%;float:left;text-align:center}.BI-text-right[data-v-25cd755a]{position:relative;width:100%;margin-top:%?36?%;margin-bottom:%?44?%}.BI-picker[data-v-25cd755a]{position:relative;font-family:PingFang-SC-Medium;font-size:%?28?%;color:#d2d2d2;overflow:hidden;text-overflow:clip;white-space:pre;word-break:keep-all;letter-spacing:0;padding:0;margin-top:%?36?%;margin-bottom:%?44?%;line-height:%?36?%;margin-left:%?24?%;text-align:right;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:right;margin-left:0}.BI-pickered[data-v-25cd755a]{color:#2e2e30!important}.Img-Upload[data-v-25cd755a]{width:%?120?%;height:%?80?%;position:absolute;right:%?28?%;top:%?-20?%}.BI-picker-Img[data-v-25cd755a]{width:%?80?%;height:%?80?%;position:absolute;right:%?28?%;top:%?-20?%}.mustFill[data-v-25cd755a]{position:absolute;left:0}.mustFill>uni-image[data-v-25cd755a]{position:relative;width:%?14?%;height:%?14?%}.uni-input-wrapper[data-v-25cd755a]{text-align:right}.BI-rightArrow[data-v-25cd755a]{position:absolute;width:%?24?%;height:%?24?%;right:0;top:%?6?%}.uni-input-placeholder[data-v-25cd755a]{color:#d2d2d2!important}.editBasicInfor-content[data-v-25cd755a]{position:relative;width:100%;background:#f9f9f9}.editBasicInfor[data-v-25cd755a]{position:relative;width:100%;background:#f9f9f9;padding-bottom:5vh;-webkit-overflow-scrolling:touch}.editBasicInfor-box[data-v-25cd755a]{position:relative;width:100%;margin-bottom:20vw}.topTips[data-v-25cd755a]{position:relative;width:100%;background:#f9f9f9;padding:0 4vw 0 4vw}.topTips>p[data-v-25cd755a]{position:relative;width:100%;font-family:PingFangSC-Light;font-size:3.2vw;color:#9b9b9b;line-height:8vw;text-align:center}.EBI-textArea[data-v-25cd755a]{position:relative;width:100%;background:#fff;padding:0 4vw 0 4vw}.textAarea-box[data-v-25cd755a]{position:relative;width:100%}.introduce2[data-v-25cd755a]{position:relative;width:96%;margin-left:4%}.MI-box[data-v-25cd755a]{position:relative;width:100%;padding:0 4vw 0 4vw;background:#fff}.MI-items[data-v-25cd755a]{position:relative;width:100%}.MI-left-EBI[data-v-25cd755a]{position:relative;width:37%;height:15vw;float:left}.MI-left-EBI>img[data-v-25cd755a]{position:relative;width:2vw;float:left;top:5.5vw;margin-right:1vw;left:0;display:inline-block}.MI-left-EBI-TextArea>p[data-v-25cd755a]{font-family:PingFangSC-Light;font-size:3.733vw;color:#2e2e30;padding-top:4vw;margin-left:4vw}.MI-left-EBI>p[data-v-25cd755a]{position:absolute;font-family:PingFangSC-Light;font-size:3.733vw;color:#2e2e30;line-height:15vw;margin-left:4vw}.MI-right[data-v-25cd755a]{position:relative;width:50%}.right-Box-MI[data-v-25cd755a]{position:relative;width:100%}.img-MI[data-v-25cd755a]{position:relative;width:90%}.EBI-img-MI[data-v-25cd755a]{width:100%!important}.img-MI .touxiang[data-v-25cd755a]{position:relative;width:100%;float:right}.imgTouXiang[data-v-25cd755a]{position:relative;width:10.66vw;height:10.66vw;margin-top:2.1vw}.imgKongText[data-v-25cd755a]{position:relative;width:100%;font-family:PingFang-SC-Medium;font-size:3.733vw;color:#d2d2d2;letter-spacing:0;text-align:right;line-height:15vw}.arrow-img-MI[data-v-25cd755a]{position:relative;width:10%}.arrow-img-MI>img[data-v-25cd755a]{position:relative;width:2vw;height:2vw;margin-top:6.5vw;float:right}.img[data-v-25cd755a]{width:%?15?%;height:%?15?%}.perInfoItemR[data-v-25cd755a]{width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-family:PingFangSC-Regular;font-size:3.733vw;color:#3c3c3f;letter-spacing:0;\n\t/* height: 15vw; */padding:5vw 0;\n\t/* margin: 5vw 0; */line-height:5vw;text-align:right;margin-right:1vw;float:left}.intro-MI[data-v-25cd755a]{font-family:PingFangSC-Regular;font-size:3.733vw;color:#d2d2d2;letter-spacing:0;text-align:right;line-height:15vw}.intro-MI2[data-v-25cd755a]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-family:PingFangSC-Regular;font-size:3.733vw;color:#3c3c3f;letter-spacing:0;text-align:right;line-height:15vw}.BIF-bottom[data-v-25cd755a]{position:fixed;width:100%;height:%?113?%;\n\t/* padding: 1.5vw 4vw 1.5vw 4vw; */bottom:0;z-index:105;background:#fff}.BIF-btn[data-v-25cd755a]{position:relative;width:90%;height:80%;background:#02c2a2;margin:%?10?% auto auto auto;border-radius:2px;font-family:PingFangSC-Regular;font-size:3.733vw;color:#fff;text-align:center;letter-spacing:0;line-height:%?88?%}.MI-hao[data-v-25cd755a]{width:63%;height:%?106?%;\n\t/* background:red; */float:left;text-align:right;line-height:%?116?%}.MII-image[data-v-25cd755a]{width:%?14?%;height:100%;position:absolute;right:0;top:0;\n\t}.MII-image>uni-image[data-v-25cd755a]{width:100%;height:%?14?%}.MII-nih[data-v-25cd755a]{margin-right:%?34?%;color:#d2d2d2;width:91%;height:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\n\t}",""])},"4a8e":function(t,i,e){"use strict";var a=e("15a8"),s=e.n(a);s.a},"596d":function(t,i,e){"use strict";var a=e("25aa"),s=e.n(a);s.a},"5a05":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".industry-content[data-v-2ecc1f84]{position:fixed;width:100vw;height:100vh;z-index:108;top:0}.tian[data-v-2ecc1f84]{width:100%;height:%?88?%}.mask-popup[data-v-2ecc1f84]{position:relative;height:100vh;width:100%;background:rgba(19,9,9,.59)}.insBSP-box[data-v-2ecc1f84]{position:absolute;top:0;right:0;z-index:104}.industry-box[data-v-2ecc1f84]{position:relative;width:86.933vw;float:right;background:#fff;height:100vh;overflow:scroll;padding-bottom:15vw;-webkit-overflow-scrolling:touch}.content-I[data-v-2ecc1f84]{position:relative;width:100%;padding:5vw 1vw 5vw 4vw}.items-I[data-v-2ecc1f84]{position:relative;width:100%;margin-bottom:5vw}.title-I[data-v-2ecc1f84]{position:relative;width:100%;margin-bottom:2vw}.title-I>p[data-v-2ecc1f84]{font-family:PingFang-SC-Medium;font-size:3.733vw;color:#2e2e30;letter-spacing:0;line-height:9vw}.cont-I[data-v-2ecc1f84]{position:relative;width:100%}.cont-items-I[data-v-2ecc1f84]{position:relative;width:33.3333%}.cont-box-I[data-v-2ecc1f84]{position:relative;width:90%;margin-bottom:2vw}.cont-box-I>p[data-v-2ecc1f84]{position:relative;width:100%;font-family:PingFang-SC-Medium;font-size:3.5vw;color:#2e2e30;letter-spacing:0;line-height:7vw;background:#fff;border:1px solid #e2e2e2;border-radius:2px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.checkedItems[data-v-2ecc1f84]{background:rgba(18,243,205,.25)!important;color:#02c2a2!important;border:1px solid #02c2a2!important}.BSP-button[data-v-2ecc1f84]{position:fixed;bottom:0;width:100%}.btn-I[data-v-2ecc1f84]{position:relative;bottom:0;width:86.933vw;background:#fff}.btn-bsp[data-v-2ecc1f84]{position:relative;width:100%;padding:0 0 0 5vw}.reset-bsp-I[data-v-2ecc1f84]{position:relative;width:50%}.reset-box[data-v-2ecc1f84]{position:relative;width:100%}.reset-box>p[data-v-2ecc1f84]{position:relative;font-family:PingFangSC-Regular;font-size:3.733vw;color:#2e2e30;letter-spacing:0;line-height:10vw;text-align:center}.confirm-bsp-I[data-v-2ecc1f84]{position:relative;width:50%}.confirm-box[data-v-2ecc1f84]{position:relative;width:100%;background:#02c2a2}.confirm-box>p[data-v-2ecc1f84]{position:relative;font-family:PingFangSC-Regular;font-size:3.733vw;color:#fff;letter-spacing:0;line-height:10vw;text-align:center}.BSP-con[data-v-2ecc1f84]{width:95%;margin:%?40?% auto}.BSP-con-head[data-v-2ecc1f84]{font-size:%?28?%;color:#2e2e30;margin-left:%?20?%}.changeColor[data-v-2ecc1f84]{color:#fff!important;background:#02c2a2!important}",""])},"5e92":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".imageUploadContainer[data-v-485daf7e]{float:right}.dragging[data-v-485daf7e]{-webkit-transform:scale(1.2);transform:scale(1.2)}.imageUploadList[data-v-485daf7e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.imageItem[data-v-485daf7e],.imageUpload[data-v-485daf7e]{width:%?80?%;height:%?80?%;border-radius:50%\n}.imageUploads[data-v-485daf7e]{width:%?300?%;height:%?80?%;border-radius:50%\n}.imageDel[data-v-485daf7e]{position:relative;left:%?60?%;bottom:%?110?%;background-color:rgba(0,0,0,.5);width:%?36?%;text-align:center;line-height:%?34?%;border-radius:50%;color:#fff;font-size:%?30?%;padding-bottom:%?2?%}.imageDels[data-v-485daf7e]{position:relative;left:%?194?%;bottom:%?240?%;background-color:rgba(0,0,0,.5);width:%?36?%;text-align:center;line-height:%?34?%;border-radius:50%;color:#fff;font-size:%?30?%;padding-bottom:%?2?%}.imageItem uni-image[data-v-485daf7e],.moveImage[data-v-485daf7e]{width:%?80?%;height:%?80?%;border-radius:%?8?%}.imageUpload[data-v-485daf7e]{line-height:%?86?%;text-align:center;font-size:%?150?%;color:#d9d9d9;border:1px solid #d9d9d9;border-radius:%?8?%;opacity:0;z-index:50}.imageUploads[data-v-485daf7e]{line-height:%?86?%;text-align:center;font-size:%?150?%;color:#d9d9d9;border:1px solid #d9d9d9;border-radius:%?8?%;opacity:0;z-index:50}.moveImage[data-v-485daf7e]{position:absolute}",""])},7135:function(t,i,e){"use strict";e.r(i);var a=e("fc18"),s=e("7a95");for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);e("8688");var n=e("2877"),d=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"25cd755a",null);i["default"]=d.exports},"7a95":function(t,i,e){"use strict";e.r(i);var a=e("1320"),s=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=s.a},8688:function(t,i,e){"use strict";var a=e("0c16"),s=e.n(a);s.a},a747:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"imageUploadContainer"},[e("v-uni-view",{staticClass:"imageUploadList"},[t._l(t.imageList,function(i,a){return 0==t.images?e("v-uni-view",{key:a,staticClass:"imageItem"},[e("v-uni-image",{class:{dragging:t.isDragging(a)},attrs:{src:i,draggable:"true","data-index":a},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.start.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.move.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.stop.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.previewImage.apply(void 0,arguments)}}}),t.isShowDel?e("v-uni-view",{staticClass:"imageDel",attrs:{"data-index":a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteImage.apply(void 0,arguments)}}},[t._v("x")]):t._e()],1):t._e()}),t._l(t.imageList,function(i,a){return 2==t.images?e("v-uni-view",{key:a,staticClass:"imageItem"},[e("v-uni-image",{class:{dragging:t.isDragging(a)},staticStyle:{width:"476upx",height:"208upx","margin-left":"-260upx","margin-top":"-82upx"},attrs:{src:i,draggable:"true","data-index":a},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.start.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.move.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.stop.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.previewImage.apply(void 0,arguments)}}}),t.isShowDel?e("v-uni-view",{staticClass:"imageDels",attrs:{"data-index":a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteImage.apply(void 0,arguments)}}},[t._v("x")]):t._e()],1):t._e()}),t._l(t.imageList,function(i,a){return 1==t.images?e("v-uni-view",{key:a,staticClass:"imageItem"},[e("v-uni-image",{class:{dragging:t.isDragging(a)},staticStyle:{"border-radius":"50%"},attrs:{src:i,draggable:"true","data-index":a},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.start.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.move.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.stop.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.previewImage.apply(void 0,arguments)}}}),t.isShowDel?e("v-uni-view",{staticClass:"imageDel",attrs:{"data-index":a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteImage.apply(void 0,arguments)}}},[t._v("x")]):t._e()],1):t._e()}),t.isShowAdd&&2!==t.images?e("v-uni-view",{staticClass:"imageUpload",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectImage.apply(void 0,arguments)}}},[t._v("+")]):t._e(),t.isShowAdd&&2==t.images?e("v-uni-view",{staticClass:"imageUploads",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectImage.apply(void 0,arguments)}}},[t._v("+")]):t._e()],2),t.showMoveImage?e("v-uni-image",{staticClass:"moveImage",style:{left:t.posMoveImageLeft,top:t.posMoveImageTop},attrs:{src:t.moveImagePath}}):t._e()],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},c9f2:function(t,i,e){"use strict";e.r(i);var a=e("0c22"),s=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=s.a},cad6:function(t,i,e){"use strict";e.r(i);var a=e("f44b"),s=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=s.a},e846:function(t,i,e){"use strict";e.r(i);var a=e("3d8a"),s=e("c9f2");for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);e("596d");var n=e("2877"),d=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"2ecc1f84",null);i["default"]=d.exports},f44b:function(t,i,e){"use strict";(function(t){var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(e("795b"));e("ac6a"),e("5df3");var o,n=a(e("03eb"));t.log("引入H5图片压缩组件");var d={name:"robby-image-upload",props:["value","enableDel","enableAdd","enableDrag","serverUrl","formData","limit","fileKeyName","showUploadProgress","serverUrlDeleteImage","images"],data:function(){return{imageBasePos:{x0:-1,y0:-1,w:-1,h:-1},showMoveImage:!1,moveImagePath:"",moveLeft:0,moveTop:0,deltaLeft:0,deltaTop:0,dragIndex:null,targetImageIndex:null,imageList:[]}},onLoad:function(){this.imageList=this.value},computed:{posMoveImageLeft:function(){return this.moveLeft+"px"},posMoveImageTop:function(){return this.moveTop+"px"},isShowDel:function(){return!1!==this.enableDel},isShowAdd:function(){return!1!==this.enableAdd&&!(this.limit&&this.imageList.length>=this.limit)},isDragable:function(){return!1!==this.enableDrag}},methods:{selectImage:function(){o=this,o.imageList||(o.imageList=[]),t.log(o.serverUrl,"表示图片要上传到服务器"),uni.chooseImage({count:o.limit?o.limit-o.imageList.length:999,success:function(i){t.log(i,"上传图片");var e=i.tempFilePaths;if(o.limit){var a=o.limit-o.imageList.length;if(a<e.length)return void uni.showToast({title:"图片总数限制为"+o.limit+"张，当前还可以选"+a+"张",icon:"none",mask:!1,duration:2e3})}for(var d=function(i){var a=e[i];t.log("进入H5图片压缩"),(0,n.default)(a,{quality:.6}).then(function(i){t.log(i),a=i.base64,o.imageList.push(a)})},r=0;r<e.length;r++)d(r);if(o.serverUrl){var l=o.imageList.length-e.length,c=[],g=(o.fileKeyName&&o.fileKeyName,0),h=function(i){c.push(new s.default(function(a,s){var n=l+i;uni.uploadFile({url:o.serverUrl,fileType:"image",formData:o.formData,filePath:e[i],name:"file",success:function(i){if(200===i.statusCode){t.log(JSON.parse(i.data),"上传成功");var d={imgUrl:JSON.parse(i.data).httpUrl,imgName:JSON.parse(i.data).name};o.imageList[n]=d,t.log(o.imageList,"_self.imageList"),g++,o.showUploadProgress&&uni.showToast({title:"上传进度："+g+"/"+e.length,icon:"none",mask:!1,duration:1e3}),t.log("success to upload image: "+i.data),a("success to upload image:"+n)}else t.log("fail to upload image:"+i.data),s("failt to upload image:"+n)},fail:function(i){t.log("fail to upload image:"+i),s("failt to upload image:"+n)}})}))};for(r=0;r<e.length;r++)h(r);s.default.all(c).then(function(t){o.$emit("add",{currentImages:e,allImages:o.imageList}),o.$emit("input",o.imageList)})}else o.$emit("add",{currentImages:e,allImages:o.imageList}),o.$emit("input",o.imageList)}})},deleteImage:function(i){var e=i.currentTarget.dataset.index,a=this.imageList[e];this.imageList.splice(e,1),this.serverUrlDeleteImage&&uni.request({url:this.serverUrlDeleteImage,method:"GET",data:{imagePath:a},success:function(i){t.log(i.data)}}),this.$emit("delete",{currentImage:a,allImages:this.imageList}),this.$emit("input",this.imageList)},previewImage:function(i){var e=i.currentTarget.dataset.index;t.log(this.imageList,"预览的img");var a=[];this.imageList.map(function(t,i){a.push(t.imgUrl)}),uni.previewImage({current:a[e],indicator:"number",loop:"true",urls:a})},initImageBasePos:function(){var t=.024;o=this,uni.getSystemInfo({success:function(i){var e=i.screenWidth,a=Math.ceil(t*e),s=Math.ceil((e-2*a)/4);o.imageBasePos.x0=a,o.imageBasePos.w=s,o.imageBasePos.h=s}})},findOverlapImage:function(t,i){var e=Math.floor((t-this.imageBasePos.x0)/this.imageBasePos.w),a=Math.floor((i-this.imageBasePos.y0)/this.imageBasePos.h),s=4*a+e;return s},isDragging:function(t){return this.dragIndex===t},start:function(i){if(t.log(this.isDragable),this.isDragable){if(this.dragIndex=i.currentTarget.dataset.index,this.moveImagePath=this.imageList[this.dragIndex],this.showMoveImage=!0,-1===this.imageBasePos.y0){this.initImageBasePos();var e=Math.floor(this.dragIndex/4)*this.imageBasePos.h,a=i.currentTarget.offsetTop;this.imageBasePos.y0=a-e}this.moveLeft=i.target.offsetLeft,this.moveTop=i.target.offsetTop}},move:function(t){if(this.isDragable){var i=t.touches[0];this.targetImageIndex=this.findOverlapImage(i.clientX,i.clientY),0===this.deltaLeft&&(this.deltaLeft=i.clientX-this.moveLeft,this.deltaTop=i.clientY-this.moveTop),this.moveLeft=i.clientX-this.deltaLeft,this.moveTop=i.clientY-this.deltaTop}},stop:function(t){this.isDragable&&(null!==this.dragIndex&&null!==this.targetImageIndex&&(this.targetImageIndex<0&&(this.targetImageIndex=0),this.targetImageIndex>=this.imageList.length&&(this.targetImageIndex=this.imageList.length-1),this.dragIndex!==this.targetImageIndex&&(this.imageList[this.dragIndex]=this.imageList[this.targetImageIndex],this.imageList[this.targetImageIndex]=this.moveImagePath)),this.dragIndex=null,this.targetImageIndex=null,this.deltaLeft=0,this.deltaTop=0,this.showMoveImage=!1,this.$emit("input",this.imageList))}}};i.default=d}).call(this,e("5a52")["default"])},fc18:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"editBasicInfor-content"},[e("v-uni-view",{staticClass:"my-title"},[e("div",{staticClass:"quickBtn-Fd left"},[e("quickBtn")],1),e("v-uni-view",{staticClass:"myproduct-title"},[t._v("编辑基本信息")])],1),e("v-uni-view",{staticClass:"tian"}),e("div",{staticClass:"editBasicInfor"},[e("div",{staticClass:"editBasicInfor-box"},[e("div",{staticClass:"MI-box M-Bttom"},[e("div",{staticClass:"MI-items"},[e("div",{staticClass:"MI-left-EBI left"},[e("img",{staticClass:"img",attrs:{src:t.xing,alt:""}}),e("p",{},[t._v("企业logo")])]),e("div",{staticClass:"MI-right right"},[e("div",{staticClass:"right-Box-MI"},[e("div",{staticClass:"img-MI left"},[e("v-uni-view",{staticClass:"BI-text-right"},[t.logo?t._e():e("v-uni-image",{staticClass:"BI-picker-Img",attrs:{src:t.GET_MY.headers.compLogo}}),e("v-uni-view",{staticClass:"Img-logo"},[e("v-uni-view",{staticClass:"Img-Upload"},[e("imageUploadOne",{attrs:{"server-url":t.listData.serverUrl,limit:"1",images:0},on:{delete:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteImage.apply(void 0,arguments)},add:function(i){arguments[0]=i=t.$handleEvent(i),t.addImage.apply(void 0,arguments)}},model:{value:t.listData.imageData,callback:function(i){t.$set(t.listData,"imageData",i)},expression:"listData.imageData"}})],1)],1)],1)],1),e("div",{staticClass:"arrow-img-MI left"},[e("img",{staticClass:"right",attrs:{src:t.lineRightArrow,alt:""}})])])]),e("div",{staticClass:"clear"}),e("div",{staticClass:"line"})]),e("div",{staticClass:"MI-items"},[e("div",{staticClass:"MI-left-EBI left"},[e("img",{staticClass:"img",attrs:{src:t.xing,alt:""}}),e("p",{},[t._v("企业名称")])]),e("div",{staticClass:"MI-right right"},[e("div",{staticClass:"right-Box-MI"},[e("div",{staticClass:"img-MI EBI-img-MI left"},[e("v-uni-view",{staticClass:"BI-text-right"},[e("wInput",{attrs:{placeholder:"点击填写",maxlength:"18"},model:{value:t.GET_MY.headers.companyName,callback:function(i){t.$set(t.GET_MY.headers,"companyName",i)},expression:"GET_MY.headers.companyName"}})],1)],1),e("div",{staticClass:"arrow-img-MI left"})])]),e("div",{staticClass:"clear"}),e("div",{staticClass:"line"})])]),e("div",{staticClass:"EBI-textArea M-Bttom"},[t._m(0),e("div",{staticClass:"textAarea-box"},[e("v-uni-view",{staticClass:"uni-textarea"},[e("v-uni-textarea",{attrs:{"placeholder-style":"",maxlength:"300",placeholder:"请简单描述您的企业"},model:{value:t.GET_MY.headers.companyIntro,callback:function(i){t.$set(t.GET_MY.headers,"companyIntro",i)},expression:"GET_MY.headers.companyIntro"}}),e("v-uni-view",{staticClass:"info"},[t._v(t._s(t.GET_MY.headers.companyIntro.length)+"/300")])],1)],1)]),e("div",{staticClass:"MI-box"},[e("div",{staticClass:"MI-items"},[e("div",{staticClass:"MI-left-EBI left"},[e("img",{staticClass:"img",attrs:{src:t.xing,alt:""}}),e("p",{},[t._v("所属行业")])]),e("div",{staticClass:"MI-hao",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickIndustry.apply(void 0,arguments)}}},[""==t.industryss&&""==t.GET_MY.headers.compTypePcodeStr?e("div",{staticClass:"MII-nih"},[t._v("请输入")]):t._e(),""!==t.GET_MY.headers.compTypePcodeStr&&""==t.industryss?e("div",{staticClass:"MII-nih",staticStyle:{color:"black"}},[t._v(t._s(t.GET_MY.headers.compTypePcodeStr))]):t._e(),""!=t.industryss?e("div",{staticClass:"MII-nih",staticStyle:{color:"black"}},[t._v(t._s(t.industryss))]):t._e(),e("div",{staticClass:"MII-image"},[e("v-uni-image",{attrs:{src:t.lineRightArrow}})],1)]),e("div",{staticClass:"clear"}),e("div",{staticClass:"line"})]),e("div",{staticClass:"MI-items"},[e("div",{staticClass:"MI-left-EBI left"},[e("img",{staticClass:"img",attrs:{src:t.xing,alt:""}}),e("p",{},[t._v("联系地址")])]),e("div",{staticClass:"MI-hao",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.area()}}},[""==t.placker&&""==t.GET_MY.headers.addrStr?e("div",{staticClass:"MII-nih"},[t._v("请选择")]):t._e(),""!==t.GET_MY.headers.addrStr&&""==t.placker?e("div",{staticClass:"MII-nih",staticStyle:{color:"black"}},[t._v(t._s(t.GET_MY.headers.addrStr))]):t._e(),""!=t.placker?e("div",{staticClass:"MII-nih",staticStyle:{color:"black"}},[t._v(t._s(t.placker))]):t._e(),e("div",{staticClass:"MII-image"},[e("v-uni-image",{attrs:{src:t.lineRightArrow}})],1)]),e("div",{staticClass:"clear"}),e("div",{staticClass:"line"})]),e("div",{staticClass:"MI-items"},[t._m(1),e("div",{staticClass:"MI-right right"},[e("div",{staticClass:"right-Box-MI"},[e("div",{staticClass:"img-MI left"},[e("v-uni-view",{staticClass:"BI-text-right"},[t.logoo?t._e():e("v-uni-image",{staticClass:"BI-picker-Img",attrs:{src:t.GET_MY.headers.wechatQrImg}}),e("v-uni-view",{staticClass:"Img-logo"},[e("v-uni-view",{staticClass:"Img-Upload"},[e("imageUploadOne",{attrs:{"server-url":t.listData.serverUrl,limit:"1",images:0},on:{delete:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteImages.apply(void 0,arguments)},add:function(i){arguments[0]=i=t.$handleEvent(i),t.addImages.apply(void 0,arguments)}},model:{value:t.listData.imageData,callback:function(i){t.$set(t.listData,"imageData",i)},expression:"listData.imageData"}})],1)],1)],1)],1),e("div",{staticClass:"arrow-img-MI left"},[e("img",{staticClass:"right",attrs:{src:t.lineRightArrow,alt:""}})])])]),e("div",{staticClass:"clear"}),e("div",{staticClass:"line"})])]),t._m(2),e("div",{staticClass:"MI-box M-Bttom"},[e("div",{staticClass:"MI-items"},[e("div",{staticClass:"MI-left-EBI left"},[e("img",{staticClass:"img",attrs:{src:t.xing,alt:""}}),e("p",{},[t._v("联系人")])]),e("div",{staticClass:"MI-right right"},[e("div",{staticClass:"right-Box-MI"},[e("div",{staticClass:"img-MI EBI-img-MI left"},[e("v-uni-view",{staticClass:"BI-text-right"},[e("wInput",{attrs:{placeholder:"点击填写"},model:{value:t.GET_MY.headers.contactMan,callback:function(i){t.$set(t.GET_MY.headers,"contactMan",i)},expression:"GET_MY.headers.contactMan"}})],1)],1),e("div",{staticClass:"arrow-img-MI left"})])]),e("div",{staticClass:"clear"}),e("div",{staticClass:"line"})]),e("div",{staticClass:"MI-items"},[e("div",{staticClass:"MI-left-EBI left"},[e("img",{staticClass:"img",attrs:{src:t.xing,alt:""}}),e("p",{},[t._v("联系电话")])]),e("div",{staticClass:"MI-right right"},[e("div",{staticClass:"right-Box-MI"},[e("div",{staticClass:"img-MI EBI-img-MI left"},[e("v-uni-view",{staticClass:"BI-text-right"},[e("wInput",{attrs:{placeholder:"点击填写",maxlength:"11"},model:{value:t.GET_MY.headers.contactTelphone,callback:function(i){t.$set(t.GET_MY.headers,"contactTelphone",i)},expression:"GET_MY.headers.contactTelphone"}})],1)],1),e("div",{staticClass:"arrow-img-MI left"})])]),e("div",{staticClass:"clear"}),e("div",{staticClass:"line"})]),e("div",{staticClass:"MI-items"},[t._m(3),e("div",{staticClass:"MI-right right"},[e("div",{staticClass:"right-Box-MI"},[e("div",{staticClass:"img-MI EBI-img-MI left"},[e("v-uni-view",{staticClass:"BI-text-right"},[e("wInput",{attrs:{placeholder:"点击填写"},model:{value:t.GET_MY.headers.contactEmail,callback:function(i){t.$set(t.GET_MY.headers,"contactEmail",i)},expression:"GET_MY.headers.contactEmail"}})],1)],1),e("div",{staticClass:"arrow-img-MI left"})])]),e("div",{staticClass:"clear"}),e("div",{staticClass:"line"})])])])]),e("div",{staticClass:"BIF-bottom"},[e("div",{staticClass:"BIF-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickSaveBasicInfor.apply(void 0,arguments)}}},[t._v("保存")])]),t.QUICKNAVCO.show?e("navigation"):t._e(),1==t.hangye?e("industry",{attrs:{data:t.industryss},on:{CloseMask:function(i){arguments[0]=i=t.$handleEvent(i),t.CloseMask.apply(void 0,arguments)},clickConfirm:function(i){arguments[0]=i=t.$handleEvent(i),t.clickConfirm.apply(void 0,arguments)}}}):t._e()],1)},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"MI-left-EBI-TextArea"},[e("p",{},[t._v("企业简介")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"MI-left-EBI left"},[e("p",{},[t._v("微信公众号二维码")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"topTips"},[e("p",{staticClass:"T-left"},[t._v("上传官方微信公众号二维码，方便更多用户关注您")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"MI-left-EBI left"},[e("p",{},[t._v("联系邮箱")])])}];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})}}]);