<template>
	<view class="QRcode">
		<view class="QRcode-imj">
			<div class="swiper-container" ref="slider">
				<div class="swiper-wrapper">
					<swiper class="swiper-box" next-margin='160px'>
						<swiper-item style="margin-left: 50%;" v-for="(item,index) in this.data" :key="index">
							<view class="swiper-item">
								<div class="swiper-slide left">
									<image :src="item"></image>
									<view class="baocuntuimg" @tap="baocun()">
										保存图片
									</view>
								</div>
							</view>
						</swiper-item>
					</swiper>
				</div>
			</div>
		</view>
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		props:['data'],
		data() {
			return {
			};
		},
		mounted() {
			
		},
		created(){
			
		},
		onLoad() {},
		methods: {
			baocun(){
				var that=this;
				uni.chooseImage({
					count: 1,
					sourceType: ['camera'],
					success: function (res) {
						uni.saveImageToPhotosAlbum({
							filePath:that.list[0].img,
							success: function () {
								console.log('save success');
							}
						});
					}
				});
			},
		},
		computed: {
			...mapGetters(['GET_NEWS','GET_HOME', 'QUICKNAVCO'])
		}
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
		height: 508upx;
	}
	.swiper-box{
		height:600upx;
		
	}
	.swiper-slide{
		width: 360upx;
		height: 558upx;
		position: relative;
		/* margin-left: 30%; */
	}
	.swiper-slide>image{
		width: 100%;
		height:508upx;
	}
	.baocuntuimg{
		width: 160upx;
		height: 56upx;
		background: #2E2E30;
		position: absolute;
		bottom: -24upx;
		left: 104upx;
		border-radius:8upx;
		font-size: 24upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 56upx;
	}
</style>
