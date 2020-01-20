<template>
	<div class="madeList-content">
		<div class="madeList">
			<scroll-view class="scroll-H" 
			:scroll-y="true" 
			:style="{ height: '19vh' }" 
			@scrolltolower="loadMore" >
				<div class="list" v-if='madeList.listData.length > 0'>
					<!-- 单选框 -->
					<rRadio 
					:dataList="madeList.listData" 
					marginBottomShow="" 
					type="4" 
					@tap-Radio="tapRadio" 
					v-if="true"
					></rRadio>
				</div>
				<div class="nullList" v-else>
					您没有可以添加的定制模板！
				</div>
				<view class="loading-more">
					<text class="loading-more-text">{{ loadingText }}</text>
				</view>
			</scroll-view>
		</div>
	</div>
</template>

<script>
import rRadio from '@/components/common/RHX/rRadio/rRadio';
export default {
	components: {
		rRadio
	},
	data() {
		return {
			scrollTop: 0,
			old: {
				scrollTop: 0
			},
			loadingText: '加载更多...',
			madeList: {
				// 消息
				loadingText: '加载更多...',
				search: {
					// 搜索
					pageNum: 0, // 总页数
					searchCondition: {
						// 分页属性
						page: '1'
					}
				},
				listData: [] // 列表数据
			},
		};
	},
	created() {
		this.getList(this.madeList);
	},
	mounted() {},
	methods: {
		loadMore: function() {
			console.log('触发加载更多。。。');
			let pageNum = this.madeList.search.pageNum;
			let page = Number(this.madeList.search.searchCondition.page);
			console.log(page, '当前页数1');
			console.log(pageNum, '总页数1');
			console.log(this.madeList, '加载更多，原始数据');
			if (page < pageNum) {
				// 当前页数小于总页数时上啦加载数据
				setTimeout(() => {
					this.getMoreList(this.madeList);
				}, 500);
			} else {
				this.loadingText = '已经没有数据了';
				this.madeList.loadingText = this.loadingText;
				uni.showToast({
					title: '已经没有数据了！',
					icon: 'none',
					duration: 1000
				});
			}
		},
		goScrollTop: function(e) {
			// 解决view层不同步的问题
			this.scrollTop = this.old.scrollTop;
			console.log(this.scrollTop - 50);
			this.$nextTick(function() {
				this.scrollTop = Number(this.scrollTop - 50)
			});
		},
		getList(e) {
			if (!uni.getStorageSync('landRegist')) {
				this.landRegistra(); // 判断登录状态
			} else if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					// url: this.api2 + '/rest-rp/instruc?instrucCustType=1&userId=' + landRegistLG.user.id + '&page=1', //接口地址。
					url: this.api2 + '/rest-rp/instruc?instrucCustType=1&userId=' + landRegistLG.user.id + '&page=1', //接口地址。
					data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response.data, '---------------response.data--------------')
						if (response.data.ret === '200') {
							e.listData = response.data.content.list; // 第一页返回的数据
							console.log(e.listData);
							e.search.pageNum = this.pageNums(response.data.content.count); // 总页数
							console.log(response.data.content.count, e.search.pageNum);
							if (e.search.pageNum === 1) {
								// 总页数为1时，显示没有数据了
								this.loadingText = '已经没有数据了';
								e.loadingText = '已经没有数据了!';
							}
							uni.hideLoading(); // 隐藏 loading
						} else if (response.data.ret === '202') {
							uni.hideLoading(); // 隐藏 loading
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
						} else if (response.data.ret === '400') {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: response.data.msg,
								icon: 'none',
								duration: 1000
							});
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
			
		},
		getMoreList(e) {
			console.log(e, '数显数据函数的参数More');
			e.search.searchCondition.page = String(parseInt(e.search.searchCondition.page) + 1);
			if (!uni.getStorageSync('landRegist')) {
				this.landRegistra(); // 判断登录状态
			} else if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					// url: this.api2 + '/rest-rp/instruc?instrucCustType=1&userId' + landRegistLG.user.id + '&page=' + e.search.searchCondition.page, //接口地址。
					url: this.api2 + '/rest-rp/instruc?instrucCustType=1&userId=' + landRegistLG.user.id + '&page=' + e.search.searchCondition.page, //接口地址。
					data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response.data, '---------------response.data--------------')
						if (response.data.ret === '200') {
							uni.hideLoading(); // 隐藏 loading
							e.listData = e.listData.concat(response.data.content.list);
							uni.hideLoading(); // 隐藏 loading
							this.goScrollTop(); // 页面触底之后调取loadMore方法，为了让用户再次调用此方法，需要自動将scroll向上滚动一些位置，这样下次滑动才会触发loadMore方法，详细需要看API
						}  else if (response.data.ret === '202') {
							uni.hideLoading(); // 隐藏 loading
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
						} else if (response.data.ret === '400') {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: response.data.msg,
								icon: 'none',
								duration: 1000
							});
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
		},
		// 单选获取值
		tapRadio(e) {
			console.log(e, '用户选择的立即定制按钮');
			this.$emit('tap-MadeList', e);
		}
	}
};
</script>

<style>
	.list{
		position: relative;
		width: 100vw;
		margin: 0;
		padding: 0;
	}
	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 20upx;
		padding-bottom: 50upx;
		text-align: center;
	}
	.loading-more-text {
		font-size: 28upx;
		color: #999;
	}
	.nullList{
		position: relative;
		width: 100%;
		text-align: center;
	}
</style>
