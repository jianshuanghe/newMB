(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-mySetup-mySetups-mySetup-address-new2"],{"067b":function(e,t,i){"use strict";var a=i("4ae5"),n=i.n(a);n.a},2414:function(e,t,i){"use strict";(function(e){var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("cebc")),s=a(i("2de2")),d=a(i("5a67")),r=i("2f62"),o=a(i("4e15")),u={data:function(){return{weixuan:this.Static+"my/15.png",xuanzhong:this.Static+"my/16.png",ming:this.Static+"my/17.png",dili:this.Static+"my/18.png",picker:"",zitis:!1,num:"1",phone:"",name:"",addres:"",arr:[],values:""}},components:{quickBtn:s.default,navigation:d.default,provinceCity:o.default},computed:(0,n.default)({i18n:function(){return this.$t("Mypersonal")}},(0,r.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(t){uni.setNavigationBarTitle({title:this.i18n.title23}),this.id=t.id,e.log(this.id)},watch:{GET_MY:{handler:function(e,t){},deep:!0}},created:function(){},methods:{Finan:function(t){var i=this;this.arr.map(function(a,n){String(n)===String(t.target.value)&&(i.picker=a,e.log(i.picker),"请选择"!==i.picker&&(i.zitis=!0))})},clickCity:function(t){this.arr=t,e.log(this.arr)},baoadd:function(){var t=this;if(""==this.GET_MY.ress.addrName)return uni.showToast({title:"姓名不能为空",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.ress.addrPhone)return uni.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1;if(!/^1[34578]\d{9}$/.test(this.GET_MY.ress.addrPhone))return uni.showToast({title:"手机号格式有误",icon:"none",duration:1e3}),!1;if(""==this.arr&&""==this.GET_MY.ress.addrPcodeStr)return uni.showToast({title:"请选择所在地区",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.ress.address)return uni.showToast({title:"请输入详细地址",icon:"none",duration:1e3}),!1;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));e.log(i.user.id);var a={addrPhone:this.GET_MY.ress.addrPhone,addrName:this.GET_MY.ress.addrName,addrPcode:this.arr.pcode,addrCcode:this.arr.ccode,addrAcode:this.arr.tcode,address:this.addres,addrState:this.GET_MY.ress.addrState,userId:i.user.id,id:this.id};uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/address/",data:a,method:"POST",header:{Authorization:"Bearer "+i.token},success:function(i){uni.hideLoading(),e.log(i.data),t.address(),uni.navigateBack({})},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),e.log(t,"网络繁忙，请稍后")}})}},address:function(){var t=this;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));e.log(i.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/address?userId="+i.user.id,method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){uni.hideLoading(),e.log(i.data),t.list=i.data.content,t.$store.commit("setaddress",t.list)},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),e.log(t,"网络繁忙，请稍后")}})}},xuan:function(t){e.log(t),1===t?(this.num="0",this.GET_MY.ress.addrState="0"):0===t&&(this.num="1",this.GET_MY.ress.addrState="1")}}};t.default=u}).call(this,i("5a52")["default"])},"35b7":function(e,t,i){"use strict";i.r(t);var a=i("2414"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},"4ae5":function(e,t,i){var a=i("984f");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("0ff5626a",a,!0,{sourceMap:!1,shadowMode:!1})},"6da2":function(e,t,i){"use strict";i.r(t);var a=i("8e3f7"),n=i("35b7");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("067b");var d=i("2877"),r=Object(d["a"])(n["default"],a["a"],a["b"],!1,null,"775e0a6b",null);t["default"]=r.exports},"8e3f7":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"mySetup-address-new"},[i("v-uni-view",{staticClass:"my-title"},[i("div",{staticClass:"quickBtn-Fd left"},[i("quickBtn")],1),i("div",{staticClass:"search-Fd left"},[e._v(e._s(e.i18n.title24))])]),i("v-uni-view",{staticClass:"tiancong"}),i("v-uni-view",{staticClass:"mySetup-address-new-detailed"},[i("v-uni-view",{staticClass:"mySetup-address-new-name"},[i("v-uni-view",[e._v(e._s(e.i18n.title62))]),i("v-uni-view",[i("v-uni-input",{attrs:{type:"text",placeholder:e.i18n.title63,"placeholder-style":"color: #BDBDBD"},model:{value:e.GET_MY.ress.addrName,callback:function(t){e.$set(e.GET_MY.ress,"addrName",t)},expression:"GET_MY.ress.addrName"}})],1),i("v-uni-view",[i("v-uni-image",{staticClass:"mySetup-address-img",attrs:{src:e.ming}})],1)],1),i("v-uni-view",{staticClass:"mySetup-address-new-name"},[i("v-uni-view",[e._v(e._s(e.i18n.title14))]),i("v-uni-view",[i("v-uni-input",{attrs:{type:"text",placeholder:e.i18n.title64,maxlength:"11","placeholder-style":"color: #BDBDBD"},model:{value:e.GET_MY.ress.addrPhone,callback:function(t){e.$set(e.GET_MY.ress,"addrPhone",t)},expression:"GET_MY.ress.addrPhone"}})],1)],1),i("v-uni-view",{staticClass:"mySetup-address-new-name"},[i("v-uni-view",[e._v(e._s(e.i18n.title65))]),i("v-uni-view",[i("v-uni-view",{staticClass:"mySetup-address-dili"},[i("provinceCity",{attrs:{column:"-1",value:e.GET_MY.ress.addrPcodeStr+"-"+e.GET_MY.ress.addrCcodeStr+"-"+e.GET_MY.ress.addrAcodeStr},on:{clickCity:function(t){arguments[0]=t=e.$handleEvent(t),e.clickCity.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",[i("v-uni-image",{staticClass:"dili",attrs:{src:e.dili}})],1)],1),i("v-uni-view",{staticClass:"mySetup-address-new-names"},[i("v-uni-view",[e._v(e._s(e.i18n.title66))]),i("v-uni-view",[i("v-uni-input",{attrs:{type:"text",placeholder:e.i18n.title67,"placeholder-style":"color: #BDBDBD"},model:{value:e.GET_MY.ress.address,callback:function(t){e.$set(e.GET_MY.ress,"address",t)},expression:"GET_MY.ress.address"}})],1)],1),i("v-uni-view",{staticClass:"mySetup-address-new-mo"},["1"===e.GET_MY.ress.addrState?i("v-uni-image",{attrs:{src:e.xuanzhong},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.xuan(1)}}}):e._e(),"0"===e.GET_MY.ress.addrState?i("v-uni-image",{attrs:{src:e.weixuan},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.xuan(0)}}}):e._e(),i("span",[e._v(e._s(e.i18n.title61))])],1)],1),i("v-uni-view",{staticClass:"mySetup-address-new-sub",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.baoadd()}}},[e._v(e._s(e.i18n.title68))]),e.QUICKNAVCO.show?i("navigation"):e._e()],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"984f":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".mySetup-address-new[data-v-775e0a6b]{width:100%;min-height:100%}.my-title[data-v-775e0a6b]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-775e0a6b]{width:5%;margin-left:%?38?%}.search-Fd[data-v-775e0a6b]{position:relative;width:100%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30}.tiancong[data-v-775e0a6b]{width:100%;height:%?88?%}.mySetup-address-new-detailed[data-v-775e0a6b]{width:100%;height:%?570?%;background:#fff}.mySetup-address-new-name[data-v-775e0a6b]{width:90%;height:%?120?%;border-bottom:%?2?% solid #d2d2d2;margin:0 auto}.mySetup-address-new-name>uni-view[data-v-775e0a6b]:first-child{font-size:%?28?%;color:#2e2e30;line-height:%?120?%;height:100%;width:20%;float:left}.mySetup-address-new-name>uni-view[data-v-775e0a6b]:nth-child(2){font-size:%?28?%;line-height:%?120?%;height:100%;width:40%;float:left}.mySetup-address-new-name>uni-view:nth-child(2)>uni-input[data-v-775e0a6b]{width:100%;height:100%}.mySetup-address-new-name>uni-view[data-v-775e0a6b]:nth-child(3){width:5%;height:100%;line-height:%?148?%;float:right}.mySetup-address-new-name>uni-view:nth-child(3)>uni-image[data-v-775e0a6b]{width:%?32?%;height:%?40?%}.ziti[data-v-775e0a6b]{margin-top:%?36?%;color:#bdbdbd}.zitis[data-v-775e0a6b]{margin-top:%?36?%;color:#000}.mySetup-address-new-names[data-v-775e0a6b]{width:90%;height:%?120?%;border-bottom:%?2?% solid #d2d2d2;margin:0 auto}.mySetup-address-new-names>uni-view[data-v-775e0a6b]:first-child{font-size:%?28?%;color:#2e2e30;line-height:%?120?%;height:100%;width:20%;float:left}.mySetup-address-new-names>uni-view[data-v-775e0a6b]:nth-child(2){font-size:%?28?%;line-height:%?120?%;height:100%;width:75%;float:left}.mySetup-address-new-names>uni-view:nth-child(2)>uni-input[data-v-775e0a6b]{width:100%;height:100%}.mySetup-address-new-names>uni-view[data-v-775e0a6b]:nth-child(3){width:5%;height:100%;line-height:%?148?%;float:right}.mySetup-address-new-names>uni-view:nth-child(3)>uni-image[data-v-775e0a6b]{width:%?32?%;height:%?40?%}.mySetup-address-new-mo[data-v-775e0a6b]{width:90%;height:%?70?%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?76?%;margin-top:%?5?%}.mySetup-address-new-mo>uni-image[data-v-775e0a6b]{width:%?32?%;height:%?32?%;display:block;margin-top:%?20?%}.mySetup-address-new-mo>span[data-v-775e0a6b]{margin-left:%?20?%}.mySetup-address-new-sub[data-v-775e0a6b]{width:90%;height:%?90?%;margin:0 auto;background:#02c2a2;text-align:center;line-height:%?90?%;font-size:%?32?%;color:#fff;margin-top:%?120?%}.mySetup-address-img[data-v-775e0a6b]{width:%?40?%!important;height:%?40?%;right:%?10?%!important}.mySetup-address-dili[data-v-775e0a6b]{width:150%;height:100%;margin-left:%?-46?%;margin-top:%?20?%}",""])}}]);