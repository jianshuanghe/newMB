(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/inputBox/inputBox"],{"2c4d":function(t,n,i){"use strict";i.r(n);var u=i("e5b6"),e=i.n(u);for(var o in u)"default"!==o&&function(t){i.d(n,t,function(){return u[t]})}(o);n["default"]=e.a},"2d9c":function(t,n,i){"use strict";i.r(n);var u=i("75e7"),e=i("2c4d");for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);i("bedb");var s=i("2877"),l=Object(s["a"])(e["default"],u["a"],u["b"],!1,null,null,null);n["default"]=l.exports},"721f":function(t,n,i){},"75e7":function(t,n,i){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},e=[];i.d(n,"a",function(){return u}),i.d(n,"b",function(){return e})},bedb:function(t,n,i){"use strict";var u=i("721f"),e=i.n(u);e.a},e5b6:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={components:{},props:["value","type","isPassword","placeholder","placeholderStyle","placeholderClass","disabled","cursorSpacing","focus","confirmType","confirmHold","cursor","adjustPosition","maxlength","inputColor","inputFontSize","inputLineHeight","inputLine","inputWidth","inputHeight","inputTAlign","inputPadding","inputBG","inputBorder","inputBStyle","indexNum","inputBoxMargin","inputLineStyle","inputLineYShow","inputSortShow"],data:function(){return{inputMargin:"1px",inputBGs:"",inputBorders:"",inputBStyles:"",valueText:this.value}},created:function(){this.inputBoxMargin&&(this.inputMargin=this.inputBoxMargin)},watch:{value:{handler:function(t,n){console.log(t,n,"--------------------------------------监听valueText变化---------------------------------------"),this.valueText=t},deep:!0}},methods:{onInput:function(t){console.log(t,"input返回值")},onFocus:function(t){!0!==this.disabled&&(console.log(t,"input返回值"),this.inputBoxMargin||(this.inputMargin="",this.inputBGs=this.inputBG,this.inputBorders=this.inputBorder,this.inputBStyles=this.inputBStyle))},onBlur:function(n){console.log(n,"input返回值"),this.valueText=n.detail.value,this.$emit("tap-Input",this.valueText),this.inputBoxMargin||(this.inputMargin="1px",this.inputBGs="",this.inputBorders="",this.inputBStyles=""),t.pageScrollTo({scrollTop:0,duration:0})},onConfirm:function(n){console.log(n,"input返回值"),this.valueText=n.detail.value,this.$emit("tap-Input",this.valueText),this.inputBoxMargin||(this.inputMargin="1px",this.inputBGs="",this.inputBorders="",this.inputBStyles=""),t.pageScrollTo({scrollTop:0,duration:0})}}};n.default=i}).call(this,i("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/inputBox/inputBox-create-component',
    {
        'components/common/RHX/inputBox/inputBox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2d9c"))
        })
    },
    [['components/common/RHX/inputBox/inputBox-create-component']]
]);                