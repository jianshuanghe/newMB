<template>
	<view class="my-Already">
		<!-- 导航栏 agents导航栏标题 -->
		<view class="my-Already-header">
			<view class="my-Already-headerone">
				<span v-for="(item,index) in List" :key="index" :class="numa==index?'changeColors':''" @tap="gotoGood(index)">{{item}}</span>
			</view>
		</view>
		<!-- 已发留言列表 -->
		<!-- <view class="my-Already-header-list" @tap="gotoxi()">
			<view class="my-Already-header-list2">
				<view class="my-Already-header-list2-zi">这里是留言的表差点阿萨德阿萨德德</view>
				<view class="my-Already-header-list2-nei">阿萨德回外三等奖加湿机阿萨德开讲啦奇数的垃圾啊落实到空间里看到转支承这里是内容。爱上嗲话说得好我也不知道对不对安徽省短的</view>
				<view class="my-Already-header-list2-xin">
					<view>连泽贇<span>|</span>176 0012 1378</view>
					<view>今天 19:04:38</view>
				</view>
			</view>
			<view class="cler"></view>
		</view> -->
		<!-- 全部 -->
		<whole v-if="numa === 0"></whole>
		<!-- 产品 -->
		<product v-if="numa === 1"></product>
		<!-- 资讯 -->
		<information v-if="numa === 2"></information>
	</view>
</template>

<script>
	import whole from './Already/Already-whole';
	import product from './Already/Already-product';
	import information from './Already/Already-information';
	
	export default {
		data() {
			return {
				List:['全部','产品','资讯'],
				numa:0,
			}
		},
		mounted() {
	
		},
		components:{
			whole,
			product,
			information
		},
		onLoad() {
			
		},
		created() {
			this.shareEachPage(); // 分享
		},
		methods: {
			gotoGood(index) {
				this.numa = index;
			},
			gotoxi(){
				console.log('to已发留言详情')
				uni.navigateTo({
					url: '/modules/myCompany/myBuyeronAlready/my-BuyeronAlready/Message-details/Already-details',
				});
			},
		},
		computed: {
			
		},
	}
</script>

<style>
	.my-Already{
		width: 100%;
		min-height: 100%;
	}
	.my-Already-header{
		width: 100%;
		height: 72upx;
		border-bottom: 2upx solid #F5F5F5;
		position: fixed;
		top: 88upx;
		background: #FFFFFF;
	}
	.my-Already-headerone{
		width: 60%;
		height: 100%;
		margin-left: 20upx;
		float: left;
	}
	.my-Already-headerone>span{
		font-size: 24upx;
		color: #9B9B9B;
		/* line-height: 72upx; */
		float: left;
		margin-left: 40upx;
		margin-top: 18upx;
	}
	.changeColors{
		padding: 0upx 16upx 0upx 16upx;
		background: #E2E2E2;
		border-radius: 26upx;
		color: #2E2E30!important;
	}
	.my-Already-header-list{
		width: 90%;
		min-height: 200upx;
		height: auto;
		border-bottom: 2upx solid #F5F5F5;
		margin: 0 auto;
		padding-bottom: 40upx;
	}
	.my-Already-header-list2{
		width: 100%;
		/* height: 100%; */
	}
	.my-Already-header-list2-zi{
		font-size: 20px;
		color: #2E2E30;
		padding-top: 66upx;
		line-height: 64upx;
	}
	.my-Already-header-list2-nei{
		font-size: 28upx;
		color: #2E2E30;
		line-height: 42upx;
		padding-top: 32upx;
		overflow:hidden;
		text-overflow:ellipsis;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
	}
	.my-Already-header-list2-xin{
		width: 100%;
		height: 30upx;
		
		padding-top: 32upx;
	}
	.my-Already-header-list2-xin>view:nth-of-type(1){
		width: 50%;
		/* height: 100%; */
		font-size: 26upx;
		color: #9B9B9B;
		line-height: 30upx;
		float: left;
	}
	.my-Already-header-list2-xin>view:nth-of-type(1)>span{
		padding-left: 10upx;
		padding-right: 10upx;
	}
	.my-Already-header-list2-xin>view:nth-of-type(2){
		width: 40%;
		/* height: 100%; */
		line-height: 30upx;
		font-size: 26upx;
		color: #9B9B9B;
		float: right;
		text-align: right;
	}
	.cler{
		clear: both;
	}
</style>
