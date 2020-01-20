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
				<div class="itemsDrag">
					<dragSorts
					v-if='!isEditOrSort'
					:disabled='disabled'
					:selIconList='selIconList'
					:list="currentList"
					:pickerCancel='pickerCancel'
					@tab-DragSortChange="tabDragSortChange">
					</dragSorts>
				</div>
				<div class="itemsDrag">
					<dragSortsNo
					v-if='isEditOrSort'
					:disabled='false'
					:isEdit='true'
					:selIconList='selIconList'
					:list="currentList"
					:pickerCancel='pickerCancel'
					@tab-DragSortChange="tabDragSortChange"
					></dragSortsNo>
				</div>
			</div>
		</scroll-view>
		<!-- 添加模块 -->
		<!-- <div class="module-add" :style="{top: addModuleTop}"> -->
		<div class="module-add" :style="{bottom: 0}">
			<div class="left add-box">
				<moduleAdd
				@tap-moduleAdd='tapModuleAdd'></moduleAdd>
			</div>
			<div class="right edit-box">
				<moduleEdit
				@tap-moduleEdit='tapmoduleEdit'></moduleEdit>
			</div>
			<div class="clear"></div>
		</div>
		<!-- 添加模块区域列表 -->
		<moduleAddList
		leftText='取消'
		centerText='添加模块'
		tips='请勾选其中一项!'
		rightText='保存'
		:dataList='moduleTempList'
		:translateY="this.VwVhToPx(2, 'vh')"
		scrollHeight='90vh'
		:marginBottomShow='true'
		:scrollY='true'
		rightColor='#02C2A2'
		:type='type'
		:isAnimate='isAnimateModule'
		@tap-PreserveBotttomFixed='tapPreserveBotttomFixed'
		@tap-Cancel='tapCancel'
		@tap-Preserve='tapPreserve'
		v-if='moduleAddListShow'>
		</moduleAddList>
	</div>
</template>

<script>
	import dragSorts from '@/components/common/RHX/dragSorts/dragSorts';
	import dragSortsNo from '@/components/common/RHX/dragSortsNo/dragSortsNo';
	import moduleAdd from '@/components/common/RHX/moduleAdd/moduleAdd';
	import moduleEdit from '@/components/common/RHX/moduleEdit/moduleEdit';
	import moduleAddList from '@/components/common/RHX/moduleAddList/moduleAddList';
export default {
	components: {
		dragSorts,
		dragSortsNo,
		moduleAdd,
		moduleEdit,
		moduleAddList
	},
	props: [
		'disabled', 
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
			isEditOrSort: true, // 编辑还是排序，默认
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
		// 点击删除还是完成
		tapmoduleEdit(e) {
			this.isEditOrSort = e;
		},
		// 点击添加模块按钮
		tapModuleAdd (e) {
			console.log(e, '点击添加模块按钮');
			this.moduleAddListShow = true; // 展示添加模块列表
			this.isAnimateModule = false; // 取消模块管理动画
			console.log(this.isAnimateModule, '----------------------isAnimateModule---------------------')
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
		// 跟新dataList数组返回给前台
		upDataList (e) {
			console.log(e, '先添加的模块数据');
			this.dataList.push(e); // 新修改的数据
			this.merge = true; // 合并数据
			this.moduleShow = false; // 不展示模块
			this.$emit('tab-ModuleList', [this.dataList, this.merge, this.moduleShow]);
		},
		// 点击添加模块底部确定-----fixed----按钮
		tapPreserveBotttomFixed () {
			this.$emit('tap-PreserveBotttom');
		}
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
