<template>
	<div class="reportFrom-content">
		<div class="reportFrom-box">
			<div class="RF-title"><p class="">充值记录</p></div>
			<div class="reportFrom">
				<div class="RF-top">
					<div class="RF-item RF-bg left"><p class="borderRight">充值时间</p></div>
					<div class="RF-item RF-bg left"><p class="borderRight">充值金额</p></div>
					<div class="RF-item RF-bg left"><p class="borderRight">充值方式</p></div>
					<div class="RF-item RF-bg left"><p class="">操作说明</p></div>
					<div class="clear"></div>
				</div>
				<div class="RF-cont">
					<div class="RF-lists">
						<div class="RF-item left"><p class="borderRight">总计</p></div>
						<div class="RF-item left">
							<p class="borderRight">{{ arr || 0 }}</p>
						</div>
						<div class="RF-item left"><p class="borderRight">-</p></div>
						<div class="RF-item left"><p class="">-</p></div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="RF-cont" v-for="(items, index) in UserData" :key="index">
					<div class="RF-lists">
						<div class="RF-item left">
							<p class="borderRight">{{ items.rechTime | time }}</p>
						</div>
						<div class="RF-item left">
							<p class="borderRight">{{ items.rechMoney || 0 }}</p>
						</div>
						<div class="RF-item left">
							<p class="borderRight">{{ items.rechType || '-' }}</p>
						</div>
						<div class="RF-item left">
							<p class="">{{ items.userName || '-' }}</p>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
			<div class="lineBoxTop"></div>
			<div class="findMore-RF" @click="clickFindMore()"><p class="">查看更多</p></div>
			 <!-- v-if="UserData && pageNum !== num" -->
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'reportFrom',
	data() {
		return {
			pageNum: 1, // 数据总页数
			num: 1, // 当前页数
			arr: '', // 总计数据

			UserData: {
				// passWord: null,
				// compLogo: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKB0hUYibokE4jkgia3wClLMz8l20TYbdX0uibziavftrg0ylDne3W9N7mIQI7SRtibpmic5p0KP1WK7ONw/132',
				// wechatQrImg: 'https://img04.iambuyer.com/imgup/upload/images/2019/07/15/PM1sECJS2n1G7n5sCDwcQWlB8kNlPrHoEYnQPJ79b4I7LpNNxN0v9Eb46SDBm4fk.jpeg',
				// companyName: '菅双鹤',
				// nickname: '菅双鹤',
				// companyIntro: '肉丸无语',
				// addressDetail: '肉丸无语',
				// contactTelphone: '13146296160',
				// contactEmail: '274088960@qq.com',
				// contactMan: '偶遇语音',
				// userPhone: '13146296160',
				// userEmail: '11@qq.com',
				// money: 2718,
				// beyondUser: '91.00%',
				// wxId: '12555',
				// content: '购物与物无忤',
				// headImg: 'https://img04.iambuyer.com/imgup/upload/images/2019/06/18/M2Mhcjjc2Bu5b6jatbBmSPsyLgfdTRBTuT88rYVpgQmcsOAOjxlFNfgZ20B5FbyUoXe6nT.jpeg',
				// toBCount: 9,
				// toCCount: 11,
				// companyAccountVo: {
				// 	money: 0,
				// 	frozenMoney: null,
				// 	consMoney: 0,
				// 	putInCount: 0,
				// 	authState: '2',
				// 	toDayRechMoney: null,
				// 	yesterdayConsMoney: null
				// },
				// compTypePcode: 120,
				// compTypeCode: 0,
				// compTypePcodeStr: '计算机服务和软件业',
				// compTypeCodeStr: null,
				// provinceCode: '110000',
				// cityCode: '110100',
				// areaCode: '110101',
				// provinceCodeStr: '北京',
				// cityCodeStr: '北京市',
				// areaCodeStr: '东城区',
				// vipState: '1',
				// cydVipLv: null
			} // 接口返回的会员数据
		};
	},
	created() {
		// if (this.EVN === 'production') {
		//   axios.defaults.baseURL = this.apiProd2;
		// }
		this.getTotalData();
		this.getSurveyData();
	},
	filters: {
		time: function(value) {
			return value.split(' ')[0];
		}
	},
	mounted() {
		console.log(this.pageNum, '-------------', this.num);
	},
	methods: {
		...mapMutations({
			setLoadingShow: 'setLoadingShow',
			setLoadingText: 'setLoadingText'
		}),
		getTotalData() {
			console.log('获取总计数据');
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/compAccount/selectRechListCount?userId='+landRegistLG.user.id, //接口地址。
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
		getSurveyData() {
			console.log('获取充值记录数据');
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/compAccount/selectRechList?userId='+landRegistLG.user.id+'&page=' + this.num, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						let RunWaterData = response.data.content;
						this.UserData = RunWaterData.list;
						this.pageNums(response.data.content.count);
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
			// axios
			// 	.get(this.api2 + '/rest-rp/compAccount/selectRechList?userId=' + landRegistLG.user.id + '&page=' + this.num)
			// 	.then(response => {
			// 		console.log(response);
			// 		if (response.data.ret === '200') {
			// 			this.$store.commit('setLoadingShow', false); // 更新vuex loading
			// 			console.log('数据流水报表');
			// 			let RunWaterData = response.data.content;
			// 			this.UserData = RunWaterData.list;
			// 			this.pageNums(response.data.content.count);
			// 		} else {
			// 			this.$store.commit('setLoadingShow', false); // 更新vuex loading
			// 			Toast(response.data.msg);
			// 		}
			// 	})
			// 	.catch(error => {
			// 		this.$store.commit('setLoadingShow', false); // 更新vuex loading
			// 		Toast('网络繁忙，请稍后');
			// 		console.log(error, '网络繁忙，请稍后');
			// 	});
		},
		pageNums(cont) {
			this.pageNum = Math.ceil(cont / 8);
			console.log(this.pageNum, '分页数');
		},
		clickFindMore() {
			console.log('触发加载更多');
			this.num = String(parseInt(this.num) + 1);
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/compAccount/selectRechList?userId='+landRegistLG.user.id+'&page=' + this.num, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						if (response.data.content.list.length === 0) {
							uni.showToast({
								title: '全部加载完毕',
								icon: 'none',
								duration: 1000
							});
							return false;
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
			// axios
			// 	.get(this.api2 + '/rest-rp/compAccount/selectRechList?userId=' + landRegistLG.user.id + '&page=' + this.num)
			// 	.then(response => {
			// 		// 获取数据
			// 		if (response.data.ret === '200') {
			// 			this.$store.commit('setLoadingShow', false); // 更新vuex loading
			// 			console.log('数据流水报表');
			// 			if (response.data.content.list.length === 0) {
			// 				this.$store.commit('setLoadingShow', false); // 更新vuex loading
			// 				Toast('已经没有数据了');
			// 				return;
			// 			}
			// 			let RunWaterData = response.data.content;
			// 			this.UserData = this.UserData.concat(RunWaterData.list);
			// 		} else {
			// 			this.$store.commit('setLoadingShow', false); // 更新vuex loading
			// 			Toast('网络错误');
			// 		}
			// 	})
			// 	.catch(error => {
			// 		this.$store.commit('setLoadingShow', false); // 更新vuex loading
			// 		Toast('网络繁忙，请稍后');
			// 		console.log(error, '网络繁忙，请稍后');
			// 	});
		},
		screenDataPopup() {
			// 切换数据日期
			this.dataPopup = true;
		},
		confirmScreen() {
			// 数据看板确定
			console.log('1');
		},
		onValuesChange(picker, values) {
			console.log(values);
		}
	}
};
</script>

<style scoped>
.reportFrom-content {
	position: relative;
	width: 100%;
}
.reportFrom-box {
	position: relative;
	width: 100%;
	background: #fff;
}
.RF-title {
	position: relative;
	width: 100%;
	padding: 1vw 4vw 1vw 4vw;
	margin-bottom: 2vw;
}
.RF-title > p {
	font-family: PingFang-SC-Bold;
	font-size: 4.266vw;
	color: #2e2e30;
	line-height: 5vw;
}
.reportFrom {
	position: relative;
	width: 100%;
}
.RF-top {
	position: relative;
	width: 100%;
}
.RF-bg {
	position: relative;
	background: #fafafa;
}
.RF-item {
	position: relative;
	width: 25%;
	border-top: 1px solid #d2d2d2;
}
.RF-item > p {
	position: relative;
	width: 99%;
	font-family: PingFang-SC-Regular;
	font-size: 3.5vw;
	color: #2e2e30;
	line-height: 10.4vw;
	padding: 0 1vw 0 3vw;
}
.borderRight {
	border-right: 1px solid #d2d2d2;
}
.findMore-RF {
	position: relative;
	width: 100%;
}
.findMore-RF > p {
	position: relative;
	width: 100%;
	text-align: center;
	font-family: PingFang-SC-Medium;
	font-size: 3.5vw;
	color: #9b9b9b;
	line-height: 10.4vw;
}
.lineBoxTop {
	border-top: 1px solid #d2d2d2;
}
</style>
