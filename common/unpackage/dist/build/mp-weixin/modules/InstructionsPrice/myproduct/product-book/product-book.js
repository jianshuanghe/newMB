(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/InstructionsPrice/myproduct/product-book/product-book"],{2429:function(t,i,e){"use strict";e.r(i);var n=e("d84c"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=o.a},5201:function(t,i,e){"use strict";var n=e("7e67"),o=e.n(n);o.a},7369:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=(t._self._c,t._f("ellipsis")(t.GET_MY.detailed.instrucTitle));t.$mp.data=Object.assign({},{$root:{f0:e}})},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},"7e67":function(t,i,e){},ce0e:function(t,i,e){"use strict";e.r(i);var n=e("7369"),o=e("2429");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);e("5201");var s=e("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);i["default"]=r.exports},d84c:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("2f62");function o(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{},n=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(i){a(t,i,e[i])})}return t}function a(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var s=function(){return e.e("modules/InstructionsPrice/myproduct/product-book/QRcodeandinquiry/QRcode").then(e.bind(null,"43d3"))},r=function(){return Promise.all([e.e("common/vendor"),e.e("components/mbbo/quickBtn/quickBtn")]).then(e.bind(null,"270e"))},c=function(){return e.e("components/mbbo/navigation/navigation").then(e.bind(null,"9063"))},u=function(){return e.e("components/common/RHX/rQrCode/rQrCode").then(e.bind(null,"af8d"))},d={props:["data","dataList"],data:function(){return{array:[{mode:"center",text:"center：不缩放图片，只显示图片的中间区域"}],zan:this.Static+"my/zan.png",look:this.Static+"my/look.png",phone:this.Static+"my/phone.png",liu:this.Static+"my/liu.png",shou:this.Static+"my/shou.png",fen:this.Static+"my/fen.png",lists:[],yi:this.Static+"my/yi.png",add:this.Static+"my/add.png",shag:this.Static+"my/shag.png",xia:this.Static+"my/xia.png",wei:this.Static+"my/wei.png",peng:this.Static+"my/peng.png",bian:this.Static+"my/bianji.png",bian2:this.Static+"my/72209.png",wan:this.Static+"my/wanshang.png",wan2:this.Static+"my/xiajia.png",xias:this.Static+"my/xiajia.png",tui:this.Static+"my/tuiguang.png",tui2:this.Static+"my/tuiguang2.png",feng:this.Static+"my/fengxiang.png",feng2:this.Static+"my/fengxiang2.png",shan:this.Static+"my/shanchu.png",shan2:this.Static+"my/44.png",Mask:0,id:"",idd:""}},components:{quickBtn:r,navigation:c,QRcode:s,rQrCode:u},onLoad:function(i){t.setNavigationBarTitle({title:this.i18n.product2})},created:function(){},mounted:function(){console.log(this.GET_MY.detailed,"11111111111111111111111111111",this.data)},filters:{ellipsis:function(t){return t?t.length>28?t.slice(0,28)+"...":t:""}},methods:{tuig:function(){console.log("触发投放商机按钮"),t.navigateTo({url:"/modules/aLittle/putInBusiness/putInBusinessList/putInList/putInList?id="+this.data})},goToTemplatePro:function(i){console.log(this.dataList,"to投放商机");var e=null;if(t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id),e=n.user.id}else e=t.getStorageSync("UUID");var o={isFlow:0,orderType:0,sourceTemp:4,aiListTemp:0,id:this.dataList.tempId,instrucCustType:this.dataList.instrucCustType,isMenu:this.dataList.isMenu,instrucId:this.dataList.instrucId,lookUserId:e,creatorId:this.dataList.userId,instrucState:this.dataList.instrucState,isPut:this.dataList.isPut};t.navigateTo({url:"/modules/createBusiness/templatePro/templatePro?urlParams="+this.urlCrypto(o,0)})},xiajiaadd:function(){var i=this;if(t.getStorageSync("landRegist")){var e=JSON.parse(t.getStorageSync("landRegist"));console.log(e.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc/isPublic/"+this.data+"?instrucState=2",method:"GET",header:{Authorization:"Bearer "+e.token},success:function(e){t.hideLoading(),console.log(e.data),i.book(),i.myproduct(),i.product(),i.Cus(),i.inf()},fail:function(i){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(i,"网络繁忙，请稍后")}})}},fabuadd:function(){console.log(this.dataList);var i=this;t.showModal({title:"提示",content:"您确定要发布该说明书吗？",success:function(e){if(e.confirm){console.log("用户点击确定");var n={context:i.dataList.context,keylist:i.dataList.keys,tempId:i.dataList.tempId,userId:i.dataList.userId,instrucCategory:i.dataList.instrucCategory,instrucIntro:i.dataList.instrucIntro,instrucState:i.dataList.instrucState,instrucTitle:i.dataList.instrucTitle,instrucCategoryStr:i.dataList.instrucCategoryStr},o=[n,0];console.log(o),t.setStorageSync("urlParamsTemp",JSON.stringify(i.urlCrypto(o,0))),t.navigateTo({url:"/modules/createBusiness/templateFinish/templateFinish"})}else e.cancel&&console.log("用户点击取消")}})},deleadd:function(){var i=this;if(t.getStorageSync("landRegist")){var e=JSON.parse(t.getStorageSync("landRegist"));console.log(e.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc/"+this.data,method:"DELETE",header:{Authorization:"Bearer "+e.token},success:function(e){t.hideLoading(),console.log(e.data),i.myproduct(),i.product(),i.Cus(),i.inf(),t.navigateBack({})},fail:function(i){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(i,"网络繁忙，请稍后")}})}},book:function(){var i=this;if(t.getStorageSync("landRegist")){var e=JSON.parse(t.getStorageSync("landRegist"));console.log(e.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc/"+this.data,method:"GET",header:{Authorization:"Bearer "+e.token},success:function(e){t.hideLoading(),console.log(e.data),i.lists=e.data.content,i.$store.commit("setdetailed",i.lists)},fail:function(i){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(i,"网络繁忙，请稍后")}})}},myproduct:function(){var i=this;if(t.getStorageSync("landRegist")){var e=JSON.parse(t.getStorageSync("landRegist"));console.log(e.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc?userId="+e.user.id+"&page=1",method:"GET",header:{Authorization:"Bearer "+e.token},success:function(e){t.hideLoading(),console.log(e.data),i.list=e.data.content.list,i.$store.commit("setproduct",i.list)},fail:function(i){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(i,"网络繁忙，请稍后")}})}},product:function(){var i=this;if(t.getStorageSync("landRegist")){var e=JSON.parse(t.getStorageSync("landRegist"));console.log(e.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc?userId="+e.user.id+"&page=1&instrucCustType=0",method:"GET",header:{Authorization:"Bearer "+e.token},success:function(e){t.hideLoading(),console.log(e.data),i.chan=e.data.content.list,i.$store.commit("setchan",i.chan)},fail:function(i){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(i,"网络繁忙，请稍后")}})}},Cus:function(){var i=this;if(console.log(123),t.getStorageSync("landRegist")){var e=JSON.parse(t.getStorageSync("landRegist"));console.log(e.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc?userId="+e.user.id+"&page=1&instrucCustType=1",method:"GET",header:{Authorization:"Bearer "+e.token},success:function(e){t.hideLoading(),console.log(e.data);var n=[];n=e.data.content.list,i.$store.commit("setding",n)},fail:function(i){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(i,"网络繁忙，请稍后")}})}},inf:function(){var i=this;if(t.getStorageSync("landRegist")){var e=JSON.parse(t.getStorageSync("landRegist"));console.log(e.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc?userId="+e.user.id+"&page=1&instrucCustType=2",method:"GET",header:{Authorization:"Bearer "+e.token},success:function(e){t.hideLoading(),console.log(e.data),i.zi=e.data.content.list,i.$store.commit("setzi",i.zi)},fail:function(i){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(i,"网络繁忙，请稍后")}})}},gotodataReport:function(){console.log("to数据看表"),t.navigateTo({url:"/modules/InstructionsPrice/myproduct/product-book/dataReport/dataReport?id="+this.data})},gotoedit:function(i){console.log("to完善信息"),t.navigateTo({url:"/modules/InstructionsPrice/myproduct/product-book/QRcodeandinquiry/QRcode-list/QRcodelist-edit?id="+this.GET_MY.detailed.instrucId})},child:function(){},fenxiang:function(){console.log("分享说明书"),this.Mask=1},boss:function(){this.Mask=0}},computed:o({i18n:function(){return this.$t("Howtoshow")}},(0,n.mapGetters)(["GET_MY","GET_HOME","QUICKNAVCO"]))};i.default=d}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/InstructionsPrice/myproduct/product-book/product-book-create-component',
    {
        'modules/InstructionsPrice/myproduct/product-book/product-book-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ce0e"))
        })
    },
    [['modules/InstructionsPrice/myproduct/product-book/product-book-create-component']]
]);                
