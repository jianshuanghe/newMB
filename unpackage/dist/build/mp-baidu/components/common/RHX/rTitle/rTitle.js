(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/rTitle/rTitle"],{"09a6":function(e,t,o){"use strict";o.r(t);var n=o("6b20"),i=o("8e49");for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);o("312e");var l=o("2877"),s=Object(l["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"312e":function(e,t,o){"use strict";var n=o("da73"),i=o.n(n);i.a},"6b20":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return i})},"8e49":function(e,t,o){"use strict";o.r(t);var n=o("d67c"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=i.a},d67c:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return o.e("components/common/RHX/inputBox/inputBox").then(o.bind(null,"2179"))},i=function(){return o.e("components/common/RHX/textareaBox/textareaBox").then(o.bind(null,"1701"))},a={components:{inputBox:n,textareaBox:i},props:["dataList","itemsData","rPadding","indexNum","disabled","isShowOne","valueOne","keyNameOne","typeOne","rPaddingTwo","placeholderOne","placeholderStyleOne","placeholderClassOne","focusOne","cursorOne","adjustPositionOne","maxlengthOne","tColorOne","tFontSizeOne","tLineHeightOne","tTAlignOne","tWidthOne","tHeightOne","tPaddingOne","tBGOne","tBorderOne","tBStyleOne","tLineYSHow","tSortSHow","isShowTwo","valueTwo","keyNameTwo","typeTwo","placeholderTwo","placeholderStyleTwo","placeholderClassTwo","focusTwo","cursorTwo","adjustPositionTwo","tMaxNumShow","maxlengthTwo","tFontSizeTwo","tColorTwo","autoHeightTwo","tTAlignTwo","tWidthTwo","tHeightTwo","tPaddingTwo","tTMarginTwo","tLineHeightTwo","tBGTwo","tBorderTwo","tBStyleTwo","tMinHeightTwo","rfontWeight","rbackground","rfontFamily","rfontFamilyTwo","rfontWeightTwo"],data:function(){return{isInputShow:!0,isTextAreaShow:!0,valueOneText:this.valueOne,valueTwoText:this.valueTwo,dataLists:this.dataList}},created:function(){this.inputOrTextAreaShow(this.disabled),console.log(this.tColorTwo,"-------------tColorTwo------------")},watch:{valueOne:{handler:function(e,t){console.log(e,t,"--------------------------------------监听valueOne变化---------------------------------------"),this.valueOneText=e},deep:!0},valueTwo:{handler:function(e,t){console.log(e,t,"--------------------------------------监听valueTwo变化---------------------------------------"),this.valueTwoText=e},deep:!0},dataList:{handler:function(e,t){console.log(e,t,"--------------------------------------dataList---------------------------------------"),this.dataLists=e},deep:!0},disabled:{handler:function(e,t){console.log(e,t,"--------------------------------------监听但图片变化---------------------------------------"),this.inputOrTextAreaShow(e)},deep:!0}},methods:{inputOrTextAreaShow:function(e){console.log("此方法根据disabled判断当前输入框或者输入区书否显示"),!0===e&&""===this.valueOneText?this.isInputShow=!1:this.isInputShow=!0,!0===e&&""===this.valueTwoText?this.isTextAreaShow=!1:this.isTextAreaShow=!0},tapInput:function(e){console.log(e,"一级标题操作返回数据"),this.valueOneText=e,console.log(this.valueOneText,this.valueTwoText,"----------------this.valueOneText, this.valueTwoText---------------"),this.$emit("tap-index",this.indexNum),this.$emit("tap-Title",[this.valueOneText,this.valueTwoText])},tabTextArea:function(e){console.log(e,"二级标题操作返回数据"),this.valueTwoText=e,this.$emit("tap-index",this.indexNum),console.log(this.valueOneText,this.valueTwoText,"----------------this.valueOneText, this.valueTwoText---------------"),this.$emit("tap-Title",[this.valueOneText,this.valueTwoText])}}};t.default=a},da73:function(e,t,o){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/rTitle/rTitle-create-component',
    {
        'components/common/RHX/rTitle/rTitle-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("09a6"))
        })
    },
    [['components/common/RHX/rTitle/rTitle-create-component']]
]);
