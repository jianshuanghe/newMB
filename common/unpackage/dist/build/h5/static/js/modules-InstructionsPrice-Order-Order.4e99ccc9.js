(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-InstructionsPrice-Order-Order"],{"0080":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".Supply-order[data-v-8e76e01c]{width:100%;min-height:100%}.scroll-v[data-v-8e76e01c]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;\n\twidth:%?750?%;height:87vh;padding-bottom:0}.my-Already-header[data-v-8e76e01c]{width:100%;height:%?72?%;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:%?88?%;background:#fff;z-index:10}.my-Already-headerone[data-v-8e76e01c]{width:100%;height:100%;margin-left:%?10?%;float:left}.my-Already-headerone>span[data-v-8e76e01c]{font-size:%?24?%;color:#9b9b9b;\n\t/* line-height: 72upx; */float:left;margin-left:%?40?%;margin-top:%?18?%}.changeColors[data-v-8e76e01c]{padding:%?0?% %?16?% %?0?% %?16?%;background:#e2e2e2;border-radius:%?26?%;color:#2e2e30!important}.tian[data-v-8e76e01c]{width:100%;height:%?88?%}.Supply-order-list[data-v-8e76e01c]{width:100%;height:%?500?%;background:#fff;margin-top:%?40?%;position:relative}.Supply-order-tu[data-v-8e76e01c]{left:0;top:0;width:%?100?%;height:%?100?%;position:absolute}.Supply-order-listA[data-v-8e76e01c]{width:100%;height:%?96?%;border-bottom:%?2?% solid #f5f5f5}.Supply-order-listA>uni-view[data-v-8e76e01c]:first-of-type{font-size:%?32?%;color:#2e2e30;line-height:%?96?%;padding-left:%?70?%;float:left}.Supply-order-listA>uni-view[data-v-8e76e01c]:nth-of-type(2){font-size:%?32?%;color:#fab100;line-height:%?96?%;padding-right:%?30?%;float:right;font-weight:700}.Supply-order-listB[data-v-8e76e01c]{width:90%;height:%?260?%;margin:0 auto;border-bottom:%?2?% solid #efefef;overflow:hidden}.Supply-order-listB-img[data-v-8e76e01c]{width:%?168?%;height:%?174?%;margin-top:%?44?%;float:left}.Supply-order-listB-img>uni-image[data-v-8e76e01c]{width:100%;height:100%}.Supply-order-listB-zi[data-v-8e76e01c]{width:72%;height:%?174?%;float:right;margin-top:%?44?%;position:relative}.Supply-order-listB-zi>uni-view[data-v-8e76e01c]:first-of-type{font-size:%?28?%;color:#2e2e30;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.Supply-order-listB-zi>uni-view[data-v-8e76e01c]:nth-of-type(2){font-size:%?28?%;color:#9b9b9b}.Supply-order-listB-zi>uni-view[data-v-8e76e01c]:nth-of-type(3){font-size:%?28?%;color:#9b9b9b;position:absolute;bottom:%?-10?%}.Supply-order-listB-zi>uni-view:nth-of-type(3)>span[data-v-8e76e01c]{color:#ff4d6a;font-weight:700}.Supply-order-listC[data-v-8e76e01c]{width:90%;height:%?136?%;margin:0 auto;overflow:hidden}.Supply-order-listC>uni-view[data-v-8e76e01c]{font-size:%?28?%;color:#9b9b9b}.Supply-order-listC>uni-view[data-v-8e76e01c]:first-of-type{margin-top:%?18?%}.meirenkanwo[data-v-8e76e01c]{width:%?330?%;height:%?280?%;display:block;margin:%?120?% auto auto auto;font-size:%?28?%;text-align:center;color:#9b9b9b;clear:both}.meirenkanwo>uni-image[data-v-8e76e01c]{width:92%;height:80%}",""])},"0e31":function(e,t,i){var o=i("dcb9");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("1af1909e",o,!0,{sourceMap:!1,shadowMode:!1})},1020:function(e,t,i){var o=i("46af");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("1b2cd8a8",o,!0,{sourceMap:!1,shadowMode:!1})},2193:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(i("270e")),n=u(i("9063")),a=u(i("4fe6")),s=u(i("25ae")),r=i("2f62");function u(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},o=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),o.forEach(function(t){d(e,t,i[t])})}return e}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var c={data:function(){return{list:[],num:3,gong:[],cai:[]}},components:{quickBtn:o.default,navigation:n.default,Supply:a.default,Purchase:s.default},computed:l({i18n:function(){return this.$t("Howtoshow")}},(0,r.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(e){this.id=e.id,console.log(this.id),uni.setNavigationBarTitle({title:this.i18n.product4}),"1"==this.id?this.num=0:"2"==this.id&&(this.num=1),this.list.push(this.i18n.product5),this.list.push(this.i18n.product6)},created:function(){this.shareEachPage()},methods:{gotoGood:function(e){this.num=e,console.log(e)},Supply:function(){var e=this;if(uni.getStorageSync("landRegist")){var t=JSON.parse(uni.getStorageSync("landRegist"));console.log(t.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+t.user.id+"&page=1",method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){uni.hideLoading(),console.log(t.data),e.gong=t.data.content.list,e.$store.commit("setSupply",e.gong)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},Purchase:function(){var e=this;if(uni.getStorageSync("landRegist")){var t=JSON.parse(uni.getStorageSync("landRegist"));console.log(t.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+t.user.id+"&page=1",method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){uni.hideLoading(),console.log(t.data),e.cai=t.data.content.list,e.$store.commit("setPurchase",e.cai)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}}};t.default=c},"25ae":function(e,t,i){"use strict";i.r(t);var o=i("ca05"),n=i("7571");for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);i("f6b6");var s=i("2877"),r=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"eda8226e",null);t["default"]=r.exports},"2aa7":function(e,t,i){"use strict";i.r(t);var o=i("5aca"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);t["default"]=n.a},"2df2":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("2f62");function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},o=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),o.forEach(function(t){a(e,t,i[t])})}return e}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var s={data:function(){return{List:["全部","待确认","待发货","待收货","已完成","已关闭"],numa:0,biao:this.Static+"my/biao.png",ding:this.Static+"my/ding.png",kong:this.Static+"my/kong.png",shu:[],pages:"1"}},onLoad:function(){},watch:{GET_MY:{handler:function(e,t){this.shu=e.Purchase},deep:!0}},created:function(){this.Purchase()},mounted:function(){},methods:{gotoAgain:function(e){var t=null;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));console.log(i.user.id),t=i.user.id}else t=uni.getStorageSync("UUID");var o={isFlow:0,orderType:0,sourceTemp:4,aiListTemp:0,id:e.id,instrucCustType:e.instCustType,isMenu:e.isMenu,instrucId:e.instId,lookUserId:t,creatorId:e.userId,instrucState:e.instState};uni.navigateTo({url:"/modules/createBusiness/templatePro/templatePro?urlParams="+this.urlCrypto(o,0)})},loadMore:function(){var e=this;if(0==this.numa){if(uni.getStorageSync("landRegist")){var t=JSON.parse(uni.getStorageSync("landRegist"));console.log(t.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+t.user.id+"&page="+this.pages,method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){if(uni.hideLoading(),console.log(t.data),e.pages++,0==t.data.content.list.length)return uni.showToast({title:"没有数据啦",icon:"none",duration:1e3}),!1;t.data.content.list.map(function(t,i){console.log(t),e.shu.push(t)}),console.log(e.shu)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(1==this.numa){if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));console.log(i.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+i.user.id+"&page="+this.pages+"&state=0",method:"GET",header:{Authorization:"Bearer "+i.token},success:function(t){if(uni.hideLoading(),console.log(t.data),e.pages++,0==t.data.content.list.length)return uni.showToast({title:"没有数据啦",icon:"none",duration:1e3}),!1;t.data.content.list.map(function(t,i){console.log(t),e.shu.push(t)}),console.log(e.shu)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(2==this.numa){if(uni.getStorageSync("landRegist")){var o=JSON.parse(uni.getStorageSync("landRegist"));console.log(o.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+o.user.id+"&page="+this.pages+"&state=1",method:"GET",header:{Authorization:"Bearer "+o.token},success:function(t){if(uni.hideLoading(),console.log(t.data),e.pages++,0==t.data.content.list.length)return uni.showToast({title:"没有数据啦",icon:"none",duration:1e3}),!1;t.data.content.list.map(function(t,i){console.log(t),e.shu.push(t)}),console.log(e.shu)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(3==this.numa){if(uni.getStorageSync("landRegist")){var n=JSON.parse(uni.getStorageSync("landRegist"));console.log(n.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+n.user.id+"&page="+this.pages+"&state=2",method:"GET",header:{Authorization:"Bearer "+n.token},success:function(t){if(uni.hideLoading(),console.log(t.data),e.pages++,0==t.data.content.list.length)return uni.showToast({title:"没有数据啦",icon:"none",duration:1e3}),!1;t.data.content.list.map(function(t,i){console.log(t),e.shu.push(t)}),console.log(e.shu)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(4==this.numa){if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));console.log(a.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+a.user.id+"&page="+this.pages+"&state=3",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(t){if(uni.hideLoading(),console.log(t.data),e.pages++,0==t.data.content.list.length)return uni.showToast({title:"没有数据啦",icon:"none",duration:1e3}),!1;t.data.content.list.map(function(t,i){console.log(t),e.shu.push(t)}),console.log(e.shu)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(5==this.numa&&uni.getStorageSync("landRegist")){var s=JSON.parse(uni.getStorageSync("landRegist"));console.log(s.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+s.user.id+"&page="+this.pages+"&state=4",method:"GET",header:{Authorization:"Bearer "+s.token},success:function(t){if(uni.hideLoading(),console.log(t.data),e.pages++,0==t.data.content.list.length)return uni.showToast({title:"没有数据啦",icon:"none",duration:1e3}),!1;t.data.content.list.map(function(t,i){console.log(t),e.shu.push(t)}),console.log(e.shu)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},gotoGood:function(e){var t=this;if(this.numa=e,0==e){if(this.pages=1,uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));console.log(i.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+i.user.id+"&page="+this.pages,method:"GET",header:{Authorization:"Bearer "+i.token},success:function(e){uni.hideLoading(),console.log(e.data),t.shu=e.data.content.list,t.pages++},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(1==e){if(console.log(this.arr1),this.pages=1,uni.getStorageSync("landRegist")){var o=JSON.parse(uni.getStorageSync("landRegist"));console.log(o.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+o.user.id+"&page="+this.pages+"&state=0",method:"GET",header:{Authorization:"Bearer "+o.token},success:function(e){uni.hideLoading(),console.log(e.data),t.shu=e.data.content.list,t.pages++},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(2==e){if(this.pages=1,uni.getStorageSync("landRegist")){var n=JSON.parse(uni.getStorageSync("landRegist"));console.log(n.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+n.user.id+"&page="+this.pages+"&state=1",method:"GET",header:{Authorization:"Bearer "+n.token},success:function(e){uni.hideLoading(),console.log(e.data),t.shu=e.data.content.list,t.pages++},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(3==e){if(this.pages=1,uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));console.log(a.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+a.user.id+"&page="+this.pages+"&state=2",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(e){uni.hideLoading(),console.log(e.data),t.shu=e.data.content.list,t.pages++},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(4==e){if(this.pages=1,uni.getStorageSync("landRegist")){var s=JSON.parse(uni.getStorageSync("landRegist"));console.log(s.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+s.user.id+"&page="+this.pages+"&state=3",method:"GET",header:{Authorization:"Bearer "+s.token},success:function(e){uni.hideLoading(),console.log(e.data),t.shu=e.data.content.list,t.pages++},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(5==this.numa&&(this.pages=1,uni.getStorageSync("landRegist"))){var r=JSON.parse(uni.getStorageSync("landRegist"));console.log(r.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+r.user.id+"&page="+this.pages+"&state=4",method:"GET",header:{Authorization:"Bearer "+r.token},success:function(e){uni.hideLoading(),console.log(e.data),t.shu=e.data.content.list,t.pages++},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},gotodetails:function(e){console.log("订单详情"),uni.navigateTo({url:"/modules/InstructionsPrice/Order/Order-list/Order-details/Order-detailsh?id="+e})},Purchase:function(){var e=this;if(uni.getStorageSync("landRegist")){var t=JSON.parse(uni.getStorageSync("landRegist"));console.log(t.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+t.user.id+"&page="+this.pages,method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){uni.hideLoading(),console.log(t.data),e.shu=t.data.content.list,e.pages++},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}},computed:n({},(0,o.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"]))};t.default=s},"3aec":function(e,t,i){"use strict";i.r(t);var o=i("4812"),n=i("91e5");for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);i("d1a0");var s=i("2877"),r=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"2b21bfa5",null);t["default"]=r.exports},"46af":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".scroll-v[data-v-eda8226e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;\n\twidth:%?750?%;height:87vh;padding-bottom:0}.Purchase-order[data-v-eda8226e]{width:100%;min-height:100%}.my-Already-header[data-v-eda8226e]{width:100%;height:%?72?%;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:%?88?%;background:#fff;z-index:10}.my-Already-headerone[data-v-eda8226e]{width:100%;height:100%;margin-left:%?10?%;float:left}.my-Already-headerone>span[data-v-eda8226e]{font-size:%?24?%;color:#9b9b9b;\n\t/* line-height: 72upx; */float:left;margin-left:%?40?%;margin-top:%?18?%}.changeColors[data-v-eda8226e]{padding:%?0?% %?16?% %?0?% %?16?%;background:#e2e2e2;border-radius:%?26?%;color:#2e2e30!important}.tian[data-v-eda8226e]{width:100%;height:%?88?%}.Purchase-order-list[data-v-eda8226e]{width:100%;height:%?500?%;background:#fff;margin-top:%?40?%;position:relative}.Purchase-order-tu[data-v-eda8226e]{left:0;top:0;width:%?100?%;height:%?100?%;position:absolute}.Purchase-order-listA[data-v-eda8226e]{width:100%;height:%?96?%;border-bottom:%?2?% solid #f5f5f5}.Purchase-order-listA>uni-view[data-v-eda8226e]:first-of-type{font-size:%?32?%;color:#2e2e30;line-height:%?96?%;padding-left:%?70?%;float:left}.Purchase-order-listA>uni-view[data-v-eda8226e]:nth-of-type(2){font-size:%?32?%;color:#fab100;line-height:%?96?%;padding-right:%?30?%;float:right;font-weight:700}.Purchase-order-listB[data-v-eda8226e]{width:90%;height:%?260?%;margin:0 auto;border-bottom:%?2?% solid #efefef;overflow:hidden}.Purchase-order-listB-img[data-v-eda8226e]{width:%?168?%;height:%?174?%;margin-top:%?44?%;float:left}.Purchase-order-listB-img>uni-image[data-v-eda8226e]{width:100%;height:100%}.Purchase-order-listB-zi[data-v-eda8226e]{width:72%;height:%?174?%;float:right;margin-top:%?44?%;position:relative}.Purchase-order-listB-zi>uni-view[data-v-eda8226e]:first-of-type{font-size:%?28?%;color:#2e2e30;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.Purchase-order-listB-zi>uni-view[data-v-eda8226e]:nth-of-type(2){font-size:%?28?%;color:#9b9b9b;line-height:%?42?%;display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-box-orient:vertical}.Purchase-order-listB-zi>uni-view[data-v-eda8226e]:nth-of-type(3){font-size:%?28?%;color:#9b9b9b;position:absolute;bottom:%?-12?%}.Purchase-order-listC[data-v-eda8226e]{width:90%;height:%?136?%;margin:0 auto;overflow:hidden}.Purchase-order-listC>uni-view[data-v-eda8226e]:first-of-type{font-size:%?28?%;color:#9b9b9b;line-height:%?136?%;width:50%;float:left}.Purchase-order-listC>uni-view:first-of-type>span[data-v-eda8226e]{color:#ff4d6a;font-weight:700}.Purchase-order-listC>uni-view[data-v-eda8226e]:nth-of-type(2){width:%?208?%;height:%?64?%;border:%?2?% solid #2e2e30;border-radius:%?4?%;float:right;text-align:center;line-height:%?68?%;font-size:14px;color:#2e2e30;margin-top:%?36?%}.meirenkanwo[data-v-eda8226e]{width:%?330?%;height:%?280?%;display:block;margin:%?120?% auto auto auto;font-size:%?28?%;text-align:center;color:#9b9b9b;clear:both}.meirenkanwo>uni-image[data-v-eda8226e]{width:92%;height:80%}",""])},4812:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"Order"},[i("v-uni-view",{staticClass:"my-Focusonfans-header"},[i("div",{staticClass:"quickBtn-Fd left"},[i("quickBtn")],1),i("v-uni-view",{staticClass:"my-Focusonfans-title"},e._l(e.list,function(t,o){return i("v-uni-view",{key:o,class:e.num==o?"changeColor":"",on:{click:function(t){t=e.$handleEvent(t),e.gotoGood(o)}}},[e._v(e._s(t))])}),1)],1),i("v-uni-view",{staticClass:"tian"}),0===e.num?i("Supply"):e._e(),1===e.num?i("Purchase"):e._e(),e.QUICKNAVCO.show?i("navigation"):e._e()],1)},n=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return n})},"4fe6":function(e,t,i){"use strict";i.r(t);var o=i("e61d"),n=i("2aa7");for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);i("5463");var s=i("2877"),r=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"8e76e01c",null);t["default"]=r.exports},5463:function(e,t,i){"use strict";var o=i("a709"),n=i.n(o);n.a},"5aca":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("2f62");function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},o=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),o.forEach(function(t){a(e,t,i[t])})}return e}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var s={data:function(){return{List:["全部","待确认","待发货","待收货","已完成","已关闭"],numa:0,biao:this.Static+"my/biao.png",ding:this.Static+"my/ding.png",kong:this.Static+"my/kong.png",gong:[],shu:[],pages:"1"}},mounted:function(){},watch:{GET_MY:{handler:function(e,t){this.shu=e.Supply},deep:!0}},onLoad:function(){},created:function(){this.Supply()},methods:{loadMore:function(){var e=this;if(0==this.numa){if(this.pages="2",uni.getStorageSync("landRegist")){var t=JSON.parse(uni.getStorageSync("landRegist"));console.log(t.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+t.user.id+"&page="+this.pages,method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){if(uni.hideLoading(),console.log(t.data),0==t.data.content.list.length)return uni.showToast({title:"没有数据啦",icon:"none",duration:1e3}),!1;e.pages++,t.data.content.list.map(function(t,i){e.shu.push(t)}),console.log(e.shu)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(1==this.numa){if(this.pages="2",uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));console.log(i.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+i.user.id+"&page="+this.pages+"&state=0",method:"GET",header:{Authorization:"Bearer "+i.token},success:function(t){if(uni.hideLoading(),console.log(t.data),0==t.data.content.list.length)return uni.showToast({title:"没有数据啦",icon:"none",duration:1e3}),!1;e.pages++,t.data.content.list.map(function(t,i){e.shu.push(t)}),console.log(e.shu)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(2==this.numa){if(this.pages="2",uni.getStorageSync("landRegist")){var o=JSON.parse(uni.getStorageSync("landRegist"));console.log(o.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+o.user.id+"&page="+this.pages+"&state=1",method:"GET",header:{Authorization:"Bearer "+o.token},success:function(t){if(uni.hideLoading(),console.log(t.data),0==t.data.content.list.length)return uni.showToast({title:"没有数据啦",icon:"none",duration:1e3}),!1;e.pages++,t.data.content.list.map(function(t,i){e.shu.push(t)}),console.log(e.shu)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(3==this.numa){if(this.pages="2",uni.getStorageSync("landRegist")){var n=JSON.parse(uni.getStorageSync("landRegist"));console.log(n.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+n.user.id+"&page="+this.pages+"&state=2",method:"GET",header:{Authorization:"Bearer "+n.token},success:function(t){if(uni.hideLoading(),console.log(t.data),0==t.data.content.list.length)return uni.showToast({title:"没有数据啦",icon:"none",duration:1e3}),!1;e.pages++,t.data.content.list.map(function(t,i){e.shu.push(t)}),console.log(e.shu)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(4==this.numa){if(this.pages="2",uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));console.log(a.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+a.user.id+"&page="+this.pages+"&state=3",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(t){if(uni.hideLoading(),console.log(t.data),0==t.data.content.list.length)return uni.showToast({title:"没有数据啦",icon:"none",duration:1e3}),!1;e.pages++,t.data.content.list.map(function(t,i){e.shu.push(t)}),console.log(e.shu)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(5==this.numa&&(this.pages="2",uni.getStorageSync("landRegist"))){var s=JSON.parse(uni.getStorageSync("landRegist"));console.log(s.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+s.user.id+"&page="+this.pages+"&state=4",method:"GET",header:{Authorization:"Bearer "+s.token},success:function(t){if(uni.hideLoading(),console.log(t.data),0==t.data.content.list.length)return uni.showToast({title:"没有数据啦",icon:"none",duration:1e3}),!1;e.pages++,t.data.content.list.map(function(t,i){e.shu.push(t)}),console.log(e.shu)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},gotoGood:function(e){var t=this;if(this.numa=e,0==e){if(this.pages="1",uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));console.log(i.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+i.user.id+"&page="+this.pages,method:"GET",header:{Authorization:"Bearer "+i.token},success:function(e){uni.hideLoading(),console.log(e.data),t.shu=e.data.content.list},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(1==e){if(this.pages="1",uni.getStorageSync("landRegist")){var o=JSON.parse(uni.getStorageSync("landRegist"));console.log(o.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+o.user.id+"&page="+this.pages+"&state=0",method:"GET",header:{Authorization:"Bearer "+o.token},success:function(e){uni.hideLoading(),console.log(e.data),t.shu=e.data.content.list},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(2==e){if(this.pages="1",uni.getStorageSync("landRegist")){var n=JSON.parse(uni.getStorageSync("landRegist"));console.log(n.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+n.user.id+"&page="+this.pages+"&state=1",method:"GET",header:{Authorization:"Bearer "+n.token},success:function(e){uni.hideLoading(),console.log(e.data),t.shu=e.data.content.list},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(3==e){if(this.pages="1",uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));console.log(a.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+a.user.id+"&page="+this.pages+"&state=2",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(e){uni.hideLoading(),console.log(e.data),t.shu=e.data.content.list},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(4==e){if(this.pages="1",uni.getStorageSync("landRegist")){var s=JSON.parse(uni.getStorageSync("landRegist"));console.log(s.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+s.user.id+"&page="+this.pages+"&state=3",method:"GET",header:{Authorization:"Bearer "+s.token},success:function(e){uni.hideLoading(),console.log(e.data),t.shu=e.data.content.list},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else if(5==e&&(this.pages="1",uni.getStorageSync("landRegist"))){var r=JSON.parse(uni.getStorageSync("landRegist"));console.log(r.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+r.user.id+"&page="+this.pages+"&state=4",method:"GET",header:{Authorization:"Bearer "+r.token},success:function(e){uni.hideLoading(),console.log(e.data),t.shu=e.data.content.list},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},Supply:function(){var e=this;if(uni.getStorageSync("landRegist")){var t=JSON.parse(uni.getStorageSync("landRegist"));console.log(t.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+t.user.id+"&page="+this.pages,method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){uni.hideLoading(),console.log(t.data),e.gong=t.data.content.list,e.$store.commit("setSupply",e.gong),e.pages++},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},gotodetails:function(e){console.log("订单详情"),uni.navigateTo({url:"/modules/InstructionsPrice/Order/Order-list/Order-details/Order-details?id="+e})}},computed:n({},(0,o.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"]))};t.default=s},7571:function(e,t,i){"use strict";i.r(t);var o=i("2df2"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);t["default"]=n.a},"91e5":function(e,t,i){"use strict";i.r(t);var o=i("2193"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);t["default"]=n.a},a709:function(e,t,i){var o=i("0080");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("148ac900",o,!0,{sourceMap:!1,shadowMode:!1})},ca05:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"Purchase-order"},[i("v-uni-view",{staticClass:"my-Already-header"},[i("v-uni-view",{staticClass:"my-Already-headerone"},e._l(e.List,function(t,o){return i("span",{key:o,class:e.numa==o?"changeColors":"",on:{click:function(t){t=e.$handleEvent(t),e.gotoGood(o)}}},[e._v(e._s(t))])}),0)],1),i("v-uni-view",{staticClass:"tian"}),i("v-uni-scroll-view",{staticClass:"scroll-v list",attrs:{"scroll-y":"true"},on:{scrolltolower:function(t){t=e.$handleEvent(t),e.loadMore()}}},[e._l(e.shu,function(t,o){return i("v-uni-view",{key:o,staticClass:"Purchase-order-list"},[1==t.orderType?i("v-uni-image",{staticClass:"Purchase-order-tu",attrs:{src:e.biao}}):e._e(),0==t.orderType?i("v-uni-image",{staticClass:"Purchase-order-tu",attrs:{src:e.ding},on:{click:function(i){i=e.$handleEvent(i),e.gotodetails(t.id)}}}):e._e(),i("v-uni-view",{staticClass:"Purchase-order-listA",on:{click:function(i){i=e.$handleEvent(i),e.gotodetails(t.id)}}},[i("v-uni-view",[e._v("订单号:"+e._s(t.orderOrder))]),0==t.orderState?i("v-uni-view",[e._v("待确认")]):e._e(),1==t.orderState?i("v-uni-view",{staticStyle:{color:"#02C2A2"}},[e._v("待发货")]):e._e(),2==t.orderState?i("v-uni-view",{staticStyle:{color:"#02C2A2"}},[e._v("待收货")]):e._e(),3==t.orderState?i("v-uni-view",{staticStyle:{color:"#FF4D6A"}},[e._v("已完成")]):e._e(),4==t.orderState?i("v-uni-view",{staticStyle:{color:"#2E2E30"}},[e._v("已关闭")]):e._e()],1),i("v-uni-view",{staticClass:"Purchase-order-listB",on:{click:function(i){i=e.$handleEvent(i),e.gotodetails(t.id)}}},[i("v-uni-view",{staticClass:"Purchase-order-listB-img"},[i("v-uni-image",{attrs:{src:t.bannerImg,mode:""}})],1),i("v-uni-view",{staticClass:"Purchase-order-listB-zi"},[i("v-uni-view",[e._v(e._s(t.instrucTitle))]),i("v-uni-view",[e._v(e._s(t.instrucIntro))]),i("v-uni-view",[e._v(e._s(t.moneyStr)+"  X"+e._s(t.orderSpCount))])],1)],1),i("v-uni-view",{staticClass:"Purchase-order-listC"},[i("v-uni-view",[e._v("订单总额约："),i("span",[e._v("￥"+e._s(t.orderSpMoney))])]),"3"===t.orderState||"4"===t.orderState?i("v-uni-view",{on:{click:function(i){i=e.$handleEvent(i),e.gotoAgain(t)}}},[e._v("再来一单")]):e._e()],1)],1)}),0===e.shu.length?i("v-uni-view",{staticClass:"meirenkanwo"},[i("v-uni-image",{attrs:{src:e.kong,mode:""}}),e._v("暂无！")],1):e._e()],2)],1)},n=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return n})},d1a0:function(e,t,i){"use strict";var o=i("0e31"),n=i.n(o);n.a},dcb9:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'.Order[data-v-2b21bfa5]{width:100%;min-height:100%}.tian[data-v-2b21bfa5]{width:100%;height:%?88?%}.my-Focusonfans-header[data-v-2b21bfa5]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-2b21bfa5]{width:5%;margin-left:%?38?%}.my-Focusonfans-title[data-v-2b21bfa5]{margin:0 auto;width:40%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.my-Focusonfans-title>uni-view[data-v-2b21bfa5]{width:50%;height:100%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30;position:relative}.changeColor[data-v-2b21bfa5]{color:#02c2a2!important;font-weight:700;font-size:%?32?%}.changeColor[data-v-2b21bfa5]:before{content:"";position:absolute;left:36%;top:%?70?%;bottom:auto;right:auto;height:%?7?%;width:30%;background-color:#02c2a2;color:#02c2a2}',""])},e61d:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"Supply-order"},[i("v-uni-view",{staticClass:"my-Already-header"},[i("v-uni-view",{staticClass:"my-Already-headerone"},e._l(e.List,function(t,o){return i("span",{key:o,class:e.numa==o?"changeColors":"",on:{click:function(t){t=e.$handleEvent(t),e.gotoGood(o)}}},[e._v(e._s(t))])}),0)],1),i("v-uni-view",{staticClass:"tian"}),i("v-uni-scroll-view",{staticClass:"scroll-v list",attrs:{"scroll-y":"true"},on:{scrolltolower:function(t){t=e.$handleEvent(t),e.loadMore()}}},[e._l(e.shu,function(t,o){return i("v-uni-view",{key:o,staticClass:"Supply-order-list",on:{click:function(i){i=e.$handleEvent(i),e.gotodetails(t.id)}}},[1==t.orderType?i("v-uni-image",{staticClass:"Supply-order-tu",attrs:{src:e.biao}}):e._e(),0==t.orderType?i("v-uni-image",{staticClass:"Supply-order-tu",attrs:{src:e.ding}}):e._e(),i("v-uni-view",{staticClass:"Supply-order-listA"},[i("v-uni-view",[e._v("订单号:"+e._s(t.orderOrder))]),0==t.orderState?i("v-uni-view",[e._v("待确认")]):e._e(),1==t.orderState?i("v-uni-view",{staticStyle:{color:"#02C2A2"}},[e._v("待发货")]):e._e(),2==t.orderState?i("v-uni-view",{staticStyle:{color:"#02C2A2"}},[e._v("待收货")]):e._e(),3==t.orderState?i("v-uni-view",{staticStyle:{color:"#FF4D6A"}},[e._v("已完成")]):e._e(),4==t.orderState?i("v-uni-view",{staticStyle:{color:"#2E2E30"}},[e._v("已关闭")]):e._e()],1),i("v-uni-view",{staticClass:"Supply-order-listB"},[i("v-uni-view",{staticClass:"Supply-order-listB-img"},[i("v-uni-image",{attrs:{src:t.bannerImg,mode:""}})],1),i("v-uni-view",{staticClass:"Supply-order-listB-zi"},[i("v-uni-view",[e._v(e._s(t.instrucTitle))]),i("v-uni-view",[e._v(e._s(t.moneyStr)+"  X"+e._s(t.orderSpCount))]),i("v-uni-view",[e._v("订单总额约："),i("span",[e._v("￥"+e._s(t.orderSpMoney))])])],1)],1),i("v-uni-view",{staticClass:"Supply-order-listC"},[i("v-uni-view",[e._v("采购方："+e._s(t.userName))]),i("v-uni-view",[e._v("联系电话："+e._s(t.ssoUserName))])],1)],1)}),0===e.shu.length?i("v-uni-view",{staticClass:"meirenkanwo"},[i("v-uni-image",{attrs:{src:e.kong,mode:""}}),e._v("暂无！")],1):e._e()],2)],1)},n=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return n})},f6b6:function(e,t,i){"use strict";var o=i("1020"),n=i.n(o);n.a}}]);