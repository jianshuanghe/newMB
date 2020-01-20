<template>
	<!-- 商家、联系、收藏组件 -->
	<div class="BTSBtn-box">
		<img :src="imgSrc" alt="" class="BTSImg">
		<p class="BTSText">{{name}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props: ['colorType', 'name', 'imgSrc'],
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
	.BTSBtn-box{
		position: relative;
		width: 100%;
		background: #F5F5F5;
	}
	.BTSImg{
		position: relative;
		width: 38upx;
		height: 38upx;
		margin: 0 auto;
		display: flex;
		top: 12upx;
		margin-bottom: 8upx;
	}
	.BTSText{
		position: relative;
		font-family: PingFangSC-Regular;
		font-size: 20upx;
		color: #9B9B9B;
		text-align: center;
		line-height: 46upx;
	}
</style>
