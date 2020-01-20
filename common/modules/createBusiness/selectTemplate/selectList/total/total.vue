<template>
	<view class="total-content" v-if="loadEnd">
		<view v-if="dataList.length > 0">
			<scroll-view  scroll-y="true" class="scroll-Y" >
				<view class="scrollContent">
					<!-- 列表 -->
					<view class="list" v-for="(items,index) in dataList" :key="index">
						<items :msgData="items"></items>
					</view>
				</view>
			</scroll-view>
		</view>
		<empty v-else>抱歉，没有相关内容~</empty>
	</view>
</template>

<script>
	import items from "./items.vue";
	import empty from "@/components/common/empty/empty.vue";
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				loadEnd: false, // 判断所有接口是否加载完成
				dataList: null // 后台返回数据
			};
		},
		components: {
			items,
			empty
		},
		computed: {
			...mapGetters(['SELECTTEMPLATERHX'])
		},
		watch: {
		},
		created() {
			console.log('在组件中并不能使用页面生命周期函数');
			this.getList();
		},
		mounted() {
		},
		methods: {
			...mapMutations({
				settotal: 'settotal' // 融头条参数
			}),
			getList(){
				let params = {}; // 请求总数居时 参数为空
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				} else if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/temp', //接口地址。
						data: params,
						method: 'GET',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							console.log(response.data, '---------------response.data--------------')
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								this.dataList = response.data.content;
								this.loadEnd = true; // 加载完成
							} else {
								uni.hideLoading(); // 隐藏 loading
								uni.showToast({
									title: '网络开小差了，请稍后重试',
									icon: 'none',
									duration: 1000
								});
							}
						},
						fail: error => {
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
	.total-content{
		position: fixed;
		width: 750upx;
		background: #fff;
	}
	.scroll-Y {
		height: 100vh;
		padding-bottom: 100upx;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.uni-scroll-view{
		height: 90vh;
	}
	.scroll-view-item {
		height: 90vh;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}
	.scrollContent{
		padding-bottom:10vh;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}
	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 20upx;
		padding-bottom: 50upx;
		text-align: center;
		margin-bottom: 50upx;
	}
	.loading-more-text {
		font-size: 28upx;
		color: #999;
	}
</style>
