(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-InstructionsPrice-Edit-instructions-Edit-instructions"],{"2f05":function(t,e,n){"use strict";(function(t){var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("cebc")),o=i(n("2de2")),s=i(n("5a67")),l=i(n("2a03")),d=i(n("91e7")),r=n("2f62"),g={data:function(){return{erweima:this.Static+"news/erweima.png",logo1:[],listData:{imageData:[],serverUrl:"https://img01.iambuyer.com/imgup/upLoad/fileUpload"}}},components:{quickBtn:o.default,navigation:s.default,rTitle:l.default,imageUploadMore:d.default},computed:(0,a.default)({i18n:function(){return this.$t("Howtoshow")}},(0,r.mapGetters)(["GET_HOME","QUICKNAVCO","GET_MY"])),mounted:function(){},onLoad:function(){uni.setNavigationBarTitle({title:this.i18n.product9})},methods:{tabTitle:function(e){t.log(e,"点击标题返回值----数组")},addImage:function(e){t.log(e,"添加图片"),e.allImages&&(this.logo1=e.allImages[0].imgName,t.log(this.logo1))},deleteImage:function(e,n){t.log(e,"删除图片"),this.logo1=[],t.log(this.logo1,"删除后的数组")}}};e.default=g}).call(this,n("5a52")["default"])},"2f99":function(t,e,n){"use strict";var i=n("2fc1"),a=n.n(i);a.a},"2fc1":function(t,e,n){var i=n("fcdb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("146f5f30",i,!0,{sourceMap:!1,shadowMode:!1})},"45f8":function(t,e,n){"use strict";var i=n("fd58"),a=n.n(i);a.a},"5b1b":function(t,e,n){"use strict";(function(t){var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("795b"));n("ac6a"),n("5df3");var o,s=i(n("f499")),l=i(n("03eb"));t.log("引入H5图片压缩组件");var d={name:"robby-image-upload",props:["value","enableDel","enableAdd","enableDrag","serverUrl","formData","limit","fileKeyName","showUploadProgress","typeImg"],data:function(){return{imageBasePos:{x0:-1,y0:-1,w:-1,h:-1},showMoveImage:!1,moveImagePath:"",moveLeft:0,moveTop:0,deltaLeft:0,deltaTop:0,dragIndex:null,targetImageIndex:null,imageList:[],close:this.Static+"common/deldat.png",jiaadd:this.Static+"my/jiaadd.png"}},mounted:function(){this.imageList=this.value,t.log(this.imageList,"-------------------this.imageList--mounted------------------")},computed:{posMoveImageLeft:function(){return this.moveLeft+"px"},posMoveImageTop:function(){return this.moveTop+"px"},isShowDel:function(){return!1!==this.enableDel},isShowAdd:function(){return!1!==this.enableAdd&&!(this.limit&&this.imageList.length>=this.limit)},isDragable:function(){return!1!==this.enableDrag}},watch:{imageList:{handler:function(t,e){this.imageData=JSON.parse((0,s.default)(t))},deep:!0}},methods:{selectImage:function(){o=this,o.imageList||(o.imageList=[]),uni.chooseImage({count:o.limit?o.limit-o.imageList.length:999,success:function(e){var n=e.tempFilePaths;if(o.limit){var i=o.limit-o.imageList.length;if(i<n.length)return void uni.showToast({title:"图片总数限制为"+o.limit+"张，当前还可以选"+i+"张",icon:"none",mask:!1,duration:2e3})}for(var d=function(e){var i=n[e];t.log("进入H5图片压缩"),(0,l.default)(i,{quality:.6}).then(function(e){t.log(e),i=e.base64,o.imageList.push(i)})},r=0;r<n.length;r++)d(r);if(o.serverUrl){var g=o.imageList.length-n.length,u=[],c=(o.fileKeyName&&o.fileKeyName,0),h=function(e){u.push(new a.default(function(i,a){var s=g+e;uni.showLoading({title:"加载中"}),uni.uploadFile({url:o.serverUrl,fileType:"image",formData:o.formData,filePath:n[e],name:"file",success:function(e){if(uni.hideLoading(),200===e.statusCode){t.log(JSON.parse(e.data),"上传成功");var l={imgUrl:JSON.parse(e.data).httpUrl,imgName:JSON.parse(e.data).name};t.log(typeof l),o.imageList[s]=l,t.log(o.imageList,"_self.imageList"),c++,o.showUploadProgress&&uni.showToast({title:"上传进度："+c+"/"+n.length,icon:"none",mask:!1,duration:1e3}),t.log("success to upload image: "+e.data),i("success to upload image:"+s)}else uni.hideLoading(),t.log("fail to upload image:"+e.data),a("failt to upload image:"+s)},fail:function(e){uni.hideLoading(),t.log("fail to upload image:"+e),a("failt to upload image:"+s)}})}))};for(r=0;r<n.length;r++)h(r);a.default.all(u).then(function(t){o.$emit("add",{currentImages:n,allImages:JSON.parse((0,s.default)(o.imageList))}),o.$emit("input",o.imageList)})}else o.$emit("add",{currentImages:n,allImages:o.imageList}),o.$emit("input",o.imageList)}})},deleteImage:function(t){var e=t.currentTarget.dataset.index,n=this.imageList[e];this.imageList.splice(e,1),this.$emit("delete",{currentImage:n,allImages:JSON.parse((0,s.default)(this.imageList))}),this.$emit("input",this.imageList)},previewImage:function(e){var n=e.currentTarget.dataset.index;t.log(this.imageList,"预览的img");var i=[];this.imageList.map(function(t,e){i.push(t.imgUrl)}),uni.previewImage({current:i[n],indicator:"number",loop:"true",urls:i})},initImageBasePos:function(){var t=.024;o=this,uni.getSystemInfo({success:function(e){var n=e.screenWidth,i=Math.ceil(t*n),a=Math.ceil((n-2*i)/4);o.imageBasePos.x0=i,o.imageBasePos.w=a,o.imageBasePos.h=a}})},findOverlapImage:function(t,e){var n=Math.floor((t-this.imageBasePos.x0)/this.imageBasePos.w),i=Math.floor((e-this.imageBasePos.y0)/this.imageBasePos.h),a=4*i+n;return a},isDragging:function(t){return this.dragIndex===t},start:function(e){if(t.log(this.isDragable),this.isDragable){if(this.dragIndex=e.currentTarget.dataset.index,this.moveImagePath=this.imageList[this.dragIndex],this.showMoveImage=!0,-1===this.imageBasePos.y0){this.initImageBasePos();var n=Math.floor(this.dragIndex/4)*this.imageBasePos.h,i=e.currentTarget.offsetTop;this.imageBasePos.y0=i-n}this.moveLeft=e.target.offsetLeft,this.moveTop=e.target.offsetTop}},move:function(t){if(this.isDragable){var e=t.touches[0];this.targetImageIndex=this.findOverlapImage(e.clientX,e.clientY),0===this.deltaLeft&&(this.deltaLeft=e.clientX-this.moveLeft,this.deltaTop=e.clientY-this.moveTop),this.moveLeft=e.clientX-this.deltaLeft,this.moveTop=e.clientY-this.deltaTop}},stop:function(t){this.isDragable&&(null!==this.dragIndex&&null!==this.targetImageIndex&&(this.targetImageIndex<0&&(this.targetImageIndex=0),this.targetImageIndex>=this.imageList.length&&(this.targetImageIndex=this.imageList.length-1),this.dragIndex!==this.targetImageIndex&&(this.imageList[this.dragIndex]=this.imageList[this.targetImageIndex],this.imageList[this.targetImageIndex]=this.moveImagePath)),this.dragIndex=null,this.targetImageIndex=null,this.deltaLeft=0,this.deltaTop=0,this.showMoveImage=!1,this.$emit("input",this.imageList))}}};e.default=d}).call(this,n("5a52")["default"])},"78c0":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* --------------------------------------------默认样式start------------------------------------------ */.imageUploadContainer[data-v-3ab5d15f]{padding:%?10?% %?5?%;margin:%?10?% %?5?%}.dragging[data-v-3ab5d15f]{-webkit-transform:scale(0);transform:scale(0)}.imageUploadList[data-v-3ab5d15f]{width:100%;min-height:%?148?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.imageUploadList uni-view[data-v-3ab5d15f]:first-of-type{margin-left:0}.imageUpload[data-v-3ab5d15f]{width:%?148?%;\n\t/* line-height: 150upx;\n\ttext-align: center;\n\tfont-size: 150upx;\n\tcolor: #D9D9D9;\n\tborder: 1px solid #D9D9D9;\n\tborder-radius: 8upx; */height:%?148?%;margin-left:%?12?%;margin-top:%?-10?%}.imageUpload>uni-image[data-v-3ab5d15f]{width:100%;height:100%}.imageItem[data-v-3ab5d15f]{width:%?148?%;width:%?148?%;margin-right:%?12?%}.imageDel[data-v-3ab5d15f]{position:relative;left:%?130?%;bottom:%?180?%;width:%?32?%;height:%?32?%;\n\t/* background-color: rgba(0,0,0,0.5);\n\twidth: 36upx;\n\theight: 27upx;\n\ttext-align: center;\n\tline-height: 14upx;\n\tborder-radius: 50%;\n\tcolor: white!important;\n\tfont-size: 30upx; */padding-bottom:%?2?%}.imageDel>uni-image[data-v-3ab5d15f]{width:100%;height:100%}.imageItem>uni-image[data-v-3ab5d15f],.moveImage[data-v-3ab5d15f]{width:%?148?%;height:%?148?%;border-radius:%?8?%}.moveImage[data-v-3ab5d15f]{position:absolute}.uni-swiper[data-v-3ab5d15f]{height:100%!important}\n/* .imageDel{\n\twidth: 32upx;\n\theight: 30upx;\n\tborder-radius: 50%;\n\tline-height: 26upx;\n\tmargin-top: 4upx;\n\tmargin-left: 4upx;\n} */\n/* ---------------------------------------------采购样式------------------------------------------------------- */.imageUpload1[data-v-3ab5d15f]{width:%?220?%!important;height:%?220?%!important;margin-left:%?12?%;line-height:%?220?%!important;text-align:center;font-size:%?80?%!important;color:#d9d9d9;border:0!important;border-radius:%?8?%;background:#f9f9f9}.imageUpload1 .text[data-v-3ab5d15f]{position:absolute;font-family:PingFangSC-Regular;font-size:%?20?%;color:#bdbdbd;letter-spacing:0;text-align:center;line-height:%?20?%;top:%?156?%;width:%?220?%}.imageItem1[data-v-3ab5d15f]{width:%?208?%;width:%?208?%;margin-right:%?12?%;margin-bottom:%?34?%}.imageDel1[data-v-3ab5d15f]{position:relative;left:%?120?%;bottom:%?185?%;background-color:rgba(0,0,0,.5);width:%?36?%;height:%?27?%;text-align:center;line-height:%?14?%;border-radius:50%;color:#fff!important;font-size:%?30?%;padding-bottom:%?2?%}.imageItem1 uni-image[data-v-3ab5d15f],.moveImage1[data-v-3ab5d15f]{width:%?208?%;height:%?208?%;border-radius:%?8?%}.moveImage1[data-v-3ab5d15f]{position:absolute}.uni-swiper1[data-v-3ab5d15f]{height:100%!important}.imageDel1[data-v-3ab5d15f]{width:%?32?%;height:%?30?%;border-radius:50%;line-height:%?26?%;margin-top:%?-50?%;margin-left:%?64?%!important}\n/* --------------------------------------------------说明书样式start------------------------------------------------------- */\n/*---------------------------------------------------二维码样式-------------------------------------------------------------*/.imageUpload10[data-v-3ab5d15f]{width:%?314?%!important;height:%?314?%!important;margin-left:%?12?%;line-height:%?262?%!important;text-align:center;font-size:%?80?%!important;color:#d9d9d9;border:0!important;border-radius:%?8?%;background:#f9f9f9;margin-top:%?-18?%}.text10[data-v-3ab5d15f]{position:absolute;font-family:PingFangSC-Regular;font-size:%?20?%;color:#bdbdbd;letter-spacing:0;text-align:center;line-height:%?20?%;top:%?212?%;width:%?304?%}.imageDel10[data-v-3ab5d15f]{position:relative;left:%?280?%;bottom:%?348?%;background-color:rgba(0,0,0,.5);width:%?36?%;height:%?36?%;text-align:center;line-height:%?30?%;border-radius:50%;color:#fff!important;font-size:%?30?%;padding-bottom:%?2?%}\n/*---------------------------------------------------二维码样式-------------------------------------------------------------*/",""])},"91e7":function(t,e,n){"use strict";n.r(e);var i=n("e0f1"),a=n("9972");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("45f8");var s=n("2877"),l=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"3ab5d15f",null);e["default"]=l.exports},9972:function(t,e,n){"use strict";n.r(e);var i=n("5b1b"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},a86a:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"Edit-instructions"},[n("v-uni-view",{staticClass:"my-title"},[n("div",{staticClass:"quickBtn-Fd left"},[n("quickBtn")],1),n("v-uni-view",{staticClass:"myproduct-title"},[t._v(t._s(t.i18n.product9))])],1),n("v-uni-view",{staticClass:"tian"}),n("v-uni-view",{staticClass:"Edit-instructions-A"},[n("rTitle",{attrs:{disabled:!1,isShowOne:!0,valueOne:"",typeOne:"number",placeholderOne:"公司名称",placeholderStyleOne:"placeholderStyle",placeholderClassOne:"placeholderClass",focusOne:!1,cursorOne:0,adjustPositionOne:"adjustPosition",maxlengthOne:"maxlength",tTAlignOne:"center",tWidthOne:"",tHeightOne:"6.4vw",tPaddingOne:"1.333vw",tBGOne:"rgba(212, 253, 247, 0.21)",tBorderOne:"1px solid #02C2A2",tBStyleOne:"dashed",isShowTwo:!0,valueTwo:"",typeTwo:"text",placeholderTwo:"请输入商家详情",placeholderStyleTwo:"placeholderStyle",placeholderClassTwo:"placeholderClass",focusTwo:!1,cursorTwo:0,adjustPositionTwo:"adjustPosition",tMaxNumShow:!1,maxlengthTwo:100,tTAlignTwo:"center",tWidthTwo:"",tHeightTwo:"17.333vw",tMinHeightTwo:"8.333vw",tPaddingTwo:"1.333vw",tBGTwo:"rgba(212, 253, 247, 0.21)",tBorderTwo:"1px solid #02C2A2",tBStyleTwo:"dashed"},on:{"tap-Title":function(e){arguments[0]=e=t.$handleEvent(e),t.tabTitle.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"Edit-instructions-B"},[n("v-uni-view",{staticClass:"Edit-instructions-Ba"},[n("v-uni-view",{staticClass:"Edit-instructions-Bb"},[n("v-uni-image",{attrs:{src:t.erweima}})],1),n("v-uni-view",{staticClass:"Edit-instructions-Bc"},[n("div",{staticClass:"MI-items"},[n("div",{staticClass:"EBI-uploadImg"},[n("v-uni-view",{},[n("imageUploadMore",{staticClass:"imhae",attrs:{"server-url":t.listData.serverUrl,limit:"1",typeImg:10},on:{delete:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteImage.apply(void 0,arguments)},add:function(e){arguments[0]=e=t.$handleEvent(e),t.addImage.apply(void 0,arguments)}},model:{value:t.listData.imageData,callback:function(e){t.$set(t.listData,"imageData",e)},expression:"listData.imageData"}})],1)],1)])])],1),n("v-uni-view",{staticClass:"Edit-instructions-Bd"},[t._v("长按识别图中二维码"),n("br"),t._v("若无法识别，请复制链接在微信中打开")])],1),n("v-uni-view",{staticClass:"Edit-instructions-C"},[n("v-uni-view",{staticClass:"Edit-instructions-Ca"},[t._v("联系电话:")]),n("v-uni-view",{staticClass:"Edit-instructions-Cb"},[n("rTitle",{staticStyle:{float:"left"},attrs:{disabled:!1,isShowOne:!0,valueOne:"",typeOne:"text",placeholderOne:"联系电话",placeholderStyleOne:"placeholderStyle",placeholderClassOne:"placeholderClass",focusOne:!1,cursorOne:0,adjustPositionOne:"adjustPosition",maxlengthOne:"maxlength",tTAlignOne:"left",tWidthOne:"",tHeightOne:"",tPaddingOne:"",tBGOne:"rgba(212, 253, 247, 0.21)",tBorderOne:"1px solid #02C2A2",tBStyleOne:"dashed",isShowTwo:!1},on:{"tap-Title":function(e){arguments[0]=e=t.$handleEvent(e),t.tabTitle.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"Edit-instructions-Ca"},[t._v("联系邮箱:")]),n("v-uni-view",{staticClass:"Edit-instructions-Cb"},[n("rTitle",{staticStyle:{float:"left"},attrs:{disabled:!1,isShowOne:!0,valueOne:"",typeOne:"text",placeholderOne:"联系邮箱",placeholderStyleOne:"placeholderStyle",placeholderClassOne:"placeholderClass",focusOne:!1,cursorOne:0,adjustPositionOne:"adjustPosition",maxlengthOne:"maxlength",tTAlignOne:"left",tWidthOne:"",tHeightOne:"",tPaddingOne:"",tBGOne:"rgba(212, 253, 247, 0.21)",tBorderOne:"1px solid #02C2A2",tBStyleOne:"dashed",isShowTwo:!1},on:{"tap-Title":function(e){arguments[0]=e=t.$handleEvent(e),t.tabTitle.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"Edit-instructions-Ca"},[t._v("联系地址:")]),n("v-uni-view",{staticClass:"Edit-instructions-Cb"},[n("rTitle",{staticStyle:{float:"left"},attrs:{disabled:!1,isShowOne:!0,valueOne:"",typeOne:"text",placeholderOne:"联系地址",placeholderStyleOne:"placeholderStyle",placeholderClassOne:"placeholderClass",focusOne:!1,cursorOne:0,adjustPositionOne:"adjustPosition",maxlengthOne:"maxlength",tTAlignOne:"left",tWidthOne:"",tHeightOne:"",tPaddingOne:"",tBGOne:"rgba(212, 253, 247, 0.21)",tBorderOne:"1px solid #02C2A2",tBStyleOne:"dashed",isShowTwo:!1},on:{"tap-Title":function(e){arguments[0]=e=t.$handleEvent(e),t.tabTitle.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"Edit-instructions-D"},[t._v("保存")]),t.QUICKNAVCO.show?n("navigation"):t._e()],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},e0a0:function(t,e,n){"use strict";n.r(e);var i=n("2f05"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},e0f1:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-upload"},[t.typeImg?t._e():n("v-uni-view",{staticClass:"imageUploadContainer"},[n("v-uni-view",{staticClass:"imageUploadList"},[t._l(t.imageList,function(e,i){return n("v-uni-view",{key:i,staticClass:"imageItem"},[n("v-uni-image",{class:{dragging:t.isDragging(i)},attrs:{src:e.imgUrl||e,draggable:"false","data-index":i},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.move.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.stop.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage.apply(void 0,arguments)}}}),t.isShowDel?n("v-uni-view",{staticClass:"imageDel",attrs:{"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteImage.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.close}})],1):t._e()],1)}),t.isShowAdd?n("v-uni-view",{staticClass:"imageUpload",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectImage.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.jiaadd,mode:""}})],1):t._e()],2),t.showMoveImage?n("v-uni-image",{staticClass:"moveImage",style:{left:t.posMoveImageLeft,top:t.posMoveImageTop},attrs:{src:t.moveImagePath}}):t._e()],1),1===Number(t.typeImg)?n("v-uni-view",{staticClass:"imageUploadContainer"},[n("v-uni-view",{staticClass:"imageUploadList"},[t._l(t.imageList,function(e,i){return n("v-uni-view",{key:i,staticClass:"imageItem1"},[n("v-uni-image",{class:{dragging:t.isDragging(i)},attrs:{src:e.imgUrl||e,draggable:"false","data-index":i},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.move.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.stop.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage.apply(void 0,arguments)}}}),t.isShowDel?n("v-uni-view",{staticClass:"imageDel1",attrs:{"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteImage.apply(void 0,arguments)}}},[t._v("x")]):t._e()],1)}),t.isShowAdd?n("v-uni-view",{staticClass:"imageUpload1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectImage.apply(void 0,arguments)}}},[t._v("+"),n("p",{staticClass:"text"},[t._v("点击添加图片")])]):t._e()],2),t.showMoveImage?n("v-uni-image",{staticClass:"moveImage1",style:{left:t.posMoveImageLeft,top:t.posMoveImageTop},attrs:{src:t.moveImagePath}}):t._e()],1):t._e(),10===Number(t.typeImg)?n("v-uni-view",{staticClass:"imageUploadContainer"},[n("v-uni-view",{staticClass:"imageUploadList"},[t._l(t.imageList,function(e,i){return n("v-uni-view",{key:i,staticClass:"imageItem1"},[n("v-uni-image",{class:{dragging:t.isDragging(i)},staticStyle:{width:"314upx",height:"314upx","margin-top":"-20upx","margin-left":"-10upx"},attrs:{src:e.imgUrl||e,draggable:"false","data-index":i},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.move.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.stop.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage.apply(void 0,arguments)}}}),t.isShowDel?n("v-uni-view",{staticClass:"imageDel10",attrs:{"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteImage.apply(void 0,arguments)}}},[t._v("x")]):t._e()],1)}),t.isShowAdd?n("v-uni-view",{staticClass:"imageUpload10",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectImage.apply(void 0,arguments)}}},[t._v("+"),n("p",{staticClass:"text10"},[t._v("点击添加二维码")])]):t._e()],2),t.showMoveImage?n("v-uni-image",{staticClass:"moveImage1",style:{left:t.posMoveImageLeft,top:t.posMoveImageTop},attrs:{src:t.moveImagePath}}):t._e()],1):t._e()],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},e6ce:function(t,e,n){"use strict";n.r(e);var i=n("a86a"),a=n("e0a0");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("2f99");var s=n("2877"),l=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"8d4e47ca",null);e["default"]=l.exports},fcdb:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".Edit-instructions[data-v-8d4e47ca]{width:100%;min-height:100%;padding-bottom:%?50?%;background:#fff}.tian[data-v-8d4e47ca]{width:100%;height:%?88?%}.my-title[data-v-8d4e47ca]{width:100%;height:%?88?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:fixed;top:0;z-index:999}.quickBtn-Fd[data-v-8d4e47ca]{width:5%;margin-left:%?38?%}.myproduct-title[data-v-8d4e47ca]{width:67%;height:100%;margin-left:%?120?%;line-height:%?90?%;float:left;text-align:center}.Edit-instructions-A[data-v-8d4e47ca]{width:90%;height:%?200?%;margin:%?50?% auto auto auto}.Edit-instructions-B[data-v-8d4e47ca]{width:%?484?%;height:%?604?%;border:%?2?% solid #e2e2e2;margin:%?30?% auto}.Edit-instructions-Ba[data-v-8d4e47ca]{width:100%;height:%?484?%;border:%?2?% solid #e2e2e2;position:relative}.Edit-instructions-Bb[data-v-8d4e47ca]{width:%?364?%;height:%?364?%;margin:%?60?% auto}.Edit-instructions-Bb>uni-image[data-v-8d4e47ca]{width:100%;height:100%}.Edit-instructions-Bc[data-v-8d4e47ca]{width:%?315?%;height:%?315?%;position:absolute;top:%?84?%;left:%?86?%}.Edit-instructions-Bd[data-v-8d4e47ca]{width:100%;text-align:center;height:%?120?%;font-size:%?24?%;color:#02c2a2;line-height:%?36?%;padding-top:%?26?%}.Edit-instructions-C[data-v-8d4e47ca]{width:90%;height:%?130?%;margin:%?40?% auto auto auto}.Edit-instructions-Ca[data-v-8d4e47ca]{width:%?130?%;height:%?30?%;font-size:%?26?%;color:#5d5d5d;float:left}.Edit-instructions-Cb[data-v-8d4e47ca]{width:%?532?%;height:%?44?%;float:left}.Edit-instructions-D[data-v-8d4e47ca]{width:90%;height:%?88?%;background:#02c2a2;margin:%?60?% auto auto auto;text-align:center;line-height:%?88?%;font-size:%?32?%;color:#fff}",""])},fd58:function(t,e,n){var i=n("78c0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2828127d",i,!0,{sourceMap:!1,shadowMode:!1})}}]);