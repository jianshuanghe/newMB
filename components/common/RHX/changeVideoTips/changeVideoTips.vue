<!-- 实例
 <changeImgTips
 	tipsType='3' // 类型，1时只有添加；2时只有替换、移除；3时只有替换、移除、添加
 	v-model="bannerList" // 绑定的数组
 	@delete-Image="deleteVideo(index)" // 删除
 	@change-Image="changeVideo" // 替换
 	@add-Image="addVideo" // 增加
 	@show-Image='showImage' // 点击毛玻璃背景隐藏组件
 	v-if="showTips === index && !hideTips" // 控制组件隐藏显示
 ></changeImgTips>
 -->
<template>
	<div class="popover-box">
		<!-- 遮罩层 -->
		<div class="popover-mask" @tap.stop="clickShow"></div>
		<!-- 组件你内容 -->
		<div class="prover-cont">
			<div class="popover_content" v-if="tipsType === '1'" style="width: 13.333vw">
				<div class="popover_btns">
					<a style="width: 100%"><label @tap="addVideo">添加</label></a>
				</div>
			</div>
			<div class="popover_content" v-if="tipsType === '2'" :style="{width: '26.666vw', margin: tipsLeft}">
				<div class="popover_btns">
					<a><label @click="changeVideo">替换</label></a>
					<a @click="deleteVideo">移除</a>
				</div>
			</div>
			<div class="popover_content" v-if="tipsType === '2.1'" :style="{width: '26.666vw', margin: tipsLeft}">
				<div class="popover_btns">
					<a><label @click="changeVideo">替换</label></a>
					<a @click="addVideo">添加</a>
				</div>
			</div>
			<div class="popover_content" v-if="tipsType === '3'" style="width: 39.999vw">
				<div class="popover_btns">
					<a style="width: 33.33%"><label @click="changeVideo">替换</label></a>
					<a style="width: 33.33%"><label @click="deleteVideo">移除</label></a>
					<a style="width: 33.33%" @tap="addVideo">添加</a>
				</div>
			</div>
			<imgYaSuo  ref="imgYaSuo" :maxwh="800" :quality="0.6" > </imgYaSuo>
		</div>
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
	import imgYaSuo from '@/components/common/yaSuoFile/imgYaSuo';
export default {
	name: 'change-img-tips',
	props: ['tipsType', 'value', 'tipsLeft'],
	data() {
		return {
			serverUploadSuccess: 'https://img01.iambuyer.com/imgup/upLoad/uploadSuccess',
			serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload',
			imageList: []
		};
	},
	components:{
	    imgYaSuo
	},
	methods: {
		clickShow() {
			this.$emit('show-Image');
		},
		// 替换图片
		changeVideo: function() {
			console.log('触发替换视频');
			_self = this;
			uni.chooseVideo({
				count: 1,
				maxDuration: 60,//最长拍摄60秒
				sourceType: ['camera', 'album'], //album 从相册选视频，camera 使用相机拍摄
				success: function(e) {
					var videoPathArr = e.tempFilePath;//选定视频的临时文件路径
					console.log(videoPathArr, '上传视频');
					if (_self.serverUrl) {
						uni.uploadFile({
							url: _self.serverUrl,
							fileType: 'video',
							formData: _self.formData,
							filePath: videoPathArr[0],
							name: 'file',
							success: function(res) {
								if (res.statusCode === 200) {
									console.log(JSON.parse(res.data), '上传成功');
									uni.request({
										url: _self.serverUploadSuccess, //接口地址。
										data: { fileName: JSON.parse(res.data).name },
										method: 'POST',
										dataType: 'from-data',
										header: {
											'content-type': 'application/x-www-form-urlencoded'
										},
										success: function(res) {
											if (res.statusCode === 200) {
												console.log(JSON.parse(res.data), '上传成功');
												let imgUrl = JSON.parse(res.data).httpUrl;
												_self.$emit('change-Image', imgUrl);
											} else {
											}
										},
										fail: function(res) {}
									});
								} else {
								}
							},
							fail: function(res) {}
						});
					} else {
					}
					// // #ifdef H5
					// 	console.log('进入H5图片压缩');
					// 	lrz(imagePathArr[0],{quality: 0.6})
					// 	.then(function (rst) {
					// 		// 处理成功会执行
					// 		console.log(rst,'图片压缩完成');
					// 		imagePathArr[0] = rst.base64;
					// 		console.log('开始了');
							
					// 	})
					// // #endif
					// // #ifdef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU || MP-ALIPAY
					// 	console.log('进入小程序图片压缩');
					// 	console.log(imagePathArr[0]);
					// 	_self.$refs.imgYaSuo.yasuoImg(imagePathArr).then(e=>{
					// 	    console.log([imagePathArr,e], '压缩后对比数据');
					// 		imagePathArr[0] = e[0].tempFilePath;
					// 		console.log('开始了');
					// 		if (_self.serverUrl) {
					// 			uni.uploadFile({
					// 				url: _self.serverUrl,
					// 				fileType: 'image',
					// 				formData: _self.formData,
					// 				filePath: imagePathArr[0],
					// 				name: 'file',
					// 				success: function(res) {
					// 					if (res.statusCode === 200) {
					// 						console.log(JSON.parse(res.data), '上传成功');
					// 						uni.request({
					// 							url: _self.serverUploadSuccess, //接口地址。
					// 							data: { fileName: JSON.parse(res.data).name },
					// 							method: 'POST',
					// 							dataType: 'from-data',
					// 							header: {
					// 								'content-type': 'application/x-www-form-urlencoded'
					// 							},
					// 							success: function(res) {
					// 								if (res.statusCode === 200) {
					// 									console.log(JSON.parse(res.data), '上传成功');
					// 									let imgUrl = JSON.parse(res.data).httpUrl;
					// 									_self.$emit('change-Image', imgUrl);
					// 								} else {
					// 								}
					// 							},
					// 							fail: function(res) {}
					// 						});
					// 					} else {
					// 					}
					// 				},
					// 				fail: function(res) {}
					// 			});
					// 		} else {
					// 		}
					// 	})
					// // #endif
					//检查服务器地址是否设置，设置即表示图片要上传到服务器
				}
			});
		},
		// 添加图片
		addVideo: function() {
			console.log('触发添加');
			_self = this;
			uni.chooseImage({
				count: 1, // 最多可以选择的图片张数,这里设置了1张
				success: function(e) {
					console.log(e, '上传图片');
					var imagePathArr = e.tempFilePaths;

					//如果设置了limit限制，在web上count参数无效，这里做判断控制选择的数量是否合要求
					//在非微信小程序里，虽然可以选多张，但选择的结果会被截掉
					//在app里，会自动做选择数量的限制
					// #ifdef H5
						console.log('进入H5图片压缩');
						lrz(imagePathArr[0],{quality: 0.6})
						.then(function (rst) {
							// 处理成功会执行
							console.log(rst);
							imagePathArr[0] = rst.base64;
							//检查服务器地址是否设置，设置即表示图片要上传到服务器
							if (_self.serverUrl) {
								uni.uploadFile({
									url: _self.serverUrl,
									fileType: 'image',
									formData: _self.formData,
									filePath: imagePathArr[0],
									name: 'file',
									success: function(res) {
										if (res.statusCode === 200) {
											console.log(JSON.parse(res.data), '上传成功');
											uni.request({
												url: _self.serverUploadSuccess, //接口地址。
												data: { fileName: JSON.parse(res.data).name },
												method: 'POST',
												dataType: 'from-data',
												header: {
													'content-type': 'application/x-www-form-urlencoded'
												},
												success: function(res) {
													if (res.statusCode === 200) {
														console.log(JSON.parse(res.data), '上传成功');
														let imgUrl = JSON.parse(res.data).httpUrl;
														_self.$emit('add-Image', imgUrl);
													} else {
													}
												},
												fail: function(res) {}
											});
										} else {
										}
									},
									fail: function(res) {}
								});
							} else {
							}
						})
					// #endif
					// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU || MP-ALIPAY
						console.log('进入小程序图片压缩');
						console.log(imagePathArr[0]);
						_self.$refs.imgYaSuo.yasuoImg(imagePathArr).then(e=>{
						    console.log([imagePathArr,e], '压缩后对比数据');
							imagePathArr[0] = e[0].tempFilePath;
							console.log('开始了');
							if (_self.serverUrl) {
								uni.uploadFile({
									url: _self.serverUrl,
									fileType: 'image',
									formData: _self.formData,
									filePath: imagePathArr[0],
									name: 'file',
									success: function(res) {
										if (res.statusCode === 200) {
											console.log(JSON.parse(res.data), '上传成功');
											uni.request({
												url: _self.serverUploadSuccess, //接口地址。
												data: { fileName: JSON.parse(res.data).name },
												method: 'POST',
												dataType: 'from-data',
												header: {
													'content-type': 'application/x-www-form-urlencoded'
												},
												success: function(res) {
													if (res.statusCode === 200) {
														console.log(JSON.parse(res.data), '上传成功');
														let imgUrl = JSON.parse(res.data).httpUrl;
														_self.$emit('change-Image', imgUrl);
													} else {
													}
												},
												fail: function(res) {}
											});
										} else {
										}
									},
									fail: function(res) {}
								});
							} else {
							}
						})
					// #endif
					
				}
			});
		},
		// 删除视频
		deleteVideo: function() {
			console.log('触发删除');
			_self = this;
			_self.$emit('delete-Image');
		}
	}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.popover-box
	height 100%
	top -100%
.popover-mask
	position absolute
	width 100%
	height 100%
	top 0upx;
	background: rgba(66, 65, 65, 0.29);
	// background:url('../../../../static/mbcImg/publish/createBusiness/maskMbl.png') repeat-y;
	z-index 100
.prover-cont
	text-align center
	position absolute
	top -16upx
	left 0
	right 0
	bottom 0
	margin auto
	width 60%
	height 30px
	z-index 101
.popover_content
	text-align center
	position absolute
	top 0
	left 0
	right 0
	bottom 0
	margin auto
	width 100px
	height 30px
	line-height 30px
	background rgb(46, 46, 48)
	// border-radius 7px
	max-width 130%
.popover_content .popover_btns
	margin-top -40px
	font-size 0
.popover_content .popover_btns a
	font-size: 12px;
	display: inline-block;
	width: 50%;
	height: 10px;
	margin: 6px 0;
	line-height: 11px;
	box-sizing: border-box;
	float: left;
	border-right: 0.5px solid #fff;
	color: #fff;
	cursor: pointer;
.popover_content .popover_btns a label
	display block
	cursor pointer
.popover_content .popover_btns a:nth-last-child(1)
	border-right none
.popover_content:before
	content ''
	display inline-block
	width 10px
	height 10px
	background rgb(46, 46, 48)
	margin-top 24px
	transform rotate(45deg)
</style>
