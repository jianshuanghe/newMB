(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-mySetup-mySetups-mySetup-mailbox"],{"10fd":function(t,a,i){"use strict";var e=i("3048"),n=i.n(e);n.a},3048:function(t,a,i){var e=i("5aa0");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("26fd3456",e,!0,{sourceMap:!1,shadowMode:!1})},"5aa0":function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".mySetup-mailbox[data-v-21ea5bba]{width:100%;height:100%;overflow:hidden}.my-title[data-v-21ea5bba]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-21ea5bba]{width:5%;margin-left:%?38?%}.search-Fd[data-v-21ea5bba]{position:relative;width:100%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30}.removeBind[data-v-21ea5bba]{position:relative;width:100%;margin-top:%?110?%}.RB-cont[data-v-21ea5bba]{position:relative;width:100%}.items-RB[data-v-21ea5bba]{position:relative;width:100%}.input-RB[data-v-21ea5bba]{position:relative;width:100%;background:#fff;padding:2vw 5vw 2vw 5vw}.btn-RB[data-v-21ea5bba]{position:relative;width:100%;padding:4vw;margin-top:6vw}.btn-RB>p[data-v-21ea5bba]{background:#02c2a2;text-align:center;font-family:PingFangSC-Regular;font-size:4.266vw;color:#fff;letter-spacing:0;line-height:12vw}.btn-RB2[data-v-21ea5bba]{position:relative;width:100%;padding:4vw;margin-top:6vw;opacity:.5}.btn-RB2>p[data-v-21ea5bba]{background:#02c2a2;text-align:center;font-family:PingFangSC-Regular;font-size:4.266vw;color:#fff;letter-spacing:0;line-height:12vw}",""])},7992:function(t,a,i){"use strict";(function(t){var e=i("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("cebc")),o=e(i("2de2")),s=e(i("5a67")),r=i("2f62"),u=e(i("2a48")),d={data:function(){return{UserData:"",confirmShow:!1,confirmBtn:"确定",cancelBtn:"取消",confirmTitle:"提示",confirmText:"是否要解除微信绑定?",width:"100%"}},components:{quickBtn:o.default,navigation:s.default,wInput:u.default},computed:(0,n.default)({i18n:function(){return this.$t("Mypersonal")}},(0,r.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){uni.setNavigationBarTitle({title:this.i18n.title12}),this.UserData=this.GET_MY.headers.userEmail},methods:{clickUpData:function(){var a=this;if(""===this.UserData)return uni.showToast({title:"邮箱不能为空",icon:"none",duration:1e3}),!1;if(this.UserData&&!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.UserData))return uni.showToast({title:"邮箱格式有误",icon:"none",duration:1e3}),!1;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));t.log(i.user.id);var e={userEmail:this.UserData};uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+i.user.id,data:e,method:"POST",header:{Authorization:"Bearer "+i.token},success:function(i){uni.hideLoading(),t.log(i.data),a.getmy(),uni.navigateBack({})},fail:function(a){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(a,"网络繁忙，请稍后")}})}},getmy:function(){var a=this;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));t.log(i.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+i.user.id,method:"GET",header:{Authorization:"Bearer "+i.token},success:function(t){uni.hideLoading(),a.list=t.data.content,a.$store.commit("setMy",a.list)},fail:function(a){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(a,"网络繁忙，请稍后")}})}}}};a.default=d}).call(this,i("5a52")["default"])},8565:function(t,a,i){"use strict";i.r(a);var e=i("b141"),n=i("eebb");for(var o in n)"default"!==o&&function(t){i.d(a,t,function(){return n[t]})}(o);i("10fd");var s=i("2877"),r=Object(s["a"])(n["default"],e["a"],e["b"],!1,null,"21ea5bba",null);a["default"]=r.exports},b141:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"mySetup-mailbox"},[i("v-uni-view",{staticClass:"my-title"},[i("div",{staticClass:"quickBtn-Fd left"},[i("quickBtn")],1),i("div",{staticClass:"search-Fd left"},[t._v(t._s(t.i18n.title19))])]),i("div",{staticClass:"removeBind"},[i("div",{staticClass:"RB-cont"},[i("div",{staticClass:"items-RB"},[i("div",{staticClass:"input-RB"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入邮箱地址"},model:{value:t.UserData,callback:function(a){t.UserData=a},expression:"UserData"}})],1),i("div",{class:t.UserData?"btn-RB":"btn-RB2",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickUpData()}}},[i("p",{},[t._v("保存")])])])])]),t.QUICKNAVCO.show?i("navigation"):t._e()],1)},n=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return n})},eebb:function(t,a,i){"use strict";i.r(a);var e=i("7992"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,function(){return e[t]})}(o);a["default"]=n.a}}]);