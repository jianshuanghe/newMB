(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/manageCopyTips/manageCopyTips"],{2491:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c},e=[];a.d(s,"a",function(){return i}),a.d(s,"b",function(){return e})},"3bef":function(t,s,a){},4877:function(t,s,a){"use strict";var i=a("3bef"),e=a.n(i);e.a},"5d08c":function(t,s,a){"use strict";a.r(s);var i=a("6fe4c"),e=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(s,t,function(){return i[t]})}(n);s["default"]=e.a},"5e17":function(t,s,a){"use strict";a.r(s);var i=a("2491"),e=a("5d08c");for(var n in e)"default"!==n&&function(t){a.d(s,t,function(){return e[t]})}(n);a("4877");var o=a("2877"),h=Object(o["a"])(e["default"],i["a"],i["b"],!1,null,null,null);s["default"]=h.exports},"6fe4c":function(t,s,a){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=function(){return a.e("components/common/button/savePreviewBtn").then(a.bind(null,"ec08"))},e={props:["dataList","itemsData","limitNum","udgeLastEmpty","isCopyData","isManageShow","manageCopyShow","manageType"],data:function(){return{copy:this.Static+"publish/createBusiness/copy.png",manage:this.Static+"publish/createBusiness/manage.png",TipsShow:!0,manageSuccess:this.Static+"publish/createBusiness/manageSuccess.png",manageShow:this.manageCopyShow,manageTypes:this.manageType,dataLists:this.dataList,itemsDatas:{}}},components:{savePreviewBtn:i},computed:{i18n:function(){return this.$t("navigation")},manageShowS:function(){return!0===this.manageShow&&0!==this.dataList.length||(!0!==this.manageShow||0!==this.dataList.length)&&(!1!==this.manageShow&&void 0)}},watch:{dataList:{handler:function(t,s){if(console.log(t,s,"--------------------------------------监听数管理变化---------------------------------------"),this.dataLists=t,0===this.dataLists.length){var a={};for(var i in console.log(this.itemsDatas,"深拷贝下的第一组数据"),this.itemsDatas)console.log(i),a[i]=this.keyText(i);a.defaultAdd=!0,this.dataLists.push(a),console.log("只展示复制按钮"),this.TipsShow=!1,this.$emit("tap-ManageCopyTips",[this.dataLists,!1])}else 1===this.dataLists.lenght&&!0===this.dataLists[0].defaultAdd?(console.log("只展示复制按钮"),this.TipsShow=!1):this.dataLists[0].defaultAdd||(console.log("展示全部按钮"),this.TipsShow=!0)},deep:!0},manageCopyShow:{handler:function(t,s){console.log(t,s,"--------------------------------------监听展示变化---------------------------------------"),this.manageShow=t},deep:!0},manageType:{handler:function(t,s){console.log(t,s,"--------------------------------------监听变化---------------------------------------"),this.manageTypes=t},deep:!0}},created:function(){this.itemsDatas=JSON.parse(JSON.stringify(this.itemsData))},methods:{clickManage:function(){console.log("触发管理项目按钮"),this.manageShow=!0,this.$emit("tap-ManageCopyTips",[this.dataLists,this.manageShow])},clickCopy:function(){console.log("触发复制按钮"),this.changeData("copy")},clickSuccess:function(){console.log("触发完成按钮"),this.manageShow=!1,this.$emit("tap-ManageCopyTips",[this.dataLists,this.manageShow])},clickCopyForbid:function(){console.log("管理状态下不可复制"),t.showToast({title:"管理状态下不可复制！",icon:"none",duration:500})},changeData:function(s){console.log("用户操作数据统一返回值");var a={};if(console.log(this.itemsDatas,"深拷贝下的第一组数据"),"delete"===s)console.log("删除组件");else if("copy"===s){if(console.log("复制组件"),0===this.dataLists.length)console.log("判断当前为空数组状态"),this.manageShow=!0;else if(this.dataLists.length>0)if(this.limitNum){if(!(Number(this.dataLists.length)<Number(this.limitNum)))return void t.showToast({title:"不能添加了！",icon:"none",duration:500});if(console.log("判断当前为非空数组状态"),console.log(this.dataLists[this.dataLists.length-1]),this.dataLists.map(function(t,s){t.defaultAdd&&delete t.defaultAdd}),a=JSON.parse(JSON.stringify(this.dataLists[this.dataLists.length-1])),!1===this.isCopyData)for(var i in a)console.log(i,"----------------key--------------"),"minCount"!==i&&"maxCount"!==i&&"money"!==i||(a[i]=0);if(!0===this.udgeLastEmpty&&(console.log("判断上一项数据最小值不能为空"),0===this.dataLists[this.dataLists.length-1].minCount))return void t.showToast({title:"未填写最小起批量或者填写的最小起批量不符合规则！",icon:"none",duration:1e3});this.dataLists.push(a)}else console.log("判断当前为非空数组状态"),console.log(this.dataLists[this.dataLists.length-1]),this.dataLists.map(function(t,s){t.defaultAdd&&delete t.defaultAdd}),a=JSON.parse(JSON.stringify(this.dataLists[this.dataLists.length-1])),this.dataLists.push(a);console.log(a,"----------------添加items-------------------")}this.$emit("tap-ManageCopyTips",[this.dataLists,this.manageShow]),a={}}}};s.default=e}).call(this,a("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/manageCopyTips/manageCopyTips-create-component',
    {
        'components/common/RHX/manageCopyTips/manageCopyTips-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5e17"))
        })
    },
    [['components/common/RHX/manageCopyTips/manageCopyTips-create-component']]
]);                
