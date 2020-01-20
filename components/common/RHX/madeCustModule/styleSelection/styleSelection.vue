<template>
	<div class="imageSelection-content">
		<div class="imageSelection">
			<!-- 编辑状态 -->
			<div class="IS-box" v-if='disabled'>
				<styleSelectionList
				:disabled='disabled'
				:dataList='dataLists'
				:deleteMoveShow='deleteMoveShow'
				type='3'
				dataType='0'
				@tap-StyleSelectionList='tapStyleSelectionList'
				v-if='true'></styleSelectionList>
			</div>
			<!-- 预览状态 -->
			<div class="IS-box" v-if='!disabled'>
				<!-- 多选框 -->
				<rCheckBox
				:dataList='dataLists'
				type='2'
				dataType='4'
				@tap-CheckBox='tapCheckBoxFour'
				v-if='true'></rCheckBox>
			</div>
		</div>
	</div>
</template>

<script>
	import rCheckBox from '@/components/common/RHX/rCheckBox/rCheckBox';
	import styleSelectionList from './styleSelectionList';
	export default {
		components: {
			styleSelectionList,
			rCheckBox
		},
		props: [
			'disabled',
			'itemsData',
			'indexNum',
			'dataList',
			'deleteMoveShow'
		],
		data() {
			return {
				dataLists: this.dataList,
			};
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log('----------------dataList--------------')
					this.dataLists = a;
				},
				deep: true
			},
		},
		created() {
		},
		methods: {
			// 样式选择
			tapCheckBoxFour(e) {
				console.log(e, '样式选择');
				console.log('用户选择行为,非模板行为！！！！！！！！！！！！！！！！！');
				if (e.length > 0) {
					this.$emit('tap-StyleSelection', e);
				}
			},
			// 编辑触发的用户行为
			tapStyleSelectionList (e) {
				console.log(e, '编辑触发的用户行为');
				this.$emit('tap-StyleSelection', e);
			}
		}
	};
</script>

<style>
	.imageSelection-content{
		position: relative;
		width: 100%;
		min-height: 33vw;
	}
	.imageSelection{
		position: relative;
		width: 100%;
	}
</style>
