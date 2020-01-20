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
					if ( a !== b) {
						if (this.dataLists) {
							this.checkPriceData();
						}
					}
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
					this.checkPriceData();
				}
			},
			// 输入框失去焦点时触发
			onBlur(e) {
				console.log(e, 'input返回值');
				this.valueText = e.detail.value;
				if (!this.inputType) {
					if(!this.inputBoxMargin) { // 如果不存在用户自定义样式
						this.inputMargin = '1px';
						this.inputBGs = '';
						this.inputBorders = '';
						this.inputBStyles = '';
					}
				}
				if (this.indexNum >= 0) { // 数组形式的需要参会index，当前操作的子项 ：例如定制模板里的价格明细
					if (this.valueText !== '') {
						this.dataLists.map((item, index)=>{
							if (this.indexNum === index) {
								item.minCount = Number(this.valueText);
								this.$emit('tap-UpData',this.dataLists);
							}
						})
						this.$emit('tap-Input',[Number(this.valueText), this.indexNum]);
						this.checkPriceData();
						return
					}
				}
				this.$emit('tap-Input',this.valueText);
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			},
			// 点击完成按钮时触发
			onConfirm(e) {
				console.log(e, 'input返回值');
				this.valueText = e.detail.value;
				if (!this.inputType) {
					if(!this.inputBoxMargin) { // 如果不存在用户自定义样式
						this.inputMargin = '1px';
						this.inputBGs = '';
						this.inputBorders = '';
						this.inputBStyles = '';
					}
				}
				if (this.indexNum >= 0) { // 数组形式的需要参会index，当前操作的子项 ：例如定制模板里的价格明细
					if (this.valueText !== '') {
						// this.checkData('onBlur');
						this.$emit('tap-Input',[Number(this.valueText), this.indexNum]);
						this.checkPriceData();
						return
					}
				}
				
				this.$emit('tap-Input',this.valueText);
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			},
			// 只要数据发生更改，或者触发对焦、失去焦点、确认都执行如下算法，深入计算
			// 1、对焦：用户只要触发列表中最小起批量都要校验上一项最小起批量是否为空（除第一项）
			// 2、输入行为不考虑
			// 3、失去焦点：不管用户是重新编辑还是首次输入，都需要从第一项去逐层遍历规则入下
			//       区分是否存在上下层，即三种情况
			//      a、第一层，用户输入完，校验必须大于0 否的话， 当前层 errorStr = true
			//      b、第二层，用户输入完，校验是否大于等于第一层最小值+2，否的话，当前层。errorStr = true
			//      c、存在下一层， 用户输入完， 校验是否小于等于下一层-1, 否的话， 下一层。errorStr = true
			checkPriceData () {
				// type: 代表用户触发的行为 1，对焦， 2，失去焦点
				// 根据以上逻辑，需要对数据分层 :1只有一层数据， 2只有两层数据，3大于两层数据
				let LayerNum = Number(this.dataLists.length); // 先确定共有几级
				let priceData = this.dataLists;
				if (LayerNum === 1) { // 有一层数据
					console.log('有一层数据');
					console.log(priceData[0].minCount, '打印第一项最小起批量');
					if (priceData[0].minCount > 0) { // 第一项大于0
						priceData[0].errorStr = false;
					} else if (priceData[0].minCount < 1) { // 第一项小于1
						priceData[0].errorStr = true;
					};
					// 已下统一处理数据
					console.log(priceData, '有一层数据-------------对焦');
					// ？？？？？？？？？？？？？
					this.$emit('tap-UpData',priceData);
					// // 对焦校验
					// if (type === 1) {
						
					// } else if (type === 2) {
						
					// }
				} else if (LayerNum === 2) { // 只有两层数据
					console.log('只有两层数据');
					let oneMinCount = Number(priceData[0].minCount); // 第一层最小起批量
					let twoMinCount = priceData[1].minCount; // 第二层最小起批量
					if (this.indexNum === 0) { // 对焦的是第一层
						if (oneMinCount > 0) { // 第一项大于0
							priceData[0].errorStr = false;
							// 已下校验第二层
							if (twoMinCount > 0) { // 如果第二层数据大于0状态， 需要比较第一层和第二层
								if (twoMinCount >= oneMinCount + 2) { // 如果第二层数据符合规则
									priceData[1].errorStr = false;
								} else { // 第二层不符合规则
									priceData[1].errorStr = true;
								}
								this.$emit('tap-UpData',priceData);
							} else if (twoMinCount === 0) { // 第二层没有添加数据
								priceData[1].errorStr = false;
								this.$emit('tap-UpData',priceData);
							}
						} else if (oneMinCount < 1) { // 第一项小于1
							priceData[0].errorStr = true;
							this.$emit('tap-UpData',priceData);
						};
					} else if (this.indexNum === 2) { // 对焦的是第二层
						if (twoMinCount > 0) {// 如果第二层数据大于0状态， 需要比较第一层和第二层
							if (oneMinCount > 0) { // 先去校验第一层是否大于0，再去判断第二层是否符合规则
								if (twoMinCount >= oneMinCount + 2) { // 如果第二层数据符合规则
									priceData[1].errorStr = false;
								} else { // 第二层不符合规则
									priceData[1].errorStr = true;
								}
								this.$emit('tap-UpData',priceData);
							} else { // 第一层不符合规则
								priceData[0].errorStr = true;
								this.$emit('tap-UpData',priceData);
							}
						} else if (twoMinCount === 0) { // 第二层没有添加数据 去校验底层是否符合规则
							priceData[1].errorStr = false;
							this.$emit('tap-UpData',priceData);
							if (oneMinCount > 0) { // 第一层符合规则 
								priceData[0].errorStr = false;
							} else { // 第一层不符合规则
								priceData[0].errorStr = true;
							}
							this.$emit('tap-UpData',priceData);
						}
					}
					// 已下统一处理数据
					console.log(priceData, '有一层数据-------------对焦');
					// ？？？？？？？？？？？？？
				} else if (LayerNum > 2) { // 大于两层数据
					console.log('大于两层数据');
					// 已下方法需要依次往上计算
					for (let i in priceData) {
						// 1、先去校验以上是否为空
						// if (Number(i === 0)) { // 第一项
							
						// } else if (i === priceData.length + 1){ // 最后一项
							
						// } else{ // 中间项
							
						// }
						if (i < priceData.length) {
							if (i === 0) {
								if (priceData[0].minCount > 0) { // 第一项大于0
									priceData[0].errorStr = false;
								} else if (priceData[0].minCount < 1) { // 第一项小于1
									priceData[0].errorStr = true;
								};
							}
							if (priceData[i].minCount === 0) { // 只要存在为空项，校验不通过
								if (priceData[0].minCount === 0) {
									priceData[i].errorStr = true;
									this.$emit('tap-UpData',priceData);
								} else if (priceData[0].minCount > 0){
									if (i !== 1) {
										priceData[i].errorStr = true;
									} else {
										priceData[i].errorStr = false;
									};
									this.$emit('tap-UpData',priceData);
								}
								
							} else {
								priceData[i].errorStr = false; // 暂且通过，然后校验 是否符合数据规则
								this.$emit('tap-UpData',priceData);
								let num = Number(i) + 1;
								console.log(priceData[i].minCount, priceData[i].minCount, '++++++++++++++++++item.minCount++++++++++++++++')
								console.log(i, num, '---------------index, num--------------');
								if (priceData[i].minCount + 2 <= priceData[num].minCount) {
									// 如果当前最小值+2 小于等于 下一项的最小值 并且在数组范围内, 此项符合规则，下一项符合规则
									console.log(priceData[i].minCount, priceData[num].minCount, '------------------priceData[index + 1].minCount-------------------')
									priceData[i].errorStr = false;
									priceData[num].errorStr = false;
									this.$emit('tap-UpData',priceData);
								} else if (priceData[i].minCount + 2 > priceData[num].minCount) {
									// 如果当前最小值+2 大于了下一项最小值  并且在数组范围内, 此项符合规则，下一项不符合规则 
									console.log(priceData[i].minCount, priceData[num].minCount, '------------------priceData[index + 1].minCount-------------------')
									priceData[i].errorStr = false;
									priceData[num].errorStr = true;
									this.$emit('tap-UpData',priceData);
									return
								}
							}
						}
						
					}
					// priceData.map((item, index)=>{
					// 	console.log(index, this.indexNum, '------------------index, this.indexNum-------------------')
					// 	// 1、先去校验以上是否为空
					// 	if (item.minCount === 0 && index < this.indexNum) { // 只要存在为空项，校验不通过
					// 		item.errorStr = true;
					// 		this.$emit('tap-UpData',priceData);
					// 	} else {
					// 		item.errorStr = false; // 暂且通过，然后校验 是否符合数据规则
					// 		// this.$emit('tap-UpData',priceData);
					// 		console.log(item.minCount, priceData[index].minCount, '++++++++++++++++++item.minCount++++++++++++++++')
					// 		let num = Number(index + 1);
					// 		if (this.indexNum === index && num < priceData.length + 1) {
					// 			console.log(index, num, '---------------index, num--------------');
					// 			if ((item.minCount + 2 <= priceData[num].minCount) && (index < priceData.length + 1)) {
					// 				// 如果当前最小值+2 小于等于 下一项的最小值 并且在数组范围内, 此项符合规则，下一项符合规则
					// 				console.log(priceData[index].minCount, '------------------priceData[index + 1].minCount-------------------')
					// 				item.errorStr = false;
					// 				priceData[num].errorStr = false;
					// 				this.$emit('tap-UpData',priceData);
					// 			} else if ((item.minCount + 2 > priceData[num].minCount) && (index < priceData.length + 1)) {
					// 				// 如果当前最小值+2 大于了下一项最小值  并且在数组范围内, 此项符合规则，下一项不符合规则 
					// 				console.log(priceData[index].minCount, '------------------priceData[index + 1].minCount-------------------')
					// 				item.errorStr = false;
					// 				priceData[num].errorStr = true;
					// 				this.$emit('tap-UpData',priceData);
					// 				return
					// 			}
					// 		}
					// 	}
					// })
					// 大于两层数据时，需要分别校验当前点击项的上边、下边各项
					// 首先先要判断当前点击项处于数组的什么位置，然后考虑是否需要分层, 因为在对焦时会校验以上数据不能为空
					// if (LayerNum / (this.indexNum + 1) === 1) { // 当前点击位置处于最后面
					// 	console.log('当前点击位置处于最后面');
						
					// } else if (LayerNum / (this.indexNum + 1) === LayerNum) { // 点击的是第一项
					// 	console.log('点击的是第一项');
						
					// } else { // 触发的中间某项
					// 	console.log('触发的中间某项');
						
					// }
				}
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
