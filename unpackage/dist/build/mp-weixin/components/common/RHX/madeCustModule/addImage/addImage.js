(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/madeCustModule/addImage/addImage"],{"1f0a":function(t,a,e){"use strict";e.r(a);var n=e("8770"),o=e("49fa");for(var s in o)"default"!==s&&function(t){e.d(a,t,function(){return o[t]})}(s);e("7c70");var i=e("2877"),d=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=d.exports},"378c":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(){return e.e("components/common/RHX/madeCustModule/addImage/addMorePicture").then(e.bind(null,"e01c"))},o={props:["disabled","itemsData","indexNum","dataList"],data:function(){return{dataLists:this.dataList,isImgShow:!0,listDatas:{imageData:[],serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload"}}},components:{addMorePicture:n},computed:{},watch:{dataList:{handler:function(t,a){console.log(t,a,"--------------------------------------dataList---------------------------------------"),this.dataLists=t},deep:!0}},created:function(){},mounted:function(){},methods:{addImagess:function(t){console.log(t,"添加图片"),this.dataLists=t.allImages,this.$emit("tap-AddImage",this.dataLists),console.log("用户下单行为！！！！！！！！！！！！！！！！！！！！！！！！！！")},deleteImagess:function(t){console.log(t,"删除图片"),this.dataLists=t.allImages,this.$emit("tap-AddImage",this.dataLists),console.log("用户下单行为！！！！！！！！！！！！！！！！！！！！！！！！！！")}}};a.default=o},"49fa":function(t,a,e){"use strict";e.r(a);var n=e("378c"),o=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);a["default"]=o.a},"5f3f":function(t,a,e){},"7c70":function(t,a,e){"use strict";var n=e("5f3f"),o=e.n(n);o.a},8770:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/madeCustModule/addImage/addImage-create-component',
    {
        'components/common/RHX/madeCustModule/addImage/addImage-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1f0a"))
        })
    },
    [['components/common/RHX/madeCustModule/addImage/addImage-create-component']]
]);                
