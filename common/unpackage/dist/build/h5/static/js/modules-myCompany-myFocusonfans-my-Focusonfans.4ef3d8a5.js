(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-myFocusonfans-my-Focusonfans"],{"1f29":function(t,i,e){"use strict";var o=e("2146"),n=e.n(o);n.a},2146:function(t,i,e){var o=e("bd30");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("623496cf",o,!0,{sourceMap:!1,shadowMode:!1})},"2fa8":function(t,i,e){var o=e("9c19");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("50364de0",o,!0,{sourceMap:!1,shadowMode:!1})},"386f":function(t,i,e){var o=e("7195");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("6f0c9119",o,!0,{sourceMap:!1,shadowMode:!1})},"3a64":function(t,i,e){"use strict";e.r(i);var o=e("8a07"),n=e("f321");for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);e("ed97");var s=e("2877"),u=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"727a43e3",null);i["default"]=u.exports},"6c53":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{logo:this.Static+"my/logo.png",list:[],kong:this.Static+"my/kong.png"}},mounted:function(){},onLoad:function(){},created:function(){this.getFocus()},filters:{formatDate:function(t){var i=new Date(t),e=i.getFullYear(),o=i.getMonth()+1;o=o<10?"0"+o:o;var n=i.getDate();n=n<10?"0"+n:n;var a=i.getHours();a=a<10?"0"+a:a;var s=i.getMinutes();s=s<10?"0"+s:s;var u=i.getSeconds();return u=u<10?"0"+u:u,e+"."+o+"."+n}},methods:{guanzhu:function(t){var i=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));console.log(e.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/follow/cancelUser?userId="+e.user.id+"&modelId="+t.userId+"&type=4",method:"GET",header:{Authorization:"Bearer "+e.token},success:function(t){console.log(t.data,"---------------response.data--------------"),"200"===t.data.ret&&(uni.hideLoading(),i.getFocus())},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},quxiao:function(t){var i=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));console.log(e.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/follow/user?userId="+e.user.id+"&modelId="+t.userId+"&type=4",method:"GET",header:{Authorization:"Bearer "+e.token},success:function(t){console.log(t.data,"---------------response.data--------------"),"200"===t.data.ret&&(uni.hideLoading(),i.getFocus())},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},Callphone:function(){},gotocomp:function(t){console.log(t+"to商家详情"),uni.navigateTo({url:"/modules/myCompany/mybusiness/my-business?id="+t})},getFocus:function(){var t=this;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));console.log(i.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/follow/selectMyFansList?page=1&userId="+i.user.id,method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){uni.hideLoading(),console.log(i.data),t.list=i.data.content.list,console.log(t.list)},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}}},computed:{}};i.default=o},7195:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".my-Focus[data-v-727a43e3]{width:100%;min-height:100%}.my-Focus-list[data-v-727a43e3]{width:100%;height:%?266?%;background:#fff;margin-top:%?20?%;padding:.1rem}.my-Focus-list-box[data-v-727a43e3]{width:90%;margin:0 auto;height:%?180?%;border-bottom:%?2?% solid #f5f5f5;padding:%?0.1?%}.my-Focus-list-con[data-v-727a43e3]{width:100%;height:%?100?%;margin-top:6%}.my-Focus-list-img[data-v-727a43e3]{width:%?100?%;height:100%;float:left}.my-Focus-list-img>uni-image[data-v-727a43e3]{width:100%;height:100%;border-radius:%?8?%}.my-Focus-list-name[data-v-727a43e3]{width:82%;height:50%;float:right;margin-top:%?-5?%}.my-Focus-list-name>uni-view[data-v-727a43e3]:first-of-type{max-width:%?278?%;height:100%;font-size:%?34?%;color:#2e2e30;font-weight:700;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;float:left}.my-Focus-list-name-two[data-v-727a43e3]{background:#dff7f3;border-radius:%?4?%;padding:%?2?% %?10?% %?2?% %?10?%;font-size:%?20?%;color:#02c2a2;float:left;margin-top:%?8?%;margin-left:%?20?%}.my-Focus-list-name-thr[data-v-727a43e3]{width:%?106?%;height:%?46?%;border:%?2?% solid #bdbdbd;border-radius:%?4?%;float:right;text-align:center;line-height:%?46?%;color:#bdbdbd;font-size:%?30?%;margin-top:%?-2?%}.my-Focus-list-name-thrs[data-v-727a43e3]{width:%?106?%;height:%?46?%;border:%?2?% solid #02c2a2;border-radius:%?4?%;float:right;text-align:center;line-height:%?46?%;color:#02c2a2;font-size:%?30?%;margin-top:%?-2?%}.my-Focus-list-edit[data-v-727a43e3]{width:82%;height:50%;float:right;font-size:%?24?%;color:#5d5d5d;line-height:%?50?%;margin-top:%?10?%}.gang[data-v-727a43e3]{padding-left:%?10?%;padding-right:%?10?%}.my-Focus-list-gong[data-v-727a43e3]{overflow:auto}.scroll-view_H[data-v-727a43e3]{width:90%;margin:0 auto;height:%?84?%}.my-Focus-list-xiang[data-v-727a43e3]{font-size:%?22?%;color:#9b9b9b;line-height:%?84?%;float:left}.my-Focus-list-xiang[data-v-727a43e3]:nth-of-type(2){margin-left:%?40?%}.my-Focus-list-xiang[data-v-727a43e3]:nth-of-type(3){margin-left:%?40?%}.my-Focus-list-xiang[data-v-727a43e3]:nth-of-type(4){margin-left:%?40?%}.meirenkanwo[data-v-727a43e3]{width:%?330?%;height:%?280?%;display:block;margin:%?120?% auto auto auto;font-size:%?28?%;text-align:center;color:#9b9b9b;clear:both}.meirenkanwo>uni-image[data-v-727a43e3]{width:92%;height:80%}",""])},"77ca":function(t,i,e){"use strict";e.r(i);var o=e("6c53"),n=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);i["default"]=n.a},"7a98":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=c(e("270e")),n=c(e("3a64")),a=c(e("c49d")),s=c(e("9063")),u=e("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function l(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(i){r(t,i,e[i])})}return t}function r(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var d={data:function(){return{list:[],num:0}},components:{quickBtn:o.default,myFocus:n.default,myFans:a.default,navigation:s.default},computed:l({i18n:function(){return this.$t("Myfunctions")}},(0,u.mapGetters)(["GET_HOME","QUICKNAVCO"])),created:function(){this.shareEachPage()},onLoad:function(t){this.id=t.id,console.log(this.id),"1"===this.id?(uni.setNavigationBarTitle({title:this.i18n.title1}),this.num=0):"2"===this.id&&(uni.setNavigationBarTitle({title:this.i18n.title2}),this.num=1),this.list.push(this.i18n.title1),this.list.push(this.i18n.title2)},methods:{gotoGood:function(t){this.num=t,console.log(t),0===t?uni.setNavigationBarTitle({title:this.i18n.title1}):1===t&&uni.setNavigationBarTitle({title:this.i18n.title2})}}};i.default=d},"8a07":function(t,i,e){"use strict";var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"my-Focus"},[t._l(t.list,function(i,o){return e("v-uni-view",{key:o,staticClass:"my-Focus-list"},[e("v-uni-view",{staticClass:"my-Focus-list-box"},[e("v-uni-view",{staticClass:"my-Focus-list-con"},[e("v-uni-view",{staticClass:"my-Focus-list-img",on:{click:function(e){e=t.$handleEvent(e),t.gotocomp(i.userId)}}},[""!==i.compLogo?e("v-uni-image",{attrs:{src:i.compLogo}}):t._e(),""==i.compLogo?e("v-uni-image",{attrs:{src:t.comp}}):t._e()],1),e("v-uni-view",{staticClass:"my-Focus-list-name"},[e("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.gotocomp(i.userId)}}},[t._v(t._s(i.compName))]),2==i.authState?e("v-uni-view",{staticClass:"my-Focus-list-name-two",on:{click:function(e){e=t.$handleEvent(e),t.gotocomp(i.userId)}}},[t._v("资质认证")]):t._e(),1==i.isFollow?e("v-uni-view",{staticClass:"my-Focus-list-name-thr",on:{click:function(e){e=t.$handleEvent(e),t.guanzhu(i)}}},[t._v("已关注")]):t._e(),0==i.isFollow?e("v-uni-view",{staticClass:"my-Focus-list-name-thrs",on:{click:function(e){e=t.$handleEvent(e),t.quxiao(i)}}},[t._v("+关注")]):t._e()],1),e("v-uni-view",{staticClass:"my-Focus-list-edit",on:{click:function(e){e=t.$handleEvent(e),t.gotocomp(i.userId)}}},["1"==i.userType?e("span",[t._v("经销商")]):t._e(),"0"==i.userType?e("span",[t._v("品牌")]):t._e(),"2"==i.userType?e("span",[t._v("厂家")]):t._e(),"3"==i.userType?e("span",[t._v("其他")]):t._e(),""!==i.userType?e("span",{staticClass:"gang"},[t._v("|")]):t._e(),e("span",[t._v(t._s(i.pcodeStr)+t._s(i.ccodeStr))]),i.pcodeStr||""!==i.ccodeStr?e("span",{staticClass:"gang"},[t._v("|")]):t._e(),e("span",[t._v(t._s(i.compTypeCodeStr))]),null!==i.compTypeCodeStr?e("span",{staticClass:"gang"},[t._v("|")]):t._e(),e("span",[t._v(t._s(t._f("formatDate")(i.createTime))+"加入")])])],1)],1),e("v-uni-view",{staticClass:"my-Focus-list-gong",on:{click:function(e){e=t.$handleEvent(e),t.gotocomp(i.userId)}}},[e("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"0"},on:{scroll:function(i){i=t.$handleEvent(i),t.scroll(i)}}},[e("v-uni-view",{staticClass:"my-Focus-list-xiang"},[t._v("推广商机数："+t._s(i.instCount))]),e("v-uni-view",{staticClass:"my-Focus-list-xiang "},[t._v("采购数："+t._s(i.purcCount))]),e("v-uni-view",{staticClass:"my-Focus-list-xiang"},[t._v("留言数："+t._s(i.msgCount))]),e("v-uni-view",{staticClass:"my-Focus-list-xiang"},[t._v("拨打电话:"+t._s(i.phoneCount))])],1)],1)],1)}),0===t.list.length?e("v-uni-view",{staticClass:"meirenkanwo"},[e("v-uni-image",{attrs:{src:t.kong,mode:""}}),t._v("暂无！")],1):t._e()],2)},n=[];e.d(i,"a",function(){return o}),e.d(i,"b",function(){return n})},"9c19":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'.my-Focusonfans[data-v-16cd415c]{width:100%;min-height:100%}.tian[data-v-16cd415c]{width:100%;height:%?88?%}.my-Focusonfans-header[data-v-16cd415c]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-16cd415c]{width:5%;margin-left:%?38?%}.my-Focusonfans-title[data-v-16cd415c]{margin:0 auto;width:40%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.my-Focusonfans-title>uni-view[data-v-16cd415c]{width:50%;height:100%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30;position:relative}.changeColor[data-v-16cd415c]{color:#02c2a2!important;font-weight:700;font-size:%?32?%}.changeColor[data-v-16cd415c]:before{content:"";position:absolute;left:36%;top:%?70?%;bottom:auto;right:auto;height:%?7?%;width:30%;background-color:#02c2a2;color:#02c2a2}',""])},a78a:function(t,i,e){"use strict";e.r(i);var o=e("7a98"),n=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);i["default"]=n.a},b186:function(t,i,e){"use strict";var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"my-Focusonfans"},[e("v-uni-view",{staticClass:"my-Focusonfans-header"},[e("div",{staticClass:"quickBtn-Fd left"},[e("quickBtn")],1),e("v-uni-view",{staticClass:"my-Focusonfans-title"},t._l(t.list,function(i,o){return e("v-uni-view",{key:o,class:t.num==o?"changeColor":"",on:{click:function(i){i=t.$handleEvent(i),t.gotoGood(o)}}},[t._v(t._s(i))])}),1)],1),e("v-uni-view",{staticClass:"tian"}),0===t.num?e("myFocus"):t._e(),1===t.num?e("myFans"):t._e(),t.QUICKNAVCO.show?e("navigation"):t._e()],1)},n=[];e.d(i,"a",function(){return o}),e.d(i,"b",function(){return n})},bd30:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".my-Fans[data-v-117daf40]{width:100%;min-height:100%}.my-Focus-list[data-v-117daf40]{width:100%;height:%?266?%;background:#fff;margin-top:%?20?%;padding:.1rem}.my-Focus-list-box[data-v-117daf40]{width:90%;margin:0 auto;height:%?180?%;border-bottom:%?2?% solid #f5f5f5;padding:%?0.1?%}.my-Focus-list-con[data-v-117daf40]{width:100%;height:%?100?%;margin-top:6%}.my-Focus-list-img[data-v-117daf40]{width:%?100?%;height:100%;float:left}.my-Focus-list-img>uni-image[data-v-117daf40]{width:100%;height:100%;border:%?8?%}.my-Focus-list-name[data-v-117daf40]{width:82%;height:50%;float:right;margin-top:%?-5?%}.my-Focus-list-name>uni-view[data-v-117daf40]:first-of-type{max-width:%?278?%;height:100%;font-size:%?34?%;color:#2e2e30;font-weight:700;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;float:left}.my-Focus-list-name-two[data-v-117daf40]{background:#dff7f3;border-radius:%?4?%;padding:%?2?% %?10?% %?2?% %?10?%;font-size:%?20?%;color:#02c2a2;float:left;margin-top:%?8?%;margin-left:%?20?%}.my-Focus-list-name-thr[data-v-117daf40]{width:%?106?%;height:%?46?%;border:%?2?% solid #bdbdbd;border-radius:%?4?%;float:right;text-align:center;line-height:%?46?%;color:#bdbdbd;font-size:%?30?%;margin-top:%?-2?%}.my-Focus-list-name-thrs[data-v-117daf40]{width:%?106?%;height:%?46?%;border:%?2?% solid #02c2a2;border-radius:%?4?%;float:right;text-align:center;line-height:%?46?%;color:#02c2a2;font-size:%?30?%;margin-top:%?-2?%}.my-Focus-list-edit[data-v-117daf40]{width:82%;height:50%;float:right;font-size:%?24?%;color:#5d5d5d;line-height:%?50?%;margin-top:%?10?%}.gang[data-v-117daf40]{padding-left:%?10?%;padding-right:%?10?%}.my-Focus-list-gong[data-v-117daf40]{overflow:auto}.scroll-view_H[data-v-117daf40]{width:90%;margin:0 auto;height:%?84?%}.my-Focus-list-xiang[data-v-117daf40]{font-size:%?22?%;color:#9b9b9b;line-height:%?84?%;float:left}.my-Focus-list-xiang[data-v-117daf40]:nth-of-type(2){margin-left:%?40?%}.my-Focus-list-xiang[data-v-117daf40]:nth-of-type(3){margin-left:%?40?%}.my-Focus-list-xiang[data-v-117daf40]:nth-of-type(4){margin-left:%?40?%}.meirenkanwo[data-v-117daf40]{width:%?330?%;height:%?280?%;display:block;margin:%?120?% auto auto auto;font-size:%?28?%;text-align:center;color:#9b9b9b;clear:both}.meirenkanwo>uni-image[data-v-117daf40]{width:92%;height:80%}",""])},c49d:function(t,i,e){"use strict";e.r(i);var o=e("fdc8"),n=e("77ca");for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);e("1f29");var s=e("2877"),u=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"117daf40",null);i["default"]=u.exports},d6bc:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{logo:this.Static+"my/logo.png",list:[],kong:this.Static+"my/kong.png",comp:this.Static+"my/comp.png",floowdata:""}},mounted:function(){},onLoad:function(){},created:function(){this.getFocus()},filters:{formatDate:function(t){var i=new Date(t),e=i.getFullYear(),o=i.getMonth()+1;o=o<10?"0"+o:o;var n=i.getDate();n=n<10?"0"+n:n;var a=i.getHours();a=a<10?"0"+a:a;var s=i.getMinutes();s=s<10?"0"+s:s;var u=i.getSeconds();return u=u<10?"0"+u:u,e+"."+o+"."+n}},methods:{guanzhu:function(t){var i=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));console.log(e.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/follow/cancelUser?userId="+e.user.id+"&modelId="+t.userId+"&type=4",method:"GET",header:{Authorization:"Bearer "+e.token},success:function(t){console.log(t.data,"---------------response.data--------------"),"200"===t.data.ret&&(uni.hideLoading(),i.getFocus())},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},quxiao:function(t){var i=this;if(uni.getStorageSync("landRegist")){var e=JSON.parse(uni.getStorageSync("landRegist"));console.log(e.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/follow/user?userId="+e.user.id+"&modelId="+t.userId+"&type=4",method:"GET",header:{Authorization:"Bearer "+e.token},success:function(t){console.log(t.data,"---------------response.data--------------"),"200"===t.data.ret&&(uni.hideLoading(),i.getFocus())},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}},gotocomp:function(t){console.log(t+"to商家详情"),uni.navigateTo({url:"/modules/myCompany/mybusiness/my-business?id="+t})},getFocus:function(){var t=this;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));console.log(i.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/follow/myFollowList?page=1&userId="+i.user.id,method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){uni.hideLoading(),t.list=i.data.content.list,t.list.map(function(i,e){0==i.isUserFollow?t.floowdata=0:t.floowdata=1}),console.log(t.list)},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(t,"网络繁忙，请稍后")}})}}},computed:{}};i.default=o},db56:function(t,i,e){"use strict";e.r(i);var o=e("b186"),n=e("a78a");for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);e("ea44");var s=e("2877"),u=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"16cd415c",null);i["default"]=u.exports},ea44:function(t,i,e){"use strict";var o=e("2fa8"),n=e.n(o);n.a},ed97:function(t,i,e){"use strict";var o=e("386f"),n=e.n(o);n.a},f321:function(t,i,e){"use strict";e.r(i);var o=e("d6bc"),n=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);i["default"]=n.a},fdc8:function(t,i,e){"use strict";var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"my-Fans"},[t._l(t.list,function(i,o){return e("v-uni-view",{key:o,staticClass:"my-Focus-list"},[e("v-uni-view",{staticClass:"my-Focus-list-box"},[e("v-uni-view",{staticClass:"my-Focus-list-con"},[e("v-uni-view",{staticClass:"my-Focus-list-img",on:{click:function(e){e=t.$handleEvent(e),t.gotocomp(i.userId)}}},[""!==i.compLogo?e("v-uni-image",{attrs:{src:i.compLogo}}):t._e(),""==i.compLogo?e("v-uni-image",{attrs:{src:t.comp}}):t._e()],1),e("v-uni-view",{staticClass:"my-Focus-list-name"},[e("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.gotocomp(i.userId)}}},[t._v(t._s(i.compName))]),2==i.authState?e("v-uni-view",{staticClass:"my-Focus-list-name-two",on:{click:function(e){e=t.$handleEvent(e),t.gotocomp(i.userId)}}},[t._v("资质认证")]):t._e(),"1"===i.isFollow?e("v-uni-view",{staticClass:"my-Focus-list-name-thr",on:{click:function(e){e=t.$handleEvent(e),t.guanzhu(i)}}},[t._v("已关注")]):t._e(),"0"===i.isFollow?e("v-uni-view",{staticClass:"my-Focus-list-name-thrs",on:{click:function(e){e=t.$handleEvent(e),t.quxiao(i)}}},[t._v("+关注")]):t._e()],1),e("v-uni-view",{staticClass:"my-Focus-list-edit",on:{click:function(e){e=t.$handleEvent(e),t.gotocomp(i.userId)}}},["1"===i.userType?e("span",[t._v("经销商")]):t._e(),"0"===i.userType?e("span",[t._v("品牌商")]):t._e(),"2"===i.userType?e("span",[t._v("厂家")]):t._e(),"3"===i.userType?e("span",[t._v("其他")]):t._e(),null!==i.userType?e("span",{staticClass:"gang"},[t._v("|")]):t._e(),e("span",[t._v(t._s(i.pcodeStr)+t._s(i.ccodeStr))]),i.pcodeStr||null!==i.ccodeStr?e("span",{staticClass:"gang"},[t._v("|")]):t._e(),e("span",[t._v(t._s(i.compTypeCodeStr))]),null!==i.compTypeCodeStr?e("span",{staticClass:"gang"},[t._v("|")]):t._e(),e("span",[t._v(t._s(t._f("formatDate")(i.createTime))+"加入")])])],1)],1),e("v-uni-view",{staticClass:"my-Focus-list-gong",on:{click:function(e){e=t.$handleEvent(e),t.gotocomp(i.userId)}}},[e("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"0"},on:{scroll:function(i){i=t.$handleEvent(i),t.scroll(i)}}},[e("v-uni-view",{staticClass:"my-Focus-list-xiang"},[t._v("推广商机数："+t._s(i.instCount))]),e("v-uni-view",{staticClass:"my-Focus-list-xiang "},[t._v("采购数："+t._s(i.purcCount))]),e("v-uni-view",{staticClass:"my-Focus-list-xiang"},[t._v("留言数："+t._s(i.msgCount))]),e("v-uni-view",{staticClass:"my-Focus-list-xiang",on:{click:function(i){i=t.$handleEvent(i),t.Callphone()}}},[t._v("拨打电话："+t._s(i.phoneCount))])],1)],1)],1)}),0==t.list.length?e("v-uni-view",{staticClass:"meirenkanwo"},[e("v-uni-image",{attrs:{src:t.kong,mode:""}}),t._v("暂无！")],1):t._e()],2)},n=[];e.d(i,"a",function(){return o}),e.d(i,"b",function(){return n})}}]);