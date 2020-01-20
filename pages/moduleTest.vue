<template>
	<div class="template">
		<div class="selectTemplate-content" v-if='tempRefresh'>
			<!-- 模板title -->
			<moduleTitle
			:disabled='true'
			:titleText='titleText'
			:manngeShow='true'
			:dataList="dataListXiaomi.content "
			:moduleTempList='moduleTemp'
			@tap-TitleScroll='tapTitleScroll'
			@title-Height='titleHeight'
			@tap-Title='tapTitle'
			></moduleTitle>
			<!-- 横向模块列表  等到页面滚动到此位置是出现，在此设置主要是解决scroll中的模块闪动问题 -->
			<div class="module-show" v-if="dataListXiaomi.content.context.tempCon.isMenu === '1'">
				<div class="module-list-x" v-if='scrollFixedShow'>
					<!-- 模块横向单元组件 -->
					<moduleYlist
					id='moduleYlist'
					:titleH='titleH'
					:disabled='true'
					:scrollInto='scrollInto'
					:tabYItemsIndex='tabYItemsIndex'
					:dataList="dataListXiaomi.content.context.tempCon.modules"
					:scrollX='true'
					:column='5'
					:scrollFixedShow='scrollFixedShow'
					:fixedScroll='fixedScroll'
					@top-Fixed='topFixed'
					@tap-ModuleYList='tapModuleYList'>
					</moduleYlist>
				</div>
			</div>
			<!-- 内容区 -->
			<div class="content">
				<scroll-view
				scroll-top="" 
				:scroll-y="true" 
				class="scroll-Y"
				:scroll-with-animation='false'
				:scroll-into-view="scrollInto"
				@scroll="scroll">
					<div class="banner">
						<!-- 轮播图组件 -->
						<swiperBanner
						:defaultImg='defaultAddImg'
						swiperWidth='100vw'
						swiperHeight='53.333vw'
						:bannerList='dataListXiaomi.content.context.tempCon.banner'
						autoplay='true'
						interval='5000'
						@tap-Banner='tapBanner'
						v-if='isrefresh && dataListXiaomi.content.context.tempCon.banner'></swiperBanner>
					</div>
					<div class="module-show" v-if="dataListXiaomi.content.context.tempCon.isMenu === '1'">
						<div class="moduleYlist">
							<!-- 模块横向单元组件 -->
							<moduleYlist
							id='moduleYlist'
							:titleH='titleH'
							:disabled='true'
							:scrollInto='scrollInto'
							:tabYItemsIndex='tabYItemsIndex'
							:dataList="dataListXiaomi.content.context.tempCon.modules"
							:scrollX='true'
							:column='5'
							:scrollFixedShow='!scrollFixedShow'
							:fixedScroll='fixedScroll'
							@tap-ScrollFixedShow='tapScrollFixedShow'
							@top-Fixed='topFixed'
							@tap-ModuleYList='tapModuleYList'>
							</moduleYlist>
						</div>
					</div>
					<!-- 数据中的modules模块 -->
					<div class="selectTemplate" v-for="(items, index) in dataListXiaomi.content.context.tempCon.modules" :key="index">
						<!-- 组件 -->
						<TITLECONTENTIMGB
						v-if="items.type === 'TITLE_CONTENT_IMG_B'"
						:basicData='dataListXiaomi.content.context.tempCon.modules'
						:scrollTop='fixedScroll.scrollTop'
						:disabled='true'
						:defaultImg='defaultAddImg'
						:dataList='items'
						:indexNum='index'
						:tabYItemsIndex='tabYItemsIndex'
						@tap-ChangeTitle='tapChangeTitle'
						@tap-TITLECONTENTIMGB='tapTITLECONTENTIMGB'></TITLECONTENTIMGB>
						<!-- 组件 -->
						<TITLECONTENTIMGC
						v-if="items.type === 'TITLE_CONTENT_IMG_C'"
						:basicData='dataListXiaomi.content.context.tempCon.modules'
						:scrollTop='fixedScroll.scrollTop'
						:disabled='true'
						:defaultImg='defaultAddImg'
						:dataList='items'
						:indexNum='index'
						:tabYItemsIndex='tabYItemsIndex'
						@tap-ChangeTitle='tapChangeTitle'
						@tap-TITLECONTENTIMGC='tapTITLECONTENTIMGC'></TITLECONTENTIMGC>
						<!-- 组件 -->
						<TITLEIMGA
						v-if="items.type === 'TITLE_IMG_A'"
						:basicData='dataListXiaomi.content.context.tempCon.modules'
						:scrollTop='fixedScroll.scrollTop'
						:disabled='true'
						:defaultImg='defaultAddImg'
						:dataList='items'
						:indexNum='index'
						:tabYItemsIndex='tabYItemsIndex'
						@tap-ChangeTitle='tapChangeTitle'
						@tap-TITLEIMGA='tapTITLEIMGA'></TITLEIMGA>
						<!-- 组件 -->
						<CONTENTB
						v-if="items.type === 'CONTENT_B'"
						:basicData='dataListXiaomi.content.context.tempCon.modules'
						:scrollTop='fixedScroll.scrollTop'
						:disabled='true'
						:defaultImg='defaultAddImg'
						:dataList='items'
						:indexNum='index'
						:tabYItemsIndex='tabYItemsIndex'
						@tap-ChangeTitle='tapChangeTitle'
						@tap-CONTENTB='tapCONTENTB'></CONTENTB>
						<!-- 组件 -->
						<INFOB
						v-if="items.type === 'INFO_B'"
						:basicData='dataListXiaomi.content.context.tempCon.modules'
						:scrollTop='fixedScroll.scrollTop'
						:disabled='true'
						:defaultImg='defaultAddImg'
						:dataList='items'
						:indexNum='index'
						:tabYItemsIndex='tabYItemsIndex'
						@tap-ChangeTitle='tapChangeTitle'
						@tap-INFOB='tapINFOB'></INFOB>
						<!-- 组件 -->
						<IMGA
						v-if="items.type === 'IMG_A'"
						:basicData='dataListXiaomi.content.context.tempCon.modules'
						:scrollTop='fixedScroll.scrollTop'
						:disabled='true'
						:defaultImg='defaultAddImg'
						:dataList='items'
						:indexNum='index'
						:tabYItemsIndex='tabYItemsIndex'
						@tap-ChangeTitle='tapChangeTitle'
						@tap-IMGA='tapIMGA'></IMGA>
						<!-- 组件 -->
						<IMGCONTENTA
						v-if="items.type === 'IMG_CONTENT_A'"
						:basicData='dataListXiaomi.content.context.tempCon.modules'
						:scrollTop='fixedScroll.scrollTop'
						:disabled='true'
						:defaultImg='defaultAddImg'
						:dataList='items'
						:indexNum='index'
						:tabYItemsIndex='tabYItemsIndex'
						@tap-ChangeTitle='tapChangeTitle'
						@tap-IMGCONTENTA='tapIMGCONTENTA'></IMGCONTENTA>
						<!-- 组件 -->
						<IMGB
						v-if="items.type === 'IMG_B'"
						:basicData='dataListXiaomi.content.context.tempCon.modules'
						:scrollTop='fixedScroll.scrollTop'
						:disabled='true'
						:defaultImg='defaultAddImg'
						:dataList='items'
						:indexNum='index'
						:tabYItemsIndex='tabYItemsIndex'
						@tap-ChangeTitle='tapChangeTitle'
						@tap-IMGB='tapIMGB'></IMGB>
					</div>
					<!-- 数据中的modules -->
					<TUIJINAN>
						
					</TUIJINAN>
					<!-- 留言区 -->
					<div class="mesages">
						<!-- 组件 -->
						<MESA
						v-if="dataListXiaomi.content.context.tempCon.mesModules"
						:basicData='dataListXiaomi.content.context.tempCon.mesModules'
						scrollTop=''
						:disabled='true'
						defaultImg=''
						dataList=''
						indexNum=''
						tabYItemsIndex=''
						@tap-MESA='tapMESA'></MESA>
					</div>
				</scroll-view>
			</div>
			
		</div>
	</div>
</template>

<script>
	import {dataList}from '@/static/mbcJs/dataJson/dingzhi.js';
	import {xiaomi}from '@/static/mbcJs/dataJson/xiaomi.js';
	import {moduleTemp}from '@/static/mbcJs/dataJson/moduleTemp.js';
	import defaultAddImg from '@/static/mbcImg/publish/createBusiness/defaultAdd.png';
	import moduleTitle from '@/components/common/RHX/moduleTitle/moduleTitle';
	import swiperBanner from '@/components/common/RHX/swiperBanner/swiperBanner';
	import moduleYlist from '@/components/common/RHX/moduleYlist/moduleYlist';
	import TITLECONTENTIMGB from '@/components/rhx/InstrModule/TITLE_CONTENT_IMG_B';
	import TITLECONTENTIMGC from '@/components/rhx/InstrModule/TITLE_CONTENT_IMG_C';
	import TITLEIMGA from '@/components/rhx/InstrModule/TITLE_IMG_A';
	import CONTENTB from '@/components/rhx/InstrModule/CONTENT_B';
	import INFOB from '@/components/rhx/InstrModule/INFO_B';
	import IMGA from '@/components/rhx/InstrModule/IMG_A';
	import IMGCONTENTA from '@/components/rhx/InstrModule/IMG_CONTENT_A';
	import IMGB from '@/components/rhx/InstrModule/IMG_B';
	import TUIJINAN from '@/components/rhx/modules/TUIJIAN';
	// 留言模块----放在最后
	import MESA from '@/components/rhx/InstrModule/MES_A';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				tempRefresh: true, // 是否要刷新当前页面
				titleH: 0, // title高度
				scrollFixedShow: false, // 判断代替横向模块的部分是否展示
				fixedScroll: { // 需要固定定位的东西
					scrollTop: 0,
					topFixedNum: 0,
				},
				scrollInto: "", // 用户指定滚动的id位置
				defaultAddImg: defaultAddImg, // 默认添加图片
				titleText: '', // title
				tabYItemsIndex: '', // 用户点击title子项，返回用户点击的index,与横向联动使用
				isrefresh: true, // 强制刷新
				myDataList: dataList,
				moduleTemp: moduleTemp, // 添加模块的接口列表
				dataListXiaomi: xiaomi,
				content:{}
			};
		},
		components: {
			moduleTitle,
			swiperBanner,
			moduleYlist,
			TITLECONTENTIMGB,
			TITLECONTENTIMGC,
			TITLEIMGA,
			CONTENTB,
			INFOB,
			IMGA,
			IMGCONTENTA,
			IMGB,
			TUIJINAN,
			MESA, // 留言模块----放在最后
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			...mapGetters(['GET_PUBLISH'])
		},
		created() {
			// 给每个数组数组添加id
			this.distributeId();
			console.log(this.dataListXiaomi.content.context.tempCon.modules)
		},
		watch: {
		},
		mounted() {},
		beforeDestroy() {},
		methods: {
			...mapMutations({
				setMoreSet: 'setMoreSet'
			}),
			// 给每个数组数组添加id
			distributeId () {
				let datalist = this.dataListXiaomi.content.context.tempCon.modules;
				datalist.map((item, index)=>{
					item.id = 'mb' + this.newGuid(); // 每一项添加id 用来点击目录定位到当前项，因为uni-app这样定义的
				});
				if (datalist.length > 0){
					this.titleText = datalist[0].iconTitle  || '编辑模板'; // title默认显示数组第一项的title
				} else {
					this.titleText = '编辑模板'; // title默认显示数组第一项的title
				}
				this.dataListXiaomi.content.context.tempCon.modules = datalist;
				// this.content = JSON.parse(JSON.stringify(this.dataListXiaomi.content)) // 深拷贝数组
				this.content = this.dataListXiaomi.content // 不需要深拷贝数组
			},
			// 获取title的高度
			titleHeight(e) {
				console.log(e, '获取title的高度');
				this.titleH = e;
			},
			scroll: function(e) {
				this.fixedScroll.scrollTop = e.detail.scrollTop;
				console.log(this.fixedScroll);
			},
			 // 模块固定定位需要的top值
			topFixed (e) {
				console.log('需要固定的模块的top值')
				this.fixedScroll.topFixedNum = e;
				console.log(this.fixedScroll);
			},
			// 判断代替横向模块的部分是否展示
			tapScrollFixedShow (e) {
				console.log(e, '判断代替横向模块的部分是否展示');
				this.scrollFixedShow = e;
			},
			// 点击title返回的数据
			tapTitle(e){
				console.log(e, '点击title返回的数据');
				this.dataListXiaomi.content.context.tempCon.modules = e[0];
				this.tempRefresh = false; // 刷新当前页面
				this.$nextTick(function() {
					this.tempRefresh = true;
				});
				this.scrollInto = e[1]; // 定位到指定id位置
				let datalist = this.dataListXiaomi.content.context.tempCon.modules;
				if (datalist.length > 0){
					this.titleText = datalist[0].iconTitle  || '编辑模板'; // title默认显示数组第一项的title
				} else {
					this.titleText = '编辑模板'; // title默认显示数组第一项的title
				}
			},
			// 定位到指定id位置
			tapTitleScroll(e){
				console.log(e, '定位到指定id位置');
				this.titleText = e[0].iconTitle; // title
				this.scrollInto = e[0].id; // 定位到指定id位置
				this.tabYItemsIndex = e[1]; // 竖向目录点击的index,传送给横向列表，默认点亮此时对应的items项
				console.log(this.scrollInto, '--------------------this.scrollInto---------------------');
			},
			// 点击横向模块List组件
			tapModuleYList (e) {
				console.log(e, '++++++++++++++++++++++++++++点击模块List组件+++++++++++++++++++++++++++');
				this.titleText = e[0].iconTitle; // title
				this.scrollInto = e[0].id; // 定位到指定id位置
				this.tabYItemsIndex = e[1]; // 竖向目录点击的index,传送给横向列表，默认点亮此时对应的items项
			},
			// 点击轮播图
			tapBanner(e) {
				console.log(e, '轮播图操作返回的数据'); 
				this.dataListXiaomi.content.context.tempCon.banner = e[0];
			},
			// 根据用户滑动页面判断当前那个组件显示在最顶部，同时更换title,和横向列表展示更换子项
			tapChangeTitle(e) {
				console.log(e, '根据用户滑动页面判断当前那个组件显示在最顶部，同时更换title,和横向列表展示更换子项');
				this.titleText = e[0].iconTitle; // title
				this.tabYItemsIndex = e[1]; // 竖向目录点击的index,传送给横向列表，默认点亮此时对应的items项
			},
			// 点击模块TITLE_CONTENT_IMG_B组件
			tapTITLECONTENTIMGB (e) {
				console.log(e, '所有操作后返回数据');
				this.dataListXiaomi.content.context.tempCon.modules = e;
			},
			// 点击模块TITLE_CONTENT_IMG_C组件
			tapTITLECONTENTIMGC (e) {
				console.log(e, '所有操作后返回数据');
				this.dataListXiaomi.content.context.tempCon.modules = e;
			},
			// 点击模块TITLE_IMG_A组件
			tapTITLEIMGA (e) {
				console.log(e, '所有操作后返回数据');
				this.dataListXiaomi.content.context.tempCon.modules = e;
			},
			// 点击模块CONTENT_B组件
			tapCONTENTB (e) {
				console.log(e, '所有操作后返回数据');
				this.dataListXiaomi.content.context.tempCon.modules = e;
			},
			// 点击模块INFO_B组件
			tapINFOB (e) {
				console.log(e, '所有操作后返回数据');
				this.dataListXiaomi.content.context.tempCon.modules = e;
			},
			// 点击模块IMG_A组件
			tapIMGA (e) {
				console.log(e, '所有操作后返回数据');
				this.dataListXiaomi.content.context.tempCon.modules = e;
			},
			// 点击模块IMG_CONTENT_A组件
			tapIMGCONTENTA (e) {
				console.log(e, '所有操作后返回数据');
				this.dataListXiaomi.content.context.tempCon.modules = e;
			},
			// 点击模块IMG_B组件
			tapIMGB (e) {
				console.log(e, '所有操作后返回数据');
				this.dataListXiaomi.content.context.tempCon.modules = e;
			},
			// 点击模块MESA组件 ----------留言模块----放在最后
			tapMESA (e) {
				console.log(e, '所有操作后返回数据');
				this.dataListXiaomi.content.context.tempCon.mesModules = e;
			},
			
		}
	};
</script>

<style>
	.scroll-Y{
		position: relative;
		height: 100vh;
	}
</style>
