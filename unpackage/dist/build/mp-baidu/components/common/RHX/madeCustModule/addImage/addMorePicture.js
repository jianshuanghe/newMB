(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/RHX/madeCustModule/addImage/addMorePicture"],{3865:function(e,t,i){"use strict";var a=i("d953"),s=i.n(a);s.a},4861:function(e,t,i){"use strict";(function(e){var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"robby-image-upload",props:["value","enableDel","enableAdd","enableDrag","serverUrl","formData","limit","fileKeyName","showUploadProgress","typeImg"],data:function(){return{imageBasePos:{x0:-1,y0:-1,w:-1,h:-1},showMoveImage:!1,moveImagePath:"",moveLeft:0,moveTop:0,deltaLeft:0,deltaTop:0,dragIndex:null,targetImageIndex:null,imageList:[],serverUploadSuccess:"https://img01.iambuyer.com/imgup/upLoad/uploadSuccess"}},mounted:function(){this.imageList=this.value,console.log(this.imageList,"-------------------this.imageList--mounted------------------")},computed:{posMoveImageLeft:function(){return this.moveLeft+"px"},posMoveImageTop:function(){return this.moveTop+"px"},isShowDel:function(){return!1!==this.enableDel},isShowAdd:function(){return!1!==this.enableAdd&&!(this.limit&&this.imageList.length>=this.limit)},isDragable:function(){return!1!==this.enableDrag}},watch:{imageList:{handler:function(e,t){this.imageData=JSON.parse(JSON.stringify(e))},deep:!0}},methods:{selectImage:function(){i=this,i.imageList||(i.imageList=[]),e.chooseImage({count:i.limit?i.limit-i.imageList.length:999,success:function(t){var a=t.tempFilePaths;if(i.limit){var s=i.limit-i.imageList.length;if(s<a.length)return void e.showToast({title:"图片总数限制为"+i.limit+"张，当前还可以选"+s+"张",icon:"none",mask:!1,duration:2e3})}for(var n=0;n<a.length;n++)i.imageList.push(a[n]);if(i.serverUrl){for(var o=i.imageList.length-a.length,r=[],l=(i.fileKeyName&&i.fileKeyName,0),g=function(t){r.push(new Promise(function(s,n){var r=o+t;e.showLoading({title:"加载中"}),e.uploadFile({url:i.serverUrl,fileType:"image",formData:i.formData,filePath:a[t],name:"file",success:function(t){e.hideLoading(),200===t.statusCode?(console.log(JSON.parse(t.data),"上传成功"),e.request({url:i.serverUploadSuccess,data:{fileName:JSON.parse(t.data).name},method:"POST",dataType:"from-data",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){if(200===t.statusCode){console.log(JSON.parse(t.data),"上传成功");var n={imgUrl:JSON.parse(t.data).httpUrl,imgName:JSON.parse(t.data).name};console.log(typeof n),i.imageList[r]=n,console.log(i.imageList,"_self.imageList"),l++,i.showUploadProgress&&e.showToast({title:"上传进度："+l+"/"+a.length,icon:"none",mask:!1,duration:1e3}),console.log("success to upload image: "+t.data),s("success to upload image:"+r)}},fail:function(e){}})):(e.hideLoading(),console.log("fail to upload image:"+t.data),n("failt to upload image:"+r))},fail:function(t){e.hideLoading(),console.log("fail to upload image:"+t),n("failt to upload image:"+r)}})}))},m=0;m<a.length;m++)g(m);Promise.all(r).then(function(e){i.$emit("add",{currentImages:a,allImages:JSON.parse(JSON.stringify(i.imageList))}),i.$emit("input",i.imageList)})}else i.$emit("add",{currentImages:a,allImages:i.imageList}),i.$emit("input",i.imageList)}})},deleteImage:function(e){var t=e.currentTarget.dataset.index,i=this.imageList[t];this.imageList.splice(t,1),this.$emit("delete",{currentImage:i,allImages:JSON.parse(JSON.stringify(this.imageList))}),this.$emit("input",this.imageList)},previewImage:function(t){var i=t.currentTarget.dataset.index;console.log(this.imageList,"预览的img");var a=[];this.imageList.map(function(e,t){a.push(e.imgUrl)}),e.previewImage({current:a[i],indicator:"number",loop:"true",urls:a})},initImageBasePos:function(){var t=.024;i=this,e.getSystemInfo({success:function(e){var a=e.screenWidth,s=Math.ceil(t*a),n=Math.ceil((a-2*s)/4);i.imageBasePos.x0=s,i.imageBasePos.w=n,i.imageBasePos.h=n}})},findOverlapImage:function(e,t){var i=Math.floor((e-this.imageBasePos.x0)/this.imageBasePos.w),a=Math.floor((t-this.imageBasePos.y0)/this.imageBasePos.h),s=4*a+i;return s},isDragging:function(e){return this.dragIndex===e},start:function(e){if(console.log(this.isDragable),this.isDragable){if(this.dragIndex=e.currentTarget.dataset.index,this.moveImagePath=this.imageList[this.dragIndex],this.showMoveImage=!0,-1===this.imageBasePos.y0){this.initImageBasePos();var t=Math.floor(this.dragIndex/4)*this.imageBasePos.h,i=e.currentTarget.offsetTop;this.imageBasePos.y0=i-t}this.moveLeft=e.target.offsetLeft,this.moveTop=e.target.offsetTop}},move:function(e){if(this.isDragable){var t=e.touches[0];this.targetImageIndex=this.findOverlapImage(t.clientX,t.clientY),0===this.deltaLeft&&(this.deltaLeft=t.clientX-this.moveLeft,this.deltaTop=t.clientY-this.moveTop),this.moveLeft=t.clientX-this.deltaLeft,this.moveTop=t.clientY-this.deltaTop}},stop:function(e){this.isDragable&&(null!==this.dragIndex&&null!==this.targetImageIndex&&(this.targetImageIndex<0&&(this.targetImageIndex=0),this.targetImageIndex>=this.imageList.length&&(this.targetImageIndex=this.imageList.length-1),this.dragIndex!==this.targetImageIndex&&(this.imageList[this.dragIndex]=this.imageList[this.targetImageIndex],this.imageList[this.targetImageIndex]=this.moveImagePath)),this.dragIndex=null,this.targetImageIndex=null,this.deltaLeft=0,this.deltaTop=0,this.showMoveImage=!1,this.$emit("input",this.imageList))}}};t.default=a}).call(this,i("5486")["default"])},"64d0":function(e,t,i){"use strict";i.r(t);var a=i("4861"),s=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=s.a},"8c8d":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=(e._self._c,e.__map(e.imageList,function(t,i){var a=e.isDragging(i);return{$orig:e.__get_orig(t),m0:a}}));e.$mp.data=Object.assign({},{$root:{l0:i}})},s=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return s})},d953:function(e,t,i){},e01c:function(e,t,i){"use strict";i.r(t);var a=i("8c8d"),s=i("64d0");for(var n in s)"default"!==n&&function(e){i.d(t,e,function(){return s[e]})}(n);i("3865");var o=i("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/madeCustModule/addImage/addMorePicture-create-component',
    {
        'components/common/RHX/madeCustModule/addImage/addMorePicture-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("e01c"))
        })
    },
    [['components/common/RHX/madeCustModule/addImage/addMorePicture-create-component']]
]);                
