(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/deleteMoveTips/deleteMoveTipsTwo"],{4438:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e("d73a")),s=o(e("2a0b")),a=o(e("17ad"));function o(t){return t&&t.__esModule?t:{default:t}}var d=function(){return e.e("components/common/button/blackBtn").then(e.bind(null,"000f"))},u={props:["dataList","itemsData","indexNum","heightStyle","dMWidth","dMHeight","dright"],data:function(){return{dMShow:!1,dataLists:this.dataList,itemsDatas:{},deleteImg:n.default,topImg:s.default,bottomImg:a.default}},components:{blackBtn:d},computed:{i18n:function(){return this.$t("navigation")},dMItemWidth:function(){return 1===this.dataList.length?"20vw":0===this.indexNum||this.dataList.length===this.indexNum+1?"35vw":void 0}},created:function(){this.itemsDatas=JSON.parse(JSON.stringify(this.itemsData))},watch:{dataList:{handler:function(t,i){console.log(t,i,"--------------------------------------监听数组删除、上下移动变化---------------------------------------"),this.dataLists=t},deep:!0}},methods:{deleteTip:function(){console.log("删除"),this.changeData(this.indexNum,0)},upMove:function(){console.log("上移"),this.changeData(this.indexNum,2)},downMove:function(){console.log("下移"),this.changeData(this.indexNum,1)},changeData:function(t,i){for(var e in console.log(t,"用户操作数据统一返回值------index"),console.log(i,"用户操作数据统一返回值------类型，2：上移, 1:下移； 0：删除"),this.dataLists)String(e)===String(t)&&(0===i?(console.log(this.dataLists,"删除之前"),this.dataLists.splice(t,1),console.log(this.dataLists,""),this.$emit("tap-DeleteMoveTips",[this.dataLists,!0])):1===i?(this.dataLists[this.indexNum]=this.dataLists.splice(this.indexNum+1,1,this.dataLists[this.indexNum])[0],this.$emit("tap-DeleteMoveTips",[this.dataLists,!0])):2===i&&(this.dataLists[this.indexNum-1]=this.dataLists.splice(this.indexNum,1,this.dataLists[this.indexNum-1])[0],this.$emit("tap-DeleteMoveTips",[this.dataLists,!0])))},clickMask:function(){console.log("触发点击遮罩层")}}};i.default=u},4796:function(t,i,e){"use strict";e.r(i);var n=e("4438"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=s.a},4846:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},s=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return s})},5454:function(t,i,e){},bcac:function(t,i,e){"use strict";var n=e("5454"),s=e.n(n);s.a},ff62:function(t,i,e){"use strict";e.r(i);var n=e("4846"),s=e("4796");for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);e("bcac");var o=e("2877"),d=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);i["default"]=d.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/deleteMoveTips/deleteMoveTipsTwo-create-component',
    {
        'components/common/RHX/deleteMoveTips/deleteMoveTipsTwo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("ff62"))
        })
    },
    [['components/common/RHX/deleteMoveTips/deleteMoveTipsTwo-create-component']]
]);
