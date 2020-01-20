<!-- 实例 
	<dragSorts
	:disabled='disabled' // 是否禁用，目前对拖动设置不管用，正在排查问题！！！！！！！！！！！！！！！！！！！！！！
	:list="dataList" // 传入的数组
	@change="onDragSortChange">
	</dragSorts>
-->
<!-- 
 div必须在<div/>组件中，并且必须是直接子节点，否则不能移动。
 拖动实现逻辑原理：
 1、div 的高度设置，根据数组长度和每一个子项高度的乘积 得出 boxHeight，需要在computed中设置（这样用户删除数组或者添加时都可以动态改变）
 2、div拥有两个x、y属性，拖动就是根据这两个实现交换位置的，具体看代码
 -->
<template>
	<view class="">
		<div 
		class="drag-sort" 
		:style="{ height: boxHeight }" 
		v-if='dragSortRefresh'>
			<div
				v-for="(item, index) in currentList"
				:key="index"
				class="drag-sort-item"
				:style="styleObject">
				<view class="item">
					<!-- 可拖动子项 -->
					<moduleItems
						:disabled="disabled"
						:dataList="currentList"
						:indexNum="index"
						:valueOne="item.iconTitle"
						:iconSrc="item.icon || iconSrc"
						:isSelect='isSelect === item.SortNumber ? true : false'
						@tap-ModuleItemsDel='tapModuleItemsDel'
						@tap-ModuleItemsIcon='tapModuleItemsIcon'
						@tap-ModuleItems="tapModuleItems"
					></moduleItems>
					<div class="icon" v-if='iconLibrary === item.SortNumber'>
						<!-- icon图库 -->
						<moduleIconLibrary
						:disabled="disabled"
						:dataList="currentList"
						:indexNum="item.SortNumber"
						:selIconList='selIconList'
						@tap-ModuleIconLibrary='tapModuleIconLibrary'
						>
						</moduleIconLibrary>
					</div>
				</view>
			</div>
		</div>
	</view>
</template>

<script>
	import moduleIconLibrary from '@/components/common/RHX/moduleIconLibrary/moduleIconLibrary';
	import moduleItems from '@/components/common/RHX/moduleItems/moduleItems';
export default {
	name: 'drag-sort',
	mixins: [],
	components: {
		moduleIconLibrary,
		moduleItems
	},
	data() {
		return {
			dragSortRefresh: true,
			iconLibrary: -1,
			iconLibraryShow: false, // 判断当前组件是否有icon库展示
			dataLists: this.dataList,
			isSelect: -1, // 用户选择的项
			iconSrc:  this.Static+'publish/purchase/delete.png',
			old:{ // 用来记录用户上次行为
				tapIndex: -1
			},
			disable: this.disabled,
			styleObject: {
				color: 'red',
				fontSize: '13px',
				borderTop: '0.5px solid #E2E2E2'
			},
			style: {
				background: 'red'
			},
			direction: 'all',
			windowWidth: 100, //屏幕宽度
			height: 60, // 高度
			currentList: [],
			active: -1, // 当前激活的item
		};
	},
	computed: {
		boxHeight() {
			if (this.list.length !== 0) {
				if (this.iconLibraryShow === true) {
					return Math.ceil((Number(this.list.length)) / 1) * this.height + 114 + 'px';
				} else {
					return Math.ceil((Number(this.list.length)) / 1) * this.height + 'px';
				}
			} else {
				return 0
			}
		}
	},
	props: [
		'disabled', 
		'selIconList', 
		'list', 
		'boxStyle',
		'pickerCancel'],
	watch: {
		disabled: {
			handler(a, b) {
				console.log(a, b)
				this.disable = a;
			},
			deep: true
		},
		pickerCancel: {
			handler(a, b) {
				console.log(a, b, '-----------pickerCancel--------')
				if(a === false) {
					this.currentList.map((item, index)=>{
						item.isShow = 1;
					})
				}
			},
			deep: true
		},
	},
	created() {
		const res = uni.getSystemInfoSync();
		this.windowWidth = res.windowWidth;
		this.currentList = this.list;
	},
	mounted() {},
	updated() {},
	filters: {},
	beforeDestroy () {
		console.log('页面销毁之前清除缓存数据--------------currentList');
	},
	methods: {
		// 触发tapModuleItems
		tapModuleItems(e) {
			console.log(e, '触发tapModuleItems');
			console.log(this.currentList, '---------------this.currentList-------------')
			this.currentList.map((items, index)=>{
				if (index === e[1]) {
					items.iconTitle = e[0];
				}
			});
		},
		// 触发更改icon，展示icon库
		tapModuleItemsIcon (e) {
			console.log(e, '触发点击子项的index----原始值');
		},
		// 删除
		tapModuleItemsDel(e) {
			console.log(e, '我是删除的index 的SortNumber');
			delete this.currentList.splice(e, 1); // 删除选中的子项
			uni.showToast({
				title: '成功！',
				icon: 'none',
				duration: 500
			});
		},
		// 更换icon
		tapModuleIconLibrary(e) {
			console.log(e, '用户选择的新icon');
		}
	}
};
</script>

<style lang="less" scoped>
.drag-sort {
	width: 100%;
}
.drag-sort-item {
	position: relative;
	display: flex;
	height: 60px;
	align-items: center;
	width: 100%;
	text-align: center;
	background-color: #FFFFFF;
	color: #fff;
	/* border-radius: 5px; */
	box-sizing: border-box;
	.item {
		position: relative;
		flex: 1;
		font-size: 16px;
		padding: 0 40upx;
	}
	.close {
		position: absolute;
		right: -10upx;
		top: -10upx;
		width: 30upx;
		z-index: 99;
		height: 30upx;
		opacity: 0.8;
	}
	.close image {
		width: 100%;
		height: 100%;
	}
	.touch-tight {
		width: 24px;
		display: flex;
		justify-content: center;
	}
}
.touch {
	height: 100%;
	width: 50px;
}
.active {
	background: #FFFFFF;
	box-shadow: 0 0 4px 0 #E2E2E2;
	z-index: 99;
}
</style>
