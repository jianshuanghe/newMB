(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/textareaBox/textareaBox"],{1364:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},props:["value","type","placeholder","placeholderStyle","placeholderClass","disabled","focus","cursor","adjustPosition","maxlength","tTWidth","tTHeight","tTMinHeight","tTTAlign","tTPadding","tTBG","tTBorder","tTBStyle","maxNumShow"],data:function(){return{tTBGs:"",tTBorders:"",tTBStyles:"",valueText:this.value}},created:function(){},watch:{value:{handler:function(t,e){console.log(t,e,"--------------------------------------监听valueText变化---------------------------------------"),this.valueText=t},deep:!0}},methods:{onInput:function(t){console.log(t,"textAarea返回值"),this.valueText=t.detail.value},onFocus:function(t){console.log(t,"触发焦点，进入编辑模式"),this.tTBGs=this.tTBG,this.tTBorders=this.tTBorder,this.tTBStyles=this.tTBStyle},onBlur:function(t){console.log(t,"textAarea返回值"),this.valueText=t.detail.value,this.$emit("tab-TextArea",this.valueText),console.log(t,"失去焦点，进入预览模式"),this.tTBGs="",this.tTBorders="",this.tTBStyles=""},onConfirm:function(t){console.log(t,"textAarea返回值"),this.valueText=t.detail.value,this.$emit("tab-TextArea",this.valueText),console.log(t,"失去焦点，进入预览模式"),this.tTBGs="",this.tTBorders="",this.tTBStyles=""}}};e.default=n},"4a6f":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},8187:function(t,e,o){"use strict";o.r(e);var n=o("1364"),a=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e["default"]=a.a},"85a5":function(t,e,o){"use strict";var n=o("dba2"),a=o.n(n);a.a},"9bdf":function(t,e,o){"use strict";o.r(e);var n=o("4a6f"),a=o("8187");for(var l in a)"default"!==l&&function(t){o.d(e,t,function(){return a[t]})}(l);o("85a5");var s=o("2877"),i=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},dba2:function(t,e,o){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/textareaBox/textareaBox-create-component',
    {
        'components/common/RHX/textareaBox/textareaBox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9bdf"))
        })
    },
    [['components/common/RHX/textareaBox/textareaBox-create-component']]
]);                
