<template>
	<div class="template-Items">
		<div class="mode-list" :id='dataLists.id'>
			<div class="title">
				<rTitle
				v-if="moduleTitleStyle === '0'"
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
				tPaddingOne="0 10upx"
				tBGOne="rgba(212, 253, 247, 0.21)"
				tBorderOne="1px solid #02C2A2"
				tBStyleOne="dashed"
				:isShowTwo='false'
				@tap-Title='tabIconTitle'
				></rTitle>
				<rTitle
				v-if="moduleTitleStyle === '1'"
				:disabled='!disabled'
				:isShowOne='true'
				:rPadding="tabYItemsIndex === indexNum ? '70upx 20upx 6upx 20upx' : '70upx 20upx 6upx 20upx'"
				:valueOne="dataLists.iconTitle"
				typeOne="text" 
				:maxlengthOne='5'
				:focusOne='false'
				:cursorOne='0'
				rfontFamily="PingFangSC-Medium"
				adjustPositionOne='adjustPosition'
				tTAlignOne='left'
				tColorOne='#2E2E30'
				tFontSizeOne='36upx'
				tLineHeightOne='8.466vw'
				tWidthOne="100%"
				tHeightOne="8.466vw"
				tPaddingOne="0 10upx"
				rfontWeight="bold"
				rbackground="#FFFFFF"
				tBGOne="rgba(212, 253, 247, 0.21)"
				tBorderOne="1px solid #02C2A2"
				tBStyleOne="dashed"
				:isShowTwo='false'
				@tap-Title='tabIconTitle'
				></rTitle>
			</div>
			<!-- 数据中的modules模块 -->
			<div class="mode-items" v-for="(items, index) in dataLists.dataList" :key="index">
				
				<!-- 组件 -->
				<TITLECONTENTIMGB
				v-if="items.type === 'TITLE_CONTENT_IMG_B'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGB='tapTITLECONTENTIMGB'></TITLECONTENTIMGB>
				<!-- 组件 -->
				<TITLECONTENTIMGC
				v-if="items.type === 'TITLE_CONTENT_IMG_C'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGC='tapTITLECONTENTIMGC'></TITLECONTENTIMGC>
				<!-- 组件 -->
				<TITLECONTENTIMGD
				v-if="items.type === 'TITLE_CONTENT_IMG_D'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGD='tapTITLECONTENTIMGD'></TITLECONTENTIMGD>
				<!-- 组件 -->
				<TITLECONTENTIMGE
				v-if="items.type === 'TITLE_CONTENT_IMG_E'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTIMGE='tapTITLECONTENTIMGE'></TITLECONTENTIMGE>
				<!-- 组件 -->
				<TITLECONTENTVIDEOA
				v-if="items.type === 'TITLE_CONTENT_VIDEO_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLECONTENTVIDEOA='tapTITLECONTENTVIDEOA'></TITLECONTENTVIDEOA>
				<!-- 组件 -->
				<TITLEIMGA
				v-if="items.type === 'TITLE_IMG_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TITLEIMGA='tapTITLEIMGA'></TITLEIMGA>
				<!-- 组件 -->
				<CONTENTB
				v-if="items.type === 'CONTENT_B'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-CONTENTB='tapCONTENTB'></CONTENTB>
				
				<IMGA
				v-if="items.type === 'IMG_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-IMGA='tapIMGA'></IMGA>
				<!-- 组件 -->
				<IMGCONTENTA
				v-if="items.type === 'IMG_CONTENT_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-IMGCONTENTA='tapIMGCONTENTA'></IMGCONTENTA>
				
				<!-- 组件 产品细节 -->
				<IMGCONTENTC
				v-if="items.type === 'IMG_CONTENT_C'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:dataList='items'
				:indexNum='index'
				:defaultImg='defaultAddImg'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-IMGCONTENTC='tapIMGCONTENTC'
				></IMGCONTENTC>
				
				<!-- 组件 -->
				<TITLEA
				v-if="items.type === 'TITLE_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:dataList='items'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-TITLEA='tapTITLEA'
				></TITLEA>
				
				
				<!-- 删除、上移、下移 -->
				<deleteMoveTips
				:dataList='dataLists.dataList'
				:itemsData='dataLists.dataList[0]'
				:indexNum='index'
				dMWidth='100vw'
				dMHeight='100%'
				@tap-DeleteMoveTips='tapDeleteMoveTips'
				v-if='deleteMoveTipsShow && disabled'></deleteMoveTips>
			</div>
		</div>
		<!-- 管理项目、复加此项 新增样式-->
		<manageCopyTips
		v-if='disabled'
		:manageCopyShow='deleteMoveTipsShow'
		:manageType='manageType'
		:dataList='dataLists.dataList'
		:moduleTempList='moduleTemp.content'
		:itemsData='dataLists'
		:isManageShow='true'
		@tap-ManageCopyTips='tapManageCopyTips'
		></manageCopyTips>
	</div>
</template>

<script>
	
	// import defaultAddImg from '@/static/mbcImg/publish/createBusiness/defaultAdd.png';
	import pageStatus from '@/components/common/RHX/pageStatus/pageStatus';
	import moduleTitle from '@/components/common/RHX/moduleTitle/moduleTitle';
	import swiperBanner from '@/components/common/RHX/swiperBanner/swiperBanner';
	import moduleYlist from '@/components/common/RHX/moduleYlist/moduleYlist';
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import TITLECONTENTIMGB from '@/components/rhx/InstrModule/TITLE_CONTENT_IMG_B';
	import TITLECONTENTIMGC from '@/components/rhx/InstrModule/TITLE_CONTENT_IMG_C';
	import TITLECONTENTIMGD from '@/components/rhx/InstrModule/TITLE_CONTENT_IMG_D';
	import TITLECONTENTIMGE from '@/components/rhx/InstrModule/TITLE_CONTENT_IMG_E';
	import TITLECONTENTVIDEOA from '@/components/rhx/InstrModule/TITLE_CONTENT_VIDEO_A';
	import TITLEIMGA from '@/components/rhx/InstrModule/TITLE_IMG_A';
	import CONTENTB from '@/components/rhx/InstrModule/CONTENT_B';
	import IMGA from '@/components/rhx/InstrModule/IMG_A';
	import IMGCONTENTA from '@/components/rhx/InstrModule/IMG_CONTENT_A';
	
	import madeCustTitleXModule from '@/components/common/RHX/madeCustModule/madeCustTitleXModule/madeCustTitleXModule';
	import INPUTTABLEA from '@/components/rhx/InstrModule/INPUT_TABLE_A';
	import INPUTCHECKA from '@/components/rhx/InstrModule/INPUT_CHECK_A';
	import INPUTCHECKB from '@/components/rhx/InstrModule/INPUT_CHECK_B';
	import INPUTTABLEB from '@/components/rhx/InstrModule/INPUT_TABLE_B';
	import INPUTIMGA from '@/components/rhx/InstrModule/INPUT_IMG_A';
	import INPUTTEXTA from '@/components/rhx/InstrModule/INPUT_TEXT_A';
	// import defaultAddLink from '@/static/mbcImg/publish/createBusiness/defaultAddLink.png';
	
	import IMGCONTENTC from '@/components/rhx/InstrModule/IMG_CONTENT_C';
	import TITLEA from '@/components/rhx/InstrModule/TITLE_A';
	// 留言模块----放在最后
	import MESA from '@/components/rhx/InstrModule/MES_A';
	import manageCopyTips from '@/components/common/RHX/manageCopyTips/manageCopyTipsTwo';
	import deleteMoveTips from '@/components/common/RHX/deleteMoveTips/deleteMoveTips';
	import { mapMutations, mapGetters } from 'vuex';
	//AI推送
	import TUIJIAN from '@/components/rhx/modules/TUIJIAN';
	export default {
		data() {
			return {
				basicDatas: this.basicData,
				scrollTops: this.scrollTop,
				disableds: this.disabled,
				defaultImgs: this.defaultImg,
				dataLists: this.dataList,
				indexNums: this.indexNum,
				tabYItemsIndexs: this.tabYItemsIndex,
				deleteMoveTipsShow: false, // 控制deleteMoveTips组件显示隐藏
				moduleTemp: this.moduleTempList,
				defaultAddLink: this.Static+'publish/createBusiness/defaultAddLink.png',
				manageType: 0, // 0展示管理 和 复制； 1只展示复制
			};
		},
		props: [
			'basicData',
			'scrollTop',
			'moduleTitleStyle',
			'disabled',
			'defaultImg',
			'dataList',
			'moduleTempList',
			'indexNum',
			'tabYItemsIndex',
		],
		components: {
			pageStatus,
			moduleTitle,
			swiperBanner,
			moduleYlist,
			rTitle,
			TITLECONTENTIMGB,
			TITLECONTENTIMGC,
			TITLECONTENTIMGD,
			TITLECONTENTIMGE,
			TITLECONTENTVIDEOA,
			TITLEIMGA,
			CONTENTB,
			IMGA,
			IMGCONTENTA,
			madeCustTitleXModule,
			INPUTTABLEA,
			INPUTCHECKA,
			INPUTCHECKB,
			INPUTTABLEB,
			INPUTIMGA,
			INPUTTEXTA,
			IMGCONTENTC,
			TITLEA,
			MESA, // 留言模块----放在最后
			TUIJIAN,
			manageCopyTips,
			deleteMoveTips
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			...mapGetters(['GET_PUBLISH'])
		},
		created() {
			// this.previewOrEditor(this.statusTemp);
			this.dataListTemp = this.moduleDateList;
			this.moduleTemp = this.moduleTempList;
			// 给每个数组数组添加id
			// this.distributeId();
			// // console.log(this.basicDatas)
		},
		watch: {
			basicData: {
				handler(a, b) {
					// console.log(a, b, '--------------statusTemp---------------');
					this.basicDatas = a;
				},
				deep: true
			},
			scrollTop: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听TITLE_IMG_A变化---------------------------------------');
					this.scrollTitleChange(this.dataLists.id, 60, [this.dataLists, this.indexNum]);
				},
				deep: true
			},
			disabled: {
				handler(a, b) {
					// console.log(a, b, '--------------statusTemp---------------');
					this.disableds = a;
				},
				deep: true
			},
			defaultImg: {
				handler(a, b) {
					// console.log(a, b, '--------------statusTemp---------------');
					this.defaultImgs = a;
				},
				deep: true
			},
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------dataList---------------');
					this.dataLists = a;
				},
				deep: true
			},
			indexNum: {
				handler(a, b) {
					// console.log(a, b, '--------------statusTemp---------------');
					this.indexNums = a;
				},
				deep: true
			},
			tabYItemsIndexs: {
				handler(a, b) {
					// console.log(a, b, '--------------statusTemp---------------');
					this.tabYItemsIndexss = a;
				},
				deep: true
			},
			moduleTempList: {
				handler(a, b) {
					// console.log(a, b, '--------------statusTemp---------------');
					this.moduleTemp = a;
				},
				deep: true
			},
		},
		mounted() {
			console.log(this.dataLists, 'this.dataLists')
		},
		beforeDestroy() {},
		methods: {
			...mapMutations({
				setMoreSet: 'setMoreSet'
			}),
			// 顶部标题修改
			tabIconTitle(e) {
				console.log(e,'顶部标题修改');
				this.dataLists.iconTitle = e[0];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-TITLECONTENTIMGB', data);
			},
			tapIndex (e) {
				console.log(e, '用户修改的数据的index');
				this.indexs = e;
			},
			// 点击删除、上移、下移
			tapDeleteMoveTips (e) {
				console.log(e[0], e[1], '删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false');
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				e[1] === false ? this.manageType = 1 : this.manageType = 0;
				console.log(this.manageType, '------------------this.manageType-------------------');
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-TITLEIMGA', data);
			},
			// 点击管理、复制、完成组件
			tapManageCopyTips (e) {
				console.log(e, '管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值');
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-TITLEIMGA', data);
			},
			// 点击模块TITLE_CONTENT_IMG_B组件
			tapTITLECONTENTIMGB (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块TITLE_CONTENT_IMG_C组件
			tapTITLECONTENTIMGC (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块TITLE_CONTENT_IMG_D组件
			tapTITLECONTENTIMGD (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块TITLE_CONTENT_IMG_E组件
			tapTITLECONTENTIMGE (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块TITLE_IMG_A组件
			tapTITLEIMGA (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块CONTENT_B组件
			tapCONTENTB (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块IMG_A组件
			tapIMGA (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块IMG_CONTENT_A组件
			tapIMGCONTENTA (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块TEXT_A组件
			tapTEXTA (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块INPUT_TABLE_A组件
			tapINPUTTABLEA (e) {
				// console.log(e, '所有操作后返回数据');
				this.dataListTemp.content.context.tempCon.custModules = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块INPUT_CHECK_A组件
			tapINPUTCHECKA (e) {
				// console.log(e, '所有操作后返回数据');
				this.dataListTemp.content.context.tempCon.custModules = e[0];
				if (e[1].length > 0 && e[1] !== null) {
					this.modeCustModule.imgSelect = e[1];
				}
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块INPUT_CHECK_B组件
			tapINPUTCHECKB (e) {
				// console.log(e, '所有操作后返回数据');
				this.dataListTemp.content.context.tempCon.custModules = e[0];
				if (e[1].length > 0 && e[1] !== null) {
					this.modeCustModule.styleSelect = e[1];
				}
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块INPUT_TABLE_B组件
			tapINPUTTABLEB (e) {
				// console.log(e, '所有操作后返回数据');
				this.dataListTemp.content.context.tempCon.custModules = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块tapINPUT_IMG_A组件
			tapINPUTIMGA (e) {
				// console.log(e, '所有操作后返回数据');
				this.dataListTemp.content.context.tempCon.custModules = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块INPUT_TEXT_A组件
			tapINPUTTEXTA (e) {
				// console.log(e, '所有操作后返回数据');
				this.dataListTemp.content.context.tempCon.custModules = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块MESA组件 ----------留言模块----放在最后
			tapMESA (e) {
				// console.log(e, '所有操作后返回数据');
				this.dataListTemp.content.context.tempCon.mesModules = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			tapIMGCONTENTC(e){
				// console.log(e,'所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			tapTITLEA(e){
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			tapCONTENTA(e){
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			tapNEWSA(e){
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
		}
	};
</script>

<style>
	.scroll-Y{
		position: relative;
		height: 93vh;
		-webkit-overflow-scrolling: touch;
	}
	.scroll-Cust-Y{
		position: relative;
		height: 100vh;
		-webkit-overflow-scrolling: touch;
	}
	.template{
		background:#FFFFFF;
	}
	.waterMark{
		height: 27vh;
		background: #F9F9F9;
	}
	.text{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #bdbdbd;
		text-align: center;
		line-height: 80upx;
		padding: 20upx 0
	}
	.kongCust{
		position: relative;
		width: 100%;
		height: 20upx;
		background: #F9F9F9;
	}
	.titleCust{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Medium;
		font-size: 36upx;
		color: #2E2E30;
		line-height: 100upx;
		text-align: center;
		margin-top: 0upx;
		border-bottom: 2upx solid #efefef;
	}
	.previewCust{
		background: #f9f9f9;
	}
	.mode-items{
		position: relative;
		width: 100%;
	}
</style>