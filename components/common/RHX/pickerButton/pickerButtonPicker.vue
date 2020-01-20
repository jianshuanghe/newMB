<!-- 实例
 <moduleAddList
 leftText='取消' // picker左侧文字
 centerText='添加新模块' // picker 右侧文字
 tips='请勾选其中一项!' // 点击picker保存，没有勾选时的提示文字
 rightText // picker右侧文字
 rightColor='#02C2A2' // picker 右侧文字颜色
 :translateY="this.VwVhToPx(90, 'vh')" // picker 打开时动画变化高度
 :dataList='moduleTempList' // 单选总数组
 scrollHeight='77vh' // 滚动区域高度
 :marginBottomShow='true' // 是否展示底部
 :scrollY='true' // 是否允许纵向滚动
 type='1' // type类型  （以后可扩展属性）
 @tap-Cancel='tapCancel' // picker 取消方法
 @tap-Preserve='tapPreserve' // picker 保存方法
 v-if='moduleAddListShow'>
 </moduleAddList>
 -->
<template>
	<div class="moduleAddList-content">
		<!-- rPicker -->
		<rPicker
		:leftText='leftText'
		:centerText='centerText'
		:rightText='rightText'
		:pickerTop='pickerTop'
		:translateY='translateY'
		:rightColor='rightColor'
		:type='type'
		:isAnimate='isAnimate'
		@tap-PickerCancel='tapPickerCancel'
		@tap-PickerPreserve='tapPickerPreserve'
		>	
			<!-- 滚动区域 -->
			<div class="scroll-box">
				 <scroll-view class="scroll-H" :scroll-y="scrollY" :style="{height: scrollHeight}">
					<!-- 单选多选框 -->
					<pickerButtonInfor
					:disabled='disabled'
					:defaultAddImg='defaultAddImg'
					:selectList='selectList'
					:dataList='dataList'
					:typeBtn='typeBtn'
					@tap-PickerButtonInforOne='tapPickerButtonInforOne'
					@tap-PickerButtonInforTwo='tapPickerButtonInforTwo'
					@tap-PickerButtonInforThr='tapPickerButtonInforThr'
					></pickerButtonInfor>
				 </scroll-view>
			</div>
		</rPicker>
	</div>
</template>

<script>
	import pickerButtonInfor from './pickerButtonInfor';
	import rPicker from '@/components/common/RHX/rPicker/rPicker';
	import fixedBgBtn from '@/components/common/button/fixedBgBtn.vue';
	export default {
		components: {
			pickerButtonInfor,
			rPicker,
			fixedBgBtn
		},
		props: [
			'disabled',
			'defaultAddImg',
			'businessTemList',
			'leftText',
			'centerText',
			'rightText',
			'tips',
			'pickerTop',
			'translateY',
			'rightColor',
			'type',
			'scrollHeight',
			'scrollY',
			'selectList',
			'dataList',
			'marginBottomShow',
			'isAnimate',
			'typeBtn'
		],
		data() {
			return {
				checkOne: {}, // 换货服务
				checkTwo: {}, // 发货保障
				checkThr: {}, // 其他保障(可多选)
				checkValue:[], // 用户选中的值集合
			};
		},
		created() {},
		methods: {
			// 用户主动选择添加的项
			tapPickerButtonInforOne (e) {
				console.log(e, '用户主动选择添加的项One');
				this.checkOne = e;
			},
			// 用户主动选择添加的项
			tapPickerButtonInforTwo (e) {
				console.log(e, '用户主动选择添加的项Two');
				this.checkTwo = e;
			},
			// 用户主动选择添加的项
			tapPickerButtonInforThr (e) {
				console.log(e, '用户主动选择添加的项Thr');
				this.checkThr = e;
			},
			// 更新数据
			upData(){
				if (JSON.stringify(this.checkOne) !== "{}") {
					this.checkValue.push(this.checkOne);
				};
				if (JSON.stringify(this.checkTwo) !== "{}") {
					this.checkValue.push(this.checkTwo);
				};
				console.log(this.checkThr, '---------------this.checkThr-------------')
				if (this.checkThr.length > 0) {
					this.checkValue = this.checkValue.concat(this.checkThr);
				};
				console.log(this.checkValue, '-------------this.checkValue-------------');
				if (JSON.stringify(this.checkValue) === "[]") { // 空提示
					uni.showToast({
						title: this.tips,
						icon: 'none',
						duration: 500
					});
					return
				}
				this.$emit('tap-PreserveBotttomFixed');
				this.$emit('tap-Preserve', this.checkValue);
			},
			tapPickerPreserve() {
				console.log(this.checkThr, '用户主动选择添加的项');
				this.upData();
			},
			// 点击picker取消按钮
			tapPickerCancel (e) {
				console.log(e, '点击picker取消按钮');
				this.$emit('tap-Cancel');
			}
		}
	};
</script>

<style>
	.moduleAddList-content{
		position: relative;
		width: 100%;
	}
	.scroll-H{
		padding-bottom: 20vh;
	}
	.add-text{
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		line-height: 88upx;
		background: #02C2A2;
		box-shadow: 0 1px 6px 0 rgba(2,194,162,0.30);
	}
</style>
