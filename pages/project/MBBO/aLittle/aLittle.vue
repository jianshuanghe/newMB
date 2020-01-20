<template>
	<div class="content-extend">
		<div class="extentBox">
			<account :listData="listData"></account>
			<Statistics :listData="listData"></Statistics>
			<dataTrendKanban></dataTrendKanban>
			<!-- <gadget></gadget> -->
			<view class="extentBox-tian">
				
			</view>
		</div>
	</div>
</template>

<script>
import account from './extendManageList/account';
import Statistics from './extendManageList/Statistics';
import dataTrendKanban from './extendManageList/dataTrendKanban/dataTrendKanban';
import gadget from './extendManageList/gadget';
import { mapMutations, mapGetters } from 'vuex';
export default {
	components: {
		account,
		Statistics,
		dataTrendKanban,
		gadget
	},
	data() {
		return {
			loadingShow: false, // loading
			confirmShow1: false,
			confirmBtn1: '好的，知道了',
			confirmShow: false,
			confirmBtn: '去认证',
			cancelBtn: '暂不认证',
			confirmTitle: '提示',
			confirmText: '您的公司还未认证，无法进行广告投放，快去提交公司认证信息吧～～～',
			listData: {
				UserData:{
					"passWord": null,
					"compLogo": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKB0hUYibokE4jkgia3wClLMz8l20TYbdX0uibziavftrg0ylDne3W9N7mIQI7SRtibpmic5p0KP1WK7ONw/132",
					"wechatQrImg": "https://img04.iambuyer.com/imgup/upload/images/2019/07/15/PM1sECJS2n1G7n5sCDwcQWlB8kNlPrHoEYnQPJ79b4I7LpNNxN0v9Eb46SDBm4fk.jpeg",
					"companyName": "菅双鹤",
					"nickname": "菅双鹤",
					"companyIntro": "肉丸无语",
					"addressDetail": "肉丸无语",
					"contactTelphone": "13146296160",
					"contactEmail": "274088960@qq.com",
					"contactMan": "偶遇语音",
					"userPhone": "13146296160",
					"userEmail": "11@qq.com",
					"money": 2718,
					"beyondUser": "90.00%",
					"wxId": "12555",
					"content": "购物与物无忤",
					"headImg": "https://img02.iambuyer.com/imgup/upload/images/2019/06/18/M2Mhcjjc2Bu5b6jatbBmSPsyLgfdTRBTuT88rYVpgQmcsOAOjxlFNfgZ20B5FbyUoXe6nT.jpeg",
					"toBCount": 9,
					"toCCount": 11,
					"companyAccountVo": {
						"money": 0,
						"frozenMoney": null,
						"consMoney": 0,
						"putInCount": 0,
						"authState": "2",
						"toDayRechMoney": null,
						"yesterdayConsMoney": null
					},
					"compTypePcode": 120,
					"compTypeCode": 0,
					"compTypePcodeStr": "计算机服务和软件业",
					"compTypeCodeStr": null,
					"provinceCode": "110000",
					"cityCode": "110100",
					"areaCode": "110101",
					"provinceCodeStr": "北京",
					"cityCodeStr": "北京市",
					"areaCodeStr": "东城区",
					"vipState": "1",
					"cydVipLv": null
				},
				accountData: {
					"authStateCount":0,
					"rpCompanyAuth":"2",
					"money":0,
					"authState1":0,
					"frozenMoney":0,
					"authState0":0
				},
				dataInfo: {
					"sumMoney": 0,
					"countInfo": 0,
					"clikeCount": 0,
					"createTime": null,
					"clikeCountRate": 0,
					"converCount": 0,
					"converCountRate": 0,
					"submitCount": 0,
					"telCount": 0,
					"followCount": 0,
					"clikeCustCount": 0,
					"scaleMoney": 0
				},
				dataInfoLineList: {
					"dates": [
						"2019-09-17",
						"2019-09-18",
						"2019-09-19",
						"2019-09-20",
						"2019-09-21",
						"2019-09-22",
						"2019-09-23",
						"2019-09-24"
					],
					"values0": [
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					],
					"values1": [
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]
				}
			} // 个人账户信息数据
		};
	},
	props: ['msgData'],
	computed: {
		...mapGetters(['TRENDKANBAN'])
	},
	created() {
		// if (this.EVN === 'production') {
		// 	axios.defaults.baseURL = this.apiProd2;
		// }
		// this.getAccountData();
		this.getmy();
		this.shareEachPage(); // 分享
	},
	mounted() {},
	methods: {
		...mapMutations({
			setPersonTitle: 'setPersonTitle',
			setLoadingShow: 'setLoadingShow',
			setLoadingText: 'setLoadingText'
		}),
		getmy() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/user/'+landRegistLG.user.id, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						// console.log(response.data);
						
						// this.$store.commit('setMation', this.List); // 更新vuex
						if (response.data.ret === '202') {
							uni.removeStorageSync('landRegist');
							uni.removeStorageSync('clickItems');
							this.$store.commit('setHome', 1);
							this.$store.commit('setLandRegist', 0);
							uni.showToast({
								title: '登录已过期，请重新登录',
								icon: 'none',
								duration: 1000
							});
							if (!uni.getStorageSync('landRegist')) {
								this.landRegistra(); // 判断登录状态
							}
						}else{
							this.list = response.data.content
							this.$store.commit('setMy', this.list); // 更新vuex
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
		onCancel() {
			this.confirmShow = true;
			console.log('暂不设置');
			this.$store.commit('setHome', 1);
			localStorage.setItem('tabItems', 1); // 缓存用户点击的按钮
			this.$store.commit('setClickItems', 1); // 更新vuex setClickItems
		},
		onConfirm(msg) {
			this.confirmShow = true;
			console.log('去认证');
			if (this.accountData.rpCompanyAuth === '0') {
				// 未认证状态
				this.$router.push({
					path: '/companyInforEdit',
					query: { personTitle: 2 }
				});
			}
			if (this.accountData.rpCompanyAuth === '3') {
				// 认证失败
				this.$store.commit('setPersonTitle', 2);
				this.$router.push({
					path: '/companyInfor',
					query: { personTitle: 2 }
				});
			}
			if (this.accountData.rpCompanyAuth === '1') {
				// 认证中
				this.$store.commit('setPersonTitle', 2);
				this.$router.push({
					path: '/companyInfor',
					query: { personTitle: 2 }
				});
			}
		},
		getAccountData() {
			// 获取账户信息
			console.log('获取账户信息');
			this.$store.commit('setLoadingShow', true); // 更新vuex loading
			let landRegistLG = JSON.parse(localStorage.getItem('landRegist')); // 读取缓存的用户信息
			console.log(landRegistLG.user.id);
			axios
				.get(this.api2 + '/rest-rp/putIn/' + landRegistLG.user.id)
				.then(response => {
					console.log(response);
					if (response.data.ret === '200') {
						this.accountData = response.data.content;
						if (this.accountData.rpCompanyAuth === '0') {
							// 未认证状态
							this.confirmShow = true;
						}
						if (this.accountData.rpCompanyAuth === '1') {
							// 待认证审核中
							this.confirmShow1 = true;
							this.confirmText = '您公司的认证信息正在审核中，请耐心等待～～～';
						}
						if (this.accountData.rpCompanyAuth === '3') {
							// 认证失败
							this.confirmShow = true;
							this.confirmText = '您的公司认证审核未通过，无法进行推广，快去重新提交认证信息吧～～～';
						}
						this.$store.commit('setLoadingShow', false); // 更新vuex loading
					} else {
						this.$store.commit('setLoadingShow', false); // 更新vuex loading
						Toast(response.data.msg);
					}
				})
				.catch(error => {
					this.$store.commit('setLoadingShow', false); // 更新vuex loading
					Toast('网络繁忙，请稍后');
					console.log(error, '网络繁忙，请稍后');
				});
		}
	}
};
</script>

<style scoped>
.content-extend {
	position: relative;
	margin-bottom: 10vw;
}
.extentBox-tian{
	width: 100%;
	height: 20vw;
}
</style>
