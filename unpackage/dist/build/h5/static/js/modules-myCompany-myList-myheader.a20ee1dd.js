(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-myCompany-myList-myheader"],{"15a8":function(e,t,a){var i=a("5e92");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("0b10d814",i,!0,{sourceMap:!1,shadowMode:!1})},"2ab3":function(e,t,a){"use strict";(function(e){var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("cebc")),s=i(a("2de2")),o=i(a("5a67")),r=i(a("2ec6")),l=a("2f62"),d={data:function(){return{right:this.Static+"my/right.png",Listdata:[],imageData:"",logo:"",logos:"",serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload",list:[],name:""}},components:{quickBtn:s.default,navigation:o.default,imageUploadOne:r.default},computed:(0,n.default)({i18n:function(){return this.$t("Mypersonal")}},(0,l.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),onLoad:function(){uni.setNavigationBarTitle({title:this.i18n.title1})},watch:{GET_MY:{handler:function(t,a){e.log(t,a,"header----list"),this.list=t.headers,this.name=this.list.nickname},deep:!0}},created:function(){this.list=this.GET_MY.headers,this.shareEachPage(),e.log(this.list,"myheader"),this.getmy()},methods:{getmy:function(){var t=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));e.log(a.user.id);uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+a.user.id,method:"GET",header:{Authorization:"Bearer "+a.token},success:function(e){uni.hideLoading(),t.list=e.data.content,t.$store.commit("setMy",t.list)},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),e.log(t,"网络繁忙，请稍后")}})}},deleteImage:function(t){e.log(t,"删除图片"),this.logo=""},addImage:function(t){e.log(t,"添加图片"),t.allImages&&(this.logo=t.allImages[0].imgName,this.logos=t.allImages[0].imgUrl,e.log(this.logo))},gotoPersonal:function(){e.log("简单介绍"),uni.navigateTo({url:"/modules/myCompany/myList/myheader-list/myheader-Personal"})},gotointerested:function(){e.log("感兴趣的行业"),uni.navigateTo({url:"/modules/myCompany/myList/myheader-list/myheader-interested"})},gotoKeyword:function(){e.log("采购关键词"),uni.navigateTo({url:"/modules/myCompany/myList/myheader-list/myheader-Keyword"})},gotoPurchase:function(){e.log("供应关键词"),uni.navigateTo({url:"/modules/myCompany/myList/myheader-list/KeyWords"})},Preservation:function(){var t=this;if(uni.getStorageSync("landRegist")){var a=JSON.parse(uni.getStorageSync("landRegist"));e.log(a.user.id);var i={nickname:this.name,headImg:this.logo};uni.showLoading({title:"加载中"}),uni.request({url:this.api2+"/rest-rp/user/"+a.user.id,data:i,method:"POST",header:{Authorization:"Bearer "+a.token},success:function(a){uni.hideLoading(),e.log(a.data),t.GET_MY.headers.nickname=t.name,t.logo?t.GET_MY.headers.headImg=t.logos:t.GET_MY.headers.headImg=t.list.headImg,t.$store.commit("setMy",t.GET_MY.headers),uni.navigateBack({})},fail:function(t){uni.hideLoading(),uni.showToast({title:"网络繁忙，请稍后",icon:"none",duration:1e3}),e.log(t,"网络繁忙，请稍后")}})}}}};t.default=d}).call(this,a("5a52")["default"])},"2ec6":function(e,t,a){"use strict";a.r(t);var i=a("a747"),n=a("cad6");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("4a8e");var o=a("2877"),r=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"485daf7e",null);t["default"]=r.exports},"37c8":function(e,t,a){"use strict";a.r(t);var i=a("2ab3"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},"4a8e":function(e,t,a){"use strict";var i=a("15a8"),n=a.n(i);n.a},"5e92":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".imageUploadContainer[data-v-485daf7e]{float:right}.dragging[data-v-485daf7e]{-webkit-transform:scale(1.2);transform:scale(1.2)}.imageUploadList[data-v-485daf7e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.imageItem[data-v-485daf7e],.imageUpload[data-v-485daf7e]{width:%?80?%;height:%?80?%;border-radius:50%\n}.imageUploads[data-v-485daf7e]{width:%?300?%;height:%?80?%;border-radius:50%\n}.imageDel[data-v-485daf7e]{position:relative;left:%?60?%;bottom:%?110?%;background-color:rgba(0,0,0,.5);width:%?36?%;text-align:center;line-height:%?34?%;border-radius:50%;color:#fff;font-size:%?30?%;padding-bottom:%?2?%}.imageDels[data-v-485daf7e]{position:relative;left:%?194?%;bottom:%?240?%;background-color:rgba(0,0,0,.5);width:%?36?%;text-align:center;line-height:%?34?%;border-radius:50%;color:#fff;font-size:%?30?%;padding-bottom:%?2?%}.imageItem uni-image[data-v-485daf7e],.moveImage[data-v-485daf7e]{width:%?80?%;height:%?80?%;border-radius:%?8?%}.imageUpload[data-v-485daf7e]{line-height:%?86?%;text-align:center;font-size:%?150?%;color:#d9d9d9;border:1px solid #d9d9d9;border-radius:%?8?%;opacity:0;z-index:50}.imageUploads[data-v-485daf7e]{line-height:%?86?%;text-align:center;font-size:%?150?%;color:#d9d9d9;border:1px solid #d9d9d9;border-radius:%?8?%;opacity:0;z-index:50}.moveImage[data-v-485daf7e]{position:absolute}",""])},"83b5":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"myheader"},[a("v-uni-view",{staticClass:"my-title"},[a("div",{staticClass:"quickBtn-Fd left"},[a("quickBtn")],1),a("div",{staticClass:"search-Fd left"},[e._v(e._s(e.i18n.title2))])]),a("v-uni-view",{staticClass:"tian"}),a("v-uni-view",{staticClass:"myheader-Tips"},[e._v(e._s(e.i18n.title5))]),a("v-uni-view",{staticClass:"myheader-portrait"},[a("v-uni-view",{staticClass:"myheader-portrait-con"},[a("v-uni-view",{staticClass:"myheader-portrait-con-zi"},[e._v(e._s(e.i18n.title6))]),a("v-uni-view",{staticClass:"right BI-items-right"},[a("v-uni-view",{staticClass:"BI-text-right"},[e.logo?e._e():a("v-uni-image",{staticClass:"ziti",attrs:{src:e.list.headImg}}),a("v-uni-view",{staticClass:"Img-logo"},[a("v-uni-view",{staticClass:"Img-Upload"},[a("imageUploadOne",{attrs:{"server-url":e.serverUrl,limit:"1",images:1},on:{delete:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteImage.apply(void 0,arguments)},add:function(t){arguments[0]=t=e.$handleEvent(t),e.addImage.apply(void 0,arguments)}},model:{value:e.imageData,callback:function(t){e.imageData=t},expression:"imageData"}})],1)],1),a("v-uni-image",{staticClass:"BI-rightArrow",attrs:{src:e.right}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"myheader-portrait"},[a("v-uni-view",{staticClass:"myheader-portrait-con"},[a("v-uni-view",{staticClass:"myheader-portrait-con-zi"},[e._v(e._s(e.i18n.title7))]),a("v-uni-view",{staticClass:"myheader-portrait-con-juti"},[a("v-uni-input",{attrs:{type:"text",placeholder:"请填写","placeholder-style":"color:#D2D2D2"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("v-uni-view",{staticClass:"myheader-portrait-con-img"},[a("v-uni-image",{attrs:{src:e.right}})],1)],1)],1),a("v-uni-view",{staticClass:"myheader-portrait"},[a("v-uni-view",{staticClass:"myheader-portrait-con",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.gotoPersonal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"myheader-portrait-con-zi"},[e._v(e._s(e.i18n.title8))]),a("v-uni-view",{staticClass:"myheader-portrait-con-juti"},[""===e.GET_MY.headers.content?a("span",{staticClass:"Pleasefillin"},[e._v(e._s(e.i18n.title4))]):e._e(),""!==e.GET_MY.headers.content?a("span",{staticClass:"Pleasefillins"},[e._v(e._s(e.GET_MY.headers.content))]):e._e()]),a("v-uni-view",{staticClass:"myheader-portrait-con-img"},[a("v-uni-image",{attrs:{src:e.right}})],1)],1)],1),a("v-uni-view",{staticClass:"myheader-portrait bott"},[a("v-uni-view",{staticClass:"myheader-portrait-con",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.gotoPurchase.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"myheader-portrait-con-zi"},[e._v("感兴趣的关键词")]),a("v-uni-view",{staticClass:"myheader-portrait-con-juti"},[0==e.GET_MY.headers.allKeys.length?a("span",{staticClass:"Pleasefillin"},[e._v(e._s(e.i18n.title4))]):e._e(),3==e.GET_MY.headers.allKeys.length||2==e.GET_MY.headers.allKeys.length||1==e.GET_MY.headers.allKeys.length?a("span",{staticClass:"Pleasefillins"},[e._v(e._s(e.GET_MY.headers.allKeys[0]))]):e._e(),2==e.GET_MY.headers.allKeys.length||3==e.GET_MY.headers.allKeys.length?a("span",{staticClass:"Pleasefillins"},[e._v("、"+e._s(e.GET_MY.headers.allKeys[1]))]):e._e(),3==e.GET_MY.headers.allKeys.length?a("span",{staticClass:"Pleasefillins"},[e._v("、"+e._s(e.GET_MY.headers.allKeys[2]))]):e._e(),e._l(e.GET_MY.headers.allKeys,function(t,i){return e.GET_MY.headers.allKeys.length>3?a("span",{key:i,staticClass:"Pleasefillins"},[e._v(e._s(t)+"、")]):e._e()})],2),a("v-uni-view",{staticClass:"myheader-portrait-con-img"},[a("v-uni-image",{attrs:{src:e.right}})],1)],1)],1),a("v-uni-view",{staticClass:"myheader-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.Preservation.apply(void 0,arguments)}}},[e._v(e._s(e.i18n.title11))]),e.QUICKNAVCO.show?a("navigation"):e._e()],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},"8a73":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".myheader[data-v-3af33d68]{width:100%;height:100%}.tian[data-v-3af33d68]{width:100%;height:%?88?%}.my-title[data-v-3af33d68]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-3af33d68]{width:5%;margin-left:%?38?%}.search-Fd[data-v-3af33d68]{position:relative;width:100%;text-align:center;line-height:%?88?%;font-size:%?28?%;color:#2e2e30}.myheader-Tips[data-v-3af33d68]{width:100%;height:%?64?%;font-size:%?24?%;color:#9b9b9b;text-align:center;line-height:%?64?%}.myheader-portrait[data-v-3af33d68]{width:100%;height:%?116?%;background:#fff}.myheader-portrait-con[data-v-3af33d68]{width:90%;height:100%;border-bottom:%?2?% solid #f5f5f5;margin:0 auto;position:relative}.myheader-portrait-con-zi[data-v-3af33d68]{width:30%;height:100%;line-height:%?118?%;font-size:%?28?%;color:#2e2e30;float:left}.myheader-portrait-con-img[data-v-3af33d68]{height:100%;width:%?18?%;position:absolute;right:0;top:0;line-height:%?116?%}.myheader-portrait-con-img>uni-image[data-v-3af33d68]{width:%?18?%;height:%?18?%}.myheader-portrait-con-juti[data-v-3af33d68]{width:45%;height:100%;float:right;margin-right:%?38?%;text-align:right;line-height:%?116?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.myheader-portrait-con-juti>uni-input[data-v-3af33d68]{width:100%;height:100%}.bott[data-v-3af33d68]{margin-top:%?20?%}.Pleasefillin[data-v-3af33d68]{color:#d2d2d2}.Pleasefillins[data-v-3af33d68]{color:#000}.myheader-btn[data-v-3af33d68]{width:90%;height:%?90?%;background:#02c2a2;margin:%?80?% auto auto auto;text-align:center;line-height:%?90?%;font-size:%?32?%;color:#fff}\n/* 图片 */.ziti[data-v-3af33d68]{position:absolute;right:%?40?%;width:%?80?%;height:%?80?%;border-radius:50%;top:%?-20?%;font-size:%?30?%}.BI-items-right[data-v-3af33d68]{position:relative;width:64%}.BI-text-right[data-v-3af33d68]{position:relative;width:100%;margin-top:%?44?%;margin-bottom:%?44?%}.BI-picker[data-v-3af33d68]{position:relative;font-family:PingFang-SC-Medium;font-size:%?28?%;color:#d2d2d2;overflow:hidden;text-overflow:clip;white-space:pre;word-break:keep-all;letter-spacing:0;padding:0;margin-top:%?44?%;margin-bottom:%?44?%;line-height:%?36?%;margin-left:%?24?%;text-align:right;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:right;padding-right:%?24?%;margin-left:0}.BI-pickered[data-v-3af33d68]{color:#2e2e30!important}.Img-Upload[data-v-3af33d68]{width:%?120?%;height:%?80?%;position:absolute;border-radius:50%;right:%?40?%;top:%?-20?%}.BI-picker-Img[data-v-3af33d68]{width:%?80?%;height:%?80?%;position:absolute;right:%?28?%;top:%?-20?%}.BI-rightArrow[data-v-3af33d68]{position:absolute;width:%?18?%;height:%?18?%;right:%?0?%;top:%?6?%}\n/* 图片 */",""])},a747:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"imageUploadContainer"},[a("v-uni-view",{staticClass:"imageUploadList"},[e._l(e.imageList,function(t,i){return 0==e.images?a("v-uni-view",{key:i,staticClass:"imageItem"},[a("v-uni-image",{class:{dragging:e.isDragging(i)},attrs:{src:t,draggable:"true","data-index":i},on:{touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.start.apply(void 0,arguments)},touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.move.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.stop.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}}),e.isShowDel?a("v-uni-view",{staticClass:"imageDel",attrs:{"data-index":i},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteImage.apply(void 0,arguments)}}},[e._v("x")]):e._e()],1):e._e()}),e._l(e.imageList,function(t,i){return 2==e.images?a("v-uni-view",{key:i,staticClass:"imageItem"},[a("v-uni-image",{class:{dragging:e.isDragging(i)},staticStyle:{width:"476upx",height:"208upx","margin-left":"-260upx","margin-top":"-82upx"},attrs:{src:t,draggable:"true","data-index":i},on:{touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.start.apply(void 0,arguments)},touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.move.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.stop.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}}),e.isShowDel?a("v-uni-view",{staticClass:"imageDels",attrs:{"data-index":i},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteImage.apply(void 0,arguments)}}},[e._v("x")]):e._e()],1):e._e()}),e._l(e.imageList,function(t,i){return 1==e.images?a("v-uni-view",{key:i,staticClass:"imageItem"},[a("v-uni-image",{class:{dragging:e.isDragging(i)},staticStyle:{"border-radius":"50%"},attrs:{src:t,draggable:"true","data-index":i},on:{touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.start.apply(void 0,arguments)},touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.move.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.stop.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}}),e.isShowDel?a("v-uni-view",{staticClass:"imageDel",attrs:{"data-index":i},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteImage.apply(void 0,arguments)}}},[e._v("x")]):e._e()],1):e._e()}),e.isShowAdd&&2!==e.images?a("v-uni-view",{staticClass:"imageUpload",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectImage.apply(void 0,arguments)}}},[e._v("+")]):e._e(),e.isShowAdd&&2==e.images?a("v-uni-view",{staticClass:"imageUploads",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectImage.apply(void 0,arguments)}}},[e._v("+")]):e._e()],2),e.showMoveImage?a("v-uni-image",{staticClass:"moveImage",style:{left:e.posMoveImageLeft,top:e.posMoveImageTop},attrs:{src:e.moveImagePath}}):e._e()],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},c61d:function(e,t,a){"use strict";a.r(t);var i=a("83b5"),n=a("37c8");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("cc85");var o=a("2877"),r=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"3af33d68",null);t["default"]=r.exports},cad6:function(e,t,a){"use strict";a.r(t);var i=a("f44b"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},cc85:function(e,t,a){"use strict";var i=a("e185"),n=a.n(i);n.a},e185:function(e,t,a){var i=a("8a73");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("6e18f0e3",i,!0,{sourceMap:!1,shadowMode:!1})},f44b:function(e,t,a){"use strict";(function(e){var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("795b"));a("ac6a"),a("5df3");var s,o=i(a("03eb"));e.log("引入H5图片压缩组件");var r={name:"robby-image-upload",props:["value","enableDel","enableAdd","enableDrag","serverUrl","formData","limit","fileKeyName","showUploadProgress","serverUrlDeleteImage","images"],data:function(){return{imageBasePos:{x0:-1,y0:-1,w:-1,h:-1},showMoveImage:!1,moveImagePath:"",moveLeft:0,moveTop:0,deltaLeft:0,deltaTop:0,dragIndex:null,targetImageIndex:null,imageList:[]}},onLoad:function(){this.imageList=this.value},computed:{posMoveImageLeft:function(){return this.moveLeft+"px"},posMoveImageTop:function(){return this.moveTop+"px"},isShowDel:function(){return!1!==this.enableDel},isShowAdd:function(){return!1!==this.enableAdd&&!(this.limit&&this.imageList.length>=this.limit)},isDragable:function(){return!1!==this.enableDrag}},methods:{selectImage:function(){s=this,s.imageList||(s.imageList=[]),e.log(s.serverUrl,"表示图片要上传到服务器"),uni.chooseImage({count:s.limit?s.limit-s.imageList.length:999,success:function(t){e.log(t,"上传图片");var a=t.tempFilePaths;if(s.limit){var i=s.limit-s.imageList.length;if(i<a.length)return void uni.showToast({title:"图片总数限制为"+s.limit+"张，当前还可以选"+i+"张",icon:"none",mask:!1,duration:2e3})}for(var r=function(t){var i=a[t];e.log("进入H5图片压缩"),(0,o.default)(i,{quality:.6}).then(function(t){e.log(t),i=t.base64,s.imageList.push(i)})},l=0;l<a.length;l++)r(l);if(s.serverUrl){var d=s.imageList.length-a.length,g=[],h=(s.fileKeyName&&s.fileKeyName,0),u=function(t){g.push(new n.default(function(i,n){var o=d+t;uni.uploadFile({url:s.serverUrl,fileType:"image",formData:s.formData,filePath:a[t],name:"file",success:function(t){if(200===t.statusCode){e.log(JSON.parse(t.data),"上传成功");var r={imgUrl:JSON.parse(t.data).httpUrl,imgName:JSON.parse(t.data).name};s.imageList[o]=r,e.log(s.imageList,"_self.imageList"),h++,s.showUploadProgress&&uni.showToast({title:"上传进度："+h+"/"+a.length,icon:"none",mask:!1,duration:1e3}),e.log("success to upload image: "+t.data),i("success to upload image:"+o)}else e.log("fail to upload image:"+t.data),n("failt to upload image:"+o)},fail:function(t){e.log("fail to upload image:"+t),n("failt to upload image:"+o)}})}))};for(l=0;l<a.length;l++)u(l);n.default.all(g).then(function(e){s.$emit("add",{currentImages:a,allImages:s.imageList}),s.$emit("input",s.imageList)})}else s.$emit("add",{currentImages:a,allImages:s.imageList}),s.$emit("input",s.imageList)}})},deleteImage:function(t){var a=t.currentTarget.dataset.index,i=this.imageList[a];this.imageList.splice(a,1),this.serverUrlDeleteImage&&uni.request({url:this.serverUrlDeleteImage,method:"GET",data:{imagePath:i},success:function(t){e.log(t.data)}}),this.$emit("delete",{currentImage:i,allImages:this.imageList}),this.$emit("input",this.imageList)},previewImage:function(t){var a=t.currentTarget.dataset.index;e.log(this.imageList,"预览的img");var i=[];this.imageList.map(function(e,t){i.push(e.imgUrl)}),uni.previewImage({current:i[a],indicator:"number",loop:"true",urls:i})},initImageBasePos:function(){var e=.024;s=this,uni.getSystemInfo({success:function(t){var a=t.screenWidth,i=Math.ceil(e*a),n=Math.ceil((a-2*i)/4);s.imageBasePos.x0=i,s.imageBasePos.w=n,s.imageBasePos.h=n}})},findOverlapImage:function(e,t){var a=Math.floor((e-this.imageBasePos.x0)/this.imageBasePos.w),i=Math.floor((t-this.imageBasePos.y0)/this.imageBasePos.h),n=4*i+a;return n},isDragging:function(e){return this.dragIndex===e},start:function(t){if(e.log(this.isDragable),this.isDragable){if(this.dragIndex=t.currentTarget.dataset.index,this.moveImagePath=this.imageList[this.dragIndex],this.showMoveImage=!0,-1===this.imageBasePos.y0){this.initImageBasePos();var a=Math.floor(this.dragIndex/4)*this.imageBasePos.h,i=t.currentTarget.offsetTop;this.imageBasePos.y0=i-a}this.moveLeft=t.target.offsetLeft,this.moveTop=t.target.offsetTop}},move:function(e){if(this.isDragable){var t=e.touches[0];this.targetImageIndex=this.findOverlapImage(t.clientX,t.clientY),0===this.deltaLeft&&(this.deltaLeft=t.clientX-this.moveLeft,this.deltaTop=t.clientY-this.moveTop),this.moveLeft=t.clientX-this.deltaLeft,this.moveTop=t.clientY-this.deltaTop}},stop:function(e){this.isDragable&&(null!==this.dragIndex&&null!==this.targetImageIndex&&(this.targetImageIndex<0&&(this.targetImageIndex=0),this.targetImageIndex>=this.imageList.length&&(this.targetImageIndex=this.imageList.length-1),this.dragIndex!==this.targetImageIndex&&(this.imageList[this.dragIndex]=this.imageList[this.targetImageIndex],this.imageList[this.targetImageIndex]=this.moveImagePath)),this.dragIndex=null,this.targetImageIndex=null,this.deltaLeft=0,this.deltaTop=0,this.showMoveImage=!1,this.$emit("input",this.imageList))}}};t.default=r}).call(this,a("5a52")["default"])}}]);