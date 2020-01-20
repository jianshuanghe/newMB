<template>
	<view class="myBuyeronAlready">
		<view class="myBuyeronAlready-header">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<view class="myBuyeronAlready-title">
				<view v-for="(item,index) in list" :key="index" :class="num==index?'changeColor':''" @tap="gotoGood(index)">{{item}}</view>
			</view>
		</view>
		<view class="tian"></view>

		<!-- 买家留言 -->
		<Buyer v-if="num === 0"></Buyer>

		<!-- 已发留言 -->
		<Already v-if="num === 1"></Already>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import Buyer from "./my-BuyeronAlready/my-Buyer";
	import Already from "./my-BuyeronAlready/my-Already";
	
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list: [],
				num: 0,
				Mess:[],
				Alr:[],
				pages:'1',
			}
		},
		components: {
			Buyer,
			Already,
			quickBtn,
			navigation
		},
		computed: {
			i18n () {
			  return this.$t('Mypersonal')  
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO'])
		},
		onLoad:function(e){
			console.log(e.id)
			if(e.id === '1'){
				this.num=0;
			}else if(e.id === '2'){
				this.num=1;
			}
			uni.setNavigationBarTitle({
				title: this.i18n.message1
			});
			this.list.push(this.i18n.message2)
			this.list.push(this.i18n.message3)
		},
		created() {
			//收到消息列表
			this.Message();
			//发给别人的留言
			this.Already();
			this.shareEachPage(); // 分享
		},
		methods:{
			
			gotoGood(index) {
				this.num = index;
			},
			// 收到消息列表
			Message(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/msg/selectList?userId='+landRegistLG.user.id+'&page='+this.pages, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.Mess = response.data.content.list;
							this.pages++;
							this.$store.commit('setnews', this.Mess);
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
			//发给别人的留言
			Already(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/msg/selectList?myUserId='+landRegistLG.user.id+'&page=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.Alr = response.data.content.list
							this.$store.commit('setAlr', this.Alr);
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
	.myBuyeronAlready{
		width: 100%;
		min-height: 100%;
		background: #FFFFFF;
	}
	.tian{
		width: 100%;
		height: 162upx;
	}
	.myBuyeronAlready-header{
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
	.myBuyeronAlready-title{
		margin: 0 auto;
		width: 40%;
		height: 100%;
		display: flex;
	}
	.myBuyeronAlready-title>view{
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
