(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"5e36":function(n,e,t){"use strict";t.r(e);var o=t("722c");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("5f07");var c,a,r=t("2877"),i=Object(r["a"])(o["default"],c,a,!1,null,null,null);e["default"]=i.exports},"5f07":function(n,e,t){"use strict";var o=t("c3e2"),u=t.n(o);u.a},"722c":function(n,e,t){"use strict";t.r(e);var o=t("c5cc"),u=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,function(){return o[n]})}(c);e["default"]=u.a},c3e2:function(n,e,t){},c5cc:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(e){if(console.log(e,"---------------dasdsadsa------------"),n.getStorageSync("UUID")&&n.getStorageSync("UUID")===e.query.uuid){var t={token:e.query.token,user:{id:Number(e.query.userId)}};n.setStorageSync("landRegist",JSON.stringify(t))}this.getSystemInfo(),this.generateUUID(),console.log("App Launch")},onShow:function(){},onHide:function(){console.log("App Hide")}};e.default=t}).call(this,t("543d")["default"])}},[["7b81","common/runtime","common/vendor"]]]);