<template>
	<!-- 模拟模块组件 -->
	<div class="mode-list"  :id='dataLists.id' >
		<!-- title -->
		<div class="title">
			<rTitle
			:disabled='!disabled'
			:isShowOne='true'
			rPadding="0"
			:valueOne="dataLists.iconTitle"
			typeOne="text" 
			:maxlengthOne='5'
			:focusOne='false'
			:cursorOne='0'
			adjustPositionOne='adjustPosition'
			tTAlignOne='left'
			tColorOne='#2E2E30'
			rfontWeight="bold"
			rbackground="#FFFFFF"
			tFontSizeOne='36upx'
			rfontFamily="PingFangSC-Semibold"
			tLineHeightOne='8.466vw'
			tWidthOne="100%"
			tHeightOne="8.466vw"
			tPaddingOne="0 10upx"
			tBGOne="rgba(212, 253, 247, 0.21)"
			tBorderOne="1px solid #02C2A2"
			tBStyleOne="dashed"
			:isShowTwo='false'
			@tap-Title='tabIconTitle'
			></rTitle>
		</div>
		<div class="mode-items" >
			<!-- 实例保障组件 -->
			<caseGuarantee
			:typeBtn='0'
			:disabled='disabled'
			:dataList='dataLists.dataList'
			:deleteMoveShow='deleteMoveTipsShow'
			@tap-CaseGuarantee='tapCaseGuarantee'
			></caseGuarantee>
			<!-- 添加新的项 -->
			<pickerButton
			:typeBtn='0'
			:selectList='dataLists.selectList'
			:dataList='dataLists.dataList'
			centerText='实力保障'
			@tap-PickerButton='tapPickerButton'
			v-if='deleteMoveTipsShow && disabled'></pickerButton>
		</div>
		<!-- 复加此项 -->
		<addButton
		v-if='disabled'
		name='添加保障'
		:dataList='dataLists.dataList'
		@tap-ManageCopyTips='tapManageCopyTips'
		></addButton>
	</div>
</template>

<script>
	import caseGuarantee from '@/components/common/RHX/madeModule/caseGuarantee/caseGuarantee';
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import addButton from '@/components/common/RHX/addButton/addButton';
	import pickerButton from '@/components/common/RHX/pickerButton/pickerButton';
	export default {
		components: {
			caseGuarantee,
			rTitle,
			addButton,
			pickerButton
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
			// 用户操作里边删除
			tapCaseGuarantee(e) {
				console.log(e, '用户操作里边删除');
				this.dataLists.dataList = e;
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-SELECTB', data);
			},
			// 点击管理、复制、完成组件
			tapManageCopyTips (e) {
				this.$emit('set-FixedShow', false);
				console.log(e, '管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值');
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-SELECTB', data);
			},
			// 点击添加模块
			tapPickerButton (e) {
				console.log(e, '点击添加模块');
				this.$emit('set-FixedShow', true);
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-SELECTB', data);
			},
			
		}
	};
</script>

<style>
	.mode-list{
		position: relative;
		width: 100%;
		background: #FFFF;
		padding: 18upx 24upx 2upx 24upx;
		margin-bottom: 32upx;
	}
	.mode-items{
		position: relative;
		width: 100%;
		margin-top: 3vw;
	}
</style>
