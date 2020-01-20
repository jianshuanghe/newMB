<template>
	<!-- 模拟模块组件 -->
	<div class="mode-list"  :id='dataLists.id'>
		<!-- title -->
		<div class="title">
			<rTitle
			:disabled='!disabled'
			:isShowOne='true'
			:rPadding="tabYItemsIndex === indexNum ? '6vw 20upx' : '6vw 20upx'"
			:valueOne="dataLists.iconTitle"
			typeOne="text" 
			:maxlengthOne='5'
			:focusOne='false'
			:cursorOne='0'
			adjustPositionOne='adjustPosition'
			tTAlignOne='center'
			tColorOne='#02C2A2'
			tFontSizeOne='5.333vw'
			tLineHeightOne='8.466vw'
			tWidthOne="100%"
			tHeightOne="8.466vw"
			tPaddingOne=""
			tBGOne="rgba(212, 253, 247, 0.21)"
			tBorderOne="1px solid #02C2A2"
			tBStyleOne="dashed"
			:isShowTwo='false'
			@tap-Title='tabIconTitle'
			></rTitle>
		</div>
		
		<div class="titleTwo">
			<rTitle
			:dataList='dataLists'
			itemsData=''
			:disabled='!disabled'
			:isShowOne='true'
			:valueOne="dataLists.title"
			typeOne="text" 
			:focusOne='false'
			:cursorOne='0'
			adjustPositionOne='adjustPosition'
			tTAlignOne='left'
			tFontSizeOne='4.266vw'
			tLineHeightOne='7vw'
			tWidthOne="100%"
			tHeightOne="7vw"
			tPaddingOne=""
			tBGOne="rgba(212, 253, 247, 0.21)"
			tBorderOne="1px solid #02C2A2"
			tBStyleOne="dashed"
			:tLineYSHow='true'
			:isShowTwo='true'
			:valueTwo='dataLists.content'
			keyNameTwo='content'
			tWidthTwo="100%"
			tTMarginTwo='0vw 0'
			tHeightTwo=""
			:autoHeightTwo='true'
			tPaddingTwo=""
			tLineHeightTwo='5vw'
			tBGTwo="rgba(212, 253, 247, 0.21)"
			tBorderTwo="1px solid #02C2A2"
			tBStyleTwo="dashed"
			@tap-Title='tapTitleContent'
			></rTitle>
		</div>
		<div class='icon-Input'>
			<iconInput
			:dataList='dataLists'
			:disabled='disabled'
			icon=''
			:data='dataLists.dataList'
			typeOne="text"
			:focusOne='false'
			:cursorOne='0'
			adjustPositionOne='adjustPosition'
			tTAlignOne='left'
			tColorOne=' #5D5D5D'
			tFontSizeOne='3.466vw'
			tLineHeightOne='5.6vw'
			tWidthOne="100%"
			tHeightOne="5.6vw"
			tPaddingOne="0.333vw"
			tBGOne="rgba(212, 253, 247, 0.21)"
			tBorderOne="1px solid #02C2A2"
			tBStyleOne="dashed"
			@tap-IconInput='tapIconInput'></iconInput>
		</div>
		<!-- 管理项目、复加此项 -->
		<manageCopyTips
		v-if='false'
		:manageCopyShow='deleteMoveTipsShow'
		:manageType='manageType'
		:dataList='dataLists.dataList'
		:itemsData='dataLists.dataList[0]'
		:isManageShow='true'
		@tap-ManageCopyTips='tapManageCopyTips'
		></manageCopyTips>
	</div>
</template>

<script>
	import singlePicture from '@/components/common/RHX/singlePicture/singlePicture';
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import manageCopyTips from '@/components/common/RHX/manageCopyTips/manageCopyTips';
	import deleteMoveTips from '@/components/common/RHX/deleteMoveTips/deleteMoveTips';
	import iconInput from '@/components/common/RHX/iconInput/iconInput';
	export default {
		components: {
			singlePicture,
			rTitle,
			manageCopyTips,
			deleteMoveTips,
			iconInput
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
		watch: {
			scrollTop: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听CONTENT_B变化---------------------------------------');
					this.scrollTitleChange(this.dataLists.id, 60, [this.dataLists, this.indexNum]);
				},
				deep: true
			}
		},
		created() {
			console.log(this.dataLists, '----------------------哈哈---dataLists-----------------------')
		},
		methods: {
			// 点击单张图片
			tabPicture (e) {
				console.log(e, '操作单张图片返回值');
				this.dataLists.dataList = e;
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-INFOB', data);
			},
			// 顶部标题修改
			tabIconTitle(e) {
				console.log(e,'顶部标题修改');
				this.dataLists.iconTitle = e[0];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-INFOB', data);
			},
			// 带点击标题返回
			tapTitleContent (e) {
				console.log(e,'点击标题返回值----数组');
				this.dataLists.title = e[0];
				this.dataLists.content = e[1];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-INFOB', data);
			},
			// 点击tapIconInput返回
			tapIconInput(e) {
				console.log(e, '点击tapIconInput返回');
				this.dataLists.dataList = e;
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-INFOB', data);
			}
		}
	};
</script>

<style>
	.mode-list{
		position: relative;
		width: 100%;
		background: #FFFF;
		
	}
	.mode-items{
		position: relative;
		width: 100%;
	}
	.icon-Input{
		padding: 0upx 24upx 2upx 24upx;
	}
	.titleTwo{
		position: relative;
		width: 96%;
		margin-left: 2%;
		padding: 0upx 24upx 2upx 24upx;
		margin-bottom: 2vw;
	}
</style>
