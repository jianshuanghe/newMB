<!-- <template>
	<div class="content-quick">
		<div class="mask-popup" @click="clickCloseMask"></div>
		<div class="BPI-box">
			<div class="business-putIn-box">
				<div class="buSiPi-top">
					<div class="BSP-title"><p class="">投放商机</p></div>
					<div class="BSP-check">
						<div class="B-check-items left" @click="checkType(1)">
							<div class="check-items">
								<div class="items-ch-box">
									<div class="check-img left"><img :src="check1 ? checked : check" alt="" class="img" /></div>
									<div class="check-text left"><p class="">全部</p></div>
									<div class="clear"></div>
								</div>
							</div>
						</div>
						<div class="B-check-items left" @click="checkType(2)">
							<div class="check-items">
								<div class="items-ch-box">
									<div class="check-img left"><img :src="check2 ? checked : check" alt="" class="img" /></div>
									<div class="check-text left"><p class="">自定义</p></div>
									<div class="clear"></div>
								</div>
							</div>
						</div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="line"></div>
				<div class="BSP-items">
					<checkbox-group @change="checkboxChange2">
						<label @click="labelBtn2(items.value, index)" v-for="(items, index) in getMyPutInBusinessData" :key="index">
							<checkbox :value="items.value" :checked="items.checked" v-show="false" />
							<view class="left MIL-item">
								<div class="items-bsp-check left">
									<div class="bsp-items">
										<p :class="{ checkedItems: items.checked }">{{ items.name }}</p>
										<div class="checked-bsp-img" :class="{ checkedItemsBg: items.checked }">
											<img :src="checkedItems" alt="" class="img" />
										</div>
									</div>
								</div>
							</view>
						</label>
					</checkbox-group>

					<div class="clear"></div>
				</div>
				<div class="BSP-button">
					<div class="line"></div>
					<div class="btn-bsp">
						<div class="close-bsp left">
							<div class="close-img" @click="clickClose"><img :src="close" alt="" class="" /></div>
						</div>
						<div class="reset-bsp left">
							<div class="reset-box" @click="clickReset"><p class="">重置</p></div>
						</div>
						<div class="confirm-bsp right">
							<div class="confirm-box" @click="clickConfirm"><p class="">确认</p></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import check from '@/static/mbcImg/home/extendManageList/dataReport/check.png';
import checked from '@/static/mbcImg/home/extendManageList/dataReport/checked.png';
import checkedItems from '@/static/mbcImg/home/extendManageList/dataReport/checkedItems.png';
import close from '@/static/mbcImg/home/extendManageList/dataReport/close.png';
// import { Loading } from 'vux';
// import axios from 'axios';
// import { Toast } from 'mint-ui';
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'businessPutIn',
	data() {
		return {
			getMyPutInBusinessData: [
				// {
				// 	value: '1',
				// 	name: '会发光的书法家',
				// 	checked: false
				// },
				// {
				// 	value: '2',
				// 	name: '会发光的书法家',
				// 	checked: false
				// },
				// {
				// 	value: '3',
				// 	name: '会发光的书法家',
				// 	checked: false
				// },
				// {
				// 	value: '4',
				// 	name: '会发光的书法家',
				// 	checked: false
				// },
				// {
				// 	value: '5',
				// 	name: '会发光的书法家',
				// 	checked: false
				// },
				// {
				// 	value: '6',
				// 	name: '会发光的书法家',
				// 	checked: false
				// },
				// {
				// 	value: '7',
				// 	name: '会发光的书法家',
				// 	checked: false
				// }
			], // 我的投放商机数据
			businessDataList: [], // 盛放选中的商机
			check1: false,
			check2: true, // 默认状态选择自定翼
			check: check, // type 选择按钮的未选中状态 img
			checked: checked, // type 选择按钮的选中状态 img
			checkedItems: checkedItems, // 子项选中对勾 img
			arr: [], // 定义样式
			close: close, // img
			checkAll: false, // 记录全选状态 默认为false
			clickItemsIndex: '', // 记录子项点击的index
			dataTrendKanban: {
				// 获取数据参数
				userId: '',
				starTime: '',
				endTime: '',
				instIds: ''
			},
			dataTrend: {
				// 数据趋势参数
				lineType0: '2',
				lineType1: '0'
			}
		};
	},
	components: {
		// Loading
	},
	computed: {
		...mapGetters(['TRENDKANBAN', 'PUTINBUSINESS'])
	},
	watch: {
		// PUTINBUSINESS: {
		// 	handler(a, b) {
		// 		this.dataTrendKanban.instIds = a.instIds; // 侦听项目id参数
		// 	},
		// 	deep: true
		// }
	},
	created() {
		// if (this.EVN === 'production') {
		// 	axios.defaults.baseURL = this.apiProd2;
		// }
		// this.dataTrend.lineType0 = this.TRENDKANBAN.trendLeft;
		// this.dataTrend.lineType1 = this.TRENDKANBAN.trendRight;
		// let landRegistLG = JSON.parse(localStorage.getItem('landRegist')); // 读取缓存的用户信息
		// console.log(landRegistLG.user.id);
		// this.dataTrendKanban.userId = landRegistLG.user.id;
		// this.getMyPutInBusiness();
		// this.trendKanban = this.TRENDKANBAN; // 获取默认切换数据code'
		this.Putinname();
		this.dataTrendKanban.starTime = this.getDate(7); // 默认开始时间时近七天
		this.dataTrendKanban.endTime = this.getDate(0); // 默认结束时间时今天
	},
	mounted() {},
	methods: {
		...mapMutations({
			setBusinessPutInShow: 'setBusinessPutInShow',
			setTrendKan: 'setTrendKan',
			setKanBanData: 'setKanBanData',
			setInstIds: 'setInstIds',
			setDataReportItemsData: 'setDataReportItemsData',
			setLoadingShow: 'setLoadingShow',
			setLoadingText: 'setLoadingText'
		}),
		Putinname(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				// console.log(params)
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/putIn/selectPutInInstList?userId=760', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						console.log(response.data);
						response.data.content.map((item,index)=>{
							let obj={
								value:String(item.id),
								name:item.title,
								checked:false
							}
							this.getMyPutInBusinessData.push(obj)
						})
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
		// 勾选商机
		labelBtn2(name, index) {
			console.log(name, index, 'nameindex');
			if (this.businessDataList.join(',').indexOf(name) > -1) {
				this.businessDataList.map((items, key) => {
					this.getMyPutInBusinessData[index].checked = true;
				});
			} else {
				this.getMyPutInBusinessData[index].checked = false;
			}
			if (this.businessDataList.length === 0) { // 如果选择的都为空，执行自定义模式
				this.checkType(2);
			}
		},
		checkboxChange2: function(e) {
			this.businessDataList = e.detail.value; // 获取选中的值
			console.log(this.businessDataList, 'businessDataList');
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
		clickCloseMask() {
			this.$store.commit('setBusinessPutInShow', false);
			console.log('触发商机投放关闭');
		},
		checkType(e) {
			if (e === 1 && this.check1 === false) {
				// 全部
				console.log('全部');
				this.check1 = !this.check1;
				if (this.check2 === true) {
					// 另一个取消
					this.check2 = false;
				}
				for (let i in this.getMyPutInBusinessData) {
					this.businessDataList.push(this.getMyPutInBusinessData[i].value);
					// 重置true
					this.getMyPutInBusinessData[i].checked = true;
				}
				console.log(this.businessDataList, '查看目前已选中的商机--------------全部');
			} else if (e === 2 && this.check2 === false) {
				this.businessDataList = [];
				// 自定义
				console.log('自定义');
				for (let i in this.getMyPutInBusinessData) {
					// 重置true
					this.getMyPutInBusinessData[i].checked = false;
				}
				this.check2 = !this.check2;
				if (this.check1 === true) {
					// 另一个取消
					this.check1 = false;
				}
				console.log(this.businessDataList, '查看目前已选中的商机--------------自定义');
			}
		},
		clickClose() {
			console.log('触发了关闭按钮');
			this.clickCloseMask();
		},
		clickReset() {
			console.log('触发重置按钮');
			this.businessDataList = [];
			for (let i in this.getMyPutInBusinessData) {
				// 重置true
				this.getMyPutInBusinessData[i].checked = false;
			}
			this.check2 = true;
			if (this.check1 === true) {
				// 另一个取消
				this.check1 = false;
			}
			console.log(this.businessDataList, '查看目前已选中的商机--------------重置');
		},
		getMyPutInBusiness() {
			// 获取我的投放商机
			this.$store.commit('setLoadingShow', true); // 更新vuex loading
			let landRegistLG = JSON.parse(localStorage.getItem('landRegist')); // 读取缓存的用户信息
			console.log(landRegistLG.user.id);
			axios
				.get(this.api2 + '/rest-rp/putIn/selectPutInInstList?userId=' + landRegistLG.user.id)
				.then(response => {
					console.log(response);
					if (response.data.ret === '200') {
						this.getMyPutInBusinessData = response.data.content;
						for (let i = 0; i < this.getMyPutInBusinessData.length; i++) {
							// 标签数据，同时将arr数组中的数据全部填充为false
							this.arr.push(false);
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
		},
		getDataTrendKanBan() {
			console.log('获取推广项目看板数据');
			let params = this.dataTrendKanban;
			axios
				.post(this.api2 + '/rest-rp/putIn/dataInfo', params)
				.then(response => {
					// 获取数据
					console.log(response.data, '看板数据');
					let kanBanData = response.data;
					this.$store.commit('setKanBanData', kanBanData); // 更新数据表表中数据看板vuex
					// this.resetKanBanData(kanBanData); // 重置看板数据
					this.$store.commit('setLoadingShow', false); // 更新vuex loading
					console.log('数据看板数据');
					this.getTrendData(); // 获取数据趋势数据
				})
				.catch(error => {
					this.$store.commit('setLoadingShow', false); // 更新vuex loading
					Toast('网络繁忙，请稍后');
					console.log(error, '网络繁忙，请稍后');
				});
		},
		getTrendData() {
			console.log('获取数据趋势数据');
			let landRegistLG = JSON.parse(localStorage.getItem('landRegist')); // 读取缓存的用户信息
			console.log(landRegistLG.user.id);
			let params = this.dataTrendKanban;
			params.lineType0 = this.dataTrend.lineType0; // 左侧按钮参数
			params.lineType1 = this.dataTrend.lineType1; // 右侧按钮参数
			axios
				.post(this.api2 + '/rest-rp/putIn/dataInfoLineList', params)
				.then(response => {
					// 获取数据
					this.$store.commit('setLoadingShow', false); // 更新vuex loading
					console.log('数据趋势数据');
					let trendData = response.data.content;
					this.$store.commit('setDataReportItemsData', trendData); // 更新vuex中数据报表数据
					this.clickCloseMask(); // 关闭遮罩层
					// this.getLine(trendData); // 重置趋势数据
				})
				.catch(error => {
					this.$store.commit('setLoadingShow', false); // 更新vuex loading
					Toast('网络繁忙，请稍后');
					console.log(error, '网络繁忙，请稍后');
				});
		},
		clickConfirm() {
			console.log('触发了确认按钮');
			let putInList = [];
			for (let i in this.arr) {
				// 重置为false
				if (this.arr[i] === true) {
					putInList.push(this.getMyPutInBusinessData[i].id);
				}
			}
			console.log(this.businessDataList.join(','))
			this.$store.commit('setPutinname', this.businessDataList.join(','));
			this.clickCloseMask();
			// if (putInList.join(',') === '') {
			// 	// 校验手机号不能为空
			// 	Toast('请选择投放的商机');
			// 	return false;
			// }
			// console.log(putInList.join(','), '获取选中的数据');
			// this.$store.commit('setInstIds', putInList.join(',')); // 重置参数据中的项目id
			// this.getDataTrendKanBan(); // 获取新的数据表表数据
		}
	}
};
</script>

<style scoped>
.content-quick {
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 99999;
	top: 0;
}
.mask-popup {
	position: relative;
	height: 100vh;
	width: 100%;
	background: rgba(19, 9, 9, 0.59);
}
.BPI-box {
	position: absolute;
	top: 0;
	right: 0;
}
.business-putIn-box {
	position: relative;
	width: 86.933vw;
	float: right;
	background: #fff;
	height: 100vh;
}
.buSiPi-top {
	position: relative;
	width: 100%;
	padding: 0 5vw 0 5vw;
}
.BSP-title {
	position: relative;
	width: 100%;
}
.BSP-title {
	position: relative;
	width: 100%;
}
.BSP-title > p {
	position: relative;
	width: 100%;
	font-family: PingFang-SC-Medium;
	font-size: 3.733vw;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 10vw;
}
.BSP-check {
	position: relative;
	width: 100%;
}
.B-check-items {
	position: relative;
	width: 30%;
}
.check-items {
	position: relative;
	width: 100%;
}
.items-ch-box {
	position: relative;
	width: 100%;
}
.check-img {
	position: relative;
	width: 20%;
}
.check-img > img {
	position: relative;
	width: 4vw;
	height: 4vw;
	margin-top: 4vw;
}
.check-text {
	position: relative;
	width: 80%;
}
.check-text > p {
	font-family: PingFang-SC-Medium;
	font-size: 3.5vw;
	color: #5d5d5d;
	letter-spacing: 0;
	line-height: 12vw;
}
.BSP-items {
	position: relative;
	width: 100%;
	padding: 4vw 1vw 0 5vw;
	overflow: scroll;
	max-height: 85vh;
	-webkit-overflow-scrolling: touch;
}
.MIL-item {
	position: relative;
	width: 50%;
}
.items-bsp-check {
	position: relative;
	width: 100%;
	margin-bottom: 2vw;
}
.bsp-items {
	position: relative;
	width: 90%;
	border-radius: 2px;
}
.checkedItems {
	background: #12f3cd40 !important;
	color: #02c2a2 !important;
}
.checkAll p {
	background: #12f3cd40 !important;
	color: #02c2a2 !important;
}
.bsp-items > p {
	padding: 0 2vw 0 2vw;
	background: #f9f9f9;
	color: #5d5d5d;
	font-family: PingFang-SC-Medium;
	font-size: 3.5vw;
	letter-spacing: 0;
	line-height: 9vw;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.checked-bsp-img {
	position: absolute;
	bottom: 0;
	right: 0vw;
	width: 4.8vw;
	height: 4.8vw;
}
.checkedItemsBg {
	background: url(../../../../static/mbcImg/home/extendManageList/dataReport/checkedItems.png) no-repeat center center;
	background-size: 100% 100%;
}
.checked-bsp-img > img {
	position: relative;
	width: 100%;
	display: none;
}
.BSP-button {
	position: fixed;
	bottom: 0;
	width: 100%;
	z-index: 106;
	background: #fff;
}
.btn-bsp {
	position: relative;
	width: 100%;
	padding: 0 0vw 0 5vw;
}
.close-bsp {
	position: relative;
	width: 5%;
}
.close-img {
	position: relative;
	width: 100%;
}
.close-img > img {
	position: relative;
	width: 4.16vw;
	height: 4.16vw;
	margin-top: 3vw;
}
.reset-bsp {
	position: relative;
	width: 40%;
}
.reset-box {
	position: relative;
	width: 100%;
}
.reset-box > p {
	position: relative;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 10vw;
	text-align: center;
}
.confirm-bsp {
	position: relative;
	width: 45%;
	float: left;
}
.confirm-box {
	position: relative;
	width: 100%;
	background: #02c2a2;
}
.confirm-box > p {
	position: relative;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #fff;
	letter-spacing: 0;
	line-height: 10vw;
	text-align: center;
}
</style>
 -->