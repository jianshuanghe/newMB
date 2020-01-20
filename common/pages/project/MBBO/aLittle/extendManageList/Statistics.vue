<template>
	<div class="content">
		<div class="Statistics-box">
			<!-- 累计投放商机 -->
			<div class="Statistics-item left" @click="goToPutInBusiness(1)">
				<p class="num">{{ list.authStateCount }}</p>
				<p class="text">{{i18n.text1}}</p>
			</div>
			<!-- 待审核商机 -->
			<div class="Statistics-item left" @click="goToPutInBusiness(2)">
				<p class="num">{{ list.authState0 }}</p>
				<p class="text">{{i18n.text2}}</p>
			</div>
			<!-- 投放中商机 -->
			<div class="Statistics-item left" @click="goToPutInBusiness(3)">
				<p class="num">{{ list.authState1 }}</p>
				<p class="text">{{i18n.text3}}</p>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Statistics',
	props: {
		// 列表菜单
		listData: {
			type: Object,
			default: function(e) {
				return {};
			}
		}
	},
	data() {
		return {
			searchCondition: {
				// 分页属性
				page: '1',
				userId: '',
				authState: '',
				isBanner: '',
				order: '',
			},
			list:[],
		};
	},
	computed: {
		i18n () {
		  return this.$t('extendManageList')
		}
	},
	created(){
		this.Statistics();
	},
	
	methods: {
		Statistics(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/putIn/'+landRegistLG.user.id, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						console.log(response.data);
						this.list = response.data.content;
						
						// this.$store.commit('setMation', this.List); // 更新vuex
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
		goToPutInBusiness(e) {
			console.log(e, 'to投放商机');
			if(this.list.rpCompanyAuth == 0){
				uni.showModal({
					title: '提示',
					content: '您的公司还未认证，无法进行广告投放，快去提交公司认证信息吧～',
					confirmColor:' #02C2A2',
					confirmText:'去认证',
					cancelText:'暂不认证',
					success: function (res) {
						if (res.confirm) {
							let e=1;
							uni.navigateTo({
								url: '/modules/myCompany/personAndCompany/companyInfor/companyInforEdit?id='+e
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}else if(this.list.rpCompanyAuth == 1){
				uni.showModal({
					title: '提示',
					content: '您的公司认证信息正在审核中,请耐心等待～～～',
					confirmColor:' #02C2A2',
					confirmText:'知道了',
					success: function (res) {
						if (res.confirm) {
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}else if(this.list.rpCompanyAuth == 3){
				uni.showModal({
					title: '提示',
					content: '您的公司认证审核未通过，无法进行推广，快去重新提交认证信息吧～～～',
					confirmColor:' #02C2A2',
					confirmText:'去认证',
					cancelText:'暂不认证',
					success: function (res) {
						if (res.confirm) {
							// let e=1;
							uni.navigateTo({
								url: '/modules/myCompany/personAndCompany/companyInfor/companyInforEdit'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
			else{
				if(e==1){
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						let params = {
							page:String(1),
							userId:landRegistLG.user.id,
						}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/putIn/selectInstList', //接口地址。
							data: params,
							method: 'POST',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.putInBusinessData=response.data.content.list
								// this.list = response.data.content
								this.$store.commit('setputInBusinessData', this.putInBusinessData); // 更新vuex
								var _this = this;
								uni.setStorage({
									key: 'Cumulative',//累计投放商机
									data: _this.putInBusinessData,
									success: function() {
										console.log('success');
									}
								});
								if(response.data.ret==200){
									uni.navigateTo({
										url:'/modules/aLittle/putInBusiness/putInBusiness?id='+e,
									})
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
				}else if(e==2){
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						let params = {
							page:String(1),
							userId:landRegistLG.user.id,
							authState:'0',
						}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/putIn/selectInstList', //接口地址。
							data: params,
							method: 'POST',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.putInBusinessData=response.data.content.list
								// this.list = response.data.content
								this.$store.commit('setputInBusinessData', this.putInBusinessData); // 更新vuex
								var _this = this;
								uni.setStorage({
									key: 'Cumulative',//累计投放商机
									data: _this.putInBusinessData,
									success: function() {
										console.log('success');
									}
								});
								if(response.data.ret==200){
									uni.navigateTo({
										url:'/modules/aLittle/putInBusiness/putInBusiness?id='+e,
									})
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
				}else if(e==3){
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						let params = {
							page:String(1),
							userId:landRegistLG.user.id,
							authState:'1',
						}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/putIn/selectInstList', //接口地址。
							data: params,
							method: 'POST',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.putInBusinessData=response.data.content.list
								// this.list = response.data.content
								this.$store.commit('setputInBusinessData', this.putInBusinessData); // 更新vuex
								var _this = this;
								uni.setStorage({
									key: 'Cumulative',//累计投放商机
									data: _this.putInBusinessData,
									success: function() {
										console.log('success');
									}
								});
								if(response.data.ret==200){
									uni.navigateTo({
										url:'/modules/aLittle/putInBusiness/putInBusiness?id='+e,
									})
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
				}
				
			}
			// let query = {}; // 链接参数
			// if (e === 2) {
			// 	// 待审核
			// 	this.searchCondition.authState = '0';
			// 	this.$store.commit('setPutInBusinesSsearch', this.searchCondition);
			// 	query = {
			// 		index: 3, // 显示
			// 		status: 0, // 状态
			// 		value: '待审核'
			// 	};
			// }
			// if (e === 3) {
			// 	// 投放中状态
			// 	this.searchCondition.authState = '1';
			// 	this.$store.commit('setPutInBusinesSsearch', this.searchCondition);
			// 	query = {
			// 		index: 3, // 显示
			// 		status: 1, // 状态
			// 		value: '投放中'
			// 	};
			// }
			
		},
	}
};
</script>

<style scoped>
.content {
	position: relative;
	width: 100vw;
	padding: 2vw 4vw;
	background: #fff;
	margin-bottom: 1.5vw;
}
.Statistics-box {
	position: relative;
	width: 100%;
}
.Statistics-item {
	position: relative;
	width: 33.33333%;
}
.num {
	position: relative;
	width: 100%;
	text-align: center;
	ont-family: PingFang-SC-Bold;
	font-size: 4.8vw;
	color: #02c2a2;
	line-height: 6vw;
}
.text {
	position: relative;
	width: 100%;
	text-align: center;
	font-family: PingFang-SC-Medium;
	font-size: 3.2vw;
	color: #2e2e30;
	line-height: 6vw;
}
</style>
