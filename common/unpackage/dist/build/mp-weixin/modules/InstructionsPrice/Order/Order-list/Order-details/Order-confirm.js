(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/InstructionsPrice/Order/Order-list/Order-details/Order-confirm"],{"04b5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/mbbo/quickBtn/quickBtn")]).then(n.bind(null,"270e"))},c=function(){return n.e("components/mbbo/navigation/navigation").then(n.bind(null,"9063"))},s=function(){return Promise.all([n.e("common/vendor"),n.e("components/common/provinceCity/provinceCity")]).then(n.bind(null,"76ab"))},d={data:function(){return{list:[],thid:[],ding:this.Static+"my/ding.png",id:"",select:this.Static+"my/select.png",selectEd:this.Static+"my/selectEd.png",right:this.Static+"my/right.png",money:"",beizhu:"",arr:[]}},components:{quickBtn:a,navigation:c,provinceCity:s},computed:i({i18n:function(){return this.$t("Howtoshow")}},(0,o.mapGetters)(["GET_HOME","QUICKNAVCO"])),filters:{formatDate:function(t){var e=new Date(t),n=e.getFullYear(),o=e.getMonth()+1;o=o<10?"0"+o:o;var i=e.getDate();i=i<10?"0"+i:i;var r=e.getHours();r=r<10?"0"+r:r;var a=e.getMinutes();a=a<10?"0"+a:a;var c=e.getSeconds();return c=c<10?"0"+c:c,n+"-"+o+"-"+i+" "+r+":"+a+":"+c}},onLoad:function(t){this.id=t.id,this.details(),console.log(this.arr)},created:function(){},methods:{clickCity:function(t){this.arr=t,console.log(this.arr)},add:function(){if(void 0==this.arr.cityText)t.showToast({title:"请选择发货地",icon:"none",duration:1e3});else if(""==this.money)t.showToast({title:"请输入物流费用",icon:"none",duration:1e3});else if(/^[0-9]*$/.test(this.money)){if(t.getStorageSync("landRegist")){var e=JSON.parse(t.getStorageSync("landRegist"));console.log(e.user.id);var n={state:"1",expressPcode:this.arr.pcode,expressCcode:this.arr.ccode,orderYfMoney:this.money,content:this.beizhu,orderUser:String(e.user.id),orderUserType:"0"};t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/order/updateOrderState?orderId="+this.id,data:n,method:"POST",header:{Authorization:"Bearer "+e.token},success:function(e){t.hideLoading(),console.log(e.data),200==e.data.ret&&t.navigateBack({})},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}else t.showToast({title:"运费格式有误",icon:"none",duration:1e3})},details:function(){var e=this;if(console.log(this.id),t.getStorageSync("landRegist")){var n=JSON.parse(t.getStorageSync("landRegist"));console.log(n.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/order/selectOrderInfo?orderId="+this.id,method:"GET",header:{Authorization:"Bearer "+n.token},success:function(n){t.hideLoading(),console.log(n.data),e.list=n.data.content,e.thid=n.data.content.context.custModules,console.log(e.thid)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}}};e.default=d}).call(this,n("543d")["default"])},"0f9f":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"180c":function(t,e,n){"use strict";var o=n("1cd8"),i=n.n(o);i.a},"1cd8":function(t,e,n){},"808d":function(t,e,n){"use strict";n.r(e);var o=n("0f9f"),i=n("f111");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("180c");var a=n("2877"),c=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},f111:function(t,e,n){"use strict";n.r(e);var o=n("04b5"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a}},[["af52","common/runtime","common/vendor"]]]);