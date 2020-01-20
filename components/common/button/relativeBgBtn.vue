<template>
	<!-- relativeBgBtn 相对定位的btn按钮，宽度相应100% -->
	<div class="relativeBgBtn-box" :style="{ borderColor: bColor, padding: paddingNum, background: bgColor, boxShadow: bShadow }">
		 <slot></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: ['bColor', 'paddingNum', 'bgColor', 'bShadow'],
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
	.relativeBgBtn-box{
		position: relative;
		width: 100%;
	}
</style>
