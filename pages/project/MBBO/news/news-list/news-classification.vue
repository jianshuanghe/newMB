<template>
	<view class="news-classification">
		<view class="news-classification-hua">
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0">
				<!-- 系统通知 -->
				<view class="news-classification-fen" @tap="gotosystem()">
					<view><image :src="news"></image></view>
					<view>系统通知</view>
					<view class="weidu" v-if="xitong"></view>
				</view>
				<!-- 获赞与收藏 -->
				<view class="news-classification-fen" @tap="gotoPraisedAndCollection(1)">
					<view><image :src="zan"></image></view>
					<view>获赞与收藏</view>
					<view class="weidu" v-if="zansh"></view>
				</view>
				<!-- 粉丝 -->
				<view class="news-classification-fen" @tap="gotomyFocusonfans(2)">
					<view><image :src="fensi"></image></view>
					<view>粉丝</view>
					<view class="weidu" v-if="feng"></view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import { mapMutations,mapGetters } from 'vuex';
	export default {
		data() {
			return {
				zan:this.Static+'news/1.png',
				fensi:this.Static+'news/2.png',
				shou:this.Static+'news/3.png',
				news:this.Static+'news/4.png',
				list:[],
				num:[],
				shu:[],
				xitong:false,
				zansh:false,
				feng:false,
			}
		},
		mounted() {
	
		},
		watch: {
			GET_NEWS: {
				handler(a, b) {
					console.log(a, b)
					this.shu = a.num;
					console.log(this.shu.noticeCount)
					if(this.shu.noticeCount!=0&&this.shu.noticeCount!=undefined){
						setTimeout(() => {
							this.xitong=true;
						}, 500);
					}else if(this.shu.likeFollowMesgCount!=0&&this.shu.likeFollowMesgCount!=undefined){
						setTimeout(() => {
							this.zansh=true;
						}, 500);
					}else if(this.shu.fansMesgCount != 0&&this.shu.fansMesgCount!=undefined){
						setTimeout(() => {
							this.feng=true;
						}, 500);
					}else if(this.shu.noticeCount==0){
						this.xitong=false;
					}else if(this.shu.likeFollowMesgCount==0){
						this.zansh=false;
					}else if(this.shu.fansMesgCount == 0){
						this.feng=false;
					}
					
				},
				deep: true
			},
		
		},
		methods: {
			gotoPraisedAndCollection(e){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/notice/readByType?userId='+landRegistLG.user.id+'&type=0', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.Unread();
							console.log('获赞与收藏');
							uni.navigateTo({
								url: '/modules/news/newsPraisedAndCollection/news-PraisedAndCollection?id=' + e,
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
			gotomyFocusonfans(e){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/notice/readByType?userId='+landRegistLG.user.id+'&type=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.Unread();
							console.log('已关注 粉丝');
							uni.navigateTo({
								url: '/modules/myCompany/myFocusonfans/my-Focusonfans?id=' + e,
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
			gotosystem(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/notice/readByType?userId='+landRegistLG.user.id+'&type=3', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.Unread();
							console.log('系统通知');
							uni.navigateTo({
								url: '/modules/news/newssystem/news-systemlist',
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
			i18n() {
			  return this.$t('My')  
			},
			...mapGetters(['GET_NEWS'])
		},
	}
</script>

<style>
	.news-classification{
		width: 100%;
		height: 166upx;
		background: #FFFFFF;
		
	}
	.news-classification-hua{
		overflow: auto;
	}
	.scroll-view_H {
		width: 100%;
		height: 166upx;
		float: left;
	}
	.news-classification-fen{
		width: 32.5%;
		height: 100%;
		padding: 0.1upx;
		text-align: center;
		float: left;
		position: relative;
	}
	.news-classification-fen>view:nth-of-type(1){
		width: 48upx;
		height: 48upx;
		margin: 44upx auto auto auto;
	}
	.news-classification-fen>view:nth-of-type(1)>image{
		width: 100%;
		height: 100%;
	}
	.news-classification-fen>view:nth-of-type(2){
		font-size: 24upx;
		color: #2E2E30;
		padding-top: 16upx;
	}
	.weidu{
		width: 16upx;
		height: 16upx;
		border-radius: 50%;
		background:  #FF2A25;
		position: absolute;
		top: 40upx;
		right: 84upx;
	}
</style>
