<template>
	<div class="contontSTem-content">
		<!-- top navtab切换 -->
		<topSTem></topSTem>
		<!-- 简单 -->
		<simple v-if="GET_PUBLISH.publishPurchase.templetType === 0"></simple>
		<!-- 普通 -->
		<general v-if="GET_PUBLISH.publishPurchase.templetType === 1"></general>
		<!-- 更多设置 -->
		<moreSet v-if="GET_PUBLISH.publishPurchase.moreSet === true"></moreSet>
		<!-- 提交 submit -->
		<div class="btn-purchase">
			<noEditBtn
			:routeParam='routeParam'
			:businessTemList='businessTemList'
			></noEditBtn>
		</div>
	</div>
</template>

<script>
	import topSTem from './topSTem.vue';
	import simple from './templet/simple.vue';
	import general from './templet/general.vue';
	import moreSet from './templet/moreSet/moreSet.vue';
	import noEditBtn from './btn/noEditBtn.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
			};
		},
		components: {
			topSTem,
			simple,
			general,
			moreSet,
			noEditBtn
		},
		props: [
			'routeParam'
		],
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
