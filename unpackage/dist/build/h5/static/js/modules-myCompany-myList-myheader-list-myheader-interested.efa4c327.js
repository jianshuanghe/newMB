(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-myList-myheader-list-myheader-interested"],{2115:function(e,t,i){"use strict";i.r(t);var n=i("5126"),a=i("9898");for(var d in a)"default"!==d&&function(e){i.d(t,e,function(){return a[e]})}(d);i("2169");var s=i("2877"),o=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"55fefda9",null);t["default"]=o.exports},2169:function(e,t,i){"use strict";var n=i("eb496"),a=i.n(n);a.a},5126:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"myheader-interested"},[i("v-uni-view",{staticClass:"myheader-interested-biao"},[i("v-uni-view",[e._v("选择感兴趣的行业")]),i("v-uni-view",[e._v("选择后更容易找到自己感兴趣的商机哦")])],1),i("v-uni-view",{staticClass:"myheader-interested-industry"},[e._l(e.list,function(t,n){return i("span",{key:n,staticClass:"myheader-interested-Label",class:{active:t.hiden},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.Choices(t)}}},[e._v(e._s(t.typeName))])}),i("v-uni-view",{staticClass:"both"})],2),i("v-uni-view",{staticClass:"myheader-btns"},[i("v-uni-view",{staticClass:"myheader-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.Preservation()}}},[e._v("保存")])],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"7ffa":function(e,t,i){"use strict";(function(e){var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a");var a=n(i("cebc")),d=i("2f62"),s={data:function(){return{list:[],selectedItem:[],selectedItems:[]}},components:{},computed:(0,a.default)({i18n:function(){return this.$t("Mypersonal")}},(0,d.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){uni.setNavigationBarTitle({title:this.i18n.title1})},created:function(){this.interested()},methods:{Choices:function(t){if(e.log(t),t.hiden){t.hiden=!1;var i=this.selectedItem.indexOf(t.id);e.log(i),this.selectedItem.splice(i,1),this.selectedItems.splice(i,1),e.log(this.selectedItem),e.log(this.selectedItems)}else if(!t.hiden&&this.selectedItems.length<3){t.hiden=!0,this.selectedItem.push(t.id);var n={induCode:t.id,induName:t.typeName};this.selectedItems.push(n),e.log(this.selectedItems)}},Preservation:function(){var t=this;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));e.log(i.user.id);var n={induCodes:this.selectedItem};uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+i.user.id,data:n,method:"POST",header:{Authorization:"Bearer "+i.token},success:function(i){uni.hideLoading(),e.log(i.data),t.GET_MY.headers.induCodes=t.selectedItem,t.GET_MY.headers.induBeans=t.selectedItems,t.$store.commit("setMy",t.GET_MY.headers),uni.navigateBack({})},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),e.log(t,"网络繁忙，请稍后")}})}},interested:function(){var t=this;if(uni.getStorageSync("landRegist")){var i=JSON.parse(uni.getStorageSync("landRegist"));e.log(i.user.id),uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/compIndustry/selectList",method:"GET",header:{Authorization:"Bearer "+i.token},success:function(i){uni.hideLoading(),e.log(i.data),t.list=i.data.content,t.list.forEach(function(i){if(1==t.GET_MY.headers.induBeans.length)if(i.id==t.GET_MY.headers.induBeans[0].induCode){t.$set(i,"hiden",!0);var n={induCode:i.id,induName:i.typeName};t.selectedItems.push(n)}else t.$set(i,"hiden",!1);else if(2==t.GET_MY.headers.induBeans.length||1==t.GET_MY.headers.induBeans.length)if(i.id==t.GET_MY.headers.induBeans[1].induCode||i.id==t.GET_MY.headers.induBeans[0].induCode){t.$set(i,"hiden",!0);var a={induCode:i.id,induName:i.typeName};t.selectedItems.push(a)}else t.$set(i,"hiden",!1);else if(2==t.GET_MY.headers.induBeans.length||3==t.GET_MY.headers.induBeans.length||i.id==t.GET_MY.headers.induBeans.length==1)if(i.id==t.GET_MY.headers.induBeans[2].induCode||i.id==t.GET_MY.headers.induBeans[1].induCode||i.id==t.GET_MY.headers.induBeans[0].induCode){t.$set(i,"hiden",!0);var d={induCode:i.id,induName:i.typeName};t.selectedItems.push(d);var s={induCode:i.id,induName:i.typeName};t.selectedItem.push(s),e.log(t.selectedItem)}else t.$set(i,"hiden",!1)}),e.log(t.GET_MY.headers.induBeans),e.log(t.selectedItem),e.log(t.selectedItems)},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),e.log(t,"网络繁忙，请稍后")}})}}}};t.default=s}).call(this,i("5a52")["default"])},9898:function(e,t,i){"use strict";i.r(t);var n=i("7ffa"),a=i.n(n);for(var d in n)"default"!==d&&function(e){i.d(t,e,function(){return n[e]})}(d);t["default"]=a.a},abef:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".myheader-interested[data-v-55fefda9]{width:100%;min-height:100%;background:#fff}.myheader-interested-biao[data-v-55fefda9]{width:100%;height:%?150?%;padding-top:%?80?%;text-align:center}.myheader-interested-biao>uni-view[data-v-55fefda9]:first-of-type{font-size:%?36?%;color:#2e2e30;font-weight:700}.myheader-interested-biao>uni-view[data-v-55fefda9]:nth-of-type(2){font-size:%?24?%;color:#9b9b9b}.myheader-interested-industry[data-v-55fefda9]{width:90%;min-height:%?100?%;margin:0 auto;padding-bottom:%?140?%}.myheader-interested-Label[data-v-55fefda9]{padding:%?10?% %?50?% %?10?% %?50?%;border:%?2?% solid #e2e2e2;border-radius:%?35?%;display:block;float:left;margin-left:%?20?%;margin-top:%?20?%}.active[data-v-55fefda9]{background:#02c2a2;color:#fff!important}.both[data-v-55fefda9]{clear:both}.myheader-btns[data-v-55fefda9]{width:100%;height:%?120?%;background:#fff;position:fixed;bottom:0}.myheader-btn[data-v-55fefda9]{width:90%;height:%?90?%;background:#02c2a2;margin:%?80?% auto auto auto;text-align:center;line-height:%?90?%;font-size:%?32?%;color:#fff;position:fixed;bottom:%?20?%;left:5%}",""])},eb496:function(e,t,i){var n=i("abef");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("7512963d",n,!0,{sourceMap:!1,shadowMode:!1})}}]);