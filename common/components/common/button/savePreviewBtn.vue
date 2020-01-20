<!-- 实例
 <savePreviewBtn
 backGround= '#FFFFFF' // 组件背景
 borderStyle='1px solid #2E2E30' // 组件边框样式
 textColor='#2E2E30;' // 组件文字颜色
 lineY='0' // 是否展示右侧数显
 name='完成' // 组件具体展示的文字
 padding='4upx' // 组件填充
 fontSize='28upx' // 组件文字大小
 lineHeight='50upx' // 组件字体行高
 width='120upx' // 组件宽度
 marginImg= '10upx' // 组件图标icon的margin
 :imgSrc='manageSuccess'></savePreviewBtn>
 -->
<template>
	<div class="jshBtn-box" :style="{background:backGround, border: borderStyle}">
		<div class="jsh-width" :style="{width: width, padding: padding}">
			<img :src="imgSrc" alt="" class="jshImg left" :style='{margin: marginImg, width: widthImg, height:heightImg}'>
			<p class="jshText left" :style="{color: textColor, fontSize: fontSize, lineHeight: lineHeight}">{{name}}</p>
			<div class="clear"></div>
		</div>
		<div class="jshLineY" v-if='Number(lineY) === 1' :style="{top: lineYTop}"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props: [
		'width',
		'backGround', 
		'borderStyle', 
		'textColor', 
		'padding', 
		'fontSize', 
		'lineHeight', 
		'lineY',
		'lineYTop',
		'name', 
		'widthImg',
		'heightImg',
		'marginImg', 
		'imgSrc'],
		components: {},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
		},
		watch: {
		},
		methods: {
		}
	};
</script>

<style>
	.jshBtn-box{
		position: relative;
		background: #2E2E30;
	}
	.jsh-width{
		margin: auto;
	}
	.jshImg{
		position: relative;
		width: 32upx;
		height: 32upx;
		margin-top: 28upx;
		margin-right: 6upx;
		display: inline-block;
	}
	.jshText{
		position: relative;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		letter-spacing: 0;
		text-align: center;
		line-height: 88upx;
	}
	.jshLineY{
		position: absolute;
		top: 30upx;
		right: 0;
		height: 28upx;
		width: 2upx;
		background: #5D5D5D;
	}
</style>
