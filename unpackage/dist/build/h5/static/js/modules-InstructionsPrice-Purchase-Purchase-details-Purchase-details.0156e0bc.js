(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-InstructionsPrice-Purchase-Purchase-details-Purchase-details"],{"0768":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"Purchase-details"},[a("v-uni-view",{staticClass:"my-title"},[a("div",{staticClass:"quickBtn-Fd left"},[a("quickBtn")],1),a("v-uni-view",{staticClass:"myproduct-title"},[t._v(t._s(t.i18n.product11))])],1),a("v-uni-view",{staticClass:"tian"}),a("v-uni-view",{staticClass:"Purchase-listA"},[1==t.list.purcState?a("v-uni-image",{staticClass:"wimage",attrs:{src:t.wa}}):t._e(),0==t.list.purcState?a("v-uni-image",{staticClass:"wimage",attrs:{src:t.wb}}):t._e(),2==t.list.purcState?a("v-uni-image",{staticClass:"wimage",attrs:{src:t.wc}}):t._e(),3==t.list.purcState?a("v-uni-image",{staticClass:"wimage",attrs:{src:t.wd}}):t._e(),4==t.list.purcState?a("v-uni-image",{staticClass:"wimage",attrs:{src:t.xia}}):t._e(),a("v-uni-view",{staticClass:"Purchase-listA-zi"},[t._v(t._s(t._f("ellipsis")(t.list.purcTitle)))]),a("v-uni-view",{staticClass:"Purchase-listA-edit"},[a("span",[t._v(t._s(t.list.purcSpec))]),0==t.list.purcInvo?a("span",[t._v("报价不含税")]):t._e(),1==t.list.purcInvo?a("span",[t._v("报价含税")]):t._e(),0==t.list.purcFrei?a("span",[t._v("报价不含运费")]):t._e(),1==t.list.purcFrei?a("span",[t._v("报价包含运费")]):t._e()]),a("v-uni-view",{staticClass:"Purchase-listA-time"},[a("v-uni-view",[t._v(t._s(t.list.createTimeStr))]),a("v-uni-view",[a("v-uni-image",{attrs:{src:t.Images}}),a("span",[t._v(t._s(t.list.purcCcodeStr))])],1),a("v-uni-view",[a("v-uni-image",{attrs:{src:t.Image}}),a("span",[a("span",[t._v(t._s(t.list.purcEndTimeStr))])])],1)],1),a("v-uni-view",{staticClass:"myproduct-list-edit",on:{click:function(i){i=t.$handleEvent(i),t.gotodataReport()}}},[a("v-uni-view",{staticClass:"product-book-BA one"},[a("v-uni-image",{attrs:{src:t.look}}),a("span",[t._v(t._s(t.list.infoCount))])],1),a("v-uni-view",{staticClass:"product-book-BA"},[a("v-uni-image",{attrs:{src:t.phone}}),a("span",[t._v(t._s(t.list.telCount))])],1),a("v-uni-view",{staticClass:"product-book-BA"},[a("v-uni-image",{attrs:{src:t.liu}}),a("span",[t._v(t._s(t.list.chatCount))])],1),a("v-uni-view",{staticClass:"product-book-BA"},[a("v-uni-image",{attrs:{src:t.zan}}),a("span",[t._v(t._s(t.list.likeCnt))])],1),a("v-uni-view",{staticClass:"product-book-BA shou"},[a("v-uni-image",{attrs:{src:t.shou}}),a("span",[t._v(t._s(t.list.followCount))])],1),a("v-uni-view",{staticClass:"product-book-BA right shou"},[a("v-uni-image",{attrs:{src:t.fen}}),a("span",[t._v(t._s(t.list.shareCnt))])],1)],1)],1),a("v-uni-view",{staticClass:"product-book-con"},[t._v("二维码")]),1==t.list.purcState||3==t.list.purcState?a("QRcode",{attrs:{data:this.qrImgs}}):t._e(),1!=t.list.purcState||3!=t.list.purcState?a("v-uni-view",{staticClass:"tishiyu"},[t._v("您的说明书未发布"),a("br"),t._v("还没有生成说明书二维码哦～")]):t._e(),a("v-uni-view",{staticClass:"QRcode-sub"},[0==t.list.purcState||2==t.list.purcState?a("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.asd()}}},[a("v-uni-view",[a("v-uni-image",{attrs:{src:t.bian}})],1),a("v-uni-view",[t._v("编辑")])],1):t._e(),1==t.list.purcState||3==t.list.purcState||4==t.list.purcState?a("v-uni-view",[a("v-uni-view",{staticClass:"bei"},[a("v-uni-image",{attrs:{src:t.bian2}})],1),a("v-uni-view",{staticClass:"beizi"},[t._v("编辑")])],1):t._e(),1==t.list.purcState?a("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.stopadd(t.list.id)}}},[a("v-uni-view",[a("v-uni-image",{attrs:{src:t.stopicon}})],1),a("v-uni-view",[t._v("停止")])],1):t._e(),1==t.list.purcState?a("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.okadd(t.list.id)}}},[a("v-uni-view",[a("v-uni-image",{attrs:{src:t.stopicon}})],1),a("v-uni-view",[t._v("完成")])],1):t._e(),1==t.list.purcState?a("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.xiajia(t.list.id)}}},[a("v-uni-view",[a("v-uni-image",{attrs:{src:t.xias}})],1),a("v-uni-view",[t._v("下架")])],1):t._e(),0==t.list.purcState||2==t.list.purcState||4==t.list.purcState?a("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.fabuadd(t.list.id)}}},[a("v-uni-view",[a("v-uni-image",{attrs:{src:t.add}})],1),a("v-uni-view",[t._v("发布")])],1):t._e(),a("v-uni-view",[a("v-uni-view",[a("v-uni-image",{attrs:{src:t.tui}})],1),a("v-uni-view",[t._v("复制")])],1),3==t.list.purcState||1==t.list.purcState?a("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.fenxiang()}}},[a("v-uni-view",[a("v-uni-image",{attrs:{src:t.feng}})],1),a("v-uni-view",[t._v("分享")])],1):t._e(),0==t.list.purcState||2==t.list.purcState||4==t.list.purcState?a("v-uni-view",[a("v-uni-view",{staticClass:"bei"},[a("v-uni-image",{attrs:{src:t.feng2}})],1),a("v-uni-view",{staticClass:"beizi"},[t._v("分享")])],1):t._e(),0==t.list.purcState||2==t.list.purcState||3==t.list.purcState||4==t.list.purcState?a("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.delet(t.list.id)}}},[a("v-uni-view",[a("v-uni-image",{attrs:{src:t.shan}})],1),a("v-uni-view",[t._v("删除")])],1):t._e(),1==t.list.purcState?a("v-uni-view",[a("v-uni-view",{staticClass:"bei"},[a("v-uni-image",{attrs:{src:t.shan2}})],1),a("v-uni-view",{staticClass:"beizi"},[t._v("删除")])],1):t._e()],1),1===t.Mask?a("v-uni-view",{staticClass:"QRcode-Mask",on:{click:function(i){i=t.$handleEvent(i),t.boss()}}},[a("v-uni-view",{staticClass:"QRcode-Mask-con",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.child(i)}}},[a("v-uni-view",{staticClass:"QRcode-Mask-con-header"},[t._v("分享海报")]),a("v-uni-view",{staticClass:"QRcode-Mask-con-lun"},[a("div",{ref:"slider",staticClass:"swiper-container",staticStyle:{"margin-top":"40upx"}},[a("div",{staticClass:"swiper-wrapper"},[a("v-uni-swiper",{staticClass:"swiper-box",attrs:{"next-margin":"130px"}},t._l(t.qrImgs,function(t,i){return a("v-uni-swiper-item",{key:i,staticStyle:{"margin-left":"40%"}},[a("v-uni-view",{staticClass:"swiper-item"},[a("div",{staticClass:"swiper-slide left"},[a("v-uni-image",{attrs:{src:t}})],1)])],1)}),1)],1)])]),a("v-uni-view",{staticClass:"QRcode-Mask-con-di"},[a("v-uni-view",[a("v-uni-view",[a("v-uni-image",{attrs:{src:t.wei}})],1),a("v-uni-view",[t._v("微信好友")])],1),a("v-uni-view",[a("v-uni-view",[a("v-uni-image",{attrs:{src:t.peng}})],1),a("v-uni-view",[t._v("朋友圈")])],1)],1)],1)],1):t._e(),t.QUICKNAVCO.show?a("navigation"):t._e()],1)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},"08f5":function(t,i,a){var e=a("5ed5");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("3964c8b0",e,!0,{sourceMap:!1,shadowMode:!1})},2511:function(t,i,a){"use strict";a.r(i);var e=a("b67b"),n=a("f545");for(var s in n)"default"!==s&&function(t){a.d(i,t,function(){return n[t]})}(s);a("ddaa");var o=a("2877"),u=Object(o["a"])(n["default"],e["a"],e["b"],!1,null,"618cacd4",null);i["default"]=u.exports},"2dd7":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".QRcode[data-v-618cacd4]{width:100%;height:100%;margin-top:%?40?%}.QRcode-imj[data-v-618cacd4]{width:100%;height:%?508?%}.swiper-box[data-v-618cacd4]{height:%?600?%}.swiper-slide[data-v-618cacd4]{width:%?360?%;height:%?558?%;position:relative\n\t/* margin-left: 30%; */}.swiper-slide>uni-image[data-v-618cacd4]{width:100%;height:%?508?%}.baocuntuimg[data-v-618cacd4]{width:%?160?%;height:%?56?%;background:#2e2e30;position:absolute;bottom:%?-24?%;left:%?104?%;border-radius:%?8?%;font-size:%?24?%;color:#fff;text-align:center;line-height:%?56?%}",""])},"5ed5":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".Purchase-details[data-v-316b689a]{width:100%;min-height:100%}.tian[data-v-316b689a]{width:100%;height:%?88?%}.my-title[data-v-316b689a]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-316b689a]{width:5%;margin-left:%?38?%}.myproduct-title[data-v-316b689a]{width:67%;height:100%;margin-left:%?120?%;line-height:%?90?%;float:left;text-align:center}.Purchase-listA[data-v-316b689a]{width:100%;min-height:%?288?%;background:#fff;position:relative;margin-top:%?20?%}.wimage[data-v-316b689a]{width:%?100?%;height:%?100?%;right:0;top:0;position:absolute}.Purchase-listA-zi[data-v-316b689a]{font-size:%?32?%;color:#2e2e30;padding-left:%?30?%;padding-top:%?20?%}.Purchase-listA-edit[data-v-316b689a]{width:91%;height:%?50?%;margin:%?10?% auto}.Purchase-listA-edit>span[data-v-316b689a]{font-size:%?24?%;color:#9b9b9b;padding:%?4?% %?14?% %?4?% %?14?%;background:#f5f5f5;border-radius:%?4?%;display:block;float:left;margin-left:%?10?%}.Purchase-listA-edit>span[data-v-316b689a]:first-of-type{margin-left:0}.Purchase-listA-time[data-v-316b689a]{width:91%;height:%?30?%;margin:%?30?% auto;line-height:%?30?%}.Purchase-listA-time>uni-view[data-v-316b689a]:first-of-type{font-size:%?24?%;color:#9b9b9b;float:left}.Purchase-listA-time>uni-view[data-v-316b689a]:nth-of-type(2){float:left;font-size:%?24?%;color:#9b9b9b;margin-left:%?100?%}.Purchase-listA-time>uni-view:nth-of-type(2)>uni-image[data-v-316b689a]{width:%?22?%;height:%?22?%;display:block;float:left;margin-top:%?6?%}.Purchase-listA-time>uni-view:nth-of-type(2)>span[data-v-316b689a]{display:block;float:left;margin-top:%?-5?%;margin-left:%?10?%}.Purchase-listA-time>uni-view[data-v-316b689a]:nth-of-type(3){float:right;font-size:%?24?%;color:#9b9b9b}.Purchase-listA-time>uni-view:nth-of-type(3)>uni-image[data-v-316b689a]{width:%?22?%;height:%?22?%;display:block;float:left;margin-top:%?6?%}.Purchase-listA-time>uni-view:nth-of-type(3)>span[data-v-316b689a]{display:block;float:left;margin-top:%?-5?%;margin-left:%?10?%}.Purchase-listA-time>uni-view:nth-of-type(3)>span>span[data-v-316b689a]{color:#02c2a2}.myproduct-list-edit[data-v-316b689a]{width:91%;margin:%?-5?% auto;height:%?60?%;border-top:%?2?% solid #efefef}.product-book-BA[data-v-316b689a]{width:13.5%;height:%?26?%;margin-top:%?20?%;line-height:%?26?%;font-size:%?24?%;color:#9b9b9b;border-right:%?2?% solid #e2e2e2;float:left;margin-left:%?22?%}.right[data-v-316b689a]{border:0}.one[data-v-316b689a]{margin-left:0}.shou>uni-image[data-v-316b689a]{width:%?24?%!important;height:%?24?%!important;margin-top:%?0?%!important}.product-book-BA>uni-image[data-v-316b689a]{width:%?24?%;height:%?20?%;margin-top:%?2?%;display:block;float:left}.product-book-BA>span[data-v-316b689a]{margin-left:%?10?%;display:block;float:left}.product-book-con[data-v-316b689a]{width:100%;height:%?112?%;text-align:center;line-height:%?112?%;font-size:16px;color:#02c2a2;background:#fff;margin-top:%?20?%}.tishiyu[data-v-316b689a]{width:100%;text-align:center;height:%?100?%;font-size:12px;color:#9b9b9b;line-height:%?36?%;padding-top:%?290?%}.QRcode-sub[data-v-316b689a]{width:100%;height:%?162?%;background:#fff;position:fixed;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.QRcode-sub>uni-view[data-v-316b689a]{width:16%;height:100%;text-align:center;margin-left:%?5?%}.QRcode-sub>uni-view>uni-view[data-v-316b689a]:first-child{width:%?72?%;height:%?72?%;border-radius:50%;background:#f0fcfa;margin:%?20?% auto auto auto}.bei[data-v-316b689a]{background:#f5f5f5!important}.QRcode-sub>uni-view>uni-view:first-child>uni-image[data-v-316b689a]{width:%?32?%;height:%?32?%;margin-top:%?18?%}.QRcode-sub>uni-view>uni-view[data-v-316b689a]:nth-child(2){font-size:%?24?%;color:#02c2a2;padding-top:%?10?%}.beizi[data-v-316b689a]{color:#d2d2d2!important}.QRcode-Mask[data-v-316b689a]{width:100%;height:100%;position:fixed;top:0;background:rgba(0,0,0,.3)}.QRcode-Mask-con[data-v-316b689a]{width:100%;height:%?1000?%;background:#fff;position:absolute;bottom:0}.QRcode-Mask-con-header[data-v-316b689a]{width:100%;height:%?110?%;text-align:center;line-height:%?110?%;font-size:%?32?%;color:#2e2e30}.QRcode-Mask-con-lun[data-v-316b689a]{width:90%;height:%?600?%;margin:0 auto;background:#f9f9f9;overflow:hidden}.QRcode-Mask-con-di[data-v-316b689a]{width:50%;height:%?150?%;margin:%?80?% auto auto auto}.QRcode-Mask-con-di>uni-view[data-v-316b689a]{width:50%;height:100%;text-align:center;float:left}.QRcode-Mask-con-di>uni-view>uni-view[data-v-316b689a]:first-of-type{width:%?80?%;height:%?80?%;border:%?2?% solid #e2e2e2;border-radius:50%;margin:0 auto}.QRcode-Mask-con-di>uni-view>uni-view[data-v-316b689a]:nth-of-type(2){font-size:%?24?%;color:#2e2e30;padding-top:%?30?%}.QRcode-Mask-con-di>uni-view>uni-view:first-of-type>uni-image[data-v-316b689a]{width:%?32?%;height:%?32?%;text-align:center;padding-top:%?26?%}.swiper-box[data-v-316b689a]{height:%?508?%}.swiper-slide[data-v-316b689a]{width:%?360?%;height:%?508?%\n\t/* margin-left: 30%; */}.swiper-slide>uni-image[data-v-316b689a]{width:100%;height:100%}",""])},"603c":function(t,i,a){"use strict";var e=a("08f5"),n=a.n(e);n.a},"7b2a":function(t,i,a){var e=a("2dd7");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("7a7757f4",e,!0,{sourceMap:!1,shadowMode:!1})},8743:function(t,i,a){"use strict";(function(t){var e=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("cebc")),s=e(a("eb12")),o=e(a("8a8b")),u=e(a("405e")),r=e(a("2043")),c=e(a("749b")),d=e(a("f22c")),l=e(a("2c06")),h=e(a("5bda")),v=e(a("81f8")),g=e(a("a7dd")),f=e(a("cfcf")),p=e(a("64f2")),w=e(a("9857")),b=e(a("eb65")),m=e(a("e8a0")),S=e(a("c755")),A=e(a("d9ef")),k=e(a("83da")),P=e(a("db79")),C=e(a("9400")),y=e(a("9fac")),R=e(a("f7b9")),_=e(a("499d")),z=e(a("74c1")),L=e(a("f543")),E=e(a("bca5")),x=e(a("18a2")),B=e(a("3443")),I=e(a("3665")),O=e(a("ce83")),Q=e(a("2511")),T=a("2f62"),M={data:function(){return{list:[],Images:u.default,Image:r.default,zan:c.default,look:d.default,phone:l.default,liu:h.default,shou:v.default,fen:g.default,zi:"我是采购名称的标题二十个字限制阿萨德阿萨德",yi:m.default,add:S.default,shag:A.default,xia:k.default,wei:P.default,peng:C.default,bian:y.default,bian2:R.default,wan:_.default,xias:z.default,tui:L.default,feng:E.default,feng2:x.default,shan:B.default,shan2:I.default,stopicon:O.default,Mask:0,id:"",wa:f.default,wb:p.default,wc:w.default,wd:b.default,qrImgs:[]}},components:{quickBtn:s.default,navigation:o.default,QRcode:Q.default},onLoad:function(t){this.id=t.id,uni.setNavigationBarTitle({title:this.i18n.product11}),this.details()},filters:{ellipsis:function(t){return t?t.length>15?t.slice(0,15)+"...":t:""}},methods:{fabuadd:function(i){var a=this;uni.showModal({title:"提示",content:"是否进行发布",confirmColor:" #02C2A2",success:function(e){if(e.confirm){if(t.log("用户点击确定"),uni.getStorageSync("landRegist")){var n=JSON.parse(uni.getStorageSync("landRegist"));t.log(n.user.id),uni.showLoading({title:"加载中"}),uni.request({url:a.api2+"/rest-rp/purc/setPurcState?purcState=1&id="+i,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(i){uni.hideLoading(),t.log(i.data),a.Purchas(),a.PurchasB(),a.PurchasC(),a.PurchasD(),a.PurchasE(),a.PurchasF(),uni.navigateBack({})},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}}else e.cancel&&t.log("用户点击取消")}})},xiajia:function(i){var a=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));t.log(e.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/purc/setPurcState?purcState=4&id="+i,method:"GET",header:{Authorization:"Bearer "+e.token},success:function(i){uni.hideLoading(),t.log(i.data),a.Purchas(),a.PurchasB(),a.PurchasC(),a.PurchasD(),a.PurchasE(),a.PurchasF(),uni.navigateBack({})},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},okadd:function(i){var a=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));t.log(e.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/purc/setPurcState?purcState=3&id="+i,method:"GET",header:{Authorization:"Bearer "+e.token},success:function(i){uni.hideLoading(),t.log(i.data),a.Purchas(),a.PurchasB(),a.PurchasC(),a.PurchasD(),a.PurchasE(),a.PurchasF(),uni.navigateBack({})},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},stopadd:function(i){var a=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));t.log(e.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/purc/setPurcState?purcState=2&id="+i,method:"GET",header:{Authorization:"Bearer "+e.token},success:function(i){uni.hideLoading(),t.log(i.data),a.Purchas(),a.PurchasB(),a.PurchasC(),a.PurchasD(),a.PurchasE(),a.PurchasF(),uni.navigateBack({})},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},delet:function(i){var a=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));t.log(e.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/purc/del?ids="+i,method:"GET",header:{Authorization:"Bearer "+e.token},success:function(i){uni.hideLoading(),t.log(i.data),a.Purchas(),a.PurchasB(),a.PurchasC(),a.PurchasD(),a.PurchasE(),a.PurchasF(),uni.navigateBack({})},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},Purchas:function(){var i=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));t.log(a.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/purc/selectList?page=1&userId=760",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){uni.hideLoading(),t.log(a.data),i.list=a.data.content.list,i.$store.commit("setPurchaseA",i.list)},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},PurchasB:function(){var i=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));t.log(a.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/purc/selectList?page=1&userId=760&purcState=0",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){uni.hideLoading(),t.log(a.data),i.list1=a.data.content.list,i.$store.commit("setPurchaseB",i.list1)},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},PurchasC:function(){var i=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));t.log(a.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/purc/selectList?page=1&userId=760&purcState=1",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){uni.hideLoading(),t.log(a.data),i.list2=a.data.content.list,i.$store.commit("setPurchaseC",i.list2)},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},PurchasD:function(){var i=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));t.log(a.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/purc/selectList?page=1&userId=760&purcState=2",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){uni.hideLoading(),t.log(a.data),i.list3=a.data.content.list,i.$store.commit("setPurchaseD",i.list3)},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},PurchasE:function(){var i=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));t.log(a.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/purc/selectList?page=1&userId=760&purcState=3",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){uni.hideLoading(),t.log(a.data),i.list4=a.data.content.list,i.$store.commit("setPurchaseE",i.list4)},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},PurchasF:function(){var i=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));t.log(a.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/purc/selectList?page=1&userId=760&purcState=4",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){uni.hideLoading(),t.log(a.data),i.list5=a.data.content.list,i.$store.commit("setPurchaseF",i.list5)},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},gotodataReport:function(){t.log("to数据看表"),uni.navigateTo({url:"/modules/aLittle/dataReport/dataReport"})},child:function(){},fenxiang:function(){t.log("分享说明书"),this.Mask=1},boss:function(){this.Mask=0},details:function(){var i=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));t.log(a.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/purc/selectInfo?id="+this.id,method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){uni.hideLoading(),t.log(a.data),i.list=a.data.content,i.qrImgs=a.data.content.qrImgs},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}}},computed:(0,n.default)({i18n:function(){return this.$t("Howtoshow")}},(0,T.mapGetters)(["GET_NEWS","GET_HOME","QUICKNAVCO"]))};i.default=M}).call(this,a("5a52")["default"])},b098:function(t,i,a){"use strict";a.r(i);var e=a("8743"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);i["default"]=n.a},b67b:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"QRcode"},[a("v-uni-view",{staticClass:"QRcode-imj"},[a("div",{ref:"slider",staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},[a("v-uni-swiper",{staticClass:"swiper-box",attrs:{"next-margin":"160px"}},t._l(this.data,function(i,e){return a("v-uni-swiper-item",{key:e,staticStyle:{"margin-left":"50%"}},[a("v-uni-view",{staticClass:"swiper-item"},[a("div",{staticClass:"swiper-slide left"},[a("v-uni-image",{attrs:{src:i}}),a("v-uni-view",{staticClass:"baocuntuimg",on:{click:function(i){i=t.$handleEvent(i),t.baocun()}}},[t._v("保存图片")])],1)])],1)}),1)],1)])])],1)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},b792:function(t,i,a){"use strict";(function(t){var e=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("cebc")),s=a("2f62"),o={props:["data"],data:function(){return{}},mounted:function(){},onLoad:function(){},methods:{baocun:function(){var i=this;uni.chooseImage({count:1,sourceType:["camera"],success:function(a){uni.saveImageToPhotosAlbum({filePath:i.list[0].img,success:function(){t.log("save success")}})}})}},computed:(0,n.default)({},(0,s.mapGetters)(["GET_NEWS","GET_HOME","QUICKNAVCO"]))};i.default=o}).call(this,a("5a52")["default"])},ce83:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABBtJREFUWAnFV01oVFcUPudmzCRGI8YGNGShaClGcWcpNikt2SkaFMzGyaLQ0mVEcCXVxOiupGo3BYVCEwNNoaKiO3/QifizEcQUqaVdhCSgiTgy1Ikz73q+O/Pu3PfmjXljafM279zzzvm+c+8999zzmGI+Wx6P1z95+eYLXfD2iEuHJt1GmtuMO+tpJp4WeZLr1KWPVi278XhL70IcaF7MqOn++NrXC7mjWtMB0rp5MXvznTnDTOcb6pPHsx/3zr7Lp2oAm/64mvx7Zu6IR3SISDe9C6T6N84qouH169acfPrhzlyUXWQAZta53AWt9SdRTrXqmPluQzK5N2o1KgKovzW2LU+FKzLr9koinhKwi8R0JaETfza3KOw7Zea9tjznN5KmXRJ0TzXfRIJ3LuxIPXJxAwFg5v+8zj2oAGCelj09tu/T5E+/cm/BBQjL+/V43W8TuS8lZwYlZ4pJao14qrEhud1dCRsA9vyv2bmb4WWX7L60WjWnnnf2vLI4MYQP0hdXvvAyo3JacGrsg+3YsHbN535OSI4UHyRcmFyxOvNtV2pvreRAhA98WdEPJQrzAge4fJ1ZgdLSP3WzHTMHwACzHIT3fwa0VkO3Ry8EV4KzshWbsBVmBXDOXXKSPcey/1tyhA0MYAGzPA3dVOQkYlS43+dzz9wiw4q/LnT2nSs7xJPa74w3zhRyv7Dm0/nPUtdcr7r0yFfa02etTorV5pZkq0J5dcklpilkuzWMKZTIL8se7/ZYX07cGu12XYuYPGV1UlXBrUq13epxzhc7ata4JDjkRVKtG00Q6bFO3xaYpob4CnmDGznQ4ehkAUiKUPyngrzs+mS5SkyWhyJVYncoc6s5VqhwztCKKj3yTf3Ez1utQoSq5MwPV9QluzM7eudd+zA2uJW9UkuWfnl1HdXtkX7y9I95j677QdRKDrwKbLnObSFyCV3ZkGt9yug0tSKIZROj2yXbkXCBRJOjFjlzFy8gsxQJkmbCVeJicccS4QZ3LBdOa8HT996HPIwtuDOq1MlYDnOr2RFRvqvvIEqyo5L01fYOMfqYMw9jgxtbEMxUuVIDZDLId6X6K4LwjWKSG/NK7EmFHs7HwluWtgdXqquDHBlEDeTABLaLC26FBlKSJ1P+oNtxn5fHZSkQRA3kQChiOk2OcIJboXtFA1mmwSrQIO5zV+fLCIIUH446575N+A0s06A4H8AJbnMM0b1Kmcra79LJoJkYwCmJeLzOvu/CRSbCzKiAASyZlXO6OFvkJDIEpXt52AXB/X0iff77akG4ttVk+A5NjJwK9gKGdNhvy+xxWqqWzAaAWSxpU+ov45K25X4Q/+ePSWSWI0HQOstFMRQ4HX6Esd/4NeMhYPlJF3YN5ED4I8ZmNZbi5zQczH/1e/4WD51rtdaiVRMAAAAASUVORK5CYII="},db40:function(t,i,a){"use strict";a.r(i);var e=a("0768"),n=a("b098");for(var s in n)"default"!==s&&function(t){a.d(i,t,function(){return n[t]})}(s);a("603c");var o=a("2877"),u=Object(o["a"])(n["default"],e["a"],e["b"],!1,null,"316b689a",null);i["default"]=u.exports},ddaa:function(t,i,a){"use strict";var e=a("7b2a"),n=a.n(e);n.a},f543:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAHdJREFUSA1jZDq06D8DFcE/uzhGfMYx4ZOkhdzwt5AFPdgIxQG6elLTwPAPUrr7ECMOKY4jAvma7j4c/hYSjEP0OKU0nw7/IKW7DzHikNSyET2OCfHp7sPhbyELoXxF7Tgd/kFKdx/ibUOC8tRoHBIqWdDl6R6HAJ9SGdViRbDgAAAAAElFTkSuQmCC"},f545:function(t,i,a){"use strict";a.r(i);var e=a("b792"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);i["default"]=n.a}}]);