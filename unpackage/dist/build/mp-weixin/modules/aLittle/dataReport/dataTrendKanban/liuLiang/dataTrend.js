(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/aLittle/dataReport/dataTrendKanban/liuLiang/dataTrend"],{"0801":function(t,e,n){"use strict";n.r(e);var a=n("0cae"),i=n("7257");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("be93");var o=n("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"0cae":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},4190:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("d0d9")),i=n("445a"),s=r(n("93a1")),o=n("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l,h=function(){return Promise.all([n.e("common/vendor"),n.e("modules/aLittle/dataReport/dataTrendKanban/liuLiang/customTime")]).then(n.bind(null,"c140"))},u=null,g={components:{customTime:h},data:function(){return{clickItemsIndex:1,customTime:{show:!1,selectTime:!1},tabList:[{code:1,text:"昨天"},{code:0,text:"今天"},{code:7,text:"近七日"},{code:30,text:"近30日"},{code:"001",text:"自定义时间"}],trendKanBanText:{kanBanText:"近七日",trendLeftText:"点击数",trendRightText:"总消耗",kanBanTime:7,trendLeft:"1",trendRight:"3"},trendKanban:{kanBanText:"近七日",trendLeftText:"点击数",trendRightText:"总消耗",kanBanTime:7,trendLeft:"1",trendRight:"3"},dataTrendKanban:{userId:"",starTime:"",endTime:"",instIds:""},dataTime:{starTime:"",endTime:""},isCustomTime:!1,startDate:new Date("2018-01-01"),endDate:new Date,dataTrend:{lineType0:"2",lineType1:"0"},cWidth:"690upx.",cHeight:"",pixelRatio:1,textarea:"",rightArrow:s.default,itemList:[],LineA:{categories:["2019-09-17","2019-09-18","2019-09-19","2019-09-20","2019-09-21"],series:[{name:"成交量A",legendShape:"circle",data:[23,10,30,15,60]},{name:"成交量B",legendShape:"circle",data:[10,69,60,20,90]}]},msgDataIsNew:[]}},computed:d({i18n:function(){return this.$t("extendManageList")}},(0,o.mapGetters)(["GET_ALITTLE"])),created:function(){this.itemList=this.i18n.itemList,l=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.getServerData()},mounted:function(){},methods:d({},(0,o.mapMutations)({setCustomTime:"setCustomTime",setTrendKan:"setTrendKan",setLoadingShow:"setLoadingShow",setLoadingText:"setLoadingText"}),{clikeTimeTab:function(t){console.log(t,"切换时间tab"),"001"!==t?(this.clickItemsIndex=t,this.dataTrendKanban.starTime=this.getDate(items.code),this.dataTrendKanban.endTime=this.getDate(0)):(console.log("触发自定义时间"),this.customTime.show=!0,this.$store.commit("setCustomTime",this.customTime))},timeChange:function(t){var e=this;console.log("picker发送选择改变，携带值为",t.target.value),this.i18n.screenData.map(function(n,a){String(a)===String(t.target.value)&&(console.log(n,"时间选择"),"001"!==n.code?(e.isCustomTime=!1,e.trendKanBanText.kanBanText=n.text,e.dataTrendKanban.starTime=e.getDate(n.code),e.dataTrendKanban.endTime=e.getDate(0)):(console.log("触发自定义时间"),e.isCustomTime=!0))})},leftScreenDataChange:function(t){var e=this;console.log("picker发送选择改变，携带值为",t.target.value),this.i18n.leftScreenData.map(function(n,a){String(a)===String(t.target.value)&&(console.log(n,"左侧选择数据"),e.trendKanBanText.trendLeftText=n.text,e.trendKanBanText.trendLeft=n.code,e.LineA.series[0].name=n.text,console.log(e.LineA,"跟新后数据"),e.updateUcharts(e.LineA))})},rightScreenDataChange:function(t){var e=this;console.log("picker发送选择改变，携带值为",t.target.value),this.i18n.rightScreenData.map(function(n,a){String(a)===String(t.target.value)&&(console.log(n,"右侧选择数据"),e.trendKanBanText.trendRightText=n.text,e.trendKanBanText.trendRight=n.code,e.LineA.series[1].name=n.text,e.updateUcharts(e.LineA))})},getServerData:function(){var t={categories:[],series:[]};t.categories=this.LineA.categories,t.series=this.LineA.series,l.textarea=JSON.stringify(this.LineA),l.showLineA("canvasLineA",t)},showLineA:function(t,e){u=new a.default({$this:l,canvasId:t,type:"line",colors:["#FF4D6A","#02C2A2"],fontSize:11,padding:[15,15,0,15],legend:{position:"top",show:!0,padding:5,lineHeight:11,margin:5},dataLabel:!0,dataPointShape:!0,dataPointShapeType:"hollow",background:"#FFFFFF",pixelRatio:l.pixelRatio,categories:e.categories,series:e.series,animation:!1,enableScroll:!0,xAxis:{disableGrid:!0,type:"grid",gridColor:"#02C2A2",fontSize:12,gridType:"solid",itemCount:4,scrollShow:!1,scrollAlign:"left"},yAxis:{disabled:!0,disableGrid:!0},width:l.cWidth*l.pixelRatio,height:l.cHeight*l.pixelRatio,extra:{line:{type:"curve"}}})},touchLineA:function(t){u.scrollStart(t)},moveLineA:function(t){u.scroll(t)},touchEndLineA:function(t){u.scrollEnd(t),u.touchLegend(t),u.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})},changeData:function(){if((0,i.isJSON)(l.textarea)){var e=JSON.parse(l.textarea);u.updateData({series:e.series,categories:e.categories,scrollPosition:"right",animation:!1})}else t.showToast({title:"数据格式错误"})},updateUcharts:function(t){var e=t;console.log(e,"需要跟新的新数据uchart"),u.updateData({series:e.series,categories:e.categories})},resetKanBanData:function(t){console.log("重置看板数据"),this.itemList[0].num=t.sumMoney,this.itemList[1].num=t.clikeCount,this.itemList[2].num=t.clikeCountRate,this.itemList[3].num=t.countInfo,this.itemList[4].num=t.converCount,this.itemList[5].num=t.converCountRate,this.itemList[6].num=t.submitCount,this.itemList[7].num=t.telCount,this.itemList[8].num=t.followCount,this.itemList[9].num=t.clikeCustCount,this.itemList[10].num=t.scaleMoney},getLine:function(t){console.log(t,"折线数据"),this.line.series[0].data={},this.line.series[1].data={},this.line.xAxis.data=t.dates,this.line.series[0].data=t.values1,this.line.series[1].data=t.values0},screenDataPopup:function(t){0===t?this.dataPopup=!0:1===t?this.leftScreenPopup=!0:2===t&&(this.rightScreenPopup=!0)},confirmScreen:function(){console.log("1"),"001"!==this.trendKanban.kanBanTime?(this.isCustomTime=!1,this.dataPopup=!1,this.trendKanBanText=this.trendKanban,this.$store.commit("setTrendKan",this.trendKanban),this.dataTrendKanban.starTime=this.getDate(this.trendKanban.kanBanTime),this.dataTrendKanban.endTime=this.getDate(0),this.getDataTrendKanBan()):(console.log("触发自定义时间"),this.isCustomTime=!0,this.dataPopup=!1,Toast({message:"请输入起始时间",duration:2e3}),this.$refs.birthPicker.open())},confirmBth:function(){this.dataTime.starTime||(this.dataTime.starTime="2018-01-01");var t=new Date(this.GMTToStr(this.dataTime.starTime).replace(/-/g,"/")),e=new Date(this.getDate(0).replace(/-/g,"/"));if(t>=e)return Toast("起始时间应小于今天"),void this.$refs.birthPicker.open();this.dataTrendKanban.starTime=this.GMTToStr(this.dataTime.starTime),Toast({message:"请输入结束时间",duration:2e3}),this.$refs.birthPicker2.open()},confirmBth2:function(){this.dataTime.endTime||(this.dataTime.endTime="2018-01-01");var t=new Date(this.dataTrendKanban.starTime.replace(/-/g,"/")),e=new Date(this.GMTToStr(this.dataTime.endTime).replace(/-/g,"/"));if(e<=t)return Toast("结束时间应大于起始时间"),void this.$refs.birthPicker2.open();this.dataTrendKanban.endTime=this.GMTToStr(this.dataTime.endTime),this.getDataTrendKanBan()},GMTToStr:function(t){var e=new Date(t),n=e.getMonth()+1;1===n.toString().length&&(n="0"+n);var a=e.getDate();1===a.toString().length&&(a="0"+a);var i=e.getFullYear()+"-"+n+"-"+a;return i},confirmLeftScreen:function(){console.log("2"),this.leftScreenPopup=!1,this.trendKanBanText=this.trendKanban,this.$store.commit("setTrendKan",this.trendKanban),this.dataTrend.lineType0=this.trendKanban.trendLeft,this.line.legend.data[0]=this.trendKanban.trendLeftText,this.line.series[1].name=this.trendKanban.trendLeftText,this.getDataTrendKanBan()},confirmRightScreen:function(){console.log("3"),this.rightScreenPopup=!1,this.trendKanBanText=this.trendKanban,this.$store.commit("setTrendKan",this.trendKanban),this.dataTrend.lineType1=this.trendKanban.trendRight,console.log(this.line.legend.data,this.line.series,"展示数据横线text"),this.line.legend.data[1]=this.trendKanban.trendRightText,this.line.series[0].name=this.trendKanban.trendRightText,this.getDataTrendKanBan()},getDataTrendKanBan:function(){var t=this;console.log("获取推广项目看板数据"),this.$store.commit("setLoadingShow",!0);var e=this.dataTrendKanban;axios.post(this.api2+"/rest-rp/putIn/dataInfo",e).then(function(e){console.log(e.data,"看板数据");var n=e.data;t.resetKanBanData(n),console.log("数据看板数据"),t.getTrendData()}).catch(function(e){t.$store.commit("setLoadingShow",!1),Toast("网络繁忙，请稍后"),console.log(e,"网络繁忙，请稍后")})},getTrendData:function(){var t=this;console.log("获取数据趋势数据");var e=JSON.parse(localStorage.getItem("landRegist"));console.log(e.user.id);var n=this.dataTrendKanban;n.lineType0=this.dataTrend.lineType0,n.lineType1=this.dataTrend.lineType1,axios.post(this.api2+"/rest-rp/putIn/dataInfoLineList",n).then(function(e){t.$store.commit("setLoadingShow",!1),console.log("数据趋势数据");var n=e.data.content;t.getLine(n)}).catch(function(e){t.$store.commit("setLoadingShow",!1),Toast("网络繁忙，请稍后"),console.log(e,"网络繁忙，请稍后")})},onNationChange:function(t,e){console.log(e)},onValuesChangeKanBan:function(t,e){console.log(e),this.trendKanban.kanBanTime=e[0].code,this.trendKanban.kanBanText=e[0].text,console.log(this.trendKanban,"看板")},onValuesChangeTrendLeft:function(t,e){console.log(e),this.trendKanban.trendLeft=e[0].code,this.trendKanban.trendLeftText=e[0].text,console.log(this.trendKanban,"趋势left")},onValuesChangeTrendRight:function(t,e){console.log(e),this.trendKanban.trendRight=e[0].code,this.trendKanban.trendRightText=e[0].text,console.log(this.trendKanban,"趋势right")},InitTabScroll:function(){var t=this;this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new BScroll(t.$refs.tab,{startX:0,click:!0,scrollX:!0,scrollY:!1,eventPassthrough:"vertical"})})}})};e.default=g}).call(this,n("543d")["default"])},7257:function(t,e,n){"use strict";n.r(e);var a=n("4190"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},be93:function(t,e,n){"use strict";var a=n("f019"),i=n.n(a);i.a},f019:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/aLittle/dataReport/dataTrendKanban/liuLiang/dataTrend-create-component',
    {
        'modules/aLittle/dataReport/dataTrendKanban/liuLiang/dataTrend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0801"))
        })
    },
    [['modules/aLittle/dataReport/dataTrendKanban/liuLiang/dataTrend-create-component']]
]);                
