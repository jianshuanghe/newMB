(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-mySetup-mySetups-mySetup-WX"],{"13fc":function(t,a,e){"use strict";var i=e("fc13"),n=e.n(i);n.a},"538e":function(t,a,e){"use strict";e.r(a);var i=e("bcf3"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=n.a},"572c":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"mySetup-WX"},[e("v-uni-view",{staticClass:"my-title"},[e("div",{staticClass:"quickBtn-Fd left"},[e("quickBtn")],1),e("div",{staticClass:"search-Fd left"},[t._v(t._s(t.i18n.title21))])]),e("div",{staticClass:"removeBind"},[e("div",{staticClass:"RB-cont"},[e("div",{staticClass:"items-RB"},[t.UserWxId?t._e():e("div",{},[e("div",{staticClass:"input-RB"},[e("wInput",{attrs:{inputWidth:t.width,name:"mobile",placeholder:"请输入要绑定的微信",keyboard:"number","show-clear":!1},model:{value:t.UserData,callback:function(a){t.UserData=a},expression:"UserData"}})],1),e("div",{class:t.UserData?"btn-RB":"btn-RB2",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickUpData(2)}}},[e("p",{},[t._v("保存")])])]),t.UserWxId?e("div",{},[e("div",{staticClass:"input-RB"},[e("wInput",{attrs:{inputWidth:t.width,name:"mobile",disabled:"",placeholder:"",keyboard:"number","show-clear":!1},model:{value:t.UserData,callback:function(a){t.UserData=a},expression:"UserData"}})],1),e("div",{class:t.UserData?"btn-RB":"btn-RB2",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickUpData(3)}}},[e("p",{},[t._v("解除绑定")])])]):t._e()])])]),t.QUICKNAVCO.show?e("navigation"):t._e()],1)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},a998:function(t,a,e){"use strict";e.r(a);var i=e("572c"),n=e("538e");for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);e("13fc");var s=e("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"a3a0afec",null);a["default"]=r.exports},bcf3:function(t,a,e){"use strict";(function(t){var i=e("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("cebc")),o=i(e("2de2")),s=i(e("5a67")),r=e("2f62"),c=i(e("2a48")),d={data:function(){return{UserData:"",UserWxId:!0,width:"100%"}},components:{quickBtn:o.default,navigation:s.default,wInput:c.default},computed:(0,n.default)({i18n:function(){return this.$t("Mypersonal")}},(0,r.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){uni.setNavigationBarTitle({title:this.i18n.title12}),this.UserData=this.GET_MY.headers.wxId,""==this.UserData?this.UserWxId=!1:this.UserWxId=!0},methods:{clickUpData:function(a){var e=this,i=this;if(3===a)uni.showModal({title:"提示",content:"是否确定解绑微信？",success:function(a){a.confirm?(t.log("用户点击确定"),i.UserWxId=!1,i.UserData=""):a.cancel&&t.log("用户点击取消")}});else if(2===a){if(!/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(this.UserData))return uni.showToast({title:"微信号格式有误",icon:"none",duration:1e3}),!1;if(uni.getStorageSync("landRegist")){var n=JSON.parse(uni.getStorageSync("landRegist"));t.log(n.user.id);var o={wxId:this.UserData};uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+n.user.id,data:o,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(a){uni.hideLoading(),t.log(a.data),e.getmy(),uni.navigateBack({})},fail:function(a){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(a,"网络繁忙，请稍后")}})}}},getmy:function(){var a=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));t.log(e.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+e.user.id,method:"GET",header:{Authorization:"Bearer "+e.token},success:function(t){uni.hideLoading(),a.list=t.data.content,a.$store.commit("setMy",a.list)},fail:function(a){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(a,"网络繁忙，请稍后")}})}}}};a.default=d}).call(this,e("5a52")["default"])},c794:function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,".mySetup-WX[data-v-a3a0afec]{width:100%;height:100%;overflow:hidden}.my-title[data-v-a3a0afec]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-a3a0afec]{width:5%;margin-left:%?38?%}.search-Fd[data-v-a3a0afec]{position:relative;width:100%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30}.removeBind[data-v-a3a0afec]{position:relative;width:100%;margin-top:%?110?%}.RB-cont[data-v-a3a0afec]{position:relative;width:100%}.items-RB[data-v-a3a0afec]{position:relative;width:100%}.items-RB>div[data-v-a3a0afec]{position:relative;width:100%}.input-RB[data-v-a3a0afec]{position:relative;width:100%;background:#fff;padding:2vw 5vw 2vw 5vw}.btn-RB[data-v-a3a0afec]{position:relative;width:100%;padding:4vw;margin-top:6vw}.btn-RB>p[data-v-a3a0afec]{background:#02c2a2;text-align:center;font-family:PingFangSC-Regular;font-size:4.266vw;color:#fff;letter-spacing:0;line-height:12vw}.btn-RB2[data-v-a3a0afec]{position:relative;width:100%;padding:4vw;margin-top:6vw;opacity:.5}.btn-RB2>p[data-v-a3a0afec]{background:#02c2a2;text-align:center;font-family:PingFangSC-Regular;font-size:4.266vw;color:#fff;letter-spacing:0;line-height:12vw}",""])},fc13:function(t,a,e){var i=e("c794");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("4082515f",i,!0,{sourceMap:!1,shadowMode:!1})}}]);