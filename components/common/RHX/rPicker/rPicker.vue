
<!-- 实例
 <rPicker
 :leftText='leftText' // 左侧文字 取消
 :centerText='centerText' // 中间文字 
 rightText // 右侧文字
 :pickerTop='pickerTop' // 距离顶部高度
 :translateY='translateY' // 打开时动画高度
 :rightColor='rightColor' // 右侧文字 保存
 :type='type' // 类型
 @tap-PickerCancel='tapPickerCancel' // 取消方法
 @tap-PickerPreserve='tapPickerPreserve' // 确定方法
 >
 </rPicker>
 -->
<template>
	<div class="piacker-box">
		<!-- 遮罩层 -->
		<div class="mask" @tap='cancel' @touchmove.stop=""></div>
		<!-- 内容区 -->
		<!-- 以下是H5模块 -->
		<!--  #ifdef H5 -->
			<view :style="{top: translateY + 'px'}" class="ani-box" >
				<div class="rPicker-content" :style="{top: pickerTop}">
					<div class="rPicker">
						<!-- 标题区 -->
						<div class="title-box">
							<div class="title-left left" @tap='cancel' v-if='leftText'>{{leftText}}</div>
							<div class="title-center left">{{centerText}}</div>
							<div class="title-right right" :style="{color:rightColor}" @tap='preserve' v-if='rightText'>{{rightText}}</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						<!-- 内容区 -->
						<div class="content-box">
							<slot></slot>
						</div>
					</div>
				</div>
			</view>
		<!--  #endif -->
		<!-- 以下是小程序模块 -->
		<!--  #ifdef   MP-WEIXIN || MP-TOUTIAO || MP-BAIDU || MP-ALIPAY -->
			<view :style="{top: translateY + 'px'}" class="ani-box" >
				<div class="rPicker-content" :style="{top: pickerTop}">
					<div class="rPicker">
						<!-- 标题区 -->
						<div class="title-box">
							<div class="title-left left" @tap='cancel' v-if='leftText'>{{leftText}}</div>
							<div class="title-center left">{{centerText}}</div>
							<div class="title-right right" :style="{color:rightColor}" @tap='preserve' v-if='rightText'>{{rightText}}</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						<!-- 内容区 -->
						<div class="content-box">
							<slot></slot>
						</div>
					</div>
				</div>
			</view>
		<!--  #endif -->
		
	</div>
</template>

<script>
	export default {
		components: {
		},
		props: [
			'pickerTop',
			'translateY',
			'leftText',
			'centerText',
			'rightText',
			'rightColor',
			'type',
		],
		data() {
			return {
				// animationDataStyle: { // H5动画
				// 	transform: translateY('-80vh')
				// },
				animationData: { // 小程序动画
					
				} 
			};
		},
		created() {
			var animation = uni.createAnimation({
				duration: 300,
				timingFunction: 'ease',
			})
			let y = 0 - Number(this.translateY);
			console.log(y, Number(this.translateY), '---------------------y--------------------');
			this.animation = animation
			this.animation.translateY(0 - Number(this.translateY)).step()
			this.animationData = this.animation.export()
		},
		mounted () {
			// this.animationDataStyle.transform = 'translateY(-80vh)'
		},
		methods: {
			// 取消
			cancel(){
				console.log('触发取消按钮');
				this.$emit('tap-PickerCancel');
			},
			// 保存
			preserve() {
				console.log('触发保存按钮');
				this.$emit('tap-PickerPreserve');
			},
		}
	};
</script>

<style>
	.piacker-box{
		position: fixed;
		width: 100vw;
		z-index: 99999999;
		height: 100vh;
		top: 0;
		left: 0;
	}
	.mask{
		width: 100%;
		height: 100%;
		position: absolute;
		background: rgba(66,65,65,0.29);
		z-index: 1000000000;
	}
	.ani-box{
		position: absolute;
		width: 100vw;
		z-index: 1000000001;
		bottom: 0;
		background: #FFFFFF;
		box-shadow: 0 -2px 10px 0 rgba(46,46,48,0.20);
		border-radius: 20px;
		border-radius: 0px;
		transition: all .3s ease;
	}
	.rPicker-content{
		position: absolute;
		width: 100vw;
	}
	.rPicker{
		position: relative;
		width: 100%;
		background: #fff;
		background: #FFFFFF;
		box-shadow: 0 -2px 10px 0 rgba(46,46,48,0.20);
		border-radius: 20px;
		border-radius: 0px;
	}
	.title-box{
		position: relative;
		width: 100%;
		padding: 0 40upx;
	}
	.title-left{
		position: relative;
		width: 10%;
		text-align: left;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #9B9B9B;
		letter-spacing: 0;
		line-height: 112upx;
	}
	.title-center{
		position: relative;
		width: 80%;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color:  #2E2E30;
		letter-spacing: 0;
		line-height: 112upx;
	}
	.title-right{
		position: relative;
		width: 10%;
		text-align: right;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color:#02C2A2;
		letter-spacing: 0;
		line-height: 112upx;
	}
	.content-box{
		position: relative;
		/* padding: 0 40upx; */
	}
</style>
