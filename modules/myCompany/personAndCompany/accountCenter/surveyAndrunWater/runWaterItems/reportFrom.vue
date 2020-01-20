<template>
	<div class="reportFrom-content">
		<div class="reportFrom-box">
			<div class="RF-title"><p class="">流水报表</p></div>
			<div class="reportFrom">
				<div class="RF-top">
					<div class="RF-item RF-bg left"><p class="borderRight">时间</p></div>
					<div class="RF-item RF-bg left"><p class="borderRight">总支出</p></div>
					<div class="RF-item RF-bg left"><p class="borderRight">总转入</p></div>
					<div class="RF-item RF-bg left"><p class="">日终结余</p></div>
					<div class="clear"></div>
				</div>
				<div class="RF-cont">
					<div class="RF-lists">
						<div class="RF-item left"><p class="borderRight">总计</p></div>
						<div class="RF-item left">
							<p class="borderRight">{{ totalData.consMoney }}</p>
						</div>
						<div class="RF-item left">
							<p class="borderRight">{{ totalData.rechMoney }}</p>
						</div>
						<div class="RF-item left">
							<p class="">{{ totalData.lastAccountMoeny || '无' }}</p>
						</div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="RF-cont" v-for="(items, index) in UserData">
					<div class="RF-lists">
						<div class="RF-item left">
							<p class="borderRight">{{ items.createTime }}</p>
						</div>
						<div class="RF-item left">
							<p class="borderRight">{{ items.consMoney || '-' }}</p>
						</div>
						<div class="RF-item left">
							<p class="borderRight">{{ items.rechMoney || '-' }}</p>
						</div>
						<div class="RF-item left">
							<p class="">{{ items.lastAccountMoeny || '-' }}</p>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
			<div class="lineBoxTop"></div>
			<div class="findMore-RF" v-if="UserData && pageNum !== num" @click="clickFindMore()"><p class="">查看更多</p></div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
// import { Toast } from 'mint-ui';
// import axios from 'axios';
export default {
	name: 'reportFrom',
	data() {
		return {
			dataPopup: false,
			dataRunWater: {
				// 获取数据参数
				userId: '',
				starTime: '',
				endTime: ''
			},
			pageNum: 1, // 数据总页数
			num: 1, // 当前页数
			totalData: {}, // 总计
			totalDatas:{},
			UserData: {
			} // 接口返回的会员数据
		};
	},
	computed: {
		...mapGetters(['ACCOUNTCENTER'])
	},
	created() {
		// if (this.EVN === 'production') {
		//   axios.defaults.baseURL = this.apiProd2;
		// }
		// let landRegistLG = JSON.parse(localStorage.getItem('landRegist')); // 读取缓存的用户信息
		// console.log(landRegistLG.user.id);
		// this.dataRunWater.userId = landRegistLG.user.id; // id
		this.dataRunWater.starTime = this.getDate(1); // 默认开始时间时昨天
		this.dataRunWater.endTime = this.getDate(1); // 默认结束时间时今天
		// this.clickFindMore();
		this.reportFrom();
		this.getRunWaterData();
	},
	watch: {
		
	},
	mounted() {
		console.log(this.pageNum, '-------------', this.num);
	},
	methods: {
		...mapMutations({
			setDataRunWaterParams: 'setDataRunWaterParams', // 参数
			setRunWaterNum: 'setRunWaterNum', // 当前页数
			setRunWaterTopData: 'setRunWaterTopData', // 账户流水顶部数据
			setReportRunWaterData: 'setReportRunWaterData', // 报表数据
			setLoadingShow: 'setLoadingShow',
			setLoadingText: 'setLoadingText'
		}),
		getRunWaterDatas() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				 // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				var params = {
					userId:String(landRegistLG.user.id),
					starTime:'',
					endTime:'',
				};
				console.log(params)
				uni.request({
					url: this.api2 + '/rest-rp/compAccount/selectListCount', //接口地址。
					data: params,
					method: 'POST',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						this.totalDatas = response.data.content;
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
		reportFrom(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				 // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				var params = {
					userId:String(landRegistLG.user.id),
					starTime:'',
					endTime:'',
				};
				console.log(params)
				uni.request({
					url: this.api2 + '/rest-rp/compAccount/selectList', //接口地址。
					data: params,
					method: 'POST',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						let RunWaterData = response.data.content;
						this.UserData = RunWaterData.list;
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
		getDate(e) {
			let day = new Date();
			day.setTime(day.getTime() - e * 24 * 60 * 60 * 1000);
			let getMonth = '';
			if (Number(day.getMonth() + 1) < 10) {
				getMonth = '0' + String(day.getMonth() + 1);
			} else {
				getMonth = String(day.getMonth() + 1);
			}
			let getDate = '';
			if (Number(day.getDate()) < 10) {
				getDate = '0' + String(day.getDate());
			} else {
				getDate = String(day.getDate());
			}
			return day.getFullYear() + '-' + getMonth + '-' + getDate;
		},
		clickFindMore() {
			console.log('触发加载更多');
			let params = this.dataRunWater;
			let num = String(parseInt(this.num) + 1);
			this.$store.commit('setLoadingShow', true); // 更新vuex loading
			axios
				.post(this.api2 + '/rest-rp/compAccount/selectList?page=' + num, params)
				.then(response => {
					// 获取数据
					if (response.data.ret === '200') {
						this.$store.commit('setLoadingShow', false); // 更新vuex loading
						console.log('数据流水报表');
						if (response.data.content.list.length === 0) {
							this.$store.commit('setLoadingShow', false); // 更新vuex loading
							Toast('已经没有数据了');
							return;
						}
						let RunWaterData = response.data.content;
						this.$store.commit('setRunWaterNum', num); // 更新vuex setDataRunWaterParams
						this.$store.commit('setDataRunWaterParams', this.dataRunWater); // 更新vuex setDataRunWaterParams
						this.$store.commit('setReportRunWaterData', this.UserData.concat(RunWaterData.list)); // 更新vuex setReportRunWaterData
					} else {
						this.$store.commit('setLoadingShow', false); // 更新vuex loading
						Toast('网络错误');
					}
				})
				.catch(error => {
					this.$store.commit('setLoadingShow', false); // 更新vuex loading
					Toast('网络繁忙，请稍后');
					console.log(error, '网络繁忙，请稍后');
				});
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
