(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/myCollectiononBrowseonPoints/CollectiononBrowseonPoints/my-Collection"],{"348b":function(t,e,a){},"34af":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("1f41"));function i(t){return t&&t.__esModule?t:{default:t}}var s=function(){return Promise.all([a.e("common/vendor"),a.e("components/mbbo/quickBtn/quickBtn")]).then(a.bind(null,"ec6c"))},o=function(){return Promise.all([a.e("common/vendor"),a.e("components/mbbo/homeSearch/homeSearch")]).then(a.bind(null,"5af6"))},r=function(){return a.e("modules/myCompany/myCollectiononBrowseonPoints/CollectiononBrowseonPoints/Collection/mediaList").then(a.bind(null,"ad3b"))},A=3,l={components:{quickBtn:s,homeSearch:o,mediaList:r},data:function(){return{arr:{},nocon:n.default,datasea:"",newsList:[{data:this.arr,refreshText:"",loadingText:""},{data:this.arr,refreshText:"",loadingText:""},{data:this.arr,refreshText:"",loadingText:""},{data:this.arr,refreshText:"",loadingText:""},{data:this.arr,refreshText:"",loadingText:""},{data:this.arr,refreshText:"",loadingText:""}],cacheTab:[],adefau:"",tabIndex:0,tabBars:[{name:"全部",id:"guanzhu"},{name:"产品",id:"tuijian"},{name:"采购",id:"redian"},{name:"资讯",id:"caijing"},{name:"企业",id:"yule"},{name:"资本",id:"junshi"}],scrollInto:"",pages:"1",Currentpage:"1",showTips:!1,navigateFlag:!1,pulling:!1,refreshIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg==",loadingIcon:"data:image/gif;base64,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"}},created:function(){this.adefau="push",console.log(this.adefau),this.Collection(),this.shareEachPage()},methods:{Collection:function(){var e=this;if(t.getStorageSync("landRegist")){var a=JSON.parse(t.getStorageSync("landRegist"));console.log(a.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/follow/myUserBehaviorList?page="+this.pages+"&userId="+a.user.id+"&business=1",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){t.hideLoading(),console.log(a.data),0==a.data.content.list.length?(e.newsList[0].data=a.data.content.list,e.datasea="kong"):(e.newsList[0].data=a.data.content.list,e.datasea="")},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},insts:function(){var e=this;if(t.getStorageSync("landRegist")){var a=JSON.parse(t.getStorageSync("landRegist"));console.log(a.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/follow/myUserBehaviorList?page="+this.pages+"&userId="+a.user.id+"&business=1&type=0",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){t.hideLoading(),console.log(a.data),0==a.data.content.list.length?(e.newsList[1].data=a.data.content.list,e.datasea="kong"):(e.newsList[1].data=a.data.content.list,e.datasea="")},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},purcs:function(){var e=this;if(t.getStorageSync("landRegist")){var a=JSON.parse(t.getStorageSync("landRegist"));console.log(a.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/follow/myUserBehaviorList?page="+this.pages+"&userId="+a.user.id+"&business=1&type=1",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){t.hideLoading(),console.log(a.data),0==a.data.content.list.length?(e.newsList[2].data=a.data.content.list,e.datasea="kong"):(e.newsList[2].data=a.data.content.list,e.datasea="")},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},newss:function(){var e=this;if(t.getStorageSync("landRegist")){var a=JSON.parse(t.getStorageSync("landRegist"));console.log(a.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/follow/myUserBehaviorList?page="+this.pages+"&userId="+a.user.id+"&business=1&type=2",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){t.hideLoading(),console.log(a.data),0==a.data.content.list.length?(e.newsList[3].data=a.data.content.list,e.datasea="kong"):(e.newsList[3].data=a.data.content.list,e.datasea="")},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},compServices:function(){var e=this;if(t.getStorageSync("landRegist")){var a=JSON.parse(t.getStorageSync("landRegist"));console.log(a.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/follow/myUserBehaviorList?page="+this.pages+"&userId="+a.user.id+"&business=1&type=5",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){t.hideLoading(),console.log(a.data),0==a.data.content.list.length?(e.newsList[4].data=a.data.content.list,e.datasea="kong"):(e.newsList[4].data=a.data.content.list,e.datasea="")},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},invests:function(){var e=this;if(t.getStorageSync("landRegist")){var a=JSON.parse(t.getStorageSync("landRegist"));console.log(a.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/follow/myUserBehaviorList?page="+this.pages+"&userId="+a.user.id+"&business=1&type=3",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){t.hideLoading(),console.log(a.data),0==a.data.content.list.length?(e.newsList[5].data=a.data.content.list,e.datasea="kong"):(e.newsList[5].data=a.data.content.list,e.datasea="")},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},getList:function(t){for(var e=this.newsList[t],a=[],n=1;n<=10;n++){var i=Object.assign({},newsData["data"+Math.floor(5*Math.random())]);i.id=this.newGuid(),a.push(i)}e.data=e.data.concat(a),console.log(e.data,"----------------activeTab.data----------------")},goDetail:function(e){var a=this;this.navigateFlag||(this.navigateFlag=!0,t.navigateTo({url:"./detail/detail?title="+e.title}),setTimeout(function(){a.navigateFlag=!1},200))},close:function(e,a){var n=this;t.showModal({content:"是否删除本条信息？",success:function(t){t.confirm&&n.newsList[e].data.splice(a,1)}})},loadMore:function(t){},ontabtap:function(t){this.pinDaoShow=!1,this.editOrFinish=0;var e=t.target.dataset.current||t.currentTarget.dataset.current,a=2;this.switchTab(e,a)},ontabchange:function(t){var e=t.target.current||t.detail.current,a=2;this.switchTab(e,a),this.Currentpage=t.detail.current,0==this.Currentpage?(this.adefau="push",this.Collection()):1==this.Currentpage?(this.adefau="inst",this.insts()):2==this.Currentpage?(this.adefau="purc",this.purcs()):3==this.Currentpage?(this.adefau="news",this.newss()):4==this.Currentpage?(this.adefau="compService",this.compServices()):5==this.Currentpage&&(this.adefau="invest",this.invests())},switchTab:function(t,e){if(this.durationTime=1===e?0:300,this.tabIndex!==t&&(this.tabIndex=t,this.scrollInto=this.tabBars[t].id,this.cacheTab.length>A)){var a=this.cacheTab[0];this.clearTabData(a),this.cacheTab.splice(0,1)}},clearTabData:function(t){this.newsList[t].data.length=0,this.newsList[t].loadingText="加载更多..."},refreshData:function(){},onrefresh:function(t){var e=this,a=this.newsList[this.tabIndex];a.refreshFlag&&(a.refreshing=!0,a.refreshText="正在刷新...",setTimeout(function(){e.refreshData(),e.pulling=!0,a.refreshing=!1,a.refreshText="已刷新",setTimeout(function(){e.pulling=!1},500)},2e3))},onpullingdown:function(t){var e=this.newsList[this.tabIndex];e.refreshing||this.pulling||(Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(e.refreshFlag=!0,e.refreshText="释放立即刷新"):(e.refreshFlag=!1,e.refreshText="下拉可以刷新"))},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()}}};e.default=l}).call(this,a("5486")["default"])},"77ef":function(t,e,a){"use strict";a.r(e);var n=a("80e2"),i=a("bee6");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("8aea");var o=a("2877"),r=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},"80e2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"8aea":function(t,e,a){"use strict";var n=a("348b"),i=a.n(n);i.a},bee6:function(t,e,a){"use strict";a.r(e);var n=a("34af"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/myCompany/myCollectiononBrowseonPoints/CollectiononBrowseonPoints/my-Collection-create-component',
    {
        'modules/myCompany/myCollectiononBrowseonPoints/CollectiononBrowseonPoints/my-Collection-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("77ef"))
        })
    },
    [['modules/myCompany/myCollectiononBrowseonPoints/CollectiononBrowseonPoints/my-Collection-create-component']]
]);