(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-mySetup-mySetups-mySetup-mailbox"],{"0ca1":function(t,i,a){"use strict";var e=a("309d"),n=a.n(e);n.a},"1c7c":function(t,i,a){"use strict";a.r(i);var e=a("a814"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,function(){return e[t]})}(o);i["default"]=n.a},"27a1":function(t,i,a){"use strict";a.r(i);var e=a("917f"),n=a("1c7c");for(var o in n)"default"!==o&&function(t){a.d(i,t,function(){return n[t]})}(o);a("0ca1");var s=a("2877"),r=Object(s["a"])(n["default"],e["a"],e["b"],!1,null,"07479f14",null);i["default"]=r.exports},"309d":function(t,i,a){var e=a("caa2");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("5ddf9f33",e,!0,{sourceMap:!1,shadowMode:!1})},"917f":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"mySetup-mailbox"},[a("v-uni-view",{staticClass:"my-title"},[a("div",{staticClass:"quickBtn-Fd left"},[a("quickBtn")],1),a("div",{staticClass:"search-Fd left"},[t._v(t._s(t.i18n.title19))])]),a("div",{staticClass:"removeBind"},[a("div",{staticClass:"RB-cont"},[a("div",{staticClass:"items-RB"},[a("div",{staticClass:"input-RB"},[a("wInput",{attrs:{name:"mobile",placeholder:"请输入邮箱地址",keyboard:"number","show-clear":!1},model:{value:t.UserData,callback:function(i){t.UserData=i},expression:"UserData"}})],1),a("div",{class:t.UserData?"btn-RB":"btn-RB2",on:{click:function(i){i=t.$handleEvent(i),t.clickUpData()}}},[a("p",{},[t._v("保存")])])])])]),t.QUICKNAVCO.show?a("navigation"):t._e()],1)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},a814:function(t,i,a){"use strict";(function(t){var e=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("cebc")),o=e(a("4cb2")),s=e(a("e2a4")),r=a("2f62"),u=e(a("16c2")),c={data:function(){return{UserData:"",confirmShow:!1,confirmBtn:"确定",cancelBtn:"取消",confirmTitle:"提示",confirmText:"是否要解除微信绑定?"}},components:{quickBtn:o.default,navigation:s.default,wInput:u.default},computed:(0,n.default)({i18n:function(){return this.$t("Mypersonal")}},(0,r.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){uni.setNavigationBarTitle({title:this.i18n.title12}),this.UserData=this.GET_MY.headers.userEmail},methods:{clickUpData:function(){var i=this;if(""===this.UserData)return uni.showToast({title:"邮箱不能为空",icon:"none",duration:1e3}),!1;if(this.UserData&&!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.UserData))return uni.showToast({title:"邮箱格式有误",icon:"none",duration:1e3}),!1;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));t.log(a.user.id);var e={userEmail:this.UserData};uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+a.user.id,data:e,method:"POST",header:{Authorization:"Bearer "+a.token},success:function(a){uni.hideLoading(),t.log(a.data),i.getmy(),uni.navigateBack({})},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}},getmy:function(){var i=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));t.log(a.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+a.user.id,method:"GET",header:{Authorization:"Bearer "+a.token},success:function(t){uni.hideLoading(),i.list=t.data.content,i.$store.commit("setMy",i.list)},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}}}};i.default=c}).call(this,a("5a52")["default"])},caa2:function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".mySetup-mailbox[data-v-07479f14]{width:100%;height:100%;overflow:hidden}.my-title[data-v-07479f14]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-07479f14]{width:5%;margin-left:%?38?%}.search-Fd[data-v-07479f14]{position:relative;width:100%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30}.removeBind[data-v-07479f14]{position:relative;width:100%;margin-top:%?110?%}.RB-cont[data-v-07479f14]{position:relative;width:100%}.items-RB[data-v-07479f14]{position:relative;width:100%}.input-RB[data-v-07479f14]{position:relative;width:100%;background:#fff;padding:2vw 5vw 2vw 5vw}.btn-RB[data-v-07479f14]{position:relative;width:100%;padding:4vw;margin-top:6vw}.btn-RB>p[data-v-07479f14]{background:#02c2a2;text-align:center;font-family:PingFangSC-Regular;font-size:4.266vw;color:#fff;letter-spacing:0;line-height:12vw}.btn-RB2[data-v-07479f14]{position:relative;width:100%;padding:4vw;margin-top:6vw;opacity:.5}.btn-RB2>p[data-v-07479f14]{background:#02c2a2;text-align:center;font-family:PingFangSC-Regular;font-size:4.266vw;color:#fff;letter-spacing:0;line-height:12vw}",""])}}]);