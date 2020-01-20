<template>
	<!-- 黑色背景按钮 -->
	<div class="blackBtn-box" :style='{width:btnWidth, margin: btnMargin}'>
		<p class="text">{{name}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props: ['btnWidth', 'btnMargin', 'name'],
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
	.blackBtn-box{
		position: relative;
		width: 100%;
		background: #2E2E30;
		margin: 0 14upx;
	}
	.text{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Light;
		font-size: 26upx;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		line-height: 66upx;
	}
</style>
