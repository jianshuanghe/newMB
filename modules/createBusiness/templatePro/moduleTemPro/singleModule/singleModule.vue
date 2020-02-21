<template>
	<div class="template-Items">
		<div class="mode-list" :id='dataLists.id'>
			<!-- 数据中的modules模块 -->
			<div class="mode-items" >
				
				<INFOB
				v-if="dataLists.type === 'INFO_B'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='dataLists'
				:indexNum='indexNums'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-INFOB='tapINFOB'></INFOB>
				
				<!-- 组件 -->
				<IMGB
				v-if="dataLists.type === 'IMG_B'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-IMGB='tapIMGB'></IMGB>
				<!-- 组件 -->
				<MONEYA
				v-if="dataLists.type === 'MONEY_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-MONEYA='tapMONEYA'></MONEYA>
				<!-- 组件 -->
				<TABLEA
				v-if="dataLists.type === 'TABLE_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TABLEA='tapTABLEA'></TABLEA>
				<!-- 组件 -->
				<SELECTB
				v-if="dataLists.type === 'SELECT_B'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@set-FixedShow='setFixedShowTemp'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-SELECTB='tapSELECTB'></SELECTB>
				<!-- 组件 -->
				<SELECTA
				v-if="dataLists.type === 'SELECT_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@set-FixedShow='setFixedShowTemp'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-SELECTA='tapSELECTA'></SELECTA>
				<!-- 组件 -->
				<TEXTA
				v-if="dataLists.type === 'TEXT_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:defaultImg='defaultAddImg'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TEXTA='tapTEXTA'></TEXTA>
				<!-- 组件 产品细节 -->
				<IMGCONTENTC
				v-if="dataLists.type === 'IMG_CONTENT_C'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:dataList='dataLists'
				:indexNum='index'
				:defaultImg='defaultAddImg'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-IMGCONTENTC='tapIMGCONTENTC'
				></IMGCONTENTC>
				<!-- 组件 -->
				<MONEYB
				v-if="dataLists.type === 'MONEY_B'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-MONEYB='tapMONEYB'
				></MONEYB>
				<!-- 组件 -->
				<TABLEC
				v-if="dataLists.type === 'TABLE_C'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TABLEC='tapTABLEC'
				></TABLEC>
				<!-- 组件 -->
				<TABLED
				v-if="dataLists.type === 'TABLE_D'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TABLED='tapTABLED'
				></TABLED>
				<!-- 组件 -->
				<TABLEE
				v-if="dataLists.type === 'TABLE_E'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-TABLEE='tapTABLEE'
				></TABLEE>
				<!-- 组件 -->
				<TITLEA
				v-if="dataLists.type === 'TITLE_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-TITLEA='tapTITLEA'
				></TITLEA>
				<!-- 组件 -->
				<FOLLOWA
				v-if="dataLists.type === 'FOLLOW_A'"
				:updataTime='dataListTemp.content'
				:disabled='disableds'
				:routeParam='routeParam'
				:dataList="dataListTemp.content"
				>
				</FOLLOWA>
				<!-- 组件 -->
				<CONTENTA
				v-if="dataLists.type === 'CONTENT_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:disabled='disableds'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-CONTENTA='tapCONTENTA'
				></CONTENTA>
				<!-- 组件 -->
				<NEWSA
				v-if="dataLists.type === 'NEWS_A'"
				:basicData='basicDatas'
				:scrollTop='scrollTops'
				:defaultImg='defaultAddImg'
				:defaultLink='defaultAddLink'
				:disabled='disableds'
				:dataList='dataLists'
				:indexNum='index'
				:tabYItemsIndexs='tabYItemsIndexs'
				@set-FixedShow='setFixedShowTemp'
				@tap-ChangeTitle='tapChangeTitle'
				@tap-NEWSA='tapNEWSA'
				></NEWSA>
				
			</div>
		</div>
	</div>
</template>

<script>
	
	import defaultAddImg from '@/static/mbcImg/publish/createBusiness/defaultAdd.png';
	import pageStatus from '@/components/common/RHX/pageStatus/pageStatus';
	import moduleTitle from '@/components/common/RHX/moduleTitle/moduleTitle';
	import swiperBanner from '@/components/common/RHX/swiperBanner/swiperBanner';
	import moduleYlist from '@/components/common/RHX/moduleYlist/moduleYlist';
	import INFOB from '@/components/rhx/InstrModule/INFO_B';
	import IMGB from '@/components/rhx/InstrModule/IMG_B';
	import MONEYA from '@/components/rhx/InstrModule/MONEY_A';
	import TABLEA from '@/components/rhx/InstrModule/TABLE_A';
	import SELECTB from '@/components/rhx/InstrModule/SELECT_B';
	import SELECTA from '@/components/rhx/InstrModule/SELECT_A';
	import TEXTA from '@/components/rhx/InstrModule/TEXT_A';
	import madeCustTitleXModule from '@/components/common/RHX/madeCustModule/madeCustTitleXModule/madeCustTitleXModule';
	import INPUTTABLEA from '@/components/rhx/InstrModule/INPUT_TABLE_A';
	import INPUTCHECKA from '@/components/rhx/InstrModule/INPUT_CHECK_A';
	import INPUTCHECKB from '@/components/rhx/InstrModule/INPUT_CHECK_B';
	import INPUTTABLEB from '@/components/rhx/InstrModule/INPUT_TABLE_B';
	import INPUTIMGA from '@/components/rhx/InstrModule/INPUT_IMG_A';
	import INPUTTEXTA from '@/components/rhx/InstrModule/INPUT_TEXT_A';
	import defaultAddLink from '@/static/mbcImg/publish/createBusiness/defaultAddLink.png';
	import TABLEC from '@/components/rhx/InstrModule/TABLE_C';
	import TABLED from '@/components/rhx/InstrModule/TABLE_D';
	import TABLEE from '@/components/rhx/InstrModule/TABLE_E';
	import IMGCONTENTC from '@/components/rhx/InstrModule/IMG_CONTENT_C';
	import MONEYB from '@/components/rhx/InstrModule/MONEY_B';
	import TITLEA from '@/components/rhx/InstrModule/TITLE_A';
	import FOLLOWA from '@/components/rhx/InstrModule/FOLLOW_A';
	import CONTENTA from '@/components/rhx/InstrModule/CONTENT_A';
	import NEWSA from '@/components/rhx/InstrModule/NEWS_A';
	// 留言模块----放在最后
	import MESA from '@/components/rhx/InstrModule/MES_A';
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
			'indexNum',
			'tabYItemsIndex',
		],
		components: {
			pageStatus,
			moduleTitle,
			swiperBanner,
			moduleYlist,
			INFOB,
			IMGB,
			MONEYA,
			TABLEA,
			SELECTB,
			SELECTA,
			TEXTA,
			madeCustTitleXModule,
			INPUTTABLEA,
			INPUTCHECKA,
			INPUTCHECKB,
			INPUTTABLEB,
			INPUTIMGA,
			INPUTTEXTA,
			TABLEC,
			TABLED,
			TABLEE,
			IMGCONTENTC,
			MONEYB,
			TITLEA,
			CONTENTA,
			FOLLOWA,
			NEWSA,
			MESA, // 留言模块----放在最后
			TUIJIAN,
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			...mapGetters(['GET_PUBLISH'])
		},
		created() {
			this.previewOrEditor(this.statusTemp);
			this.dataListTemp = this.moduleDateList;
			this.moduleTemp = this.moduleTempList;
			// 给每个数组数组添加id
			// this.distributeId();
			// // console.log(this.basicDatas)
		},
		watch: {
			basicData: {
				handler(a, b) {
					console.log(a, b, '--------------statusTemp---------------');
					this.basicDatas = a;
				},
				deep: true
			},
			scrollTop: {
				handler(a, b) {
					// console.log(a, b, '--------------statusTemp---------------');
					this.scrollTops = a;
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
					console.log(a, b, '33');
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
		},
		mounted() {
			console.log(this.dataLists, 'this.dataLists')
		},
		beforeDestroy() {},
		methods: {
			...mapMutations({
				setMoreSet: 'setMoreSet'
			}),
			// 点击模块INFO_B组件
			tapINFOB (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块IMG_B组件
			tapIMGB (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块MONEY_A组件
			tapMONEYA (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块TABLE_A组件
			tapTABLEA (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块SELECT_B组件
			tapSELECTB (e) {
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 点击模块SELECT_A组件
			tapSELECTA (e) {
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
			//点击模块MONEY_B组件
			tapMONEYB(e){
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			//点击模块TABLE_C组件
			tapTABLEC(e){
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			//点击模块TABLE_D组件
			tapTABLED(e){
				// console.log(e, '所有操作后返回数据');
				this.basicDatas = e;
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			//点击模块TABLE_E组件
			tapTABLEE(e){
				// console.log(e, '所有操作后返回数据');
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