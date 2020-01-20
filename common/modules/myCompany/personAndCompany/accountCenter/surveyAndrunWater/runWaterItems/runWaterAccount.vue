<template>
	<div class="content-SU">
		<div class="account-box">
			<div class="account-SU2">
				<div class="screen-date-SU left">
					<div class="SU-time">
						<div class="time-left left"><p class="">时间：</p></div>
						<div class="time-screen left">
							<p class="zitis">
								<picker @change="bind" :value="ind" :range="array1">
									<view class="ziti">{{pic ? pic : '昨日'}}<img :src="rightArrow" alt="" class="rightArrow" /></view>
								</picker>
								
							</p>
							<button @click="screenDataPopup" class="srcBtn-SU"></button>
						</div>
						<div class="clear"></div>
					</div>
					<!-- <mt-popup
            v-model="dataPopup"
            popup-transition="popup-fade"
            position="bottom" class="mint-datetime">
            <mt-picker
              :slots="screenData"
              @change="onValuesChange"
              valueKey='text'show-toolbar>
              <span class="mint-datetime-action mint-datetime-cancel" @click="dataPopup = false">取消</span>
              <span class="mint-datetime-action mint-datetime-confirm" @click="confirmScreen">确定</span>
            </mt-picker>
          </mt-popup> -->
				</div>
			</div>
			<div class="amountMoney">
				<div class="amountMoney-box">
					<div class="amountMoney-cont">
						<div class="AM-box left">
							<p class="AM-title">累计充值</p>
							<p class="AM-text-left">{{ arr.rechMoney || '0.00'}}</p>
						</div>
						<div class="AM-box left">
							<p class="AM-title MG-left">累计花费</p>
							<p class="AM-text-right MG-left">{{ arr.consMoney || '0.00'}}</p>
						</div>
						<div class="clear"></div>
						<div class="Y-line-box"><div class="Y-line"></div></div>
					</div>
				</div>
			</div>
		</div>
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
							<p class="borderRight">{{ arr.consMoney || '0'}}</p>
						</div>
						<div class="RF-item left">
							<p class="borderRight">{{ arr.rechMoney || '0'}}</p>
						</div>
						<div class="RF-item left">
							<p class="">-</p>
						</div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="RF-cont" v-for="(items, index) in UserData">
					<div class="RF-lists">
						<div class="RF-item left">
							<p class="borderRight">{{items.createTime || '0'}}</p>
						</div>
						<div class="RF-item left">
							<p class="borderRight">{{items.consMoney || '0'}}</p>
						</div>
						<div class="RF-item left">
							<p class="borderRight">{{items.rechMoney || '0'}}</p>
						</div>
						<div class="RF-item left">
							<p class="">{{items.lastAccountMoeny || '0'}}</p>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
			<div class="lineBoxTop"></div>
			<div class="findMore-RF" @click="clickFindMore()"><p class="">查看更多</p></div>
		</div>
	</div>
</template>

<script>
// import { runWaterData } from '@/utils/code.js';
import { mapMutations, mapGetters } from 'vuex';
// import { Toast, Popup } from 'mint-ui';
// import axios from 'axios';
export default {
	name: 'runWaterAccount',
	components: {
		// Popup
	},
	data() {
		return {
			rightArrow:  this.Static+'images/business/home/extendManageList/rightArrow2.png', // 右侧箭头
			dataPopup: false, // 数据日期弹层
			// screenData: [ // 日期
			//   {
			//     flex: 1,
			//     values: runWaterData,
			//     textAlign: 'center'
			//   }
			// ],
			changeRunWaterTime: {
				// 切换存储
				code: 1,
				text: '昨天'
			},
			ind: 0,
			pic:'昨日',
			array1: ['昨日', '近7日','近30日','全部'],
			arr:[],
			runWaterTextShow: '昨天', // 页面显示
			pageNum: 0, // 数据总页数
			num: 1, // 当前页数
			dataRunWater: {
				// 获取数据参数
				userId: '',
				starTime: '',
				endTime: ''
			},
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
		
		this.getRunWaterData();
		this.reportFrom();
	},
	watch: {
		
	},
	methods: {
		...mapMutations({
			setRunWaterPageNum: 'setRunWaterPageNum', // 总页数
			setRunWaterNum: 'setRunWaterNum', // 当前页数
			setDataRunWaterParams: 'setDataRunWaterParams', // 参数
			setRunWaterTopData: 'setRunWaterTopData', // 账户流水顶部数据
			setReportRunWaterData: 'setReportRunWaterData', // 报表数据
			setLoadingShow: 'setLoadingShow',
			setLoadingText: 'setLoadingText'
		}),
		bind: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.array1.map((items, index) => {
				if (String(index) === String(e.target.value)) {
					this.pic = items;
					console.log(items)
					if(this.pic=='昨日'){
						this.dataRunWater.starTime = this.getDate(1); // 默认开始时间时昨天
						this.dataRunWater.endTime = this.getDate(1);
						this.getRunWaterData();
						this.reportFrom();
					}else if(this.pic=='近7日'){
						this.dataRunWater.starTime = this.getDate(7); // 默认开始时间时昨天
						this.dataRunWater.endTime = this.getDate(0);
						this.getRunWaterData();
						this.reportFrom();
					}else if(this.pic=='近30日'){
						this.dataRunWater.starTime = this.getDate(30); // 默认开始时间时昨天
						this.dataRunWater.endTime = this.getDate(0);
						this.getRunWaterData();
						this.reportFrom();
					}else if(this.pic=='全部'){
						this.dataRunWater.starTime = ''; // 默认开始时间时昨天
						this.dataRunWater.endTime = '';
						this.getRunWaterData();
						this.reportFrom();
					}
				}
			})
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
		getRunWaterData() {
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
					starTime:this.dataRunWater.starTime,
					endTime:this.dataRunWater.endTime,
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
					starTime:this.dataRunWater.starTime,
					endTime:this.dataRunWater.endTime,
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
		clickFindMore(){
			uni.showToast({
				title: '已经是全部数据了',
				icon: 'none',
				duration: 1000
			});
		},
		getReportRunWaterData() {
			// console.log('获取流水报表数据');
			// let params = this.dataRunWater;
			// this.$store.commit('setLoadingShow', true); // 更新vuex loading
			// axios
			// 	.post(this.api2 + '/rest-rp/compAccount/selectList?page=' + this.num, params)
			// 	.then(response => {
			// 		// 获取数据
			// 		if (response.data.ret === '200') {
			// 			this.$store.commit('setLoadingShow', false); // 更新vuex loading
			// 			console.log('数据流水报表');
			// 			let RunWaterData = response.data.content;
			// 			this.pageNums(RunWaterData.count);
			// 			console.log(params, '跟新参数');
			// 			this.$store.commit('setDataRunWaterParams', params); // 更新vuex setDataRunWaterParams
			// 			this.$store.commit('setReportRunWaterData', RunWaterData.list); // 更新vuex setReportRunWaterData
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
		pageNums(cont) {
			this.pageNum = Math.ceil(cont / 10);
			this.$store.commit('setRunWaterPageNum', this.pageNum); // 更新vuex setDataRunWaterParams
		},
		screenDataPopup() {
			// 切换数据日期
			this.dataPopup = true;
		},
		confirmScreen() {
			// 数据看板确定
			console.log('1');
			this.runWaterTextShow = this.changeRunWaterTime.text;
			let landRegistLG = JSON.parse(localStorage.getItem('landRegist')); // 读取缓存的用户信息
			console.log(landRegistLG.user.id);
			this.dataRunWater.userId = landRegistLG.user.id; // id
			this.dataRunWater.starTime = this.getDate(this.changeRunWaterTime.code); // 默认开始时间时
			if (this.changeRunWaterTime.code === '001') {
				this.dataRunWater.starTime = '2019-01-01'; // 全部时间
			}
			this.dataRunWater.endTime = this.getDate(0); // 默认结束时间时今天
			console.log(this.dataRunWater);
			this.$store.commit('setRunWaterNum', 1); // 更新vuex setDataRunWaterParams
			this.getRunWaterData();
			this.dataPopup = false;
		},
		onValuesChange(picker, values) {
			console.log(values);
			this.changeRunWaterTime = values[0];
		}
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
.account-SU2 {
	position: relative;
	width: 100%;
	height: 28.2vw;
	background-image: linear-gradient(-134deg, #57d6cf 0%, #15d49f 100%);
	box-shadow: 0 2px 10px 0 rgba(2, 194, 162, 0.3);
}

.screen-date-SU {
	position: relative;
	width: 100%;
	padding: 1vw 6vw 0 6vw;
}
.zitis{
	top: 20upx;
}
.SU-time {
	position: relative;
	width: 100%;
}
.time-left {
	position: relative;
	width: 13%;
}
.time-left > p {
	font-family: PingFang-SC-Medium;
	font-size: 3.733vw;
	color: #ffffff;
	letter-spacing: 0;
	line-height: 12vw;

}
.time-screen {
	position: relative;
	width: 70%;
}
.time-screen > p {
	font-family: PingFang-SC-Medium;
	font-size: 3.733vw;
	color: #ffffff;
	letter-spacing: 0;
	line-height: 12vw;
}
.screen-date > p {
	position: relative;
	width: 100%;
	text-align: right;
	ont-family: PingFangSC-Regular;
	font-size: 3.2vw;
	color: #9b9b9b;
	text-align: right;
	line-height: 6vw;
}
.srcBtn-SU {
	position: absolute;
	top: 16vw;
	width: 23vw;
	height: 5vw;
	opacity: 0;
}
.right-arrow {
	width: 4vw;
	margin-left: 11vw;
	top: -8.7vw;
}
.ziti{
	margin-top: 20upx;
}
.rightArrow {
	position: relative;
	width: 4vw;
	height: 2.5vw;
	margin-left: 5upx;
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
	height: 164upx;
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
