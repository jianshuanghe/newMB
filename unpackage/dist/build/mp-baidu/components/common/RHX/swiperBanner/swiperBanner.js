(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/swiperBanner/swiperBanner"],{"2c9b":function(t,n,e){"use strict";e.r(n);var i=e("3b96"),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=s.a},"385c":function(t,n,e){"use strict";var i=e("eda5"),s=e.n(i);s.a},"3b96":function(t,n,e){"use strict";(function(t){var i;function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return e.e("node-modules/@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot").then(e.bind(null,"a096"))},a=function(){return e.e("components/common/RHX/changeImgTips/changeImgTips").then(e.bind(null,"cb03"))},r=function(){return e.e("components/common/RHX/defaultAdd/defaultAdd").then(e.bind(null,"11f3"))},c=(i={components:{uniSwiperDot:o,changeImgTips:a,defaultAdd:r},props:["disabled","defaultImg","swiperWidth","swiperHeight","bannerList","autoplay","interval"],data:function(){return{showTips:-2,changeTipsNum:"3",hideTips:!1,hackReset:!0,current:0,mode:"default",autoplays:this.autoplay,listData:{imageData:[],serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload"},dotsStyles:{width:8,height:1,backgroundColor:"#6b6969",selectedBackgroundColor:" #FFFFFF",selectedBorder:0,border:0},bannerLists:this.bannerList,translate:!1}},created:function(){},watch:{bannerList:{handler:function(t,n){this.bannerLists=t,1===t.length?this.changeTipsNum="2.1":this.changeTipsNum="3"},deep:!0}},computed:{swiperShows:function(){return this.bannerList.length>0}}},s(i,"created",function(){1===this.bannerLists.length?this.changeTipsNum="2.1":this.changeTipsNum="3"}),s(i,"methods",{change:function(t){console.log(t),this.current=t.detail.current},showImage:function(){console.log("点击空白处隐藏changeImgTips"),this.hideTips=!0,this.autoplays=!0},changeImage:function(n){console.log(n,"替换图片"),this.bannerList[this.showTips].picUrl=n,this.$emit("tap-Banner",[this.bannerList,"change"]),this.current=Number(this.bannerList.length),this.hideTips=!0,t.showToast({title:"成功！",icon:"none",duration:500})},deleteImage:function(n){var e=this;console.log(n,"删除图片"),n!==this.bannerList.length-1||0===n?(console.log("删除的不是数组最后一项（排除数组只有一个时候"),this.bannerList.splice(n,1),this.current=n-1,console.log(this.current,"----------------this.current---------------"),this.$emit("tap-Banner",[this.bannerList,"detele"]),this.hideTips=!0,t.showToast({title:"成功！",icon:"none",duration:500})):(console.log("删除的时数组最后一项"),this.bannerList.splice(n,1),this.current=n-1,console.log(this.current,"----------------this.current---------------"),this.$emit("tap-Banner",[this.bannerList,"detele"]),this.hideTips=!0,t.showToast({title:"成功！",icon:"none",duration:500}),this.hackReset=!1,this.$nextTick(function(){e.hackReset=!0}))},addImage:function(n){console.log(n,"添加图片");var e={picUrl:n,linkUrl:""};this.bannerList.push(e),this.$emit("tap-Banner",[this.bannerList,"add"]),this.hideTips=!0,t.showToast({title:"成功！",icon:"none",duration:500})},addImageS:function(n){console.log(n,"添加图片");var e={picUrl:n,linkUrl:""};this.bannerList.push(e),this.$emit("tap-Banner",[this.bannerList,"add"]),this.hideTips=!0,t.showToast({title:"成功！",icon:"none",duration:500})},clickBanner:function(t,n){this.autoplays=!1,console.log(t,n,"-----------------picUrl----------------"),this.hideTips=!1,this.showTips=t}}),i);n.default=c}).call(this,e("5486")["default"])},"54fc":function(t,n,e){"use strict";e.r(n);var i=e("6de5"),s=e("2c9b");for(var o in s)"default"!==o&&function(t){e.d(n,t,function(){return s[t]})}(o);e("385c");var a=e("2877"),r=Object(a["a"])(s["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},"6de5":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=(t._self._c,Number(t.showTips)),i=t.__map(t.bannerList,function(n,e){var i=Number(e);return{$orig:t.__get_orig(n),m1:i}});t.$mp.data=Object.assign({},{$root:{m0:e,l0:i}})},s=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return s})},eda5:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/swiperBanner/swiperBanner-create-component',
    {
        'components/common/RHX/swiperBanner/swiperBanner-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("54fc"))
        })
    },
    [['components/common/RHX/swiperBanner/swiperBanner-create-component']]
]);
