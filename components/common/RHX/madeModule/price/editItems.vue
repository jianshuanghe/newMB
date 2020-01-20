<template>
	<div class="editItems-content">
		<div class="editItems">
			<!-- 编辑起批量 -->
			<div class="item-top">
				<div class="text1 left">起 批 量 ：</div>
				<div class="input-box left">
					<div class="num-box">
						<div class="input2 left">
							<inputBox
								:value="items.minCount !== 0 ? items.minCount : ''"
								type="number"
								placeholder="请输入"
								placeholderStyle="color: #BDBDBD"
								:disabled='index === 0 ? false : true'
								:adjustPosition="true"
								:maxlength="10"
								inputTAlign='center'
								inputWidth="100%"
								inputHeight="10.66vw"
								inputPadding="0 1vw 0 1vw"
								inputBorder="1px solid #02C2A2"
								:inputType='1'
								:indexNum='index'
								:dataList='dataList'
								@tap-UpData='tapUpData'
								@tap-Input='tapMinCountStr'
							></inputBox>
						</div>
						<div class="symbol left">～</div>
						<div class="input2 left">
							<inputBox
								value=""
								type="number"
								:placeholder="items.maxCount !== 0 ? String(items.maxCount) : '--'"
								placeholderStyle="color: #BDBDBD"
								:disabled='true'
								:adjustPosition="true"
								:maxlength="10"
								inputTAlign='center'
								inputWidth="100%"
								inputHeight="10.66vw"
								inputPadding="0 1vw 0 1vw"
								inputBorder="1px solid #E2E2E2"
								:inputType='2'
								:indexNum='index'
							></inputBox>
						</div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="unit left">{{dataLists.unit !== '' ? dataLists.unit : '请填写单位'}}</div>
				<div class="clear"></div>
				<!-- 错误提示 -->
				<div class="errorBox" v-if='index === 0'>
					<div class="typeError" v-if="(items.minCount === 0) && items.errorStr === true">此项最小起批量须大于1！</div>
				</div>
				<div class="errorBox" v-if='index > 0'>
					<div class="typeError" v-if="(items.minCount === 0 || items.minCount === '') && items.errorStr === true">此项不能为空</div>
					<div class="typeError" v-if="(items.minCount !== 0 && items.minCount !== '') && items.errorStr === true">输入的数字至少应大于等于【上一级的最小起批量+2】</div>
				</div>
			</div>
			<!-- 编辑商品价格 -->
			<div class="item-bottom">
				<div class="text1 left">商品单价：</div>
				<div class="input-box left">
					<div class="num-box">
						<div class="input3">
							<inputBox
								:value="items.money !== 0 ? items.money : ''"
								type="number"
								:placeholder="'请输入商品单价(如：'  + (index + 1) * 10 + ')'"
								placeholderStyle="color: #BDBDBD"
								:disabled='false'
								:adjustPosition="true"
								:maxlength="8"
								inputTAlign='left'
								inputWidth="100%"
								inputHeight="10.66vw"
								inputPadding="0 1vw 0 1vw"
								inputBorder="1px solid #02C2A2"
								:inputType='3'
								:indexNum='index'
								@tap-Input='tapMoney'
							></inputBox>
						</div>
					</div>
				</div>
				<div class="unit left">元</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import inputBox from './inputBox';
	export default {
		components: {
			inputBox
		},
		props: [
			'disabled',
			'dataList',
			'index',
			'item'
		],
		data() {
			return {
				activeIndex: -1, // 记录当前操作的数组中的子项的index
				dataLists: this.dataList,
				items: this.item
			};
		},
		created() {
		},
		watch: {
			item: {
				handler(a, b) {
					console.log(a, b, '-----------监听但图片变化----------');
					this.items = a;
				},
				deep: true
			},
		},
		methods: {
			// 跟新数据
			tapUpData(e) {
				console.log(e, '跟新数据');
				this.$emit('tap-UpDataEditItems',e);
			},
			// 最小起批量
			tapMinCountStr(e) {
				console.log(e[0], e[1], '最小起批量');
				this.activeIndex = e[1];
				this.dataLists.dataList.map((item, index)=>{
					if(this.activeIndex === index) {
						if (item.errorStr === false) {
							item.minCount = e[0];
						}
						// 以下是计算上起批量逻辑
						// if (this.activeIndex === 0) {
						// 	console.log('修改的第一层最小起批量');
						// 	// 修改的第一层最小起批量
						// 	if (e[0] > 0) {
						// 		console.log('如果输入的值大于0，则赋值');
						// 		// 如果输入的值大于0，则赋值
						// 		item.minCount = e[0];
						// 		this.$emit('tap-EditItems',this.dataLists);
						// 	} else if (e[0] <= 0) {
						// 		console.log('如果输入的值小于等于0');
						// 		this.$emit('tap-EditItems',this.dataLists);
						// 		// 如果输入的值小于等于0
						// 		uni.showToast({
						// 			title: '最小起批量应该大于0！',
						// 			icon: 'none',
						// 			duration: 1000
						// 		});
						// 		return
						// 	}
						// } else if (this.activeIndex > 0 && this.activeIndex < this.dataLists.dataList.length + 1) {
						// 	console.log('如果当前的index大于0 且小于数组的最大长度＋1');
						// 	// 如果当前的index大于0 且小于数组的最大长度＋1
						// 	if (this.dataLists.dataList[this.activeIndex - 1].minCount === null || this.dataLists.dataList[this.activeIndex - 1].minCount === '') {
						// 		console.log('如果它的上一层最小起批量没有输入，则此层最小起批量不可输入');
						// 		// 如果它的上一层最小起批量没有输入，则此层最小起批量不可输入
						// 		this.$emit('tap-EditItems',this.dataLists);
						// 		uni.showToast({
						// 			title: '请先输入上面的最小起批量！',
						// 			icon: 'none',
						// 			duration: 1000
						// 		});
						// 		return
						// 	} else if (this.dataLists.dataList[this.activeIndex - 1].minCount !== null && this.dataLists.dataList[this.activeIndex - 1].minCount !== '') {
						// 		console.log('若果它的上一层已经输入了最小起批量');
						// 		// 若果它的上一层已经输入了最小起批量
						// 		if ((Number(e[0]) - 2) < this.dataLists.dataList[this.activeIndex - 1].minCount) {
						// 			console.log('如果，当前输入的值减去2小于上一层的最小值，提示用户重新输入');
						// 			// 如果，当前输入的值减去2小于上一层的最小值，提示用户重新输入
						// 			this.$emit('tap-EditItems',this.dataLists);
						// 			uni.showToast({
						// 				title: '当前输入的最小起批量应大于上一层输入的最小起批量！',
						// 				icon: 'none',
						// 				duration: 1000
						// 			});
						// 			return
						// 		} else if ((Number(e[0]) - 2) >= this.dataLists.dataList[this.activeIndex - 1].minCount) {
						// 			item.minCount = e[0];
						// 			console.log('将当前的最下值减去1，赋值给上一层的最大值');
						// 			// 将当前的最下值减去1，赋值给上一层的最大值
						// 			this.dataLists.dataList[this.activeIndex - 1].maxCount = Number(e[0]) - 1;
						// 			this.$emit('tap-EditItems',this.dataLists);
						// 		}
						// 	}
						// }
					}
				});
				
			},
			// 商品价格
			tapMoney(e) {
				console.log(e, '商品价格');
				this.activeIndex = e[1];
				this.dataLists.dataList.map((item, index)=>{
					if(this.activeIndex === index) {
						item.money = e[0];
					}
				});
				this.$emit('tap-EditItems',this.dataLists);
			},
		}
	};
</script>

<style>
	.edit-content{
		position: relative;
		width: 100%;
	}
	.edit{
		position: relative;
		width: 100%;
	}
	.top{
		position: relative;
		width: 100%;
		background: #FFFFFF;
		padding: 2vw 15px;
	}
	.textTop{
		position: relative;
		width: 24%;
		text-align: justify;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 80upx;
	}
	.inputTop{
		position: relative;
		width: 74%;
	}
	.dataList{
		position: relative;
		background: #F9F9F9;
		width: 100%;
		padding: 2vw 15px;
	}
	.items{
		position: relative;
		width: 100%;
	}
	.item-top{
		position: relative;
		width: 100%;
		padding: 0vw 0 2vw 0;
	}
	.text1{
		position: relative;
		width: 22%;
		text-align: justify;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 80upx;
	}
	.input-box{
		position: relative;
		width: 55%;
	}
	.num-box{
		position: relative;
		width: 100%;
	}
	.input2{
		position: relative;
		width: 41%;
	}
	.symbol{
		position: relative;
		width: 18%;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 80upx;
	}
	.unit{
		position: relative;
		width: 23%;
		text-align: left;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 80upx;
		padding: 0 0 0 2vw;
	}
	.item-bottom{
		position: relative;
		width: 100%;
		padding: 0vw 0 2vw 0;
	}
	.input3{
		position: relative;
		width: 100%;
	}
	.errorBox{
		position: relative;
		width: 100%;
	}
	.typeError{
		position: relative;
		width: 100%;
		padding: 1vw 4upx;
		font-family: PingFangSC-Regular;
		font-size: 10upx;
		color: red;
		line-height: 20upx;
	}
</style>
