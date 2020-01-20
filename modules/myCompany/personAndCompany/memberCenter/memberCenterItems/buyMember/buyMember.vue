<template>
	<div class="buyMember-content">
		<div class="buyMember">
			<topBox><p class="title-putIn">会员中心</p></topBox>
			<div class="buyMember-user">
				<div class="buyMember-user-img"><img v-if="UserData.compLogo" :src="UserData.compLogo" alt="" /><img v-else :src="userLogo" alt=""></div>
				<div class="buyMember-user-name">
					<div>{{ UserData.userName }}</div>
					<div>
						<div v-if="UserData.vipState == '0'">当前未开通会员服务</div>
						<div v-if="UserData.vipState == '1' || UserData.vipState == '2'">已开通会员</div>
						<div v-if="UserData.vipState == '3'">会员已于{{ UserData.endTime }}过期</div>
					</div>
				</div>
			</div>
			<div class="buyMember-people">
				<div class="buyMember-people-img">
					<div v-for="(item, index) in imgList" :key="index"><img v-if="item" :src="item" alt="" /><img v-else :src="userLogo" alt="" /></div>
				</div>
				<div class="buyMember-people-con">
					<span>{{ UserData.userCount }}</span>
					人开通服务
				</div>
			</div>
			<div class="priceAndTime">
				<div class="priceAndTime-title">开通服务</div>
				<div class="year-card">
					<div class="year-card-left">
						<div>银卡会员·年卡</div>
						<div>限时折扣</div>
					</div>
					<div class="year-card-right">￥199/年</div>
				</div>
			</div>
			<div class="pay" v-if="browserType === 'FWX'">
				<div class="pay-title">选择支付方式</div>
				<div class="ZFB-pay" @click="checkType(1)">
					<div class="ZFB-pay-content">
						<div><img :src="zhifubao" alt="" /></div>
						<div>支付宝支付</div>
					</div>
					<div><img :src="ZhiFuBao ? selected : select" alt="" /></div>
				</div>
			</div>
			<div class="pay" v-if="browserType === 'WX'">
				<div class="pay-title">选择支付方式</div>
				<div class="WX-pay" @click="checkType(2)">
					<div class="WX-pay-content">
						<div><img :src="weixin" alt="" /></div>
						<div>微信支付</div>
					</div>
					<div><img :src="WeiXin ? selected : select" alt="" /></div>
				</div>
			</div>
			<div class="LJ-buy-btn">
				<div class="LJ-buy-btn-left">
					合计:
					<span>￥199.00</span>
				</div>
				<div class="LJ-buy-btn-right" @click="clickImmedPay">立即支付</div>
			</div>
			<div class="popup-bg" v-if="isShowPopup" @click="ContinuPayment">
				<div class="popup">
					<div class="popup-top">
						<div class="popup-top-img"><img :src="lose" alt="" /></div>
						<div>支付失败</div>
						<div>您的会员申请单未完成支付，如有疑问请拨打客服热线：400-6182288</div>
					</div>
					<div class="popup-bottom">
						<div class="popup-bottom-left" @click="PhoneCall">联系客服</div>
						<div class="popup-bottom-right" @click="ContinuPayment">继续支付</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import weixin from '@/static/mbcImg/images/business/home/personCenter/WXPay.png';
import zhifubao from '@/static/mbcImg/images/business/home/personCenter/ALIPay.png';
import select from '@/static/mbcImg/images/business/home/personCenter/勾选-未选择.png';
import selected from '@/static/mbcImg/images/business/home/personCenter/勾选-选中.png';
import lose from '@/static/mbcImg/images/business/home/personCenter/订单提交失败.png';
import userLogo from '@/static/mbcImg/my/sasf.png';
export default {
	name: 'buyMember',
	components: {
		topBox
	},
	data() {
		return {
			UserData: null,
			imgList:null,
			weixin: weixin,
			zhifubao: zhifubao,
			select: select,
			selected: selected,
			lose: lose,
			userLogo:userLogo,
			ZhiFuBao: true,
			WeiXin: false,
			browserType: 'FWX',
			PayMethod: 1, // 默认支付方式是支付宝， 2 为微信
			applyVipNum: '', // 用于微信支付，存储链接参数
			isShowPopup: false,
			paramsWx:''
		};
	},
	mounted() {},

	computed: {},
	watch: {},
	methods: {
		getUserData() {
			console.log('获取用户信息，全部');
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/vip/vipInfo?userId=' + landRegistLG.user.id, //接口地址。
					// url: this.api2 + '/rest-rp/vip/vipInfo?userId=760', //接口地址。
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data, '会员支付页');
						this.UserData = response.data.content;
						var logoImglist = response.data.content.headImg;
						console.log(logoImglist,'logoImglist');
						this.imgList = logoImglist.slice(-5);
						console.log(imgList,'imgList');
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
		checkType(e) {
			if (e === 1) {
				// 支付宝
				console.log('支付宝');
				this.ZhiFuBao = !this.ZhiFuBao;
				if (this.WeiXin === true) {
					this.WeiXin = false;
				}
			} else if (e === 2) {
				// 微信
				console.log('微信');
				this.WeiXin = !this.WeiXin;
				if (this.ZhiFuBao === true) {
					this.ZhiFuBao = false;
				}
			}
			this.PayMethod === e ? (this.PayMethod = '') : (this.PayMethod = e); // 支付方式
			console.log(this.PayMethod, '----支付方式-----');
		},
		zhiFuBaoPay(params) {
			console.log('支付宝支付');
			console.log(params);
			location.href = this.api2 + '/rest-rp/vip/createZfbPayOrder?applyVipNum=' + params;
		},
		// WeiXinPay(params) {
		// 	console.log('微信支付');
		// 	if (uni.getStorageSync('landRegist')) {
		// 		let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); 
		// 		uni.showLoading({
		// 			// 展示loading
		// 			title: '加载中'
		// 		});
		// 		uni.request({
		// 			url: this.api2 + '/rest-rp/vip/createWxPayOrderDo?applyVipNum=' + this.applyVipNum,
		// 			method: 'GET',
		// 			header: {
		// 				Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
		// 			},
		// 			success: response => {
		// 				uni.hideLoading();
		// 				console.log(response, '微信成功后传送过来的订单号');
		// 				let paramsWx = response.data.content;
		// 				this.WXpay(paramsWx);
		// 			},
		// 			fail: error => {
		// 				uni.hideLoading(); // 隐藏 loading
		// 				uni.showToast({
		// 					title: '网络繁忙，请稍后',
		// 					icon: 'none',
		// 					duration: 1000
		// 				});
		// 				console.log(error, '网络繁忙，请稍后');
		// 			}
		// 		});
		// 	}
		// },
		clickImmedPay() {
			console.log('触发立即支付按钮');
			console.log(this.UserData, 'this.UserData');
			if (this.PayMethod === '') {
				console.log('请选择支付方式！');
				return;
			}
			if (this.UserData.applyNum) {
				console.log('走继续支付流程');
				let params = this.UserData.applyNum;
				if (this.PayMethod === 1) {
					// console.log(params,'走支付宝支付流程')
					this.zhiFuBaoPay(params);
				} else {
					//let params = this.applyVipNum; // 微信支付取链接参数
					// console.log(params, '走微信支付流程');
					this.WXpay(this.paramsWx);
				}
			} else {
				console.log('走支付流程');
				this.createOrder();
			}
			// this.confirmShow = true; // 重新支付
		},
		outTradeNo() {
			console.log(this.$route.query.out_trade_no, '支付宝支付成功后传送过来的订单号');
			if (this.$route.query.out_trade_no) {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/vip/selectPayNumByState?out_trade_no=' + this.$route.query.out_trade_no, //接口地址。
						// url: this.api2 + '/rest-rp/vip/vipInfo?userId=760', //接口地址。
						method: 'GET',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							uni.hideLoading();
							console.log(response, '支付宝支付成功后传送过来的订单号');
							if (response.data.content == '1') {
								console.log('支付成功');
								uni.redirectTo({
									url: '../../memberCenter'
								});
							} else if (response.data.content == '0') {
								console.log('未支付成功');
								this.isShowPopup = true;
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
			}
		},
		WXreturnNum(){
			console.log(this.$route.query.applyVipNum, '微信传送过来的订单号');
			if (this.$route.query.applyVipNum) {
			  this.applyVipNum = this.$route.query.applyVipNum;		
			  console.log(this.applyVipNum, '微信传送过来的订单号保存早data');
			  if (uni.getStorageSync('landRegist')) {
			  	let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
			  	// let params = {}; // 请求总数居时 参数为空
			  	uni.showLoading({
			  		// 展示loading
			  		title: '加载中'
			  	});
			  	uni.request({
			  		url: this.api2 + '/rest-rp/vip/createWxPayOrderDo?applyVipNum=' + this.applyVipNum,
			  		method: 'GET',
			  		header: {
			  			Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
			  		},
			  		success: response => {
			  			uni.hideLoading();
			  			console.log(response, '微信成功后传送过来的订单号');
			  			this.paramsWx = response.data.content;
			  			// this.WXpay(paramsWx);
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
			};
			
		},
		WXpay(e){
			var jweixin = require('jweixin-module');
			console.log(e, '拉起微信支付');
			let param = e;
			jweixin.config({
			  debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			  appId: param.appId, // 必填，公众号的唯一标识
			  timestamp: param.timeStamp, // 必填，生成签名的时间戳
			  nonceStr: param.nonceStr, // 必填，生成签名的随机串
			  signature: param.signJs, // 必填，调用js签名，
			  jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，这里只写支付的
			});
			jweixin.chooseWXPay({
			  timestamp: param.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
			  nonceStr: param.nonceStr, // 支付签名随机串，不长于 32 位
			  package: param.packageValue, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
			  signType: 'MD5', // 签名方式，默认为´SHA1´，使用新版支付需传入´MD5´
			  paySign: param.paySign, // 支付签名
			  success: function (res) {
			    if (res.errMsg === 'chooseWXPay:ok') {
			      console.log('支付成功');
			      setTimeout(() => {
			        uni.redirectTo({
			        	url: '../../memberCenter'
			        });
			      }, 500);
			    } else {
					console.log('未支付成功');
					this.isShowPopup = true;
			    }
			  },
			  cancel: function (res) {
			    // alert('取消支付');
			  }
			});
		},
		ContinuPayment() {
			this.isShowPopup = false;
		},
		PhoneCall(){
			uni.makePhoneCall({
			    phoneNumber: '4006182288' //电话
			});
		}
	},
	created() {
		this.getUserData();
		this.outTradeNo();
		this.WXreturnNum();
		if (uni.getStorageSync('browserType')) {
			let browserType = uni.getStorageSync('browserType'); // 读取缓存的用户信息
			console.log(browserType);
			if (browserType === 'WX') {
				this.browserType = 'WX';
				this.PayMethod = 2; // 微信状态默认时微信支付
				this.WeiXin = true;
			} else if (browserType === 'FWX') {
				this.browserType = 'FWX';
				this.PayMethod = 1; // 非微信状态默认是支付宝支付
			}
		}
	}
};
</script>

<style scoped>
.buyMember {
}
.buyMember-user {
	width: 100%;
	height: 160upx;
	background: #ffffff;
	border-top: 1upx solid #efefef;
	border-bottom: 1upx solid #efefef;
	display: flex;
	align-items: center;
}
.buyMember-user-img {
	width: 100upx;
	height: 100upx;
	margin-left: 30upx;
	border-radius: 50%;
}
.buyMember-user-img img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.buyMember-user-name {
	margin-left: 10upx;
}
.buyMember-user-name > div:nth-child(1) {
	font-family: PingFangSC-Medium;
	font-size: 36upx;
	color: #2e2e30;
	line-height: 36upx;
}
.buyMember-user-name > div:nth-child(2) {
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #9b9b9b;
	letter-spacing: 0;
	line-height: 28upx;
	margin-top: 20upx;
}
.buyMember-people {
	width: 100%;
	height: 80upx;
	background: #ffffff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 30upx;
	padding-right: 30upx;
}
.buyMember-people-img {
	height: 40upx;
	display: flex;
	align-items: center;
	position: relative;
}
.buyMember-people-img div {
	width: 40upx;
	height: 40upx;
	border-radius: 50%;
}
.buyMember-people-img div:nth-child(2){
	position: absolute;
	left: 30upx;
	z-index: 10;
}
.buyMember-people-img div:nth-child(3){
	position: absolute;
	left: 60upx;
	z-index: 11;
}
.buyMember-people-img div:nth-child(4){
	position: absolute;
	left: 90upx;
	z-index: 12;
}
.buyMember-people-img div:nth-child(5){
	position: absolute;
	left: 120upx;
	z-index: 13;
}
.buyMember-people img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.buyMember-people-con {
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #9b9b9b;
	text-align: right;
	line-height: 24upx;
}
.buyMember-people-con span {
	font-family: PingFangSC-Semibold;
	font-size: 24upx;
	color: #02c2a2;
	line-height: 24upx;
}
.priceAndTime {
	width: 100%;
	height: 276upx;
	background: #ffffff;
	margin-top: 20upx;
}
.priceAndTime-title {
	padding-top: 40upx;
	margin-left: 30upx;
	font-family: PingFangSC-Semibold;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 28upx;
}
.year-card {
	width: 92%;
	height: 128upx;
	background-image: linear-gradient(46deg, #9fa2ae 0%, #dbdbe4 100%);
	border-radius: 16upx;
	margin-left: 4%;
	margin-top: 40upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 30upx;
	padding-right: 30upx;
}
.year-card-left > div:nth-child(1) {
	font-family: PingFangSC-Semibold;
	font-size: 36upx;
	color: #ffffff;
	letter-spacing: 0;
	line-height: 36upx;
}
.year-card-left > div:nth-child(2) {
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #ffffff;
	letter-spacing: 0;
	line-height: 24upx;
	margin-top: 8upx;
}
.year-card-right {
	font-family: PingFangSC-Semibold;
	font-size: 36upx;
	color: #ffffff;
	line-height: 34upx;
}
.pay {
	width: 100%;
	height: 208upx;
	background: #ffffff;
	margin-top: 20upx;
}
.pay-title {
	font-family: PingFangSC-Semibold;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 28upx;
	padding-top: 40upx;
	margin-left: 30upx;
	margin-bottom: 30upx;
}
.WX-pay,
.ZFB-pay {
	width: 92%;
	height: 108upx;
	margin-left: 4%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.ZFB-pay-content,
.WX-pay-content {
	display: flex;
	align-items: center;
}
.ZFB-pay-content > div:nth-child(1),
.WX-pay-content > div:nth-child(1) {
	width: 48upx;
	height: 48upx;
	margin-right: 34upx;
}
.ZFB-pay-content > div:nth-child(1) img,
.WX-pay-content > div:nth-child(1) img {
	width: 100%;
	height: 100%;
}
.ZFB-pay-content > div:nth-child(2),
.WX-pay-content > div:nth-child(2) {
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 28upx;
}
.WX-pay > div:nth-child(2),
.ZFB-pay > div:nth-child(2) {
	width: 44upx;
	height: 44upx;
}
.WX-pay > div:nth-child(2) img,
.ZFB-pay > div:nth-child(2) img {
	width: 100%;
	height: 100%;
}
.LJ-buy-btn {
	position: fixed;
	width: 100%;
	height: 100upx;
	bottom: 0;
	display: flex;
	align-items: center;
}
.LJ-buy-btn-left {
	width: 68%;
	height: 100%;
	display: flex;
	align-items: center;
	padding-left: 40upx;
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #030303;
	letter-spacing: 0;
	text-align: center;
	line-height: 28upx;
	background: #FFFFFF;
}
.LJ-buy-btn-left span {
	font-family: PingFangSC-Medium;
	font-size: 40upx;
	color: #02c2a2;
	letter-spacing: 0;
	line-height: 40upx;
}
.LJ-buy-btn-right {
	width: 32%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(134deg, #15d49f 0%, #57d6cf 100%);
	font-family: PingFangSC-Semibold;
	font-size: 36upx;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 36upx;
}
.popup-bg {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
}
.popup {
	position: absolute;
	opacity: 1;
	width: 542upx;
	height: 486upx;
	background: #ffffff;
	border-radius: 20upx;
	z-index: 1001;
	position: relative;
}
.popup-top {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.popup-top-img {
	width: 80upx;
	height: 80upx;
	margin-top: 80upx;
	margin-bottom: 40upx;
}
.popup-top-img img {
	width: 100%;
	height: 100%;
}
.popup-top > div:nth-child(2) {
	font-family: PingFangSC-Medium;
	font-size: 32upx;
	color: #2e2e30;
	letter-spacing: 0;
	text-align: center;
	line-height: 32upx;
}
.popup-top > div:nth-child(3) {
	font-family: PingFangSC-Light;
	font-size: 28upx;
	color: #5d5d5d;
	letter-spacing: 0;
	text-align: center;
	line-height: 40upx;
	padding-top: 14upx;
	padding-left: 32upx;
	padding-right: 32upx;
}
.popup-bottom {
	position: absolute;
	bottom: 0;
	display: flex;
	width: 100%;
	height: 99upx;
	border-top: 1upx solid #e2e2e2;
}
.popup-bottom-left,
.popup-bottom-right {
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.popup-bottom-left {
	border-right: 1upx solid #e2e2e2;
	font-family: PingFangSC-Regular;
	font-size: 32upx;
	color: #9b9b9b;
	text-align: center;
	line-height: 32upx;
}
.popup-bottom-right {
	font-family: PingFangSC-Medium;
	font-size: 32upx;
	color: #02c2a2;
	text-align: center;
	line-height: 32upx;
}
</style>
