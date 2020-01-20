<template>
	<div class="memberCenterAtOpen-content">
		<div class="memberCenterAtOpen">
			<div class="MCO-btn-box1">
				<div class="MCO-btn-left" @click="onConfirm">撤销申请</div>
				<div v-if="this.userDatas.vipState == '0'" class="MCO-btn-right" @click="goToBuyMember">
					<div>199元立即开通
						<span>/原价999元</span></div>
				</div>
				<div v-else class="MCO-btn-right" @click="goToBuyMember">
					<div>立即续费</div>
				</div>
			</div>
		</div>
		<div></div>
	</div>
</template>

<script>
export default {
	name: 'memberCenterCancelAtOpen',
	data() {
		return {
			
		};
	},
	props:[
		'userDatas'
	],
	components: {
		
	},
	created() {
		
	},
	computed: {
		
	},
	watch: {
		
	},
	mounted() {},
	methods: {
		createOrder() {
			console.log('创建订单');
			if (this.userDatas.applyNum) {
				location.href = this.api2 + '/rest-rp/vip/createWxPayOrder?applyVipNum=' + this.userDatas.applyNum;
			} else {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					uni.showLoading({
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
			}
		},
		goToBuyMember(){
			console.log('to购买会员');
			if (uni.getStorageSync('browserType') === 'WX') {
				this.createOrder();
			} else if (uni.getStorageSync('browserType') === 'FWX') {
				uni.redirectTo({
				    url: './memberCenterItems/buyMember/buyMember'
				});
			}
		},
		onConfirm(msg) {
			console.log('触发撤销申请');
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					vipState: '2',
					vipApplyNum: this.userDatas.applyNum
				};
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/vip/vipPay',
					data:params,//接口地址。
					method: 'POST',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response,'success');
						this.$emit('cancelMember',response.data.content)
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
	height: 100upx;
	background: #fff;
	display: flex;
	align-items: center;
}
.MCO-btn-left {
	width: 26.7%;
	height: 100%;
	font-family: PingFangSC-Regular;
	font-size: 32upx;
	color: #030303;
	letter-spacing: 0;
	line-height: 32upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.MCO-btn-right{
	width: 73.3%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(134deg, #15D49F 0%, #57D6CF 100%);
	font-family: PingFangSC-Semibold;
	font-size: 36upx;
	color: #FFFFFF;
	line-height: 36upx;
}
.MCO-btn-right span{
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #FFFFFF;
	letter-spacing: 0;
	line-height: 24upx;
	text-decoration:line-through;
	margin-left: 10upx;
}
</style>
