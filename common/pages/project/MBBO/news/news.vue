<template>
	<view class="news">
		<!-- 顶部标题 -->
		<myTitle></myTitle>
		<scroll-view class="scroll-v list" scroll-y="true" @scrolltolower="loadMore()">
			<!-- 顶部填充 -->
			<view class="tian"></view>
			<!-- 未读消息数 -->
			<Unread></Unread>
			<!-- 消息分类 -->
			<classification></classification>
			<!-- 消息列表 -->
			<Message></Message>
		</scroll-view>
	</view>
</template>

<script>
	import tabBar from "@/components/mbbo/homeTabBar/tab_bar.vue";
	import myTitle from "./news-list/news-title.vue";
	import Unread from "./news-list/news-Unread.vue";
	import classification from "./news-list/news-classification.vue";
	import Message from "./news-list/news-Message.vue";
	import {
		mapMutations,
		mapGetters
	} from 'vuex';
	export default {
		data() {
			return {
				list:[],
				num:[],
				pages:'1',
			}
		},
		components: {
			myTitle,
			Unread,
			classification,
			Message
		},
		created() {
			// 消息列表
			this.Message();
			//消息数量
			this.Unread();
			this.shareEachPage(); // 分享
		},
		computed: {
			...mapGetters(['GET_NEWS'])
		},
		methods:{
			loadMore:function(){
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
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
								}else if(response.data.content.list.length!==0){
									response.data.content.list.map((item,index)=>{
										this.list.push(item)
									})
									this.pages++;
									this.$store.commit('setnews', this.list);
								}
							}
							
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
						url: this.api2 + '/rest-rp/msg/selectList?userId='+landRegistLG.user.id+'&page='+this.pages, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content.list
							this.pages++;
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
			
		},
	}
</script>

<style>
	.news{
		width: 100%;
		min-height: 100%;
		/* padding: 0.1upx; */
		padding-bottom: 100upx;
		position: relative;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.scroll-v {
		flex: 1;
		/* #ifndef MP-ALIPAY */
		flex-direction: column;
		/* #endif */
		width: 100%;
		height: 92vh;
		padding-bottom: 0vh;
	}
</style>
