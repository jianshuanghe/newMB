<template>
	<div class="image-upload">
		<view class="imageUploadContainer" v-if="!typeImg">
			<view class="imageUploadList">
				<view class="imageItem" v-bind:key="index" v-for="(path,index) in imageList">
					<image :src="path.imgUrl || path" :class="{'dragging':isDragging(index)}" draggable="false" @tap="previewImage" :data-index="index" @touchstart="start" @touchmove.stop.prevent="move" @touchend="stop"></image>
					<view v-if="isShowDel" class="imageDel" @tap="deleteImage" :data-index="index"><image :src="close"></image></view>
				</view>
				<view v-if="isShowAdd" class="imageUpload" @tap="selectImage"><image :src="jiaadd" mode=""></image></view>
			</view>
			<image v-if="showMoveImage" class="moveImage" :style="{left:posMoveImageLeft, top:posMoveImageTop}" :src="moveImagePath"></image>
		</view>
		<view class="imageUploadContainer" v-if="Number(typeImg) === 1">
			<view class="imageUploadList">
				<view class="imageItem1" v-bind:key="index" v-for="(path,index) in imageList">
					<image :src="path.imgUrl || path" :class="{'dragging':isDragging(index)}" draggable="false" @tap="previewImage" :data-index="index" @touchstart="start" @touchmove.stop.prevent="move" @touchend="stop"></image>
					<view v-if="isShowDel" class="imageDel1" @tap="deleteImage" :data-index="index">x</view>
				</view>
				<view v-if="isShowAdd" class="imageUpload1" @tap="selectImage">
					+
					<p class="text">点击添加图片</p>
				</view>
			</view>
			<image v-if="showMoveImage" class="moveImage1" :style="{left:posMoveImageLeft, top:posMoveImageTop}" :src="moveImagePath"></image>
		</view>
		<view class="imageUploadContainer" v-if="Number(typeImg) === 10">
			<view class="imageUploadList">
				<view class="imageItem1" v-bind:key="index" v-for="(path,index) in imageList">
					<image :src="path.imgUrl || path" :class="{'dragging':isDragging(index)}" draggable="false" style="width: 314upx;height: 314upx;margin-top: -20upx;margin-left: -10upx;" @tap="previewImage" :data-index="index" @touchstart="start" @touchmove.stop.prevent="move" @touchend="stop"></image>
					<view v-if="isShowDel" class="imageDel10" @tap="deleteImage" :data-index="index">x</view>
				</view>
				<view v-if="isShowAdd" class="imageUpload10" @tap="selectImage">
					+
					<p class="text10">点击添加二维码</p>
				</view>
			</view>
			<image v-if="showMoveImage" class="moveImage1" :style="{left:posMoveImageLeft, top:posMoveImageTop}" :src="moveImagePath"></image>
		</view>
	</div>
	
</template>

<script>
	var _self;
	// #ifdef H5
		console.log('引入H5图片压缩组件');
		import lrz from 'lrz';
	// #endif
	// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU || MP-ALIPAY
		console.log('引入小程序图片压缩组件');
	// #endif
	import close from '@/static/mbcImg/common/deldat.png';
	import jiaadd from '@/static/mbcImg/my/jiaadd.png';
	export default {
		name:'robby-image-upload',
		props: ['value','enableDel','enableAdd','enableDrag','serverUrl','formData','limit','fileKeyName','showUploadProgress', 'typeImg'],
		data() {
			return {
				imageBasePos:{
					x0: -1,
					y0: -1,
					w:-1,
					h:-1,
				},
				showMoveImage: false,
				moveImagePath: '',
				moveLeft: 0,
				moveTop: 0,
				deltaLeft: 0,
				deltaTop: 0,
				dragIndex: null,
				targetImageIndex: null,
				imageList: [],
				close:close,
				jiaadd:jiaadd,
			}
		},
		mounted: function(){
			this.imageList = this.value;
			console.log(this.imageList, '-------------------this.imageList--mounted------------------')
		},
		computed:{
			posMoveImageLeft: function(){ 
				return this.moveLeft + 'px'
			},
			posMoveImageTop: function(){
				return this.moveTop + 'px'
			},
			isShowDel: function(){
				if(this.enableDel === false){
					return false
				}else{
					return true
				}
			},
			isShowAdd: function(){
				if(this.enableAdd === false){
					return false
				}
				
				if(this.limit && this.imageList.length >= this.limit){
					return false
				}
				
				return true
			},
			isDragable: function(){
				if(this.enableDrag === false){
					return false
				}else{
					return true
				}
			}
		},
		watch:{
			imageList: {
			  handler (a, b) {
				this.imageData = JSON.parse(JSON.stringify(a));
			  },
			  deep: true
			}
		},
		methods:{
			selectImage: function(){
				_self = this
				if(!_self.imageList){
					_self.imageList = []
				} 
				
				uni.chooseImage({
					count: _self.limit ? (_self.limit - _self.imageList.length) : 999,
					success: function(e){
						var imagePathArr = e.tempFilePaths
						
						//如果设置了limit限制，在web上count参数无效，这里做判断控制选择的数量是否合要求
						//在非微信小程序里，虽然可以选多张，但选择的结果会被截掉
						//在app里，会自动做选择数量的限制
						if(_self.limit){
							var availableImageNumber = _self.limit - _self.imageList.length
							if(availableImageNumber < imagePathArr.length){
								uni.showToast({
									title: '图片总数限制为'+_self.limit+'张，当前还可以选'+availableImageNumber+'张',
									icon:'none',
									mask: false,
									duration: 2000
								});
								return
							}
						}
						
						for(let i=0; i<imagePathArr.length;i++){
							let image = imagePathArr[i];
							// #ifdef H5
								console.log('进入H5图片压缩');
								lrz(image,{quality: 0.6})
								.then(function (rst) {
									// 处理成功会执行
									console.log(rst);
									image = rst.base64;
									_self.imageList.push(image);
								})
							// #endif
							// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU || MP-ALIPAY
								console.log('进入小程序图片压缩');
								_self.imageList.push(image);
							// #endif
						}
						
						//检查服务器地址是否设置，设置即表示图片要上传到服务器
						if(_self.serverUrl){
							
							var remoteIndexStart = _self.imageList.length - imagePathArr.length
							var promiseWorkList = []
							var keyname = (_self.fileKeyName ? _self.fileKeyName : 'upload-images')
							var completeImages = 0
							
							for(let i=0; i<imagePathArr.length;i++){
								promiseWorkList.push(new Promise((resolve, reject)=>{
									let remoteUrlIndex = remoteIndexStart + i;
									uni.showLoading({ // 展示loading
										title: '加载中'
									});
									uni.uploadFile({
										url:_self.serverUrl,
										fileType: 'image',
										formData:_self.formData,
										filePath: imagePathArr[i], 
										name: 'file',
										success: function(res){
											uni.hideLoading(); // 隐藏 loading
											if(res.statusCode === 200){
												console.log(JSON.parse(res.data), '上传成功');
												let imgObj = {
													imgUrl: JSON.parse(res.data).httpUrl,
													imgName: JSON.parse(res.data).name
												};
												console.log(typeof(imgObj));
												_self.imageList[remoteUrlIndex] = imgObj;
												console.log(_self.imageList, '_self.imageList');
												completeImages ++
												
												if(_self.showUploadProgress){
													uni.showToast({
														title: '上传进度：' + completeImages + '/' + imagePathArr.length,
														icon: 'none',
														mask: false,
														duration: 1000
													});
												}
												console.log('success to upload image: ' + res.data)
												resolve('success to upload image:' + remoteUrlIndex)
											}else{
												uni.hideLoading(); // 隐藏 loading
												console.log('fail to upload image:'+res.data)
												reject('failt to upload image:' + remoteUrlIndex)
											}
										},
										fail: function(res){
											uni.hideLoading(); // 隐藏 loading
											console.log('fail to upload image:'+res)
											reject('failt to upload image:' + remoteUrlIndex)
										}
									})
								}))
							}
							Promise.all(promiseWorkList).then((result)=>{
								_self.$emit('add', {
									currentImages: imagePathArr,
									allImages: JSON.parse(JSON.stringify(_self.imageList))
								})
								_self.$emit('input', _self.imageList)
							})
						}else{
							_self.$emit('add', {
								currentImages: imagePathArr,
								allImages: _self.imageList
							})
							_self.$emit('input', _self.imageList)
						}
					}
				})
			},
			deleteImage: function(e){
				var imageIndex = e.currentTarget.dataset.index
				var deletedImagePath = this.imageList[imageIndex]
				this.imageList.splice(imageIndex, 1) 
				
				this.$emit('delete',{
					currentImage: deletedImagePath,
					allImages: JSON.parse(JSON.stringify(this.imageList))
				})
				this.$emit('input', this.imageList)
			},
			previewImage: function(e){
				var imageIndex = e.currentTarget.dataset.index
				console.log(this.imageList, '预览的img');
				let imgList = []; // 预览数组
				this.imageList.map((itms, index) => {
					imgList.push(itms.imgUrl);
				})
				uni.previewImage({
					current: imgList[imageIndex],
					indicator: "number",
					loop: "true",
					urls:imgList
				})
			},
			initImageBasePos: function(){
				let paddingRate = 0.024
				_self = this
				//计算图片基准位置
				uni.getSystemInfo({
					success: function(obj) {
						let screenWidth = obj.screenWidth
						let leftPadding = Math.ceil(paddingRate * screenWidth)
						let imageWidth = Math.ceil((screenWidth - 2*leftPadding)/4)
						
						_self.imageBasePos.x0 = leftPadding
						_self.imageBasePos.w = imageWidth
						_self.imageBasePos.h = imageWidth
					}
				})
			},
			findOverlapImage: function(posX, posY){
				let rows = Math.floor((posX-this.imageBasePos.x0)/this.imageBasePos.w)
				let cols = Math.floor((posY-this.imageBasePos.y0)/this.imageBasePos.h)
				let indx = cols*4 + rows
				return indx
			},
			isDragging: function(indx){
				return this.dragIndex === indx
			},
			start: function(e){
				console.log(this.isDragable)
				if(!this.isDragable){
					return
				}
				this.dragIndex = e.currentTarget.dataset.index
				this.moveImagePath = this.imageList[this.dragIndex]
				this.showMoveImage = true
				
				//计算纵向图片基准位置
				if(this.imageBasePos.y0 === -1){
					this.initImageBasePos()
					
					let basePosY = Math.floor(this.dragIndex / 4) * this.imageBasePos.h
					let currentImageOffsetTop = e.currentTarget.offsetTop
					this.imageBasePos.y0 = currentImageOffsetTop - basePosY
				}
				
				//设置选中图片当前左上角的坐标
				this.moveLeft = e.target.offsetLeft
				this.moveTop = e.target.offsetTop
			},
			move: function(e){
				if(!this.isDragable){
					return
				}
				const touch = e.touches[0]
				this.targetImageIndex = this.findOverlapImage(touch.clientX, touch.clientY)
				
				//初始化deltaLeft/deltaTop
				if(this.deltaLeft === 0){
					this.deltaLeft = touch.clientX - this.moveLeft
					this.deltaTop = touch.clientY - this.moveTop 
				}
				
				//设置移动图片位置
				this.moveLeft = touch.clientX - this.deltaLeft
				this.moveTop = touch.clientY - this.deltaTop
			},
			stop: function(e){
				if(!this.isDragable){
					return
				}
				if(this.dragIndex !== null && this.targetImageIndex !== null){
					if(this.targetImageIndex<0){
						this.targetImageIndex = 0
					}
				
					if(this.targetImageIndex>=this.imageList.length){
						this.targetImageIndex = this.imageList.length-1
					}
					//交换图片
					if(this.dragIndex !== this.targetImageIndex){
						this.imageList[this.dragIndex] = this.imageList[this.targetImageIndex]
						this.imageList[this.targetImageIndex] = this.moveImagePath
					}
				}
				
				this.dragIndex = null
				this.targetImageIndex = null
				this.deltaLeft = 0
				this.deltaTop = 0
				this.showMoveImage = false
				
				this.$emit('input', this.imageList)
			}
		}
	}
</script>

<style>
	/* --------------------------------------------默认样式start------------------------------------------ */
	.imageUploadContainer{
		padding: 10upx 5upx;
		margin: 10upx 5upx;
	}
	.dragging{
		transform: scale(0)
	}
	.imageUploadList{
		width: 100%;
		min-height: 148upx;
		display: flex;
		flex-wrap: wrap;
	}
	.imageUploadList view:nth-of-type(1){
		margin-left: 0;
	}
	.imageUpload{
		width: 148upx;
		/* line-height: 150upx;
		text-align: center;
		font-size: 150upx;
		color: #D9D9D9;
		border: 1px solid #D9D9D9;
		border-radius: 8upx; */
		height: 148upx;
		margin-left: 12upx;
		margin-top: -10upx;
	}
	.imageUpload>image{
		width: 100%;
		height: 100%;
	}
	.imageItem{
		width: 148upx;
		width: 148upx;
		margin-right: 12upx;
	}
	.imageDel{
		position: relative;
		left: 130upx;
		bottom: 180upx;
		width: 32upx;
		height: 32upx;
		/* background-color: rgba(0,0,0,0.5);
		width: 36upx;
		height: 27upx;
		text-align: center;
		line-height: 14upx;
		border-radius: 50%;
		color: white!important;
		font-size: 30upx; */
		padding-bottom: 2upx;
	}
	.imageDel>image{
		width: 100%;
		height: 100%;
	}
	.imageItem>image, .moveImage{
		width: 148upx;
		height: 148upx;
		border-radius: 8upx;
	}
	.moveImage{
		position: absolute;
	}
	.uni-swiper{
		height: 100% !important;
	}
	/* .imageDel{
		width: 32upx;
		height: 30upx;
		border-radius: 50%;
		line-height: 26upx;
		margin-top: 4upx;
		margin-left: 4upx;
	} */
	/* ---------------------------------------------采购样式------------------------------------------------------- */
	.imageUpload1 {
		width: 220upx !important;
		height: 220upx !important;
		margin-left: 12upx;
		line-height: 220upx !important;
		text-align: center;
		font-size: 80upx !important;
		color: #D9D9D9;
		border: 0px !important;
		border-radius: 8upx;
		background: #F9F9F9;
	}
	.imageUpload1 .text{
		position: absolute;
		font-family: PingFangSC-Regular;
		font-size: 20upx;
		color: #BDBDBD;
		letter-spacing: 0;
		text-align: center;
		line-height: 20upx;
		top: 156upx;
		width: 220upx;
	}
	.imageItem1{
		width: 208upx;
		width: 208upx;
		margin-right: 12upx;
		margin-bottom: 34upx;
	}
	.imageDel1{
		position: relative;
		left: 120upx;
		bottom: 185upx;
		background-color: rgba(0,0,0,0.5);
		width: 36upx;
		height: 27upx;
		text-align: center;
		line-height: 14upx;
		border-radius: 50%;
		color: white!important;
		font-size: 30upx;
		padding-bottom: 2upx;
	}
	.imageItem1 image, .moveImage1{
		width: 208upx;
		height: 208upx;
		border-radius: 8upx;
	}
	.moveImage1{
		position: absolute;
	}
	.uni-swiper1{
		height: 100% !important;
	}
	.imageDel1{
		width: 32upx;
		height: 30upx;
		border-radius: 50%;
		line-height: 26upx;
		margin-top: -50upx;
		margin-left: 64upx !important;
	}
	/* --------------------------------------------------说明书样式start------------------------------------------------------- */
	/*---------------------------------------------------二维码样式-------------------------------------------------------------*/
	.imageUpload10 {
		width: 314upx !important;
		height: 314upx !important;
		margin-left: 12upx;
		line-height: 262upx !important;
		text-align: center;
		font-size: 80upx !important;
		color: #D9D9D9;
		border: 0px !important;
		border-radius: 8upx;
		background: #F9F9F9;
		margin-top: -18upx;
	}
	.text10{
		position: absolute;
		font-family: PingFangSC-Regular;
		font-size: 20upx;
		color: #BDBDBD;
		letter-spacing: 0;
		text-align: center;
		line-height: 20upx;
		top: 212upx;
		width: 304upx;
	}
	.imageDel10{
		position: relative;
		left: 280upx;
		bottom: 348upx;
		background-color: rgba(0,0,0,0.5);
		width: 36upx;
		height: 36upx;
		text-align: center;
		line-height: 30upx;
		border-radius: 50%;
		color: white!important;
		font-size: 30upx;
		padding-bottom: 2upx;
	}
	/*---------------------------------------------------二维码样式-------------------------------------------------------------*/
	
</style>