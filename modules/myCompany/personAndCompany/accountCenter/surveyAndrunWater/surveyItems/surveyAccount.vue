<template>
	<div class="content-SU">
		<div class="account-box">
			<div class="account-SU">
				<div class="my-account-SU">
					<p class="accout-title">账户可用余额 (元)</p>
					<p class="account-num">
						{{ arr.money || '' }}
						<span class="unit">元</span>
					</p>
					<p class="account-can">
						账户余额 {{ arr.money+arr.frozenMoney || '' }}元，已冻结{{arr.frozenMoney}}元
						<span class="question" @click="question"><img :src="questionImg" alt="" class="questionImg" /></span>
					</p>
				</div>
				<div>
					<!-- <confirm
            v-model="confirmShow"
            :show-cancel-button="false"
            :title=confirmTitle
            :confirm-text=confirmBtn
            @on-confirm="onConfirm">
            <p style="text-align:center;">{{confirmText}}</p>
          </confirm> -->
				</div>
			</div>
			<div class="amountMoney">
				<div class="amountMoney-box">
					<div class="amountMoney-cont">
						<div class="AM-box left">
							<p class="AM-title">今日充值</p>
							<p class="AM-text-left">{{ arr.toDayRechMoney || '0.00' }}</p>
						</div>
						<div class="AM-box left">
							<p class="AM-title MG-left">今日花费</p>
							<p class="AM-text-right MG-left">{{ arr.yesterdayConsMoney || '0.00' }}</p>
						</div>
						<div class="clear"></div>
						<div class="Y-line-box"><div class="Y-line"></div></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import questionImg from '@/static/mbcImg/images/business/home/extendManageList/question.png';
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'surveyAccount',
	components: {
		// Confirm
	},
	data() {
		return {
			questionImg: questionImg,
			UserData: [],
			arr: [],
			availableAmount: '', // 可用余额
			confirmShow: false,
			confirmBtn: '知道了',
			confirmTitle: '什么是可用余额？',
			confirmText: '可用余额：即账户余额减去冻结金额后的余额。'
		};
	},
	created() {
		// if (this.EVN === 'production') {
		//   axios.defaults.baseURL = this.apiProd2;
		// }
		this.getUserData();
	},
	methods: {
		...mapMutations({
			setLoadingShow: 'setLoadingShow',
			setLoadingText: 'setLoadingText'
		}),
		getUserData() {
			console.log('获取账户中心，账户数据');
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/compAccount/'+landRegistLG.user.id, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						this.arr = response.data.content;
						console.log(this.arr);
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
		question() {
			uni.showModal({
				title: this.confirmTitle,
				content: this.confirmText,
				showCancel: false, // 不显示取消按钮
				confirmText: this.confirmBtn, // 确认按钮显示具体文字
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
					}
				}
			});
		},
	}
};
</script>

<style scoped>
.content-SU {
	position: relative;
	width: 100vw;
	background: #fff;
}
.account-box {
	position: relative;
	width: 100%;
}
.account-SU {
	position: relative;
	width: 100%;
	height: 47.2vw;
	background-image: linear-gradient(-134deg, #57d6cf 0%, #15d49f 100%);
	box-shadow: 0 2px 10px 0 rgba(2, 194, 162, 0.3);
}

.my-account-SU {
	position: relative;
	width: 100%;
	padding-top: 7vw;
}
.accout-title {
	position: relative;
	width: 100%;
	font-size: 3.5vw;
	line-height: 5vw;
	color: #fff;
	text-align: center;
}
.account-num {
	position: relative;
	width: 100%;
	font-size: 9vw;
	color: #fff;
	text-align: center;
}
.account-num > span {
	position: relative;
	font-size: 3.5vw;
	line-height: 9vw;
	color: #fff;
}
.account-can {
	position: relative;
	width: 100%;
	font-size: 3.5vw;
	line-height: 5vw;
	color: #fff;
	text-align: center;
	margin-top: -16upx;
}
.account-can > span {
	position: relative;
	font-size: 3.5vw;
	line-height: 9vw;
	color: #fff;
}
.questionImg {
	position: relative;
	width: 3.5vw;
	height: 3.5vw;
	top: 0.5vw;
}
.amountMoney {
	position: relative;
	width: 100%;
}
.amountMoney-box {
	position: relative;
	width: 100%;
	height: 20vw;
}
.amountMoney-cont {
	position: relative;
	width: 89.33vw;
	margin: 0 auto;
	top: -11vw;
	background: #ffffff;
	-webkit-box-shadow: 0 4px 12px 0 rgba(226, 226, 226, 0.5);
	box-shadow: 0 4px 12px 0 rgba(226, 226, 226, 0.5);
	border-radius: 3px;
	padding: 4vw 8vw;
}
.AM-box {
	position: relative;
	width: 50%;
}
.AM-title {
	font-family: PingFang-SC-Medium;
	font-size: 3.5vw;
	color: #000000;
	letter-spacing: 0;
	line-height: 7vw;
}
.AM-text-left {
	font-family: PingFangSC-Medium;
	font-size: 36upx;
	color: #000000;
	letter-spacing: 0;
	line-height: 7vw;
}
.AM-text-right {
	font-family: PingFangSC-Medium;
	font-size: 36upx;
	color: #000000;
	letter-spacing: 0;
	line-height: 7vw;
}
.Y-line-box {
	position: absolute;
	right: 50%;
	height: 10vw;
	width: 2px;
	top: 28%;
	z-index: 109;
}
.MG-left {
	margin-left: 10vw;
}
</style>
