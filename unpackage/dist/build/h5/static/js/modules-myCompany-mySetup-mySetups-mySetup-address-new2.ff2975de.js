(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-mySetup-mySetups-mySetup-address-new2"],{"29f5":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".mySetup-address-new[data-v-52cefbb3]{width:100%;min-height:100%}.my-title[data-v-52cefbb3]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-52cefbb3]{width:5%;margin-left:%?38?%}.search-Fd[data-v-52cefbb3]{position:relative;width:100%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30}.tiancong[data-v-52cefbb3]{width:100%;height:%?88?%}.mySetup-address-new-detailed[data-v-52cefbb3]{width:100%;height:%?570?%;background:#fff}.mySetup-address-new-name[data-v-52cefbb3]{width:90%;height:%?120?%;border-bottom:%?2?% solid #d2d2d2;margin:0 auto}.mySetup-address-new-name>uni-view[data-v-52cefbb3]:first-child{font-size:%?28?%;color:#2e2e30;line-height:%?120?%;height:100%;width:20%;float:left}.mySetup-address-new-name>uni-view[data-v-52cefbb3]:nth-child(2){font-size:%?28?%;line-height:%?120?%;height:100%;width:40%;float:left}.mySetup-address-new-name>uni-view:nth-child(2)>uni-input[data-v-52cefbb3]{width:100%;height:100%}.mySetup-address-new-name>uni-view[data-v-52cefbb3]:nth-child(3){width:5%;height:100%;line-height:%?148?%;float:right}.mySetup-address-new-name>uni-view:nth-child(3)>uni-image[data-v-52cefbb3]{width:%?32?%;height:%?40?%}.ziti[data-v-52cefbb3]{margin-top:%?36?%;color:#bdbdbd}.zitis[data-v-52cefbb3]{margin-top:%?36?%;color:#000}.mySetup-address-new-names[data-v-52cefbb3]{width:90%;height:%?120?%;border-bottom:%?2?% solid #d2d2d2;margin:0 auto}.mySetup-address-new-names>uni-view[data-v-52cefbb3]:first-child{font-size:%?28?%;color:#2e2e30;line-height:%?120?%;height:100%;width:20%;float:left}.mySetup-address-new-names>uni-view[data-v-52cefbb3]:nth-child(2){font-size:%?28?%;line-height:%?120?%;height:100%;width:75%;float:left}.mySetup-address-new-names>uni-view:nth-child(2)>uni-input[data-v-52cefbb3]{width:100%;height:100%}.mySetup-address-new-names>uni-view[data-v-52cefbb3]:nth-child(3){width:5%;height:100%;line-height:%?148?%;float:right}.mySetup-address-new-names>uni-view:nth-child(3)>uni-image[data-v-52cefbb3]{width:%?32?%;height:%?40?%}.mySetup-address-new-mo[data-v-52cefbb3]{width:90%;height:%?70?%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:%?76?%;margin-top:%?5?%}.mySetup-address-new-mo>uni-image[data-v-52cefbb3]{width:%?32?%;height:%?32?%;display:block;margin-top:%?20?%}.mySetup-address-new-mo>span[data-v-52cefbb3]{margin-left:%?20?%}.mySetup-address-new-sub[data-v-52cefbb3]{width:90%;height:%?90?%;margin:0 auto;background:#02c2a2;text-align:center;line-height:%?90?%;font-size:%?32?%;color:#fff;margin-top:%?120?%}.mySetup-address-img[data-v-52cefbb3]{width:%?40?%!important;height:%?40?%;right:%?10?%!important}.mySetup-address-dili[data-v-52cefbb3]{width:150%;height:100%;margin-left:%?-46?%;margin-top:%?20?%}",""])},"52c5":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("270e")),a=r(i("9063")),s=i("2f62"),d=r(i("76ab"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(t){u(e,t,i[t])})}return e}function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var c={data:function(){return{weixuan:this.Static+"my/15.png",xuanzhong:this.Static+"my/16.png",ming:this.Static+"my/17.png",dili:this.Static+"my/18.png",picker:"",zitis:!1,num:"1",phone:"",name:"",addres:"",arr:[],values:""}},components:{quickBtn:n.default,navigation:a.default,provinceCity:d.default},computed:o({i18n:function(){return this.$t("Mypersonal")}},(0,s.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(e){uni.setNavigationBarTitle({title:this.i18n.title23}),this.id=e.id,console.log(this.id)},watch:{GET_MY:{handler:function(e,t){},deep:!0}},created:function(){},methods:{Finan:function(e){var t=this;this.arr.map(function(i,n){String(n)===String(e.target.value)&&(t.picker=i,console.log(t.picker),"请选择"!==t.picker&&(t.zitis=!0))})},clickCity:function(e){this.arr=e,console.log(this.arr)},baoadd:function(){var e=this;if(""==this.GET_MY.ress.addrName)return uni.showToast({title:"姓名不能为空",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.ress.addrPhone)return uni.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1;if(!/^1[34578]\d{9}$/.test(this.GET_MY.ress.addrPhone))return uni.showToast({title:"手机号格式有误",icon:"none",duration:1e3}),!1;if(""==this.arr&&""==this.GET_MY.ress.addrPcodeStr)return uni.showToast({title:"请选择所在地区",icon:"none",duration:1e3}),!1;if(""==this.GET_MY.ress.address)return uni.showToast({title:"请输入详细地址",icon:"none",duration:1e3}),!1;if(uni.getStorageSync("landRegist")){var t=JSON.parse(uni.getStorageSync("landRegist"));console.log(t.user.id);var i={addrPhone:this.GET_MY.ress.addrPhone,addrName:this.GET_MY.ress.addrName,addrPcode:this.arr.pcode,addrCcode:this.arr.ccode,addrAcode:this.arr.tcode,address:this.addres,addrState:this.GET_MY.ress.addrState,userId:t.user.id,id:this.id};uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/address/",data:i,method:"POST",header:{Authorization:"Bearer "+t.token},success:function(t){uni.hideLoading(),console.log(t.data),e.address(),uni.navigateBack({})},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},address:function(){var e=this;if(uni.getStorageSync("landRegist")){var t=JSON.parse(uni.getStorageSync("landRegist"));console.log(t.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/address?userId="+t.user.id,method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){uni.hideLoading(),console.log(t.data),e.list=t.data.content,e.$store.commit("setaddress",e.list)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},xuan:function(e){console.log(e),1===e?(this.num="0",this.GET_MY.ress.addrState="0"):0===e&&(this.num="1",this.GET_MY.ress.addrState="1")}}};t.default=c},"5c81":function(e,t,i){"use strict";i.r(t);var n=i("52c5"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},7147:function(e,t,i){var n=i("29f5");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("22b124d6",n,!0,{sourceMap:!1,shadowMode:!1})},9249:function(e,t,i){"use strict";var n=i("7147"),a=i.n(n);a.a},ad77:function(e,t,i){"use strict";i.r(t);var n=i("e33e"),a=i("5c81");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("9249");var d=i("2877"),r=Object(d["a"])(a["default"],n["a"],n["b"],!1,null,"52cefbb3",null);t["default"]=r.exports},e33e:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"mySetup-address-new"},[i("v-uni-view",{staticClass:"my-title"},[i("div",{staticClass:"quickBtn-Fd left"},[i("quickBtn")],1),i("div",{staticClass:"search-Fd left"},[e._v(e._s(e.i18n.title24))])]),i("v-uni-view",{staticClass:"tiancong"}),i("v-uni-view",{staticClass:"mySetup-address-new-detailed"},[i("v-uni-view",{staticClass:"mySetup-address-new-name"},[i("v-uni-view",[e._v(e._s(e.i18n.title62))]),i("v-uni-view",[i("v-uni-input",{attrs:{type:"text",placeholder:e.i18n.title63,"placeholder-style":"color: #BDBDBD"},model:{value:e.GET_MY.ress.addrName,callback:function(t){e.$set(e.GET_MY.ress,"addrName",t)},expression:"GET_MY.ress.addrName"}})],1),i("v-uni-view",[i("v-uni-image",{staticClass:"mySetup-address-img",attrs:{src:e.ming}})],1)],1),i("v-uni-view",{staticClass:"mySetup-address-new-name"},[i("v-uni-view",[e._v(e._s(e.i18n.title14))]),i("v-uni-view",[i("v-uni-input",{attrs:{type:"text",placeholder:e.i18n.title64,maxlength:"11","placeholder-style":"color: #BDBDBD"},model:{value:e.GET_MY.ress.addrPhone,callback:function(t){e.$set(e.GET_MY.ress,"addrPhone",t)},expression:"GET_MY.ress.addrPhone"}})],1)],1),i("v-uni-view",{staticClass:"mySetup-address-new-name"},[i("v-uni-view",[e._v(e._s(e.i18n.title65))]),i("v-uni-view",[i("v-uni-view",{staticClass:"mySetup-address-dili"},[i("provinceCity",{attrs:{column:"-1",value:e.GET_MY.ress.addrPcodeStr+"-"+e.GET_MY.ress.addrCcodeStr+"-"+e.GET_MY.ress.addrAcodeStr},on:{clickCity:function(t){t=e.$handleEvent(t),e.clickCity(t)}}})],1)],1),i("v-uni-view",[i("v-uni-image",{staticClass:"dili",attrs:{src:e.dili}})],1)],1),i("v-uni-view",{staticClass:"mySetup-address-new-names"},[i("v-uni-view",[e._v(e._s(e.i18n.title66))]),i("v-uni-view",[i("v-uni-input",{attrs:{type:"text",placeholder:e.i18n.title67,"placeholder-style":"color: #BDBDBD"},model:{value:e.GET_MY.ress.address,callback:function(t){e.$set(e.GET_MY.ress,"address",t)},expression:"GET_MY.ress.address"}})],1)],1),i("v-uni-view",{staticClass:"mySetup-address-new-mo"},["1"===e.GET_MY.ress.addrState?i("v-uni-image",{attrs:{src:e.xuanzhong},on:{click:function(t){t=e.$handleEvent(t),e.xuan(1)}}}):e._e(),"0"===e.GET_MY.ress.addrState?i("v-uni-image",{attrs:{src:e.weixuan},on:{click:function(t){t=e.$handleEvent(t),e.xuan(0)}}}):e._e(),i("span",[e._v(e._s(e.i18n.title61))])],1)],1),i("v-uni-view",{staticClass:"mySetup-address-new-sub",on:{click:function(t){t=e.$handleEvent(t),e.baoadd()}}},[e._v(e._s(e.i18n.title68))]),e.QUICKNAVCO.show?i("navigation"):e._e()],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})}}]);