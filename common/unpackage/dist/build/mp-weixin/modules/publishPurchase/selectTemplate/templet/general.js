(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/publishPurchase/selectTemplate/templet/general"],{"30aa":function(t,e,i){},"53f9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("2f62");function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},o=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),o.forEach(function(e){s(t,e,i[e])})}return t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c=function(){return i.e("components/common/watch-login/watch-input").then(i.bind(null,"a76f"))},n=function(){return i.e("components/common/RHX/rTitle/rTitle").then(i.bind(null,"57e2"))},u=function(){return Promise.all([i.e("common/vendor"),i.e("components/common/provinceCity/provinceCity")]).then(i.bind(null,"76ab"))},r=function(){return i.e("components/common/imageUpload/imageUploadMore").then(i.bind(null,"74a5"))},l={name:"editQualificatCert",components:{wInput:c,provinceCity:u,imageUploadMore:r,rTitle:n},data:function(){return{xing:this.Static+"common/xinghao.png",deleteImg:this.Static+"publish/purchase/delete.png",check:this.Static+"home/extendManageList/dataReport/check1.png",checked:this.Static+"home/extendManageList/dataReport/checked.png",check1:!1,caiGouList:{},listData:{}}},created:function(){this.caiGouList=this.GET_PUBLISH.publishPurchase.caiGouList,console.log(this.caiGouList,"-----------------this.caiGouList--------------"),this.listData=this.GET_PUBLISH.publishPurchase.imgList},computed:a({i18n:function(){return this.$t("qualificatCert")}},(0,o.mapGetters)(["GET_PUBLISH"])),watch:{GET_PUBLISH:{handler:function(t,e){this.caiGouList=t.publishPurchase.caiGouList,this.listData=t.publishPurchase.imgList},deep:!0}},mounted:function(){},beforeDestroy:function(){console.log("页面销毁之前缓存数据更新-----------setImgList、setCaiGouList"),this.$store.commit("setImgList",this.listData),this.$store.commit("setCaiGouList",this.caiGouList)},methods:a({},(0,o.mapMutations)({setMoreSet:"setMoreSet",setImgList:"setImgList",setCaiGouList:"setCaiGouList"}),{checkType:function(){"1"===this.caiGouList.purcType&&"1"===this.caiGouList.purcDefault?this.caiGouList.purcDefault="0":"1"===this.caiGouList.purcType&&"0"===this.caiGouList.purcDefault&&(this.caiGouList.purcDefault="1")},purcContent:function(t){this.caiGouList.purcContent=t[1],this.$store.commit("setCaiGouList",this.caiGouList)},addCaiGoDetaile:function(){console.log(this.caiGouList.paraList,"添加采购明细");var t={paraKey:"",paraValue:""};this.caiGouList.paraList.push(t)},deleteCaiGoDetaile:function(t){console.log("删除采购明细"),this.caiGouList.paraList.splice(t,1)},addCaiGouRequire:function(){console.log("添加采购要求");var t={paraKey:"",paraValue:""};this.caiGouList.requList.push(t)},deleteCaiGoRequire:function(t){console.log("删除采购要求"),this.caiGouList.requList.splice(t,1)},clickMoreSet:function(){this.$store.commit("setMoreSet",!0)},getCity:function(t){console.log(t,"选择城市返回的code、text"),this.caiGouList.purcCcodeStr=t.cityText,this.caiGouList.purcPcode=t.pcode,this.caiGouList.purcCcode=t.ccode,this.caiGouList.purcAcode=t.tcode,console.log(this.caiGouList.purcCcodeStr,"------------------this.caiGouList.purcCcodeStr--------------")},addImage:function(t){console.log(t,"添加的数据"),this.listData.imageData=t.allImages,this.$store.commit("setImgList",this.listData)},deleteImage:function(t){console.log(t,"删除数据"),this.listData.imageData=t.allImages,this.$store.commit("setImgList",this.listData)}})};e.default=l},"8ac9":function(t,e,i){"use strict";var o=i("30aa"),a=i.n(o);a.a},d069:function(t,e,i){"use strict";i.r(e);var o=i("53f9"),a=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},dd80:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a})},f78b:function(t,e,i){"use strict";i.r(e);var o=i("dd80"),a=i("d069");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("8ac9");var c=i("2877"),n=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,"7f4ce4e9",null);e["default"]=n.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/publishPurchase/selectTemplate/templet/general-create-component',
    {
        'modules/publishPurchase/selectTemplate/templet/general-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f78b"))
        })
    },
    [['modules/publishPurchase/selectTemplate/templet/general-create-component']]
]);                