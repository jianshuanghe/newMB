(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/singlePicture/singlePicture"],{"09f8":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=function(){return e.e("components/common/RHX/changeImgTips/changeImgTips").then(e.bind(null,"2f9f1"))},s=function(){return e.e("components/common/RHX/defaultAdd/defaultAdd").then(e.bind(null,"d372"))},o={components:{changeImgTips:n,defaultAdd:s},props:["disabled","deleteMoveShow","dataList","itemsData","indexNum","defaultImg","imgSrc","mode","lazyLoad","pictureWidth","pictureHeight","tipsLeft"],data:function(){return{isPictureShow:!0,showTips:null,hideTips:!0,dataLists:this.dataList}},created:function(){console.log(this.imgSrc,"----------------------imgSrc------------------")},watch:{dataList:{handler:function(t,i){console.log(t,i,"--------------------------------------监听但图片变化---------------------------------------"),this.dataLists=t},deep:!0},disabled:{handler:function(t,i){console.log(t,i,"--------------------------------------监听但图片变化---------------------------------------"),!0===i&&""===this.imgSrc?this.isPictureShow=!1:this.isPictureShow=!0},deep:!0}},computed:{deleteMoveShows:function(){return!1===this.deleteMoveShow}},methods:{imageError:function(t){console.error("image发生error事件，携带值为"+t.detail.errMsg)},showImage:function(){console.log("点击空白处隐藏changeImgTips"),this.hideTips=!0},changeImage:function(t){console.log(t,"替换图片"),this.changeData(this.indexNum,1,t)},deleteImage:function(t){console.log(t,"删除图片"),this.changeData(this.indexNum,0,"")},addImage:function(t){console.log(t,"添加图片"),this.changeData(this.indexNum,2,t)},addImageS:function(t){console.log(t,"添加图片"),this.changeData(this.indexNum,2,t)},changeData:function(i,e,n){if(console.log(i,"用户操作数据统一返回值------index"),console.log(e,"用户操作数据统一返回值------类型，2：添加, 1:替换； 0：删除"),console.log(n,"用户操作数据统一返回值------imgUrl"),this.dataLists||(1===e?(this.$emit("tap-Picture",n),this.hideTips=!0,t.showToast({title:"成功！",icon:"none",duration:500})):0===e?(this.$emit("tap-Picture",""),this.hideTips=!0,t.showToast({title:"成功！",icon:"none",duration:500})):2===e&&(this.$emit("tap-Picture",n),this.hideTips=!0,t.showToast({title:"成功！",icon:"none",duration:500}))),this.dataLists)for(var s in this.dataLists)String(s)===String(i)&&(1===e?(this.dataLists[s].imgUrl=n,this.$emit("tap-index",this.indexNum),this.$emit("tap-Picture",this.dataLists),this.hideTips=!0,t.showToast({title:"成功！",icon:"none",duration:500})):0===e?(this.dataLists[s].imgUrl="",this.$emit("tap-index",this.indexNum),this.$emit("tap-Picture",this.dataLists),this.hideTips=!0,t.showToast({title:"成功！",icon:"none",duration:500})):2===e&&(this.dataLists[s].imgUrl=n,this.$emit("tap-index",this.indexNum),this.$emit("tap-Picture",this.dataLists),this.hideTips=!0,t.showToast({title:"成功！",icon:"none",duration:500})))},clickSinglePicture:function(){this.hideTips=!1}}};i.default=o}).call(this,e("543d")["default"])},"0a3c":function(t,i,e){"use strict";e.r(i);var n=e("5eee"),s=e("73ef");for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);e("e476");var a=e("2877"),c=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);i["default"]=c.exports},"1b49":function(t,i,e){},"5eee":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},s=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return s})},"73ef":function(t,i,e){"use strict";e.r(i);var n=e("09f8"),s=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=s.a},e476:function(t,i,e){"use strict";var n=e("1b49"),s=e.n(n);s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/singlePicture/singlePicture-create-component',
    {
        'components/common/RHX/singlePicture/singlePicture-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0a3c"))
        })
    },
    [['components/common/RHX/singlePicture/singlePicture-create-component']]
]);                
