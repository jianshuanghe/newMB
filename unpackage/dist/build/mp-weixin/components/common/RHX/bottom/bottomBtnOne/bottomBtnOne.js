(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/bottom/bottomBtnOne/bottomBtnOne"],{"029a":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},"26f8":function(t,n,e){"use strict";e.r(n);var i=e("029a"),o=e("cfb9");for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);e("cc2d");var a=e("2877"),d=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=d.exports},"913d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/common/button/fixedBgBtn").then(e.bind(null,"18f2"))},o=function(){return e.e("components/common/button/btsBtn").then(e.bind(null,"710b"))},s=function(){return e.e("components/common/button/publishBtn").then(e.bind(null,"c1c9"))},a=function(){return e.e("components/common/RHX/bottom/publishBtn/left").then(e.bind(null,"841a"))},d=function(){return e.e("components/common/RHX/bottom/publishBtn/right").then(e.bind(null,"468f"))},u=function(){return e.e("components/common/button/savePreviewBtn").then(e.bind(null,"c46d"))},l=function(){return e.e("components/common/RHX/bottom/businessStore/businessStore").then(e.bind(null,"7971"))},h=function(){return e.e("components/common/RHX/bottom/businessTel/businessTel").then(e.bind(null,"55b8"))},r=function(){return e.e("components/common/RHX/bottom/bottomBtnAdd/bottomBtnAdd").then(e.bind(null,"e20b"))},m={components:{fixedBgBtn:i,btsBtn:o,publishBtn:s,publishBtnLeft:a,publishBtnRight:d,savePreviewBtn:u,businessStore:l,businessTel:h,bottomBtnAdd:r},props:["disabled","idTemp","forcePreview","bbottom","routeParam","defaultAddImg","businessTemList","moduleDateList","moduleTempList"],data:function(){return{webView:{show:!1,url:""},moduleDateLists:this.moduleDateList,maskShow:!1,isPubishShow:!1,storeShow:!1,telShow:!1,addBtnShow:!1,ficon:this.Static+"my/ficon.png",fticon:this.Static+"my/fticon.png",ftticon:this.Static+"publish/purchase/store.png",loved:this.Static+"publish/purchase/stored.png",love:this.Static+"publish/purchase/store.png",addBtnList:{addBtnSHow:!0,activeAdd:-1,btnLeft:{add:0,leftBtnShow:!0,delShow:!1,type:null,name:"",url:"",custId:null},btnRight:{add:1,rightBtnShow:!0,delShow:!1,type:null,name:"",url:"",custId:null},disabledLater:null}}},watch:{moduleDateList:{handler:function(t,n){console.log("----------------statusTemp--------------"),this.moduleDateLists=t,console.log(this.moduleDateLists,"----------this.moduleDateLists-----------");var e=this.moduleDateLists.content.context.tempCon.userActionBtn;e&&(this.addBtnList.btnLeft.type=e.middleBtn.btnType,this.addBtnList.btnLeft.name=e.middleBtn.btnName,this.addBtnList.btnLeft.url=e.middleBtn.btnLink,this.addBtnList.btnLeft.custId=e.middleBtn.custId,this.addBtnList.btnRight.type=e.rightBtn.btnType,this.addBtnList.btnRight.name=e.rightBtn.btnName,this.addBtnList.btnRight.url=e.rightBtn.btnLink,this.addBtnList.btnRight.custId=e.rightBtn.custId),console.log(this.addBtnList,"------------this.addBtnList------------"),!0===this.forcePreview&&this.judgeBtnShowType(!0),"1"===t.content.isFollow?this.ftticon=this.loved:this.ftticon=this.love},deep:!0},disabled:{handler:function(t,n){console.log("----------------statusTemp--------------"),this.disabledLater=n,this.judgeBtnShowType(n)},deep:!0}},created:function(){if(console.log(this.idTemp,"----------第一城按钮idTemp-------------"),console.log(this.moduleDateLists,"-------------this.moduleDateLists.---------------"),this.moduleDateLists){var t=this.moduleDateLists.content.context.tempCon.userActionBtn;this.addBtnList.btnLeft.type=t.middleBtn.btnType,this.addBtnList.btnLeft.name=t.middleBtn.btnName,this.addBtnList.btnLeft.url=t.middleBtn.btnLink,this.addBtnList.btnLeft.custId=t.middleBtn.custId,this.addBtnList.btnRight.type=t.rightBtn.btnType,this.addBtnList.btnRight.name=t.rightBtn.btnName,this.addBtnList.btnRight.url=t.rightBtn.btnLink,this.addBtnList.btnRight.custId=t.rightBtn.custId}},methods:{tapReferBusiness:function(t){console.log(t,"是否要更新数据商家"),this.$emit("tap-RUpDataBusiness",t)},btnGoToDetile:function(n){if(console.log(n,"按钮里的信息"),2===this.routeParam.sourceTemp||3===this.routeParam.sourceTemp){var e={userId:this.routeParam.lookUserId,id:this.routeParam.instrucId,type:6};this.platformAccount(this.routeParam.isFlow,6,e,this.routeParam)}1===n.type?(console.log("定制"),t.navigateTo({url:n.url})):0===n.type&&(console.log("链接"),t.navigateTo({url:"/modules/createBusiness/webView/webView?url="+n.url}))},tapStorePreview:function(){console.log(this.businessTemList,"商机信息"),t.navigateTo({url:"/modules/myCompany/mybusiness/my-business?id="+this.routeParam.creatorId})},tapContactPreview:function(){if(console.log(this.businessTemList,"电话"),2===this.routeParam.sourceTemp||3===this.routeParam.sourceTemp){var n={userId:this.routeParam.lookUserId,id:this.routeParam.instrucId,type:8};this.platformAccount(this.routeParam.isFlow,8,n,this.routeParam).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}t.makePhoneCall({phoneNumber:this.businessTemList.contactTelphone})},tapCollectPreview:function(){var t=this;console.log(this.businessTemList,"收藏");var n={userId:this.routeParam.lookUserId,modelId:this.routeParam.instrucId,type:0};this.focusStore(n).then(function(n){console.log(n),!0===n.success?t.ftticon=t.loved:t.ftticon=t.love}).catch(function(t){console.log(t)})},judgeBtnShowType:function(t){if(console.log(t,"根据编辑和预览状态判断上层按钮展示形式"),!0===t){var n=this.addBtnList.btnLeft.name,e=this.addBtnList.btnRight.name;""===n&&""===e?(this.addBtnList.addBtnSHow=!1,this.addBtnList.btnLeft.leftBtnShow=!1,this.addBtnList.btnRight.rightBtnShow=!1):""!==n&&""===e?(this.addBtnList.addBtnSHow=!0,this.addBtnList.btnLeft.leftBtnShow=!0,this.addBtnList.btnRight.rightBtnShow=!1):""===n&&""!==e?(this.addBtnList.addBtnSHow=!0,this.addBtnList.btnLeft.leftBtnShow=!1,this.addBtnList.btnRight.rightBtnShow=!0):""!==n&&""!==e&&(this.addBtnList.addBtnSHow=!0,this.addBtnList.btnLeft.leftBtnShow=!0,this.addBtnList.btnRight.rightBtnShow=!0)}},tapStore:function(){console.log("点击商机按钮"),this.storeShow=!0,this.maskShow=!1,this.addBtnShow=!1,this.addBtnList.activeAdd=-1,this.$emit("tap-BottomNum",!1),this.$emit("tap-BottomBtnOne",this.addBtnList)},tapBusinessStore:function(t){console.log(t,"用户触发商家信息里的内容"),this.storeShow=!1,this.$emit("tap-BottomNum",t),this.$emit("tap-BottomBtnOne",this.addBtnList)},contact:function(){console.log("点击联系按钮"),this.telShow=!0,this.maskShow=!1,this.addBtnShow=!1,this.addBtnList.activeAdd=-1,this.$emit("tap-BottomNum",!1),this.$emit("tap-BottomBtnOne",this.addBtnList)},tapBusinessTel:function(t){console.log(t,"用户触发tel里的内容"),this.telShow=!1,this.$emit("tap-BottomNum",t),this.$emit("tap-BottomBtnOne",this.addBtnList)},cancel:function(){console.log("用户触发点击遮罩层"),this.$emit("tap-BottomNum",!0),this.hiden=!1,this.phone=""},confirm:function(){console.log("用户触发点击确定按钮"),this.$emit("tap-BottomNum",!0),this.$emit("bottomPhone",this.phone),this.hiden=!1,this.phone=""},tapEditAddLeftBtn:function(t){console.log(t,"用户触发左边按钮---编辑状态"),this.addBtnList.activeAdd=t,this.maskShow=!0,this.addBtnShow=!0,this.$emit("tap-BottomNum",!1),this.$emit("tap-BottomBtnOne",this.addBtnList)},tapDeleteLeftBtn:function(t){console.log(t,"用户触发左侧按钮----删除状态"),this.addBtnList.activeAdd=-1;var n={add:0,leftBtnShow:!0,delShow:!1,type:null,name:"",url:"",custId:null};this.addBtnList.btnLeft=n,this.$emit("tap-BottomBtnOne",this.addBtnList)},tapEditAddRightBtn:function(t){console.log(t,"用户触发右边按钮---编辑状态"),this.addBtnList.activeAdd=t,this.maskShow=!0,this.addBtnShow=!0,this.$emit("tap-BottomNum",!1),this.$emit("tap-BottomBtnOne",this.addBtnList)},tapDeleteRightBtn:function(t){console.log(t,"用户触发右侧按钮----删除状态"),this.addBtnList.activeAdd=-1;var n={add:1,rightBtnShow:!0,delShow:!1,type:null,name:"",url:"",custId:null};this.addBtnList.btnRight=n,this.$emit("tap-BottomBtnOne",this.addBtnList)},tapBusinessBtnAdd:function(t){console.log(t,"触发添加按钮里内容"),this.maskShow=!1,this.addBtnShow=!1,this.$emit("tap-BottomNum",t)},tapAddCancelData:function(){console.log("用户点击取消按钮------还原数据"),this.addBtnList=this.addBtnList,this.addBtnList.activeAdd=-1,this.$emit("tap-BottomBtnOne",this.addBtnList)},tapUpDataBtnAdd:function(t){console.log(t,"更新添加按钮的数据"),this.addBtnList=t,this.addBtnList.activeAdd=-1,this.$emit("tap-BottomBtnOne",this.addBtnList)},clickMadeBtn:function(){var n=this;console.log("立即定制"),console.log(this.moduleDateLists,"基数据");var e=this.moduleDateList.content;if(t.getStorageSync("landRegist")){if(t.getStorageSync("landRegist")){var i=JSON.parse(t.getStorageSync("landRegist"));if(console.log(i.user.id),i.user.id===Number(e.userId))return void t.showToast({title:"本人创建，不可下单!",icon:"none",duration:1e3});console.log(this.routeParam,"链接参数");var o=this.routeParam.isFlow,s=this.routeParam.orderType,a=e.context.tempCon.modules,d=e.context.tempCon.custModules;console.log(this.madeParams,"定制传参数"),this.madeParams.instrucId=e.instrucId,this.madeParams.instrucId=e.instrucId,this.madeParams.userId=i.user.id,this.madeParams.orderType=s,this.madeParams.bannerImg=e.bannerImg,this.madeParams.instrucIntro=e.instrucIntro,this.madeParams.instrucTitle=e.instrucTitle,this.madeParams.compLogo=e.userRetVO.compLogo,this.madeParams.companyName=e.userRetVO.companyName,d.map(function(t,e){if("INPUT_TABLE_B"===t.type){var i=0;t.dataList.map(function(t,e){console.log("开始计算总数"),i+=t.count,console.log(i,"总数量"),console.log(i,"总数量"),n.madeParams.orderSpCount=i})}"INPUT_TEXT_A"===t.type&&(n.madeParams.orderContent=t.content)}),a.map(function(t,e){if(console.log(t.type,"------------类型------------"),"TEXT_A"===t.type&&(console.log("地址"),n.madeParams.expressAddr=t.dataList[0].cityStr+t.dataList[0].value),"MONEY_A"===t.type){var i=n.madeParams.orderSpCount;console.log(i,"总数判断");var o=[],s=t.dataList;for(var a in s){var d={key:"",valueMin:0,valueMax:0};if(s.length>1){if(!1!==s[a].errorStr){console.log("执行特殊情况"),o[a-1].valueMin=s[a-1].minCount,o[a-1].valueMax=99999999,o.push(d);break}""===s[a].money||0===s[a].money?d.key=0:d.key=s[a].money,d.valueMin=s[a].minCount,d.valueMax=s[a].maxCount,Number(a)===Number(s.length-1)&&(d.valueMin=s[a].minCount,d.valueMax=99999999),o.push(d)}else if(1===s.length){if(!1!==s[a].errorStr)break;""===s[a].money||0===s[a].money?d.key=0:d.key=s[a].money,d.valueMin=s[a].minCount,d.valueMax=99999999,o.push(d)}}console.log(o,"重置价格明细数据"),o.map(function(t,e){console.log(i,"计算单价、总价"),i>=t.valueMin&&i<=t.valueMax&&(n.madeParams.orderDjMoney=t.key,n.madeParams.orderSpMoney=i*t.key)}),n.madeParams.orderUnit=t.unit}}),this.madeParams.context.custModules=d,0===Number(o)?this.madeParams.isFlow=0:this.madeParams.isFlow=1,console.log(this.madeParams,"最终数据"),t.setStorageSync("madeParams",JSON.stringify(this.urlCrypto(this.madeParams,0))),t.navigateTo({url:"/modules/createBusiness/templateFinish/templateFinishMade"})}}else this.landRegistra()}}};n.default=m}).call(this,e("543d")["default"])},c92b:function(t,n,e){},cc2d:function(t,n,e){"use strict";var i=e("c92b"),o=e.n(i);o.a},cfb9:function(t,n,e){"use strict";e.r(n);var i=e("913d"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/bottom/bottomBtnOne/bottomBtnOne-create-component',
    {
        'components/common/RHX/bottom/bottomBtnOne/bottomBtnOne-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("26f8"))
        })
    },
    [['components/common/RHX/bottom/bottomBtnOne/bottomBtnOne-create-component']]
]);                
