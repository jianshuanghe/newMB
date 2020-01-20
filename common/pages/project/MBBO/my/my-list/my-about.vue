<template>
	<view class="my-about" >
		<!-- 关于我们 -->
		<view class="my-about-company" @tap="goToAboutUs">
			<view>{{i18n.company5}}</view>
			<view><image :src="right"></image></view>
		</view>
		<!-- 意见反馈 -->
		<view class="my-about-company" @tap="gotoOpinion">
			<view>{{i18n.company6}}</view>
			<view><image :src="right"></image></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				right: this.Static+'my/right.png',
			};
		},
		computed: {
			i18n() {
				return this.$t('My');
			}
		},
		mounted() {},
		onLoad() {},
		methods: {
			goToAboutUs(){
				console.log('to关于我们');
				uni.navigateTo({
					url: '/modules/myCompany/personAndCompany/aboutUs/aboutUs',
				});
			},
			gotoOpinion(){
				console.log('to意见反馈');
				uni.navigateTo({
					url: '/modules/myCompany/personAndCompany/Opinion/Opinion',
				});
			}
		}
	};
</script>

<style>
	.my-about{
		width: 100%;
		height: 242upx;
		background: #FFFFFF;
		margin-top: 20upx;
	}
	.my-about-company{
		margin: 0 auto;
		width: 90%;
		height: 120upx;
		border-bottom: 2upx solid #F5F5F5;
	}
	.my-about-company>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		line-height: 120upx;
		float: left;
	}
	.my-about-company>view:nth-of-type(2){
		width: 10%;
		height: 100%;
		float: right;
		line-height: 120upx;
		text-align: center;
	}
	.my-about-company>view:nth-of-type(2)>image{
		width: 18upx;
		height: 18upx;
	}
	.my-about-company:nth-of-type(2){
		padding-bottom:300upx ;
	}
</style>
