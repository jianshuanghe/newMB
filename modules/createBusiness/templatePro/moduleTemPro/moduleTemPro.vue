<template>
	<div class="template">
		<div class="pageStatus" v-if='pageStatus'>
			<pageStatus
			:isMenu='isMenu'
			></pageStatus>
		</div>
		<div class="pageContent" v-if='!pageStatus'>
			<div class="selectTemplate-content" v-if='tempRefresh'>
					<!-- 模板title -->
					<moduleTitle
					:disabled='statusPreviewEditor'
					:titleText='titleText'
					:manngeShow='true'
					:dataList="dataListTemp.content "
					:moduleTempList='moduleTemp'
					@tap-TitleScroll='tapTitleScroll'
					@title-Height='titleHeight'
					@tap-Title='tapTitle'
					></moduleTitle>
					<!-- 横向模块列表  等到页面滚动到此位置是出现，在此设置主要是解决scroll中的模块闪动问题 -->
					<div class="module-show" v-if="dataListTemp.content.context.tempCon.isMenu === '1'">
						<div class="module-list-x" v-if='scrollFixedShow && setFixedShow'>
							<!-- 模块横向单元组件 -->
							<moduleYlist
							id='moduleYlist'
							:titleH='titleH'
							:disabled='statusPreviewEditor'
							:scrollInto='scrollInto'
							:tabYItemsIndex='tabYItemsIndex'
							:dataListY="dataListTemp.content "
							:dataList="dataListTemp.content.context.tempCon.modules"
							:moduleTempList='moduleTemp'
							:scrollX='true'
							:column='4.5'
							:scrollFixedShow='scrollFixedShow'
							:fixedScroll='fixedScroll'
							@set-FixedShow='setFixedShowTemp'
							@top-Fixed='topFixed'
							@tap-ModuleYList='tapModuleYList'
							@tap-Title='tapTitle'
							></moduleYlist>
						</div>
					</div>
					<!-- 内容区 -->
					<div class="content">
						<scroll-view
						scroll-top="" 
						:scroll-y="true" 
						class="scroll-Y"
						:scroll-with-animation='!statusPreviewEditor'
						:scroll-into-view="scrollInto"
						@scroll="scroll">
							<div class="banner" v-if ="dataListTemp.content.context.tempCon.banner[0].picUrl !=''">
								<!-- 轮播图组件 -->
								<swiperBanner
								:disabled='statusPreviewEditor'
								:defaultImg='defaultAddImg'
								swiperWidth='100vw'
								swiperHeight='53.333vw'
								:bannerList='dataListTemp.content.context.tempCon.banner'
								autoplay='true'
								interval='5000'
								@tap-Banner='tapBanner'
								v-if='isrefresh && dataListTemp.content.context.tempCon.banner'></swiperBanner>
							</div>
							<div class="module-show" v-if="dataListTemp.content.context.tempCon.isMenu === '1'">
								<div class="moduleYlist">
									<!-- 模块横向单元组件 -->
									<moduleYlist
									id='moduleYlist'
									:titleH='titleH'
									:disabled='statusPreviewEditor'
									:scrollInto='scrollInto'
									:tabYItemsIndex='tabYItemsIndex'
									:dataListY="dataListTemp.content "
									:dataList="dataListTemp.content.context.tempCon.modules"
									:moduleTempList='moduleTemp'
									:scrollX='true'
									:column='4.5'
									:scrollFixedShow='scrollFixedShow'
									:fixedScroll='fixedScroll'
									@set-FixedShow='setFixedShowTemp'
									@top-Fixed='topFixed'
									@tap-ModuleYList='tapModuleYList'
									@tap-Title='tapTitle'
									></moduleYlist>
								</div>
							</div>
							<!-- 数据中的modules模块 -->
							<div class="selectTemplate" v-for="(items, index) in dataListTemp.content.context.tempCon.modules" :key="index">
								<!-- 多模块聚合渲染模板 -->
								<moreModule
								v-if="items.mType === 'moreModule'"
								:basicData='dataListTemp.content.context.tempCon.modules'
								:scrollTop='fixedScroll.scrollTop'
								:moduleTitleStyle='dataListTemp.content.context.tempCon.moduleTitleStyle'
								:disabled='statusPreviewEditor'
								:defaultImg='defaultAddImg'
								:dataList='items'
								:moduleTempList='moduleTemp'
								:indexNum='index'
								:tabYItemsIndex='tabYItemsIndex'
								@set-FixedShow='setFixedShowTemp'
								@tap-ChangeTitle='tapChangeTitle'
								></moreModule>
								<!-- 单一模块聚合渲染模板 -->
								<singleModule
								v-if="items.mType === 'singleModule'"
								:basicData='dataListTemp.content.context.tempCon.modules'
								:scrollTop='fixedScroll.scrollTop'
								:moduleTitleStyle='dataListTemp.content.context.tempCon.moduleTitleStyle'
								:disabled='statusPreviewEditor'
								:defaultImg='defaultAddImg'
								:dataList='items'
								:indexNum='index'
								@set-FixedShow='setFixedShowTemp'
								:tabYItemsIndex='tabYItemsIndex'
								@tap-ChangeTitle='tapChangeTitle'
								></singleModule>
								
							</div>
							<!-- 数据中的custModules -->
							<div class="moduleCustYlist" v-if='tempCustRefresh && dataListTemp.content.context.tempCon.custModules'>
								<!-- 模块横向单元组件 -->
								<madeCustTitleXModule
								:titleH='titleH'
								:disabled='statusPreviewEditor'
								:custIndexShow='custIndexShow'
								:tabYItemsIndex='tabYItemsIndex'
								:dataList="dataListTemp"
								:moduleCustTempList='moduleCustTempList'
								:scrollX='true'
								:column='5'
								:scrollFixedShow='!scrollFixedShow'
								:fixedScroll='fixedScroll'
								@set-FixedShow='setFixedShowTemp'
								@tap-ScrollFixedShow='tapScrollFixedShow'
								@top-CustFixed='topCustFixed'
								@tap-CustTitle='tapCustTitle'
								@tap-CustModuleYList='tapCustModuleYList'
								v-if='statusPreviewEditor'
								></madeCustTitleXModule>
								<div class="previewCustTitle" v-if='!statusPreviewEditor'>
									<div class="kongCust"></div>
									<div class="titleCust">定制信息</div>
								</div>
							</div>
							<!-- 定制编辑 -->
							<div class="editCust" v-if='statusPreviewEditor'>
								<div class="selectTemplate" v-for="(items, index) in dataListTemp.content.context.tempCon.custModules" :key="index">
									<div class="editCustItems" v-if='custIndexShow === index'>
										<!-- 组件 -->
										<INPUTTABLEA
										v-if="items.type === 'INPUT_TABLE_A'"
										:basicData='dataListTemp.content.context.tempCon.custModules'
										:scrollTop='fixedScroll.scrollTop'
										:disabled='statusPreviewEditor'
										:defaultImg='defaultAddImg'
										:dataList='items'
										:indexNum='index'
										:tabYItemsIndex='tabYItemsIndex'
										@tap-ChangeTitle='tapChangeTitle'
										@tap-INPUTTABLEA='tapINPUTTABLEA'></INPUTTABLEA>
										<!-- 组件 -->
										<INPUTCHECKA
										v-if="items.type === 'INPUT_CHECK_A'"
										:basicData='dataListTemp.content.context.tempCon.custModules'
										:scrollTop='fixedScroll.scrollTop'
										:disabled='statusPreviewEditor'
										:defaultImg='defaultAddImg'
										:dataList='items'
										:indexNum='index'
										:tabYItemsIndex='tabYItemsIndex'
										@tap-ChangeTitle='tapChangeTitle'
										@tap-INPUTCHECKA='tapINPUTCHECKA'></INPUTCHECKA>
										<!-- 组件 -->
										<INPUTCHECKB
										v-if="items.type === 'INPUT_CHECK_B'"
										:basicData='dataListTemp.content.context.tempCon.custModules'
										:scrollTop='fixedScroll.scrollTop'
										:disabled='statusPreviewEditor'
										:defaultImg='defaultAddImg'
										:dataList='items'
										:indexNum='index'
										:tabYItemsIndex='tabYItemsIndex'
										@tap-ChangeTitle='tapChangeTitle'
										@tap-INPUTCHECKB='tapINPUTCHECKB'></INPUTCHECKB>
										<!-- 组件 -->
										<INPUTTABLEB
										v-if="items.type === 'INPUT_TABLE_B'"
										:basicData='dataListTemp.content.context.tempCon.custModules'
										:scrollTop='fixedScroll.scrollTop'
										:disabled='statusPreviewEditor'
										:defaultImg='defaultAddImg'
										:dataList='items'
										:indexNum='index'
										:tabYItemsIndex='tabYItemsIndex'
										:modeCustModule='modeCustModule'
										@tap-ChangeTitle='tapChangeTitle'
										@tap-INPUTTABLEB='tapINPUTTABLEB'></INPUTTABLEB>
										<!-- 组件 -->
										<INPUTIMGA
										v-if="items.type === 'INPUT_IMG_A'"
										:basicData='dataListTemp.content.context.tempCon.custModules'
										:scrollTop='fixedScroll.scrollTop'
										:disabled='statusPreviewEditor'
										:defaultImg='defaultAddImg'
										:dataList='items'
										:indexNum='index'
										:tabYItemsIndex='tabYItemsIndex'
										@tap-ChangeTitle='tapChangeTitle'
										@tap-INPUTIMGA='tapINPUTIMGA'></INPUTIMGA>
										<!-- 组件 -->
										<INPUTTEXTA
										v-if="items.type === 'INPUT_TEXT_A'"
										:basicData='dataListTemp.content.context.tempCon.custModules'
										:scrollTop='fixedScroll.scrollTop'
										:disabled='statusPreviewEditor'
										:defaultImg='defaultAddImg'
										:dataList='items'
										:indexNum='index'
										:tabYItemsIndex='tabYItemsIndex'
										@tap-ChangeTitle='tapChangeTitle'
										@tap-INPUTTEXTA='tapINPUTTEXTA'></INPUTTEXTA>
									</div>
								</div>
							</div>
							<!-- 定制预览 -->
							<div class="previewCust" v-if='!statusPreviewEditor'>
								<div class="selectTemplate" v-for="(items, index) in dataListTemp.content.context.tempCon.custModules" :key="index">
									<!-- 组件 -->
									<INPUTTABLEA
									v-if="items.type === 'INPUT_TABLE_A'"
									:basicData='dataListTemp.content.context.tempCon.custModules'
									:scrollTop='fixedScroll.scrollTop'
									:disabled='statusPreviewEditor'
									:defaultImg='defaultAddImg'
									:dataList='items'
									:indexNum='index'
									:tabYItemsIndex='tabYItemsIndex'
									@tap-ChangeTitle='tapChangeTitle'
									@tap-INPUTTABLEA='tapINPUTTABLEA'></INPUTTABLEA>
									<!-- 组件 -->
									<INPUTCHECKA
									v-if="items.type === 'INPUT_CHECK_A'"
									:basicData='dataListTemp.content.context.tempCon.custModules'
									:scrollTop='fixedScroll.scrollTop'
									:disabled='statusPreviewEditor'
									:defaultImg='defaultAddImg'
									:dataList='items'
									:indexNum='index'
									:tabYItemsIndex='tabYItemsIndex'
									@tap-ChangeTitle='tapChangeTitle'
									@tap-INPUTCHECKA='tapINPUTCHECKA'></INPUTCHECKA>
									<!-- 组件 -->
									<INPUTCHECKB
									v-if="items.type === 'INPUT_CHECK_B'"
									:basicData='dataListTemp.content.context.tempCon.custModules'
									:scrollTop='fixedScroll.scrollTop'
									:disabled='statusPreviewEditor'
									:defaultImg='defaultAddImg'
									:dataList='items'
									:indexNum='index'
									:tabYItemsIndex='tabYItemsIndex'
									@tap-ChangeTitle='tapChangeTitle'
									@tap-INPUTCHECKB='tapINPUTCHECKB'></INPUTCHECKB>
									<!-- 组件 -->
									<INPUTTABLEB
									v-if="items.type === 'INPUT_TABLE_B'"
									:basicData='dataListTemp.content.context.tempCon.custModules'
									:scrollTop='fixedScroll.scrollTop'
									:disabled='statusPreviewEditor'
									:defaultImg='defaultAddImg'
									:dataList='items'
									:indexNum='index'
									:tabYItemsIndex='tabYItemsIndex'
									:modeCustModule='modeCustModule'
									@tap-ChangeTitle='tapChangeTitle'
									@tap-INPUTTABLEB='tapINPUTTABLEB'></INPUTTABLEB>
									<!-- 组件 -->
									<INPUTIMGA
									v-if="items.type === 'INPUT_IMG_A'"
									:basicData='dataListTemp.content.context.tempCon.custModules'
									:scrollTop='fixedScroll.scrollTop'
									:disabled='statusPreviewEditor'
									:defaultImg='defaultAddImg'
									:dataList='items'
									:indexNum='index'
									:tabYItemsIndex='tabYItemsIndex'
									@tap-ChangeTitle='tapChangeTitle'
									@tap-INPUTIMGA='tapINPUTIMGA'></INPUTIMGA>
									<!-- 组件 -->
									<INPUTTEXTA
									v-if="items.type === 'INPUT_TEXT_A'"
									:basicData='dataListTemp.content.context.tempCon.custModules'
									:scrollTop='fixedScroll.scrollTop'
									:disabled='statusPreviewEditor'
									:defaultImg='defaultAddImg'
									:dataList='items'
									:indexNum='index'
									:tabYItemsIndex='tabYItemsIndex'
									@tap-ChangeTitle='tapChangeTitle'
									@tap-INPUTTEXTA='tapINPUTTEXTA'></INPUTTEXTA>
								</div>
							</div>
							<!-- 留言区 -->
							<div class="mesages">
								<!-- 组件 -->
								<MESA
								v-if="dataListTemp.content.context.tempCon.mesModules"
								:routeParam='routeParam'
								:basicData='dataListTemp.content.context.tempCon.mesModules'
								:scrollTop='fixedScroll.scrollTop'
								:disabled='statusPreviewEditor'
								defaultImg=''
								dataList=''
								indexNum=''
								tabYItemsIndex=''
								@tap-ChangeTitle='tapChangeTitle'
								@tap-MESA='tapMESA'></MESA>
							</div>
							<!-- AI区域 -->
							<div class="AI" v-if='routeParam.aiListTemp === 1'>
								<TUIJIAN
								:basicData='dataListTemp.content.context.tempCon.custModules'
								:moduleAIDateList='moduleAIDateList'
								:scrollTop='fixedScroll.scrollTop'
								:disabled='statusPreviewEditor'
								:defaultImg='defaultAddImg'
								@tap-ChangeTitle='tapChangeTitle'
								></TUIJIAN>
							</div>
							<!-- 公司水印区 -->
							<div class="waterMark">
								<div class="text">本系统由 @陌拜 提供技术支持</div>
							</div>
						</scroll-view>
					</div>
			
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import pageStatus from '@/components/common/RHX/pageStatus/pageStatus';
	import moduleTitle from '@/components/common/RHX/moduleTitle/moduleTitle';
	import swiperBanner from '@/components/common/RHX/swiperBanner/swiperBanner';
	import moduleYlist from '@/components/common/RHX/moduleYlist/moduleYlist';
	import madeCustTitleXModule from '@/components/common/RHX/madeCustModule/madeCustTitleXModule/madeCustTitleXModule';
	import INPUTTABLEA from '@/components/rhx/InstrModule/INPUT_TABLE_A';
	import INPUTCHECKA from '@/components/rhx/InstrModule/INPUT_CHECK_A';
	import INPUTCHECKB from '@/components/rhx/InstrModule/INPUT_CHECK_B';
	import INPUTTABLEB from '@/components/rhx/InstrModule/INPUT_TABLE_B';
	import INPUTIMGA from '@/components/rhx/InstrModule/INPUT_IMG_A';
	import INPUTTEXTA from '@/components/rhx/InstrModule/INPUT_TEXT_A';
	// 留言模块----放在最后
	import MESA from '@/components/rhx/InstrModule/MES_A';
	import moreModule from './moreModule/moreModule';
	import singleModule from './singleModule/singleModule';
	
	import { mapMutations, mapGetters } from 'vuex';
	//AI推送
	import TUIJIAN from '@/components/rhx/modules/TUIJIAN';
	export default {
		data() {
			return {
				tempRefresh: true, // 是否要刷新当前页面
				tempCustRefresh: true,
				titleH: 0, // title高度
				scrollFixedShow: false, // 判断代替横向模块的部分是否展示
				fixedScroll: { // 需要固定定位的东西
					scrollTop: 0,
					topFixedNum: 0,
				},
				newsData:{
					setFixedShow: true, // 从父原则处理横向导航栏遮挡问题
					statusTemps: 1, // 当前模板的状态；0代表：编辑，1代表：预览，2代表，3代表：.....
					sourceTemps: this.routeParam ? this.routeParam.sourceTemp : null, // 从哪里进来的：0代表：模板列表，1代表：，2代表，3代表：.....
					routeParams: {}, // 路由参数
				},
				scrollInto: "", // 用户指定滚动的id位置
				custIndexShow: 0, // 定制模板中定制信息编辑状态展示子项index'
				defaultAddImg:  this.Static+'publish/createBusiness/defaultAdd.png', // 默认添加图片
				defaultAddLink: this.Static+'publish/createBusiness/defaultAddLink.png', //默认添加链接图片
				titleText: '', // title
				tabYItemsIndex: '', // 用户点击title子项，返回用户点击的index,与横向联动使用
				isrefresh: true, // 强制刷新
				statusPreviewEditor: this.isEditTemp, // 模板状态 默认true编辑状态， false预览状态
				dataListTemp: null, // 模板数据
				moduleTemp: null, // 可添加模板的数据
				modeCustModule: { // 定制中特殊模块
					imgSelect: [], // 图片选择
					styleSelect: [], // 样式选择
				},
				content:{},
			};
		},
		props: [
			'isEditTemp',
			'isMenu',
			'pageStatus',
			'statusTemp',
			'sourceTemp',
			'routeParam',
			'moduleDateList',
			'moduleTempList',
			'moduleCustTempList',
			'moduleAIDateList',
			'setFixedShow'
		],
		components: {
			pageStatus,
			moduleTitle,
			swiperBanner,
			moduleYlist,
			madeCustTitleXModule,
			INPUTTABLEA,
			INPUTCHECKA,
			INPUTCHECKB,
			INPUTTABLEB,
			INPUTIMGA,
			INPUTTEXTA,
			
			MESA, // 留言模块----放在最后
			TUIJIAN,
			moreModule, // 多模块聚合模板
			singleModule, // 单一模块聚合模板
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
			// // console.log(this.dataListTemp.content.context.tempCon.modules)
		},
		watch: {
			statusTemp: {
				handler(a, b) {
					// console.log(a, b, '--------------statusTemp---------------');
					this.previewOrEditor(a);
				},
				deep: true
			},
			moduleDateList: {
				handler(a, b) {
					console.log(a, b, '------------------moduleDateList-----------------');
					this.dataListTemp = a;
					let datalist = this.dataListTemp.content.context.tempCon.modules;
					if (datalist.length > 0){
						console.log(this.titleText, 'llskks')
						this.titleText = datalist[0].iconTitle; // title默认显示数组第一项的title
					} else {
						this.titleText = '编辑模板'; // title默认显示数组第一项的title
					}
				},
				deep: true
			},
			moduleTempList: {
				handler(a, b) {
					// console.log(a, b, '---------------------moduleTempList---------------------');
					this.moduleTemp = a;
					this.distributeId();
					this.distributeCustId();
				},
				deep: true
			}
		},
		mounted() {
		},
		beforeDestroy() {},
		methods: {
			...mapMutations({
				setMoreSet: 'setMoreSet'
			}),
			// 判断当前模板是否编辑还是预览状态
			previewOrEditor(e) {
				// console.log(e, '判断当前模板是否编辑还是预览状态');
				if(e === 0) { // 编辑状态
					this.statusPreviewEditor = true;
				} else if (e === 1) { // 预览状态
					this.statusPreviewEditor = false;
				}
			},
			// 监听fixed定位，处理从父原则
			setFixedShowTemp(e) {
				// console.log(e, '监听fixed定位，处理从父原则');
				this.newsData.setFixedShow = e;
				this.$emit('tap-SetFixedTemp', this.newsData);
			},
			// 给每个数组数组添加id
			distributeId () {
				let datalist = [];
				if (this.dataListTemp) {
					datalist = this.dataListTemp.content.context.tempCon.modules;
					datalist.map((item, index)=>{
						item.id = 'mb' + this.newGuid(); // 每一项添加id 用来点击目录定位到当前项，因为uni-app这样定义的
					});
					console.log(datalist, '--------------datalist--------9999-------')
					if (datalist.length > 0){
						this.titleText = datalist[0].iconTitle; // title默认显示数组第一项的title
						console.log(this.titleText, 'llskks')
					} else {
						this.titleText = '编辑模板'; // title默认显示数组第一项的title
					}
					this.dataListTemp.content.context.tempCon.modules = datalist;
					// this.content = JSON.parse(JSON.stringify(this.dataListTemp.content)) // 深拷贝数组
					this.content = this.dataListTemp.content // 不需要深拷贝数组
				}
			},
			// 给每个数组数组添加id
			distributeCustId () {
				let datalist = [];
				if (this.dataListTemp) {
					if (this.dataListTemp.content.context.tempCon.custModules) {
						datalist = this.dataListTemp.content.context.tempCon.custModules;
						datalist.map((item, index)=>{
							item.id = 'cust' + this.newGuid(); // 每一项添加id 用来点击目录定位到当前项，因为uni-app这样定义的
						});
						if (datalist.length > 0){
							// this.titleText = datalist[0].iconTitle; // title默认显示数组第一项的title
							console.log(this.titleText, 'llskks')
						} else {
							this.titleText = '编辑模板'; // title默认显示数组第一项的title
						}
						this.dataListTemp.content.context.tempCon.custModules = datalist;
						// this.content = JSON.parse(JSON.stringify(this.dataListTemp.content)) // 深拷贝数组
						this.content = this.dataListTemp.content // 不需要深拷贝数组
					}
				}
			},
			// 获取title的高度
			titleHeight(e) {
				// console.log(e, '获取title的高度');
				this.titleH = e;
			},
			scroll: function(e) {
				console.log(e.detail.scrollTop, '--------------------++++++++++++++++++scroll+++++++++++++++++---------------')
				this.fixedScroll.scrollTop = e.detail.scrollTop;
				console.log(this.fixedScroll);
			},
			 // 模块固定定位需要的top值
			topFixed (e) {
				// console.log('需要固定的模块的top值')
				this.fixedScroll.topFixedNum = e;
				// console.log(this.fixedScroll);
			},
			topCustFixed (e) {
				if (e === true) {
					this.titleText = '定制信息'
				} else {
					this.titleText = this.titleText
					console.log(this.titleText, 'llskks')
				}
			},
			// 判断代替横向模块的部分是否展示
			tapScrollFixedShow (e) {
				// console.log(e, '判断代替横向模块的部分是否展示');
				this.scrollFixedShow = e;
			},
			// 点击title返回的数据
			tapTitle(e){
				console.log(e, '点击title返回的数据');
				this.dataListTemp.content.context.tempCon.modules = e[0];
				this.tempRefresh = false; // 刷新当前页面
				this.$nextTick(function() {
					this.tempRefresh = true;
				});
				this.scrollInto = e[1]; // 定位到指定id位置
				let datalist = this.dataListTemp.content.context.tempCon.modules;
				if (datalist.length > 0){
					this.titleText = datalist[0].iconTitle; // title默认显示数组第一项的title
					console.log(this.titleText, 'llskks')
				} else {
					this.titleText = '编辑模板'; // title默认显示数组第一项的title
				}
			},
			// 点击title定制返回的数据
			tapCustTitle(e){
				// console.log(e, '点击title返回的数据');
				this.dataListTemp.content.context.tempCon.custModules = e[0];
				this.custIndexShow = e[1]; // 定位到指定id位置
				// this.tempCustRefresh = false; // 刷新当前页面
				// this.$nextTick(function() {
				// 	this.tempCustRefresh = true;
				// });
				let datalist = this.dataListTemp.content.context.tempCon.custModules;
				if (datalist.length > 0){
					this.titleText = datalist[0].iconTitle; // title默认显示数组第一项的title
					console.log(this.titleText, 'llskks')
				} else {
					this.titleText = '编辑模板'; // title默认显示数组第一项的title
				}
			},
			// 定位到指定id位置
			tapTitleScroll(e){
				console.log(e, '定位到指定id位置');
				this.titleText = e[0].iconTitle; // title
				console.log(this.titleText, 'llskks')
				this.scrollInto = e[0].id; // 定位到指定id位置
				this.tabYItemsIndex = e[1]; // 竖向目录点击的index,传送给横向列表，默认点亮此时对应的items项
				console.log(this.scrollInto, '--------------------this.scrollInto---------------------');
			},
			// 点击横向模块List组件
			tapModuleYList (e) {
				console.log(e, '++++++++++++++++++++++++++++点击模块List组件+++++++++++++++++++++++++++');
				this.titleText = e[0].iconTitle; // title
				console.log(this.titleText, 'llskks')
				this.scrollInto = e[0].id; // 定位到指定id位置
				this.tabYItemsIndex = e[1]; // 竖向目录点击的index,传送给横向列表，默认点亮此时对应的items项
			},
			// 定制模块中横向管理模块
			tapCustModuleYList (e) {
				// console.log(e, '++++++++++++++++++++++++++++点击模块List组件+++++++++++++++++++++++++++');
				// this.titleText = e[0].iconTitle; // title
				// this.scrollIntoCust = e[0].id; // 定位到指定id位置
				this.custIndexShow = e[1]; // 竖向目录点击的index,传送给横向列表，默认点亮此时对应的items项
			},
			// 点击轮播图
			tapBanner(e) {
				// console.log(e, '轮播图操作返回的数据'); 
				this.dataListTemp.content.context.tempCon.banner = e[0];
				this.$emit('tap-ModuleTemPro', this.dataListTemp);
			},
			// 根据用户滑动页面判断当前那个组件显示在最顶部，同时更换title,和横向列表展示更换子项
			tapChangeTitle(e) {
				console.log(e, '根据用户滑动页面判断当前那个组件显示在最顶部，同时更换title,和横向列表展示更换子项');
				this.titleText = e[0].iconTitle; // title
				console.log(e[0].iconTitle, 'llskks1')
				this.tabYItemsIndex = e[1]; // 竖向目录点击的index,传送给横向列表，默认点亮此时对应的items项
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
</style>