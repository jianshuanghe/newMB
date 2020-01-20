<template>
	<view class="Edit-instructions">
		<pickerButtonPicker
			leftText="取消"
			:centerText="centerText"
			rightText="保存"
			:disabled="disabled"
			:dataList='dataLists'
			:selectList="selectLists"
			:translateY="this.VwVhToPx(47, 'vh')"
			scrollHeight="40vh"
			:marginBottomShow="true"
			:scrollY="true"
			rightColor="#02C2A2"
			tips='请选择!'
			type=""
			:typeBtn='typeBtn'
			:isAnimate="isAnimateModule"
			@tap-Cancel="tapCancel"
			@tap-Preserve="tapPreserve"
		></pickerButtonPicker>
	</view>
</template>

<script>
import pickerButtonPicker from './pickerButtonPicker';
export default {
	components: {
		pickerButtonPicker
	},
	props: [
		'typeBtn',
		'disabled', 
		'dataList',
		'centerText',
		'selectList',
	],
	data() {
		return {
			selectLists: this.selectList,
			dataLists: this.dataList,
			isAnimateModule: true,
		};
	},
	created() {
		console.log(this.VwVhToPx(90, 'vh'), '----------------VwVhToPx------------');
		// this.resetSelectList();
	},
	watch: {
		dataList: {
			handler(a, b) {
				this.dataLists = a;
				// this.resetSelectList();
			},
			deep: true
		},
		selectList: {
			handler(a, b) {
				this.selectLists = a;
			},
			deep: true
		}
	},
	computed: {},
	methods: {
		// 双向赋值
		resetSelectList () {
			console.log('双向赋值');
			
			// let clelet = JSON.parse(JSON.stringify(this.dataLists))
			// this.selectLists.map((item, index)=>{
			// 	clelet.map((items,key)=>{
			// 		console.log(items.value, item.value, '-------------items.value, item.value-------------')
			// 		if (items.value === item.value) {
			// 			console.log(items, '在可选的数组中出现了，用户已选中的数据');
			// 			item.valued = String(key);
			// 			item.checked = true;
			// 			delete clelet.splice(key, 1); // 删除选中的子项
			// 		} else {
			// 			item.valued = String(key);
			// 			item.checked = false;
			// 		}
			// 	});
			// })
			console.log(this.selectLists, '------------this.dataLists-----------');
		},
		// 点击picker取消
		tapCancel(e) {
			console.log('点击picker取消');
			this.$emit('tap-PickerButton', [this.dataLists, false]);
		},
		// 点击picker确定
		tapPreserve(e) {
			console.log(e, '点击picker确定');
			console.log(this.dataLists, '添加之钱数据');
			this.dataLists = e;
			console.log(this.dataLists, '添加之后数据');
			this.$emit('tap-PickerButton', [this.dataLists, false]);
		}
	}
};
</script>

<style>
.Edit-instructions {
	position: relative;
}
</style>
