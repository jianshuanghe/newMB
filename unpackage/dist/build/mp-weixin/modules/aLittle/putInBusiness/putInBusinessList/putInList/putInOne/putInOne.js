(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/aLittle/putInBusiness/putInBusinessList/putInList/putInOne/putInOne"],{"0b9a":function(o,t,e){"use strict";(function(o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;e("2f62");var n=a(e("77e9")),i=a(e("473a"));function a(o){return o&&o.__esModule?o:{default:o}}function c(o){return r(o)||l(o)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(o){if(Symbol.iterator in Object(o)||"[object Arguments]"===Object.prototype.toString.call(o))return Array.from(o)}function r(o){if(Array.isArray(o)){for(var t=0,e=new Array(o.length);t<o.length;t++)e[t]=o[t];return e}}var d={data:function(){return{check:n.default,checked:i.default,listData:[{value:"USA",name:"美国",checked:!1},{value:"CHN",name:"中国",checked:!0},{value:"BRA",name:"巴西",checked:!1},{value:"JPN",name:"日本",checked:!1},{value:"ENG",name:"英国",checked:!1},{value:"FRA",name:"法国",checked:!1}],putInList:[],scrollTop:0,old:{scrollTop:0},loadingText:"加载更多...",information:{loadingText:"加载更多...",search:{pageNum:0,searchCondition:{page:"1"}},listData:""},searchCondition:{page:"1",name:""},pageNum:0,pageList:[],items:{id:0,love:!1},clickRecordsInFor:[]}},props:{msgData:{type:Object}},methods:{upper:function(o){console.log(o)},loadMore:function(){var t=this;console.log("触发加载更多。。。");var e=this.information.search.pageNum,n=Number(this.information.search.searchCondition.page);console.log(n,"当前页数1"),console.log(e,"总页数1"),console.log(this.information,"头责任的加载更多，原始数据"),n<e?setTimeout(function(){t.getMoreList(t.information)},500):(this.loadingText="已经没有数据了",this.information.loadingText=this.loadingText,o.showToast({title:"已经没有数据了！",icon:"none",duration:1e3}))},scroll:function(o){console.log(o),this.old.scrollTop=o.detail.scrollTop},goTop:function(o){this.scrollTop=this.old.scrollTop,console.log(this.scrollTop-50),this.$nextTick(function(){this.scrollTop=0})},goScrollTop:function(o){this.scrollTop=this.old.scrollTop,console.log(this.scrollTop-50),this.$nextTick(function(){this.scrollTop=Number(this.scrollTop-50)})},getList:function(t){var e=this,n={activityTitel:"",activityState:"1"};o.showLoading({title:"加载中"}),o.request({url:this.api2+"/activity/list?page="+this.searchCondition.page,data:n,method:"POST",header:{},success:function(n){console.log(n.data),t.listData=n.data.rows;var i=c(n.data.rows);if(e.clickRecordsInFor.length<e.pageList.length){console.log("缓存中的数据小于缓存的");for(var a=0;a<e.pageList.length;a++){console.log(e.pageList[a]);var s={id:0,love:!1};s.id=e.pageList[a].id,e.clickRecordsInFor.push(s),console.log(e.clickRecordsInFor,"用户行为数据")}o.setStorageSync("clickRecordsInFor",JSON.stringify(e.clickRecordsInFor))}else e.clickRecordsInFor.length>=e.pageList.length&&(console.log("缓存中的数据大于等于接口每次返回的数据"),e.clickRecordsInFor.map(function(o,t){console.log(o.id,"打印缓存中的id"),i.map(function(t,e){t&&(console.log(t.id,"打印接口中的id"),t.id===o.id&&i.splice(e,1))}),console.log(i,"去重后的数据")}),i.length>0&&(console.log("去重后剩余数据"),i.map(function(t,n){var i={id:0,love:!1};i.id=t.id,e.clickRecordsInFor.push(i),o.setStorageSync("clickRecordsInFor",JSON.stringify(e.clickRecordsInFor))})));t.search.pageNum=e.pageNums(n.data.total),console.log(n.data.total,t.search.pageNum),1===t.search.pageNum&&(e.loadingText="已经没有数据了",t.loadingText="已经没有数据了!"),o.hideLoading(),e.$store.commit("setInformation",t)},fail:function(t){o.hideLoading(),o.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})},getMoreList:function(t){var e=this;console.log(t,"数显数据函数的参数More"),t.search.searchCondition.page=String(parseInt(t.search.searchCondition.page)+1);var n={activityTitel:"",activityState:"1"};o.showLoading({title:"加载中"}),o.request({url:this.api2+"/activity/list?page="+t.search.searchCondition.page,data:n,method:"POST",header:{},success:function(n){console.log(n.data),t.listData=t.listData.concat(n.data.rows);var i=c(n.data.rows);console.log("缓存中的数据大于等于接口每次返回的数据"),e.clickRecordsInFor.map(function(o,t){console.log(o.id,"打印缓存中的id"),i.map(function(t,e){t&&(console.log(t.instId,"打印接口中的id"),t.id===o.id&&i.splice(e,1))}),console.log(i,"去重后的数据")}),i.length>0&&(console.log(i,"去重后剩余数据"),i.map(function(t,n){var i={id:0,love:!1};i.id=t.id,e.clickRecordsInFor.push(i),o.setStorageSync("clickRecordsInFor",JSON.stringify(e.clickRecordsInFor))})),o.hideLoading(),e.$store.commit("setInformation",t),e.goScrollTop()},fail:function(t){o.hideLoading(),o.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})},checkboxChange:function(o){this.putInList=o.detail.value,console.log(this.putInList,"putInList")},labelBtn:function(o,t){var e=this;console.log(o,t,"nameindex"),this.putInList.join(",").indexOf(o)>-1?this.putInList.map(function(o,n){e.listData[t].checked=!0}):this.listData[t].checked=!1}}};t.default=d}).call(this,e("543d")["default"])},5276:function(o,t,e){},"939b":function(o,t,e){"use strict";var n=e("5276"),i=e.n(n);i.a},ae0f:function(o,t,e){"use strict";var n=function(){var o=this,t=o.$createElement;o._self._c},i=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return i})},d6aa:function(o,t,e){"use strict";e.r(t);var n=e("ae0f"),i=e("ed37");for(var a in i)"default"!==a&&function(o){e.d(t,o,function(){return i[o]})}(a);e("939b");var c=e("2877"),s=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},ed37:function(o,t,e){"use strict";e.r(t);var n=e("0b9a"),i=e.n(n);for(var a in n)"default"!==a&&function(o){e.d(t,o,function(){return n[o]})}(a);t["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/aLittle/putInBusiness/putInBusinessList/putInList/putInOne/putInOne-create-component',
    {
        'modules/aLittle/putInBusiness/putInBusinessList/putInList/putInOne/putInOne-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d6aa"))
        })
    },
    [['modules/aLittle/putInBusiness/putInBusinessList/putInList/putInOne/putInOne-create-component']]
]);                
