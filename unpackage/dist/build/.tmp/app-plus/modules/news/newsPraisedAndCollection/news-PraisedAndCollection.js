(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/news/newsPraisedAndCollection/news-PraisedAndCollection"],{"0369":function(n,t,e){"use strict";e.r(t);var i=e("adc8"),o=e("8f2b");for(var l in o)"default"!==l&&function(n){e.d(t,n,function(){return o[n]})}(l);e("ddfe");var r=e("2877"),a=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},"787a":function(n,t,e){"use strict";(function(n,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("2f62");function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.forEach(function(t){r(n,t,e[t])})}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var a=function(){return Promise.all([e.e("common/vendor"),e.e("components/mbbo/quickBtn/quickBtn")]).then(e.bind(null,"2de2"))},s=function(){return Promise.all([e.e("common/vendor"),e.e("components/mbbo/navigation/navigation")]).then(e.bind(null,"5a67"))},u=function(){return e.e("modules/news/newsPraisedAndCollection/PraisedAndCollection/news-Collection").then(e.bind(null,"3b46"))},c=function(){return e.e("modules/news/newsPraisedAndCollection/PraisedAndCollection/news-Praised").then(e.bind(null,"6232"))},d={data:function(){return{list:[],num:0,Message:[]}},components:{quickBtn:a,navigation:s,Collection:u,Praised:c},computed:l({i18n:function(){return this.$t("News")}},(0,o.mapGetters)(["GET_HOME","QUICKNAVCO"])),onLoad:function(t){this.id=t.id,console.log(n(this.id," at modules\\news\\newsPraisedAndCollection\\news-PraisedAndCollection.vue:49")),"1"===this.id?(i.setNavigationBarTitle({title:this.i18n.title2}),this.num=0):"2"===this.id&&(i.setNavigationBarTitle({title:this.i18n.title3}),this.num=1),this.list.push(this.i18n.title2),this.list.push(this.i18n.title3)},created:function(){this.shareEachPage()},methods:{gotoGood:function(t){this.num=t,console.log(n(t," at modules\\news\\newsPraisedAndCollection\\news-PraisedAndCollection.vue:70")),0===t?i.setNavigationBarTitle({title:this.i18n.title2}):1===t&&i.setNavigationBarTitle({title:this.i18n.title3})}}};t.default=d}).call(this,e("0de9")["default"],e("6e42")["default"])},"8f2b":function(n,t,e){"use strict";e.r(t);var i=e("787a"),o=e.n(i);for(var l in i)"default"!==l&&function(n){e.d(t,n,function(){return i[n]})}(l);t["default"]=o.a},adc8:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o})},b4a6:function(n,t,e){"use strict";(function(n){e("ad90"),e("921b");i(e("66fd"));var t=i(e("0369"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},ddfe:function(n,t,e){"use strict";var i=e("f319"),o=e.n(i);o.a},f319:function(n,t,e){}},[["b4a6","common/runtime","common/vendor"]]]);