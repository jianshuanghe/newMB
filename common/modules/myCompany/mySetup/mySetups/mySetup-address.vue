<template>
	<view class="mySetup-address">
		<!-- 地址管理 -->
		<view class="my-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">{{ i18n.title23 }}</div>
		</view>
		<view class="tiancong"></view>
		<view class="mySetup-address-con" v-for="(item,index) in add" :key="index">
			<view class="mySetup-address-nei">
				<view>{{item.addrName}}&nbsp;&nbsp;{{item.addrPhone}}</view>
				<view>{{item.addrPcodeStr}}&nbsp;&nbsp;{{item.addrCcodeStr}}{{item.addrAcodeStr}}&nbsp;&nbsp;{{item.address}}</view>
			</view>
			<view class="mySetup-address-xuan">
				<view class="mySetup-address-xuan-img">
					<!-- 默认发货地址 -->
					<image :src="weixuan" v-if="item.addrState==0" @tap="xuanadd(item.id)"></image>
					<image :src="xuanzhong" v-if="item.addrState==1"></image>
					<span>{{ i18n.title61 }}</span>
				</view>
				<view class="mySetup-address-xuan-gai">
					<!-- 修改 -->
					<view @tap="xiuadd(item.id)">{{ i18n.title58 }}</view>
					<!-- 删除 -->
					<view @tap="deladd(item.id)">{{ i18n.title59 }}</view>
				</view>
			</view>
			<view class="mySetup-address-di"><image :src="bot"></image></view>
		</view>
		
		<view class="tiancongs"></view>
		<!-- 新建收货地址 -->
		<view class="mySetup-address-sub" @tap="gotoaddressnew()">
			{{ i18n.title60 }}
		</view>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from '@/components/mbbo/navigation/navigation.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				weixuan: this.Static+'my/15.png',
				xuanzhong: this.Static+'my/16.png',
				bot: this.Static+'my/bot.png',
				list:[],
				add:[],
			};
		},
		components: {
			quickBtn,
			navigation,
		},
		computed: {
			i18n() {
				return this.$t('Mypersonal');
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
		watch: {
			GET_MY: {
				handler(a, b) {
					console.log(a,b)
					this.add=a.address;
				},
				deep: true
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.title23
			});
			this.address();
		},
		methods: {
			xuanadd(e){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						"addrState":1,
						//用户ID
						"userId":landRegistLG.user.id,
						//传递就编辑 不传递就插入
						"id":e,
					}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/address/', //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.address();
							// console.log(this.list)
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
			gotoaddressnew(){
				console.log('添加地址');
				uni.navigateTo({
					url: '/modules/myCompany/mySetup/mySetups/mySetup-address-new',
				});
			},
			xiuadd(e){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/address/'+e, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list=response.data.content;
							this.$store.commit('setress', this.list); // 更新vuex
							uni.navigateTo({
								url: '/modules/myCompany/mySetup/mySetups/mySetup-address-new2?id='+e,
							});
							// console.log(this.list)
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
				console.log('编辑地址');
				
			},
			deladd(e){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/address/del/' + e, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							// console.log(this.list)
							this.address();
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
			address(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/address?userId='+landRegistLG.user.id, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content
							// console.log(this.list)
							this.$store.commit('setaddress', this.list); // 更新vuex
							
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
	};
</script>

<style>
	.mySetup-address{
		width: 100%;
		min-height: 100%;
		/* border: 1px solid #FFFFFF; */
	}
	.my-title {
		width: 100%;
		height: 88upx;
		background: #ffffff;
		border-bottom: 2upx solid #f5f5f5;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.quickBtn-Fd {
		width: 5%;
		margin-left: 38upx;
	}
	.search-Fd {
		position: relative;
		width: 100%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2e2e30;
	}
	.tiancong{
		width: 100%;
		height: 68upx;
	}
	.mySetup-address-con{
		width: 100%;
		min-height: 240upx;
		background: #FFFFFF;
		margin-top: 20upx;
	}
	.mySetup-address-nei{
		width: 90%;
		min-height: 160upx;
		margin: 0 auto;
		border-bottom: 2upx solid #D2D2D2;
	}
	.mySetup-address-nei>view:nth-of-type(1){
		font-size: 32upx;
		color: #2E2E30;
		padding-top: 30upx;
	}
	.mySetup-address-nei>view:nth-of-type(2){
		font-size: 26upx;
		color: #9B9B9B;
	}
	.mySetup-address-xuan{
		width: 90%;
		min-height: 70upx;
		margin: 0 auto;
	}
	.mySetup-address-xuan-img{
		width: 40%;
		height: 100%;
		font-size: 26upx;
		color: #2E2E30;
		line-height: 76upx;
		display: flex;
		float: left;
	}
	.mySetup-address-xuan-img>image{
		width: 32upx;
		height: 32upx;
		display: block;
		margin-top: 20upx;
	}
	.mySetup-address-xuan-img>span{
		margin-left: 20upx;
	}
	.mySetup-address-xuan-gai{
		width: 25%;
		height: 100%;
		font-size: 26upx;
		color: #2E2E30;
		float: right;
	}
	.mySetup-address-xuan-gai>view{
		width: 50%;
		height: 100%;
		text-align: center;
		line-height: 76upx;
		float: left;
	}
	.mySetup-address-di{
		width: 100%;
		height: 10upx;
		line-height: 2upx;
	}
	.mySetup-address-di>image{
		width: 100%;
		height: 100%;
	}
	.mySetup-address-sub{
		width: 100%;
		height: 100upx;
		background: #02C2A2;
		text-align: center;
		line-height: 100upx;
		font-size: 32upx;
		color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.tiancongs{
		width: 100%;
		height: 120upx;
	}
</style>
