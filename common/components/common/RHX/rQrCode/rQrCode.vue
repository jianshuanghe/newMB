<template>
	<view class="QRcode">
		<view class="QRcode-imj">
			<div class="swiper-container" ref="slider">
				<div class="swiper-wrapper">
					<swiper 
					class="swiper-box" 
					:current='tabIndex'
					:next-margin='nextMargin'
					@change='swiperChange'
					>
						<swiper-item 
						:style="{marginLeft: marginLeft}" 
						v-for="(item,index) in dataLists" 
						:key="index" 
						@tap="previewImageS(dataLists, index)"
						>
							<view class="swiper-item">
								<div class="swiper-slide left">
									<image :src="item" mode='widthFix'></image>
								</div>
							</view>
						</swiper-item>
					</swiper>
				</div>
				<!-- <div class="saveBtn" v-if='isSaveBtn === true'>
					<div class="save-box"  @tap="saveImage()">保存图片</div>
				</div> -->
				<div class="saveBtn-files"  v-if="qrState !== '1'">
					<div class="save-box-fiels" >二维码已失效</div>
				</div>
			</div>
			<!-- <div class="swiper-containerMask" v-if="qrState !== '1'">
				<div class="tips">当前二维码已失效！</div>
			</div> -->
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				dataLists:this.dataList,
				longTaps: true,
				
				qrCodeList: [
					 this.Static+'publish/purchase/qrCode1.png',
					 this.Static+'publish/purchase/qrCode2.png'
				]
			};
		},
		props:[
			'dataList',
			'previewImage',
			'longTapSave',
			'isSaveBtn',
			'nextMargin',
			'marginLeft',
			'qrState'
		],
		mounted() {},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '-----------dataList----------');
					this.dataLists = a;
				},
				deep: true
			},
			qrState: {
				handler(a, b) {
					console.log(a, b, '-----------dataList----------');
					if (a !== "1") {
						this.dataLists = this.qrCodeList
					}
				},
				deep: true
			},
		},
		created() {
			if (this.longTap) {
				this.longTaps = this.longTap;
			}
		},
		methods: {
			niiii(){
				console.log(this.data)
			},
			swiperChange (e) {
				this.tabIndex = e.detail.current;
			},
			previewImageS (e, key) {
				console.log(e, '附件地址');
				if (this.qrState === "1") {
					if (this.previewImage === true) {
						let imgList = [];
						e.map((items, index) => {
							imgList.push(items)
						});
						if (this.longTapSave === true) {
							uni.previewImage({
								current: imgList[key],
								indicator: "number",
								loop: "true",
								urls:imgList,
								longPressActions: {
									itemList: ['保存图片'],
									success: function(data) {
										console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
									},
									fail: function(err) {
										console.log(err.errMsg);
									}
								}
							})
						} else {
							uni.previewImage({
								current: imgList[key],
								indicator: "number",
								loop: "true",
								urls:imgList
							})
						}
						
					}
				}
			},
			saveImage () {
				if (this.isSaveBtn === true) {
					this.dataLists.map((items, index)=>{
						let url = "https://" + items.split('://')[1];
						items = url;
						if (Number(index) === Number(this.tabIndex)) {
							uni.downloadFile({
								url: items,
								success: function (res) {
									console.log(res, '||||||||||||||')
									// h5
									// #ifdef H5
									var url = res.tempFilePath;                            // 获取图片地址
									var a = document.createElement('a');          // 创建一个a节点插入的document
									var event = new MouseEvent('click')           // 模拟鼠标click点击事件
									a.download = '说明书二维码'                  // 设置a节点的download属性值
									a.href = url;                                 // 将图片的src赋值给a节点的href
									a.dispatchEvent(event);
									uni.showToast({
										"title":"保存成功",
										duration:1000
									})
									// #endif
									// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU || MP-ALIPAY
									// 小程序
									uni.saveImageToPhotosAlbum({        // 保存图片到本地
										filePath: res.tempFilePath,     // 图片临时路径
										success: function () { 
											uni.showToast({
												"title":"保存成功",
												duration:1000
											})
										},
									})
									// #endif
								}
							});
						}
					});
				};
			}
		},
	};
</script>

<style scoped>
	.QRcode{
		width: 100%;
		height: 100%;
		margin-top: 40upx;
	}
	.QRcode-imj{
		width: 100%;
		min-height: 508upx;
	}
	.swiper-box{
		height: 508upx;
		
	}
	.swiper-slide{
		width: 360upx;
		height: 508upx;
		/* margin-left: 30%; */
		background: #fff;
	}
	.swiper-slide>image{
		width: 100%;
		height: 360upx;
		/* text-align: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 103; */
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		background-color: #C8C7CC;
		/* width: 100vw;
		h */eight: 100vh;
	}
	.saveBtn{
		position: relative;
		width: 100%;
		margin: 40upx 0;
	}
	.saveBtn-files{
		position: relative;
		width: 100%;
		margin: 40upx 0;
	}
	.save-box-fiels{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #FF4D6A;
		letter-spacing: 0;
		line-height: 12px;
		text-align: center;
	}
	.save-box{
		position: relative;
		width: 160upx;
		height: 56upx;
		margin: auto;
		background: #2E2E30;
		border-radius: 2px;
		border-radius: 2px;
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		line-height: 56upx;
	}
	.swiper-containerMask{
		position: absolute;
		top: 0;
		background: rgba(66, 65, 65, 0.29);
		width: 100%;
		height: 100%;
	}
	.tips{
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 200px;
		z-index: 103;
	}
</style>
