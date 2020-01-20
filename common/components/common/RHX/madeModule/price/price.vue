<template>
	<div class="price-content">
		<div class="price">
			<!-- 编辑 -->
			<edit
			:disabled='disabled'
			:deleteMoveShow='deleteMoveShow'
			:dataList='dataLists'
			@tap-UpDataEdit='tapUpDataEdit'
			v-if='disabled'
			></edit>
			<!-- 预览 -->
			<preview
			:disabled='disabled'
			:deleteMoveShow='deleteMoveShow'
			:dataList='dataLists'
			v-if='!disabled'
			></preview>
		</div>
	</div>
</template>

<script>
	import edit from './editOrPreview/edit/edit';
	import preview from './editOrPreview/preview/preview';
	export default {
		components: {
			edit,
			preview
		},
		props: [
			'disabled',
			'deleteMoveShow', 
			'dataList',
		],
		data() {
			return {
				dataLists: this.dataList
			};
		},
		created() {
	
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '-----------dataList----------');
					this.dataLists = a;
				},
				deep: true
			},
		},
		methods: {
			// 更新编辑模块数据
			tapUpDataEdit(e) {
				console.log(e, '更新编辑模块数据');
				this.dataLists = e; // 商品单位
				this.$emit('tap-PriceDetails',this.dataLists);
			},
		}
	};
</script>

<style>
</style>
