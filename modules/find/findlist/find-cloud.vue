<template>
	<view class="find-cloud">
		<view class="my-title">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<!-- 个人中心 -->
			<div class="search-Fd left">
			  服务详情
			</div>
		</view>
		<view class="tian">
			
		</view>
		<view class="find-cloud-image">
			<image :src="arr.serverImg" mode=""></image>
		</view>
		<view class="find-cloud-money">
			<view class="find-cloud-moneyone">{{arr.serverName}}</view>
			<view class="find-cloud-moneytwo">
				<span>¥&nbsp;{{arr.serverMoeny}}</span><span>/月</span><span>会员价:{{arr.VipMoeny}}/年</span>
			</view>
			<view class="find-cloud-moneythr" :class="fold ? 'fold' : 'unfold'">
				{{arr.serverContent}}
			</view>
			<view class="find-cloud-moneyfour" @tap="handleFold">
				<image :src="arrow" mode=""></image>
			</view>
		</view>
		<view class="find-cloud-moneyfive">
			<view class="ind-cloud-PT">
				<image :src="PT" mode=""></image>
				<span>平台认证</span>
			</view>
			<view class="ind-cloud-PT">
				<image :src="FW" mode="" class="FW"></image>
				<span>服务2000万用户</span>
			</view>
			<view class="ind-cloud-PT">
				<image :src="NI" mode=""></image>
				<span>20年行业经验</span>
			</view>
		</view>
		<view class="find-cloud-JG"></view>
		<view class="ind-cloud-FW">
			服务详情
		</view>
		<view class="find-cloud-XQ" v-html="arr.serverDetail"></view>
		<view class="find-cloud-JG" v-if="arr.serverHotList.length!==0"></view>
		<view class="find-cloud-RM" v-if="arr.serverHotList.length!==0">
			<view class="find-cloud-RMone">
				<view></view>
				<view>热门问答</view>
			</view>
			<view class="find-cloud-RMtwo" v-for="(item,index) in arr.serverHotList" :key="index">
				<view>{{item.problem}}</view>
				<view>{{item.answer}}</view>
			</view>
		</view>
		<view class="find-cloud-JGs"></view>
		<view class="find-cloud-BUT">
			<view @tap="phone">联系客服</view>
		</view>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				arr:[],
				arrow: this.Static+'my/down-arrow.png.png',
				PT: this.Static+'my/1.png',
				FW: this.Static+'my/22.png',
				NI: this.Static+'my/33.png',
				fold:true,
				id:'',
			};
		},
		components: {
			quickBtn,
			navigation
		},
		onLoad:function(val){
			console.log(val)
			this.id=val.id;
		},
		created() {
			this.cloud();
			this.shareEachPage(); // 分享
		},
		computed: {
			...mapGetters(['QUICKNAVCO'])
		},
		mounted() {},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber: '4006182288' //拨打电话
				});
			},
			handleFold(){
				this.fold = !this.fold
			},
			cloud(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/cyd/info/'+ this.id +'?lookUserId=' + landRegistLG.user.id, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.arr=response.data.content;
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
				} else if (uni.getStorageSync('UUID')) {
					let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
					console.log(UUID);
					 // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/cyd/info/'+ this.id +'?lookUserId=' + UUID, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.arr=response.data.content;
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
			}
		}
	};
</script>

<style>
	.tian{
		width: 100%;
		height: 88upx;
	}
	.my-title{
		width: 100%;
		height: 88upx;
		background: #FFFFFF;
		border-bottom: 2upx solid #F5F5F5;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.quickBtn-Fd{
		width: 5%;
		margin-left: 38upx;
	}
	.search-Fd{
		position: relative;
		width: 100%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
	}
	.find-cloud{
		width: 100%;
		min-height: 100%;
		background: #FFFFFF;
	}
	.find-cloud-image{
		width: 100%;
		height: 340upx;
	}
	.find-cloud-image>image{
		width: 100%;
		height: 100%;
	}
	.find-cloud-money{
		width: 92%;
		margin: 0 auto;
		min-height: 254upx;
	}
	.find-cloud-moneyone{
		font-size: 40upx;
		color: #2E2E30;
		padding-top:20upx;
	}
	.find-cloud-XQ{
		width: 95%;
		margin: 0 auto;
	}
	.find-cloud-moneytwo{
		font-size: 48upx;
		color: #2E2E30;
		margin-top: -20upx;
	}
	.find-cloud-moneytwo>span:nth-of-type(2){
		font-size: 30upx;
		color: #2E2E30;
		margin-left: 20upx;
	}
	.find-cloud-moneytwo>span:nth-of-type(3){
		font-size: 30upx;
		color: #FAB100;
		margin-left: 30upx;
	}
	.find-cloud-moneythr{
		width: 100%;
		min-height: 30upx;
		font-size: 28upx;
		line-height: 42upx;
		color: #5D5D5D;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
	}
	.fold{
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.find-cloud-moneyfour{
		width: 30upx;
		height: 28upx;
		margin: 10upx auto;
	}
	.find-cloud-moneyfour>image{
		width: 100%;
		height: 100%;
	}
	.find-cloud-moneyfive{
		width: 100%;
		height: 80upx;
		background: #FAFAFA;
		
	}
	.ind-cloud-PT{
		width: 33%;
		height: 80upx;
		line-height: 80upx;
		float: left;
	}
	.ind-cloud-PT>image{
		width: 24upx;
		height: 24upx;
		margin-left: 20upx;
		margin-top: 28upx;
		display: block;
		float: left;
	}
	.ind-cloud-PT>span{
		font-size: 24upx;
		color: #9B9B9B;
		display: block;
		float: left;
		margin-left: 10upx;
	}
	.FW{
		margin-left: -10upx!important;
	}
	.ind-cloud-FW{
		width: 95%;
		height: 90upx;
		margin: 0 auto;
		line-height: 90upx;
		font-size: 30upx;
		color: #2E2E30;
		font-weight: bold;
	}
	.find-cloud-JG{
		width: 100%;
		height: 20upx;
		background: #F5F5F5;
	}
	.find-cloud-JGs{
		width: 100%;
		height: 140upx;
	}
	.find-cloud-RM{
		width: 95%;
		min-height: 200upx;
		margin: 0 auto;
		padding-bottom: 40upx;
	}
	.find-cloud-RMone{
		width: 100%;
		height: 80upx;
		padding: 1upx;
	}
	.find-cloud-RMone>view:nth-of-type(1){
		width: 6upx;
		height: 32upx;
		background: #02C2A2;
		margin-top: 52upx;
		float: left;
	}
	.find-cloud-RMone>view:nth-of-type(2){
		margin-top: 36upx;
		float: left;
		font-size: 34upx;
		color: #2E2E30;
		margin-left:10upx ;
	}
	.find-cloud-RMtwo{
		width: 100%;
		min-height: 100upx;
		margin-top: 40upx;
	}
	.find-cloud-RMtwo>view:nth-of-type(1){
		width: 100%;
		font-size: 30upx;
		color: #2E2E30;
	}
	.find-cloud-RMtwo>view:nth-of-type(2){
		width: 100%;
		font-size: 26upx;
		color: #5D5D5D;
		line-height: 40upx;
		margin-top: 10upx;
	}
	.find-cloud-BUT{
		width: 100%;
		height: 120upx;
		overflow: hidden;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
	}
	.find-cloud-BUT>view{
		width: 90%;
		height: 90upx;
		margin: 0 auto;
		background: #02C2A2;
		border-radius: 4upx;
		margin-top: 16upx;
		text-align: center;
		line-height: 90upx;
		font-size: 28upx;
		color: #FFFFFF;
	}
	
</style>
