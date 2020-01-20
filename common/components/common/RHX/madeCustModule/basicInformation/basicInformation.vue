<template>
	<div class="basicInformation-content">
		<div :class="disabled ? 'basicInformation' : 'basicInformation1'">
			<!-- 左侧 -->
			<div class="name-box left" >
				<rTitle
				:disabled='!disabled'
				:isShowOne='true'
				rPadding="0vw 0"
				:valueOne="itemsDatas.key1"
				typeOne="text" 
				:maxlengthOne='4'
				:focusOne='false'
				:cursorOne='0'
				adjustPositionOne='adjustPosition'
				tTAlignOne='justify'
				tColorOne='#2E2E30'
				tFontSizeOne='4.266vw'
				tLineHeightOne='6.466vw'
				tWidthOne="100%"
				tHeightOne="6.466vw"
				tPaddingOne="0.5vw"
				tBGOne="rgba(212, 253, 247, 0.21)"
				tBorderOne="1px solid #02C2A2"
				tBStyleOne="dashed"
				:isShowTwo='false'
				@tap-Title='tapLeftTitle'
				v-if='disabled'
				></rTitle>
				<div class="textShow" v-if='!disabled'>{{itemsDatas.key1}}<p class="zw"></p></div>
			</div>
			<!-- 中间 -->
			<div class="value-box left">
				<inputBox
				:value="itemsDatas.value"
				type="text"
				:isPassword='false'
				placeholder="请输入"
				:disabled='disabled'
				placeholderStyle="color: #D2D2D2"
				:adjustPosition="true"
				:maxlength="5"
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
				@tap-Input='tapCenterInput'
				></inputBox>
			</div>
			<!-- 右侧 -->
			<div class="name-box left">
				<rTitle
				:disabled='!disabled'
				:isShowOne='true'
				rPadding="0vw 0"
				:valueOne="itemsDatas.key2"
				typeOne="text" 
				:maxlengthOne='4'
				:focusOne='false'
				:cursorOne='0'
				adjustPositionOne='adjustPosition'
				tTAlignOne='justify'
				tColorOne='#2E2E30'
				tFontSizeOne='4.266vw'
				tLineHeightOne='6.466vw'
				tWidthOne="100%"
				tHeightOne="6.466vw"
				tPaddingOne="0.5vw"
				tBGOne="rgba(212, 253, 247, 0.21)"
				tBorderOne="1px solid #02C2A2"
				tBStyleOne="dashed"
				:isShowTwo='false'
				@tap-Title='tabRightTitle'
				></rTitle>
			</div>
			<div class="clear"></div>
		</div>
		<div class='delete-box'>
			<div class="delete" v-if='disabled' @tap='clickDelBtn(indexNum)'>
				<image class="delIcon" :src='dels'></image>
			</div>
		</div>
	</div>
</template>

<script>
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import inputBox from './inputBox';
	export default {
		components: {
			rTitle,
			inputBox
		},
		data() {
			return {
				dels: this.Static+'my/dels.png', // 删除图片
				dataLists: this.dataList,
				itemsDatas: this.itemsData,
			};
		},
		created () {
		},
		props: [
			'disabled',
			'itemsData',
			'indexNum',
			'dataList',
		],
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, '----------------dataList--------------')
					this.dataLists = a;
				},
				deep: true
			},
			itemsData: {
				handler(a, b) {
					console.log(a, '----------------dataList--------------')
					this.itemsDatas = a;
				},
				deep: true
			},
		},
		mounted() {},
		beforeDestroy () {
			console.log('页面销毁之前缓存数据更新-----------setImgList、setCaiGouList');
		},
		methods: {
			// 左侧输入框输入改变
			tapLeftTitle(e) {
				console.log(e, '左侧输入框输入改变');
				this.upData(e[0], 'key1');
			},
			// 中间输入框输入改变
			tapCenterInput (e) {
				console.log(e, '中间输入框输入改变');
				this.upData(e, 'value');
			},
			// 右侧输入框输入改变
			tabRightTitle(e) {
				console.log(e, '右侧输入框输入改变');
				this.upData(e[0], 'key2');
			},
			// 跟新数据
			upData(e, type) {
				console.log(e, type, '跟新数据');
				this.dataLists.map((items, index)=>{
					if (this.indexNum === index) {
						items[type] = e;
					}
				});
				this.$emit('tap-BasicInformation', this.dataLists);
			},
			clickDelBtn(e){
				console.log('点击删除按钮');
				delete this.dataLists.splice(e, 1); // 删除选中的子项
				this.$emit('tap-BasicInformation', this.dataLists);
			}
		}
	};
</script>

<style>
	.basicInformation-content{
		position: relative;
		width: 100%;
		margin-bottom: 2vw;
	}
	.basicInformation{
		position: relative;
		width: 90%;
		left: 4upx;
	}
	.basicInformation1{
		position: relative;
		width: 100%;
	}
	.name-box{
		position: relative;
		width: 21%;
		margin-top: 2vw;
	}
	.value-box{
		position: relative;
		width: 58%;
	}
	.delete-box{
		position: absolute;
		width: 10%;
		right: 0;
		top: 20upx;
	}
	.delete{
		position: relative;
		width: 44upx;
		height: 44upx;
		float: right;
	}
	.delIcon{
		position: relative;
		width: 44upx;
		height: 44upx;
	}
	.textShow{
		padding-right: 2.5vw;
		text-align: justify;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
	}
	.zw{
	    display: inline-block;
	    width: 100%;
	}
</style>
