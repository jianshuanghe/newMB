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
		@tap-PickerPreserve='preserve'
		>	
			<!-- 滚动区域 -->
			<div class="scroll-box">
				 <scroll-view class="scroll-H" :scroll-y="scrollY" :style="{height: scrollHeight}">
					<!-- 单选框 -->
					<rCheckBox
					:dataList='dataList'
					:itemsData='itemsData'
					:marginBottomShow='marginBottomShow'
					dataType='5'
					@tap-CheckBox='tapCheckBox'
					v-if='true'></rCheckBox>
				 </scroll-view>
			</div>
			<!-- 确认框 -->
			<!-- <fixedBgBtn
			:bbottom="0"
			bColor= ''
			paddingNum=''
			left='0'
			bgColor=''
			bShadow=''
			bgImage='linear-gradient(134deg,  #15D49F 0%, #57D6CF 100%)'>
				<div class="add-text" @tap='preserve'>确认添加</div>
			</fixedBgBtn> -->
		</rPicker>
	</div>
</template>

<script>
	import rCheckBox from '@/components/common/RHX/rCheckBox/rCheckBox';
	import rPicker from '@/components/common/RHX/rPicker/rPicker';
	import fixedBgBtn from '@/components/common/button/fixedBgBtn.vue';
	export default {
		components: {
			rCheckBox,
			rPicker,
			fixedBgBtn
		},
		props: [
			'leftText',
			'centerText',
			'rightText',
			'tips',
			'itemsData',
			'pickerTop',
			'translateY',
			'rightColor',
			'type',
			'scrollHeight',
			'scrollY',
			'dataList',
			'marginBottomShow',
			'isAnimate'
		],
		data() {
			return {
				radioValue: {}, // 单选选中的值
			};
		},
		created() {},
		methods: {
			// 添加模块
			ModuleAdd() {
				console.log('触发添加模块按钮');
				// this.$emit('tap-ReplaceIcon');
			},
			// 触发单选按钮
			tapCheckBox(e) {
				console.log(e, '用户选中的值');
				this.radioValue = e; // 用户选中的值
			},
			//点击确认添加
			preserve (e) {
				console.log(e, '点击确认添加蓝色按钮');
				console.log(this.radioValue, '-------------------this.radioValue-----------------')
				if (JSON.stringify(this.radioValue) === "{}") { // 空提示
					uni.showToast({
						title: this.tips,
						icon: 'none',
						duration: 500
					});
					return
				}
				this.$emit('tap-PreserveBotttomFixed');
				this.$emit('tap-Preserve', this.radioValue);
			},
			// 点击picker取消按钮
			tapPickerCancel (e) {
				console.log(e, '点击picker取消按钮');
				this.$emit('tap-Cancel');
			},
			// 点击picker确定按钮
			tapPickerPreserve (e) {
				console.log(e, '点击picker确定按钮');
				if (JSON.stringify(this.radioValue) === "{}") { // 空提示
					uni.showToast({
						title: this.tips,
						icon: 'none',
						duration: 500
					});
					return
				}
				this.$emit('tap-Preserve', this.radioValue);
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
		line-height: 100upx;
	}
</style>
