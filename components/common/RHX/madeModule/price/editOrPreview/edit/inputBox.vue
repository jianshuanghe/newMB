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
		<div class="inputBox" 
		:style='{background: inputBGs,border: inputBorders,borderStyle: inputBStyles, margin: inputMargin}'
		>
			<input
				:class=" inputLineYShow === true || inputSortShow === true ? 'mainInput1' : 'mainInput'" 
				:value="valueText === 0 ? null : valueText" 
				:type="type" 
				:password="isPassword" 
				:placeholder='placeholder'
				:placeholder-style='placeholderStyle'
				:placeholder-class='placeholderClass'
				:disabled='disableds'
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
			'inputType',
			'dataList'
			],
		data() {
			return {
				dataLists: this.dataList ? this.dataList.dataList : null,
				disableds: false,
				inputMargin: '1px',
				inputBGs: '', // 默认
				inputBorders: '', // 默认
				inputBStyles: '', // 默认
				valueText: this.value
			};
		},
		created() {
			if (this.disabled === true && this.inputType === 2) {
				console.log('当前触发最大起批量！');
				this.disableds = true;
				return
			};
			if (this.inputType) {
				if(this.inputType === 1 || this.inputType === 3) {
					this.inputBorders = this.inputBorder;
					this.inputMargin = '';
				}
			};
		},
		watch: {
			value: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听valueText变化---------------------------------------');
					this.valueText = a;
				},
				deep: true
			},
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听dataList变化---------------------------------------');
					this.dataLists = a.dataList;
					this.dataLists.map((items, index)=>{
						if ( this.indexNum === Number(index)) {
							if (this.indexNum !== 0){
								if (items.minCount >= this.dataLists[index - 1].minCount + 2) {
									items.errorStr = false;
									this.dataLists[index - 1].maxCount = this.valueText -1;
								} else {
									items.errorStr = true;
								}
							} else {
								console.log('第一项')
								if (items.minCount !== 0) {
									items.errorStr = false;
								} else {
									console.log('+++++++++++++++');
									items.errorStr = true;
								}
							}
							this.$emit('tap-MinCountStr',this.dataLists);
						}
					})
				},
				deep: true
			},
		},
		methods: {
			// 当键盘输入时，触发input事件
			onInput(e) {
				console.log(e, 'input返回值');
			},
			// 输入框聚焦时触发
			onFocus(e) {
				if (this.disabled === true && this.inputType === 2) {
					console.log('当前触发最大起批量！');
					this.disableds = true;
					return
				} else if (this.disabled === true && this.inputType === 1) {
					console.log('触发最下起批量！');
				}
			},
			// 输入框失去焦点时触发
			onBlur(e) {
				console.log(e, 'input返回值');
				e.detail.value === ''? this.valueText = 0 : this.valueText = Number(e.detail.value);
				this.dataLists.map((items, index)=>{
					if ( this.indexNum === Number(index)) {
						if (this.indexNum !== 0){
							if (this.valueText >= this.dataLists[index - 1].minCount + 2) {
								items.minCount = this.valueText;
								items.errorStr = false;
								this.dataLists[index - 1].maxCount = this.valueText -1;
							} else {
								items.errorStr = true;
							}
							this.$emit('tap-MinCountStr',this.dataLists);
						} else {
							console.log('第一项')
							items.minCount = this.valueText;
							if (this.valueText !== 0) {
								items.errorStr = false;
							} else {
								console.log('+++++++++++++++');
								items.errorStr = true;
							}
							this.$emit('tap-MinCountStr',this.dataLists);
						}
					}
				})
			},
			// 点击完成按钮时触发
			onConfirm(e) {
				console.log(e, 'input返回值');
				e.detail.value === ''? this.valueText = 0 : this.valueText = Number(e.detail.value);
				this.dataLists.map((items, index)=>{
					if ( this.indexNum === Number(index)) {
						if (this.indexNum !== 0){
							if (this.valueText >= this.dataLists[index - 1].minCount + 2) {
								items.minCount = this.valueText;
								items.errorStr = false;
								this.dataLists[index - 1].maxCount = this.valueText -1;
							} else {
								items.errorStr = true;
							}
							this.$emit('tap-MinCountStr',this.dataLists);
						} else {
							console.log('第一项')
							items.minCount = this.valueText;
							if (this.valueText !== 0) {
								items.errorStr = false;
							} else {
								console.log('+++++++++++++++');
								items.errorStr = true;
							}
							this.$emit('tap-MinCountStr',this.dataLists);
						}
					}
				})
			}
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
		border: 1px solid  #E2E2E2;
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
