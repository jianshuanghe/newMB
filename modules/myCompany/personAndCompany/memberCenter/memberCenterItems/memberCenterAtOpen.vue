<template>
	<div class="memberCenterAtOpen-content">
		<div class="memberCenterAtOpen">
			<div class="MCO-btn-box1">
				<!-- <div class="MCO-btn-left1 left">
          <p class=""><span class="text-MCO1">¥</span>999 <span class="text-MCO1">.00</span></p>
        </div>
        <div class="MCO-btn-right1 left">
          <p class="text-MCO1" @click="goToBuyMember">{{userDatas.vipState === '0' ? '立即开通' : '立即续费'}}</p>
        </div>
        <div class="clear"></div> -->
				<div class="MCO-btn" v-if="userDatas.vipState == '0'" @click="createOrder" >
					<!-- 立即开通 -->
					<span>
						199元立即开通
						<span class="MCO-btn-price">/原价999元</span>
					</span>
				</div>
				<div class="MCO-btn" v-else @click="lJXF">立即续费</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'memberCenterAtOpen',
	data() {
		return {};
	},
	props: ['userDatas', 'selected'],
	created() {},
	computed: {},
	watch: {},
	mounted() {},
	methods: {
		createOrder() {
			console.log(this.selected, '创建订单');
			if (this.selected == true) {
				if (uni.getStorageSync('browserType') === 'WX') {
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({
							// 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/vip/vipApply?userId=' + landRegistLG.user.id + '&lvId=' + this.userDatas.lvId, //接口地址。
							method: 'GET',
							header: {
								Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
							},
							success: response => {
								uni.hideLoading();
								console.log(response.data.content,'会员订单号');
								let params = response.data.content;
								location.href = this.api2 + '/rest-rp/vip/createWxPayOrder?applyVipNum=' + params;
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
				} else if (uni.getStorageSync('browserType') === 'FWX') {
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({
							// 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/vip/vipApply?userId=' + landRegistLG.user.id + '&lvId=' + this.userDatas.lvId, //接口地址。
							method: 'GET',
							header: {
								Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
							},
							success: response => {
								uni.hideLoading();
								console.log(response.data.content,'会员订单号');
								uni.redirectTo({
								    url: './memberCenterItems/buyMember/buyMember'
								});
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
				
			} else {
				// alert('同意才行');
				this.$emit('scrollTo');
				uni.showToast({
					icon:'none',
				    title: '  请勾选并同意用户协议哦  ',
				    duration: 800
				});
			}
		},
		lJXF() {
			console.log('立即续费');
			if (uni.getStorageSync('browserType') === 'WX') {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/vip/vipApply?userId=' + landRegistLG.user.id + '&lvId=' + this.userDatas.lvId, //接口地址。
						method: 'GET',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							uni.hideLoading();
							console.log(response.data.content,'会员订单号');
							let params = response.data.content;
							location.href = this.api2 + '/rest-rp/vip/createWxPayOrder?applyVipNum=' + params;
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
			} else if (uni.getStorageSync('browserType') === 'FWX') {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/vip/vipApply?userId=' + landRegistLG.user.id + '&lvId=' + this.userDatas.lvId, //接口地址。
						method: 'GET',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							uni.hideLoading();
							console.log(response.data.content,'会员订单号');
							uni.redirectTo({
							    url: './memberCenterItems/buyMember/buyMember'
							});
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
		},
		// goToBuyMember(){
		// 	console.log('to购买会员');
		// 	if (uni.getStorageSync('browserType') === 'WX') {
		// 		this.createOrder();
		// 	} else if (uni.getStorageSync('browserType') === 'FWX') {
		// 		uni.redirectTo({
		// 		    url: './memberCenterItems/buyMember/buyMember'
		// 		});
		// 	}
		// },
	}
};
</script>

<style scoped>
.memberCenterAtOpen-content {
	position: fixed;
	width: 100%;
	z-index: 999;
	bottom: 0;
}
.memberCenterAtOpen {
	position: relative;
	width: 100%;
	margin-top: 2vw;
}
.MCO-btn-box1 {
	position: relative;
	width: 100%;
	background: #FFFFFF;
}
.MCO-btn {
	width: 100%;
	height: 100upx;
	background-image: linear-gradient(134deg, #15d49f 0%, #57d6cf 100%);
	font-family: PingFangSC-Semibold;
	font-size: 36upx;
	color: #FFFFFF;
	line-height: 36upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.MCO-btn-price {
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #ffffff;
	letter-spacing: 0;
	line-height: 24upx;
	text-decoration: line-through;
}
</style>
