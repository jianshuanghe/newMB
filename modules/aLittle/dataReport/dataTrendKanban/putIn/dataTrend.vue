<template>
	<view class="content-trend">
		<view class="data-box">
			<div class="time-box">
				<div class="time-items">
					<view class="time-items-box">
						<view class="left RTI-box" :class="items.code === '001' ? 'RTI-boxIte' : ''" @tap="clikeTimeTab(items.code)" v-for="(items, index) in tabList" :key='index'>
							<view :class="clickItemsIndex === items.code ? 'RTI-box-top active-tapRTI' : 'RTI-box-top'">{{items.text}}</view>
						</view>
						<view class="clear"></view>
					</view>
				</div>
			</div>
			<div class="line"></div>
			<view class="kanban-box">
				<view class="tongji-box">
					<view class="item-tj">
						<scroll-view class="scroll-view_H" scroll-x="true">
							<view class="tongji-item left" v-for="(item, index) in i18n.itemList2" :key="index">
								<view class="items-YY">
									<p class="tj-num">{{ item.code }}</p>
									<p class="tj-text">{{ item.text }}</p>
								</view>
								<view class="line-YY" v-if="index !== itemList2.length - 1"></view>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
			<div class="line"></div>
			<div class="line-box">
				<view class="qiun-columns">
					<div class="trend">
						<div class="title-box">
							<!-- <div class="title left"><p class="">{{i18n.trend_title}}</p></div> -->
							<div class="screen-date Middle">
								<p class="vs">
									<picker @change="leftScreenDataChange" :value="0" :range="i18n.Generaldatachart" range-key="text">
										<span class="screen-item1">{{trendKanBanText.trendLeftText}}</span>
									</picker>
									VS
									<picker @change="rightScreenDataChange" :value="0" :range="i18n.Generaldatachart" range-key="text">
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
		<customTime v-if="GET_ALITTLE.customTime2.show" v-on:stomTime="stomTime"></customTime>
	</view>
</template>

<script>
// import { screenData, leftScreenData, rightScreenData } from '@/static/mbcJs/code.js';
import uCharts from '@/components/common/u-charts/u-charts.js';
import { isJSON } from '@/common/checker.js';
var _self;
var canvaLineA = null;
import rightArrow from '@/static/mbcImg/home/extendManageList/rightArrow.png';
import { mapMutations, mapGetters } from 'vuex';
import customTime from '../liuLiang/customTime';
export default {
	components: {
		customTime
	},
	data() {
		return {
			clickItemsIndex: 7 ,// 默认展示综合
			tabList: [
				{
				  code: 1,
				  text: '昨天'
				}, {
				  code: 7,
				  text: '近七日'
				}, {
				  code: 30,
				  text: '近30日'
				}, {
				  code: '001',
				  text: '自定义时间'
				}
			],
			trendKanBanText: {
				// 数据看板数据展示text
				kanBanText: '近七日',
				trendLeftText: '总消耗',
				trendRightText: '展示数',
				kanBanTime: 7, // 数据看板code
				trendLeft: '0', // 数据趋势left
				trendRight: '1' // 数据趋势right
			},
			customTime2: {
				// 自定义时间
				show: false, // 默认不显示
				selectTime: false // 默认没有选择时间
			},
			trendKanban: {
				// 数据看板和趋势切换获取的code And text
				kanBanText: '近七日',
				trendLeftText: '点击数',
				trendRightText: '总消耗',
				kanBanTime: 7, // 数据看板code
				trendLeft: '0', // 数据趋势left
				trendRight: '1' // 数据趋势right
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
			rightArrow: rightArrow,
			itemList2:[],
			LineA: {
				categories: ['2019-09-17', '2019-09-18', '2019-09-19', '2019-09-20', '2019-09-21'],
				series: [
					// 数据列表配置项
					{
						name: '总消耗',
						legendShape: 'circle',
						data: [23, 10, 30,15,60]
					},
					{
						name: '展示数',
						legendShape: 'circle',
						data: [10, 69,60,20,90]
					}
				]
			},
			msgDataIsNew: [],
			instIds:'',
		};
	},
	computed: {
		i18n () {
		  return this.$t('extendManageList')  
		},
		...mapGetters(['TRENDKANBAN','GET_ALITTLE'])
	},
	watch: {
		GET_ALITTLE: {
			handler(a, b) {
				console.log(a.Putinname); // 侦听项目id参数
				this.instIds=a.Putinname;
				if (a.Putinname !== '') {
					this.Chart(this.Starttiming, this.Closingtime, this.trendKanBanText.trendLeft, this.trendKanBanText.trendRight,this.instIds);
					this.Trenddata(this.dataTrendKanban.starTime, this.dataTrendKanban.endTime,this.instIds);
				}
			},
			deep: true
		}
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
		this.dataTrendKanban.starTime = this.getDate(7); // 默认开始时间时近七日
		this.dataTrendKanban.endTime = this.getDate(0); // 默认结束时间时今天
		// console.log(this.line.legend.data, this.line.series, '展示数据横线text');
		// this.getDataTrendKanBan();
		// this.getDate(1);
		// this.landRegistra();
		this.getDate(1);
		this.Starttiming=this.getDate(7);
		this.Closingtime=this.getDate(0);
		this.Trenddata(this.Starttiming,this.Closingtime,this.instIds);//数据看板 默认是显示昨天
		this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
		this.itemList2 = this.i18n.itemList2;
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
			setLoadingText: 'setLoadingText',
			setCustomTime: 'setCustomTime', // // 自定义时间
		}),
		stomTime:function(stomTime){
			console.log(stomTime[0],stomTime[1]);
			this.Starttiming=stomTime[0];
			this.Closingtime=stomTime[1];
			this.Trenddata(this.Starttiming,this.Closingtime,this.instIds);
			this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)
		},
		clikeTimeTab (e) {
			console.log(e, '切换时间tab');
			if(e===1){
				this.clickItemsIndex = e;
				this.Trenddata(this.getDate(1), this.getDate(1),this.instIds);//数据看板 默认是显示昨天
				this.Starttiming=this.getDate(1);
				this.Closingtime=this.getDate(1);
				this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
			}else if(e==7){
				this.clickItemsIndex = e;
				this.Trenddata(this.getDate(e), this.getDate(0),this.instIds);
				this.Starttiming=this.getDate(e);
				this.Closingtime=this.getDate(0);
				this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
			}else if(e==30){
				this.clickItemsIndex = e;
				this.Trenddata(this.getDate(e), this.getDate(0),this.instIds);
				this.Starttiming=this.getDate(e);
				this.Closingtime=this.getDate(0);
				this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
			}else if(e==='001'){
				console.log('触发自定义时间');
				this.clickItemsIndex = e;
				this.customTime2.show = true; // 显示默认时间组件
				this.$store.commit('setCustomTime2', this.customTime2); // 更新vuex
			}
		},
		Trenddata(a, b) {
			console.log(a, b);
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					starTime: a,
					endTime: b,
					userId: landRegistLG.user.id
				}; // 请求总数居时 参数为空
				console.log(params);
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/putIn/dataInfo', //接口地址。
					data: params,
					method: 'POST',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						this.timess = response.data;
						this.i18n.itemList2[0].code = this.timess.sumMoney;
						this.i18n.itemList2[1].code = this.timess.scaleMoney;
						this.i18n.itemList2[2].code = this.timess.countInfo;
						this.i18n.itemList2[3].code = this.timess.clikeCount;
						this.i18n.itemList2[4].code = this.timess.clikeCountRate;
						this.i18n.itemList2[5].code = this.timess.converCount;
						this.i18n.itemList2[6].code = this.timess.converCountRate;
						this.i18n.itemList2[7].code = this.timess.submitCount;
						this.i18n.itemList2[8].code = this.timess.telCount;
						this.i18n.itemList2[9].code = this.timess.followCount;
						this.i18n.itemList2[10].code = this.timess.chatCount;
						this.i18n.itemList2[11].code = this.timess.inquCount;
						this.i18n.itemList2[12].code = this.timess.orderCount;
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
		Chart(a,b,c,d,e){//图表数据
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				if(c==undefined&&d==undefined){
					var params = {
						starTime:a,
						endTime:b,
						userId:landRegistLG.user.id,
						lineType0:0,
						lineType1:1,
						instIds:e,
					};
					console.log(3)
				}else if(c==undefined){
					var params = {
						starTime:a,
						endTime:b,
						userId:landRegistLG.user.id,
						lineType0:0,
						lineType1:d,
						instIds:e,
					};
					console.log(1)
				}else if(d==undefined){
					var params = {
						starTime:a,
						endTime:b,
						userId:landRegistLG.user.id,
						lineType0:c,
						lineType1:1,
						instIds:e,
					};
					console.log(2)
				} else if(c==-1){
					var params = {
						starTime:a,
						endTime:b,
						userId:landRegistLG.user.id,
						lineType0:0,
						lineType1:d,
						instIds:e,
					};
				}else if(e.length==0){
					var params = {
						starTime: a,
						endTime: b,
						userId: landRegistLG.user.id,
						lineType0: c,
						lineType1: d,
						instIds:'',
					};
				}else{
					var params = {
						starTime:a,
						endTime:b,
						userId:landRegistLG.user.id,
						lineType0:c,
						lineType1:d,
						instIds:e,
					};
					console.log(4)
				}
				 // 请求总数居时 参数为空
				console.log(params)
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/putIn/dataInfoLineList', //接口地址。
					data: params,
					method: 'POST',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						console.log(response.data);
						// this.LineA.series[0].data=response.data.content.values0;
						let arr=response.data.content.values0;
						let arrs=response.data.content.values1;
						this.LineA.series[0].data=arr;
						this.LineA.series[1].data=arrs;
						this.LineA.categories=response.data.content.dates
						this.getServerData();
					},fail: (error) => {
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
			this.i18n.Generaldatachart.map((items, index) => {
				if (String(index) === String(e.target.value)) {
					console.log(items, '左侧选择数据');
					this.trendKanBanText.trendLeftText = items.text; // 左侧选额text
					this.trendKanBanText.trendLeft = items.code; // 左侧选额code
					this.LineA.series[0].name = items.text; // 重置参数中的左侧按钮
					console.log(this.LineA, '跟新后数据');
					this.updateUcharts(this.LineA);
					if(items.text=='总消耗'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='展示数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='点击数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='点击率'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='转化数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='转化率'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='提交表单数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='拨打电话数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='进入关注我们页面'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='点击自定义oa按钮数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='询价数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='聊天数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='订单数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}
				}
			});
		},
		// 右侧选择
		rightScreenDataChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.i18n.Generaldatachart.map((items, index) => {
				if (String(index) === String(e.target.value)) {
					console.log(items, '右侧选择数据');
					this.trendKanBanText.trendRightText = items.text; // 右侧选额text
					this.trendKanBanText.trendRight = items.code; // 右侧选额code
					this.LineA.series[1].name = items.text; // 重置参数中的左侧按钮
					this.updateUcharts(this.LineA);
					if(items.text=='总消耗'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='展示数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='点击数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='点击率'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='转化数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='转化率'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='提交表单数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='拨打电话数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='进入关注我们页面'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='点击自定义oa按钮数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='询价数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='聊天数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}else if(items.text=='订单数'){
						this.Chart(this.Starttiming,this.Closingtime,this.trendKanBanText.trendLeft,this.trendKanBanText.trendRight,this.instIds)//图表数据
					}
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
				colors: ['#02C2A2', '#FF4D6A'],
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
	.time-items{
		position: relative;
		padding: 3vw;
		margin: auto;
		padding-top: 2vw;
		background: #fff;
	}
	.RTI-box{
		position: relative;
		width: 18%;
	}
	.RTI-boxIte{
		position: relative;
		width: 23% !important;
	}
	.active-tapRTI{
		color: #2E2E30!important;
		font-weight: bold;
		background: #E2E2E2;
		border-radius: 26upx;
	}
	.RTI-box-top{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #9B9B9B;
		line-height: 36upx;
		text-align: center;
	}
	.RTI-box-bot{
		margin-top: 10upx;
		background: #02C2A2;
		border-radius: 100px;
		position: relative;
		width: 40upx;
		height: 4upx;
		margin: auto;
	}
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
	padding: 0vw 3vw 0vw 3vw;
	margin: auto;
	padding-top: 6vw;
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
	/* float: right; */
}
.screen-date > p {
	position: relative;
	width: 100%;
	ont-family: PingFangSC-Regular;
	font-size: 3.2vw;
	color: #9b9b9b;
	text-align: center;
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
}
.item-tj {
	width: 100vw;
	line-height: 2rem;
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
