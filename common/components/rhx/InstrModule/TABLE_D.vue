<template>
	<view class="mode-list" :id='dataLists.id'>
		<view>
			<rTitle
			:disabled='!disabled'
			:isShowOne='true'
			:rPadding="tabYItemsIndex === indexNum ? '70upx 0 30upx 30upx' : '70upx 0 30upx 30upx'"
			:valueOne="dataLists.iconTitle"
			typeOne="text" 
			:maxlengthOne='5'
			:focusOne='false'
			:cursorOne='0'
			rfontWeight="bold"
			rbackground="#FFFFFF"
			adjustPositionOne='adjustPosition'
			tTAlignOne='left'
			tColorOne='#2E2E30'
			tFontSizeOne='36upx'
			tLineHeightOne='8.466vw'
			tWidthOne="100%"
			tHeightOne="8.466vw"
			tPaddingOne="10upx"
			tBGOne="rgba(212, 253, 247, 0.21)"
			tBorderOne="1px solid #02C2A2"
			tBStyleOne="dashed"
			:isShowTwo='false'
			@tap-Title='tabIconTitle'
			></rTitle>
		</view>
		<view>
			<dataListTwo
			:dataList="dataLists"
			:disabled='disabled'
			:basicData='basicDatas'
			@tap-dataList="tapdataListTwo"
			></dataListTwo>
		</view>
		
	</view>
</template>

<script>
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import dataListTwo from '@/components/common/RHX/dataListTwo/dataListTwo';
	export default{
		components:{
			rTitle,
			dataListTwo,
		},
		props:[
			'basicData',//传过来的modules数据
			'dataList',
			'disabled',
			'tabYItemsIndex',
			'indexNum',
			'scrollTop'
		],
		data(){
			return{
				dataLists:this.dataList,
				basicDatas:this.basicData,
			}
		},
		watch: {
			scrollTop: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听TABLE_D变化---------------------------------------');
					this.scrollTitleChange(this.dataLists.id, 60, [this.dataLists, this.indexNum]);
				},
				deep: true
			}
		},
		methods:{
			// 顶部标题修改
			tabIconTitle(e) {
				console.log(e,'顶部标题修改');
				this.dataLists.iconTitle = e[0];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-TABLEC', data);
			},
			tapdataListTwo(e){
				console.log('bababababbabababababababbabababa');
				this.$emit('tap-TABLEC', e);
			},
			
		}
	}
</script>

<style>
	.title{
		font-weight: bold;
		background: #FFFFFF;
	}
	.bgc{
		width: 100%;
		height: 400upx;
	}
</style>
