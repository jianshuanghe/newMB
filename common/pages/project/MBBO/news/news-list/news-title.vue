<template>
	<view class="news-title">
		<div class="quickBtn-Fd left">
		  <quickBtn></quickBtn>
		</div>
		<div class="search-Fd left">
		  {{i18n.title1}}
		</div>
		<!-- 全部已读 -->
		<div class="Already" @tap="all()">
			{{i18n.title6}}
		</div>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import {
		mapMutations,
		mapGetters
	} from 'vuex';
	export default {
		data() {
			return {
				list:[],
				num:[],
			}
		},
		components: {
			quickBtn,
		},
		computed: {
			i18n () {
			  return this.$t('News')  
			},
			...mapGetters(['GET_NEWS'])
		},
		methods: {
			all(){
				var that=this
				uni.showModal({
					title: '提示',
					content: '是否全部已读',
					confirmColor:' #02C2A2',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							if (uni.getStorageSync('landRegist')) {
								let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
								console.log(landRegistLG.user.id);
								// let params = {}; // 请求总数居时 参数为空
								uni.showLoading({ // 展示loading
									title: '加载中'
								});
								uni.request({
									url: that.api2 + '/rest-rp/notice/readByType?userId='+landRegistLG.user.id, //接口地址。
									// data: params,
									method: 'GET',
									header: {
										Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
									},
									success: (response) => {
										uni.hideLoading();
										console.log(response);
										that.Unread();
										that.Message();
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
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
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
							this.list = response.data.content.list
							this.$store.commit('setnews', this.list);
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
		}
		
	}
</script>

<style>
	.news-title{
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
	.Already{
		float: right;
		font-size: 26upx;
		color: #02C2A2;
		line-height: 88upx;
		margin-right: 30upx;
	}
	.news-Unread-weidu{
		width: 90%;
		height: 60upx;
		margin: 0 auto;
		font-size: 24upx;
		color: #FAB100;
		line-height: 60upx;
	}
</style>
