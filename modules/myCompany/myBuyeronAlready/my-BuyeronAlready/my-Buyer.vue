<template>
	<view class="my-Buyer">
		
		<!-- 导航栏 agents导航栏标题 -->
		<view class="my-Buyer-header">
			<view class="my-Buyer-headerone">
				<span v-for="(item,index) in List" :key="index" :class="numa==index?'changeColors':''" @tap="gotoGood(index)">{{item}}</span>
			</view>
			<view class="my-Buyer-headertwo" @tap="all()">
				<image :src="wei"></image><span>清除未读</span>
			</view>
		</view>
		<!-- 收到留言列表 -->
		<!-- 全部 -->
		<whole v-if="numa === 0"></whole>
		<!-- 产品 -->
		<product v-if="numa === 1"></product>
		<!-- 资讯 -->
		<information v-if="numa === 2"></information>
		
	</view>
</template>

<script>
	import wei from '@/static/mbcImg/my/weidu.png';
	import whole from './Buyer/Buyer-whole';
	import product from './Buyer/Buyer-product';
	import information from './Buyer/Buyer-information';
	import { mapMutations,mapGetters } from 'vuex';
	export default {
		data() {
			return {
				List:['全部','产品','资讯'],
				numa:0,
				wei:wei,
			}
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
				return y + '.' + MM + '.' + d ;
			}
		},
		methods: {
			gotoGood(index) {
				this.numa = index;
			},
			all(){
				uni.showModal({
					title: '提示',
					content: '是否清除全部未读？',
					confirmColor:' #02C2A2',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			gotoxi(e){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/msg/read/' + e, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							// this.list=response.data.content
							// this.$store.commit('setMation', this.List); // 更新vuex
							this.Message();
							this.Unread();
							console.log('to已发留言详情')
							uni.navigateTo({
								url: '/modules/myCompany/myBuyeronAlready/my-BuyeronAlready/Message-details/Buyer-details?id='+ e,
							});
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
			// 消息列表
			Message(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/msg/selectList?userId='+landRegistLG.user.id+'&page=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.lists = response.data.content.list
							this.$store.commit('setnews', this.lists);
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
			Unread(){//消息数量
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/notice/index?userId='+landRegistLG.user.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.num = response.data.content
							this.$store.commit('setnum', this.num);
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
		},
		computed: {
			...mapGetters(['GET_NEWS'])
		},
	}
</script>

<style>
	.my-Buyer{
		width: 100%;
		min-height: 100%;
	}
	.my-Buyer-header{
		width: 100%;
		height: 72upx;
		border-bottom: 2upx solid #F5F5F5;
		position: fixed;
		top: 88upx;
		background: #FFFFFF;
		z-index: 100;
	}
	.my-Buyer-headerone{
		width: 60%;
		height: 100%;
		margin-left: 20upx;
		float: left;
	}
	.my-Buyer-headerone>span{
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
	.my-Buyer-headertwo{
		width: 20%;
		height: 100%;
		float:right;
		font-size: 24upx;
		color: #9B9B9B;
		text-align: center;
		line-height: 72upx;
		display: flex;
	}
	.my-Buyer-headertwo>image{
		width: 18upx;
		height: 24upx;
		margin-top: 24upx;
		display: block;
	}
	.my-Buyer-headertwo>span{
		margin-left: 10upx;
	}
	
</style>
