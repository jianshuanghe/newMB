(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/InstructionsPrice/Order/Order-list/Order-details/Order-detailsh"],{"0cc5":function(e,t,r){"use strict";(function(e){r("ad90"),r("921b");i(r("66fd"));var t=i(r("ab3d"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},"42db":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=(e._self._c,e._f("formatDate")(e.list.createTime)),i=e._f("formatDate")(e.list.confirmTime),o=e._f("formatDate")(e.list.sendTime),s=e._f("formatDate")(e.list.finishTime),n=e._f("numFilter")(e._f("numFilter")(e.list.orderYfMoney+e.list.orderSpMoney));e.$mp.data=Object.assign({},{$root:{f0:r,f1:i,f2:o,f3:s,f4:n}})},o=[];r.d(t,"a",function(){return i}),r.d(t,"b",function(){return o})},"5a43":function(e,t,r){"use strict";r.r(t);var i=r("be86"),o=r.n(i);for(var s in i)"default"!==s&&function(e){r.d(t,e,function(){return i[e]})}(s);t["default"]=o.a},ab3d:function(e,t,r){"use strict";r.r(t);var i=r("42db"),o=r("5a43");for(var s in o)"default"!==s&&function(e){r.d(t,e,function(){return o[e]})}(s);r("bb0d");var n=r("2877"),d=Object(n["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=d.exports},bb0d:function(e,t,r){"use strict";var i=r("f95b"),o=r.n(i);o.a},be86:function(e,t,r){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=r("2f62");function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),i.forEach(function(t){d(e,t,r[t])})}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=function(){return Promise.all([r.e("common/vendor"),r.e("components/mbbo/quickBtn/quickBtn")]).then(r.bind(null,"2de2"))},l=function(){return Promise.all([r.e("common/vendor"),r.e("components/mbbo/navigation/navigation")]).then(r.bind(null,"5a67"))},u=function(){return r.e("components/common/imageUpload/imageUploadOne").then(r.bind(null,"2ec6"))},c={data:function(){return{list:[],num:0,biao:this.Static+"my/biao.png",ding:this.Static+"my/ding.png",up:this.Static+"my/up-arrow.png",phone:this.Static+"my/phone.png",id:"",thid:[],guanbi:"",guan:0,gong:[],shu:[],lian:!1,imageData:"",logo:"",logos:"",serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload",logistics:!1,danhao:"",gongsi:"",alltime:!1,moneyzong:null,moneyyun:null}},components:{quickBtn:a,navigation:l,imageUploadOne:u},computed:n({i18n:function(){return this.$t("Howtoshow")}},(0,s.mapGetters)(["GET_HOME","QUICKNAVCO"])),filters:{formatDate:function(e){var t=new Date(e),r=t.getFullYear(),i=t.getMonth()+1;i=i<10?"0"+i:i;var o=t.getDate();o=o<10?"0"+o:o;var s=t.getHours();s=s<10?"0"+s:s;var n=t.getMinutes();n=n<10?"0"+n:n;var d=t.getSeconds();return d=d<10?"0"+d:d,r+"-"+i+"-"+o+" "+s+":"+n+":"+d},numFilter:function(e){var t="";if(e){var r=parseFloat(e).toFixed(3);t=r.substring(0,r.length-1)}else t="--";return t}},onLoad:function(t){this.id=t.id,console.log(e(this.id," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:243")),i.setNavigationBarTitle({title:this.i18n.product7}),this.details()},created:function(){},methods:(o={ming:function(){this.lian=!this.lian},upall:function(){this.alltime=!this.alltime},gotoAgain:function(t){console.log(e(t," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:260"));var r=null;if(i.getStorageSync("landRegist")){var o=JSON.parse(i.getStorageSync("landRegist"));console.log(e(o.user.id," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:264")),r=o.user.id}else r=i.getStorageSync("UUID");var s={isFlow:0,orderType:0,sourceTemp:4,aiListTemp:0,id:this.id,instrucCustType:t.instCustType,isMenu:t.isMenu,instrucId:t.instrucId,lookUserId:r,creatorId:t.instUserId,instrucState:t.instState};console.log(e(s," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:282")),i.navigateTo({url:"/modules/createBusiness/templatePro/templatePro?urlParams="+this.urlCrypto(s,0)})},deleadd:function(){var t=this;if(i.getStorageSync("landRegist")){var r=JSON.parse(i.getStorageSync("landRegist"));console.log(e(r.user.id," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:290")),i.showLoading({title:"加载中"}),i.request({url:this.api2+"/rest-rp/order/closeOrder?orderId="+this.id,method:"GET",header:{Authorization:"Bearer "+r.token},success:function(r){i.hideLoading(),console.log(e(r.data," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:304")),t.details(),t.Supply(),t.Purchase(),i.navigateBack({})},fail:function(t){i.hideLoading(),i.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:319"))}})}},remind:function(){var t=this;if(i.getStorageSync("landRegist")){var r=JSON.parse(i.getStorageSync("landRegist"));console.log(e(r.user.id," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:328")),i.showLoading({title:"加载中"}),i.request({url:this.api2+"/rest-rp/order/remind?orderId="+this.id,method:"GET",header:{Authorization:"Bearer "+r.token},success:function(r){i.hideLoading(),console.log(e(r.data," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:342")),t.details(),t.Supply(),t.Purchase(),200==r.data.ret&&i.showToast({title:"已提醒买家发货",icon:"none",duration:1e3})},fail:function(t){i.hideLoading(),i.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:363"))}})}},fahuo:function(){this.logistics=!this.logistics},deleteImage:function(t){console.log(e(t,"删除图片"," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:372")),this.logo=""},addImage:function(t){console.log(e(t,"添加图片"," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:376")),t.allImages&&(this.logo=t.allImages[0].imgName,this.logos=t.allImages[0].imgUrl,console.log(e(this.logo," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:380")))},gotoqueren:function(){var t=this;if(i.getStorageSync("landRegist")){var r=JSON.parse(i.getStorageSync("landRegist"));console.log(e(r.user.id," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:387")),i.showLoading({title:"加载中"}),i.request({url:this.api2+"/rest-rp/order/remind?orderId="+this.id,method:"GET",header:{Authorization:"Bearer "+r.token},success:function(r){i.hideLoading(),console.log(e(r.data," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:401")),t.details(),t.Supply(),t.Purchase(),200==r.data.ret&&i.showToast({title:"已提醒买家发货",icon:"none",duration:1e3})},fail:function(t){i.hideLoading(),i.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:422"))}})}},phones:function(){this.lian=!this.lian},ping:function(){this.lian=!this.lian,i.makePhoneCall({phoneNumber:"4006182288"})},playphone:function(e){i.makePhoneCall({phoneNumber:e})},jia:function(e){this.lian=!this.lian,i.makePhoneCall({phoneNumber:e})},shou:function(){var t=this;if(i.getStorageSync("landRegist")){var r=JSON.parse(i.getStorageSync("landRegist"));console.log(e(r.user.id," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:453"));var o={state:"3",orderUserType:"0",orderUser:String(r.user.id)};i.showLoading({title:"加载中"}),i.request({url:this.api2+"/rest-rp/order/updateOrderState?orderId="+this.id,data:o,method:"POST",header:{Authorization:"Bearer "+r.token},success:function(r){i.hideLoading(),console.log(e(r.data," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:472")),t.details(),t.Supply(),t.Purchase()},fail:function(t){i.hideLoading(),i.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:486"))}})}},guanbis:function(){this.guan=1},qu:function(){this.guan=0},ti:function(t){var r=this;if(i.getStorageSync("landRegist")){var o=JSON.parse(i.getStorageSync("landRegist"));console.log(e(o.user.id," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:500"));var s={state:"4",orderUserType:"0",content:this.guanbi,orderUser:String(o.user.id)};i.showLoading({title:"加载中"}),i.request({url:this.api2+"/rest-rp/order/updateOrderState?orderId="+this.id,data:s,method:"POST",header:{Authorization:"Bearer "+o.token},success:function(t){i.hideLoading(),console.log(e(t.data," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:521")),r.guan=0,r.details(),r.Supply(),r.Purchase()},fail:function(t){i.hideLoading(),i.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:536"))}})}},Supply:function(){var t=this;if(i.getStorageSync("landRegist")){var r=JSON.parse(i.getStorageSync("landRegist"));console.log(e(r.user.id," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:544")),i.showLoading({title:"加载中"}),i.request({url:this.api2+"/rest-rp/order/selectMyToBOrder?userId="+r.user.id+"&page=1",method:"GET",header:{Authorization:"Bearer "+r.token},success:function(r){i.hideLoading(),console.log(e(r.data," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:558")),t.gong=r.data.content.list,t.$store.commit("setSupply",t.gong)},fail:function(t){i.hideLoading(),i.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:576"))}})}},Purchase:function(){var t=this;if(i.getStorageSync("landRegist")){var r=JSON.parse(i.getStorageSync("landRegist"));console.log(e(r.user.id," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:584")),i.showLoading({title:"加载中"}),i.request({url:this.api2+"/rest-rp/order/selectMyToCOrder?userId="+r.user.id+"&page=1",method:"GET",header:{Authorization:"Bearer "+r.token},success:function(r){i.hideLoading(),console.log(e(r.data," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:598")),t.shu=r.data.content.list,t.$store.commit("setPurchase",t.shu)},fail:function(t){i.hideLoading(),i.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:610"))}})}}},d(o,"playphone",function(t){console.log(e(t,123," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:616")),i.makePhoneCall({phoneNumber:t})}),d(o,"details",function(){var t=this;if(console.log(e(this.id," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:622")),i.getStorageSync("landRegist")){var r=JSON.parse(i.getStorageSync("landRegist"));console.log(e(r.user.id," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:625")),i.showLoading({title:"加载中"}),i.request({url:this.api2+"/rest-rp/order/selectOrderInfo?orderId="+this.id,method:"GET",header:{Authorization:"Bearer "+r.token},success:function(r){i.hideLoading(),console.log(e(r.data," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:639")),t.list=r.data.content,t.moneyzong=parseInt(t.list.orderDjMoneyStr),t.moneyyun=parseInt(t.list.orderYfMoneyStr),console.log(e(t.moneyzong+t.moneyyun," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:644")),t.thid=r.data.content.context.custModules,console.log(e(t.thid," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:646"))},fail:function(t){i.hideLoading(),i.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e(t,"网络繁忙，请稍后"," at modules\\InstructionsPrice\\Order\\Order-list\\Order-details\\Order-detailsh.vue:657"))}})}}),o)};t.default=c}).call(this,r("0de9")["default"],r("6e42")["default"])},f95b:function(e,t,r){}},[["0cc5","common/runtime","common/vendor"]]]);