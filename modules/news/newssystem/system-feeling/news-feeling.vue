<template>
	<view class="news-feeling">
		<view class="news-feeling-title">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<div class="search-Fd left">
			  {{i18n.title4}}
			</div>
		</view>
		<!-- 顶部填充 -->
		<view class="tian"></view>
		<view class="news-feeling-name">
			{{list.title}}
		</view>
		<view class="news-feeling-time">
			{{list.createTimeStr}}
		</view>
		<view class="news-feeling-con">
			{{list.content}}
		</view>
		<view class="news-feeling-del" @tap="dels()">
			<view>删除</view>
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
				id:'',
				list:[],
				lists:[],
			}
		},
		components: {
			quickBtn,
			navigation
		},
		computed: {
			i18n () {
			  return this.$t('News')  
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO'])
		},
		onLoad:function(id){
			uni.setNavigationBarTitle({
				title: this.i18n.title1
			});
			this.id=id.id;
			console.log(this.id)
			// 系统通知详情
			this.feeling();
		},
		created() {
			
			this.shareEachPage(); // 分享
		},
		methods:{
			feeling(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/notice/' + this.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list=response.data.content
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
			dels(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/notice/del?ids='+this.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							// 系统通知列表
							this.system();
							uni.navigateBack({})
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
			system(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						//页码
						"page":"1",
						//用户ID
						"userId":landRegistLG.user.id,
					}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/notice', //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.lists=response.data.content.list
							console.log(this.lists)
							this.$store.commit('setsystem', this.lists); // 更新vuex
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
		
	}
</script>

<style>
	.news-feeling{
		width: 100%;
		min-height: 100%;
		background: #FFFFFF;
		/* margin-top: 88upx; */
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.news-feeling-title{
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
		width: 20%;
		margin-left: 40%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
		float: left;
	}
	.news-feeling-name{
		width: 90%;
		margin: 0 auto;
		font-size: 20px;
		color: #2E2E30;
		padding-top: 50upx;
		line-height: 50upx;
	}
	.news-feeling-time{
		width: 90%;
		margin: 0 auto;
		font-size: 24upx;
		color: #9B9B9B;
		padding-top: 20upx;
	}
	.news-feeling-con{
		width: 90%;
		margin: 0 auto;
		font-size: 30upx;
		color: #2E2E30;
		padding-bottom: 150upx;
	}
	.news-feeling-del{
		width: 100%;
		height: 120upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.news-feeling-del>view{
		width: 90%;
		height: 90upx;
		background: #02C2A2;
		border-radius: 4upx;
		margin: 20upx auto;
		text-align: center;
		line-height: 90upx;
		font-size: 28upx;
		color: #FFFFFF;
	}
</style>
