<!-- 实例
 <textareaBox
 :disabled='false'
 :value="valueTwo"
 :type="typeTwo"
 :placeholder="placeholderTwo"
 :placeholderStyle="placeholderStyleTwo"
 :placeholderClass="placeholderClassTwo"
 :focus="focusTwo"
 :cursor="cursorTwo"
 adjustPosition="true"
 :maxlength="maxlengthTwo"
 :tTTAlign='tTAlignTwo'
 :tTWidth="tWidthTwo"
 :tTHeight="tHeightTwo"
 :tTMinHeight='tMinHeightTwo'
 :tTPadding="tPaddingTwo"
 :tTBG="tBGTwo"
 :tTBorder="tBorderTwo"
 :tTBStyle="tBStyleTwo"
 :maxNumShow='tMaxNumShow'  // 是否显示可输入最多字数组件
 @tab-TextArea='tabTextArea' // 点击input触发相关操作返回的值
 ></textareaBox>
 -->
<template>
	<div class="textAarea-box">
		<view class="Textarea" :style='{background: tTBGs, height:tTHeight, border: tTBorders,borderStyle: tTBStyles, margin: tTMargins}'>
			<textarea 
			class="mainTextarea"
			:value="valueText" 
			:type="type" 
			:placeholder='placeholder'
			:placeholder-style='placeholderStyle'
			:placeholder-class='placeholderClass'
			:disabled='disabled'
			:focus='focus'
			:cursor='cursor'
			:adjust-position='adjustPosition'
			:maxlength="maxlength" 
			:auto-height='autoHeight'
			:style='{width: tTWidth, minHeight:tTMinHeight, color:tTColor, height:tTHeight , fontSize:tTFontSize, lineHeight:tTLineHeight, textAlign: tTTAlign, margin:tTMargin, padding: tTPadding}'
			@input="onInput"
			@focus='onFocus'
			@blur='onBlur'
			@confirm='onConfirm'/>
			<div class="line" v-if="maxNumShow"></div>
			<div class="maxNum" v-if="maxNumShow">
				<view class="info" v-if='valueText.length <= 0' :style="{color: '#d2d2d2'}">{{valueText.length}}/{{maxlength}}</view>
				<view class="info" v-if='valueText.length > 0 && valueText.length < maxlength' :style="{color: tTColor}">{{valueText.length}}/{{maxlength}}</view>
				<view class="info" v-if='valueText.length === maxlength' :style="{color: '#FF4D6A'}">{{valueText.length}}/{{maxlength}}</view>
			</div>
			
		</view>
	</div>
</template>

<script>
	export default {
		components: {
		},
		props: [
			'value',
			'type',
			'placeholder',
			'placeholderStyle',
			'placeholderClass',
			'disabled',
			'focus',
			'cursor',
			'adjustPosition',
			'maxlength',
			'tTColor',
			'tTWidth',
			'tTHeight',
			'tTMinHeight',
			'tTFontSize',
			'tTLineHeight',
			'autoHeight',
			'tTTAlign',
			'tTPadding',
			'tTMargin',
			'tTBG',
			'tTBorder',
			'tTBStyle',
			'maxNumShow',
			'tTBoxMargin'
			],
		data() {
			return {
				tTMargins: '1px',
				tTBGs: '', // 默认
				tTBorders: '', // 默认
				tTBStyles: '', // 默认
				valueText: this.value
			};
		},
		created() {
			if(this.tTBoxMargin){
				this.tTMargins = this.tTBoxMargin;
			}
		},
		watch: {
			value: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听valueText变化---------------------------------------');
					this.valueText = a;
				},
				deep: true
			}
		},
		methods: {
			// 当键盘输入时，触发input事件
			onInput(e) {
				console.log(e, 'textAarea返回值');
				this.valueText = e.detail.value;
			},
			// 输入框聚焦时触发
			onFocus(e) {
				console.log(e, '触发焦点，进入编辑模式');
				if(!this.tTBoxMargin) { // 如果不存在用户自定义样式
					this.tTMargins = '';
					this.tTBGs = this.tTBG;
					this.tTBorders = this.tTBorder;
					this.tTBStyles = this.tTBStyle;
				}
			},
			// 输入框失去焦点时触发
			onBlur(e) {
				console.log(e, 'textAarea返回值');
				this.valueText = e.detail.value;
				this.$emit('tab-TextArea',this.valueText);
				console.log(e, '失去焦点，进入预览模式');
				if(!this.tTBoxMargin) { // 如果不存在用户自定义样式
					this.tTMargins = '1px';
					this.tTBGs = '';
					this.tTBorders = '';
					this.tTBStyles = '';
				}
				uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
				});
			},
			// 点击完成按钮时触发
			onConfirm(e) {
				console.log(e, 'textAarea返回值');
				this.valueText = e.detail.value;
				this.$emit('tab-TextArea',this.valueText);
				console.log(e, '失去焦点，进入预览模式');
				if(!this.tTBoxMargin) { // 如果不存在用户自定义样式
					this.tTMargins = '1px';
					this.tTBGs = '';
					this.tTBorders = '';
					this.tTBStyles = '';
				}
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			},
		}
	};
</script>

<style>
	.textAarea-box{
		position: relative;
		width: 100%;
	}
	.Textarea{
		position: relative;
	}
	.mainTextarea{
		position: relative;
		width: 100%;
	}
	.info{
		position: absolute;
		top: 60%;
		right: 0;
	}
	uni-textarea {
		min-height: 10vw;
	}
	.maxNum{
		top: 42px;
		position: absolute;
		right: 0;
	}
</style>
