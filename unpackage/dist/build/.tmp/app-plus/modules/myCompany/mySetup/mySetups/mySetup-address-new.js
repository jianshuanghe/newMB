(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/mySetup/mySetups/mySetup-address-new"],{"1d27":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/quickBtn/quickBtn")]).then(n.bind(null,"2de2"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/navigation/navigation")]).then(n.bind(null,"5a67"))},d=function(){return Promise.all([n.e("common/vendor"),n.e("components/common/provinceCity/provinceCity")]).then(n.bind(null,"4e15"))},c={data:function(){return{weixuan:this.Static+"my/15.png",xuanzhong:this.Static+"my/16.png",ming:this.Static+"my/17.png",dili:this.Static+"my/18.png",picker:"",zitis:!1,num:"1",phone:"",name:"",addres:"",arr:[],info:{idStringAddress:"",idString:"",addrPcode:"",addrCcode:"",addrAcode:"",idaddress:""},province:[],city:[],county:[],listData:{multiArray:[],multiIndex:[0,0],areaPorC:{},province:{index:0,text:"",pcode:""},city:{text:"",ccode:""},paramsPC:{ptext:"",pcode:"",ctext:"",ccode:""},dizhi:""}}},components:{quickBtn:s,navigation:u,provinceCity:d},computed:a({i18n:function(){return this.$t("Mypersonal")}},(0,i.mapGetters)(["GET_HOME","QUICKNAVCO"])),onLoad:function(){e.setNavigationBarTitle({title:this.i18n.title23})},methods:{Finan:function(e){var t=this;this.arr.map(function(n,i){String(i)===String(e.target.value)&&(t.picker=n,console.log(o(t.picker," at modules\\myCompany\\mySetup\\mySetups\\mySetup-address-new.vue:140")),"请选择"!==t.picker&&(t.zitis=!0))})},clickCity:function(e){this.arr=e,console.log(o(this.arr," at modules\\myCompany\\mySetup\\mySetups\\mySetup-address-new.vue:149"))},baoadd:function(){var t=this;if(""==this.name)return e.showToast({title:"姓名不能为空",icon:"none",duration:1e3}),!1;if(""==this.phone)return e.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1;if(!/^1[34578]\d{9}$/.test(this.phone))return e.showToast({title:"手机号格式有误",icon:"none",duration:1e3}),!1;if(""==this.arr)return e.showToast({title:"请选择所在地区",icon:"none",duration:1e3}),!1;if(""==this.addres)return e.showToast({title:"请输入详细地址",icon:"none",duration:1e3}),!1;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));console.log(o(n.user.id," at modules\\myCompany\\mySetup\\mySetups\\mySetup-address-new.vue:190"));var i={addrPhone:this.phone,addrName:this.name,addrPcode:this.arr.pcode,addrCcode:this.arr.ccode,addrAcode:this.arr.tcode,address:this.addres,addrState:this.num,userId:n.user.id,id:""};e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/address/",data:i,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(n){e.hideLoading(),console.log(o(n.data," at modules\\myCompany\\mySetup\\mySetups\\mySetup-address-new.vue:220")),t.address(),e.navigateBack({})},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o(t,"网络繁忙，请稍后"," at modules\\myCompany\\mySetup\\mySetups\\mySetup-address-new.vue:232"))}})}},address:function(){var t=this;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));console.log(o(n.user.id," at modules\\myCompany\\mySetup\\mySetups\\mySetup-address-new.vue:240"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/address?userId="+n.user.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){e.hideLoading(),console.log(o(n.data," at modules\\myCompany\\mySetup\\mySetups\\mySetup-address-new.vue:254")),t.list=n.data.content,t.$store.commit("setaddress",t.list)},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o(t,"网络繁忙，请稍后"," at modules\\myCompany\\mySetup\\mySetups\\mySetup-address-new.vue:267"))}})}},xuan:function(e){console.log(o(e," at modules\\myCompany\\mySetup\\mySetups\\mySetup-address-new.vue:273")),1===e?this.num="0":0===e&&(this.num="1")}}};t.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},"3ebc":function(e,t,n){"use strict";n.r(t);var o=n("1d27"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},"40d9":function(e,t,n){},"4bab":function(e,t,n){"use strict";n.r(t);var o=n("640b"),i=n("3ebc");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("65e8");var r=n("2877"),s=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},"640b":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"65e8":function(e,t,n){"use strict";var o=n("40d9"),i=n.n(o);i.a},e96f:function(e,t,n){"use strict";(function(e){n("ad90"),n("921b");o(n("66fd"));var t=o(n("4bab"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["e96f","common/runtime","common/vendor"]]]);