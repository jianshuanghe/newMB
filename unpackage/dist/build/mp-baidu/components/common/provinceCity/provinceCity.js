(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/provinceCity/provinceCity"],{"33d9":function(t,i,o){"use strict";var s=o("7551"),e=o.n(s);e.a},7551:function(t,i,o){},"85b5":function(t,i,o){"use strict";var s=function(){var t=this,i=t.$createElement,o=(t._self._c,Number(t.column)),s=Number(t.column),e=Number(t.column),n=Number(t.column);t.$mp.data=Object.assign({},{$root:{m0:o,m1:s,m2:e,m3:n}})},e=[];o.d(i,"a",function(){return s}),o.d(i,"b",function(){return e})},b372:function(t,i,o){"use strict";o.r(i);var s=o("dc2b"),e=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(i,t,function(){return s[t]})}(n);i["default"]=e.a},dc2b:function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=o("2f62");function e(t){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{},s=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),s.forEach(function(i){n(t,i,o[i])})}return t}function n(t,i,o){return i in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,t}var a={data:function(){return{rightArrow:this.Static+"mbcImg/publish/rightArrow.png",listData:{multiIndex:[0,0,0],multiArray:{province:[],city:[],county:[]},cityText:"",province:{index:0,text:"",pcode:""},city:{index:0,text:"",ccode:""},county:{index:0,text:"",tcode:""},showPCT:{ptext:"",ctext:"",ttext:""},paramsPCT:{cityText:"",pcode:"",ccode:"",tcode:""}}}},props:["bgColor","marginArea","textAlignArea","value","column","iShowLength","pickerBg"],created:function(){this.column=Number(this.column),console.log(this.column,"------------------this.column前台传过来要显示几列-------------------"),this.listData.multiArray.province=this.province,(this.column>1||-1===this.column||-2==this.column)&&(this.listData.multiArray.city=this.city[0]),3!==this.column&&-1!==this.column&&-2!=this.column||(this.listData.multiArray.county=this.county[0][0]),console.log(this.province,this.city,this.county),this.listData.cityText=this.value},computed:e({},(0,s.mapGetters)(["PERSONCENTER","IMGDATA","GET_MY"])),methods:{columnChange:function(t){var i=this;console.log(t,"------------------------e---------------------"),console.log("修改的列为："+t.detail.column+"，值为："+JSON.stringify(t.detail)),this.listData.multiIndex[t.detail.column]=t.detail.value;var o=t.detail.column,s=t.detail.value;console.log(o,s,"--------------------------------------------"),0===o?(console.log("用户修改省份"),this.province.map(function(t,o){String(o)===String(s)&&(console.log(t,"------------------items,省份----------------------"),i.listData.province.index=s)}),(this.column>1||-1==this.column||-2==this.column)&&this.city.map(function(t,o){String(o)===String(s)&&(console.log(t,"与当前省份联动的城市"),i.listData.multiArray.city=t)}),(this.column>2||-1==this.column||-2==this.column)&&this.county.map(function(t,o){String(o)===String(s)&&(console.log(t,"与当前城市联动的区县"),i.listData.multiArray.county=t[0])})):1===o?(console.log(this.county,"---------------对应的区县--------------"),this.city.map(function(t,o){String(o)===String(i.listData.province.index)&&(console.log(t,"------------第二列滑动，获取所在省份中所有的城市------------"),t.map(function(t,o){String(o)===String(s)&&(console.log(t,"---------------第二列滑动，获取滑动所在的位置 哪个城市------------"),i.listData.city.index=s)}))}),(this.column>2||-1===this.column||-2==this.column)&&this.county.map(function(t,o){String(o)===String(i.listData.province.index)&&(console.log(t,"与当前城市联动的区县数组"),i.listData.multiArray.county=t[s])})):2===o&&console.log("用户修改区县")},clickPC:function(t){console.log("picker发送选择改变，携带值为",t.target.value);var i=t.target.value[0],o=t.target.value[1]||0,s=t.target.value[2]||0;this.listData.showPCT.ptext=this.province[i].name,this.listData.paramsPCT.pcode=this.province[i].value,this.listData.showPCT.ctext=this.city[i][o].name,this.listData.paramsPCT.ccode=this.city[i][o].value,this.listData.showPCT.ttext=this.county[i][o][s].name,this.listData.paramsPCT.tcode=this.county[i][o][s].value,console.log(this.listData.showPCT.ptext+"-"+this.listData.showPCT.ctext+"-"+this.listData.showPCT.ttext),console.log(this.listData.paramsPCT.pcode+"-"+this.listData.paramsPCT.ccode+"-"+this.listData.paramsPCT.pcode),1===this.column?(console.log(1),this.listData.cityText=this.listData.showPCT.ptext):2===this.column?(console.log(2),this.listData.cityText=this.listData.showPCT.ptext+"-"+this.listData.showPCT.ctext):-1===this.column?(console.log(-1),this.listData.cityText=this.listData.showPCT.ptext+"-"+this.listData.showPCT.ctext+"-"+this.listData.showPCT.ttext):-2==this.column?(console.log(-2),this.listData.cityText=this.listData.showPCT.ptext+"-"+this.listData.showPCT.ctext):(console.log(3),this.listData.cityText=this.listData.showPCT.ptext+"-"+this.listData.showPCT.ctext+"-"+this.listData.showPCT.ttext),this.listData.paramsPCT.cityText=this.listData.cityText,this.$emit("clickCity",this.listData.paramsPCT)}}};i.default=a},f782:function(t,i,o){"use strict";o.r(i);var s=o("85b5"),e=o("b372");for(var n in e)"default"!==n&&function(t){o.d(i,t,function(){return e[t]})}(n);o("33d9");var a=o("2877"),c=Object(a["a"])(e["default"],s["a"],s["b"],!1,null,null,null);i["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/provinceCity/provinceCity-create-component',
    {
        'components/common/provinceCity/provinceCity-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("f782"))
        })
    },
    [['components/common/provinceCity/provinceCity-create-component']]
]);
