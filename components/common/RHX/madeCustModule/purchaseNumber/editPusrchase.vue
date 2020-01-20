<template>
	<div class="purchaseNumber-content">
		<inputBox
		:value="value"
		type="text"
		:isPassword='false'
		placeholder="请输入"
		:disabled='disabled'
		:adjustPosition="true"
		:maxlength="maxlength"
		inputColor='#2E2E30'
		inputFontSize='4.266vw'
		inputLineHeight='9.466vw'
		inputLine=''
		inputWidth=''
		inputHeight='9.466vw'
		inputTAlign='left'
		inputPadding='1.333vw'
		inputBG="rgba(212, 253, 247, 0.21)"
		inputBorder="1px solid #02C2A2"
		inputBStyle="dashed"
		@tap-Input='tapCenterInput'
		></inputBox>
	</div>
</template>

<script>
	import inputBox from './../basicInformation/inputBox';
	export default {
		components: {
			inputBox
		},
		props: [
			'value',
			'disabled',
			'maxlength',
			'indexNum',
			'dataList',
		],
		data() {
			return {
				dataLists: this.dataList,
			};
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log('----------------dataList--------------')
					this.dataLists = a;
				},
				deep: true
			},
		},
		created() {},
		methods: {
			tapCenterInput (e) {
				console.log(e, '用户行为');
				this.dataLists.map((items, index)=>{
					if (this.indexNum === index) {
						items.key = e;
					}
				})
				this.$emit('tap-EditPusrchase', this.dataLists);
			},
		}
	};
</script>

<style>
	.purchaseNumber-content{
		position: relative;
		width: 100%;
	}
	.purchaseNumber{
		position: relative;
		width: 100%;
		min-height: 10vw;
	}
	.NumberBox{
		position: relative;
		width: 100%;
	}
	.numbox-list{
		position: relative;
		width: 100%;
		min-height: 10vw;
		margin-bottom: 32upx;
	}
	.inputBox{
		position: relative;
		width: 60%;
	}
	.input{
		background: #FFFFFF;
		border: 1px solid #D2D2D2;
		border-radius: 2px;
		border-radius: 2px;
		width: 90%;
		height: 76upx;
		text-align: left;
		padding: 0 1vw;
		line-height: 76upx;
		font-family: PingFangSC-Light;
		font-size: 26upx;
		color: #2E2E30;
		letter-spacing: 0;
	}
	.step{
		position: relative;
		width: 40%;
	}
	.value{
		position: relative;
		width: 90%;
	}
</style>
