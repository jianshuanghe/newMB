(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/InstructionsPrice/Purchase/Purchase-details/dataReport/dataTrendKanban/putIn/dataTrend"],{"041b":function(t,e,n){"use strict";n.r(e);var i=n("de42"),a=n("3fbf");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("c63d");var r=n("2877"),o=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},"3fbf":function(t,e,n){"use strict";n.r(e);var i=n("cb33"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},c63d:function(t,e,n){"use strict";var i=n("ee2d"),a=n.n(i);a.a},cb33:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a=o(n("517b")),s=n("d79e"),r=n("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){h(t,e,n[e])})}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=null,c=function(){return n.e("modules/InstructionsPrice/Purchase/Purchase-details/dataReport/dataTrendKanban/liuLiang/customTime").then(n.bind(null,"33a2"))},g={components:{customTime:c},props:["shujuid"],data:function(){return{Image:this.Static+"my/Image.png",downarrow:this.Static+"my/down-arrow.png",clickItemsIndex:7,timess:[],tabList:[{code:1,text:"昨天"},{code:7,text:"近七日"},{code:30,text:"近30日"},{code:"001",text:"自定义时间"}],trendKanBanText:{kanBanText:"近七日",trendLeftText:"访问量",trendRightText:"点赞数",kanBanTime:7,trendLeft:"0",trendRight:"1"},customTime2:{show:!1,selectTime:!1},trendKanban:{kanBanText:"近七日",trendLeftText:"访问量",trendRightText:"点赞数",kanBanTime:7,trendLeft:"0",trendRight:"1"},dataTrendKanban:{userId:"",starTime:"",endTime:"",instIds:""},dataTime:{starTime:"",endTime:""},isCustomTime:!1,startDate:new Date("2018-01-01"),endDate:new Date,dataTrend:{lineType0:"2",lineType1:"0"},cWidth:"690upx.",cHeight:"",pixelRatio:1,textarea:"",rightArrow:this.Static+"home/extendManageList/rightArrow.png",leftScreenData:[],LineA:{categories:["2019-09-17","2019-09-18","2019-09-19","2019-09-20","2019-09-21"],series:[{name:"访问量",legendShape:"circle",data:[23,10,30,15,60]},{name:"点赞数",legendShape:"circle",data:[10,69,60,20,90]}]},msgDataIsNew:[],instIds:""}},computed:d({i18n:function(){return this.$t("extendManageList")}},(0,r.mapGetters)(["TRENDKANBAN","GET_ALITTLE"])),watch:{GET_ALITTLE:{handler:function(t,e){console.log(t.Putinname),this.instIds=t.Putinname,""!==t.Putinname&&(this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.shujuid),this.Trenddata(this.dataTrendKanban.starTime,this.dataTrendKanban.endTime,this.shujuid))},deep:!0}},created:function(){this.dataTrendKanban.starTime=this.getDate(7),this.dataTrendKanban.endTime=this.getDate(0),this.getDate(1),this.Starttiming=this.getDate(7),this.Closingtime=this.getDate(0),this.Trenddata(this.Starttiming,this.Closingtime,this.shujuid),this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.shujuid),this.itemList2=this.i18n.itemList2,i=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.getServerData()},mounted:function(){},methods:d({},(0,r.mapMutations)({setTrendKan:"setTrendKan",setLoadingShow:"setLoadingShow",setLoadingText:"setLoadingText",setCustomTime:"setCustomTime"}),{stomTime:function(t){console.log(t[0],t[1]),this.Starttiming=t[0],this.Closingtime=t[1],this.Trenddata(this.Starttiming,this.Closingtime,this.shujuid),this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.shujuid)},clikeTimeTab:function(t){console.log(t,"切换时间tab"),1===t?(this.clickItemsIndex=t,this.Trenddata(this.getDate(1),this.getDate(1),this.shujuid),this.Starttiming=this.getDate(1),this.Closingtime=this.getDate(1),this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.shujuid)):7==t?(this.clickItemsIndex=t,this.Trenddata(this.getDate(t),this.getDate(0),this.shujuid),this.Starttiming=this.getDate(t),this.Closingtime=this.getDate(0),this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.shujuid)):30==t?(this.clickItemsIndex=t,this.Trenddata(this.getDate(t),this.getDate(0),this.shujuid),this.Starttiming=this.getDate(t),this.Closingtime=this.getDate(0),this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.shujuid)):"001"===t&&(console.log("触发自定义时间"),this.clickItemsIndex=t,this.customTime2.show=!0,this.$store.commit("setCustomTime2",this.customTime2))},Trenddata:function(e,n,i){var a=this;if(console.log(e,n,i),t.getStorageSync("landRegist")){var s=JSON.parse(t.getStorageSync("landRegist"));console.log(s.user.id);var r={starTime:e,endTime:n,userId:s.user.id,purcIds:i};console.log(r),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/purc/dataInfo",data:r,method:"POST",header:{Authorization:"Bearer "+s.token},success:function(e){t.hideLoading(),console.log(e.data),a.timess=e.data.content,a.i18n.leftScreenData[0].code=a.timess.infoCount,a.i18n.leftScreenData[1].code=a.timess.likeCount,a.i18n.leftScreenData[2].code=a.timess.followCount,a.i18n.leftScreenData[3].code=a.timess.shareCount,a.i18n.leftScreenData[4].code=a.timess.telCount},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},Chart:function(e,n,i,a,s){var r=this;if(t.getStorageSync("landRegist")){var o=JSON.parse(t.getStorageSync("landRegist"));if(console.log(o.user.id),void 0==i&&void 0==a){var d={starTime:String(e),endTime:String(n),userId:o.user.id,lineType0:"0",lineType1:"1",purcIds:s};console.log(3)}else if(void 0==i){d={starTime:String(e),endTime:String(n),userId:o.user.id,lineType0:"0",lineType1:String(a),purcIds:s};console.log(1)}else if(void 0==a){d={starTime:String(e),endTime:String(n),userId:o.user.id,lineType0:String(i),lineType1:"1",purcIds:s};console.log(2)}else if(-1==i){d={starTime:String(e),endTime:String(n),userId:o.user.id,lineType0:"0",lineType1:String(a),purcIds:s};console.log("c==-1")}else if(0==s.length)d={starTime:String(e),endTime:String(n),userId:o.user.id,lineType0:String(i),lineType1:String(a),purcIds:""};else{d={starTime:String(e),endTime:String(n),userId:o.user.id,lineType0:String(i),lineType1:String(a),purcIds:s};console.log(4)}console.log(d),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/purc/dataInfoLineList",data:d,method:"POST",header:{Authorization:"Bearer "+o.token},success:function(e){t.hideLoading(),console.log(e.data);var n=e.data.content.values0,i=e.data.content.values1;r.LineA.series[0].data=n,r.LineA.series[1].data=i,r.LineA.categories=e.data.content.dates,r.getServerData()},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},timeChange:function(t){var e=this;console.log("picker发送选择改变，携带值为",t.target.value),this.i18n.screenData.map(function(n,i){String(i)===String(t.target.value)&&(console.log(n,"时间选择"),"001"!==n.code?(e.isCustomTime=!1,e.trendKanBanText.kanBanText=n.text,e.dataTrendKanban.starTime=e.getDate(n.code),e.dataTrendKanban.endTime=e.getDate(0)):(console.log("触发自定义时间"),e.isCustomTime=!0))})},leftScreenDataChange:function(t){var e=this;console.log("picker发送选择改变，携带值为",t.target.value),this.i18n.leftScreenData.map(function(n,i){String(i)===String(t.target.value)&&(console.log(n,"左侧选择数据"),e.trendKanBanText.trendLeftText=n.text,e.trendKanBanText.trendLeft=t.target.value,console.log(e.trendKanBanText.trendLeft),e.LineA.series[0].name=n.text,e.updateUcharts(e.LineA),"访问量"==n.text?e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid):"点赞数"==n.text?e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid):"收藏数"==n.text?e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid):"分享数"==n.text?e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid):"拨打电话数"==n.text?e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid):"询盘数"==n.text?e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid):"报价单"==n.text&&e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid))})},rightScreenDataChange:function(t){var e=this;console.log("picker发送选择改变，携带值为",t.target.value),this.i18n.leftScreenData.map(function(n,i){String(i)===String(t.target.value)&&(console.log(n,"右侧选择数据"),e.trendKanBanText.trendRightText=n.text,e.trendKanBanText.trendRight=t.target.value,e.LineA.series[1].name=n.text,e.updateUcharts(e.LineA),"访问量"==n.text?e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid):"点赞数"==n.text?e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid):"收藏数"==n.text?e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid):"分享数"==n.text?e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid):"拨打电话数"==n.text?e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid):"询盘数"==n.text?e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid):"报价单"==n.text&&e.Chart(e.Starttiming,e.Closingtime,e.trendKanBanText.trendLeft,e.trendKanBanText.trendRight,e.shujuid))})},getServerData:function(){var t={categories:[],series:[]};t.categories=this.LineA.categories,t.series=this.LineA.series,i.textarea=JSON.stringify(this.LineA),i.showLineA("canvasLineA",t)},showLineA:function(t,e){l=new a.default({$this:i,canvasId:t,type:"line",colors:["#02C2A2","#FF4D6A"],fontSize:11,padding:[15,15,0,15],legend:{position:"top",show:!1,padding:5,lineHeight:11,margin:5},dataLabel:!0,dataPointShape:!0,dataPointShapeType:"hollow",background:"#FFFFFF",pixelRatio:i.pixelRatio,categories:e.categories,series:e.series,animation:!1,enableScroll:!0,xAxis:{disableGrid:!0,type:"grid",gridColor:"#02C2A2",fontSize:12,gridType:"solid",itemCount:4,scrollShow:!1,scrollAlign:"right"},yAxis:{disabled:!0,disableGrid:!0},width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{line:{type:"curve"}}})},touchLineA:function(t){l.scrollStart(t)},moveLineA:function(t){l.scroll(t)},touchEndLineA:function(t){l.scrollEnd(t),l.touchLegend(t),l.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})},changeData:function(){if((0,s.isJSON)(i.textarea)){var e=JSON.parse(i.textarea);l.updateData({series:e.series,categories:e.categories,scrollPosition:"right",animation:!1})}else t.showToast({title:"数据格式错误"})},updateUcharts:function(t){var e=t;console.log(e,"需要跟新的新数据uchart"),l.updateData({series:e.series,categories:e.categories})},resetKanBanData:function(t){console.log("重置看板数据"),this.itemList[0].num=t.sumMoney,this.itemList[1].num=t.clikeCount,this.itemList[2].num=t.clikeCountRate,this.itemList[3].num=t.countInfo,this.itemList[4].num=t.converCount,this.itemList[5].num=t.converCountRate,this.itemList[6].num=t.submitCount,this.itemList[7].num=t.telCount,this.itemList[8].num=t.followCount,this.itemList[9].num=t.clikeCustCount,this.itemList[10].num=t.scaleMoney},getLine:function(t){console.log(t,"折线数据"),this.line.series[0].data={},this.line.series[1].data={},this.line.xAxis.data=t.dates,this.line.series[0].data=t.values1,this.line.series[1].data=t.values0},screenDataPopup:function(t){0===t?this.dataPopup=!0:1===t?this.leftScreenPopup=!0:2===t&&(this.rightScreenPopup=!0)},confirmScreen:function(){console.log("1"),"001"!==this.trendKanban.kanBanTime?(this.isCustomTime=!1,this.dataPopup=!1,this.trendKanBanText=this.trendKanban,this.$store.commit("setTrendKan",this.trendKanban),this.dataTrendKanban.starTime=this.getDate(this.trendKanban.kanBanTime),this.dataTrendKanban.endTime=this.getDate(0),this.getDataTrendKanBan()):(console.log("触发自定义时间"),this.isCustomTime=!0,this.dataPopup=!1,Toast({message:"请输入起始时间",duration:2e3}),this.$refs.birthPicker.open())},confirmBth:function(){this.dataTime.starTime||(this.dataTime.starTime="2018-01-01");var t=new Date(this.GMTToStr(this.dataTime.starTime).replace(/-/g,"/")),e=new Date(this.getDate(0).replace(/-/g,"/"));if(t>=e)return Toast("起始时间应小于今天"),void this.$refs.birthPicker.open();this.dataTrendKanban.starTime=this.GMTToStr(this.dataTime.starTime),Toast({message:"请输入结束时间",duration:2e3}),this.$refs.birthPicker2.open()},confirmBth2:function(){this.dataTime.endTime||(this.dataTime.endTime="2018-01-01");var t=new Date(this.dataTrendKanban.starTime.replace(/-/g,"/")),e=new Date(this.GMTToStr(this.dataTime.endTime).replace(/-/g,"/"));if(e<=t)return Toast("结束时间应大于起始时间"),void this.$refs.birthPicker2.open();this.dataTrendKanban.endTime=this.GMTToStr(this.dataTime.endTime),this.getDataTrendKanBan()},GMTToStr:function(t){var e=new Date(t),n=e.getMonth()+1;1===n.toString().length&&(n="0"+n);var i=e.getDate();1===i.toString().length&&(i="0"+i);var a=e.getFullYear()+"-"+n+"-"+i;return a},confirmLeftScreen:function(){console.log("2"),this.leftScreenPopup=!1,this.trendKanBanText=this.trendKanban,this.$store.commit("setTrendKan",this.trendKanban),this.dataTrend.lineType0=this.trendKanban.trendLeft,this.line.legend.data[0]=this.trendKanban.trendLeftText,this.line.series[1].name=this.trendKanban.trendLeftText,this.getDataTrendKanBan()},confirmRightScreen:function(){console.log("3"),this.rightScreenPopup=!1,this.trendKanBanText=this.trendKanban,this.$store.commit("setTrendKan",this.trendKanban),this.dataTrend.lineType1=this.trendKanban.trendRight,console.log(this.line.legend.data,this.line.series,"展示数据横线text"),this.line.legend.data[1]=this.trendKanban.trendRightText,this.line.series[0].name=this.trendKanban.trendRightText,this.getDataTrendKanBan()},getDataTrendKanBan:function(){var t=this;console.log("获取推广项目看板数据"),this.$store.commit("setLoadingShow",!0);var e=this.dataTrendKanban;axios.post(this.api2+"/rest-rp/putIn/dataInfo",e).then(function(e){console.log(e.data,"看板数据");var n=e.data;t.resetKanBanData(n),console.log("数据看板数据"),t.getTrendData()}).catch(function(e){t.$store.commit("setLoadingShow",!1),Toast("网络繁忙，请稍后"),console.log(e,"网络繁忙，请稍后")})},getTrendData:function(){var t=this;console.log("获取数据趋势数据");var e=JSON.parse(localStorage.getItem("landRegist"));console.log(e.user.id);var n=this.dataTrendKanban;n.lineType0=this.dataTrend.lineType0,n.lineType1=this.dataTrend.lineType1,axios.post(this.api2+"/rest-rp/putIn/dataInfoLineList",n).then(function(e){t.$store.commit("setLoadingShow",!1),console.log("数据趋势数据");var n=e.data.content;t.getLine(n)}).catch(function(e){t.$store.commit("setLoadingShow",!1),Toast("网络繁忙，请稍后"),console.log(e,"网络繁忙，请稍后")})},onNationChange:function(t,e){console.log(e)},onValuesChangeKanBan:function(t,e){console.log(e),this.trendKanban.kanBanTime=e[0].code,this.trendKanban.kanBanText=e[0].text,console.log(this.trendKanban,"看板")},onValuesChangeTrendLeft:function(t,e){console.log(e),this.trendKanban.trendLeft=e[0].code,this.trendKanban.trendLeftText=e[0].text,console.log(this.trendKanban,"趋势left")},onValuesChangeTrendRight:function(t,e){console.log(e),this.trendKanban.trendRight=e[0].code,this.trendKanban.trendRightText=e[0].text,console.log(this.trendKanban,"趋势right")},InitTabScroll:function(){var t=this;this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new BScroll(t.$refs.tab,{startX:0,click:!0,scrollX:!0,scrollY:!1,eventPassthrough:"vertical"})})}})};e.default=g}).call(this,n("5486")["default"])},de42:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},ee2d:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/InstructionsPrice/Purchase/Purchase-details/dataReport/dataTrendKanban/putIn/dataTrend-create-component',
    {
        'modules/InstructionsPrice/Purchase/Purchase-details/dataReport/dataTrendKanban/putIn/dataTrend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("041b"))
        })
    },
    [['modules/InstructionsPrice/Purchase/Purchase-details/dataReport/dataTrendKanban/putIn/dataTrend-create-component']]
]);                
