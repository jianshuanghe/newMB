<template>
	<view class="my">
		<!-- 顶部标题 -->
		<myTitle></myTitle>
		<!-- 头部内容 -->
		<headers></headers>
		<!-- 关注 收藏 粉丝数 浏览数 获赞数 -->
		<functions></functions>
		<!-- 卖在陌拜 -->
		<sell></sell>
		<!-- 买在陌拜 -->
		<buy></buy>
		<!-- 陌拜工具 -->
		<tool></tool>
		<!-- 公司信息 会员中心 账户中心 设置 -->
		<information></information>
		<!-- 关于陌拜商机 意见反馈 -->
		<about></about>
	</view>
</template>

<script>
	import tabBar from "@/components/mbbo/homeTabBar/tab_bar.vue";
	import myTitle from "./my-list/my-title.vue";
	import headers from "./my-list/my-header.vue";
	import functions from "./my-list/my-function.vue";
	import sell from "./my-list/my-sell.vue";
	import buy from "./my-list/my-buy.vue";
	import tool from "./my-list/my-tool.vue";
	import information from "./my-list/my-information.vue";
	import about from "./my-list/my-about.vue";
	import {
		mapMutations,
		mapGetters
	} from 'vuex';
	export default {
		data() {
			return {
				list:[]
			}
		},
		components: {
			myTitle,
			headers,
			functions,
			sell,
			buy,
			tool,
			information,
			about
		},
		computed: {
			i18n () {
			  return this.$t('Home_title')  
			},
			...mapGetters(['GET_MY'])
		},
		created() {
			this.getmy();
			this.shareEachPage(); // 分享
		},
		methods:{
			getmy() {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/'+landRegistLG.user.id, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							if (response.data.ret === '202') {
								uni.removeStorageSync('landRegist');
								uni.removeStorageSync('clickItems');
								this.$store.commit('setHome', 1);
								this.$store.commit('setLandRegist', 0);
								uni.showToast({
									title: '登录已过期，请重新登录',
									icon: 'none',
									duration: 1000
								});
								if (!uni.getStorageSync('landRegist')) {
									this.landRegistra(); // 判断登录状态
								}
							}else{
								this.list = response.data.content
								this.$store.commit('setMy', this.list); // 更新vuex
							}
							// console.log(response.data);
							
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
		}
		
	}
</script>

<style>
	.my{
		width: 100%;
		min-height: 100%;
	}
</style>
