(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-createBusiness-templateFinish-templateFinishShare"],{"0524":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".QRcode[data-v-6e8190be]{width:100%;height:100%;margin-top:%?40?%}.QRcode-imj[data-v-6e8190be]{width:100%;min-height:%?508?%}.swiper-box[data-v-6e8190be]{height:%?508?%}.swiper-slide[data-v-6e8190be]{width:%?360?%;height:%?508?%;\n\t/* margin-left: 30%; */background:#fff}.swiper-slide>uni-image[data-v-6e8190be]{width:100%;height:%?360?%;\n\t/* text-align: center;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tz-index: 103; */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#c8c7cc;\n\t/* width: 100vw;\n\th */eight:100vh}.saveBtn[data-v-6e8190be]{position:relative;width:100%;margin:%?40?% 0}.saveBtn-files[data-v-6e8190be]{position:relative;width:100%;margin:%?40?% 0}.save-box-fiels[data-v-6e8190be]{font-family:PingFangSC-Regular;font-size:12px;color:#ff4d6a;letter-spacing:0;line-height:12px;text-align:center}.save-box[data-v-6e8190be]{position:relative;width:%?160?%;height:%?56?%;margin:auto;background:#2e2e30;border-radius:2px;border-radius:2px;font-family:PingFangSC-Regular;font-size:%?24?%;color:#fff;letter-spacing:0;text-align:center;line-height:%?56?%}.swiper-containerMask[data-v-6e8190be]{position:absolute;top:0;background:rgba(66,65,65,.29);width:100%;height:100%}.tips[data-v-6e8190be]{text-align:center;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:200px;z-index:103}",""])},"0fb5":function(t,e,i){"use strict";var a=i("c0f0"),n=i.n(a);n.a},1883:function(t,e,i){"use strict";i.r(e);var a=i("1d90"),n=i("3f6e");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("8983");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"4e51ae28",null);e["default"]=r.exports},"1d90":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rClipBoard-content"},[i("div",{staticClass:"rClipBoard"},[i("div",{staticClass:"title"},[t._v(t._s(t.clipBoardTitles))]),i("div",{staticClass:"copyText"},[t._v(t._s(t._f("url")(t.clipBoardLink)))]),i("div",{staticClass:"copyBtn"},[i("div",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickClipBoard.apply(void 0,arguments)}}},[t._v("+ 复制链接")])])]),"1"!==t.cbState?i("div",{staticClass:"swiper-containerMask"},[i("div",{staticClass:"tips"},[t._v("当前链接已失效！")])]):t._e()])},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},2074:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"QRcode"},[i("v-uni-view",{staticClass:"QRcode-imj"},[i("div",{ref:"slider",staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},[i("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.tabIndex,"next-margin":t.nextMargin},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.dataLists,function(e,a){return i("v-uni-swiper-item",{key:a,style:{marginLeft:t.marginLeft},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImageS(t.dataLists,a)}}},[i("v-uni-view",{staticClass:"swiper-item"},[i("div",{staticClass:"swiper-slide left"},[i("v-uni-image",{attrs:{src:e,mode:"widthFix"}})],1)])],1)}),1)],1),"1"!==t.qrState?i("div",{staticClass:"saveBtn-files"},[i("div",{staticClass:"save-box-fiels"},[t._v("二维码已失效")])]):t._e()])])],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},3598:function(t,e,i){"use strict";i.r(e);var a=i("2074"),n=i("d000");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("0fb5");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"6e8190be",null);e["default"]=r.exports},"3f6e":function(t,e,i){"use strict";i.r(e);var a=i("50f0"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},4848:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var n=a(i("cebc")),s=a(i("1331")),o=a(i("308c")),r=a(i("3598")),d=a(i("1883")),l=i("2f62"),c={data:function(){return{list:null,tapIndex:0,dataLists:null,btnList:[{type:0,tempType:0,name:"我的说明书",style:{}},{type:1,tempType:0,name:"继续创建",style:{}},{type:2,tempType:0,name:"立即投放",style:{backgroundImage:"linear-gradient(134deg, #15D49F 0%, #57D6CF 100%)",color:"#FFFFFF"}}]}},components:{quickBtn:s.default,navigation:o.default,rQrCode:r.default,rClipBoard:d.default},onLoad:function(t){this.dataLists=this.urlCrypto(t.urlParams,1)},created:function(){this.shareEachPage(),this.Statistics()},computed:(0,n.default)({},(0,l.mapGetters)(["GET_MY","QUICKNAVCO"])),methods:{tapRQrCode:function(t){},tapRClicpBoard:function(t){},Statistics:function(){var t=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+e.user.id,method:"GET",header:{Authorization:"Bearer "+e.token},success:function(e){"200"===e.data.ret?(uni.hideLoading(),t.list=e.data.content):"202"===e.data.ret?(uni.hideLoading(),uni.removeStorageSync("landRegist"),uni.removeStorageSync("clickItems"),t.$store.commit("setHome",1),t.$store.commit("setLandRegist",0),uni.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),uni.getStorageSync("landRegist")||t.landRegistra()):"400"===e.data.ret?(uni.hideLoading(),uni.showToast({title:e.data.msg,icon:"none",duration:1e3})):(uni.hideLoading(),uni.showToast({title:"网络开小差了，请稍后重试",icon:"none",duration:1e3}))},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}},goToPutInBusiness:function(){var t=this;if(2!==Number(this.list.authState))uni.showModal({title:"提示",content:"您的公司还未认证，无法进行广告投放，快去提交公司认证信息吧～",confirmColor:" #02C2A2",confirmText:"去认证",cancelText:"暂不认证",success:function(t){if(t.confirm){var e=1;uni.navigateTo({url:"/modules/myCompany/personAndCompany/companyInfor/companyInforEdit?id="+e})}else t.cancel}});else if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist")),i={page:String(1),userId:e.user.id};uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/putIn/selectInstList",data:i,method:"POST",header:{Authorization:"Bearer "+e.token},success:function(e){uni.hideLoading(),t.putInBusinessData=e.data.content.list,t.$store.commit("setputInBusinessData",t.putInBusinessData),200==e.data.ret?uni.navigateTo({url:"/modules/aLittle/putInBusiness/putInBusinessList/putInList/putInList?id="+t.dataLists.id}):"202"===e.data.ret?(uni.hideLoading(),uni.removeStorageSync("landRegist"),uni.removeStorageSync("clickItems"),t.$store.commit("setHome",1),t.$store.commit("setLandRegist",0),uni.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),uni.getStorageSync("landRegist")||t.landRegistra()):"400"===e.data.ret?(uni.hideLoading(),uni.showToast({title:e.data.msg,icon:"none",duration:1e3})):(uni.hideLoading(),uni.showToast({title:"网络开小差了，请稍后重试",icon:"none",duration:1e3}))},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}},btnItems:function(t){0===t.type?uni.navigateTo({url:"/modules/InstructionsPrice/myproduct/myproduct-shu"}):1===t.type?uni.navigateTo({url:"/modules/createBusiness/selectTemplate"}):2===t.type&&("1"===this.dataLists.instrucState?this.goToPutInBusiness():uni.showToast({title:"当前说明书未发布，只有发布的说明书才可以投放！",icon:"none",duration:1e3}))}}};e.default=c},"4c4e":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"QRcodelist-edit"},[i("v-uni-view",{staticClass:"product-book-title"},[i("div",{staticClass:"quickBtn-Fd left"},[i("quickBtn")],1),i("div",{staticClass:"search-Fd left"},[t._v("分享二维码(4/4)")]),t._e()]),i("div",{staticClass:"finishShare-content"},[i("div",{staticClass:"shareBox"},[i("div",{staticClass:"title"},[t._v("分享说明书")]),i("div",{staticClass:"qrShare-list"},[i("rQrCode",{attrs:{dataList:t.dataLists.qrList,longTapSave:!0,previewImage:!0,isSaveBtn:!0,nextMargin:"118px",marginLeft:"38%",tempType:"1",qrState:t.dataLists.instrucState},on:{"tap-RQrCode":function(e){arguments[0]=e=t.$handleEvent(e),t.tapRQrCode.apply(void 0,arguments)}}})],1),i("div",{staticClass:"linkShare"},[i("rClipBoard",{attrs:{clipBoardTitle:"【"+t.dataLists.instrucTitle+"】",clipBoardLink:t.dataLists.instrucUrl,cbState:t.dataLists.instrucState},on:{"tap-RClicpBoard":function(e){arguments[0]=e=t.$handleEvent(e),t.tapRClicpBoard.apply(void 0,arguments)}}})],1)]),i("div",{staticClass:"tempIntro"},[i("div",{staticClass:"introTitle"},[t._v("说明书介绍")]),i("div",{staticClass:"introBox"},[t._v(t._s(t.dataLists.instrucIntro))])]),i("div",{staticClass:"tempIntro"},[i("div",{staticClass:"introTitle"},[t._v("所属行业")]),i("div",{staticClass:"introBox"},[t._v(t._s(t.dataLists.instrucCategoryStr))])]),t.dataLists.keyList.length>0?i("div",{staticClass:"tempKey"},[i("div",{staticClass:"tempKeyTitle"},[t._v("说明书关键词")]),i("div",{staticClass:"tempKeyList"},t._l(t.dataLists.keyList,function(e,a){return i("div",{key:a,staticClass:"tempKeyItems"},[t._v(t._s(e))])}),0)]):t._e()]),i("div",{staticClass:"finishBtn-box"},[t._l(t.btnList,function(e,a){return i("div",{key:a,staticClass:"btnItems left"},[i("div",{staticClass:"btnText",style:e.style,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.btnItems(e)}}},[t._v(t._s(e.name))])])}),i("div",{staticClass:"clear"})],2),t.QUICKNAVCO.show?i("navigation"):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"50f0":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5");var a={data:function(){return{clipBoardTitles:this.clipBoardTitle,clipBoardLinks:this.clipBoardLink}},props:["clipBoardTitle","clipBoardLink","cbState"],mounted:function(){},filters:{url:function(t){return t.split("urlParams")[0]+"···"}},watch:{clipBoardTitle:{handler:function(e,i){t.log(e,i,"-----------clipBoardTitle----------"),this.clipBoardTitles=e},deep:!0},clipBoardLink:{handler:function(e,i){t.log(e,i,"-----------clipBoardLink----------"),this.clipBoardLinks=e},deep:!0}},created:function(){},methods:{clickClipBoard:function(){t.log("复制");var e=document.createElement("input");e.setAttribute("value",this.clipBoardLinks),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),uni.showToast({title:"复制成功！",duration:1e3})}}};e.default=a}).call(this,i("5a52")["default"])},7657:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6"),i("28a5");var a={data:function(){return{tabIndex:0,dataLists:this.dataList,longTaps:!0,qrCodeList:[this.Static+"publish/purchase/qrCode1.png",this.Static+"publish/purchase/qrCode2.png"]}},props:["dataList","previewImage","longTapSave","isSaveBtn","nextMargin","marginLeft","qrState"],mounted:function(){},watch:{dataList:{handler:function(e,i){t.log(e,i,"-----------dataList----------"),this.dataLists=e},deep:!0},qrState:{handler:function(e,i){t.log(e,i,"-----------dataList----------"),"1"!==e&&(this.dataLists=this.qrCodeList)},deep:!0}},created:function(){this.longTap&&(this.longTaps=this.longTap)},methods:{niiii:function(){t.log(this.data)},swiperChange:function(t){this.tabIndex=t.detail.current},previewImageS:function(e,i){if(t.log(e,"附件地址"),"1"===this.qrState&&!0===this.previewImage){var a=[];e.map(function(t,e){a.push(t)}),!0===this.longTapSave?uni.previewImage({current:a[i],indicator:"number",loop:"true",urls:a,longPressActions:{itemList:["保存图片"],success:function(e){t.log("选中了第"+(e.tapIndex+1)+"个按钮,第"+(e.index+1)+"张图片")},fail:function(e){t.log(e.errMsg)}}}):uni.previewImage({current:a[i],indicator:"number",loop:"true",urls:a})}},saveImage:function(){var e=this;!0===this.isSaveBtn&&this.dataLists.map(function(i,a){var n="https://"+i.split("://")[1];i=n,Number(a)===Number(e.tabIndex)&&uni.downloadFile({url:i,success:function(e){t.log(e,"||||||||||||||");var i=e.tempFilePath,a=document.createElement("a"),n=new MouseEvent("click");a.download="说明书二维码",a.href=i,a.dispatchEvent(n),uni.showToast({title:"保存成功",duration:1e3})}})})}}};e.default=a}).call(this,i("5a52")["default"])},"79fc":function(t,e,i){"use strict";var a=i("c978"),n=i.n(a);n.a},8164:function(t,e,i){var a=i("fae7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("eebd6b04",a,!0,{sourceMap:!1,shadowMode:!1})},8983:function(t,e,i){"use strict";var a=i("8164"),n=i.n(a);n.a},a276:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".finishBtn-box[data-v-1326d337]{position:fixed;bottom:0;width:100vw;height:%?100?%;background:#fff;box-shadow:0 -1px 0 0 #f5f5f5}.btnItems[data-v-1326d337]{position:relative;width:33.33333%}.btnText[data-v-1326d337]{font-family:PingFangSC-Regular;font-size:%?32?%;color:#2e2e30;letter-spacing:0;text-align:center;line-height:%?100?%}.finishShare-content[data-v-1326d337]{position:relative;padding:%?100?% 0;background:#fff;margin-bottom:10vh;padding-bottom:10vh}.title[data-v-1326d337]{font-family:PingFangSC-Medium;font-size:%?32?%;color:#2e2e30;letter-spacing:0;line-height:%?40?%;margin-top:%?40?%;padding:%?40?%}.qrShare-list[data-v-1326d337]{position:relative;width:%?690?%;margin:auto;background:#f9f9f9;padding:%?40?% 0}.linkShare[data-v-1326d337]{position:relative;width:%?690?%;margin:auto;background:#f9f9f9;margin-top:%?40?%;padding:%?10?%}.tempIntro[data-v-1326d337]{position:relative;width:%?690?%;margin:auto;margin-top:%?60?%}.introTitle[data-v-1326d337]{font-size:%?32?%;color:#2e2e30;letter-spacing:0;line-height:%?72?%;font-weight:700}.introBox[data-v-1326d337]{position:relative;width:100%;font-size:%?28?%;color:#9b9b9b;letter-spacing:0;line-height:%?40?%}.tempKey[data-v-1326d337]{position:relative;width:%?690?%;margin:auto;margin-top:%?40?%}.tempKeyTitle[data-v-1326d337]{font-size:%?32?%;color:#2e2e30;letter-spacing:0;line-height:%?72?%;font-weight:700}.tempKeyList[data-v-1326d337]{position:relative;width:100%}.tempKeyItems[data-v-1326d337]{background:#efefef;border-radius:%?8?%;border-radius:%?8?%;font-family:PingFangSC-Regular;font-size:%?28?%;color:#2e2e30;letter-spacing:0;text-align:center;line-height:%?72?%;padding:0 %?14?%;float:left;margin-right:2vw}.product-book-title[data-v-1326d337]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-1326d337]{width:5%;margin-left:%?38?%}.search-Fd[data-v-1326d337]{position:relative;width:30%;margin-left:36%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30;float:left}.tian[data-v-1326d337]{width:100%;height:%?88?%}.skipBtn[data-v-1326d337]{position:absolute;width:10%;right:%?20?%;top:0;line-height:%?88?%;font-size:%?28?%;color:#15d49f}.xing[data-v-1326d337]{position:relative;width:%?16?%;height:%?16?%;margin-left:%?10?%;top:%?-8?%}",""])},c0f0:function(t,e,i){var a=i("0524");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("b05ee552",a,!0,{sourceMap:!1,shadowMode:!1})},c978:function(t,e,i){var a=i("a276");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("afb10ac4",a,!0,{sourceMap:!1,shadowMode:!1})},d000:function(t,e,i){"use strict";i.r(e);var a=i("7657"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},e1f8:function(t,e,i){"use strict";i.r(e);var a=i("4848"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},fae7:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".rClipBoard-content[data-v-4e51ae28]{position:relative;width:100%}.rClipBoard[data-v-4e51ae28]{position:relative;width:100%}.title[data-v-4e51ae28]{font-family:PingFangSC-Regular;font-size:%?28?%;color:#2e2e30;letter-spacing:0;line-height:%?60?%}.copyText[data-v-4e51ae28]{font-family:PingFangSC-Regular;font-size:%?28?%;color:#2e2e30;letter-spacing:0;line-height:%?60?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;word-break:break-all;word-wrap:break-word}.copyBtn[data-v-4e51ae28]{position:relative;width:100%;height:%?60?%}.btn[data-v-4e51ae28]{position:relative;width:40%;font-family:PingFangSC-Regular;font-size:%?28?%;color:#02c2a2;letter-spacing:0;line-height:%?60?%;float:right;text-align:right}.swiper-containerMask[data-v-4e51ae28]{position:absolute;top:0;background:rgba(66,65,65,.29);width:100%;height:100%}.tips[data-v-4e51ae28]{text-align:center;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:200px;z-index:103}",""])},ff05:function(t,e,i){"use strict";i.r(e);var a=i("4c4e"),n=i("e1f8");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("79fc");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"1326d337",null);e["default"]=r.exports}}]);