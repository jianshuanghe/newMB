<!-- 实例
 <moduleList
 :disabled='true' // 略
 :dataList="content.context.tempCon.modules" // 深拷贝下的数据,因为需要对数组更改,只有确认保存才需要去修改真正的数组,所以这里在需要使用深拷贝下的
 :selIconList='content.context.tempCon.selIconList' // icon图库数组
 :moduleTempList='moduleTemp.content' // 可添加模块的数组
 @tab-ModuleList='tabModuleList'
 >
 </moduleList>
 -->
<template>
	<div class="moduleList">
		<!-- 拖动模块 -->
		<scroll-view
		scroll-top="" 
		scroll-y="true" 
		class="scroll-Y" 
		:style="{height: scrollHeight}"
		>
			<div class="module-box">
				<dragSortsNo
				v-if='!isDrag'
				:disabled='disabled'
				:isEdit='false'
				:isEditInput='isEditInput'
				:selIconList='selIconList'
				:list="currentList"
				:pickerCancel='pickerCancel'
				@tab-DragSortChange="tabDragSortChange"
				></dragSortsNo>
			</div>
		</scroll-view>
	</div>
</template>

<script>
	import dragSortsNo from '@/components/common/RHX/dragSortsNo/dragSortsNo';
	import moduleAdd from '@/components/common/RHX/moduleAdd/moduleAdd';
	import moduleAddList from '@/components/common/RHX/moduleAddList/moduleAddList';
export default {
	components: {
		dragSortsNo,
		moduleAdd,
		moduleAddList
	},
	props: [
		'disabled',
		 'isEditInput',
		'dataList', 
		'scrollHeight', 
		'selIconList', 
		'moduleTempList', 
		'type', 
		'isDrag',
		'addModuleTop',
		'pickerCancel'],
	data() {
		return {
			moduleAddListShow: false, // 是否展示添加模块列表
			dataLists: this.dataList, // 数据
			merge: false, // 是否合并数据
			moduleShow: false, // 是否展示module模块
			isAnimateModule:true, // 在模块编辑picker是否需要展示动画
			height: 60, // 高度
		};
	},
	created() {
		console.log(this.VwVhToPx(90, 'vh'), '----------------VwVhToPx------------');
		this.onUpdateCurrentList();
	},
	watch: {
		dataList: {
			handler(a, b) {
				console.log(a, b, '删除传过来的数据');
				this.dataLists = a;
				this.onUpdateCurrentList();
			},
			deep: true
		},
		pickerCancel: {
			handler(a, b) {
				console.log(a, '----------------pickerCancel--------------')
			},
			deep: true
		}
	},
	computed: {
	},
	methods: {
		onUpdateCurrentList(list = this.dataList) {
			let arr = [];
			for (const key in list) {
				// console.log(key)
				let height = Math.ceil((Number(key) + 1) / 1) - 1;
				let x = 0;
				arr.push({
					...list[key],
					isShow: 1,
					index: Number(key),
					SortNumber: Number(key),
					y: height * this.height,
					x,
					animation: true
				});
			}
			this.currentList = arr;
			// 向前台更新数据
			let data = JSON.parse(JSON.stringify(this.currentList));
			data.sort((a,b)=>{return a.SortNumber-b.SortNumber});
			uni.setStorageSync('currentList',data);
		},
		// 点击模块items组件
		tabDragSortChange (e) {
			console.log(e, '点击模块items组件');
			this.$emit('tab-ModuleList', e);
		},
		// 点击picker取消
		tapCancel (e) {
			console.log('点击picker取消');
			this.moduleAddListShow = false; // 取消展示添加模块列表
		},
		// 点击picker确定
		tapPreserve (e) {
			console.log(e, '点击picker确定');
			this.$emit('tap-PreserveBotttom', e); // 将选中的值返回给父组件
			this.moduleAddListShow = false; // 取消展示添加模块列表
		},
	}
};
</script>

<style>
	.moduleList{
		position: relative;
		width: 100%;
		/* padding: 40upx 40upx 40upx 40upx; */
		background: #fff;
	}
	.module-box{
		position: relative;
		width: 100%;
	}
	.module-add{
		position: fixed;
		width: 100vw;
		left: 0;
		z-index: 1001;
	}
</style>
