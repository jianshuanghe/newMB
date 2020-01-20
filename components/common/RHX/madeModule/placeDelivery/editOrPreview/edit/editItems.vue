<template>
	<div class="edit-content">
		<div class="edit">
			<!-- 出货周期 -->
			<div class="dataList">
				<div class="items">
					<!-- 编辑-->
					<div class="item-bottom">
						<div class="text1 left">{{item.key}}：</div>
						<div class="input-box left">
							<div class="num-box">
								<div class="input3">
									<inputBox
									:value="Number(item.value)"
									type="number"
									:isPassword='false'
									placeholder="请输入"
									:disabled='disabled'
									:adjustPosition="true"
									:maxlength="8"
									inputColor='#2E2E30'
									inputFontSize='4.266vw'
									inputLineHeight='10.466vw'
									inputLine=''
									inputWidth=''
									inputHeight='10.466vw'
									inputTAlign='left'
									inputPadding='1.333vw'
									inputBG="rgba(212, 253, 247, 0.21)"
									inputBorder="1px solid #02C2A2"
									inputBStyle="dashed"
									@tap-Input='tapInputCenter'
									></inputBox>
								</div>
							</div>
						</div>
						<div class="unit left">
							<rTitle
							:disabled='disabled'
							:isShowOne='true'
							rPadding="0"
							:valueOne="item.unit"
							typeOne="text" 
							:maxlengthOne='5'
							:focusOne='false'
							:cursorOne='0'
							placeholderOne='单位'
							adjustPositionOne='adjustPosition'
							tTAlignOne='left'
							tColorOne='#2E2E30'
							tFontSizeOne='4.266vw'
							tLineHeightOne='10.466vw'
							tWidthOne="100%"
							tHeightOne="10.466vw"
							tPaddingOne="1.333vw"
							tBGOne="rgba(212, 253, 247, 0.21)"
							tBorderOne="1px solid #02C2A2"
							tBStyleOne="dashed"
							:isShowTwo='false'
							@tap-Title='tapUnit'
							></rTitle>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import inputBox from '@/components/common/RHX/madeCustModule/basicInformation/inputBox';
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	export default {
		components: {
			rTitle,
			inputBox
		},
		props: [
			'disabled',
			'dataList',
			'indexNum',
			'item'
		],
		data() {
			return {
				isInputShow: true, // 是否展示当前组件
				dataLists: this.dataList,
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
			tapInputCenter(e) {
				console.log(e, '');
				this.dataLists.dataList[this.indexNum].value = e;
				this.$emit('tap-UpDataEditItems', this.dataLists);
			},
			tapUnit(e) {
				console.log(e, this.indexNum, '------------this.indexNum----------------');
				this.dataLists.dataList[this.indexNum].unit = e[0];
				console.log(this.dataLists.dataList[this.indexNum].unit, '-------------this.dataLists.dataList[this.indexNum].unit--------------')
				this.$emit('tap-UpDataEditItems', this.dataLists);
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
		width: 58%;
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
		width: 20%;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 80upx;
	}
	.unit{
		position: relative;
		width: 20%;
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
