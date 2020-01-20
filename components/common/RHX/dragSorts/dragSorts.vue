<!-- 实例 
	<dragSorts
	:disabled='disabled' // 是否禁用，目前对拖动设置不管用，正在排查问题！！！！！！！！！！！！！！！！！！！！！！
	:list="dataList" // 传入的数组
	@change="onDragSortChange">
	</dragSorts>
-->
<!-- 
 movable-view必须在<movable-area/>组件中，并且必须是直接子节点，否则不能移动。
 拖动实现逻辑原理：
 1、movable-area 的高度设置，根据数组长度和每一个子项高度的乘积 得出 boxHeight，需要在computed中设置（这样用户删除数组或者添加时都可以动态改变）
 2、movable-view拥有两个x、y属性，拖动就是根据这两个实现交换位置的，具体看代码
 -->
<template>
	<view class="">
		<movable-area 
		class="drag-sort" 
		:style="{ height: boxHeight }" 
		id="drag"
		v-if='dragSortRefresh'>
			<movable-view
				v-for="(item, index) in currentList"
				:key="index"
				:x="item.x"
				v-if="item.isShow === 1"
				:data-index="index"
				@touchstart="touchstart"
				@touchmove.stop="touchmove"
				@touchend="touchend"
				:y="item.y"
				:direction="direction"
				damping="40"
				:animation="item.animation"
				class="drag-sort-item"
				:style="styleObject"
				:class="{ active: active == index, 'vh-1px-t': item.index > 0 }"
			>
				<view class="item">
					<!-- 可拖动子项 -->
					<moduleItems
						:disabled="disabled"
						:dataList="currentList"
						:indexNum="item.SortNumber"
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
			</movable-view>
		</movable-area>
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
			iconSrc: iconSrc,
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
			index: 0, // 当前激活的item的原index
			topY: 0, // 距离顶部的距离
			topX: 0, // 距离左侧偏移位置
			deviationX: 0,
			deviationY: 0 // 偏移量
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
		list: {
			handler() {
				// debugger;
				this.onUpdateCurrentList();
			},
			deep: true
		},
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
		this.onUpdateCurrentList();
	},
	mounted() {},
	updated() {},
	filters: {},
	beforeDestroy () {
		console.log('页面销毁之前清除缓存数据--------------currentList');
		// uni.removeStorageSync('currentList');
	},
	methods: {
		onUpdateCurrentList(list = this.list) {
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
		// 根据排序进行重新计算位置
		moveUpdateCurrentList(index) {
			for (const i in this.currentList) {
				let key;
				if (this.currentList[i].SortNumber || this.currentList[i].SortNumber === 0) {
					key = this.currentList[i].SortNumber;
				} else {
					key = Number(i);
				}
				// console.log(key)
				let temobj = { ...this.currentList[i] };
				// debugger
				this.currentList[i].y = (Math.ceil((Number(key) + 1) / 1) - 1) * this.height;
				// if (index == key) {
				// 	continue;
				// } else {
				// 	if (key <= 3) {
				// 		this.currentList[i].x = key * this.windowWidth * 0.24 + this.windowWidth * 0.04 || this.windowWidth * 0.04;
				// 	} else {
				// 		if ((Number(key) + 1) % 4 === 0) {
				// 			this.currentList[i].x = 3 * this.windowWidth * 0.24 + this.windowWidth * 0.04 || this.windowWidth * 0.04;
				// 		} else {
				// 			this.currentList[i].x = (((Number(key) + 1) % 4) - 1) * this.windowWidth * 0.24 + this.windowWidth * 0.04 || this.windowWidth * 0.04;
				// 		}
				// 	}
				// }
			};
		},
		touchstart(e) {
			// 计算 x y 轴点击位置
			var query = uni.createSelectorQuery().in(this);
			query.select('#drag').boundingClientRect();
			query.exec(res => {
				this.topY = res[0].top;
				// this.topX = res[0].left;
				let touchY = e.mp.touches[0].clientY - res[0].top;
				// let touchX = e.mp.touches[0].clientX - res[0].left;
				this.deviationY = touchY % this.height;
				// this.deviationX = touchX % (this.windowWidth * 0.2);
				this.active = Number(e.currentTarget.dataset.index);
				this.index = Number(e.currentTarget.dataset.index);
			});
		},
		touchmove(e) {
			this.iconLibrary = -1;
			this.iconLibraryShow = false; // 判断当前组件是否有icon库展示
			if (this.active < 0) return;
			let temY = e.mp.touches[0].clientY - this.topY;
			// let temX = e.mp.touches[0].clientX - this.topX;
			let touchY = temY - 0;
			// let touchX = temX - this.windowWidth * 0.1;
			this.currentList[this.active].y = touchY;
			// this.currentList[this.active].x = touchX;
			this.currentList[this.active].animation = false;
			this.currentList.every((res, index) => {
				// let absX = Math.abs(touchX - res.x);
				let absY = Math.abs(touchY - res.y);
				// 设置元素定点距离多少进行重排
				if (absY > 0 && absY <= 10 && this.active != index) {
					// debugger
					let temNumber = this.currentList[index].SortNumber;
					this.currentList.every((_res, _index) => {
						// 判断从大像小移还是从小向大移
						if (this.currentList[this.active].SortNumber < this.currentList[index].SortNumber) {
							// 移动元素比目标元素所在位置小，之间元素排序--
							if (
								this.currentList[_index].SortNumber > this.currentList[this.active].SortNumber &&
								this.currentList[_index].SortNumber <= this.currentList[index].SortNumber
							) {
								_res.SortNumber--;
							}
						} else {
							// 反之++
							if (
								this.currentList[_index].SortNumber < this.currentList[this.active].SortNumber &&
								this.currentList[_index].SortNumber >= this.currentList[index].SortNumber
							) {
								_res.SortNumber++;
							}
						}
						return true;
					}, this);
					this.currentList[this.active].SortNumber = temNumber;
					this.moveUpdateCurrentList(temNumber);
					return false;
				} else {
					return true;
				}
			}, this);
		},
		touchend(e) {
			if (this.currentList[this.active]) {
				this.currentList[this.active].animation = true;
			}
			this.moveUpdateCurrentList(-1);
			this.active = -1;
			// 向前台更新数据
			let data = JSON.parse(JSON.stringify(this.currentList));
			data.sort((a,b)=>{return a.SortNumber-b.SortNumber});
			uni.setStorageSync('currentList',data);
		},
		// 触发tapModuleItems
		tapModuleItems(e) {
			console.log(e, '触发tapModuleItems');
			console.log(this.currentList, '---------------this.currentList-------------')
			this.currentList.map((items, index)=>{
				if (items.SortNumber === e[1]) {
					items.iconTitle = e[0];
				}
			});
			// 向前台更新数据
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
				this.iconLibrary = e;
				this.isSelect = e;
				this.old.tapIndex = e;
				console.log(e, '------------------所在index------------------');
				// this.currentList[e + 1].y = this.currentList[e + 1].y + 114;
				this.currentList.sort((a,b)=>{return a.SortNumber-b.SortNumber});
				console.log(this.currentList[e] , '--------------------修改后的this.currentList-------------------');
				this.currentList.map((items, index) => {
					if (e === index === 0) {
						items.y = items.y
					} if (index > e) {
						items.y = items.y + 114
					}
				});
			} else if (this.iconLibraryShow === true) {
				console.log(e, this.old.tapIndex, '----------------------------e, this.this.old.tapIndex--------------------------')
				if (e === this.old.tapIndex) {
					console.log('关闭上一次打开的')
					this.iconLibraryShow = false;
					this.iconLibrary = -1;
					this.isSelect = -1;
					this.old.tapIndex = -1;
				} else {
					console.log('关闭上一次打开的,并且打开新的')
					this.iconLibraryShow = true;
					this.iconLibrary = e;
					this.isSelect = e;
					this.old.tapIndex = e;
					console.log(e, '------------------所在index------------------');
					// this.currentList[e + 1].y = this.currentList[e + 1].y + 114;
					this.currentList.sort((a,b)=>{return a.SortNumber-b.SortNumber});
					console.log(this.currentList[e] , '--------------------修改后的this.currentList-------------------');
					this.currentList.map((items, index) => {
						if (e === index === 0) {
							items.y = items.y
						} if (index > e) {
							items.y = items.y + 114
						}
					});
				}
				
			}
			
		},
		// 删除
		tapModuleItemsDel(e) {
			// debugger
			this.iconLibrary = -1;
			this.iconLibraryShow = false; // 判断当前组件是否有icon库展示
			console.log(e, '我是删除的index 的SortNumber');
			this.currentList.sort((a,b)=>{return a.SortNumber-b.SortNumber});
			console.log(this.currentList[e] , '--------------------修改后的this.currentList-------------------');
			console.log(this.currentList[e].SortNumber);
			this.currentList.map((items, index)=>{
				if(items.SortNumber === e) {
					// delete this.currentList.splice(index, 1); // 删除选中的子项
					this.dragSortRefresh = false; // 刷新当前页面
					this.$nextTick(function() {
						this.dragSortRefresh = true;
					});
				}
			})
			// delete this.currentList.splice(e, 1); // 删除选中的子项
			// this.currentList.forEach((item, i) => {
			// 	if (this.currentList[i].SortNumber > this.currentList[e].SortNumber) {
			// 		item.SortNumber--;
			// 	}
			// });
			this.moveUpdateCurrentList(-1);
			if (this.currentList.length > 0) {
				this.currentList[e].isShow = 0;
			}
			let data = this.currentList;
			console.log(data, '------------------删除后数据--------------------')
			// this.currentList.sort((a,b)=>{return a.SortNumber-b.SortNumber});
			console.log(this.currentList, '重排序')
			// this.$emit('tab-DragSortChange', data);
			// 向前台更新数据
			let datas = JSON.parse(JSON.stringify(this.currentList));
			datas.sort((a,b)=>{return a.SortNumber-b.SortNumber});
			uni.setStorageSync('currentList',datas);
			uni.showToast({
				title: '成功！',
				icon: 'none',
				duration: 500
			});
			// this.onUpdateCurrentList();
		},
		// 更换icon
		tapModuleIconLibrary(e) {
			console.log(e, '用户选择的新icon');
			// 将数据里的icon指定跟新
			this.currentList.map((items, index)=>{
				if (index === this.old.tapIndex) {
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
		}
	}
};
</script>

<style lang="less" scoped>
.drag-sort {
	width: 100%;
}
.drag-sort-item {
	position: absolute !important;
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
