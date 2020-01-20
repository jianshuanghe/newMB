<template>
	<div class="remarks-content">
		<div class="remarks">
			<div class='textAreaShow' v-if='disabled === false'>
				<rTitle
				:disabled='disabled'
				:isShowOne='false'
				:isShowTwo='true'
				:valueTwo='dataLists.content'
				typeTwo="text" 
				keyNameTwo='content'
				:placeholderTwo="disabled === true ? '客户给您填写的特殊要求' : '请填写您填写的特殊要求,限500位'"
				placeholderStyleTwo='color: #BDBDBD'
				placeholderClassTwo='placeholderClass'
				focusTwo='focus'
				cursorTwo='cursor'
				adjustPositionTwo='adjustPosition'
				:tMaxNumShow='false'
				:maxlengthTwo='500'
				tFontSizeTwo='3.466vw'
				tColorTwo='#9B9B9B'
				autoHeightTwo=''
				tTAlignTwo='left'
				tWidthTwo='100%'
				tHeightTwo=''
				tPaddingTwo='0.5vw'
				tTMarginTwo=''
				tLineHeightTwo='6vw'
				tBGTwo="rgba(212, 253, 247, 0.21)"
				tBorderTwo="1px solid #02C2A2"
				tBStyleTwo="dashed"
				@tap-index='tapIndexNumTitle'
				@tap-Title='tapTitleTwo'
				></rTitle>
			</div>
			<div class='textAreaShow' v-if='disabled === true'>
				<div class='textArea'>客户给您填写的特殊要求</div>	
			</div>
		</div>
	</div>
</template>

<script>
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	export default {
		props: [
			'disabled',
			'itemsData',
			'indexNum',
			'dataList',
		],
		data() {
			return {
				dataLists: this.dataList,
			};
		},
		components: {
			rTitle,
		},
		computed: {},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------dataList---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			},
		},
		created() {
		},
		mounted() {},
		methods: {
			// 修改
			tapTitleTwo(e) {
				console.log(e);
				this.dataLists.content=e[1];
				this.$emit('tap-StyleSelectionList', this.dataLists);
			},
		}
	};
</script>

<style>
	.remarks-content{
		position: relative;
		width: 100%;
	}
	.remarks{
		position: relative;
		width: 100%;
	}
	.textArea{
		position: relative;
		width: 100%;
		opacity: 0.6;
		font-family: PingFangSC-Light;
		font-size: 26upx;
		color: #BDBDBD;
		letter-spacing: 0;
		line-height: 36upx;
		padding: 6upx 0;
	}
</style>
