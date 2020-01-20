<template>
	<!-- 采购详情 -->
	<view class="Order-details">
		<view class="news-system-title">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<!-- 系统通知 -->
			<div class="search-Fd left">
			  {{i18n.product8}}
			</div>
		</view>
		<view class="tian"></view>
		<view class="Order-details-A">
			<view class="Order-details-Aone">待确认</view>
			<view class="Order-details-Atwo">等待商家确认...</view>
		</view>
		<view class="Order-details-AA">
			<view>{{list.receivUser}} {{list.receivPhone}}</view>
			<view>{{list.receivPcodeStr}} {{list.receivCcodeStr}} {{list.receivAcodeStr}} {{list.receivName}}</view>
			<image :src="Image"></image>
		</view>
		<view class="Order-details-B">
			<!-- 标品 -->
			<image :src="biao" class="Supply-order-tu" v-if="list.orderType == 1"></image>
			<!-- 定制 -->
			<image :src="ding" class="Supply-order-tu" v-if="list.orderType == 0"></image>
			<view>订单号: {{list.orderOrder}}</view>
			<view class="Order-details-E">
				<view class="Order-details-E-img">
					<image :src="list.bannerImg"></image>
				</view>
				<view class="Order-details-E-zi">
					<view>{{list.instrucTitle}}</view>
					<view>{{list.instrucIntro}}</view>
					<view>{{list.moneyStr}}&nbsp;&nbsp;x{{list.orderSpCount}}</view>
				</view>
			</view>
		</view>
		
		<!-- 总价 运费 优惠 -->
		<view class="Order-details-H">
			<view class="Order-details-H-one">
				<view>商品总额</view>
				<view>¥5000.00</view>
			</view>
			<view class="Order-details-H-two">
				<view>运费总计</view>
				<view>156165</view>
			</view>
			<view class="Order-details-H-thr">
				<view>采购单总额约</view>
				<view>-¥5000.00</view>
			</view>
		</view>
		<view class="Order-details-tian"></view>
		<view class="Order-details-Z">
			<view class="Order-details-Z-header">
				<view>总计</view>
				<view>￥4500.00</view>
			</view>
			<view class="Order-details-Z-foot">
				<view class="Order-details-Z-one">
					<image :src="phone"></image><span>联系</span><span>|</span>
				</view>
				<view class="Order-details-Z-two">关闭交易</view>
				<view class="Order-details-Z-thr">确认定制信息</view>
			</view>
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
				list: [],
				num: 0,
				biao: this.Static+'my/biao.png',
				ding: this.Static+'my/ding.png',
				up: this.Static+'my/up-arrow.png',
				phone: this.Static+'my/phone.png',
				id:'',
				thid:[],
				Image: this.Static+'my/Image123.png',
			}
		},
		components: {
			quickBtn,
			navigation,
		},
		computed: {
			i18n () {
			  return this.$t('Howtoshow')  
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO'])
		},
		filters: {
			formatDate: function(value) {
				let date = new Date(value);
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM;
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				let h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				let m = date.getMinutes();
				m = m < 10 ? ('0' + m) : m;
				let s = date.getSeconds();
				s = s < 10 ? ('0' + s) : s;
				return y + '-' + MM + '-' + d +' ' + h + ':' + m + ':' + s; 
			}
		},
		onLoad:function(options){
			this.id = options.id
			console.log(this.id)
			uni.setNavigationBarTitle({
				title: this.i18n.product8
			});
			this.details();
		},
		created(){
			// this.details();
		},
		methods:{
			playphone(e){
				console.log(e,123)
				uni.makePhoneCall({
					phoneNumber: e //仅为示例
				});
			},
			details(){
				console.log(this.id)
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/order/selectOrderInfo?orderId=' + this.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content
							// this.$store.commit('setSupply', this.gong);
							// this.lists = response.data.content.instKeys
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
		}
		
	}
</script>

<style>
	.Order-details{
		width: 100%;
		min-height: 100%;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.news-system-title{
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
		width: 23%;
		margin-left: 38%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
		float: left;
	}
	.Order-details-A{
		width: 100%;
		height: 160upx;
		border-bottom: 2upx solid #F5F5F5;
		background: #FFFFFF;
	}
	.Order-details-Aone{
		font-size: 32upx;
		color: #FAB100;
		padding-top: 40upx;
		padding-left: 30upx;
	}
	.Order-details-Atwo{
		font-size: 28upx;
		color: #BDBDBD;
		height: 30upx;
		line-height: 30upx;
		padding-left: 30upx;
	}
	.Order-details-AA{
		width: 100%;
		height: 160upx;
		position: relative;
		background: #FFFFFF;
	}
	.Order-details-AA>view:nth-of-type(1){
		font-size: 32upx;
		color: #2E2E30;
		padding-top: 30upx;
		padding-left: 30upx;
	}
	.Order-details-AA>view:nth-of-type(2){
		font-size: 26upx;
		color: #9B9B9B;
		padding-left: 30upx;
	}
	.Order-details-AA>image{
		width: 100%;
		height: 4upx;
		position: absolute;
		bottom: 0;
	}
	
	
	.Order-details-B{
		width: 100%;
		min-height: 100upx;
		border-bottom: 2upx solid #EFEFEF;
		background: #FFFFFF;
		position: relative;
		margin-top: 20upx;
	}
	.Supply-order-tu{
		left: 0;
		top: 0;
		width: 100upx;
		height: 100upx;
		position: absolute;
	}
	.Order-details-B>view:nth-of-type(1){
		font-size: 32upx;
		color: #2E2E30;
		line-height: 100upx;
		padding-left: 70upx;
		float: left;
		font-weight: bold;
	}
	.Order-details-D{
		width: 100%;
		height: 100upx;
		border-bottom: 2upx solid #EFEFEF;
		background: #FFFFFF;
		margin-top: 20upx;
		overflow: hidden;
	}
	.Order-details-D-img{
		width: 36upx;
		height: 36upx;
		margin-top: 30upx;
		margin-left: 30upx;
		float: left;
	}
	.Order-details-D-img>image{
		width: 100%;
		height: 100%;
	}
	.Order-details-D-zi{
		float: left; 
		height: 100%;
		width: 50%;
		line-height: 100upx;
		font-size: 32upx;
		color: #2E2E30;
		margin-left: 12upx;
		font-weight: bold;
	}
	.Order-details-E{
		width: 100%;
		height: 250upx;
		background: #FFFFFF;
		overflow: hidden;
		border-top: 2upx solid #F5F5F5;
	}
	.Order-details-E-img{
		width: 168upx;
		height: 174upx;
		margin-left: 36upx;
		margin-top: 24upx;
		float: left;
	}
	.Order-details-E-img>image{
		width: 100%;
		height: 100%;
	}
	.Order-details-E-zi{
		width: 67%;
		height: 174upx;
		margin-top: 24upx;
		float: right;
		margin-right: 24upx;
		position: relative;
	}
	.Order-details-E-zi>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.Order-details-E-zi>view:nth-of-type(2){
		font-size: 28upx;
		color: #9B9B9B;
		line-height: 34upx;
		display: -webkit-box;
		-webkit-line-clamp:2;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
	}
	.Order-details-E-zi>view:nth-of-type(3){
		font-size: 28upx;
		height: 30upx;
		line-height: 30upx;
		color: #9B9B9B;
		position: absolute;
		bottom: 0;
	}
	.Order-details-H{
		width: 100%;
		height: 170upx;
		background: #FFFFFF;
		margin-top: 20upx;
	}
	.Order-details-H-one{
		width: 90%;
		height: 30upx;
		font-size: 28upx;
		color: #2E2E30;
		padding-top: 30upx;
		margin: 0 auto auto auto;
	}
	.Order-details-H-one>view:nth-of-type(1){
		float: left;
		line-height: 30upx;
	}
	.Order-details-H-one>view:nth-of-type(2){
		float: right;
		line-height: 30upx;
	}
	.Order-details-H-two{
		width: 90%;
		height: 30upx;
		font-size: 28upx;
		color: #2E2E30;
		padding-top: 20upx;
		margin: 0 auto auto auto;
	}
	.Order-details-H-two>view:nth-of-type(1){
		line-height: 30upx;
		float: left;
	}
	.Order-details-H-two>view:nth-of-type(2){
		float: right;
		line-height: 30upx;
	}
	.Order-details-H-thr{
		width: 90%;
		height: 30upx;
		font-size: 28upx;
		color: #9B9B9B;
		padding-top: 10upx;
		margin: 0 auto auto auto;
	}
	.Order-details-H-thr>view:nth-of-type(1){
		line-height: 30upx;
		float: left;
	}
	.Order-details-H-thr>view:nth-of-type(2){
		float: right;
		line-height: 30upx;
		color: #FF4D6A;
	}
	.Order-details-Z{
		width: 100%;
		height: 190upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.Order-details-Z-header{
		width: 100%;
		height: 90upx;
		border-bottom: 2upx solid #EFEFEF;
		border-top: 2upx solid #EFEFEF;
	}
	.Order-details-Z-header>view:nth-of-type(1){
		line-height: 90upx;
		margin-left: 36upx;
		font-size: 14px;
		color: #2E2E30;
		float: left;
		font-weight: bold; 
	}
	.Order-details-Z-header>view:nth-of-type(2){
		line-height: 90upx;
		margin-right: 36upx;
		font-size: 14px;
		color: #2E2E30;
		float: right;
		font-weight: bold;
	}
	.Order-details-Z-foot{
		width: 100%;
		height: 100upx;
		
	}
	.Order-details-Z-one{
		width: 34%;
		height: 100%;
		font-size: 32upx;
		color: #2E2E30;
		text-align: center;
		line-height: 100upx;
		float: left;
	}
	.Order-details-Z-one>image{
		width: 32upx;
		height: 32upx;
		display: block;
		float: left;
		margin-left: 70upx;
		margin-top: 34upx;
	}
	.Order-details-Z-one>span:nth-of-type(1){
		display: block;
		float: left;
		margin-left: 10upx;
	}
	.Order-details-Z-one>span:nth-of-type(2){
		color: #E2E2E2;
		display: block;
		float: right;
	}
	.Order-details-Z-two{
		width: 33%;
		height: 100%;
		font-size: 32upx;
		color: #FF4D6A;
		text-align: center;
		line-height: 100upx;
		float: left;
	}
	.Order-details-Z-thr{
		width: 33%;
		height: 100%;
		font-size: 32upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 100upx;
		float: left;
		background-image: linear-gradient(134deg, #15D49F 0%, #57D6CF 100%);
	}
	.Order-details-tian{
		width: 100%;
		height: 190upx;
	}
</style>
