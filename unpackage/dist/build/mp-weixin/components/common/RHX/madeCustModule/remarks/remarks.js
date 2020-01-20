(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/madeCustModule/remarks/remarks"],{"55ae":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return e.e("components/common/RHX/rTitle/rTitle").then(e.bind(null,"57e2"))},i={props:["disabled","itemsData","indexNum","dataList"],data:function(){return{dataLists:this.dataList}},components:{rTitle:a},computed:{},watch:{dataList:{handler:function(t,n){console.log(t,n,"--------------------------------------dataList---------------------------------------"),this.dataLists=t},deep:!0}},created:function(){},mounted:function(){},methods:{tapTitleTwo:function(t){console.log(t),this.dataLists.content=t[1],this.$emit("tap-StyleSelectionList",this.dataLists)}}};n.default=i},"6c62":function(t,n,e){"use strict";var a=e("af7c"),i=e.n(a);i.a},af7c:function(t,n,e){},afe9:function(t,n,e){"use strict";e.r(n);var a=e("55ae"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},b1f3:function(t,n,e){"use strict";e.r(n);var a=e("cfda"),i=e("afe9");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("6c62");var u=e("2877"),c=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},cfda:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/madeCustModule/remarks/remarks-create-component',
    {
        'components/common/RHX/madeCustModule/remarks/remarks-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b1f3"))
        })
    },
    [['components/common/RHX/madeCustModule/remarks/remarks-create-component']]
]);                
