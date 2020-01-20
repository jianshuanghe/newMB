<template>
	<view class="mode-list"  :id='dataLists.id'>
		<view class="title">
			<rTitle
			:disabled='!disabled'
			:isShowOne='false'
			:tLineYSHow='true'
			:isShowTwo='true'
			:valueTwo='dataLists.content'
			rfontFamilyTwo="PingFangSC-Semibold"
			keyNameTwo='content'
			tWidthTwo="100%"
			tTMarginTwo='0vw 0'
			tHeightTwo=""
			maxlengthTwo="30"
			:autoHeightTwo='true'
			rfontWeightTwo="bold"
			tColorTwo="#2E2E30"
			tPaddingTwo=""
			tFontSizeTwo="40upx"
			tLineHeightTwo='56upx'
			tMinHeightTwo='56upx'
			tBGTwo="rgba(212, 253, 247, 0.21)"
			tBorderTwo="1px solid #02C2A2"
			tBStyleTwo="dashed"
			@tap-index='tapIndex'
			@tap-Title='tapTitleContent'
			></rTitle>
		</view>
	</view>
</template>

<script>
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	export default {
		components: {
			rTitle,
		},
		props: [
			'disabled',
			'basicData',
			'scrollTop',
			'defaultImg',
			'dataList',
			'indexNum',
			'tabYItemsIndex',
		],
		data() {
			return {
				indexs: -1,
				basicDatas: this.basicData, // 原始数据
				defaultAddImg: this.defaultImg,
				dataLists: this.dataList,
				deleteMoveTipsShow: false, // 控制deleteMoveTips组件显示隐藏
				manageType: 0, // 0展示管理 和 复制； 1只展示复制
			};
		},
		created() {
			console.log(this.dataLists, '-------------------------dataLists-----------------------')
		},
		watch: {
			scrollTop: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听TITLE_CONTENT_IMG_B变化---------------------------------------');
					this.scrollTitleChange(this.dataLists.id, 60, [this.dataLists, this.indexNum]);
				},
				deep: true
			}
		},
		methods: {
			tapIndex (e) {
				console.log(e, '用户修改的数据的index');
				this.indexs = e;
			},
			// 带点击标题返回
			tapTitleContent (e) {
				console.log(e,'点击标题返回值----数组');
				this.dataLists.content = e[1];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists); // 合并数据
				this.$emit('tap-TITLEA', data);
			}
		}
	};
</script>

<style>
	.title{
		margin: 30upx 30upx ;
	}
</style>
