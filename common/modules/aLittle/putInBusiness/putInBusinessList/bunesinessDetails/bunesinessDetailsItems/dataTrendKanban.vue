<template>
	<view class="content">
		<view class="data-box">
			<view class="kanban-box">
				<view class="title-box">
					<view class="title left"><p class="">{{i18n.kanban_title}}</p></view>
					<view class="screen-date left">
						<!-- <p class="" v-if="isCustomTime">
							起: <span><picker mode="date" :value="date" :start="startDate" :end="endDate" @change="startDateChange">{{ dataTrendKanban.starTime }}</picker></span>止:<span><picker mode="date" :value="date" :start="startDate" :end="endDate" @change="endDateChange">{{ dataTrendKanban.endTime }}</picker></span>
							<span class="right-arrow"><img :src="rightArrow" alt="" class="rightArrow" /></span>
						</p> -->
						<p class="">
							<picker @change="timeChange" value="0" :range="i18n.screenData" range-key="text">
								{{ trendKanBanText.kanBanText || '七天'}}
								<span class="right-arrow"><img :src="rightArrow" alt="" class="rightArrow" /></span>
							</picker>
						</p>
					</view>
					<view class="clear"></view>
				</view>
				<view class="tongji-box">
					<view class="item-tj">
						<scroll-view class="scroll-view_H" scroll-x="true">
							<view class="tongji-item left" v-for="(item, index) in i18n.itemList" :key="index">
								<view class="items-YY">
									<p class="tj-num">{{ item.num }}</p>
									<p class="tj-text">{{ item.title }}</p>
								</view>
								<view class="line-YY" v-if="index !== itemList.length - 1"></view>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
			<div class="line-box">
				<view class="qiun-columns">
					<div class="trend">
						<div class="title-box">
							<div class="title left"><p class="">{{i18n.trend_title}}</p></div>
							<div class="screen-date left">
								<p class="vs">
									<picker @change="leftScreenDataChange" value="0" :range="i18n.leftScreenData" range-key="text">
										<span class="screen-item1">{{trendKanBanText.trendLeftText}}</span>
									</picker>
									VS
									<picker @change="rightScreenDataChange" value="0" :range="i18n.rightScreenData" range-key="text">
										<span class="screen-item2">{{trendKanBanText.trendRightText}}</span>
									</picker>
								</p>
							</div>
							<div class="clear"></div>
						</div>
					</div>
					<view class="qiun-charts">
						<!--#ifdef MP-ALIPAY -->
						<canvas
							canvas-id="canvasLineA"
							id="canvasLineA"
							class="charts"
							:width="cWidth * pixelRatio"
							:height="cHeight * pixelRatio"
							:style="{ width: cWidth + 'px', height: cHeight + 'px' }"
							disable-scroll="true"
							@touchstart="touchLineA"
							@touchmove="moveLineA"
							@touchend="touchEndLineA"
						></canvas>
						<!--#endif-->
						<!--#ifndef MP-ALIPAY -->
						<canvas
							canvas-id="canvasLineA"
							id="canvasLineA"
							class="charts"
							disable-scroll="true"
							@touchstart="touchLineA"
							@touchmove="moveLineA"
							@touchend="touchEndLineA"
						></canvas>
						<!--#endif-->
					</view>
				</view>
			</div>
		</view>
	</view>
</template>

<script>
// import IEcharts from 'vue-echarts-v3';
// import { screenData, leftScreenData, rightScreenData } from '@/static/mbcJs/code.js';
import uCharts from '@/components/common/u-charts/u-charts.js';
import { isJSON } from '@/common/checker.js';
var _self;
var canvaLineA = null;
import { mapMutations, mapGetters } from 'vuex';
export default {
	components: {},
	data() {
		return {
			trendKanBanText: {
				// 数据看板数据展示text
				kanBanText: '近七日',
				trendLeftText: '点击数',
				trendRightText: '总消耗',
				kanBanTime: 7, // 数据看板code
				trendLeft: '1', // 数据趋势left
				trendRight: '3' // 数据趋势right
			},
			trendKanban: {
				// 数据看板和趋势切换获取的code And text
				kanBanText: '近七日',
				trendLeftText: '点击数',
				trendRightText: '总消耗',
				kanBanTime: 7, // 数据看板code
				trendLeft: '1', // 数据趋势left
				trendRight: '3' // 数据趋势right
			},
			dataTrendKanban: {
				// 获取数据参数
				userId: '',
				starTime: '',
				endTime: '',
				instIds: ''
			},
			dataTime: {
				starTime: '',
				endTime: ''
			},
			isCustomTime: false, // 判断是否为自定义时间，默认为false
			startDate: new Date('2018-01-01'),
			endDate: new Date(),
			dataTrend: {
				// 数据趋势参数
				lineType0: '2',
				lineType1: '0'
			},
			// screenData: screenData,
			// leftScreenData: leftScreenData,
			// rightScreenData: rightScreenData,
			cWidth: '690upx.',
			cHeight: '',
			pixelRatio: 1,
			textarea: '',
			rightArrow:  this.Static+'home/extendManageList/rightArrow.png',
			itemList:[],
			LineA: {
				categories: ['2019-09-17', '2019-09-18'],
				series: [
					// 数据列表配置项
					{
						name: '成交量A',
						legendShape: 'circle',
						data: [23, 10]
					},
					{
						name: '成交量B',
						legendShape: 'circle',
						data: [10, 69]
					}
				]
			},
			msgDataIsNew: []
		};
	},
	computed: {
		i18n () {
		  return this.$t('extendManageList')  
		},
		...mapGetters(['TRENDKANBAN'])
	},
	created() {
		// if (this.EVN === 'production') {
		// 	axios.defaults.baseURL = this.apiProd2;
		// }
		// let landRegistLG = JSON.parse(localStorage.getItem('landRegist')); // 读取缓存的用户信息
		// console.log(landRegistLG.user.id);
		// this.dataTrendKanban.userId = landRegistLG.user.id;
		// console.log(rightScreenData);
		// this.$nextTick(() => {
		// 	this.InitTabScroll();
		// });
		// this.trendKanban = this.TRENDKANBAN; // 获取默认切换数据code'
		// this.dataTrendKanban.starTime = this.getDate(7); // 默认开始时间时近七日
		// this.dataTrendKanban.endTime = this.getDate(0); // 默认结束时间时今天
		// console.log(this.line.legend.data, this.line.series, '展示数据横线text');
		// this.getDataTrendKanBan();
		// this.getDate(1);
		// this.landRegistra();
		this.itemList = this.i18n.itemList;
		_self = this;
		//#ifdef MP-ALIPAY
		uni.getSystemInfo({
			success: function(res) {
				if (res.pixelRatio > 1) {
					//正常这里给2就行，如果pixelRatio=3性能会降低一点
					//_self.pixelRatio =res.pixelRatio;
					_self.pixelRatio = 2;
				}
			}
		});
		//#endif
		this.cWidth = uni.upx2px(750);
		this.cHeight = uni.upx2px(500);
		this.getServerData();
	},
	mounted() {},
	methods: {
		...mapMutations({
			setTrendKan: 'setTrendKan',
			setLoadingShow: 'setLoadingShow',
			setLoadingText: 'setLoadingText'
		}),
		// 选择时间
		timeChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.i18n.screenData.map((items, index) => {
				if (String(index) === String(e.target.value)) {
					console.log(items, '时间选择');
					if (items.code !== '001') { // 非自定义时间
					  this.isCustomTime = false;
					  this.trendKanBanText.kanBanText = items.text; // 页面展示时间
					  this.dataTrendKanban.starTime = this.getDate(items.code); // 重置参数中的开始时间
					  this.dataTrendKanban.endTime = this.getDate(0); // 默认结束时间时今天
					  // this.$store.commit('setTrendKan', this.trendKanban); // 更新vuex
					  // this.getDataTrendKanBan();
					} else {
					  console.log('触发自定义时间');
					  this.isCustomTime = true;
					}
				}
			});
		},
		// 左侧选择
		leftScreenDataChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.i18n.leftScreenData.map((items, index) => {
				if (String(index) === String(e.target.value)) {
					console.log(items, '左侧选择数据');
					this.trendKanBanText.trendLeftText = items.text; // 左侧选额text
					this.trendKanBanText.trendLeft = items.code; // 左侧选额code
					this.LineA.series[0].name = items.text; // 重置参数中的左侧按钮
					console.log(this.LineA, '跟新后数据');
					this.updateUcharts(this.LineA);
				}
			});
		},
		// 右侧选择
		rightScreenDataChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.i18n.rightScreenData.map((items, index) => {
				if (String(index) === String(e.target.value)) {
					console.log(items, '右侧选择数据');
					this.trendKanBanText.trendRightText = items.text; // 右侧选额text
					this.trendKanBanText.trendRight = items.code; // 右侧选额code
					this.LineA.series[1].name = items.text; // 重置参数中的左侧按钮
					this.updateUcharts(this.LineA);
				}
			});
		},
		getServerData() {
			let LineA = { categories: [], series: [] };
			//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
			LineA.categories = this.LineA.categories;
			LineA.series = this.LineA.series;
			_self.textarea = JSON.stringify(this.LineA);
			_self.showLineA('canvasLineA', LineA);
		},
		showLineA(canvasId, chartData) {
			canvaLineA = new uCharts({
				$this: _self,
				canvasId: canvasId,
				type: 'line',
				colors: ['#FF4D6A', '#02C2A2'],
				fontSize: 11,
				padding: [15, 15, 0, 15],
				legend: {
					// 	图例设置
					position: 'top', // 展示再顶部
					show: true,
					padding: 5,
					lineHeight: 11,
					margin: 5
				},
				dataLabel: true,
				dataPointShape: true,
				dataPointShapeType: 'hollow',
				background: '#FFFFFF',
				pixelRatio: _self.pixelRatio,
				categories: chartData.categories,
				series: chartData.series,
				animation: false,
				enableScroll: true, //开启图表拖拽功能
				xAxis: {
					disableGrid: true,
					type: 'grid',
					gridColor: '#02C2A2',
					fontSize: 12,
					gridType: 'solid', // x轴网格为实线
					itemCount: 4,
					scrollShow: false, // 不显示滚动条
					scrollAlign: 'left'
				},
				yAxis: {
					disabled: true, // 不绘制y轴
					disableGrid: true // 不绘y轴网格
				},
				width: _self.cWidth * _self.pixelRatio,
				height: _self.cHeight * _self.pixelRatio,
				extra: {
					line: {
						type: 'curve'
					}
				}
			});
		},
		touchLineA(e) {
			canvaLineA.scrollStart(e);
		},
		moveLineA(e) {
			canvaLineA.scroll(e);
		},
		touchEndLineA(e) {
			canvaLineA.scrollEnd(e);
			//下面是toolTip事件，如果滚动后不需要显示，可不填写
			canvaLineA.touchLegend(e);
			canvaLineA.showToolTip(e, {
				format: function(item, category) {
					return category + ' ' + item.name + ':' + item.data;
				}
			});
		},
		changeData() {
			if (isJSON(_self.textarea)) {
				let newdata = JSON.parse(_self.textarea);
				canvaLineA.updateData({
					series: newdata.series,
					categories: newdata.categories,
					scrollPosition: 'right',
					animation: false
				});
			} else {
				uni.showToast({
					title: '数据格式错误'
				});
			}
		},
		// 跟新ucharts
		updateUcharts (e) {
			let newdata = e;
			console.log(newdata, '需要跟新的新数据uchart')
			canvaLineA.updateData({
				series: newdata.series,
				categories: newdata.categories
			});
		},
		// getDate(e) {
		// 	let day = new Date();
		// 	day.setTime(day.getTime() - e * 24 * 60 * 60 * 1000);
		// 	let getMonth = '';
		// 	if (Number(day.getMonth() + 1) < 10) {
		// 		getMonth = '0' + String(day.getMonth() + 1);
		// 	} else {
		// 		getMonth = String(day.getMonth() + 1);
		// 	}
		// 	let getDate = '';
		// 	if (Number(day.getDate()) < 10) {
		// 		getDate = '0' + String(day.getDate());
		// 	} else {
		// 		getDate = String(day.getDate());
		// 	}
		// 	return day.getFullYear() + '-' + getMonth + '-' + getDate;
		// },
		resetKanBanData(e) {
			console.log('重置看板数据');
			this.itemList[0].num = e.sumMoney;
			this.itemList[1].num = e.clikeCount;
			this.itemList[2].num = e.clikeCountRate;
			this.itemList[3].num = e.countInfo;
			this.itemList[4].num = e.converCount;
			this.itemList[5].num = e.converCountRate;
			this.itemList[6].num = e.submitCount;
			this.itemList[7].num = e.telCount;
			this.itemList[8].num = e.followCount;
			this.itemList[9].num = e.clikeCustCount;
			this.itemList[10].num = e.scaleMoney;
		},
		// 折线图
		getLine(e) {
			console.log(e, '折线数据');
			this.line.series[0].data = {};
			this.line.series[1].data = {};
			this.line.xAxis.data = e.dates;
			// console.log(content, '--------------------折线图----------------')
			this.line.series[0].data = e.values1;
			this.line.series[1].data = e.values0;
		},
		screenDataPopup(e) {
			// 切换数据日期
			if (e === 0) {
				this.dataPopup = true;
			} else if (e === 1) {
				this.leftScreenPopup = true;
			} else if (e === 2) {
				this.rightScreenPopup = true;
			}
		},
		confirmScreen() {
			// 数据看板确定
			console.log('1');
			if (this.trendKanban.kanBanTime !== '001') {
				// 非自定义时间
				this.isCustomTime = false;
				this.dataPopup = false;
				this.trendKanBanText = this.trendKanban; // 页面跟新，选项
				this.$store.commit('setTrendKan', this.trendKanban); // 更新vuex
				this.dataTrendKanban.starTime = this.getDate(this.trendKanban.kanBanTime); // 重置参数中的开始时间
				this.dataTrendKanban.endTime = this.getDate(0); // 默认结束时间时今天
				this.getDataTrendKanBan();
			} else {
				console.log('触发自定义时间');
				this.isCustomTime = true;
				this.dataPopup = false;
				Toast({
					message: '请输入起始时间',
					duration: 2000
				});
				this.$refs.birthPicker.open();
			}
		},
		// 起始时间
		confirmBth() {
			if (!this.dataTime.starTime) {
				this.dataTime.starTime = '2018-01-01';
			}
			let qiTime = new Date(this.GMTToStr(this.dataTime.starTime).replace(/-/g, '/'));
			let jeTime = new Date(this.getDate(0).replace(/-/g, '/'));
			if (qiTime >= jeTime) {
				Toast('起始时间应小于今天');
				this.$refs.birthPicker.open();
				return;
			}
			this.dataTrendKanban.starTime = this.GMTToStr(this.dataTime.starTime);
			Toast({
				message: '请输入结束时间',
				duration: 2000
			});
			this.$refs.birthPicker2.open();
		},
		// 结束时间
		confirmBth2() {
			if (!this.dataTime.endTime) {
				this.dataTime.endTime = '2018-01-01';
			}
			let qiTime = new Date(this.dataTrendKanban.starTime.replace(/-/g, '/'));
			let jeTime = new Date(this.GMTToStr(this.dataTime.endTime).replace(/-/g, '/'));
			if (jeTime <= qiTime) {
				Toast('结束时间应大于起始时间');
				this.$refs.birthPicker2.open();
				return;
			}
			this.dataTrendKanban.endTime = this.GMTToStr(this.dataTime.endTime);
			this.getDataTrendKanBan();
		},
		GMTToStr(time) {
			var date = new Date(time);
			var monthNum = date.getMonth() + 1;
			// this.toast(monthNum.toString().length);
			if (monthNum.toString().length === 1) {
				monthNum = '0' + monthNum;
			}
			var dateNum = date.getDate();
			if (dateNum.toString().length === 1) {
				dateNum = '0' + dateNum;
			}
			var Str = date.getFullYear() + '-' + monthNum + '-' + dateNum;
			return Str;
		},
		confirmLeftScreen() {
			// left数据趋势确定
			console.log('2');
			this.leftScreenPopup = false;
			this.trendKanBanText = this.trendKanban; // 页面跟新，选项
			this.$store.commit('setTrendKan', this.trendKanban); // 更新vuex
			this.dataTrend.lineType0 = this.trendKanban.trendLeft; // 重置参数中的左侧按钮
			this.line.legend.data[0] = this.trendKanban.trendLeftText; // 趋势图展示标注文字
			this.line.series[1].name = this.trendKanban.trendLeftText; // 趋势图展示标注文字
			this.getDataTrendKanBan();
		},
		confirmRightScreen() {
			// right数据趋势确定
			console.log('3');
			this.rightScreenPopup = false;
			this.trendKanBanText = this.trendKanban; // 页面跟新，选项
			this.$store.commit('setTrendKan', this.trendKanban); // 更新vuex
			this.dataTrend.lineType1 = this.trendKanban.trendRight; // 重置参数中的右侧按钮
			console.log(this.line.legend.data, this.line.series, '展示数据横线text');
			this.line.legend.data[1] = this.trendKanban.trendRightText; // 趋势图展示标注文字
			this.line.series[0].name = this.trendKanban.trendRightText; // 趋势图展示标注文字
			this.getDataTrendKanBan();
		},
		getDataTrendKanBan() {
			console.log('获取推广项目看板数据');
			this.$store.commit('setLoadingShow', true); // 更新vuex loading
			let params = this.dataTrendKanban;
			axios
				.post(this.api2 + '/rest-rp/putIn/dataInfo', params)
				.then(response => {
					// 获取数据
					console.log(response.data, '看板数据');
					let kanBanData = response.data;
					this.resetKanBanData(kanBanData); // 重置看板数据
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
			params.lineType1 = this.dataTrend.lineType1; //
			axios
				.post(this.api2 + '/rest-rp/putIn/dataInfoLineList', params)
				.then(response => {
					// 获取数据
					this.$store.commit('setLoadingShow', false); // 更新vuex loading
					console.log('数据趋势数据');
					let trendData = response.data.content;
					this.getLine(trendData); // 重置趋势数据
				})
				.catch(error => {
					this.$store.commit('setLoadingShow', false); // 更新vuex loading
					Toast('网络繁忙，请稍后');
					console.log(error, '网络繁忙，请稍后');
				});
		},
		onNationChange(picker, values) {
			console.log(values);
		},
		onValuesChangeKanBan(picker, values) {
			// 数据看板
			console.log(values);
			this.trendKanban.kanBanTime = values[0].code;
			this.trendKanban.kanBanText = values[0].text;
			console.log(this.trendKanban, '看板');
		},
		onValuesChangeTrendLeft(picker, values) {
			console.log(values);
			this.trendKanban.trendLeft = values[0].code;
			this.trendKanban.trendLeftText = values[0].text;
			console.log(this.trendKanban, '趋势left');
		},
		onValuesChangeTrendRight(picker, values) {
			console.log(values);
			this.trendKanban.trendRight = values[0].code;
			this.trendKanban.trendRightText = values[0].text;
			console.log(this.trendKanban, '趋势right');
		},
		InitTabScroll() {
			this.$nextTick(() => {
				if (!this.scroll) {
					this.scroll = new BScroll(this.$refs.tab, {
						startX: 0,
						click: true,
						scrollX: true,
						scrollY: false,
						eventPassthrough: 'vertical'
					});
				} else {
					this.scroll.refresh();
				}
			});
		}
	}
};
</script>

<style>
	uni-picker {
	    display: inline-block !important;
	}
.line-box {
	position: relative;
	width: 100%;
	background: #fff;
	margin-bottom: 2vw;
	padding-bottom: 4vw;
}
/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
.qiun-charts {
	width: 750upx;
	height: 500upx;
	background-color: #ffffff;
}

.charts {
	width: 750upx;
	height: 500upx;
	background-color: #ffffff;
}
.scroll-view_H {
	white-space: nowrap;
	width: 300vw;
	height: 10vw;
}

.scroll-view-item {
	height: 300upx;
	line-height: 300upx;
	text-align: center;
	font-size: 36upx;
}

.scroll-view-item_H {
	display: inline-block;
	width: 100%;
	height: 300upx;
	line-height: 300upx;
	text-align: center;
	font-size: 36upx;
}
.content {
	position: relative;
	width: 100vw;
	margin-top: 2vw;
}
.data-box {
	position: relative;
}
.kanban-box {
	position: relative;
	padding: 3vw;
	margin: auto;
	padding-top: 2vw;
	margin-bottom: 2vw;
	background: #fff;
}
.title-box {
	position: relative;
	width: 100%;
}
.title {
	position: relative;
}
.title > p {
	position: relative;
	width: 100%;
	font-family: PingFang-SC-Bold;
	font-size: 4.26vw;
	color: #2e2e30;
	line-height: 6vw;
}
.screen-date {
	position: relative;
	width: 70%;
	float: right;
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
.screen-item2 {
	color: #ff4d6a;
	text-decoration: underline;
}
.screen-item1 {
	color: #02c2a2;
	text-decoration: underline;
}
.vs {
	color: #000 !important;
}
.right-arrow {
	position: relative;
	width: 2vw;
	height: 2vw;
}
.tongji-box {
	position: relative;
	width: 100%;
	overflow: hidden;
	padding: 3vw 5px;
}
.item-tj {
	width: 100vw;
	line-height: 2rem;
	display: inline-block;
	overflow: auto;
}
.tongji-item {
	position: relative;
	width: 25vw;
}
.tongji-item {
	min-width: 25vw !important;
}
.items-YY {
	position: relative;
	width: 80%;
}
.tj-num {
	font-family: PingFangSC-Medium;
	font-size: 4.26vw;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 5vw;
}
.tj-text {
	position: relative;
	width: 100%;
	ont-family: PingFangSC-Regular;
	font-size: 3.2vw;
	color: #9b9b9b;
	line-height: 6vw;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.trend {
	position: relative;
	width: 100%;
	padding: 2vw 4vw;
	background: #fff;
	margin-bottom: 1.5vw;
}
.trend > view {
	position: relative;
	width: 100%;
	margin-top: 2vw;
}
.echartLine {
	height: 300px;
}
.echartTab span.on {
	background: #02c2a2;
	color: #fff;
}

.echartTab span {
	height: 24px;
	line-height: 24px;
	width: 33.33333333%;
	border-radius: 34px;
}
.echartTab {
	height: 24px;
	background: #d4fdf7;
	border-radius: 34px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	text-align: center;
	font-family: PingFangSC-Medium;
	font-size: 12px;
	color: #2e2e30;
	justify-content: space-around;
	margin: 15px;
}
.rightArrow {
	position: relative;
	width: 2.5vw;
	height: 2.5vw;
}
.screenBtn {
	position: absolute;
	right: 0;
	width: 11vw;
	height: 5vw;
	margin-top: -5vw;
	opacity: 0;
}
.leftBTN {
	left: 1.5vw;
}
.rightBTN {
	right: -1.5vw;
}
.screenBtn1 {
	position: absolute;
	width: 12vw;
	height: 6vw;
	/* margin-top: -5vw; */
	opacity: 0;
}
picker {
	display: inline-block !important;
}
</style>
