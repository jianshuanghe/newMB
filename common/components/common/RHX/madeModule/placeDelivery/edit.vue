<template>
	<div class="edit-content">
		<div class="edit">
			<!-- 出货周期 -->
			<div class="dataList">
				<div class="items">
					<!-- 编辑商品价格 -->
					<div class="item-bottom">
						<div class="text1 left">数      量：</div>
						<div class="input-box left">
							<div class="num-box">
								<div class="input3">
									<inputBox
										value=""
										type="text"
										placeholder="请输入商品单价(如：10)"
										placeholderStyle="color: #BDBDBD"
										:disabled='false'
										:adjustPosition="true"
										:maxlength="3"
										inputTAlign='left'
										inputWidth="100%"
										inputHeight="10.66vw"
										inputPadding="0 1vw 0 1vw"
										:inputType='2'
										@tap-Input='tapInput'
									></inputBox>
								</div>
							</div>
						</div>
						<div class="unit left">
							<inputBox
								value=""
								type="text"
								placeholder="请输入商品单价(如：10)"
								placeholderStyle="color: #BDBDBD"
								:disabled='false'
								:adjustPosition="true"
								:maxlength="3"
								inputTAlign='left'
								inputWidth="100%"
								inputHeight="10.66vw"
								inputPadding="0 1vw 0 1vw"
								:inputType='2'
								@tap-Input='tapInput'
							></inputBox>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import inputBox from '@/components/common/RHX/inputBox/inputBox';
	export default {
		components: {
			inputBox
		},
		props: [
			'disabled',
			'dataList'
		],
		data() {
			return {
				isInputShow: true, // 是否展示当前组件
			};
		},
		created() {
		},
		watch: {
			
			disabled: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听但图片变化---------------------------------------');
					this.inputOrTextAreaShow(a);
				},
				deep: true
			},
		},
		methods: {
			
			tapInput(e) {
				console.log(e, '一级标题操作返回数据');
				this.valueOneText = e; // 赋值一级标题内容
				console.log(this.valueOneText, this.valueTwoText, '----------------this.valueOneText, this.valueTwoText---------------');
				this.$emit('tap-index',this.indexNum);
				this.$emit('tap-Title',[this.valueOneText, this.valueTwoText]);
				
			},
		}
	};
</script>

<style>
	.edit-content{
		position: relative;
		width: 100%;
		background: #FFFFFF;
		padding: 0 15px;
	}
	.edit{
		position: relative;
		width: 100%;
	}
	.top{
		position: relative;
		width: 100%;
		padding: 2vw 0;
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
		width: 100%;
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
		width: 68%;
	}
	.num-box{
		position: relative;
		width: 100%;
	}
	.input2{
		position: relative;
		width: 45%;
	}
	.symbol{
		position: relative;
		width: 10%;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 80upx;
	}
	.unit{
		position: relative;
		width: 10%;
		text-align: left;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 80upx;
		padding: 0 0 0 1.5vw;
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
</style>
