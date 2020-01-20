<template>
	<view class="Order">
		<view class="my-Focusonfans-header">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<view class="my-Focusonfans-title">
				<view v-for="(item,index) in list" :key="index" :class="num==index?'changeColor':''" @tap="gotoGood(index)">{{item}}</view>
			</view>
		</view>
		<!-- 填充 -->
		<view class="tian"></view>
		<!-- 供应订单 -->
		<Supply v-if="num === 0"></Supply>
		<!-- 采购订单 -->
		<Purchase v-if="num === 1"></Purchase>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import Supply from './Order-list/Supply-order'
	import Purchase from './Order-list/Purchase-order'
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list: [],
				num: 3,
				gong:[],
				cai:[],
			}
		},
		components: {
			quickBtn,
			navigation,
			Supply,
			Purchase
		},
		computed: {
			i18n () {
			  return this.$t('Howtoshow')  
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
		onLoad:function(options){
			this.id = options.id
			console.log(this.id)
			uni.setNavigationBarTitle({
				title: this.i18n.product4
			});
			if(this.id == '1'){
				this.num = 0;
			}else if(this.id == '2'){
				
				this.num = 1;
			}
			this.list.push(this.i18n.product5)
			this.list.push(this.i18n.product6)
			// 供应订单
			// this.Supply();
			// 采购订单
			// this.Purchase();
		},
		created(){
			this.shareEachPage(); // 分享
		},
		methods:{
			gotoGood(index) {
				this.num = index;
				console.log(index)
			},
			Supply(){//供应订单
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.gong = response.data.content.list
							this.$store.commit('setSupply', this.gong);
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
			Purchase(){//采购订单
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.cai = response.data.content.list
							this.$store.commit('setPurchase', this.cai);
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
	.Order{
		width: 100%;
		min-height: 100%;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.my-Focusonfans-header{
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
	.my-Focusonfans-title{
		margin: 0 auto;
		width: 40%;
		height: 100%;
		display: flex;
	}
	.my-Focusonfans-title>view{
		width: 50%;
		height: 100%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
		position: relative;
	}
	.changeColor {
		color: #02C2A2!important;
		font-weight: bold;
		font-size: 32upx;
	}
	
	.changeColor:before {
		content: '';
		position: absolute;
		left: 36%;
		top: 70upx;
		bottom: auto;
		right: auto;
		height: 7upx;
		width: 30%;
		background-color: #02C2A2;
		color: #02C2A2;
	}
</style>
