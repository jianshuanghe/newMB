(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/industryAddress/address"],{"198f":function(t,e,n){"use strict";var r=n("5782"),i=n.n(r);i.a},5782:function(t,e,n){},c771:function(t,e,n){"use strict";n.r(e);var r=n("d086"),i=n("c821");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("198f");var a=n("2877"),c=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,"3296cc47",null);e["default"]=c.exports},c821:function(t,e,n){"use strict";n.r(e);var r=n("ea40"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},d086:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},d403:function(t,e,n){"use strict";(function(t){n("f43d"),n("921b");r(n("66fd"));var e=r(n("c771"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("5486")["createPage"])},ea40:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("044d")),i=a(n("2711")),o=n("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){return n.e("components/common/watch-login/watch-input1").then(n.bind(null,"56a1"))},u=function(){return n.e("components/common/provinceCity/provinceCity").then(n.bind(null,"f782"))},l={name:"addressBs",components:{wInput:s,provinceCity:u},data:function(){return{text:"",lineRightArrow:r.default,xing:i.default,addressDetail:"",info:{idStringAddress:"",idString:"",addrPcode:"",addrCcode:"",addrAcode:"",idaddress:""},province:[],city:[],county:[],imgData:{},arr:[],listData:{multiArray:[],multiIndex:[0,0],areaPorC:{},province:{index:0,text:"",pcode:""},city:{text:"",ccode:""},paramsPC:{ptext:"",pcode:"",ctext:"",ccode:""},dizhi:"请输入"}}},created:function(){console.log(this.GET_MY.headers),this.dizhi=this.GET_MY.headers.addressDetail,this.listData.paramsPC.text=this.GET_MY.headers.addrStr},mounted:function(){},computed:c({i18n:function(){return this.$t("qualificatCert")}},(0,o.mapGetters)(["PERSONCENTER","IMGDATA","GET_MY"])),methods:c({},(0,o.mapMutations)({setAddressBsShow:"setAddressBsShow"}),{clickCity:function(t){this.arr=t,console.log(this.arr)},clickReset:function(){console.log("取消"),t.navigateBack({})},clickSaveAddress:function(){if(console.log("触发保存地址按钮"),""==this.arr){if(console.log("1"),""==this.GET_MY.headers.addrStr)return t.showToast({title:"请选择地区",icon:"none",duration:1e3}),!1}else if(""==this.dizhi)return t.showToast({title:"请输入详细地址",icon:"none",duration:1e3}),!1;if(""!==this.arr){var e={idString:this.arr.cityText,addrPcode:this.arr.pcode,addrCcode:this.arr.ccode,addrTcode:this.arr.tcode,idaddress:this.info.idaddress};this.$store.commit("setclickCity",e)}t.navigateBack({})}})};e.default=l}).call(this,n("5486")["default"])}},[["d403","common/runtime","common/vendor"]]]);