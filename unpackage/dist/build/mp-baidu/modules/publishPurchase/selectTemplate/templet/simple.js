(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/publishPurchase/selectTemplate/templet/simple"],{3176:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;u(i("9fef"));var n=u(i("cf07")),o=u(i("de03")),s=u(i("c88b")),a=i("2f62");function u(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){r(t,e,i[e])})}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l=function(){return i.e("components/common/watch-login/watch-input").then(i.bind(null,"f873"))},f=function(){return i.e("components/common/RHX/rTitle/rTitle").then(i.bind(null,"09a6"))},m=function(){return Promise.all([i.e("common/vendor"),i.e("components/common/imageUpload/imageUploadMore")]).then(i.bind(null,"1b51"))},h={name:"editQualificatCert",components:{wInput:l,imageUploadMore:m,rTitle:f},data:function(){return{xing:n.default,check:o.default,checked:s.default,check1:!1,caiGouList:{},listData:{}}},created:function(){this.caiGouList=this.GET_PUBLISH.publishPurchase.caiGouList,this.listData=this.GET_PUBLISH.publishPurchase.imgList},computed:c({i18n:function(){return this.$t("qualificatCert")}},(0,a.mapGetters)(["GET_PUBLISH"])),watch:{GET_PUBLISH:{handler:function(t,e){this.caiGouList=t.publishPurchase.caiGouList,this.listData=t.publishPurchase.imgList},deep:!0}},mounted:function(){},beforeDestroy:function(){console.log("页面销毁之前缓存数据更新-----------setImgList、setCaiGouList"),this.$store.commit("setImgList",this.listData),this.$store.commit("setCaiGouList",this.caiGouList)},methods:c({},(0,a.mapMutations)({setImgList:"setImgList",setCaiGouList:"setCaiGouList"}),{checkType:function(){console.log("设置采购默认模板"),"1"===this.caiGouList.purcDefault?this.caiGouList.purcDefault="0":this.caiGouList.purcDefault="1",this.$store.commit("setCaiGouList",this.caiGouList)},purcContent:function(t){this.caiGouList.purcContent=t[1],this.$store.commit("setCaiGouList",this.caiGouList)},addImage:function(t){console.log(t,"添加的数据"),this.listData.imageData=t.allImages,this.$store.commit("setImgList",this.listData)},deleteImage:function(t){console.log(t,"删除数据"),this.listData.imageData=t.allImages,this.$store.commit("setImgList",this.listData)}})};e.default=h},"362e":function(t,e,i){"use strict";i.r(e);var n=i("3176"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},a87c:function(t,e,i){},ab76:function(t,e,i){"use strict";var n=i("a87c"),o=i.n(n);o.a},bdb6:function(t,e,i){"use strict";i.r(e);var n=i("ef59"),o=i("362e");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("ab76");var a=i("2877"),u=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,"70abdb48",null);e["default"]=u.exports},ef59:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/publishPurchase/selectTemplate/templet/simple-create-component',
    {
        'modules/publishPurchase/selectTemplate/templet/simple-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("bdb6"))
        })
    },
    [['modules/publishPurchase/selectTemplate/templet/simple-create-component']]
]);