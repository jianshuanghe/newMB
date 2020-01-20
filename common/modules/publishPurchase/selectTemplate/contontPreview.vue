<template>
	<div class="contontSTem-content">
		<!-- 简单 -->
		<previewSimple 
		v-if="GET_PUBLISH.publishPurchase.templetType === 0"
		:routeParam='routeParam'
		:businessTemList='businessTemList'
		:caiGouDetileData='caiGouDetileData'
		></previewSimple>
		<!-- 普通 -->
		<previewGeneral 
		v-if="GET_PUBLISH.publishPurchase.templetType === 1"
		:routeParam='routeParam'
		:businessTemList='businessTemList'
		:caiGouDetileData='caiGouDetileData'
		></previewGeneral>
	</div>
</template>

<script>
	import previewSimple from './templet/previewSimple.vue';
	import previewGeneral from './templet/previewGeneral.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
			};
		},
		props: [
			'routeParam',
			"businessTemList",
			'caiGouDetileData'
		],
		components: {
			previewSimple,
			previewGeneral,
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			...mapGetters(['GET_PUBLISH'])
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
