<template>
	<view class="Edit-instructions">
		<businessStorePicker
		leftText='取消'
		centerText='商家信息'
		rightText='保存'
		:disabled='disabled'
		:defaultAddImg='defaultAddImg'
		:businessTemList='businessTemLists'
		:translateY="this.VwVhToPx(10, 'vh')"
		scrollHeight='77vh'
		:marginBottomShow='true'
		:scrollY='true'
		rightColor='#02C2A2'
		type=''
		:isAnimate='isAnimateModule'
		@tap-Cancel='tapCancel'
		@tap-Preserve='tapPreserve'
		v-if='moduleAddListShow'>
		</businessStorePicker>
	</view>
</template>

<script>
	import businessStorePicker from '@/components/common/RHX/bottom/businessStorePicker/businessStorePicker';
	export default {
		components: {
			businessStorePicker
		},
		props: [
			'disabled', 
			'businessTemList',
			'defaultAddImg'
		],
		data() {
			return {
				businessTemListM: JSON.parse(JSON.stringify(this.businessTemList)),
				businessTemLists: this.businessTemList, // 用户主动更改商家信息内容
				moduleAddListShow: true, // 是否展示添加模块列表
				isAnimateModule:true, // 在模块编辑picker是否需要展示动画
			};
		},
		created() {
			console.log(this.VwVhToPx(90, 'vh'), '----------------VwVhToPx------------');
		},
		watch: {
			dataList: {
				handler(a, b) {
				},
				deep: true
			},
			pickerCancel: {
				handler(a, b) {
					console.log(a, '----------------pickerCancel--------------')
				},
				deep: true
			},
			businessTemList: {
				handler(a, b) {
					console.log('----------------businessTemLists--------------')
					this.businessTemLists = a;
				},
				deep: true
			},
		},
		computed: {
		},
		methods: {
			// 点击picker取消
			tapCancel (e) {
				console.log('点击picker取消');
				console.log(this.businessTemListM, '-------------this.businessTemList-------------');
				this.businessTemLists = this.businessTemListM;
				this.$emit('tap-ReferBusiness', false);
				this.moduleAddListShow = false; // 取消展示添加模块列表
				this.$emit('tap-BusinessStore', true);
			},
			// 点击picker确定
			tapPreserve (e) {
				console.log(e, '点击picker确定');
				this.$emit('tap-ReferBusiness', true);
				this.moduleAddListShow = false; // 取消展示添加模块列表
				this.$emit('tap-BusinessStore', true);
			},
		}
	};
</script>

<style>
	.Edit-instructions{
		position: relative;
	}
	
</style>
