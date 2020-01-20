<template>
	<div class="customTime-content">
		<div class="customTime">
			<div class="title">
				<div class="closeBox" @tap='clickClose()'>
					<img :src="close" alt="" class="img">
				</div>
				<p class="text">{{i18n.customTime.title}}</p>
			</div>
			<div class="time-box">
				<div class="time-picker-box">
					<div class="time-left">
						<picker  @change="startDateChange" mode="date" :value="date" :start="startDate" fields="day" :end="endDate">
							<div :class="dataTime.starTime ? 'time-bordered time-border' : 'time-border'" @tap="clickPicker()">
								<p class="itme">{{dataTime.starTime || i18n.customTime.start}}</p>
							</div>
						</picker>
					</div>
					{{i18n.customTime.zhi}}
					<div class="time-right">
						<picker  @change="endDateChange" mode="date" :value="date" :start="startDate" fields="day" :end="endDate">
							<div :class="dataTime.endTime ? 'time-bordered time-border' : 'time-border'" @tap="clickPicker()">
								<p class="itme">{{dataTime.endTime || i18n.customTime.end}}</p>
							</div>
						</picker>
					</div>
				</div>
				<div class="time-sub" @tap='clickKeep()'>
					<p class="btn">{{i18n.customTime.submit}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import close from '@/static/mbcImg/home/extendManageList/publishClose.png';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		components: {},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				close: close,
				customTime2:{ // 自定义时间
					show: false, // 默认不显示
					selectTime: false // 默认没有选择时间
				},
				date: currentDate,
				trendKanBanText: {
					// 数据看板数据展示text
					kanBanText: '近七日',
					trendLeftText: '点击数',
					trendRightText: '总消耗',
					kanBanTime: 7, // 数据看板code
					trendLeft: '1', // 数据趋势left
					trendRight: '3' // 数据趋势right
				},
				dataTime: {
					starTime: null,
					endTime: null
				}
			};
		},
		computed: {
			i18n () {
			  return this.$t('extendManageList')  
			},
			startDate () {
				return this.getDate('start');
			},
			endDate () {
				return this.getDate('currentDate');
			},
			...mapGetters(['GET_ALITTLE'])
		},
		created() {
		},
		mounted() {},
		methods: {
			...mapMutations({
				setCustomTime2: 'setCustomTime2' // // 自定义时间
			}),
			clickClose() {
				console.log('触发关闭按钮');
				this.customTime2.show = false; // 显示默认时间组件
				this.$store.commit('setCustomTime2', this.customTime2); // 更新vuex
			},
			clickPicker() {
				console.log('3')
			},
			// 选择时间
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
			
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			getDateJsh(e) {
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
			startDateChange: function(e) {
				console.log('开始时间', e.target.value );
				let starTime = e.target.value;
				let qiTime = new Date(starTime.replace(/-/g, '/'));
				let jeTime = new Date(this.getDateJsh(0).replace(/-/g, '/'));
				if (qiTime >= jeTime) {
					uni.showToast({
						title: '起始时间应小于今天',
						icon: 'none',
						duration: 800
					});
					return;
				}
				this.dataTime.starTime = starTime;
				uni.showToast({
					title: '请输入结束时间',
					icon: 'none',
					duration: 800
				});
			},
			endDateChange: function(e) {
				console.log('结束时间', e.target.value );
				if(!this.dataTime.starTime){
					uni.showToast({
						title: '请先选择开始时间',
						icon: 'none',
						duration: 800
					});
					return false;
				};
				let endTime = e.target.value;
				let qiTime = new Date(this.dataTime.starTime.replace(/-/g, '/'));
				let jeTime = new Date(endTime.replace(/-/g, '/'));
				if (jeTime <= qiTime) {
					uni.showToast({
						title: '结束时间应大于起始时间',
						icon: 'none',
						duration: 800
					});
					return;
				};
				this.dataTime.endTime = endTime;
			},
			clickKeep () {
				console.log('触发保存按钮');
				if(!this.dataTime.starTime){
					uni.showToast({
						title: '请选择开始时间',
						icon: 'none',
						duration: 800
					});
					return false;
				}else if(!this.dataTime.endTime){
					uni.showToast({
						title: '请选择结束时间',
						icon: 'none',
						duration: 800
					});
					return false;
				}else{
					this.customTime2.show = false; // 显示默认时间组件
					this.$store.commit('setCustomTime2', this.customTime2); 
					this.$emit('stomTime',[this.dataTime.starTime,this.dataTime.endTime])
				}
			}
		}
	};
	</script>
</script>

<style>
	.customTime-content{
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		z-index: 99;
		background: #fff;
		margin-top: 88upx;
	}
	.customTime{
		position: relative;
		width: 100%;
		padding: 4vw;
		height: 100vh;
	}
	.title{
		position: relative;
		width: 100%;
		top:2vw;
	}
	.closeBox{
		position: absolute;
		width: 8vw;
		height: 8vw;
		z-index: 101;
	}
	.closeBox>img{
		position: relative;
		width: 3vw;
		height: 3vw;
	}
	.title>p{
		font-family: PingFangSC-Regular;
		font-size: 36upx;
		color: #2E2E30;
		letter-spacing: 0;
		text-align: center;
		line-height: 36upx;
	}
	.time-box{
		position: relative;
		width: 100%;
		z-index: 100;
	}
	.time-picker-box{
		position: relative;
		width: 100%;
		top: 13vw;
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 30upx;
		color: #2E2E30;
		text-align: center;
		line-height: 68upx;
	}
	.time-left{
		position: absolute;
		top: 0;
		left: 0;
	}
	/* .dao{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 30upx;
		color: #2E2E30;
		text-align: center;
		line-height: 68upx;
	} */
	.time-right{
		position: absolute;
		top: 0;
		right: 0;
	}
	.time-border{
		position: relative;
		width: 296upx;
		height: 68upx;
		background: #FFFFFF;
		border: 1px solid #D2D2D2;
		border-radius: 4upx;
	}
	.itme{
		font-family: PingFangSC-Regular;
		font-size: 30upx;
		color: #9B9B9B;
		text-align: center;
		line-height: 64upx;
	}
	.time-bordered{
		border: 1px solid #02C2A2;
	}
	.time-bordered>p{
		color: #02C2A2 !important;
	}
	.time-sub{
		position: relative;
		width: 100%;
		background: #02C2A2;
		top: 30vw;
	}
	.time-sub>p{
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		line-height: 90upx;
	}
</style>
