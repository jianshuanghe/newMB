<template>
	<div class="skipMask-content">
		<div class="mask" @tap='clickMask'></div>
		<div class="skipMask">
			<div class="top">
				<image class="skipMaskBg" :src='skipMaskBg'></image>
				<div class="topBox">
					<div class="textOne">完善说明书的关键词</div>
					<div class="textTwo">有利于提高说明书的曝光率哦～</div>
				</div>
			</div>
			<div class="bottom">
				<div class="noTips" @tap='clickNoTips'>
					<image class="noTipsImg" :src='noTipsImg'></image>
					<text class="text">不再提示</text>
				</div>
				<div class="continueBtn"  @tap='clickContinue'>继续完善</div>
				<div class="insistSkip" @tap='clickInsistSkip'>坚持跳过</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selectEd:  this.Static+'publish/createBusiness/selectEd.png', // 勾选圆框 黑色
				select:  this.Static+'publish/createBusiness/select.png', // 未勾选圆框 白色
				noTipsImg:  this.Static+'publish/createBusiness/select.png',
				skipMaskBg:  this.Static+'publish/createBusiness/skipMaskBg.png',
				dateLists: this.dateListM
			};
		},
		props: [
			'dateListM'
		],
		// watch: {
		// 	dateListM: {
		// 		handler(a, b) {
		// 			console.log(a, b, '--------------------------------------监听dateListM变化---------------------------------------');
		// 			this.dateLists = a;
		// 		},
		// 		deep: true
		// 	}
		// },
		mounted(){
			console.log(this.dateList, '----------dateList-------------')
		},
		methods: {
			clickMask() {
				this.$emit('tap-SkipMask', [false, null]);
			},
			clickNoTips() {
				if (this.noTipsImg === this.select) {
					this.noTipsImg = this.selectEd;
					uni.setStorageSync('templateFinishSkip', true);
				} else if (this.noTipsImg === this.selectEd) {
					this.noTipsImg = this.select;
					uni.removeStorageSync('templateFinishSkip');
				}
			},
			clickContinue() {
				this.$emit('tap-SkipMask', [false, null]);
			},
			clickInsistSkip () {
				this.$emit('tap-SkipMask', [true, 1]);
			}
		}
	};
</script>

<style>
	.skipMask-content{
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		/* z-index: 999999; */
	}
	.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		background: rgba(0, 0, 0, 0.3);
	}
	.skipMask{
		width: 540upx;
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, 0%);
		z-index: 103;
		background: #FFFFFF;
		border-radius: 10px;
		border-radius: 10px;
	}
	.top{
		position: relative;
		width: 100%;
	}
	.skipMaskBg{
		position: relative;
		width: 540upx;
		height: 280upx;
	}
	.topBox{
		position: absolute;
		top: 0;
		left: 0;
		width: 540upx;
		height: 280upx;
		padding: 100upx 0;
	}
	.textOne{
		font-family: PingFangSC-Semibold;
		font-size: 40upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 40upx;
	}
	.textTwo{
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 40upx;
	}
	.bottom{
		position: relative;
		width: 540upx;
		height: 288upx;
	}
	.noTips{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #9B9B9B;
		text-align: center;
		line-height: 60upx;
	}
	.noTipsImg{
		position: relative;
		width: 24upx;
		height: 24upx;
		margin-right: 2vw;
	}
	.text{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #9B9B9B;
		text-align: center;
		line-height: 60upx;
	}
	.continueBtn{
		background: #02C2A2;
		box-shadow: 0 0 10px 0 rgba(2,194,162,0.40);
		border-radius: 25px;
		border-radius: 25px;
		position: relative;
		width: 460upx;
		height: 100upx;
		font-family: PingFangSC-Semibold;
		font-size: 28upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 100upx;
		margin: auto;
	}
	.insistSkip{
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #02C2A2;
		text-align: center;
		line-height: 120upx;
	}
</style>
