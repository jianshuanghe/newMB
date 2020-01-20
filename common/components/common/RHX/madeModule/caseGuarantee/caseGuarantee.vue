<template>
	<div class="caseGuarantee-content">
		<div class="caseGuarantee">
			<!-- 实例保障列表 -->
			<deleteButton
			:typeBtn='typeBtn'
			:disabled='disabled'
			:dataList='dataLists'
			@tap-DeleteButton='tapDeleteButton'
			></deleteButton>
		</div>
	</div>
</template>

<script>
	import deleteButton from '@/components/common/RHX/deleteButton/deleteButton';
	export default {
		data() {
			return {
				dataLists: this.dataList
			};
		},
		props: [
			'typeBtn',
			'disabled',
			'dataList', 
			'itemsData', 
			'indexNum',
			],
		components: {
			deleteButton,
			
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
		},
		created () {
			console.log(this.dataList, '????????????????????????')
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听但图片变化---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			},
		},
		methods: {
			tapDeleteButton(e) {
				delete this.dataLists.splice(e, 1); // 删除选中的子项
				this.$emit('tap-CaseGuarantee', this.dataLists);
			}
		}
	};
</script>

<style>
	.caseGuarantee-content{
		position: relative;
		width: 100%;
	}
	.caseGuarantee{
		position: relative;
		width: 690upx;
		margin: 0 auto;
	}
</style>
