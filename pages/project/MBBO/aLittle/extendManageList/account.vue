<template>
	<div class="content">
		<div class="account-box">
			<div class="account">
				<div class="person-box">
					<div class="person-img left" @click="clickQuickBtn">
						<img :src="list.compLogo || 'http://style.iambuyer.com/img/rhx-mobile-normal@2x.png'" alt="" class="" />
					</div>
					<div class="person-name left">
						<p class="">{{ list.compName || '用户昵称' }}</p>
					</div>
					<div class="clear"></div>
				</div>
				<div class="my-account">
					<p class="accout-title">账户可用余额 (元)<span class="question" @click="questions(1)"><img :src="question" alt="" class="questionImg" /></span></p>
					<p class="account-num">
						￥{{ list.moneyStr }}
						<span class="unit">元</span>
					</p>
					<p class="account-can">
						账户余额 ￥{{ this.moneyzhong+this.moneydj | numFilter}} 元,已冻结 ￥{{list.frozenMoneyStr}} 元
						<span class="question" @click="questions(2)"><img :src="question" alt="" class="questionImg" /></span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import question from '@/static/mbcImg/home/extendManageList/question.png';
import navigation from "@/components/mbbo/navigation/navigation.vue";
import { mapMutations , mapGetters} from 'vuex';
export default {
	name: 'account',
	components: {
	},
	data() {
		return {
			question: question,
			loadingShow: false, // loading
			accountData: '', // 个人账户信息数据
			confirmShow: false,
			confirmBtn: '知道了',
			confirmTitle: '什么是可用余额？',
			confirmText: '可用余额：即账户余额减去冻结金额后的余额。',
			availableAmount: 0, // 可用余额
			UserData: {} ,// 用户信息全部
			list:[],
			moneyzhong:null,
			moneydj:null,
			quickNav:{
				show: false
			}
		};
	},
	props: {
		// 列表菜单
		listData: {
			type: Object,
			default: function(e) {
				return {};
			}
		}
	},
	created() {
		this.moneys();
	},
	filters: {
		numFilter (value) {
			let realVal = ''
			if (value) {
				// 截取当前数据到小数点后三位
				let tempVal = parseFloat(value).toFixed(3)
				realVal = tempVal.substring(0, tempVal.length - 1)
			} else {
				realVal = '0.00'
			}
			return realVal
		}
	},
	components: {
		navigation,
	},
	computed: {
		i18n () {
		  return this.$t('extendManageList')  
		},
		...mapGetters(['QUICKNAVCO'])
	},
	methods: {
		...mapMutations({}),
		clickQuickBtn() {
			this.quickNav.show = true;
			this.$store.commit('setQuickNavCO', this.quickNav); // 更新setAuthShow
		},
		onConfirm(msg) {
			console.log('on confirm');
			if (msg) {
				alert(msg);
			}
		},
		questions(e){
			if(e===2){
				uni.showModal({
					title: '什么是冻结金额？',
					content: '冻结金额：即账户开通时需缴纳的金额，一个账户只会有一个冻结金额。',
					confirmColor:' #02C2A2',
					showCancel:false,
					confirmText:'知道了',
					success: function (res) {
						
					}
				});
			}else if(e===1){
				uni.showModal({
					title: '什么是可用余额？',
					content: '可用余额：即账户余额减去冻结金额后的余额。',
					confirmColor:' #02C2A2',
					showCancel:false,
					confirmText:'知道了',
					success: function (res) {
						
					}
				});
			}
		},
		moneys(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/compAccount/'+landRegistLG.user.id, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						console.log(response.data,'-----------------');
						this.list = response.data.content;
						this.moneyzhong=parseInt(this.list.moneyStr);
						this.moneydj=parseInt(this.list.frozenMoneyStr);
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
	}
};
</script>

<style>
.content {
	position: relative;
	width: 100vw;
	padding: 2vw 4vw;
	background: #fff;
}
.account-box {
	position: relative;
	width: 100%;
}
.account {
	position: relative;
	width: 100%;
	height: 47.2vw;
	background-image: linear-gradient(-134deg, #57d6cf 0%, #15d49f 100%);
	box-shadow: 0 2px 10px 0 rgba(2, 194, 162, 0.3);
	border-radius: 4px;
}
.person-box {
	position: relative;
	width: 90%;
	margin-left: 5%;
	padding-top: 5vw;
}
.person-img {
	position: relative;
	width: 50upx;
	height: 50upx;
}
.person-img > img {
	position: relative;
	width: 100%;
	border-radius: 50%;
	height: 100%;
}
.person-name {
	position: relative;
	width: 60%;
}
.person-name > p {
	position: relative;
	font-family: PingFang-SC-Medium;
	font-size: 28upx;
	color: #ffffff;
	letter-spacing: 0;
	margin-left: 2vw;
	line-height: 7vw;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.my-account {
	position: relative;
	width: 100%;
	margin-top: 24upx;
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
	margin-top: -12upx;
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
.question{
	margin-left: 10upx;
}
</style>
