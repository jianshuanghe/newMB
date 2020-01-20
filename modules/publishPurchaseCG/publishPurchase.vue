<template>
	<div class="selectTemplate-content">
		<!-- 内容框 -->
		<contontEdit v-if='!GET_PUBLISH.publishPurchase.previceCaiGou'></contontEdit>
		<!-- 预览 -->
		<contontPreview  v-if='GET_PUBLISH.publishPurchase.previceCaiGou'></contontPreview>
		<!-- 快捷导航 -->
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</div>
</template>

<script>
	
	import contontEdit from './selectTemplate/contontEdit.vue';
	import contontPreview from './selectTemplate/contontPreview.vue';
	import navigation from '@/components/mbbo/navigation/navigation.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
			};
		},
		components: {
			navigation,
			contontEdit,
			contontPreview
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			...mapGetters(['GET_PUBLISH', 'QUICKNAVCO'])
		},
		created () {
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
