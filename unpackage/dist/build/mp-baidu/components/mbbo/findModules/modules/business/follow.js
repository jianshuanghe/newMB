(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mbbo/findModules/modules/business/follow"],{"3b77":function(e,t,o){"use strict";o.r(t);var i=o("9a38"),a=o.n(i);for(var n in i)"default"!==n&&function(e){o.d(t,e,function(){return i[e]})}(n);t["default"]=a.a},"93db":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=(e._self._c,e.__map(e.arr,function(t,o){var i=e._f("ellipsis")(t.title),a=e._f("ellipsis")(t.title),n=e._f("ellipsiss")(t.slogan);return{$orig:e.__get_orig(t),f0:i,f1:a,f2:n}}));e.$mp.data=Object.assign({},{$root:{l0:o}})},a=[];o.d(t,"a",function(){return i}),o.d(t,"b",function(){return a})},"9a38":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=y(o("eb60")),a=y(o("8e02")),n=y(o("62ae")),s=y(o("aecc")),r=y(o("eba0")),l=y(o("9252")),d=y(o("757c")),u=y(o("0f9d")),c=y(o("c07d")),g=y(o("1f4a")),f=y(o("2dcf")),m=y(o("5b40")),h=y(o("a126")),S=y(o("297a")),p=y(o("cfa6"));function y(e){return e&&e.__esModule?e:{default:e}}var v={data:function(){return{hea:h.default,zan:i.default,look:a.default,phone:n.default,liu:s.default,shou:r.default,fen:l.default,zanss:d.default,looks:u.default,phones:c.default,lius:g.default,shous:f.default,fens:m.default,arr:[],time:S.default,locat:p.default,floow:"",floowdata:"",likes:"0",likenum:"",shouc:"0",shoucnum:""}},components:{},props:{msgDatas:{type:Object}},computed:{i18n:function(){return this.$t("listModules")}},filters:{ellipsis:function(e){return e?e.length>11?e.slice(0,11)+"...":e:""},ellipsiss:function(e){return e?e.length>15?e.slice(0,15)+"...":e:""}},created:function(){},mounted:function(){var e=this;this.arr.push(this.msgDatas),this.arr.map(function(t,o){0==t.isUserFollow?(e.floow="关注",e.floowdata=0):(e.floow="已关注",e.floowdata=1),0==t.isLike?(e.likes=0,e.likenum=t.likeCount):(e.likes=1,e.likenum=t.likeCount),0==t.isFollow?(e.shouc=0,e.shoucnum=t.followCount):(e.shouc=1,e.shoucnum=t.followCount)})},methods:{guanzhu:function(t){var o=this;if(0==this.floowdata)if(e.getStorageSync("landRegist")){var i=JSON.parse(e.getStorageSync("landRegist"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/follow/user?userId="+i.user.id+"&modelId="+t.userId+"&type=4",method:"GET",header:{Authorization:"Bearer "+i.token},success:function(t){"200"===t.data.ret?(e.hideLoading(),o.floow="已关注",o.floowdata=1):"202"===t.data.ret&&(e.removeStorageSync("landRegist"),e.removeStorageSync("clickItems"),o.$store.commit("setHome",1),o.$store.commit("setLandRegist",0),e.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),e.getStorageSync("landRegist")||o.landRegistra())},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}else e.getStorageSync("landRegist")||this.landRegistra();else if(1==this.floowdata)if(e.getStorageSync("landRegist")){var a=JSON.parse(e.getStorageSync("landRegist"));e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/follow/cancelUser?userId="+a.user.id+"&modelId="+t.userId+"&type=4",method:"GET",header:{Authorization:"Bearer "+a.token},success:function(t){"200"===t.data.ret?(e.hideLoading(),o.floow="关注",o.floowdata=0):"202"===t.data.ret&&(e.removeStorageSync("landRegist"),e.removeStorageSync("clickItems"),o.$store.commit("setHome",1),o.$store.commit("setLandRegist",0),e.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),e.getStorageSync("landRegist")||o.landRegistra())},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}else e.getStorageSync("landRegist")||this.landRegistra()},tiaozhuan:function(t){var o=t.type,i=t.id,a=null;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));a=n.user.id}else a=e.getStorageSync("UUID");if("invest"==o)e.navigateTo({url:"/modules/find/findlist/find-capital?id="+i});else if("compService"==o)e.navigateTo({url:"/modules/find/findlist/find-cloud?id="+i});else if("inst"==o||"news"==o){var s={isFlow:0,tempType:0,orderType:0,sourceTemp:2,aiListTemp:0,id:t.tempId,isMenu:t.isMenu,instrucId:t.id,lookUserId:a,creatorId:t.userId,instrucState:t.instrucState};e.navigateTo({url:"/modules/createBusiness/templatePro/templatePro?urlParams="+this.urlCrypto(s,0)})}else if("purc"==o){var r={isFlow:0,tempType:1,orderType:0,sourceTemp:2,aiListTemp:0,purcId:t.id,lookUserId:a,creatorId:t.userId,purcState:t.purcState};e.navigateTo({url:"/modules/publishPurchase/publishPurchase?urlParams="+this.urlCrypto(r,0)})}},shoucang:function(t,o){var i=this;if(e.getStorageSync("landRegist")){var a=JSON.parse(e.getStorageSync("landRegist"));if(e.showLoading({title:"加载中"}),"inst"==o)var n="0";else if("purc"==o)n="1";else if("news"==o)n="2";e.request({url:this.api2+"/rest-rp/follow/user?userId="+a.user.id+"&modelId="+t+"&type="+n,method:"GET",header:{Authorization:"Bearer "+a.token},success:function(t){"200"===t.data.ret?(e.hideLoading(),i.shoucnum++,i.shouc=1):"202"===t.data.ret&&(e.removeStorageSync("landRegist"),e.removeStorageSync("clickItems"),i.$store.commit("setHome",1),i.$store.commit("setLandRegist",0),e.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),e.getStorageSync("landRegist")||i.landRegistra())},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}else e.getStorageSync("landRegist")||this.landRegistra()},shoucangs:function(t,o){var i=this;if(e.getStorageSync("landRegist")){var a=JSON.parse(e.getStorageSync("landRegist"));if(e.showLoading({title:"加载中"}),"inst"==o)var n="0";else if("purc"==o)n="1";else if("news"==o)n="2";e.request({url:this.api2+"/rest-rp/follow/cancelUser?userId="+a.user.id+"&modelId="+t+"&type="+n,method:"GET",header:{Authorization:"Bearer "+a.token},success:function(t){"200"===t.data.ret?(e.hideLoading(),i.shouc=0):"202"===t.data.ret&&(e.removeStorageSync("landRegist"),e.removeStorageSync("clickItems"),i.$store.commit("setHome",1),i.$store.commit("setLandRegist",0),e.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),e.getStorageSync("landRegist")||i.landRegistra())},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}else e.getStorageSync("landRegist")||this.landRegistra()},playphone:function(t){e.makePhoneCall({phoneNumber:t})},dianzan:function(t,o,i){var a=this;if(e.getStorageSync("landRegist")){var n=JSON.parse(e.getStorageSync("landRegist"));if(e.showLoading({title:"加载中"}),"inst"==o)var s="0";else if("purc"==o)s="1";else if("news"==o)s="2";e.request({url:this.api2+"/rest-rp/like/submit?userId="+n.user.id+"&modelId="+t+"&type="+s,method:"GET",success:function(t){"200"===t.data.ret?(e.hideLoading(),a.likenum++,a.likes=1):"202"===t.data.ret?(e.removeStorageSync("landRegist"),e.removeStorageSync("clickItems"),a.$store.commit("setHome",1),a.$store.commit("setLandRegist",0),e.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),e.getStorageSync("landRegist")||a.landRegistra()):(e.hideLoading(),e.showToast({title:t.data.msg,icon:"none",duration:1e3}))},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}else if(e.getStorageSync("UUID")){var r=e.getStorageSync("UUID");if("inst"==o)s="0";else if("purc"==o)s="1";else if("news"==o)s="2";e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/like/submit?userId="+r+"&modelId="+t+"&type="+s,method:"GET",success:function(t){"200"===t.data.ret?(e.hideLoading(),e.showToast({title:"点赞成功！",icon:"none",duration:1e3}),a.likenum++,a.likes=1):"202"===t.data.ret?(e.removeStorageSync("landRegist"),e.removeStorageSync("clickItems"),a.$store.commit("setHome",1),a.$store.commit("setLandRegist",0),e.showToast({title:"登录已过期，请重新登录",icon:"none",duration:1e3}),e.getStorageSync("landRegist")||a.landRegistra()):(e.hideLoading(),e.showToast({title:t.data.msg,icon:"none",duration:1e3}))},fail:function(t){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3})}})}},gotocomp:function(e){},liuyan:function(e,t){var o={id:e,type:t,Leaving:"1"};this.$store.commit("setmessage",o)}}};t.default=v}).call(this,o("5486")["default"])},b3d5:function(e,t,o){"use strict";var i=o("f5bb"),a=o.n(i);a.a},f056:function(e,t,o){"use strict";o.r(t);var i=o("93db"),a=o("3b77");for(var n in a)"default"!==n&&function(e){o.d(t,e,function(){return a[e]})}(n);o("b3d5");var s=o("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},f5bb:function(e,t,o){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mbbo/findModules/modules/business/follow-create-component',
    {
        'components/mbbo/findModules/modules/business/follow-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("f056"))
        })
    },
    [['components/mbbo/findModules/modules/business/follow-create-component']]
]);
