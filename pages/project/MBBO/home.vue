<template>
	<view class="homeContent">
		<!-- 组件模块 -->
		<view class="homeTemplate" v-if="!KeyWord">
			<!-- 首页 -->
			<view v-if="GET_HOME.tabItems === 1"><aLittle></aLittle></view>
			<!-- 发现 -->
			<view v-if="GET_HOME.tabItems === 2"><find :Refrss='Refr'></find></view>
			<!-- 消息 -->
			<view v-if="GET_HOME.tabItems === 3"><news></news></view>
			<!-- 我的 -->
			<view v-if="GET_HOME.tabItems === 4"><my></my></view>
		</view>
		<!-- tab切换组件 -->
		<view class="homeTabBar"><tabBar></tabBar></view>
		<!-- 发布 -->
		<publish v-if="GET_HOME.publishShow"></publish>
		<!-- 快捷导航 -->
		<navigation v-if="QUICKNAVCO.show"></navigation>
		<!-- 判断用户是否第一次进入页面 显示选择关键词 -->
		<KeyWords 
		v-if="KeyWord" 
		v-on:keys="keys" 
		v-on:Refresh="Refresh"
		></KeyWords>
	</view>
</template>

<script>
import navigation from '@/components/mbbo/navigation/navigation.vue';
import publish from '@/components/mbbo/publish/publish.vue';
import aLittle from './aLittle/aLittle.vue';
import find from './find/find.vue';
import my from './my/my.vue';
import news from './news/news.vue';
import tabBar from '@/components/mbbo/homeTabBar/tab_bar.vue';
import KeyWords from './KeyWords.vue';

import { mapMutations, mapGetters } from 'vuex';
export default {
	data() {
		return {
			tabItems: '',
			KeyWord:false,
			Refr:'',
		};
	},
	components: {
		navigation,
		aLittle,
		find,
		my,
		news,
		publish,
		tabBar,
		KeyWords
	},
	computed: {
		i18n() {
			return this.$t('Home_title');
		},
		...mapGetters(['GET_HOME', 'QUICKNAVCO'])
	},
	watch: {
		GET_HOME: {
			handler(a, b) {
				this.tabItems = a.tabItems; // 侦听切换类型消息
				console.log(a.tabItems, '用户切换');
				if (a.publishShow === true) {
					uni.setNavigationBarTitle({
						title: this.i18n.title5
					});
				} else {
					this.upTitle(this.tabItems);
				}
			},
			deep: true
		},
		QUICKNAVCO: {
			handler(a, b) {
				console.log(a.show, '--------------快捷导航---------------');
			},
			deep: true
		}
	},
	onLoad(optionParams) {
		if (uni.getStorageSync('clickItems')) {
			this.clickItems = uni.getStorageSync('clickItems'); // 取缓存中tabbar数据
			this.upTitle(this.clickItems);
		} else {
			this.upTitle(2);
		}
		this.$store.commit('setAuthShow', false); // 更新setAuthShow
		
	},
	created() {
		this.Key();
		this.shareEachPage(); // 分享
	},
	methods: {
		keys:function(keys){
			this.KeyWord=keys
		},
		Refresh:function(Refresh){
			
			this.Refr=Refresh
			this.$store.commit('setRefresh', this.Refr); // 更新setAuthShow
			console.log(this.Refr)
		},
		Key(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/userKeys/isSelectKeys?userId='+landRegistLG.user.id, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					success: (response) => {
						uni.hideLoading();
						console.log(response.data);
						if(response.data.content==='0'){
							this.KeyWord=true;
						}else{
							this.KeyWord=false;
							this.Refr=1;
						}
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
			}else if(uni.getStorageSync('UUID')){
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
					console.log(UUID);
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/userKeys/isSelectKeys?userId='+UUID, //接口地址。
						method: 'GET',
						success: (response) => {
							uni.hideLoading();
							console.log(response.data,'---------------------------------------------');
							if(response.data.content==='0'){
								this.KeyWord=true;
								
							}else{
								this.KeyWord=false;
								this.Refr=1;
							}
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
		...mapMutations({
			setAuthShow: 'setAuthShow'
		}),
		upTitle(e) {
			console.log('跟新主页的title');
			if (e == 1) {
				uni.setNavigationBarTitle({
					title: this.i18n.title1
				});
			} else if (e == 2) {
				uni.setNavigationBarTitle({
					title: this.i18n.title2
				});
			} else if (e == 3) {
				uni.setNavigationBarTitle({
					title: this.i18n.title3
				});
			} else if (e == 4) {
				uni.setNavigationBarTitle({
					title: this.i18n.title4
				});
			} else if (e == 5) {
				uni.setNavigationBarTitle({
					title: this.i18n.title5
				});
			}
		}
	}
};
</script>

<style></style>
