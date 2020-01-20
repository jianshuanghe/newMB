<template>
	<view class="QRcode">
		<view class="QRcode-imj">
			<div class="swiper-container" ref="slider">
				<div class="swiper-wrapper">
					<swiper class="swiper-box" next-margin='160px'>
						<swiper-item style="margin-left: 50%;" v-for="(item,index) in data.qrImgs" :key="index">
							<view class="swiper-item">
								<div class="swiper-slide left">
									<image :src="item" @tap="niiii()"></image>
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
	import ce from '@/static/mbcImg/my/2.png';
	export default {
		props:['data'],
		data() {
			return {
				ce:ce,
				list:[
					{
						img:ce
					},
					{
						img:ce
					},
					{
						img:ce
					},
				],
			};
		},
		mounted() {
			
		},
		onLoad() {},
		methods: {
			niiii(){
				console.log(this.data)
			}
		},
		computed: {
			
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
		height: 508upx;
		
	}
	.swiper-slide{
		width: 360upx;
		height: 508upx;
		/* margin-left: 30%; */
	}
	.swiper-slide>image{
		width: 100%;
		height: 100%;
	}
	
</style>
