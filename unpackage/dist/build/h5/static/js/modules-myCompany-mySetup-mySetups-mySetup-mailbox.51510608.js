(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-mySetup-mySetups-mySetup-mailbox"],{"53eb":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"mySetup-mailbox"},[i("v-uni-view",{staticClass:"my-title"},[i("div",{staticClass:"quickBtn-Fd left"},[i("quickBtn")],1),i("div",{staticClass:"search-Fd left"},[t._v(t._s(t.i18n.title19))])]),i("div",{staticClass:"removeBind"},[i("div",{staticClass:"RB-cont"},[i("div",{staticClass:"items-RB"},[i("div",{staticClass:"input-RB"},[i("wInput",{attrs:{name:"mobile",placeholder:"请输入邮箱地址",keyboard:"number","show-clear":!1},model:{value:t.UserData,callback:function(e){t.UserData=e},expression:"UserData"}})],1),i("div",{class:t.UserData?"btn-RB":"btn-RB2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickUpData()}}},[i("p",{},[t._v("保存")])])])])]),t.QUICKNAVCO.show?i("navigation"):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"70e9":function(t,e,i){"use strict";var a=i("aa5b"),n=i.n(a);n.a},"754a":function(t,e,i){"use strict";(function(t){var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("cebc")),o=a(i("819c")),s=a(i("2f84")),r=i("2f62"),d=a(i("e1c0")),u={data:function(){return{UserData:"",confirmShow:!1,confirmBtn:"确定",cancelBtn:"取消",confirmTitle:"提示",confirmText:"是否要解除微信绑定?"}},components:{quickBtn:o.default,navigation:s.default,wInput:d.default},computed:(0,n.default)({i18n:function(){return this.$t("Mypersonal")}},(0,r.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){uni.setNavigationBarTitle({title:this.i18n.title12}),this.UserData=this.GET_MY.headers.userEmail},methods:{clickUpData:function(){var e=this;if(""===this.UserData)return uni.showToast({title:"邮箱不能为空",icon:"none",duration:1e3}),!1;if(this.UserData&&!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.UserData))return uni.showToast({title:"邮箱格式有误",icon:"none",duration:1e3}),!1;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));t.log(i.user.id);var a={userEmail:this.UserData};uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+i.user.id,data:a,method:"POST",header:{Authorization:"Bearer "+i.token},success:function(i){uni.hideLoading(),t.log(i.data),e.getmy(),uni.navigateBack({})},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(e,"网络繁忙，请稍后")}})}},getmy:function(){var e=this;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));t.log(i.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+i.user.id,method:"GET",header:{Authorization:"Bearer "+i.token},success:function(t){uni.hideLoading(),e.list=t.data.content,e.$store.commit("setMy",e.list)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(e,"网络繁忙，请稍后")}})}}}};e.default=u}).call(this,i("5a52")["default"])},9116:function(t,e,i){"use strict";i.r(e);var a=i("754a"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},aa5b:function(t,e,i){var a=i("c74d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("30be2a81",a,!0,{sourceMap:!1,shadowMode:!1})},c74d:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".mySetup-mailbox[data-v-22de0696]{width:100%;height:100%;overflow:hidden}.my-title[data-v-22de0696]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-22de0696]{width:5%;margin-left:%?38?%}.search-Fd[data-v-22de0696]{position:relative;width:100%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30}.removeBind[data-v-22de0696]{position:relative;width:100%;margin-top:%?110?%}.RB-cont[data-v-22de0696]{position:relative;width:100%}.items-RB[data-v-22de0696]{position:relative;width:100%}.input-RB[data-v-22de0696]{position:relative;width:100%;background:#fff;padding:2vw 5vw 2vw 5vw}.btn-RB[data-v-22de0696]{position:relative;width:100%;padding:4vw;margin-top:6vw}.btn-RB>p[data-v-22de0696]{background:#02c2a2;text-align:center;font-family:PingFangSC-Regular;font-size:4.266vw;color:#fff;letter-spacing:0;line-height:12vw}.btn-RB2[data-v-22de0696]{position:relative;width:100%;padding:4vw;margin-top:6vw;opacity:.5}.btn-RB2>p[data-v-22de0696]{background:#02c2a2;text-align:center;font-family:PingFangSC-Regular;font-size:4.266vw;color:#fff;letter-spacing:0;line-height:12vw}",""])},d119:function(t,e,i){"use strict";i.r(e);var a=i("53eb"),n=i("9116");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("70e9");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"22de0696",null);e["default"]=r.exports}}]);