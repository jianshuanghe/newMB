<template>
	<view class="my-buy">
		<!-- 买在陌拜 -->
		<view class="my-buy-Title">{{i18n.mobais}}</view>
		<view class="my-buy-Enquiry">
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0">
				<!-- 已发留言 -->
				<view class="my-buy-Enquirys" @tap="gotosell(2)">
					<view><image :src="yifa"></image></view>
					<view>{{i18n.mobai6}}({{list.cMsgCount}})</view>
				</view>
				<!-- 采购订单 -->
				<view class="my-buy-Enquirys" @tap="gotosupply(2)">
					<view><image :src="caigou"></image></view>
					<view>{{i18n.mobai7}}({{list.cOrderCount}})</view>
				</view>
				<!-- 我的采购 -->
				<view class="my-buy-Enquirys" @tap="gotoPurchase()">
					<view><image :src="wode"></image></view>
					<view>{{i18n.mobai8}}({{list.cPurcCount}})</view>
				</view>
				<!-- 第二版 勿删 -->
				<!-- <view class="my-buy-Enquirys">
					<view><image :src="logo"></image></view>
					<view>{{i18n.mobai4}}(40)</view>
				</view> -->
				
				<!-- <view class="my-buy-Enquirys">
					<view><image :src="logo"></image></view>
					<view>{{i18n.mobai5}}{50}</view>
				</view>
				<view class="my-buy-Enquirys">
					<view><image :src="logo"></image></view>
					<view>{{i18n.mobai5}}{50}</view>
				</view>
				<view class="my-buy-Enquirys">
					<view><image :src="logo"></image></view>
					<view>{{i18n.mobai5}}{50}</view>
				</view> -->
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import wode from '@/static/mbcImg/my/10.png'
	import caigou from '@/static/mbcImg/my/11.png'
	import yifa from '@/static/mbcImg/my/8.png'
	export default {
		data() {
			return {
				wode:wode,
				caigou:caigou,
				yifa:yifa,
				list:[],
			}
		},
		mounted() {
	
		},
		created() {
			this.buy();
		},
		methods: {
			buy() {
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
				}else if(e === 2){
					console.log('已发留言')
					uni.navigateTo({
						url: '/modules/myCompany/myBuyeronAlready/my-BuyeronAlready?id='+e,
					});
				}
			},
			gotosupply(e){
				console.log('to供应订单')
				uni.navigateTo({
					url: '/modules/InstructionsPrice/Order/Order?id='+e,
				});
			},
			gotoPurchase(){
				console.log('to我的采购')
				uni.navigateTo({
					url: '/modules/InstructionsPrice/Purchase/Purchase',
				});
			},
		},
		computed: {
			i18n() {
			  return this.$t('My')  
			},
		},
	}
</script>

<style>
	.my-buy{
		width: 100%;
		height: 206upx;
		background: #FFFFFF;
		margin-top: 20upx;
	}
	.my-buy-Title{
		font-size: 30upx;
		color: #2E2E30;
		font-weight: bold;
		padding-top: 20upx;
		padding-left: 30upx;
	}
	.my-buy-Enquiry{
		overflow: auto;
	}
	.scroll-view_H{
		/* width: 180%;*/
		min-width: 100%;
		height: 120upx;
	}
	.my-buy-Enquirys{
		/* width: 13.5%;*/
		width: 183upx;
		height: 100%;
		text-align: center;
		padding: 0.1upx;
		float: left;
	}
	.my-buy-Enquirys>view:nth-of-type(1){
		width: 40upx;
		height: 40upx;
		margin: 20upx auto auto auto;
	}
	.my-buy-Enquirys>view:nth-of-type(1)>image{
		width: 100%;
		height: 100%;
	}
	.my-buy-Enquirys>view:nth-of-type(2){
		font-size: 24upx;
		color: #5D5D5D;
		padding-top: 15upx;
	}
</style>
