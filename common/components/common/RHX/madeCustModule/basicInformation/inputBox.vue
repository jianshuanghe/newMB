<!-- 实例
 <inputBox
 	:value="valueOne"
 	:type="typeOne"
 	:isPassword='false'
 	:placeholder="placeholderOne"
 	:placeholderStyle="placeholderStyleOne"
 	:placeholderClass="placeholderClassOne"
 	:disabled='false'
 	cursorSpacing=""
 	:focus="focusOne"
 	confirmType=""
 	confirmHold=""
 	:cursor="cursorOne"
 	:adjustPosition="true"
 	:maxlength="maxlengthOne"
 	:inputTAlign='tTAlignOne'
 	:inputWidth="tWidthOne"
 	:inputHeight="tHeightOne"
 	:inputPadding="tPaddingOne"
 	:inputBG="tBGOne"
 	:inputBorder="tBorderOne"
 	:inputBStyle="tBStyleOne"
 	@tap-Input='tapInput'
 ></inputBox>
 -->
<template>
	<div class="inputBox-content">
		<div class="inputBox" :style='{background: inputBGs,border: inputBorders,borderStyle: inputBStyles, margin: inputMargin}'>
			<input
				:class=" inputLineYShow === true || inputSortShow === true ? 'mainInput1' : 'mainInput'" 
				:value="value" 
				:type="type" 
				:password="isPassword" 
				:placeholder='placeholder'
				:placeholder-style='placeholderStyle'
				:placeholder-class='placeholderClass'
				:disabled='disabled'
				:cursor-spacing='cursorSpacing'
				:focus='focus'
				:confirm-type='confirmType'
				:confirm-hold='confirmHold'
				:cursor='cursor'
				:adjust-position='adjustPosition'
				:maxlength="maxlength" 
				:style='{width: inputWidth, height:inputHeight , color:inputColor, fontSize: inputFontSize, lineHeight: inputLineHeight, textAlign: inputTAlign, padding: inputPadding}'
				@input="onInput"
				@focus='onFocus'
				@blur='onBlur'
				@confirm='onConfirm'
			/>
			<div class="line" v-if='inputLine' :style="inputLineStyle"></div>
			<div class="lineYInput" v-if='inputLineYShow'></div>
			<div class="sort" v-if='inputSortShow'>{{indexNum + 1}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
		},
		props: [
			'value',
			'type',
			'isPassword',
			'placeholder',
			'placeholderStyle',
			'placeholderClass',
			'disabled',
			'cursorSpacing',
			'focus',
			'confirmType',
			'confirmHold',
			'cursor',
			'adjustPosition',
			'maxlength',
			'inputColor',
			'inputFontSize',
			'inputLineHeight',
			'inputLine',
			'inputWidth',
			'inputHeight',
			'inputTAlign',
			'inputPadding',
			'inputBG',
			'inputBorder',
			'inputBStyle',
			'indexNum',
			'inputBoxMargin',
			'inputLineStyle',
			'inputLineYShow',
			'inputSortShow',
			],
		data() {
			return {
				inputMargin: '0px',
				inputBGs: '#FFFFFF', // 默认
				inputBorders: '1px solid #E2E2E2', // 默认
				inputBStyles: '', // 默认
				valueText: this.value
			};
		},
		created() {
			if(this.inputBoxMargin){
				this.inputMargin = this.inputBoxMargin;
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
				console.log(e, 'input返回值');
			},
			// 输入框聚焦时触发
			onFocus(e) {
				if (this.disabled === true) {
					return
				}
				console.log(e, 'input返回值');
				if(!this.inputBoxMargin) { // 如果不存在用户自定义样式
					this.inputMargin = '';
					this.inputBGs = this.inputBG;
					this.inputBorders = this.inputBorder;
					this.inputBStyles = this.inputBStyle;
				}
			},
			// 输入框失去焦点时触发
			onBlur(e) {
				console.log(e, 'input返回值');
				this.valueText = e.detail.value;
				this.$emit('tap-Input',this.valueText);
				if(!this.inputBoxMargin) { // 如果不存在用户自定义样式
					this.inputMargin = '0px';
					this.inputBGs = '#FFFFFF';
					this.inputBorders = '1px solid #E2E2E2';
					this.inputBStyles = '';
				}
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			},
			// 点击完成按钮时触发
			onConfirm(e) {
				console.log(e, 'input返回值');
				this.valueText = e.detail.value;
				this.$emit('tap-Input',this.valueText);
				if(!this.inputBoxMargin) { // 如果不存在用户自定义样式
					this.inputMargin = '0px';
					this.inputBGs = '#FFFFFF';
					this.inputBorders = '1px solid #E2E2E2';
					this.inputBStyles = '';
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
	.inputBox-content{
		position: relative;
		width: 100%;
	}
	.inputBox{
		position: relative;
		width: 100%;
		border: 1px solid #E2E2E2;
	}
	.mainInput{
		position: relative;
		width: 100%;
	}
	.mainInput1{
		position: relative;
		width: 100%;
		padding-left: 4vw;
	}
	.lineYInput{
		position: absolute;
		left: 2vw;
		top: 2.6vw;
		width: 6upx;
		height: 28upx;
		background: #02C2A2;
	}
	.sort{
		position: absolute;
		left: 2vw;
		top: 2.6vw;
		width: 28upx;
		height: 28upx;
		font-family: PingFangSC-Regular;
		font-size: 20upx;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 28upx;
		text-align: center;
		background: #02C2A2;
		border-radius: 50%;
	}
</style>
