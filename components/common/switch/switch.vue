<template>
	<!-- switch切换 -->
	<div class="switch-box">
		<div class="left" :class="index === 1 ? 'switch-left' : 'switch-right'" @click='clickSwitch(1)'>
			是
		</div>
		<div class="left" :class="index === 0 ? 'switch-left' : 'switch-right'" @click='clickSwitch(0)'>
			否
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				index: 1 // 点击数据
			}
		},
		props: ['num'],
		created:function(){
			this.index = Number(this.num);
		},
		computed:{
		},
		methods:{
			clickSwitch(e) {
				this.index = e
				this.$emit('switch', this.index)
			}
		}
	}
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
</style>
