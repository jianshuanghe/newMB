(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-mySetup-mySetups-mySetup-WX"],{"112a":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".mySetup-WX[data-v-fc66da0e]{width:100%;height:100%;overflow:hidden}.my-title[data-v-fc66da0e]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-fc66da0e]{width:5%;margin-left:%?38?%}.search-Fd[data-v-fc66da0e]{position:relative;width:100%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30}.removeBind[data-v-fc66da0e]{position:relative;width:100%;margin-top:%?110?%}.RB-cont[data-v-fc66da0e]{position:relative;width:100%}.items-RB[data-v-fc66da0e]{position:relative;width:100%}.input-RB[data-v-fc66da0e]{position:relative;width:100%;background:#fff;padding:2vw 5vw 2vw 5vw}.btn-RB[data-v-fc66da0e]{position:relative;width:100%;padding:4vw;margin-top:6vw}.btn-RB>p[data-v-fc66da0e]{background:#02c2a2;text-align:center;font-family:PingFangSC-Regular;font-size:4.266vw;color:#fff;letter-spacing:0;line-height:12vw}.btn-RB2[data-v-fc66da0e]{position:relative;width:100%;padding:4vw;margin-top:6vw;opacity:.5}.btn-RB2>p[data-v-fc66da0e]{background:#02c2a2;text-align:center;font-family:PingFangSC-Regular;font-size:4.266vw;color:#fff;letter-spacing:0;line-height:12vw}",""])},"7db6":function(t,e,a){"use strict";a.r(e);var i=a("c4fd"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},8790:function(t,e,a){"use strict";a.r(e);var i=a("a6fd"),n=a("7db6");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("c1a0");var s=a("2877"),d=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"fc66da0e",null);e["default"]=d.exports},a6fd:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"mySetup-WX"},[a("v-uni-view",{staticClass:"my-title"},[a("div",{staticClass:"quickBtn-Fd left"},[a("quickBtn")],1),a("div",{staticClass:"search-Fd left"},[t._v(t._s(t.i18n.title21))])]),a("div",{staticClass:"removeBind"},[a("div",{staticClass:"RB-cont"},[a("div",{staticClass:"items-RB"},[t.UserWxId?t._e():a("div",{},[a("div",{staticClass:"input-RB"},[a("wInput",{attrs:{name:"mobile",placeholder:"请输入要绑定的微信账",keyboard:"number","show-clear":!1},model:{value:t.UserData,callback:function(e){t.UserData=e},expression:"UserData"}})],1),a("div",{class:t.UserData?"btn-RB":"btn-RB2",on:{click:function(e){e=t.$handleEvent(e),t.clickUpData(2)}}},[a("p",{},[t._v("保存")])])]),t.UserWxId?a("div",{},[a("div",{staticClass:"input-RB"},[a("wInput",{attrs:{name:"mobile",disabled:"",placeholder:"",keyboard:"number","show-clear":!1},model:{value:t.UserData,callback:function(e){t.UserData=e},expression:"UserData"}})],1),a("div",{class:t.UserData?"btn-RB":"btn-RB2",on:{click:function(e){e=t.$handleEvent(e),t.clickUpData(3)}}},[a("p",{},[t._v("解除绑定")])])]):t._e()])])]),t.QUICKNAVCO.show?a("navigation"):t._e()],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},c1a0:function(t,e,a){"use strict";var i=a("c977"),n=a.n(i);n.a},c4fd:function(t,e,a){"use strict";(function(t){var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("cebc")),o=i(a("eb12")),s=i(a("8a8b")),d=a("2f62"),r=i(a("ef82")),c={data:function(){return{UserData:"",UserWxId:!0}},components:{quickBtn:o.default,navigation:s.default,wInput:r.default},computed:(0,n.default)({i18n:function(){return this.$t("Mypersonal")}},(0,d.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){uni.setNavigationBarTitle({title:this.i18n.title12}),this.UserData=this.GET_MY.headers.wxId,""==this.UserData?this.UserWxId=!1:this.UserWxId=!0},methods:{clickUpData:function(e){var a=this,i=this;if(3===e)uni.showModal({title:"提示",content:"是否确定解绑微信？",success:function(e){e.confirm?(t.log("用户点击确定"),i.UserWxId=!1,i.UserData=""):e.cancel&&t.log("用户点击取消")}});else if(2===e){if(!/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(this.UserData))return uni.showToast({title:"微信号格式有误",icon:"none",duration:1e3}),!1;if(uni.getStorageSync("landRegist")){var n=JSON.parse(uni.getStorageSync("landRegist"));t.log(n.user.id);var o={wxId:this.UserData};uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/760",data:o,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(e){uni.hideLoading(),t.log(e.data),a.getmy(),uni.navigateBack({})},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(e,"网络繁忙，请稍后")}})}}},getmy:function(){var e=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));t.log(a.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/760",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(t){uni.hideLoading(),e.list=t.data.content,e.$store.commit("setMy",e.list)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(e,"网络繁忙，请稍后")}})}}}};e.default=c}).call(this,a("5a52")["default"])},c977:function(t,e,a){var i=a("112a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("efc7ba34",i,!0,{sourceMap:!1,shadowMode:!1})}}]);