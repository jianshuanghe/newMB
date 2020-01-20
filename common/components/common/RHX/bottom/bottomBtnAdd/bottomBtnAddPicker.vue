<template>
	<div class="bottomBtnAdd-content">
		<div class="bottomBtnAdd">
			<div class="rPicker-content">
				<div class="rPicker" :style="{height: heightPicker}">
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
		</div>
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
				'heightPicker',
				'type',
			],
			data() {
				return {
					animationData: {}
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
			methods: {
				// 取消
				cancel(){
					console.log('触发取消按钮');
					this.$emit('tap-Cancel');
				},
				// 保存
				preserve() {
					console.log('触发保存按钮');
					this.$emit('tap-Preserve');
				},
			}
		};
	</script>
	
	<style>
		.bottomBtnAdd-content{
			position: relative;
			width: 100%;
		}
		.bottomBtnAdd{
			position: relative;
			width: 100%;
			height: 10vh;
		}
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
			/* box-shadow: 0 -2px 10px 0 rgba(46,46,48,0.20); */
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
			font-size: 26upx;
			color: #9B9B9B;
			letter-spacing: 0;
			line-height: 80upx;
		}
		.title-center{
			position: relative;
			width: 80%;
			text-align: center;
			font-family: PingFangSC-Regular;
			font-size: 26upx;
			color:  #2E2E30;
			letter-spacing: 0;
			line-height: 80upx;
		}
		.title-right{
			position: relative;
			width: 10%;
			text-align: right;
			font-family: PingFangSC-Regular;
			font-size: 26upx;
			color:#02C2A2;
			letter-spacing: 0;
			line-height: 80upx;
		}
		.content-box{
			position: relative;
			/* padding: 0 40upx; */
		}
</style>

