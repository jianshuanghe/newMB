<template>
	<view class="mode-list" :id="dataLists.id">
		<view class="title">
			<rTitle
				:disabled="!disabled"
				:isShowOne="false"
				:tLineYSHow="true"
				:isShowTwo="true"
				rPaddingTwo="30upx 40upx 12upx 40upx"
				:valueTwo="dataLists.content"
				:indexNum="index"
				rfontWeightTwo="bold"
				:placeholderTwo="placeholderTitle"
				rfontFamilyTwo="PingFangSC-Semibold"
				keyNameTwo="content"
				tWidthTwo="100%"
				tTMarginTwo="0vw 0"
				tHeightTwo=""
				tMinHeightTwo="56upx"
				maxlengthTwo="30"
				:autoHeightTwo="true"
				tColorTwo="#000000"
				tPaddingTwo=""
				tFontSizeTwo="40upx"
				tLineHeightTwo="56upx"
				tBGTwo="rgba(212, 253, 247, 0.21)"
				tBorderTwo="1px solid #02C2A2"
				tBStyleTwo="dashed"
				@tap-index="tapIndex"
				@tap-Title="tabIconTitle"
			></rTitle>
		</view>
		<view class="content">
			<view class="money">
				￥
			</view>
			<view class="content-money">
				<rTitle
					:disabled="!disabled"
					:isShowOne="true"
					:rPadding="tabYItemsIndex === indexNum ? '0 0 0 0' : '0 0 0 0'"
					:valueOne="dataLists.money"
					typeOne="number"
					:maxlengthOne="11"
					:focusOne="false"
					:cursorOne="0"
					tWidthTwo="100upx"
					:placeholderOne='placeholderMoney'
					rfontFamily="PingFangSC-Medium"
					adjustPositionOne="adjustPosition"
					tTAlignOne="left"
					tColorOne="#FF3A2E"
					tFontSizeOne="36upx"
					tLineHeightOne="38upx"
					tHeightOne="36upx"
					tPaddingOne="0 0 0 0"
					tBGOne="rgba(212, 253, 247, 0.21)"
					tBorderOne="1px solid #02C2A2"
					tBStyleOne="dashed"
					:isShowTwo="false"
					@tap-Title="tapMONEY"
				></rTitle>
			</view>
			<view>
				<rTitle
					:disabled="!disabled"
					:isShowOne="true"
					:rPadding="tabYItemsIndex === indexNum ? '0 0 0 0' : '0 0 0 0'"
					:valueOne="dataLists.unit"
					typeOne="text"
					:maxlengthOne="10"
					:focusOne="false"
					:cursorOne="0"
					:placeholderOne='placeholderUnit'
					rfontFamily="PingFangSC-Regular"
					adjustPositionOne="adjustPosition"
					tTAlignOne="left"
					tColorOne="#9B9B9B"
					tFontSizeOne="28upx"
					tLineHeightOne="28upx"
					tHeightOne="28upx"
					tPaddingOne="0 0 0 0"
					tBGOne="rgba(212, 253, 247, 0.21)"
					tBorderOne="1px solid #02C2A2"
					tBStyleOne="dashed"
					:isShowTwo="false"
					@tap-Title="tapUNIT"
				></rTitle>
			</view>
		</view>
	</view>
</template>

<script>
import rTitle from '@/components/common/RHX/rTitle/rTitle';
export default {
	components: {
		rTitle
	},
	props: [
		'basicData', //传过来的modules数据
		'dataList',
		'disabled',
		'tabYItemsIndex',
		'indexNum',
		'scrollTop'
	],
	data() {
		return {
			dataLists: this.dataList,
			basicDatas: this.basicData,
			placeholderTitle:'',
			placeholderMoney:'',
			placeholderUnit:''
		};
	},
	watch: {
		scrollTop: {
			handler(a, b) {
				console.log(a, b, '--------------------------------------监听TABLE_C变化---------------------------------------');
				this.scrollTitleChange(this.dataLists.id, 60, [this.dataLists, this.indexNum]);
			},
			deep: true
		}
	},
	methods: {
		// 顶部标题修改
		tabIconTitle(e) {
			console.log(e, '顶部标题修改');
			if(e[1]==''){
				this.placeholderTitle="请输入产品名称"
			}
			this.dataLists.content = e[1];
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-MONEYB', data);
		},
		tapMONEY(e) {
			console.log(e, '价格标签被修改');
			if(e[0]==''){
				this.placeholderMoney="请输入价格"
			}
			this.dataLists.money = e[0];
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-MONEYB', data);
		},
		tapUNIT(e) {
			console.log(e, '单位标签被修改');
			if(e[0]==''){
				this.placeholderUnit="请输入单位"
			}
			this.dataLists.unit = e[0];
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-MONEYB', data);
		}
	}
};
</script>

<style>
.mode-list{
	background: #FFFFFF;
}
.content {
	display: flex;
	align-items: center;
}
.money{
	margin-left: 40upx;
	font-family: PingFangSC-Medium;
	font-size: 36upx;
	color: #FF3A2E;
	letter-spacing: 0;
	line-height: 36upx;
}
.content-money{
	max-width: 30%;
}
</style>
