(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/myCompany/personAndCompany/Opinion/OpinionList/Opinion-feedback"],{2316:function(e,o,t){},"5aa2":function(e,o,t){"use strict";var n=t("2316"),i=t.n(n);i.a},7941:function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement;e._self._c},i=[];t.d(o,"a",function(){return n}),t.d(o,"b",function(){return i})},"8c30":function(e,o,t){"use strict";t.r(o);var n=t("7941"),i=t("d591d");for(var s in i)"default"!==s&&function(e){t.d(o,e,function(){return i[e]})}(s);t("5aa2");var l=t("2877"),a=Object(l["a"])(i["default"],n["a"],n["b"],!1,null,null,null);o["default"]=a.exports},d591d:function(e,o,t){"use strict";t.r(o);var n=t("e8ba"),i=t.n(n);for(var s in n)"default"!==s&&function(e){t.d(o,e,function(){return n[e]})}(s);o["default"]=i.a},e8ba:function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=function(){return t.e("components/common/imageUpload/imageUploadMore").then(t.bind(null,"f79c"))},i=function(){return Promise.all([t.e("common/vendor"),t.e("components/common/Evaluating/components/myIssue")]).then(t.bind(null,"3751"))},s={data:function(){return{txtVal:0,desc:"",remnane:0,phone:"",listData:{imageData:[],serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload"},logo1:"",logo2:"",logo3:"",logo4:"",logo5:"",xing:0,problem:[],ind:"",selectedItem:[],nums:1}},components:{imageUploadMore:n,Evaluating:i},computed:{i18n:function(){return this.$t("Mypersonal")}},created:function(){this.getproblem()},methods:{sub:function(){var o=this;if(0===this.xing)return e.showToast({title:"请至少选择一课星",icon:"none",duration:1e3}),!1;if(0===this.selectedItem.length)return e.showToast({title:"请至少选择一个标签",icon:"none",duration:1e3}),!1;if(""===this.desc)return e.showToast({title:"请描述您的问题",icon:"none",duration:1e3}),!1;if(this.phone&&!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.phone))return e.showToast({title:"电话格式有误，请重填",icon:"none",duration:1e3}),!1;if(e.getStorageSync("landRegist")){var t=JSON.parse(e.getStorageSync("landRegist"));console.log(t.user.id);var n={userId:t.user.id,img001:this.logo1,img002:this.logo2,img003:this.logo3,img004:this.logo4,img005:this.logo5,phone:this.phone,feedbackNum:this.xing,context:this.desc,backTypes:this.selectedItem};e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/userFeedBack",data:n,method:"POST",header:{Authorization:"Bearer "+t.token},success:function(t){e.hideLoading(),console.log(t.data),o.$emit("nums",o.nums)},fail:function(o){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o,"网络繁忙，请稍后")}})}},getproblem:function(){var o=this;if(e.getStorageSync("landRegist")){var t=JSON.parse(e.getStorageSync("landRegist"));console.log(t.user.id),e.showLoading({title:"加载中"}),e.request({url:this.api2+"/rest-rp/userFeedBack/types",method:"GET",header:{Authorization:"Bearer "+t.token},success:function(t){e.hideLoading(),o.problem=t.data.content,console.log(o.problem),o.problem.forEach(function(e){o.$set(e,"hiden",!1)}),console.log(o.problem)},fail:function(o){e.hideLoading(),e.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),console.log(o,"网络繁忙，请稍后")}})}},Choices:function(e){if(e.hiden){e.hiden=!1;var o=this.selectedItem.indexOf(e.id);this.selectedItem.splice(o,1),console.log(this.selectedItem)}else!e.hiden&&this.selectedItem.length<5&&(e.hiden=!0,this.selectedItem.push(e.id),console.log(this.selectedItem))},send:function(e){this.xing=e,console.log(this.xing,"分数")},descInput:function(){var e=this.desc.length;this.remnane=1+e},addImage:function(e){console.log(e,"添加图片"),e.allImages&&(this.logo1=e.allImages[0].imgName,this.logo2=e.allImages[1].imgName,this.logo3=e.allImages[2].imgName,this.logo4=e.allImages[3].imgName,this.logo5=e.allImages[4].imgName,console.log(this.logo1),console.log(this.logo2),console.log(this.logo3),console.log(this.logo4),console.log(this.logo5))},deleteImage:function(e,o){console.log(e,"删除图片"),console.log(this.logo,"删除后的数组")}}};o.default=s}).call(this,t("5486")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/myCompany/personAndCompany/Opinion/OpinionList/Opinion-feedback-create-component',
    {
        'modules/myCompany/personAndCompany/Opinion/OpinionList/Opinion-feedback-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("8c30"))
        })
    },
    [['modules/myCompany/personAndCompany/Opinion/OpinionList/Opinion-feedback-create-component']]
]);                
