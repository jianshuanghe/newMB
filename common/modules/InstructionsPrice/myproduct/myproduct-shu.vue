<template>
	<view class="myproduct-shu">
		<!-- 我的说明书列表 -->
		<myproduct :dataa="id"></myproduct>
	</view>
</template>

<script>
	import myproduct from './myproduct';
	import { mapMutations,mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list:[],
				// 产品
				chan:[],
				// 定制
				ding:[],
				//资讯
				zi:[],
				id:''
			}
		},
		components:{
			myproduct
		},
		created() {
			this.shareEachPage(); // 分享
		},
		onLoad(ops) {
			this.id = ops.id;
			console.log(ops)
			uni.setNavigationBarTitle({
				title: this.i18n.product1
			});
			//全部
			this.myproduct();
			// 产品
			this.product();
			// 定制
			this.Cus();
			//资讯
			this.inf();
		},
		
		methods: {
			myproduct(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1&lookUserId='+landRegistLG.user.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content.list
							this.$store.commit('setproduct', this.list);
							
							
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
			product(){//产品
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1&instrucCustType=0', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.chan = response.data.content.list
							this.$store.commit('setchan', this.chan);
							
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
			Cus(){//定制
				console.log(123)
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1&instrucCustType=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.ding = response.data.content.list
							this.$store.commit('setding', this.ding);
							
							
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
			inf(){//资讯
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1&instrucCustType=2', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.zi = response.data.content.list
							this.$store.commit('setzi', this.zi);
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
			}
		},
		computed: {
			i18n () {
			  return this.$t('Howtoshow')  
			},
			...mapGetters(['GET_NEWS','GET_HOME', 'QUICKNAVCO'])
		},
	}
</script>

<style>
	.myproduct-shu{
		width: 100%;
		min-height: 100%;
		background: #FFFFFF;
	}
</style>
