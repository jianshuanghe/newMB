(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{3362:function(e,t,a){"use strict";a.r(t);var o=a("ceb9"),r=a.n(o);for(var u in o)"default"!==u&&function(e){a.d(t,e,function(){return o[e]})}(u);t["default"]=r.a},"405b":function(e,t,a){"use strict";a.r(t);var o=a("3362");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("817c");var u,n,p=a("2877"),i=Object(p["a"])(o["default"],u,n,!1,null,null,null);t["default"]=i.exports},"817c":function(e,t,a){"use strict";var o=a("ce88"),r=a.n(o);r.a},b269:function(e,t,a){"use strict";(function(e){a("ad90"),a("921b");var t=k(a("66fd")),o=k(a("405b")),r=k(a("2c8e")),u=k(a("4b88")),n=k(a("fef1")),p=a("906d"),i=a("d5fc"),l=a("acfb"),d=a("a5bf"),c=a("09c7"),f=a("4f82"),s=a("b099"),y=a("7086"),m=a("83d8"),g=a("e499"),b=a("12de"),v=a("47d8"),h=a("d5cf"),S=a("cd60"),w=a("2367"),O=a("18ae"),P=a("c8c2"),U=a("08ac"),D=a("aaaf"),T=a("d08d"),A=a("ba9d"),I=a("7fcc");function k(e){return e&&e.__esModule?e:{default:e}}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.forEach(function(t){N(e,t,a[t])})}return e}function N(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default.use(r.default),t.default.config.productionTip=!1,t.default.prototype.$store=u.default,t.default.prototype.api1=p.api1,t.default.prototype.api2=p.api2,t.default.prototype.api3=p.api3,t.default.prototype.endParams=i.endParams,t.default.prototype.isWeiXin=l.isWeiXin,t.default.prototype.pageNums=d.pageNums,t.default.prototype.dateTime=c.dateTime,t.default.prototype.Static=f.Static,t.default.prototype.dImg=f.dImg,t.default.prototype.origin=f.origin,t.default.prototype.landRegistra=s.landRegistra,t.default.prototype.getDate=y.getDate,t.default.prototype.returnDateNum=m.returnDateNum,t.default.prototype.generateUUID=g.generateUUID,t.default.prototype.keyText=b.keyText,t.default.prototype.getSystemInfo=v.getSystemInfo,t.default.prototype.VwVhToPx=h.VwVhToPx,t.default.prototype.newGuid=S.newGuid,t.default.prototype.scrollTitleChange=w.scrollTitleChange,t.default.prototype.mergeBasicData=O.mergeBasicData,t.default.prototype.urlCrypto=P.urlCrypto,t.default.prototype.madeParams=U.madeParams,t.default.prototype.platformAccount=D.platformAccount,t.default.prototype.focusStore=T.focusStore,t.default.prototype.shareEachPage=A.shareEachPage,t.default.prototype.resetURL=I.resetURL,t.default.prototype.$backgroundAudioData={playing:!1,playTime:0,formatedPlayTime:"00:00:00"},o.default.mpType="app";var C=new r.default({locale:"zh_CN",messages:n.default});t.default.prototype._i18n=C;var R=new t.default(j({i18n:C,store:u.default},o.default));e(R).$mount()}).call(this,a("6e42")["createApp"])},ce88:function(e,t,a){},ceb9:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(t){if(console.log(e(t,"---------------dasdsadsa------------"," at App.vue:5")),a.getStorageSync("UUID")&&a.getStorageSync("UUID")===t.query.uuid){var o={token:t.query.token,user:{id:Number(t.query.userId)}};a.setStorageSync("landRegist",JSON.stringify(o))}this.getSystemInfo(),this.generateUUID(),console.log(e("App Launch"," at App.vue:17")),plus.screen.lockOrientation("portrait-primary"),a.request({url:"https://uniapp.dcloud.io/update",data:{appid:plus.runtime.appid,version:plus.runtime.version,imei:plus.device.imei},success:function(t){if(console.log(e("success",t," at App.vue:33")),200==t.statusCode&&t.data.isUpdate){var o="iOS"===plus.os.name?t.data.iOS:t.data.Android;a.showModal({title:"更新提示",content:t.data.note?t.data.note:"是否选择更新",success:function(e){e.confirm&&plus.runtime.openURL(o)}})}}})},onShow:function(){},onHide:function(){console.log(e("App Hide"," at App.vue:55"))}};t.default=o}).call(this,a("0de9")["default"],a("6e42")["default"])}},[["b269","common/runtime","common/vendor"]]]);