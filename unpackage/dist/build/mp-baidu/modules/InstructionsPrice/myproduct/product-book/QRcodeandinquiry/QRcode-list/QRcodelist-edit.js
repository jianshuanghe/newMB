(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/InstructionsPrice/myproduct/product-book/QRcodeandinquiry/QRcode-list/QRcodelist-edit"],{"269c":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("8e02")),o=r(i("6945")),s=r(i("50d4")),a=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){d(t,e,i[e])})}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u=function(){return Promise.all([i.e("common/vendor"),i.e("components/mbbo/quickBtn/quickBtn")]).then(i.bind(null,"ec6c"))},l=function(){return Promise.all([i.e("common/vendor"),i.e("components/mbbo/navigation/navigation")]).then(i.bind(null,"ce22"))},h={data:function(){return{remnane:0,rem:0,desc:"",des:"",look:n.default,hiden:2,num:0,nums:9999999999,edit:"",del:o.default,list:[],id:"",editleiid:"",arr:[],editlei:"请选择",editleis:"",right:s.default,iscategory:!1,arrs:[{name:"机械及行业设备",hiden:!1},{name:"五金、工具",hiden:!1},{name:"照明工业",hiden:!1}]}},components:{quickBtn:u,navigation:l},onLoad:function(e){t.setNavigationBarTitle({title:this.i18n.product3}),this.id=e.id},created:function(){this.edits(),this.Varieties()},methods:{Varieties:function(){var e=this;if(t.getStorageSync("landRegist")){var i=JSON.parse(t.getStorageSync("landRegist"));console.log(i.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc/getTypes",method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){t.hideLoading(),console.log(i.data),e.arrs=i.data.content},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},edits:function(){var e=this;if(t.getStorageSync("landRegist")){var i=JSON.parse(t.getStorageSync("landRegist"));console.log(i.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc/"+this.id,method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){t.hideLoading(),console.log(i.data),e.arr=i.data.content,e.desc=i.data.content.instrucTitle,e.des=i.data.content.instrucIntro,e.list=i.data.content.keys,e.remnane=e.desc.length,e.rem=e.des.length,e.editleis=i.data.content.instrucCategoryStr,e.editlei=i.data.content.instrucCategoryStr,console.log(e.arr)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},hidens:function(t,e){this.nums=e,this.editleis=t.typeName,this.editlei=t.typeName,this.editleiid=t.id,this.iscategory=!this.iscategory},editpin:function(){var t=this;this.iscategory=!0,this.arrs.map(function(e,i){t.editleis===e.typeName&&(t.nums=i)})},quxiao:function(){this.iscategory=!1},dele:function(t){this.list.splice(t,1),console.log(this.list)},descInput:function(){var t=this.desc.length;this.remnane=1+t},descIn:function(){var t=this.des.length;this.rem=1+t},add:function(){this.hiden="1",this.num="1",console.log(this.list)},sub:function(){if(""===this.edit)this.hiden=2;else{if(this.hiden=2,console.log("创建新标签"),this.list.length>14)return this.edit="",t.showToast({title:"最多只能添加15个标签",icon:"none",duration:1e3}),!1;this.list.push(this.edit),this.edit=""}},editbao:function(){var e=this;if(""===this.desc)return t.showToast({title:"请填写名称",icon:"none",duration:1e3}),!1;if(""===this.des)return t.showToast({title:"请填写介绍",icon:"none",duration:1e3}),!1;if(t.getStorageSync("landRegist")){var i=JSON.parse(t.getStorageSync("landRegist"));if(console.log(i.user.id),0==this.list.length)var n={instrucTitle:this.desc,instrucIntro:this.des,instrucCategory:this.editleiid,keyList:[""]};else n={instrucTitle:this.desc,instrucIntro:this.des,instrucCategory:this.editleiid,keyList:this.list};t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc/"+this.id,data:n,method:"POST",header:{Authorization:"Bearer "+i.token},success:function(i){t.hideLoading(),console.log(i.data),e.book(),e.myproduct(),e.product(),e.Cus(),e.inf(),t.navigateBack({})},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},book:function(){var e=this;if(t.getStorageSync("landRegist")){var i=JSON.parse(t.getStorageSync("landRegist"));console.log(i.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc/"+this.id,method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){t.hideLoading(),console.log(i.data),e.lists=i.data.content,e.$store.commit("setdetailed",e.lists)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},myproduct:function(){var e=this;if(t.getStorageSync("landRegist")){var i=JSON.parse(t.getStorageSync("landRegist"));console.log(i.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc?userId="+i.user.id+"&page=1",method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){t.hideLoading(),console.log(i.data),e.list=i.data.content.list,e.$store.commit("setproduct",e.list)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},product:function(){var e=this;if(t.getStorageSync("landRegist")){var i=JSON.parse(t.getStorageSync("landRegist"));console.log(i.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc?userId="+i.user.id+"&page=1&instrucCustType=0",method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){t.hideLoading(),console.log(i.data),e.chan=i.data.content.list,e.$store.commit("setchan",e.chan)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},Cus:function(){var e=this;if(console.log(123),t.getStorageSync("landRegist")){var i=JSON.parse(t.getStorageSync("landRegist"));console.log(i.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc?userId="+i.user.id+"&page=1&instrucCustType=1",method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){t.hideLoading(),console.log(i.data),e.ding=i.data.content.list,e.$store.commit("setding",e.ding)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},inf:function(){var e=this;if(t.getStorageSync("landRegist")){var i=JSON.parse(t.getStorageSync("landRegist"));console.log(i.user.id),t.showLoading({title:"加载中"}),t.request({url:this.api2+"/rest-rp/instruc?userId="+i.user.id+"&page=1&instrucCustType=2",method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){t.hideLoading(),console.log(i.data),e.zi=i.data.content.list,e.$store.commit("setzi",e.zi)},fail:function(e){t.hideLoading(),t.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}},computed:c({i18n:function(){return this.$t("Howtoshow")}},(0,a.mapGetters)(["GET_NEWS","GET_HOME","QUICKNAVCO"]))};e.default=h}).call(this,i("5486")["default"])},"56b1":function(t,e,i){"use strict";i.r(e);var n=i("269c"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},"72b7":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"9ae5":function(t,e,i){},e498:function(t,e,i){"use strict";i.r(e);var n=i("72b7"),o=i("56b1");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("ff1c");var a=i("2877"),r=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},e93a:function(t,e,i){"use strict";(function(t){i("f43d"),i("921b");n(i("66fd"));var e=n(i("e498"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("5486")["createPage"])},ff1c:function(t,e,i){"use strict";var n=i("9ae5"),o=i.n(n);o.a}},[["e93a","common/runtime","common/vendor"]]]);