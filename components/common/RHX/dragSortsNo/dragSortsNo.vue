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
						:disabled="false"
						:delIcon='false'
						:dataList="currentList"
						:indexNum="index"
						:SortNumber="item.SortNumber"
						:valueOne="item.iconTitle"
						:iconSrc="item.icon || iconSrc"
						:isSelect='isSelect === item.SortNumber ? true : false'
						:isEdit='isEdit'
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
	import iconSrc from '@/static/mbcImg/publish/purchase/delete.png';
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
			iconSrc: this.Static+ 'publish/purchase/delete.png',
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
		'isEditInput',
		'isEdit',
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
		if (uni.getStorageSync('currentList')) {
			this.currentList = uni.getStorageSync('currentList'); // 读取缓存中用户修改的数据
			
		} else {
			this.currentList = this.list;
		};
		if (this.isEdit === true) {
			this.isSelect = 0;
			this.iconLibrary = 0;
		}
	},
	mounted() {},
	updated() {},
	filters: {},
	beforeDestroy () {
		// 向前台更新数据
		let data = JSON.parse(JSON.stringify(this.currentList));
		data.sort((a,b)=>{return a.SortNumber-b.SortNumber});
		uni.setStorageSync('currentList',data);
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
			let data = JSON.parse(JSON.stringify(this.currentList));
			data.sort((a,b)=>{return a.SortNumber-b.SortNumber});
			uni.setStorageSync('currentList',data);
		},
		// 触发更改icon，展示icon库
		tapModuleItemsIcon (e) {
			console.log(e, '触发点击子项的index----原始值');
			console.log(this.iconLibraryShow, '-------------------------this.iconLibraryShow-----------------------')
			if (this.iconLibraryShow === false) {
				this.iconLibraryShow = true;
				this.iconLibrary = e.SortNumber;
				this.isSelect = e.SortNumber;
				this.old.tapIndex = e.index;
				console.log(e, '------------------所在index------------------');
				// this.currentList[e + 1].y = this.currentList[e + 1].y + 114;
				this.currentList.sort((a,b)=>{return a.SortNumber-b.SortNumber});
				console.log(this.currentList[e.index] , '--------------------修改后的this.currentList-------------------');
				// this.currentList.map((items, index) => {
				// 	if (e === index === 0) {
				// 		items.y = items.y
				// 	} if (index > e) {
				// 		items.y = items.y + 114
				// 	}
				// });
			} else if (this.iconLibraryShow === true) {
				console.log(e, this.old.tapIndex, '----------------------------e, this.this.old.tapIndex--------------------------')
				if (e.index === this.old.tapIndex) {
					console.log('关闭上一次打开的')
					this.iconLibraryShow = false;
					this.iconLibrary = -1;
					this.isSelect = -1;
					this.old.tapIndex = -1;
				} else {
					console.log('关闭上一次打开的,并且打开新的')
					this.iconLibraryShow = true;
					this.iconLibrary = e.SortNumber;
					this.isSelect = e.SortNumber;
					this.old.tapIndex = e.index;
					console.log(e, '------------------所在index------------------');
					// this.currentList[e + 1].y = this.currentList[e + 1].y + 114;
					// this.currentList.sort((a,b)=>{return a.SortNumber-b.SortNumber});
					// console.log(this.currentList[e] , '--------------------修改后的this.currentList-------------------');
					// this.currentList.map((items, index) => {
					// 	if (e === index === 0) {
					// 		items.y = items.y
					// 	} if (index > e) {
					// 		items.y = items.y + 114
					// 	}
					// });
				}
				let data = JSON.parse(JSON.stringify(this.currentList));
				data.sort((a,b)=>{return a.SortNumber-b.SortNumber});
				uni.setStorageSync('currentList',data);
				
			}
			
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
			this.onUpdateCurrentList()
		},
		onUpdateCurrentList(list = this.currentList) {
			let arr = [];
			for (const key in list) {
				// console.log(key)
				let height = Math.ceil((Number(key) + 1) / 1) - 1;
				let x = 0;
				// if (key <= 3) {
				// 	x = key * this.windowWidth * 0.24 + this.windowWidth * 0.04 || this.windowWidth * 0.04;
				// } else {
				// 	if ((Number(key) + 1) % 4 === 0) {
				// 		x = 3 * this.windowWidth * 0.24 + this.windowWidth * 0.04 || this.windowWidth * 0.04;
				// 	} else {
				// 		x = (((Number(key) + 1) % 4) - 1) * this.windowWidth * 0.24 + this.windowWidth * 0.04 || this.windowWidth * 0.04;
				// 	}
				// }
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
		// 更换icon
		tapModuleIconLibrary(e) {
			console.log(e, '用户选择的新icon');
			// 将数据里的icon指定跟新
			console.log(this.iconLibrary, this.old.tapIndex, '先')
			this.currentList.map((items, index)=>{
				if (index === this.iconLibrary) {
					items.icon = e
				}
			});
			// 往前台跟新图库
			let data = this.currentList;
			this.currentList.sort((a,b)=>{return a.SortNumber-b.SortNumber});
			this.$emit('tab-DragSortChange', data);
			// 关闭图库
			this.iconLibraryShow = false;
			this.iconLibrary = -1;
			this.isSelect = -1;
			this.old.tapIndex = -1;
			uni.showToast({
				title: '替换成功！',
				icon: 'none',
				duration: 500
			});
			let datas = JSON.parse(JSON.stringify(this.currentList));
			datas.sort((a,b)=>{return a.SortNumber-b.SortNumber});
			uni.setStorageSync('currentList',datas);
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
	// display: ;
	min-height: 60px;
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
		padding: 34upx 40upx 0 40upx;
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
