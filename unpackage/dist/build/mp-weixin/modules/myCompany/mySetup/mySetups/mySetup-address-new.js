(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/mySetup/mySetups/mySetup-address-new"],{"14e5":function(t,e,n){"use strict";var i=n("fbfc"),o=n.n(i);o.a},"52a5":function(t,e,n){"use strict";n.r(e);var i=n("a6e3"),o=n("6b1b");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("14e5");var a=n("2877"),s=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},"6b1b":function(t,e,n){"use strict";n.r(e);var i=n("793f"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a},"793f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/quickBtn/quickBtn")]).then(n.bind(null,"4455"))},s=function(){return n.e("components/mbbo/navigation/navigation").then(n.bind(null,"ddba"))},c=function(){return Promise.all([n.e("common/vendor"),n.e("components/common/provinceCity/provinceCity")]).then(n.bind(null,"d37b"))},d={data:function(){return{weixuan:this.Static+"my/15.png",xuanzhong:this.Static+"my/16.png",ming:this.Static+"my/17.png",dili:this.Static+"my/18.png",picker:"",zitis:!1,num:"1",phone:"",name:"",addres:"",arr:[],info:{idStringAddress:"",idString:"",addrPcode:"",addrCcode:"",addrAcode:"",idaddress:""},province:[],city:[],county:[],listData:{multiArray:[],multiIndex:[0,0],areaPorC:{},province:{index:0,text:"",pcode:""},city:{text:"",ccode:""},paramsPC:{ptext:"",pcode:"",ctext:"",ccode:""},dizhi:""}}},components:{quickBtn:a,navigation:s,provinceCity:c},computed:o({i18n:function(){return this.$t("Mypersonal")}},(0,i.mapGetters)(["GET_HOME","QUICKNAVCO"])),onLoad:function(){t.setNavigationBarTitle({title:this.i18n.title23})},methods:{Finan:function(t){var e=this;this.arr.map(function(n,i){String(i)===String(t.target.value)&&(e.picker=n,console.log(e.picker),"请选择"!==e.picker&&(e.zitis=!0))})},clickCity:function(t){this.arr=t,console.log(this.arr)},baoadd:function(){var e=this;if(""==this.name)return t.showToast({title:"姓名不能为空",icon:"none",duration:1e3}),!1;if(""==this.phone)return t.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1;if(!/^1[34578]\d{9}$/.test(this.phone))return t.showToast({title:"手机号格式有误",icon:"none",duration:1e3}),!1;if(""==this.arr)return t.showToast({title:"请选择所在地区",icon:"none",duration:1e3}),!1;if(""==this.addres)return t.showToast({title:"请输入详细地址",icon:"none",duration:1e3}),!1;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id);var i={addrPhone:this.phone,addrName:this.name,addrPcode:this.arr.pcode,addrCcode:this.arr.ccode,addrAcode:this.arr.tcode,address:this.addres,addrState:this.num,userId:n.user.id,id:""};t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/address/",data:i,method:"POST",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),console.log(n.data),e.address(),t.navigateBack({})},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},address:function(){var e=this;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id);t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/address?userId="+n.user.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),console.log(n.data),e.list=n.data.content,e.$store.commit("setaddress",e.list)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},xuan:function(t){console.log(t),1===t?this.num="0":0===t&&(this.num="1")}}};e.default=d}).call(this,n("543d")["default"])},a6e3:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},fbfc:function(t,e,n){}},[["eb72","common/runtime","common/vendor"]]]);