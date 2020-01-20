(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/madeModule/shopAddress/addressPreve/addressPreve"],{"1c3c":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n})},"4ad3":function(t,e,s){"use strict";s.r(e);var a=s("8920"),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);e["default"]=n.a},5748:function(t,e,s){"use strict";s.r(e);var a=s("1c3c"),n=s("4ad3");for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s("2877"),d=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=d.exports},8920:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={components:{},data:function(){return{addresstext:"",dataLists:this.dataList,itemsDatas:this.itemsData}},props:["disabled","dataList","itemsData","indexNum"],watch:{itemsDatas:{handler:function(t,e){this.itemsDatas=t,this.resetAddress()},deep:!0}},created:function(){this.resetAddress()},mounted:function(){},beforeDestroy:function(){console.log("页面销毁之前缓存数据更新-----------setImgList、setCaiGouList")},methods:{resetAddress:function(){var t=this.itemsDatas.cityStr.split("-");this.addresstext=t[0]+t[1]+t[2]+this.itemsDatas.value}}};e.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/madeModule/shopAddress/addressPreve/addressPreve-create-component',
    {
        'components/common/RHX/madeModule/shopAddress/addressPreve/addressPreve-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5748"))
        })
    },
    [['components/common/RHX/madeModule/shopAddress/addressPreve/addressPreve-create-component']]
]);
