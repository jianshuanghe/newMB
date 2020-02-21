<template>
	<view class="product-books">
		<!-- 我的說明書詳情 -->
		<book 
		:data="id"
		:dataList='lists'
		></book>
	</view>
</template>

<script>
	import book from './product-book';
	import { mapMutations,mapGetters } from 'vuex';
	export default {
		
		data() {
			return {
				lists:[],
				id:'',
			}
		},
		components:{
			book
		},
		onLoad(ops) {
			this.id=ops.id
			console.log(this.id)
			this.book();
		},
		created() {
			
		},
		filters: {
			
		},
		methods: {
			book(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc/'+this.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.lists = response.data.content
							this.$store.commit('setdetailed', this.lists);
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
			
			...mapGetters(['GET_NEWS','GET_HOME', 'QUICKNAVCO'])
		},
	}
</script>

<style>
	.product-books{
		width: 100%;
		min-height: 100%;
	}
</style>
