(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/moduleYlist/moduleYlist"],{"3fb7":function(t,o,e){"use strict";e.r(o);var l=e("d1c4"),n=e.n(l);for(var i in l)"default"!==i&&function(t){e.d(o,t,function(){return l[t]})}(i);o["default"]=n.a},"5f5b":function(t,o,e){},"7f17":function(t,o,e){"use strict";e.r(o);var l=e("f852"),n=e("3fb7");for(var i in n)"default"!==i&&function(t){e.d(o,t,function(){return n[t]})}(i);e("cbf1");var s=e("2877"),c=Object(s["a"])(n["default"],l["a"],l["b"],!1,null,null,null);o["default"]=c.exports},cbf1:function(t,o,e){"use strict";var l=e("5f5b"),n=e.n(l);n.a},d1c4:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var l=function(){return e.e("components/common/RHX/moduleYitems/moduleYitems").then(e.bind(null,"086f"))},n={components:{moduleYitems:l},props:["dataList","scrollW","column","fixedScroll","titleH","scrollInto","tabYItemsIndex","scrollFixedShow"],data:function(){return{isFixedShow:!1,scrollFixedShows:!0,nextMargin:"290px",scrollWidth:"100vw",dataLists:this.dataList,tapIndex:0,scrollIntos:this.scrollInto,moduleYlistContentFED:{position:"fixed",top:this.titleH+"px",zIndex:"105",width:"100%"}}},created:function(){var t=Math.ceil(this.dataLists.length+1),o=100/this.column,e=t*o;this.scrollWidth=e>100?e+"vw":"100vw",console.log(this.titleH,"-----------------------this.titleH-----------------------"),this.getNextMargin()},mounted:function(){this.yListModule()},watch:{titleH:{handler:function(t,o){console.log(t,o,"--------------------------------------监听titleH变化---------------------------------------"),this.moduleYlistContentFED.top=t+"px"},deep:!0},fixedScroll:{handler:function(t,o){console.log(t,o,"--------------------------------------监听fixedScroll变化---------------------------------------"),console.log(t.scrollTop+this.titleH,"a.scrollTop + this.titleH"),t.scrollTop+this.titleH>=t.topFixedNum&&0!==t.scrollTop?(console.log("1更改哦"),this.isFixedShow=!0,this.$emit("tap-ScrollFixedShow",!0)):(console.log("2更改哦"),this.isFixedShow=!1,this.$emit("tap-ScrollFixedShow",!1))},deep:!0},scrollInto:{handler:function(t,o){console.log(t,o,"--------------------------------------监听scrollInto变化---------------------------------------"),this.scrollIntos=t},deep:!0},tabYItemsIndex:{handler:function(t,o){console.log(t,o,"--------------------------------------监听tabYItemsIndex变化---------------------------------------"),this.tapIndex=t;var e=Math.ceil(this.dataLists.length);console.log(e,this.tapIndex,"------------+++++++++------------"),e-this.tapIndex>=4?this.tapIndex2=t:this.tapIndex2=e-4},deep:!0},scrollFixedShow:{handler:function(t,o){console.log(t,o,"--------------------------------------监听scrollFixedShow变化---------------------------------------"),this.scrollFixedShows=t},deep:!0}},methods:{getNextMargin:function(){console.log("横向列表动画");var o=t.getStorageSync("getSystemInfo").screenWidth;console.log(o),this.nextMargin=o/this.column*(this.column-1)+"px"},yListModule:function(){var o=this;console.log("判断当前很想模块所在位置");var e=t.createSelectorQuery().in(this);e.select("#yListModule").boundingClientRect(),e.exec(function(t){console.log(t,"-------------res-------------");var e=t[0].top;console.log(e,"---------------------topY------------------"),o.$emit("top-Fixed",e)})},tapModuleYitems:function(t){console.log(t,"点击横向列表子项"),this.tapIndex=t[1],this.$emit("tap-ModuleYList",t)}}};o.default=n}).call(this,e("5486")["default"])},f852:function(t,o,e){"use strict";var l=function(){var t=this,o=t.$createElement;t._self._c},n=[];e.d(o,"a",function(){return l}),e.d(o,"b",function(){return n})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/moduleYlist/moduleYlist-create-component',
    {
        'components/common/RHX/moduleYlist/moduleYlist-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("7f17"))
        })
    },
    [['components/common/RHX/moduleYlist/moduleYlist-create-component']]
]);                