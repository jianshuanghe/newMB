<template>
	<div class="moreSet-content">
		<div class="closeTitle">
			<img :src="close" alt="" class="close" @tap='clickClose'>
			运费及更多设置
		</div>
		<div class="moreSet">
			<div class="moreSet-items">
				<div class="MS-left left">
					<p class="text">报价含税</p>
				</div>
				<div class="MS-right left">
					<div class="right-box">
						<!-- switch切换 -->
						<wSwitch
						class=''
						:num='Number(caiGouList.purcInvo)'
						@switch="iSwitch"
						></wSwitch>
					</div>
				</div>
				<div class="clear"></div>
				<div class="line"></div>
			</div>
			<div class="moreSet-items">
				<div class="MS-left left">
					<p class="text">报价含运费</p>
				</div>
				<div class="MS-right left">
					<div class="right-box">
						<!-- switch切换 -->
						<wSwitch
						class=''
						:num='Number(caiGouList.purcFrei)'
						@switch="iSwitch2"
						></wSwitch>
					</div>
				</div>
				<div class="clear"></div>
				<div class="line"></div>
			</div>
			<div class="moreSet-items">
				<div class="MS-left left">
					<p class="text">报价截止时间</p>
				</div>
				<div class="MS-right left">
					<div class="right-box">
						<div class="rightMH">
							<picker  @change="endDateChange" mode="date" :value="caiGouList.purcEndTime" :start="startDate" fields="day" :end="endDate">
								<div class="right-text left">{{purcEndTime}}</div>
								<div class="right-quick-arrow left"><img :src="lineRightArrow" alt="" class="img" /></div>
								<div class="clear"></div>
							</picker>
						</div>
					</div>
				</div>
				<div class="clear"></div>
				<div class="line"></div>
			</div>
		</div>
		<div class="moreSet">
			<div class="moreSet-items">
				<div class="MS-left left">
					<p class="text">收货日期</p>
				</div>
				<div class="MS-right left">
					<div class="right-box">
						<div class="rightMH">
							<picker  @change="receDateChange" mode="date" :value="caiGouList.purcReceTime" :start="startDate" fields="day" :end="endDate">
								<div class="right-text left">{{caiGouList.purcReceTime === '0-0-0' ? '选填' : purcReceTime}}</div>
								<div class="right-quick-arrow left"><img :src="lineRightArrow" alt="" class="img" /></div>
								<div class="clear"></div>
							</picker>
						</div>
					</div>
				</div>
				<div class="clear"></div>
				<div class="line"></div>
			</div>
		</div>
		<!-- 公司水印区 -->
		<div class="waterMark">
			<div class="textMark">本系统由 @陌拜 提供技术支持</div>
		</div>
		<div class="BIF-bottom">
			<div class="BIF-btn" @click="clickSaveMoreSet"><p class="">保存</p></div>
		</div>
	</div>
</template>

<script>
	import close from '@/static/mbcImg/common/nav/close.png';
	import lineRightArrow from '@/static/mbcImg/common/nav/line-right-arrow.png';
	import wSwitch from '@/components/common/switch/switch.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				close: close,
				lineRightArrow: lineRightArrow,
				quickNav: {
					show: false
				},
				purcEndTime: '3天截止',
				purcReceTime: '选填',
				UserData: {
					headImg: '',
					nickname: '',
					companyName: ''
				},
				caiGouList:{}, // 采购列表数据
			};
		},
		components: {
			wSwitch
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			startDate () {
				return this.getDates('currentDate');
			},
			...mapGetters(['GET_PUBLISH'])
		},
		created () {
			this.caiGouList = this.GET_PUBLISH.publishPurchase.caiGouList;
			console.log(this.caiGouList, 'moreset')
			if (this.caiGouList.purcEndTime !== this.getDate(3, 'later')) {
				this.purcEndTime = this.caiGouList.purcEndTime;
			};
			if (this.caiGouList.purcReceTime) {
				this.purcReceTime = this.caiGouList.purcReceTime;
			}
		},
		watch: {
			GET_PUBLISH: {
				handler(a, b) {
					this.caiGouList = a.publishPurchase.caiGouList;
					this.listData = a.publishPurchase.imgList;
				},
				deep: true
			}
		},
		mounted() {},
		beforeDestroy () {
		},
		methods: {
			...mapMutations({
				setMoreSet: 'setMoreSet'
			}),
			clickClose() {
				this.$store.commit('setMoreSet', false); // 更新setMoreSet
			},
			iSwitch(e) {
				console.log(e, '-----------------------报价含税----------------------');
				this.caiGouList.purcInvo = e;
			},
			iSwitch2(e) {
				console.log(e, '-------------------------报价含运费------------------------');
				this.caiGouList.purcFrei = e;
			},
			getDates(type) {
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
			endDateChange: function(e) {
				console.log('报价截止时间', e.target.value );
				this.caiGouList.purcEndTime = e.target.value;
				if (this.caiGouList.purcEndTime !== this.getDate(3, 'later')) {
					this.purcEndTime = this.caiGouList.purcEndTime;
				}
			},
			receDateChange:function(e) {
				console.log('收货日期', e.target.value );
				this.caiGouList.purcReceTime = e.target.value;
				this.purcReceTime = this.caiGouList.purcReceTime;
			},
			clickSaveMoreSet () {
				console.log('触发保存提交按钮');
				this.$store.commit('setMoreSet', false); // 更新setMoreSet
				this.$store.commit('setCaiGouList', this.caiGouList); // 更新setCaiGouList
			}
		}
	};
</script>

<style>
	.switch-box{
		position: relative;
		width: 160upx;
		height: 60upx;
		margin-top: 30upx;
		background: #EFEFEF;
		border-radius: 4upx;
		float: right;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		letter-spacing: 0;
		line-height: 60upx;
		text-align: center;
	}
	.switch-left{
		position: relative;
		width: 80upx;
		height: 60upx;
		background: #02C2A2;
		border-radius: 4upx;
		color: #FFFFFF;
	}
	.switch-right{
		position: relative;
		width: 80upx;
		color: #9B9B9B;
	}
	.moreSet-content{
		position: fixed;
		width: 100vw;
		height: 100vh;
		background: #f9f9f9;
		top: 0;
		z-index: 998;
	}
	.rightMH{
		position: relative;
		float: right;
	}
	.closeTitle{
		top: 0;
		height: 88upx;
		width: 750upx;
		background: #FFFFFF;
		box-shadow: 0 1px 0 0 #F5F5F5;
		font-family: PingFangSC-Medium;
		font-size: 32upx;
		color: #2E2E30;
		letter-spacing: 0;
		text-align: center;
		line-height: 88upx;
		z-index: 99;
	}
	.close{
		position: absolute;
		top: 28upx;
		width: 32upx;
		height: 32upx;
		left: 30upx;
	}
	.moreSet{
		position: relative;
		width: 100%;
		background: #fff;
		padding:0 3vw;
		margin-top: 2vw;
	}
	.moreSet-items{
		position: relative;
		width: 100%;
	}
	.MS-left{
		position: relative;
		width: 50%;
	}
	.MS-left>p{
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 120upx;
	}
	.MS-right{
		position: relative;
		width: 50%;
	}
	.right-box{
		position: relative;
		float: right;
		width: 100%;
	}
	.right-text{
		position: relative;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		text-align: right;
		line-height: 120upx;
	}
	.right-quick-arrow {
		position: relative;
		width: 9%;
		margin-left: 16upx;
	}
	.right-quick-arrow > img {
		position: relative;
		width: 18upx;
		margin-top: 7vw;
		height: 18upx;
		float: right;
	}
	.BIF-bottom {
		position: fixed;
		width: 100%;
		padding: 1.5vw 4vw 1.5vw 4vw;
		bottom: 0;
		z-index: 105;
		background: #fff;
	}
	.BIF-btn {
		position: relative;
		width: 100%;
		background: #02c2a2;
		border-radius: 2px;
		font-family: PingFangSC-Regular;
		font-size: 3.733vw;
		color: #ffffff;
		text-align: center;
		letter-spacing: 0;
		line-height: 12vw;
	}
	.waterMark{
		position: absolute;
		bottom: 19vw;
		width: 100%;
		background: #F9F9F9;
	}
	.textMark{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #bdbdbd;
		text-align: center;
		line-height: 80upx;
		padding: 10vh 0 0;
	}
	.uni-picker-container .uni-picker-action.uni-picker-action-confirm{
		color: #02c2a2 !important;
	}
</style>
