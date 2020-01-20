<template>
	<div class="changeIcon-content">
		<div class="changeIcon">
			<div class="title">
				更换图标
			</div>
			<div class="icon-box">
				<image class="icomItems left" :src="item.iconSrc" v-for='(item,index) in selIconList' :key='index'></image>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import iconSrc from '@/static/mbcImg/publish/purchase/delete.png';
	export default {
		components: {
		},
		props: [
			'iconSrc',
			'iconWidth',
			'iconHeight',
			'iconTAlign',
			'iconPadding'
			],
		data() {
			return {
				selIconList:[
					iconSrc,
					iconSrc,
					iconSrc,
					iconSrc,
					iconSrc,
					iconSrc,
					iconSrc
				]
			};
		},
		created() {},
		iconSrc: {
			value: {
				handler(a, b) {
					this.imgSrc = a;
				},
				deep: true
			}
		},
		methods: {
			// 点击完成按钮时触发
			onConfirm(e) {
				console.log(e, 'input返回值');
				this.valueText = e.detail.value;
				this.$emit('tap-Input',this.valueText);
				this.inputBGs = '';
				this.inputBorders = '';
				this.inputBStyles = '';
			},
		}
	};
</script>

<style>
	.changeIcon-content{
		position: absolute;
		width: 100vw;
		height: 228upx;
		top: 100%;
		z-index: 100009;
		background: #F9F9F9;
	}
	.changeIcon{
		position: relative;
		width: 100%;
		padding: 40upx 0 40upx 40upx;
	}
	.title{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #9B9B9B;
		letter-spacing: 0;
		line-height: 40upx;
	}
	.icon-box{
		position: relative;
		width: 100%;
	}
	.icomItems{
		position: relative;
		width: 32upx;
		margin-left: 39upx;
		height: 32upx;
	}
</style>
