(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-InstructionsPrice-Order-Order-list-Order-details-Order-details2"],{2693:function(t,e,i){"use strict";i.r(e);var a=i("4c17"),r=i.n(a);for(var d in a)"default"!==d&&function(t){i.d(e,t,function(){return a[t]})}(d);e["default"]=r.a},"2c5b":function(t,e,i){"use strict";var a=i("9979"),r=i.n(a);r.a},"4c17":function(t,e,i){"use strict";(function(t){var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(i("cebc")),d=a(i("1331")),o=a(i("308c")),n=i("2f62"),s={data:function(){return{list:[],num:0,biao:this.Static+"my/biao.png",ding:this.Static+"my/ding.png",up:this.Static+"my/up-arrow.png",phone:this.Static+"my/phone.png",id:"",thid:[],Image:this.Static+"my/Image123.png"}},components:{quickBtn:d.default,navigation:o.default},computed:(0,r.default)({i18n:function(){return this.$t("Howtoshow")}},(0,n.mapGetters)(["GET_HOME","QUICKNAVCO"])),filters:{formatDate:function(t){var e=new Date(t),i=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var r=e.getDate();r=r<10?"0"+r:r;var d=e.getHours();d=d<10?"0"+d:d;var o=e.getMinutes();o=o<10?"0"+o:o;var n=e.getSeconds();return n=n<10?"0"+n:n,i+"-"+a+"-"+r+" "+d+":"+o+":"+n}},onLoad:function(e){this.id=e.id,t.log(this.id),uni.setNavigationBarTitle({title:this.i18n.product8}),this.details()},created:function(){},methods:{playphone:function(e){t.log(e,123),uni.makePhoneCall({phoneNumber:e})},details:function(){var e=this;if(t.log(this.id),uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));t.log(i.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectOrderInfo?orderId="+this.id,method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){uni.hideLoading(),t.log(i.data),e.list=i.data.content},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(e,"网络繁忙，请稍后")}})}}}};e.default=s}).call(this,i("5a52")["default"])},"4c6f":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".Order-details[data-v-5941f4e2]{width:100%;min-height:100%}.tian[data-v-5941f4e2]{width:100%;height:%?88?%}.news-system-title[data-v-5941f4e2]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-5941f4e2]{width:5%;margin-left:%?38?%}.search-Fd[data-v-5941f4e2]{position:relative;width:23%;margin-left:38%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30;float:left}.Order-details-A[data-v-5941f4e2]{width:100%;height:%?160?%;border-bottom:%?2?% solid #f5f5f5;background:#fff}.Order-details-Aone[data-v-5941f4e2]{font-size:%?32?%;color:#fab100;padding-top:%?40?%;padding-left:%?30?%}.Order-details-Atwo[data-v-5941f4e2]{font-size:%?28?%;color:#bdbdbd;height:%?30?%;line-height:%?30?%;padding-left:%?30?%}.Order-details-AA[data-v-5941f4e2]{width:100%;height:%?160?%;position:relative;background:#fff}.Order-details-AA>uni-view[data-v-5941f4e2]:first-of-type{font-size:%?32?%;color:#2e2e30;padding-top:%?30?%;padding-left:%?30?%}.Order-details-AA>uni-view[data-v-5941f4e2]:nth-of-type(2){font-size:%?26?%;color:#9b9b9b;padding-left:%?30?%}.Order-details-AA>uni-image[data-v-5941f4e2]{width:100%;height:%?4?%;position:absolute;bottom:0}.Order-details-B[data-v-5941f4e2]{width:100%;min-height:%?100?%;border-bottom:%?2?% solid #efefef;background:#fff;position:relative;margin-top:%?20?%}.Supply-order-tu[data-v-5941f4e2]{left:0;top:0;width:%?100?%;height:%?100?%;position:absolute}.Order-details-B>uni-view[data-v-5941f4e2]:first-of-type{font-size:%?32?%;color:#2e2e30;line-height:%?100?%;padding-left:%?70?%;float:left;font-weight:700}.Order-details-D[data-v-5941f4e2]{width:100%;height:%?100?%;border-bottom:%?2?% solid #efefef;background:#fff;margin-top:%?20?%;overflow:hidden}.Order-details-D-img[data-v-5941f4e2]{width:%?36?%;height:%?36?%;margin-top:%?30?%;margin-left:%?30?%;float:left}.Order-details-D-img>uni-image[data-v-5941f4e2]{width:100%;height:100%}.Order-details-D-zi[data-v-5941f4e2]{float:left;height:100%;width:50%;line-height:%?100?%;font-size:%?32?%;color:#2e2e30;margin-left:%?12?%;font-weight:700}.Order-details-E[data-v-5941f4e2]{width:100%;height:%?250?%;background:#fff;overflow:hidden;border-top:%?2?% solid #f5f5f5}.Order-details-E-img[data-v-5941f4e2]{width:%?168?%;height:%?174?%;margin-left:%?36?%;margin-top:%?24?%;float:left}.Order-details-E-img>uni-image[data-v-5941f4e2]{width:100%;height:100%}.Order-details-E-zi[data-v-5941f4e2]{width:67%;height:%?174?%;margin-top:%?24?%;float:right;margin-right:%?24?%;position:relative}.Order-details-E-zi>uni-view[data-v-5941f4e2]:first-of-type{font-size:%?28?%;color:#2e2e30;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Order-details-E-zi>uni-view[data-v-5941f4e2]:nth-of-type(2){font-size:%?28?%;color:#9b9b9b;line-height:%?34?%;display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.Order-details-E-zi>uni-view[data-v-5941f4e2]:nth-of-type(3){font-size:%?28?%;height:%?30?%;line-height:%?30?%;color:#9b9b9b;position:absolute;bottom:0}.Order-details-H[data-v-5941f4e2]{width:100%;height:%?170?%;background:#fff;margin-top:%?20?%}.Order-details-H-one[data-v-5941f4e2]{width:90%;height:%?30?%;font-size:%?28?%;color:#2e2e30;padding-top:%?30?%;margin:0 auto auto auto}.Order-details-H-one>uni-view[data-v-5941f4e2]:first-of-type{float:left;line-height:%?30?%}.Order-details-H-one>uni-view[data-v-5941f4e2]:nth-of-type(2){float:right;line-height:%?30?%}.Order-details-H-two[data-v-5941f4e2]{width:90%;height:%?30?%;font-size:%?28?%;color:#2e2e30;padding-top:%?20?%;margin:0 auto auto auto}.Order-details-H-two>uni-view[data-v-5941f4e2]:first-of-type{line-height:%?30?%;float:left}.Order-details-H-two>uni-view[data-v-5941f4e2]:nth-of-type(2){float:right;line-height:%?30?%}.Order-details-H-thr[data-v-5941f4e2]{width:90%;height:%?30?%;font-size:%?28?%;color:#9b9b9b;padding-top:%?10?%;margin:0 auto auto auto}.Order-details-H-thr>uni-view[data-v-5941f4e2]:first-of-type{line-height:%?30?%;float:left}.Order-details-H-thr>uni-view[data-v-5941f4e2]:nth-of-type(2){float:right;line-height:%?30?%;color:#ff4d6a}.Order-details-Z[data-v-5941f4e2]{width:100%;height:%?190?%;background:#fff;position:fixed;bottom:0}.Order-details-Z-header[data-v-5941f4e2]{width:100%;height:%?90?%;border-bottom:%?2?% solid #efefef;border-top:%?2?% solid #efefef}.Order-details-Z-header>uni-view[data-v-5941f4e2]:first-of-type{line-height:%?90?%;margin-left:%?36?%;font-size:14px;color:#2e2e30;float:left;font-weight:700}.Order-details-Z-header>uni-view[data-v-5941f4e2]:nth-of-type(2){line-height:%?90?%;margin-right:%?36?%;font-size:14px;color:#2e2e30;float:right;font-weight:700}.Order-details-Z-foot[data-v-5941f4e2]{width:100%;height:%?100?%}.Order-details-Z-one[data-v-5941f4e2]{width:34%;height:100%;font-size:%?32?%;color:#2e2e30;text-align:center;line-height:%?100?%;float:left}.Order-details-Z-one>uni-image[data-v-5941f4e2]{width:%?32?%;height:%?32?%;display:block;float:left;margin-left:%?70?%;margin-top:%?34?%}.Order-details-Z-one>span[data-v-5941f4e2]:first-of-type{display:block;float:left;margin-left:%?10?%}.Order-details-Z-one>span[data-v-5941f4e2]:nth-of-type(2){color:#e2e2e2;display:block;float:right}.Order-details-Z-two[data-v-5941f4e2]{width:33%;height:100%;font-size:%?32?%;color:#ff4d6a;text-align:center;line-height:%?100?%;float:left}.Order-details-Z-thr[data-v-5941f4e2]{width:33%;height:100%;font-size:%?32?%;color:#fff;text-align:center;line-height:%?100?%;float:left;background-image:-webkit-linear-gradient(316deg,#15d49f,#57d6cf);background-image:linear-gradient(134deg,#15d49f,#57d6cf)}.Order-details-tian[data-v-5941f4e2]{width:100%;height:%?190?%}",""])},"7b63":function(t,e,i){"use strict";i.r(e);var a=i("d538a"),r=i("2693");for(var d in r)"default"!==d&&function(t){i.d(e,t,function(){return r[t]})}(d);i("2c5b");var o=i("2877"),n=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"5941f4e2",null);e["default"]=n.exports},9979:function(t,e,i){var a=i("4c6f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("0dc1464c",a,!0,{sourceMap:!1,shadowMode:!1})},d538a:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"Order-details"},[i("v-uni-view",{staticClass:"news-system-title"},[i("div",{staticClass:"quickBtn-Fd left"},[i("quickBtn")],1),i("div",{staticClass:"search-Fd left"},[t._v(t._s(t.i18n.product8))])]),i("v-uni-view",{staticClass:"tian"}),i("v-uni-view",{staticClass:"Order-details-A"},[i("v-uni-view",{staticClass:"Order-details-Aone"},[t._v("待确认")]),i("v-uni-view",{staticClass:"Order-details-Atwo"},[t._v("等待商家确认...")])],1),i("v-uni-view",{staticClass:"Order-details-AA"},[i("v-uni-view",[t._v(t._s(t.list.receivUser)+" "+t._s(t.list.receivPhone))]),i("v-uni-view",[t._v(t._s(t.list.receivPcodeStr)+" "+t._s(t.list.receivCcodeStr)+" "+t._s(t.list.receivAcodeStr)+" "+t._s(t.list.receivName))]),i("v-uni-image",{attrs:{src:t.Image}})],1),i("v-uni-view",{staticClass:"Order-details-B"},[1==t.list.orderType?i("v-uni-image",{staticClass:"Supply-order-tu",attrs:{src:t.biao}}):t._e(),0==t.list.orderType?i("v-uni-image",{staticClass:"Supply-order-tu",attrs:{src:t.ding}}):t._e(),i("v-uni-view",[t._v("订单号: "+t._s(t.list.orderOrder))]),i("v-uni-view",{staticClass:"Order-details-E"},[i("v-uni-view",{staticClass:"Order-details-E-img"},[i("v-uni-image",{attrs:{src:t.list.bannerImg}})],1),i("v-uni-view",{staticClass:"Order-details-E-zi"},[i("v-uni-view",[t._v(t._s(t.list.instrucTitle))]),i("v-uni-view",[t._v(t._s(t.list.instrucIntro))]),i("v-uni-view",[t._v(t._s(t.list.moneyStr)+"  x"+t._s(t.list.orderSpCount))])],1)],1)],1),i("v-uni-view",{staticClass:"Order-details-H"},[i("v-uni-view",{staticClass:"Order-details-H-one"},[i("v-uni-view",[t._v("商品总额")]),i("v-uni-view",[t._v("¥5000.00")])],1),i("v-uni-view",{staticClass:"Order-details-H-two"},[i("v-uni-view",[t._v("运费总计")]),i("v-uni-view",[t._v("156165")])],1),i("v-uni-view",{staticClass:"Order-details-H-thr"},[i("v-uni-view",[t._v("采购单总额约")]),i("v-uni-view",[t._v("-¥5000.00")])],1)],1),i("v-uni-view",{staticClass:"Order-details-tian"}),i("v-uni-view",{staticClass:"Order-details-Z"},[i("v-uni-view",{staticClass:"Order-details-Z-header"},[i("v-uni-view",[t._v("总计")]),i("v-uni-view",[t._v("￥4500.00")])],1),i("v-uni-view",{staticClass:"Order-details-Z-foot"},[i("v-uni-view",{staticClass:"Order-details-Z-one"},[i("v-uni-image",{attrs:{src:t.phone}}),i("span",[t._v("联系")]),i("span",[t._v("|")])],1),i("v-uni-view",{staticClass:"Order-details-Z-two"},[t._v("关闭交易")]),i("v-uni-view",{staticClass:"Order-details-Z-thr"},[t._v("确认定制信息")])],1)],1),t.QUICKNAVCO.show?i("navigation"):t._e()],1)},r=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return r})}}]);