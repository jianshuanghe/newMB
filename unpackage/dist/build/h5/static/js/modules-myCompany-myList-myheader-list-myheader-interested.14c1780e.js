(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-myList-myheader-list-myheader-interested"],{"0cba":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".myheader-interested[data-v-0a851d53]{width:100%;min-height:100%;background:#fff}.myheader-interested-biao[data-v-0a851d53]{width:100%;height:%?150?%;padding-top:%?80?%;text-align:center}.myheader-interested-biao>uni-view[data-v-0a851d53]:first-of-type{font-size:%?36?%;color:#2e2e30;font-weight:700}.myheader-interested-biao>uni-view[data-v-0a851d53]:nth-of-type(2){font-size:%?24?%;color:#9b9b9b}.myheader-interested-industry[data-v-0a851d53]{width:90%;min-height:%?100?%;margin:0 auto;padding-bottom:%?140?%}.myheader-interested-Label[data-v-0a851d53]{padding:%?10?% %?50?% %?10?% %?50?%;border:%?2?% solid #e2e2e2;border-radius:%?35?%;display:block;float:left;margin-left:%?20?%;margin-top:%?20?%}.active[data-v-0a851d53]{background:#02c2a2;color:#fff!important}.both[data-v-0a851d53]{clear:both}.myheader-btns[data-v-0a851d53]{width:100%;height:%?120?%;background:#fff;position:fixed;bottom:0}.myheader-btn[data-v-0a851d53]{width:90%;height:%?90?%;background:#02c2a2;margin:%?80?% auto auto auto;text-align:center;line-height:%?90?%;font-size:%?32?%;color:#fff;position:fixed;bottom:%?20?%;left:5%}",""])},"76ad":function(e,t,n){"use strict";n.r(t);var i=n("fb89"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},"7b2c":function(e,t,n){var i=n("0cba");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("862fca14",i,!0,{sourceMap:!1,shadowMode:!1})},"8f74":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"myheader-interested"},[n("v-uni-view",{staticClass:"myheader-interested-biao"},[n("v-uni-view",[e._v("选择感兴趣的行业")]),n("v-uni-view",[e._v("选择后更容易找到自己感兴趣的商机哦")])],1),n("v-uni-view",{staticClass:"myheader-interested-industry"},[e._l(e.list,function(t,i){return n("span",{key:i,staticClass:"myheader-interested-Label",class:{active:t.hiden},on:{click:function(n){n=e.$handleEvent(n),e.Choices(t)}}},[e._v(e._s(t.typeName))])}),n("v-uni-view",{staticClass:"both"})],2),n("v-uni-view",{staticClass:"myheader-btns"},[n("v-uni-view",{staticClass:"myheader-btn",on:{click:function(t){t=e.$handleEvent(t),e.Preservation()}}},[e._v("保存")])],1)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},ea70:function(e,t,n){"use strict";n.r(t);var i=n("8f74"),a=n("76ad");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("f763");var d=n("2877"),o=Object(d["a"])(a["default"],i["a"],i["b"],!1,null,"0a851d53",null);t["default"]=o.exports},f763:function(e,t,n){"use strict";var i=n("7b2c"),a=n.n(i);a.a},fb89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={data:function(){return{list:[],selectedItem:[],selectedItems:[]}},components:{},computed:a({i18n:function(){return this.$t("Mypersonal")}},(0,i.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){uni.setNavigationBarTitle({title:this.i18n.title1})},created:function(){this.interested()},methods:{Choices:function(e){if(console.log(e),e.hiden){e.hiden=!1;var t=this.selectedItem.indexOf(e.id);console.log(t),this.selectedItem.splice(t,1),this.selectedItems.splice(t,1),console.log(this.selectedItem),console.log(this.selectedItems)}else if(!e.hiden&&this.selectedItems.length<3){e.hiden=!0,this.selectedItem.push(e.id);var n={induCode:e.id,induName:e.typeName};this.selectedItems.push(n),console.log(this.selectedItems)}},Preservation:function(){var e=this;if(uni.getStorageSync("landRegist")){var t=JSON.parse(uni.getStorageSync("landRegist"));console.log(t.user.id);var n={induCodes:this.selectedItem};uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+t.user.id,data:n,method:"POST",header:{Authorization:"Bearer "+t.token},success:function(t){uni.hideLoading(),console.log(t.data),e.GET_MY.headers.induCodes=e.selectedItem,e.GET_MY.headers.induBeans=e.selectedItems,e.$store.commit("setMy",e.GET_MY.headers),uni.navigateBack({})},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}},interested:function(){var e=this;if(uni.getStorageSync("landRegist")){var t=JSON.parse(uni.getStorageSync("landRegist"));console.log(t.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/compIndustry/selectList",method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){uni.hideLoading(),console.log(t.data),e.list=t.data.content,e.list.forEach(function(t){if(1==e.GET_MY.headers.induBeans.length)if(t.id==e.GET_MY.headers.induBeans[0].induCode){e.$set(t,"hiden",!0);var n={induCode:t.id,induName:t.typeName};e.selectedItems.push(n)}else e.$set(t,"hiden",!1);else if(2==e.GET_MY.headers.induBeans.length||1==e.GET_MY.headers.induBeans.length)if(t.id==e.GET_MY.headers.induBeans[1].induCode||t.id==e.GET_MY.headers.induBeans[0].induCode){e.$set(t,"hiden",!0);var i={induCode:t.id,induName:t.typeName};e.selectedItems.push(i)}else e.$set(t,"hiden",!1);else if(2==e.GET_MY.headers.induBeans.length||3==e.GET_MY.headers.induBeans.length||t.id==e.GET_MY.headers.induBeans.length==1)if(t.id==e.GET_MY.headers.induBeans[2].induCode||t.id==e.GET_MY.headers.induBeans[1].induCode||t.id==e.GET_MY.headers.induBeans[0].induCode){e.$set(t,"hiden",!0);var a={induCode:t.id,induName:t.typeName};e.selectedItems.push(a);var s={induCode:t.id,induName:t.typeName};e.selectedItem.push(s),console.log(e.selectedItem)}else e.$set(t,"hiden",!1)}),console.log(e.GET_MY.headers.induBeans),console.log(e.selectedItem),console.log(e.selectedItems)},fail:function(e){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(e,"网络繁忙，请稍后")}})}}}};t.default=d}}]);