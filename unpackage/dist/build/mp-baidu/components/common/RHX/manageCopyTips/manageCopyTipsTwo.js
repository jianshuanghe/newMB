(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/manageCopyTips/manageCopyTipsTwo"],{8566:function(t,s,i){"use strict";var a=i("d5bc"),o=i.n(a);o.a},"936f":function(t,s,i){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a=n(i("0e61")),o=n(i("cb81")),e=n(i("03cd"));function n(t){return t&&t.__esModule?t:{default:t}}var l=function(){return i.e("components/common/button/savePreviewBtn").then(i.bind(null,"5151"))},d=function(){return i.e("components/common/RHX/moduleAddList/moduleAddList").then(i.bind(null,"4f7b"))},h={props:["dataList","itemsData","limitNum","udgeLastEmpty","isCopyData","isManageShow","manageCopyShow","manageType","moduleTempList"],data:function(){return{copy:a.default,manage:o.default,TipsShow:!0,moduleAddListShow:!1,manageSuccess:e.default,manageShow:this.manageCopyShow,manageTypes:this.manageType,dataLists:this.dataList,itemsDatas:{}}},components:{savePreviewBtn:l,moduleAddList:d},computed:{i18n:function(){return this.$t("navigation")},manageShowS:function(){return!0===this.manageShow&&0!==this.dataList.length||(!0!==this.manageShow||0!==this.dataList.length)&&(!1!==this.manageShow&&void 0)}},watch:{dataList:{handler:function(t,s){if(console.log(t,s,"--------------------------------------监听数管理变化---------------------------------------"),this.dataLists=t,0===this.dataLists.length){var i={};for(var a in console.log(this.itemsDatas,"深拷贝下的第一组数据"),this.itemsDatas)console.log(a),i[a]=this.keyText(a);i.defaultAdd=!0,this.dataLists.push(i),console.log("只展示复制按钮"),this.TipsShow=!1,this.$emit("tap-ManageCopyTips",[this.dataLists,!1])}else 1===this.dataLists.lenght&&!0===this.dataLists[0].defaultAdd?(console.log("只展示复制按钮"),this.TipsShow=!1):this.dataLists[0].defaultAdd||(console.log("展示全部按钮"),this.TipsShow=!0)},deep:!0},manageCopyShow:{handler:function(t,s){console.log(t,s,"--------------------------------------监听展示变化---------------------------------------"),this.manageShow=t},deep:!0},manageType:{handler:function(t,s){console.log(t,s,"--------------------------------------监听变化---------------------------------------"),this.manageTypes=t},deep:!0}},created:function(){console.log(this.moduleTempList,"可添加的新样式！"),this.itemsDatas=JSON.parse(JSON.stringify(this.itemsData))},methods:{clickManage:function(){console.log("触发管理项目按钮"),this.manageShow=!0,this.$emit("tap-ManageCopyTips",[this.dataLists,this.manageShow])},clickCopy:function(){console.log("触发复制按钮"),this.changeData("copy")},clickSuccess:function(){console.log("触发完成按钮"),this.manageShow=!1,this.$emit("tap-ManageCopyTips",[this.dataLists,this.manageShow])},clickCopyForbid:function(){console.log("管理状态下不可复制"),t.showToast({title:"管理状态下不可复制！",icon:"none",duration:500})},clickAddForbid:function(){console.log("管理状态下不可新增样式"),t.showToast({title:"管理状态下不可新增样式！",icon:"none",duration:500})},tapModuleAdd:function(t){console.log(t,"点击添加模块按钮"),this.moduleAddListShow=!0,this.isAnimateModule=!1,console.log(this.isAnimateModule,"----------------------isAnimateModule---------------------")},tapCancel:function(t){console.log("点击picker取消"),this.moduleAddListShow=!1},tapPreserve:function(t){console.log(t,"点击picker确定"),console.log(this.dataLists),this.moduleAddListShow=!1,this.dataLists=this.dataLists.concat(t.dataList),console.log(JSON.parse(JSON.stringify(this.dataLists)),"添加样式后的数组"),this.$emit("tap-ManageCopyTips",[JSON.parse(JSON.stringify(this.dataLists)),this.manageShow])},upDataList:function(t){console.log(t,"先添加的模块数据"),this.dataList.push(t),this.merge=!0,this.moduleShow=!1,this.$emit("tab-ModuleList",[this.dataList,this.merge,this.moduleShow])},tapPreserveBotttomFixed:function(){this.$emit("tap-PreserveBotttom")},changeData:function(s){console.log("用户操作数据统一返回值");var i={};if(console.log(this.itemsDatas,"深拷贝下的第一组数据"),"delete"===s)console.log("删除组件");else if("copy"===s){if(console.log("复制组件"),0===this.dataLists.length)console.log("判断当前为空数组状态"),this.manageShow=!0;else if(this.dataLists.length>0)if(this.limitNum){if(!(Number(this.dataLists.length)<Number(this.limitNum)))return void t.showToast({title:"不能添加了！",icon:"none",duration:500});if(console.log("判断当前为非空数组状态"),console.log(this.dataLists[this.dataLists.length-1]),this.dataLists.map(function(t,s){t.defaultAdd&&delete t.defaultAdd}),i=JSON.parse(JSON.stringify(this.dataLists[this.dataLists.length-1])),!1===this.isCopyData)for(var a in i)console.log(a,"----------------key--------------"),"minCount"!==a&&"maxCount"!==a&&"money"!==a||(i[a]=0);if(!0===this.udgeLastEmpty&&(console.log("判断上一项数据最小值不能为空"),0===this.dataLists[this.dataLists.length-1].minCount))return void t.showToast({title:"未填写最小起批量或者填写的最小起批量不符合规则！",icon:"none",duration:1e3});this.dataLists.push(i)}else console.log("判断当前为非空数组状态"),console.log(this.dataLists[this.dataLists.length-1]),this.dataLists.map(function(t,s){t.defaultAdd&&delete t.defaultAdd}),i=JSON.parse(JSON.stringify(this.dataLists[this.dataLists.length-1])),this.dataLists.push(i);console.log(i,"----------------添加items-------------------")}this.$emit("tap-ManageCopyTips",[this.dataLists,this.manageShow]),i={}}}};s.default=h}).call(this,i("5486")["default"])},"964d":function(t,s,i){"use strict";i.r(s);var a=i("936f"),o=i.n(a);for(var e in a)"default"!==e&&function(t){i.d(s,t,function(){return a[t]})}(e);s["default"]=o.a},bfa3:function(t,s,i){"use strict";i.r(s);var a=i("ea36"),o=i("964d");for(var e in o)"default"!==e&&function(t){i.d(s,t,function(){return o[t]})}(e);i("8566");var n=i("2877"),l=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,null,null);s["default"]=l.exports},d5bc:function(t,s,i){},ea36:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=(t._self._c,this.VwVhToPx(2,"vh"));t.$mp.data=Object.assign({},{$root:{g0:i}})},o=[];i.d(s,"a",function(){return a}),i.d(s,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/manageCopyTips/manageCopyTipsTwo-create-component',
    {
        'components/common/RHX/manageCopyTips/manageCopyTipsTwo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("bfa3"))
        })
    },
    [['components/common/RHX/manageCopyTips/manageCopyTipsTwo-create-component']]
]);
