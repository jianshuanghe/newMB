<template>
	<div class="contontSTem-content">
		<!-- 推荐 -->
		<total v-if='SELECTTEMPLATERHX.tabItems === 1'></total>
		<!-- 产品 -->
		<product v-if='SELECTTEMPLATERHX.tabItems === 2'></product>
		<!-- 定制 -->
		<made v-if='SELECTTEMPLATERHX.tabItems === 3'></made>
		<!-- 资讯 -->
		<infor v-if='SELECTTEMPLATERHX.tabItems === 4'></infor>
	</div>
</template>

<script>
	import total from './selectList/total/total.vue';
	import product from './selectList/product/product.vue';
	import made from './selectList/made/made.vue';
	import infor from './selectList/infor/infor.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
			};
		},
		components: {
			total,
			product,
			made,
			infor
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			...mapGetters(['SELECTTEMPLATERHX'])
		},
		created () {
		},
		watch: {
			SELECTTEMPLATERHX: {
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
