<template>
	<view class="news-systemlist">
		<!-- 系统通知列表 -->
		<system></system>
	</view>
</template>

<script>
	import system from "./news-system";
	import {
		mapMutations,
		mapGetters
	} from 'vuex';
	export default {
		data() {
			return {
				lists:[],
			}
		},
		components: {
			system,
		},
		created() {
			// 系统通知消息列表
			this.system();
			this.shareEachPage(); // 分享
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.title1
			});
		},
		computed: {
			i18n () {
			  return this.$t('News')  
			},
			...mapGetters(['GET_NEWS'])
		},
		methods:{
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
		},
	}
</script>

<style>
	.news-systemlist{
		width: 100%;
		min-height: 100%;
	}
</style>
