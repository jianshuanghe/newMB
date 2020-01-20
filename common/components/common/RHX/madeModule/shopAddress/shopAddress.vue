<template>
	<div class="shopAddress-content">
		<!-- 编辑模式 -->
		<addressEdit
		v-if='disabled'
		:dataList='dataList'
		:indexNum='indexNum'
		:itemsData='itemList'
		@tap-AddressEdit='tapAddressEdit'
		></addressEdit>
		<!-- 预览模式 -->
		<addressPreve
		v-if='!disabled'
		:dataList='dataList'
		:indexNum='indexNum'
		:itemsData='itemList'
		></addressPreve>
	</div>
</template>

<script>
	import addressEdit from './addressEdit/addressEdit';
	import addressPreve from './addressPreve/addressPreve';
	export default {
		components: {
			addressEdit,
			addressPreve
		},
		props: [
			'disabled',
			'dataList',
			'itemList',
			'indexNum',
		],
		data() {
			return {
			};
		},
		created() {
		},
		methods: {
			tapAddressEdit(e) {
				console.log(e, '用户触发地址自检里的信息');
				this.$emit('tap-ShopAddress', e);
			}
		}
	};
</script>

<style>
</style>
