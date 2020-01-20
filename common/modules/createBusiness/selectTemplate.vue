<template>
	<div class="selectTemplate-content">
		<!-- top navtab切换 -->
		<topSTem></topSTem>
		<!-- 内容框 -->
		<contontSTem></contontSTem>
		<!-- 快捷导航 -->
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</div>
</template>

<script>
	import topSTem from './selectTemplate/topSTem.vue';
	import contontSTem from './selectTemplate/contontSTem.vue';
	import navigation from '@/components/mbbo/navigation/navigation.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
			};
		},
		components: {
			topSTem,
			navigation,
			contontSTem
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			...mapGetters(['GET_PUBLISH', 'QUICKNAVCO'])
		},
		created () {
			this.shareEachPage(); // 分享
		},
		watch: {
			GET_PUBLISH: {
				handler(a, b) {
				},
				deep: true
			}
		},
		mounted() {},
		beforeDestroy () {
		},
		methods: {
			...mapMutations({
				setMoreSet: 'setMoreSet'
			})
		}
	};
</script>

<style>
</style>
