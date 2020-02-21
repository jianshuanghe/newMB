<!-- 实例
 <rTitle
 :disabled='false' // 是否禁用
 :dataList='dataList' // 传进入的数组
 :itemsData='dataList[0]' // 用来深拷贝的数组第一项
 :indexNum='index' // index
 -------------------------------------------------------------------------------------------
 :isShowOne='true' // 是否展示一级标题
  keyNameOne='content' // 传进去的键值名称
 valueOne="一级标题" // 标题双向绑定的数据
 typeOne="text"  // 标题的类型
 keyNameOne='content' // 双向绑定的字段名
 placeholderOne='placeholder' // 默认提示文字
 placeholderStyleOne='placeholderStyle' // 默认提示文字的样式
 placeholderClassOne='placeholderClass' // 默认提示文字的类名
 focusOne='focus' // 是否对焦
 cursorOne='cursor' // 指定focus时的光标位置
 adjustPositionOne='adjustPosition' // 指定focus时的光标位置
 maxlengthOne="maxlength" // 最大输入长度，设置为 -1 的时候不限制最大长度
 tTAlignOne='center' // 文字居中
 tWidthOne="702upx" // 输入框宽度
 tHeightOne="56upx" // 输入框高度
 tPaddingOne="10upx" // 输入框填充
 tBGOne="rgba(212, 253, 247, 0.21)" // 背景颜色
 tBorderOne="1px solid #02C2A2" // 输入框边框
 tBStyleOne="dashed" // 边框类型，
 --------------------------------------------------------------------------------------------
 已下是二级标题参数 【参数说明同上】
 :isShowTwo='true'
 valueTwo='二级标题'
 keyNameTwo='content' // 传进去的键值名称
 typeTwo="text" 
 keyNameTwo='content' // 双向绑定的字段名
 placeholderTwo='placeholder'
 placeholderStyleTwo='placeholderStyle'
 placeholderClassTwo='placeholderClass'
 focusTwo='focus'
 cursorTwo='cursor'
 adjustPositionTwo='adjustPosition'
 :tMaxNumShow='true' // 是否显示可输入最多字数组件
 :maxlengthTwo="100"
 tTAlignTwo='justify'
 tWidthTwo="702upx"
 tHeightTwo=""
 tMinHeightTwo='100upx'
 tPaddingTwo="10upx"
 tBGTwo="rgba(212, 253, 247, 0.21)"
 tBorderTwo="1px solid #02C2A2"
 tBStyleTwo="dashed"
 --------------------------------------------------------------------------------------------
 @tap-Title='tabTitle'//点击标题返回的值 e[0]:返回一级标题， e[1]:返回二级标题
 ></rTitle>
 -->
<template>
	<div class="rTitle-content">
		<!-- 一级标题 -->
		<div class="rTitle" v-if='isShowOne' :style="{padding: rPadding,fontWeight: rfontWeight,background:rbackground,fontFamily:rfontFamily}">
			<inputBox
				v-if='isInputShow'
				:styleType='styleType'
				:value="valueOneText"
				:type="typeOne"
				:isPassword='false'
				:placeholder="placeholderOne"
				:placeholderStyle="placeholderStyleOne"
				:placeholderClass="placeholderClassOne"
				:disabled='disabled'
				:focus="focusOne"
				confirmType=""
				confirmHold=""
				:cursor="cursorOne"
				:adjustPosition="true"
				:maxlength="maxlengthOne"
				:inputColor='tColorOne'
				:inputFontSize='tFontSizeOne'
				:inputLineHeight='tLineHeightOne'
				:inputTAlign='tTAlignOne'
				:inputWidth="tWidthOne"
				:inputHeight="tHeightOne"
				:inputPadding="tPaddingOne"
				:inputBG="tBGOne"
				:inputBorder="tBorderOne"
				:inputBStyle="tBStyleOne"
				:inputLineYShow='tLineYSHow'
				:inputSortShow='tSortSHow'
				:indexNum='indexNum'
				@tap-Input='tapInput'
			></inputBox>
		</div>
		
		<!-- 二级标题 -->
		<div class="rTitleTwo"  v-if='isShowTwo' :style="{padding: rPaddingTwo,fontFamily:rfontFamilyTwo,fontWeight: rfontWeightTwo}">
			<textareaBox
			v-if='isTextAreaShow'
			:styleType='styleType'
			:disabled='disabled'
			:value="valueTwoText"
			:type="typeTwo"
			:placeholder="placeholderTwo"
			:placeholderStyle="placeholderStyleTwo"
			:placeholderClass="placeholderClassTwo"
			:focus="focusTwo"
			:cursor="cursorTwo"
			:adjustPosition="true"
			:maxlength="maxlengthTwo"
			:tTColor="tColorTwo === undefined ? '#5D5D5D' : tColorTwo" 
			:autoHeight='autoHeightTwo'
			:tTTAlign='tTAlignTwo'
			:tTWidth="tWidthTwo"
			:tTHeight="tHeightTwo"
			:tTMinHeight='tMinHeightTwo'
			:tTFontSize='tFontSizeTwo'
			:tTLineHeight='tLineHeightTwo'
			:tTPadding="tPaddingTwo"
			:tTMargin='tTMarginTwo'
			:tTBG="tBGTwo"
			:tTBorder="tBorderTwo"
			:tTBStyle="tBStyleTwo"
			:maxNumShow='tMaxNumShow'
			@tab-TextArea='tabTextArea'
			></textareaBox>
		</div>
	</div>
</template>

<script>
	import inputBox from '@/components/common/RHX/inputBox/inputBox';
	import textareaBox from '@/components/common/RHX/textareaBox/textareaBox';
	export default {
		components: {
			inputBox,
			textareaBox
		},
		props: [
			'styleType',
			'dataList',
			'itemsData',
			'rPadding',
			'indexNum',
			'disabled',
			'isShowOne',
			'valueOne',
			'keyNameOne',
			'typeOne',
			'rPaddingTwo',
			'placeholderOne',
			'placeholderStyleOne',
			'placeholderClassOne',
			'focusOne',
			'cursorOne',
			'adjustPositionOne',
			'maxlengthOne',
			'tColorOne',
			'tFontSizeOne',
			'tLineHeightOne',
			'tTAlignOne',
			'tWidthOne',
			'tHeightOne',
			'tPaddingOne',
			'tBGOne',
			'tBorderOne',
			'tBStyleOne',
			'tLineYSHow',
			'tSortSHow',
			'isShowTwo',
			'valueTwo',
			'keyNameTwo',
			'typeTwo',
			'placeholderTwo',
			'placeholderStyleTwo',
			'placeholderClassTwo',
			'focusTwo',
			'cursorTwo',
			'adjustPositionTwo',
			'tMaxNumShow',
			'maxlengthTwo',
			'tFontSizeTwo',
			'tColorTwo',
			'autoHeightTwo',
			'tTAlignTwo',
			'tWidthTwo',
			'tHeightTwo',
			'tPaddingTwo',
			'tTMarginTwo',
			'tLineHeightTwo',
			'tBGTwo',
			'tBorderTwo',
			'tBStyleTwo',
			'tMinHeightTwo',
			'rfontWeight',
			'rbackground',
			'rfontFamily',
			'rfontFamilyTwo',
			'rfontWeightTwo'],
		data() {
			return {
				isInputShow: true, // 是否展示当前组件
				isTextAreaShow: true,// 是否展示当前组件
				valueOneText: this.valueOne,
				valueTwoText: this.valueTwo,
				dataLists: this.dataList
			};
		},
		created() {
			this.inputOrTextAreaShow(this.disabled);
			console.log(this.tColorTwo, '-------------tColorTwo------------')
		},
		watch: {
			valueOne: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听valueOne变化---------------------------------------');
					this.valueOneText = a;
				},
				deep: true
			},
			valueTwo: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听valueTwo变化---------------------------------------');
					this.valueTwoText = a;
				},
				deep: true
			},
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------dataList---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			},
			disabled: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听但图片变化---------------------------------------');
					this.inputOrTextAreaShow(a);
				},
				deep: true
			},
		},
		methods: {
			inputOrTextAreaShow(e) {
				console.log('此方法根据disabled判断当前输入框或者输入区书否显示');
				if (e === true && this.valueOneText === '') { // 如果在预览状态，且输入框没有的状态，此模块不显示
					this.isInputShow = false;
				} else {
					this.isInputShow = true;
				};
				if (e === true && this.valueTwoText === '') { // 如果在预览状态，且输入框没有的状态，此模块不显示
					this.isTextAreaShow = false;
				} else {
					this.isTextAreaShow = true;
				}
			},
			tapInput(e) {
				console.log(e, '一级标题操作返回数据');
				this.valueOneText = e; // 赋值一级标题内容
				console.log(this.valueOneText, this.valueTwoText, '----------------this.valueOneText, this.valueTwoText---------------');
				this.$emit('tap-index',this.indexNum);
				this.$emit('tap-Title',[this.valueOneText, this.valueTwoText]);
				
			},
			tabTextArea(e){
				console.log(e, '二级标题操作返回数据');
				this.valueTwoText = e; // 赋值二级标题内容
				this.$emit('tap-index',this.indexNum);
				console.log(this.valueOneText, this.valueTwoText, '----------------this.valueOneText, this.valueTwoText---------------');
				this.$emit('tap-Title',[this.valueOneText, this.valueTwoText]);
			}
		}
	};
</script>

<style>
	.rTitle-content{
		position: relative;
		width: 100%;
	}
	.rTitle{
		position: relative;
		width: 100%;
	}
	.rTitleTwo{
		position: relative;
		width: 100%;
	}
</style>

