(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-myFocusonfans-my-Focusonfans"],{"079f":function(t,i,a){"use strict";(function(t){var e=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("73e9")),s=e(a("32fa")),o={data:function(){return{logo:n.default,list:[],kong:s.default}},mounted:function(){},onLoad:function(){},created:function(){this.getFocus()},filters:{formatDate:function(t){var i=new Date(t),a=i.getFullYear(),e=i.getMonth()+1;e=e<10?"0"+e:e;var n=i.getDate();n=n<10?"0"+n:n;var s=i.getHours();s=s<10?"0"+s:s;var o=i.getMinutes();o=o<10?"0"+o:o;var l=i.getSeconds();return l=l<10?"0"+l:l,a+"."+e+"."+n}},methods:{Callphone:function(){uni.makePhoneCall({phoneNumber:"17600121378"})},getFocus:function(){var i=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));t.log(a.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/follow/selectMyFansList?page=1&userId="+a.user.id,method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){uni.hideLoading(),t.log(a.data),i.list=a.data.content.list,t.log(i.list)},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}}},computed:{}};i.default=o}).call(this,a("5a52")["default"])},1619:function(t,i,a){"use strict";a.r(i);var e=a("079f"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);i["default"]=n.a},"206a":function(t,i,a){var e=a("9d12");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("1f26d7b8",e,!0,{sourceMap:!1,shadowMode:!1})},"20cd":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".my-Fans[data-v-696bd432]{width:100%;min-height:100%}.my-Focus-list[data-v-696bd432]{width:100%;height:%?266?%;background:#fff;margin-top:%?20?%;padding:.1rem}.my-Focus-list-box[data-v-696bd432]{width:90%;margin:0 auto;height:%?180?%;border-bottom:%?2?% solid #f5f5f5;padding:%?0.1?%}.my-Focus-list-con[data-v-696bd432]{width:100%;height:%?100?%;margin-top:6%}.my-Focus-list-img[data-v-696bd432]{width:%?100?%;height:100%;float:left}.my-Focus-list-img>uni-image[data-v-696bd432]{width:100%;height:100%;border:%?8?%}.my-Focus-list-name[data-v-696bd432]{width:82%;height:50%;float:right;margin-top:%?-5?%}.my-Focus-list-name>uni-view[data-v-696bd432]:first-of-type{max-width:%?240?%;height:100%;font-size:%?34?%;color:#2e2e30;font-weight:700;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;float:left}.my-Focus-list-name-two[data-v-696bd432]{background:#dff7f3;border-radius:%?4?%;padding:%?2?% %?10?% %?2?% %?10?%;font-size:%?20?%;color:#02c2a2;float:left;margin-top:%?8?%;margin-left:%?20?%}.my-Focus-list-name-thr[data-v-696bd432]{width:%?106?%;height:%?50?%;border:%?2?% solid #bdbdbd;border-radius:%?4?%;float:right;text-align:center;line-height:%?50?%;color:#bdbdbd;font-size:%?30?%;margin-top:%?-2?%}.my-Focus-list-name-thrs[data-v-696bd432]{width:%?106?%;height:%?50?%;border:%?2?% solid #02c2a2;border-radius:%?4?%;float:right;text-align:center;line-height:%?50?%;color:#02c2a2;font-size:%?30?%;margin-top:%?-2?%}.my-Focus-list-edit[data-v-696bd432]{width:82%;height:50%;float:right;font-size:%?24?%;color:#5d5d5d;line-height:%?50?%;margin-top:%?10?%}.gang[data-v-696bd432]{padding-left:%?10?%;padding-right:%?10?%}.my-Focus-list-gong[data-v-696bd432]{overflow:auto}.scroll-view_H[data-v-696bd432]{width:90%;margin:0 auto;height:%?84?%}.my-Focus-list-xiang[data-v-696bd432]{font-size:%?22?%;color:#9b9b9b;line-height:%?84?%;float:left}.my-Focus-list-xiang[data-v-696bd432]:nth-of-type(2){margin-left:%?40?%}.my-Focus-list-xiang[data-v-696bd432]:nth-of-type(3){margin-left:%?40?%}.my-Focus-list-xiang[data-v-696bd432]:nth-of-type(4){margin-left:%?40?%}.meirenkanwo[data-v-696bd432]{width:%?330?%;height:%?280?%;display:block;margin:%?120?% auto auto auto;font-size:%?28?%;text-align:center;color:#9b9b9b;clear:both}.meirenkanwo>uni-image[data-v-696bd432]{width:92%;height:80%}",""])},2758:function(t,i,a){var e=a("bfb4");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("3afc0f26",e,!0,{sourceMap:!1,shadowMode:!1})},"3f8e":function(t,i,a){"use strict";var e=a("206a"),n=a.n(e);n.a},"4c60":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"my-Fans"},[t._l(t.list,function(i,e){return a("v-uni-view",{key:e,staticClass:"my-Focus-list"},[a("v-uni-view",{staticClass:"my-Focus-list-box"},[a("v-uni-view",{staticClass:"my-Focus-list-con"},[a("v-uni-view",{staticClass:"my-Focus-list-img"},[a("v-uni-image",{attrs:{src:i.compLogo}})],1),a("v-uni-view",{staticClass:"my-Focus-list-name"},[a("v-uni-view",[t._v(t._s(i.compName))]),a("v-uni-view",{staticClass:"my-Focus-list-name-two"},[t._v("资质认证")]),"1"===i.isFollow?a("v-uni-view",{staticClass:"my-Focus-list-name-thr"},[t._v("已关注")]):t._e(),"0"===i.isFollow?a("v-uni-view",{staticClass:"my-Focus-list-name-thrs"},[t._v("+关注")]):t._e()],1),a("v-uni-view",{staticClass:"my-Focus-list-edit"},["1"===i.userType?a("span",[t._v("经销商")]):t._e(),"0"===i.userType?a("span",[t._v("品牌商")]):t._e(),"2"===i.userType?a("span",[t._v("厂家")]):t._e(),"3"===i.userType?a("span",[t._v("其他")]):t._e(),null!==i.userType?a("span",{staticClass:"gang"},[t._v("|")]):t._e(),a("span",[t._v(t._s(i.pcodeStr)+t._s(i.ccodeStr))]),i.pcodeStr||null!==i.ccodeStr?a("span",{staticClass:"gang"},[t._v("|")]):t._e(),a("span",[t._v(t._s(i.compTypeCodeStr))]),null!==i.compTypeCodeStr?a("span",{staticClass:"gang"},[t._v("|")]):t._e(),a("span",[t._v(t._s(t._f("formatDate")(i.createTime))+"加入")])])],1)],1),a("v-uni-view",{staticClass:"my-Focus-list-gong"},[a("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"0"},on:{scroll:function(i){i=t.$handleEvent(i),t.scroll(i)}}},[a("v-uni-view",{staticClass:"my-Focus-list-xiang"},[t._v("推广商机数："+t._s(i.instCount))]),a("v-uni-view",{staticClass:"my-Focus-list-xiang "},[t._v("采购数："+t._s(i.purcCount))]),a("v-uni-view",{staticClass:"my-Focus-list-xiang"},[t._v("留言数："+t._s(i.msgCount))]),a("v-uni-view",{staticClass:"my-Focus-list-xiang",on:{click:function(i){i=t.$handleEvent(i),t.Callphone()}}},[t._v("拨打电话："+t._s(i.phoneCount))])],1)],1)],1)}),0===t.list.length?a("v-uni-view",{staticClass:"meirenkanwo"},[a("v-uni-image",{attrs:{src:t.kong,mode:""}}),t._v("暂无！")],1):t._e()],2)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},"5f81":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"my-Focus"},[t._l(t.list,function(i,e){return a("v-uni-view",{key:e,staticClass:"my-Focus-list"},[a("v-uni-view",{staticClass:"my-Focus-list-box"},[a("v-uni-view",{staticClass:"my-Focus-list-con"},[a("v-uni-view",{staticClass:"my-Focus-list-img"},[a("v-uni-image",{attrs:{src:i.compLogo}})],1),a("v-uni-view",{staticClass:"my-Focus-list-name"},[a("v-uni-view",[t._v(t._s(i.compName))]),a("v-uni-view",{staticClass:"my-Focus-list-name-two"},[t._v("资质认证")]),"1"===i.isFollow?a("v-uni-view",{staticClass:"my-Focus-list-name-thr"},[t._v("已关注")]):t._e(),"0"===i.isFollow?a("v-uni-view",{staticClass:"my-Focus-list-name-thrs"},[t._v("+关注")]):t._e()],1),a("v-uni-view",{staticClass:"my-Focus-list-edit"},["1"==i.userType?a("span",[t._v("经销商")]):t._e(),"0"==i.userType?a("span",[t._v("品牌")]):t._e(),"2"==i.userType?a("span",[t._v("厂家")]):t._e(),"3"==i.userType?a("span",[t._v("其他")]):t._e(),""!==i.userType?a("span",{staticClass:"gang"},[t._v("|")]):t._e(),a("span",[t._v(t._s(i.pcodeStr)+t._s(i.ccodeStr))]),i.pcodeStr||""!==i.ccodeStr?a("span",{staticClass:"gang"},[t._v("|")]):t._e(),a("span",[t._v(t._s(i.compTypeCodeStr))]),null!==i.compTypeCodeStr?a("span",{staticClass:"gang"},[t._v("|")]):t._e(),a("span",[t._v(t._s(t._f("formatDate")(i.createTime))+"加入")])])],1)],1),a("v-uni-view",{staticClass:"my-Focus-list-gong"},[a("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"0"},on:{scroll:function(i){i=t.$handleEvent(i),t.scroll(i)}}},[a("v-uni-view",{staticClass:"my-Focus-list-xiang"},[t._v("推广商机数："+t._s(i.instCount))]),a("v-uni-view",{staticClass:"my-Focus-list-xiang "},[t._v("采购数："+t._s(i.purcCount))]),a("v-uni-view",{staticClass:"my-Focus-list-xiang"},[t._v("留言数："+t._s(i.msgCount))]),a("v-uni-view",{staticClass:"my-Focus-list-xiang"},[t._v("拨打电话:"+t._s(i.phoneCount))])],1)],1)],1)}),0===t.list.length?a("v-uni-view",{staticClass:"meirenkanwo"},[a("v-uni-image",{attrs:{src:t.kong,mode:""}}),t._v("暂无！")],1):t._e()],2)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},6008:function(t,i,a){var e=a("20cd");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("b2472f60",e,!0,{sourceMap:!1,shadowMode:!1})},"67e9":function(t,i,a){"use strict";a.r(i);var e=a("5f81"),n=a("7387");for(var s in n)"default"!==s&&function(t){a.d(i,t,function(){return n[t]})}(s);a("a39f");var o=a("2877"),l=Object(o["a"])(n["default"],e["a"],e["b"],!1,null,"a3ad358c",null);i["default"]=l.exports},7387:function(t,i,a){"use strict";a.r(i);var e=a("b440"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);i["default"]=n.a},"9d12":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,'.my-Focusonfans[data-v-d76f01b6]{width:100%;min-height:100%}.tian[data-v-d76f01b6]{width:100%;height:%?88?%}.my-Focusonfans-header[data-v-d76f01b6]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-d76f01b6]{width:5%;margin-left:%?38?%}.my-Focusonfans-title[data-v-d76f01b6]{margin:0 auto;width:40%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.my-Focusonfans-title>uni-view[data-v-d76f01b6]{width:50%;height:100%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30;position:relative}.changeColor[data-v-d76f01b6]{color:#02c2a2!important;font-weight:700;font-size:%?32?%}.changeColor[data-v-d76f01b6]:before{content:"";position:absolute;left:36%;top:%?70?%;bottom:auto;right:auto;height:%?7?%;width:30%;background-color:#02c2a2;color:#02c2a2}',""])},a39f:function(t,i,a){"use strict";var e=a("2758"),n=a.n(e);n.a},aac8:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"my-Focusonfans"},[a("v-uni-view",{staticClass:"my-Focusonfans-header"},[a("div",{staticClass:"quickBtn-Fd left"},[a("quickBtn")],1),a("v-uni-view",{staticClass:"my-Focusonfans-title"},t._l(t.list,function(i,e){return a("v-uni-view",{key:e,class:t.num==e?"changeColor":"",on:{click:function(i){i=t.$handleEvent(i),t.gotoGood(e)}}},[t._v(t._s(i))])}),1)],1),a("v-uni-view",{staticClass:"tian"}),0===t.num?a("myFocus"):t._e(),1===t.num?a("myFans"):t._e(),t.QUICKNAVCO.show?a("navigation"):t._e()],1)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},b440:function(t,i,a){"use strict";(function(t){var e=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("73e9")),s=e(a("32fa")),o={data:function(){return{logo:n.default,list:[],kong:s.default}},mounted:function(){},onLoad:function(){},created:function(){this.getFocus()},filters:{formatDate:function(t){var i=new Date(t),a=i.getFullYear(),e=i.getMonth()+1;e=e<10?"0"+e:e;var n=i.getDate();n=n<10?"0"+n:n;var s=i.getHours();s=s<10?"0"+s:s;var o=i.getMinutes();o=o<10?"0"+o:o;var l=i.getSeconds();return l=l<10?"0"+l:l,a+"."+e+"."+n}},methods:{getFocus:function(){var i=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));t.log(a.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/follow/myFollowList?page=1&userId="+a.user.id,method:"GET",header:{Authorization:"Bearer "+a.token},success:function(a){uni.hideLoading(),i.list=a.data.content.list,t.log(i.list)},fail:function(i){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),t.log(i,"网络繁忙，请稍后")}})}}},computed:{}};i.default=o}).call(this,a("5a52")["default"])},bfb4:function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".my-Focus[data-v-a3ad358c]{width:100%;min-height:100%}.my-Focus-list[data-v-a3ad358c]{width:100%;height:%?266?%;background:#fff;margin-top:%?20?%;padding:.1rem}.my-Focus-list-box[data-v-a3ad358c]{width:90%;margin:0 auto;height:%?180?%;border-bottom:%?2?% solid #f5f5f5;padding:%?0.1?%}.my-Focus-list-con[data-v-a3ad358c]{width:100%;height:%?100?%;margin-top:6%}.my-Focus-list-img[data-v-a3ad358c]{width:%?100?%;height:100%;float:left}.my-Focus-list-img>uni-image[data-v-a3ad358c]{width:100%;height:100%;border-radius:%?8?%}.my-Focus-list-name[data-v-a3ad358c]{width:82%;height:50%;float:right;margin-top:%?-5?%}.my-Focus-list-name>uni-view[data-v-a3ad358c]:first-of-type{max-width:%?240?%;height:100%;font-size:%?34?%;color:#2e2e30;font-weight:700;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;float:left}.my-Focus-list-name-two[data-v-a3ad358c]{background:#dff7f3;border-radius:%?4?%;padding:%?2?% %?10?% %?2?% %?10?%;font-size:%?20?%;color:#02c2a2;float:left;margin-top:%?8?%;margin-left:%?20?%}.my-Focus-list-name-thr[data-v-a3ad358c]{width:%?106?%;height:%?50?%;border:%?2?% solid #bdbdbd;border-radius:%?4?%;float:right;text-align:center;line-height:%?50?%;color:#bdbdbd;font-size:%?30?%;margin-top:%?-2?%}.my-Focus-list-name-thrs[data-v-a3ad358c]{width:%?106?%;height:%?50?%;border:%?2?% solid #02c2a2;border-radius:%?4?%;float:right;text-align:center;line-height:%?50?%;color:#02c2a2;font-size:%?30?%;margin-top:%?-2?%}.my-Focus-list-edit[data-v-a3ad358c]{width:82%;height:50%;float:right;font-size:%?24?%;color:#5d5d5d;line-height:%?50?%;margin-top:%?10?%}.gang[data-v-a3ad358c]{padding-left:%?10?%;padding-right:%?10?%}.my-Focus-list-gong[data-v-a3ad358c]{overflow:auto}.scroll-view_H[data-v-a3ad358c]{width:90%;margin:0 auto;height:%?84?%}.my-Focus-list-xiang[data-v-a3ad358c]{font-size:%?22?%;color:#9b9b9b;line-height:%?84?%;float:left}.my-Focus-list-xiang[data-v-a3ad358c]:nth-of-type(2){margin-left:%?40?%}.my-Focus-list-xiang[data-v-a3ad358c]:nth-of-type(3){margin-left:%?40?%}.my-Focus-list-xiang[data-v-a3ad358c]:nth-of-type(4){margin-left:%?40?%}.meirenkanwo[data-v-a3ad358c]{width:%?330?%;height:%?280?%;display:block;margin:%?120?% auto auto auto;font-size:%?28?%;text-align:center;color:#9b9b9b;clear:both}.meirenkanwo>uni-image[data-v-a3ad358c]{width:92%;height:80%}",""])},c874:function(t,i,a){"use strict";var e=a("6008"),n=a.n(e);n.a},d159:function(t,i,a){"use strict";a.r(i);var e=a("4c60"),n=a("1619");for(var s in n)"default"!==s&&function(t){a.d(i,t,function(){return n[t]})}(s);a("c874");var o=a("2877"),l=Object(o["a"])(n["default"],e["a"],e["b"],!1,null,"696bd432",null);i["default"]=l.exports},d1c5:function(t,i,a){"use strict";(function(t){var e=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("cebc")),s=e(a("4cb2")),o=e(a("67e9")),l=e(a("d159")),u=e(a("e2a4")),c=a("2f62"),r={data:function(){return{list:[],num:0}},components:{quickBtn:s.default,myFocus:o.default,myFans:l.default,navigation:u.default},computed:(0,n.default)({i18n:function(){return this.$t("Myfunctions")}},(0,c.mapGetters)(["GET_HOME","QUICKNAVCO"])),onLoad:function(i){this.id=i.id,t.log(this.id),"1"===this.id?(uni.setNavigationBarTitle({title:this.i18n.title1}),this.num=0):"2"===this.id&&(uni.setNavigationBarTitle({title:this.i18n.title2}),this.num=1),this.list.push(this.i18n.title1),this.list.push(this.i18n.title2)},methods:{gotoGood:function(i){this.num=i,t.log(i),0===i?uni.setNavigationBarTitle({title:this.i18n.title1}):1===i&&uni.setNavigationBarTitle({title:this.i18n.title2})}}};i.default=r}).call(this,a("5a52")["default"])},d36f:function(t,i,a){"use strict";a.r(i);var e=a("aac8"),n=a("f211");for(var s in n)"default"!==s&&function(t){a.d(i,t,function(){return n[t]})}(s);a("3f8e");var o=a("2877"),l=Object(o["a"])(n["default"],e["a"],e["b"],!1,null,"d76f01b6",null);i["default"]=l.exports},f211:function(t,i,a){"use strict";a.r(i);var e=a("d1c5"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);i["default"]=n.a}}]);