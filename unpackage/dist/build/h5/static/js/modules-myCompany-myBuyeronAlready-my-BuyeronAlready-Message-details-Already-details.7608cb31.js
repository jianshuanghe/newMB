(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-myBuyeronAlready-my-BuyeronAlready-Message-details-Already-details"],{"2d62":function(t,e,i){var a=i("6c2b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("314cb8b9",a,!0,{sourceMap:!1,shadowMode:!1})},"6c2b":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".Already-details[data-v-3be2dd62]{width:100%;min-height:100%;background:#fff}.tian[data-v-3be2dd62]{width:100%;height:%?88?%}.my-title[data-v-3be2dd62]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-3be2dd62]{width:5%;margin-left:%?38?%}.search-Fd[data-v-3be2dd62]{position:relative;width:100%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30}.Already-details-title[data-v-3be2dd62]{width:90%;font-size:%?40?%;font-weight:700;color:#2e2e30;margin:%?-10?% auto auto auto}.Already-details-time[data-v-3be2dd62]{width:90%;font-size:%?28?%;color:#9b9b9b;margin:%?20?% auto auto auto}.Already-details-zi[data-v-3be2dd62]{width:90%;font-size:%?32?%;color:#2e2e30;margin:%?20?% auto auto auto;line-height:24px}.Already-details-LX[data-v-3be2dd62]{width:90%;font-size:%?28?%;color:#2e2e30;margin:%?30?% auto auto auto}.Already-details-DH[data-v-3be2dd62]{width:90%;font-size:%?28?%;color:#2e2e30;margin:%?10?% auto auto auto}.Already-details-DH>span[data-v-3be2dd62]{color:#02c2a2;margin-left:%?10?%}.Already-details-GL[data-v-3be2dd62]{width:90%;height:%?146?%;background:#f2fefc;border-left:%?4?% solid #02c2a2;margin:%?30?% auto auto auto}.Already-details-GL>uni-view[data-v-3be2dd62]:first-of-type{font-weight:700!important}.Already-details-GL>uni-view[data-v-3be2dd62]{width:90%;height:50%;font-size:%?28?%;color:#02c2a2;margin-left:%?20?%;line-height:%?73?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.Already-details-del[data-v-3be2dd62]{width:100%;height:%?88?%;text-align:center;line-height:%?88?%;font-size:%?32?%;color:#2e2e30;background:#fff;position:fixed;bottom:0;border-top:%?2?% solid #f5f5f5}.Already-details-XS[data-v-3be2dd62]{width:90%;margin:%?40?% auto;height:%?2?%;border-bottom:%?2?% dashed #e2e2e2}.Buyer-details-tian[data-v-3be2dd62]{width:100%;height:%?100?%}",""])},7151:function(t,e,i){"use strict";i.r(e);var a=i("d033"),n=i("ef6c");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("f95d6");var s=i("2877"),d=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"3be2dd62",null);e["default"]=d.exports},"8e7d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("270e")),n=s(i("9063")),o=i("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){r(t,e,i[e])})}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={data:function(){return{list:[]}},components:{quickBtn:a.default,navigation:n.default},computed:d({i18n:function(){return this.$t("Mypersonal")}},(0,o.mapGetters)(["GET_HOME","QUICKNAVCO"])),created:function(){this.shareEachPage()},onLoad:function(t){this.id=t.id,console.log(t),uni.setNavigationBarTitle({title:this.i18n.message1}),this.Already()},filters:{formatDate:function(t){var e=new Date(t),i=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var n=e.getDate();n=n<10?"0"+n:n;var o=e.getHours();o=o<10?"0"+o:o;var s=e.getMinutes();s=s<10?"0"+s:s;var d=e.getSeconds();return d=d<10?"0"+d:d,i+"."+a+"."+n}},methods:{tiao:function(t){var e=null;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));e=i.user.id}else e=uni.getStorageSync("UUID");var a={isFlow:0,tempType:0,orderType:0,sourceTemp:2,aiListTemp:1,id:t.tempId,isMenu:t.isMenu,instrucId:t.instrucId,lookUserId:e,creatorId:t.userId,instrucState:t.instState,instrucCustType:t.instCustType};uni.navigateTo({url:"/modules/createBusiness/templatePro/templatePro?urlParams="+this.urlCrypto(a,0)})},phone:function(t){uni.makePhoneCall({phoneNumber:t})},gotoGood:function(t){this.num=t},del:function(){var t=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));console.log(e.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/msg/"+this.id,method:"DELETE",header:{Authorization:"Bearer "+e.token},success:function(e){uni.hideLoading(),console.log(e.data),t.Alreadys(),uni.navigateBack({})},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},Alreadys:function(){var t=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));console.log(e.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/msg/selectList?myUserId="+e.user.id+"&page=1",method:"GET",header:{Authorization:"Bearer "+e.token},success:function(e){uni.hideLoading(),console.log(e.data),t.Alr=e.data.content.list,t.$store.commit("setAlr",t.Alr)},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},Already:function(){var t=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));console.log(e.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/msg/selectInfo?id="+this.id,method:"GET",header:{Authorization:"Bearer "+e.token},success:function(e){uni.hideLoading(),console.log(e.data),t.list=e.data.content},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}}}};e.default=l},d033:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"Already-details"},[i("v-uni-view",{staticClass:"my-title"},[i("div",{staticClass:"quickBtn-Fd left"},[i("quickBtn")],1),i("div",{staticClass:"search-Fd left"},[t._v(t._s(t.i18n.message4))])]),i("v-uni-view",{staticClass:"tian"}),i("v-uni-view",{staticClass:"Already-details-GL"},[i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.tiao(t.list)}}},[t._v("关联供应："+t._s(t.list.instrucTitl))]),i("v-uni-view",[t._v(t._s(t.list.compUserName)+"·"+t._s(t.list.compTel)+"·"+t._s(t.list.compName))])],1),i("v-uni-view",{staticClass:"Already-details-XS"}),i("v-uni-view",{staticClass:"Already-details-title"},[t._v(t._s(t.list.instrucTitl))]),i("v-uni-view",{staticClass:"Already-details-time"},[t._v(t._s(t._f("formatDate")(t.list.msgTime)))]),i("v-uni-view",{staticClass:"Already-details-zi"},[t._v(t._s(t.list.msgContent))]),i("v-uni-view",{staticClass:"Already-details-LX"},[t._v("联系人: "+t._s(t.list.name))]),i("v-uni-view",{staticClass:"Already-details-DH"},[t._v("联系电话:"),i("span",{on:{click:function(e){e=t.$handleEvent(e),t.phone(t.list.mobile)}}},[t._v(t._s(t.list.mobile))])]),i("v-uni-view",{staticClass:"Buyer-details-tian"}),i("v-uni-view",{staticClass:"Already-details-del",on:{click:function(e){e=t.$handleEvent(e),t.del()}}},[t._v("删除此留言")]),t.QUICKNAVCO.show?i("navigation"):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},ef6c:function(t,e,i){"use strict";i.r(e);var a=i("8e7d"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},f95d6:function(t,e,i){"use strict";var a=i("2d62"),n=i.n(a);n.a}}]);