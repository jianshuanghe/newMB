(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-personAndCompany-companyInfor-companyInforItems-previewAndEditor-editor-editorItems-industryAddress-address"],{"1dec":function(t,i,a){"use strict";(function(t){var e=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("cebc")),s=e(a("8798")),o=e(a("ed4e")),r=a("2f62"),l=e(a("954e")),c=e(a("84ac")),d={name:"addressBs",components:{wInput:l.default,provinceCity:c.default},data:function(){return{text:"",lineRightArrow:s.default,xing:o.default,addressDetail:"",info:{idStringAddress:"",idString:"",addrPcode:"",addrCcode:"",addrAcode:"",idaddress:""},province:[],city:[],county:[],imgData:{},arr:[],listData:{multiArray:[],multiIndex:[0,0],areaPorC:{},province:{index:0,text:"",pcode:""},city:{text:"",ccode:""},paramsPC:{ptext:"",pcode:"",ctext:"",ccode:""}}}},created:function(){},mounted:function(){},computed:(0,n.default)({i18n:function(){return this.$t("qualificatCert")}},(0,r.mapGetters)(["PERSONCENTER","IMGDATA"])),methods:(0,n.default)({},(0,r.mapMutations)({setAddressBsShow:"setAddressBsShow"}),{clickCity:function(i){this.arr=i,t.log(this.arr)},clickReset:function(){t.log("取消"),uni.navigateBack({})},clickSaveAddress:function(){if(t.log("触发保存地址按钮"),""==this.arr)return uni.showToast({title:"请选择地区",icon:"none",duration:1e3}),!1;if(""==this.info.idaddress)return uni.showToast({title:"请输入详细地址",icon:"none",duration:1e3}),!1;var i={idString:this.arr.cityText,addrPcode:this.arr.pcode,addrCcode:this.arr.ccode,addrTcode:this.arr.tcode,idaddress:this.info.idaddress};this.$store.commit("setclickCity",i),uni.navigateBack({})}})};i.default=d}).call(this,a("5a52")["default"])},"3b14":function(t,i,a){var e=a("cb01");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("ad1805d6",e,!0,{sourceMap:!1,shadowMode:!1})},"7e29":function(t,i,a){"use strict";var e=a("f739"),n=a.n(e);n.a},"84ac":function(t,i,a){"use strict";a.r(i);var e=a("9f6c"),n=a("d6e8");for(var s in n)"default"!==s&&function(t){a.d(i,t,function(){return n[t]})}(s);a("cc97");var o=a("2877"),r=Object(o["a"])(n["default"],e["a"],e["b"],!1,null,"7c1135e3",null);i["default"]=r.exports},"9f6c":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"provinceCity-box"},[1===Number(t.column)?a("div",{staticClass:"provinceCity"},[a("v-uni-picker",{attrs:{mode:"",value:t.listData.multiIndex,range:t.listData.multiArray,"range-key":"name"},on:{cancel:function(i){arguments[0]=i=t.$handleEvent(i),t.cancelPC.apply(void 0,arguments)},change:function(i){arguments[0]=i=t.$handleEvent(i),t.clickPC.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-input BI-picker",class:t.listData.cityText?"BI-pickered":"",style:{textAlign:t.textAlignArea,background:t.pickerBg}},[t._v(t._s(t.listData.cityText?t.listData.cityText:"请选择"))]),a("v-uni-image",{staticClass:"BI-rightArrow",attrs:{src:t.rightArrow}})],1)],1):t._e(),Number(t.column)>1?a("div",{staticClass:"provinceCity"},[a("v-uni-picker",{attrs:{mode:"multiSelector",value:t.listData.multiIndex,range:t.listData.multiArray,"range-key":"name"},on:{columnchange:function(i){arguments[0]=i=t.$handleEvent(i),t.columnChange.apply(void 0,arguments)},change:function(i){arguments[0]=i=t.$handleEvent(i),t.clickPC.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-input BI-picker",class:t.listData.cityText?"BI-pickered":"",style:{textAlign:t.textAlignArea,background:t.pickerBg,margin:t.marginArea}},[t._v(t._s(t.listData.cityText?t.listData.cityText:"请选择"))]),a("v-uni-image",{staticClass:"BI-rightArrow",attrs:{src:t.rightArrow}})],1)],1):t._e(),-2==Number(t.column)?a("div",{staticClass:"provinceCity"},[a("v-uni-picker",{attrs:{mode:"multiSelector",range:t.listData.multiArray,value:t.listData.multiIndex,"range-key":"name"},on:{columnchange:function(i){arguments[0]=i=t.$handleEvent(i),t.columnChange.apply(void 0,arguments)},change:function(i){arguments[0]=i=t.$handleEvent(i),t.clickPC.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-input BI-pickeraa",class:t.listData.cityText?"BI-pickered":"",style:{textAlign:t.textAlignArea,background:t.pickerBg,margin:t.marginArea}},[t._v(t._s(t.listData.cityText?t.listData.cityText:"请选择"))])],1)],1):t._e(),-1===Number(t.column)?a("div",{staticClass:"provinceCity"},[a("v-uni-picker",{attrs:{mode:"multiSelector",value:t.listData.multiIndex,range:t.listData.multiArray,"range-key":"name"},on:{columnchange:function(i){arguments[0]=i=t.$handleEvent(i),t.columnChange.apply(void 0,arguments)},change:function(i){arguments[0]=i=t.$handleEvent(i),t.clickPC.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-input BI-pickers",class:t.listData.cityText?"BI-pickered":"",style:{textAlign:t.textAlignArea,background:t.pickerBg}},[t._v(t._s(t.listData.cityText?t.listData.cityText:"请选择"))]),a("v-uni-image",{staticClass:"BI-rightArrow",attrs:{src:t.rightArrow}})],1)],1):t._e()])},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},aaa3:function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".editBasicInfor-content[data-v-7178e84a]{position:relative;width:100%;background:#f9f9f9}.editBasicInfor[data-v-7178e84a]{position:relative;width:100%;background:#f9f9f9;padding-bottom:5vh}.editBasicInfor-box[data-v-7178e84a]{position:relative;width:100%;margin-bottom:20vh}.topTips[data-v-7178e84a]{position:relative;width:100%;background:#f9f9f9;padding:0 4vw 0 4vw}.topTips>p[data-v-7178e84a]{position:relative;width:100%;font-family:PingFangSC-Light;font-size:3.2vw;color:#9b9b9b;line-height:8vw;text-align:center}.EBI-textArea[data-v-7178e84a]{position:relative;width:100%;background:#fff;padding:0 4vw 0 4vw}.textAarea-box[data-v-7178e84a]{position:relative;width:100%}.introduce2[data-v-7178e84a]{position:relative;width:96%;margin-left:4%}.MI-box[data-v-7178e84a]{position:relative;width:100%;padding:0 4vw 0 4vw;background:#fff}.MI-items[data-v-7178e84a]{position:relative;width:100%}.MI-left-EBI[data-v-7178e84a]{position:relative;width:21%;height:15vw}.MI-left-EBI>img[data-v-7178e84a]{position:relative;width:2vw;height:2vw;float:left;top:5.5vw;margin-right:1vw;left:0;display:inline-block}.MI-left-EBI>p[data-v-7178e84a]{position:absolute;font-family:PingFangSC-Light;font-size:3.733vw;color:#2e2e30;line-height:15vw;margin-left:4vw}.MI-right[data-v-7178e84a]{position:relative;width:79%;height:100%;overflow:hidden;text-overflow:ellipsis;text-align:left}.right-Box-MI[data-v-7178e84a]{position:relative;width:100%;margin-top:%?24?%}.img-MI[data-v-7178e84a]{position:relative;width:90%}.EBI-img-MI[data-v-7178e84a]{width:100%!important}.arrow-img-MI[data-v-7178e84a]{position:relative;width:10%}.arrow-img-MI>img[data-v-7178e84a]{position:relative;width:2vw;height:2vw;margin-top:6.5vw;float:right}.perInfoItemR[data-v-7178e84a]{width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-family:PingFangSC-Regular;font-size:3.733vw;color:#3c3c3f;letter-spacing:0;\r\n\t/* height: 15vw; */padding:5vw 0;\r\n\t/* margin: 5vw 0; */line-height:5vw;text-align:right;margin-right:1vw;float:left}.intro-MI[data-v-7178e84a]{font-family:PingFangSC-Regular;font-size:3.733vw;color:#d2d2d2;letter-spacing:0;text-align:right;line-height:15vw}.intro-MI2[data-v-7178e84a]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-family:PingFangSC-Regular;font-size:3.733vw;color:#3c3c3f;letter-spacing:0;text-align:right;line-height:15vw}.BIF-bottom[data-v-7178e84a]{position:fixed;width:100%;\r\n\t/* padding: 0vw 4vw 0vw 4vw; */bottom:0;z-index:105;background:hsla(0,0%,100%,.9);box-shadow:0 -1px 0 0 #f5f5f5;background:#fff}.BIF-btn[data-v-7178e84a]{position:relative;width:100%;background:#02c2a2;border-radius:2px;font-family:PingFangSC-Regular;font-size:3.733vw;color:#fff;text-align:center;letter-spacing:0;line-height:12vw}.reset-bsp-I[data-v-7178e84a]{position:relative;width:50%}.reset-box[data-v-7178e84a]{position:relative;width:100%}.reset-box>p[data-v-7178e84a]{position:relative;font-family:PingFangSC-Regular;font-size:3.733vw;color:#2e2e30;letter-spacing:0;line-height:12vw;text-align:center}.confirm-bsp-I[data-v-7178e84a]{position:relative;width:50%}.confirm-box[data-v-7178e84a]{position:relative;width:100%;background:#02c2a2}.confirm-box>p[data-v-7178e84a]{position:relative;font-family:PingFangSC-Regular;font-size:3.733vw;color:#fff;letter-spacing:0;line-height:12vw;text-align:center}",""])},af14:function(t,i,a){"use strict";a.r(i);var e=a("c7a5"),n=a("f041");for(var s in n)"default"!==s&&function(t){a.d(i,t,function(){return n[t]})}(s);a("7e29");var o=a("2877"),r=Object(o["a"])(n["default"],e["a"],e["b"],!1,null,"7178e84a",null);i["default"]=r.exports},c7a5:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"editBasicInfor-content"},[a("div",{staticClass:"editBasicInfor"},[a("div",{staticClass:"editBasicInfor-box"},[a("div",{staticClass:"MI-box"},[a("div",{staticClass:"MI-items"},[a("div",{staticClass:"MI-left-EBI left"},[a("img",{staticClass:"img",attrs:{src:t.xing,alt:""}}),a("p",{},[t._v("选择地区")])]),a("div",{staticClass:"MI-right right"},[a("div",{staticClass:"right-Box-MI"},[a("provinceCity",{attrs:{column:"3",value:t.listData.paramsPC.text},on:{clickCity:function(i){arguments[0]=i=t.$handleEvent(i),t.clickCity.apply(void 0,arguments)}}})],1)]),a("div",{staticClass:"clear"}),a("div",{staticClass:"line"})]),a("div",{staticClass:"MI-items"},[a("div",{staticClass:"MI-left-EBI left"},[a("img",{staticClass:"img",attrs:{src:t.xing,alt:""}}),a("p",{},[t._v("详细地址")])]),a("div",{staticClass:"MI-right right"},[a("div",{staticClass:"right-Box-MI"},[a("div",{staticClass:"img-MI EBI-img-MI left"},[a("v-uni-view",{staticClass:"BI-text-right"},[a("wInput",{attrs:{placeholder:t.i18n.defaultText.defaul_input},model:{value:t.info.idaddress,callback:function(i){t.$set(t.info,"idaddress",i)},expression:"info.idaddress"}})],1)],1),a("div",{staticClass:"arrow-img-MI left"})])]),a("div",{staticClass:"clear"})])])])]),a("div",{staticClass:"BIF-bottom"},[a("div",{staticClass:"reset-bsp-I left"},[a("div",{staticClass:"reset-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickReset.apply(void 0,arguments)}}},[a("p",{},[t._v("取消")])])]),a("div",{staticClass:"confirm-bsp-I right"},[a("div",{staticClass:"confirm-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickSaveAddress.apply(void 0,arguments)}}},[a("p",{},[t._v("保存")])])]),a("div",{staticClass:"clear"})])])},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},cb01:function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".BI-text-right[data-v-7c1135e3]{position:relative;width:100%;margin-top:%?44?%;margin-bottom:%?44?%}.BI-picker[data-v-7c1135e3]{position:relative;font-family:PingFang-SC-Medium;font-size:%?28?%;color:#d2d2d2;line-height:%?80?%;margin-left:%?24?%;text-align:right;padding-right:%?24?%;padding-top:0}.BI-pickeraa[data-v-7c1135e3]{position:relative;font-family:PingFang-SC-Medium;font-size:%?28?%;color:#d2d2d2;line-height:%?80?%;margin-left:%?-10?%;padding-right:%?24?%;padding-top:0}.BI-pickers[data-v-7c1135e3]{position:relative;font-family:PingFang-SC-Medium;font-size:%?28?%;color:#d2d2d2;line-height:%?80?%;margin-left:%?24?%;text-align:left;padding-right:%?24?%;padding-top:0}.BI-pickered[data-v-7c1135e3]{color:#2e2e30!important}.BI-rightArrow[data-v-7c1135e3]{position:absolute;width:%?24?%;height:%?24?%;right:0;top:%?28?%}",""])},cc97:function(t,i,a){"use strict";var e=a("3b14"),n=a.n(e);n.a},d6e8:function(t,i,a){"use strict";a.r(i);var e=a("d73e"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);i["default"]=n.a},d73e:function(t,i,a){"use strict";(function(t){var e=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("f499"));a("c5f6");var s={data:function(){return{rightArrow:this.Static+"mbcImg/publish/rightArrow.png",listData:{multiIndex:[0,0,0],multiArray:{province:[],city:[],county:[]},cityText:"",province:{index:0,text:"",pcode:""},city:{index:0,text:"",ccode:""},county:{index:0,text:"",tcode:""},showPCT:{ptext:"",ctext:"",ttext:""},paramsPCT:{cityText:"",pcode:"",ccode:"",tcode:""}}}},props:["bgColor","marginArea","textAlignArea","value","column","iShowLength","pickerBg"],created:function(){this.column=Number(this.column),t.log(this.column,"------------------this.column前台传过来要显示几列-------------------"),this.listData.multiArray.province=this.province,(this.column>1||-1===this.column||-2==this.column)&&(this.listData.multiArray.city=this.city[0]),3!==this.column&&-1!==this.column&&-2!=this.column||(this.listData.multiArray.county=this.county[0][0]),t.log(this.province,this.city,this.county),this.listData.cityText=this.value},computed:{},methods:{columnChange:function(i){var a=this;t.log(i,"------------------------e---------------------"),t.log("修改的列为："+i.detail.column+"，值为："+(0,n.default)(i.detail)),this.listData.multiIndex[i.detail.column]=i.detail.value;var e=i.detail.column,s=i.detail.value;t.log(e,s,"--------------------------------------------"),0===e?(t.log("用户修改省份"),this.province.map(function(i,e){String(e)===String(s)&&(t.log(i,"------------------items,省份----------------------"),a.listData.province.index=s)}),(this.column>1||-1==this.column||-2==this.column)&&this.city.map(function(i,e){String(e)===String(s)&&(t.log(i,"与当前省份联动的城市"),a.listData.multiArray.city=i)}),(this.column>2||-1==this.column||-2==this.column)&&this.county.map(function(i,e){String(e)===String(s)&&(t.log(i,"与当前城市联动的区县"),a.listData.multiArray.county=i[0])})):1===e?(t.log(this.county,"---------------对应的区县--------------"),this.city.map(function(i,e){String(e)===String(a.listData.province.index)&&(t.log(i,"------------第二列滑动，获取所在省份中所有的城市------------"),i.map(function(i,e){String(e)===String(s)&&(t.log(i,"---------------第二列滑动，获取滑动所在的位置 哪个城市------------"),a.listData.city.index=s)}))}),(this.column>2||-1===this.column||-2==this.column)&&this.county.map(function(i,e){String(e)===String(a.listData.province.index)&&(t.log(i,"与当前城市联动的区县数组"),a.listData.multiArray.county=i[s])})):2===e&&t.log("用户修改区县")},clickPC:function(i){t.log("picker发送选择改变，携带值为",i.target.value);var a=i.target.value[0],e=i.target.value[1]||0,n=i.target.value[2]||0;this.listData.showPCT.ptext=this.province[a].name,this.listData.paramsPCT.pcode=this.province[a].value,this.listData.showPCT.ctext=this.city[a][e].name,this.listData.paramsPCT.ccode=this.city[a][e].value,this.listData.showPCT.ttext=this.county[a][e][n].name,this.listData.paramsPCT.tcode=this.county[a][e][n].value,t.log(this.listData.showPCT.ptext+"-"+this.listData.showPCT.ctext+"-"+this.listData.showPCT.ttext),t.log(this.listData.paramsPCT.pcode+"-"+this.listData.paramsPCT.ccode+"-"+this.listData.paramsPCT.pcode),1===this.column?(t.log(1),this.listData.cityText=this.listData.showPCT.ptext):2===this.column?(t.log(2),this.listData.cityText=this.listData.showPCT.ptext+"-"+this.listData.showPCT.ctext):-1===this.column?(t.log(-1),this.listData.cityText=this.listData.showPCT.ptext+"-"+this.listData.showPCT.ctext+"-"+this.listData.showPCT.ttext):-2==this.column?(t.log(-2),this.listData.cityText=this.listData.showPCT.ptext+"-"+this.listData.showPCT.ctext):(t.log(3),this.listData.cityText=this.listData.showPCT.ptext+"-"+this.listData.showPCT.ctext+"-"+this.listData.showPCT.ttext),this.listData.paramsPCT.cityText=this.listData.cityText,this.$emit("clickCity",this.listData.paramsPCT)}}};i.default=s}).call(this,a("5a52")["default"])},f041:function(t,i,a){"use strict";a.r(i);var e=a("1dec"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);i["default"]=n.a},f739:function(t,i,a){var e=a("aaa3");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("25c4e403",e,!0,{sourceMap:!1,shadowMode:!1})}}]);