<template>
	<view class="my-sell">
		<!-- 卖在陌拜 -->
		<view class="my-sell-Title">{{i18n.mobai}}</view>
		<view class="my-sell-Enquiry">
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0">
				<!-- 买家留言 -->
				<view class="my-sell-Enquirys" @tap="gotosell(1)">
					<view><image :src="maijia"></image></view>
					<view>{{i18n.mobai1}}({{list.bMsgCount}})</view>
				</view>
				<!-- 供应订单 -->
				<view class="my-sell-Enquirys" @tap="gotosupply(1)">
					<view><image :src="gongyin"></image></view>
					<view>{{i18n.mobai2}}({{list.bOrderCount}})</view>
				</view>
				<!-- 我的产品 -->
				<view class="my-sell-Enquirys" @tap="gotoproduct()">
					<view><image :src="wode"></image></view>
					<view>{{i18n.mobai3}}({{list.bInstSpCount}})</view>
				</view>
				<!-- 我的資訊 -->
				<view class="my-sell-Enquirys" @tap="gotoproduct(1)">
					<view><image :src="zixun"></image></view>
					<view>{{i18n.mobai4}}({{list.bInstNewsCount}})</view>
				</view>
				<!-- 第二版 勿删 -->
				<!-- <view class="my-sell-Enquirys">
					<view><image :src="logo"></image></view>
					<view>{{i18n.mobai5}}{50}</view>
				</view>
				<view class="my-sell-Enquirys">
					<view><image :src="logo"></image></view>
					<view>{{i18n.mobai5}}{50}</view>
				</view>
				<view class="my-sell-Enquirys">
					<view><image :src="logo"></image></view>
					<view>{{i18n.mobai5}}{50}</view>
				</view> -->
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				maijia: this.Static+'my/5.png',
				gongyin: this.Static+'my/4.png',
				wode: this.Static+'my/7.png',
				zixun: this.Static+'my/3.png',
				list:[],
			}
		},
		mounted() {
	
		},
		created() {
			this.sell();
		},
		methods: {
			sell() {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/indexCountData/'+landRegistLG.user.id, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content
							console.log(this.list)
							// this.$store.commit('setMation', this.List); // 更新vuex
							
						},
						fail: (error) => {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络繁忙，请稍后',
								icon: 'none',
								duration: 1000
							});
							console.log(error, '网络繁忙，请稍后');
						}
					});
				}
			},
			gotosell(e){
				if(e === 1){
					console.log('to买家留言')
					uni.navigateTo({
						url: '/modules/myCompany/myBuyeronAlready/my-BuyeronAlready?id='+e,
					});
				}
			},
			gotoproduct(e){
				if(e === 1){
					uni.navigateTo({
						url: '/modules/InstructionsPrice/myproduct/myproduct-shu?id='+e,
					});
				}else{
					console.log('to我的产品')
					uni.navigateTo({
						url: '/modules/InstructionsPrice/myproduct/myproduct-shu',
					});
				}
			},
			gotosupply(e){
				console.log('to供应订单')
				uni.navigateTo({
					url: '/modules/InstructionsPrice/Order/Order?id='+e,
				});
			}
		},
		computed: {
			i18n() {
			  return this.$t('My')  
			},
		},
	}
</script>

<style>
	.my-sell{
		width: 100%;
		height: 206upx;
		background: #FFFFFF;
		margin-top: 20upx;
	}
	.my-sell-Title{
		font-size: 30upx;
		color: #2E2E30;
		font-weight: bold;
		padding-top: 20upx;
		padding-left: 30upx;
	}
	.my-sell-Enquiry{
		overflow: auto;
	}
	.scroll-view_H{
		/* width: 180%;*/
		min-width: 100%;
		height: 120upx;
	}
	.my-sell-Enquirys{
		/* width: 13.5%;*/
		width: 183upx;
		height: 100%;
		text-align: center;
		padding: 0.1upx;
		float: left;
	}
	.my-sell-Enquirys>view:nth-of-type(1){
		width: 40upx;
		height: 40upx;
		margin: 20upx auto auto auto;
	}
	.my-sell-Enquirys>view:nth-of-type(1)>image{
		width: 100%;
		height: 100%;
	}
	.my-sell-Enquirys>view:nth-of-type(2){
		font-size: 24upx;
		color: #5D5D5D;
		padding-top: 15upx;
	}
</style>
