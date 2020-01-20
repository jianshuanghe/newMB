<template>
	<div class="numberStep-content">
		<div class="numberStep">
			<!-- 编辑模式 -->
			<div class="NumberBox" v-if='disableds === true'>
				<numberBox
				:min="0" 
				:max="99999999"
				value=''
				:step='1'
				:disabled='true'
				@change="bindChange"
				></numberBox>
			</div>
			<!-- 预览模式 -->
			<div class="NumberBox" v-if='disableds === false'>
				<numberBox
				:min="0" 
				:max="99999999"
				:value='dataList.count'
				:step='1'
				:disabled='false'
				@change="bindChange"
				></numberBox>
			</div>
		</div>
	</div>
</template>

<script>
	import numberBox from '@/components/common/RHX/numberBox/numberBox';
	export default {
		components: {
			numberBox
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
				disableds: this.disabled,
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
			disabled: {
				handler(a, b) {
					console.log('----------------dataList--------------')
					this.disableds = a;
				},
				deep: true
			},
		},
		created() {},
		methods: {
			bindChange(e) {
				console.log(e, '步进器数据');
				this.dataLists.count = Number(e);
				this.$emit('tap-NumberStep', [this.dataLists, this.indexNum]);
			}
		}
	};
</script>

<style>
	.numberStep-content{
		position: relative;
		width: 100%;
	}
	.numberStep{
		position: relative;
		width: 100%;
	}
	.NumberBox{
		position: relative;
		width: 100%;
	}
</style>
