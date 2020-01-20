<template>
	<!-- 添加或删除按钮 -->
	<div class="addDeleteBtn-box">
		<p class="AdText">{{ name }}</p>
		<div class="AdDelete">-</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ['colorType', 'name', 'imgSrc'],
	components: {},
	computed: {
		i18n() {
			return this.$t('navigation');
		}
	},
	watch: {},
	methods: {}
};
</script>

<style>
.addDeleteBtn-box {
	position: relative;
	width: 100%;
	background: #f5f5f5;
}
.AdText {
	position: relative;
	font-family: PingFangSC-Regular;
	font-size: 32upx;
	color: #2e2e30;
	letter-spacing: 0;
	text-align: center;
	line-height: 66upx;
	background: #f9f9f9;
	border: 0 solid rgba(46, 46, 48, 0.3);
	margin-top: 19upx;
}
.AdDelete{
	position: absolute;
	top: 8upx;
	height: 16upx;
	width: 16upx;
	right: -8upx;
	background: #FF3A2E;
	border-radius: 50%;
	color: #fff;
	line-height: 16upx;
	font-size: 28upx;
	text-align: center;
}
</style>
