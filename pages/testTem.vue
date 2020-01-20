<template>
	<div class="selectTemplate-content" >
		<!-- 价格明细编辑 -->
		<priceEdit></priceEdit>
		<!-- 模板title -->
		<moduleTitle
		:disabled='true'
		titleText='产品简介'
		:manngeShow='true'
		:dataList="content.context.tempCon.modules" 
		@title-Height='titleHeight'
		></moduleTitle>
		<!-- 内容区 -->
		<scroll-view 
		scroll-top="" 
		scroll-y="true" 
		class="scroll-Y" 
		@scroll="scroll">
			<!-- 轮播图组件 -->
			<swiperBanner
			:defaultImg='defaultAddImg'
			swiperWidth='100vw'
			swiperHeight='53.333vw'
			:bannerList='info'
			autoplay='true'
			interval='5000'
			@tap-Banner='tapBanner'
			v-if='isrefresh'></swiperBanner>
			<!-- 模块横向单元组件 -->
			<moduleYlist
			id='moduleYlist'
			:titleH='titleH'
			:disabled='true'
			:dataList="dataListXiaomi.content.context.tempCon.modules"
			:scrollX='true'
			:column='5'
			:fixedScroll='fixedScroll'
			@top-Fixed='topFixed'
			@tap-ModuleList='tapModuleList'>
			</moduleYlist>
			<!-- 标题组件 -->
			<rTitle
			:disabled='false'
			:isShowOne='true'
			valueOne="一级标题"
			typeOne="text" 
			placeholderOne='placeholder'
			placeholderStyleOne='placeholderStyle'
			placeholderClassOne='placeholderClass'
			:focusOne='false'
			:cursorOne='0'
			adjustPositionOne='adjustPosition'
			maxlengthOne="maxlength" 
			tTAlignOne='center'
			tWidthOne="93.6vw"
			tHeightOne="7.466vw"
			tPaddingOne="1.333vw"
			tBGOne="rgba(212, 253, 247, 0.21)"
			tBorderOne="1px solid #02C2A2"
			tBStyleOne="dashed"
			:isShowTwo='true'
			valueTwo='二级标题'
			typeTwo="text" 
			placeholderTwo='placeholder'
			placeholderStyleTwo='placeholderStyle'
			placeholderClassTwo='placeholderClass'
			:focusTwo='false'
			:cursorTwo='0'
			adjustPositionTwo='adjustPosition'
			:tMaxNumShow='true'
			:maxlengthTwo="100"
			tTAlignTwo='justify'
			tWidthTwo="93.666vw"
			tHeightTwo=""
			tMinHeightTwo='13.333vw'
			tPaddingTwo="1.333vw"
			tBGTwo="rgba(212, 253, 247, 0.21)"
			tBorderTwo="1px solid #02C2A2"
			tBStyleTwo="dashed"
			@tap-Title='tabTitle'
			></rTitle>
			<!-- 模拟模块组件 -->
			<div class="mode-list">
				<div class="mode-items" v-for='(item,index) in dataList' :key='index'>
					<!-- 产品说明 -->
					<rTitle
					:dataList='dataList'
					:itemsData='dataList[0]'
					:indexNum='index'
					:disabled='false'
					:isShowOne='false'
					:isShowTwo='true'
					:valueTwo='item.content'
					keyNameTwo='content'
					tWidthTwo="93.666vw"
					tHeightTwo=""
					tMinHeightTwo='13.333vw'
					tPaddingTwo="1.333vw"
					tBGTwo="rgba(212, 253, 247, 0.21)"
					tBorderTwo="1px solid #02C2A2"
					tBStyleTwo="dashed"
					@tap-Title='tabTitle'
					></rTitle>
					<!-- 单张图片组件 -->
					<singlePicture
					:dataList='dataList'
					:itemsData='dataList[0]'
					:indexNum='index'
					:defaultImg='defaultAddImg'
					:imgSrc='item.imgUrl'
					mode='scaleToFill'
					lazyLoad=true
					pictureWidth='100vw'
					pictureHeight='78.666vw'
					@tap-Picture='tabPicture'
					:deleteMoveShow='deleteMoveTipsShow'
					></singlePicture>
					<!-- 删除、上移、下移 -->
					<deleteMoveTips
					:dataList='dataList'
					:itemsData='dataList[0]'
					:indexNum='index'
					dMWidth='100vw'
					dMHeight='100%'
					@tap-DeleteMoveTips='tapDeleteMoveTips'
					v-if='deleteMoveTipsShow'></deleteMoveTips>
				</div>
				<!-- 管理项目、复加此项 -->
				<manageCopyTips
				:manageCopyShow='deleteMoveTipsShow'
				:manageType='manageType'
				:dataList='dataList'
				:itemsData='dataList[0]'
				@tap-ManageCopyTips='tapManageCopyTips'
				></manageCopyTips>
			</div>
			<!-- 模块条组件 -->
			<div class='moduleList'>
				<moduleList
				:disabled='true'
				:dataList="content.context.tempCon.modules" 
				:selIconList='content.context.tempCon.selIconList'
				:moduleTempList='moduleTemp.content'
				@tap-ModuleList='tapModuleList'
				>
				</moduleList>
			</div>
			<bottom></bottom>
			<!-- 下拉框 -->
			<rSelect
			:disabled='true'
			titleText='产品简介'
			:manngeShow='true'
			:dataList="content.context.tempCon.modules" 
			></rSelect>
			<!-- 复选框 -->
			<rCheckBox
			:disabled='true'
			:dataList='selectList'
			v-if='true'>
			</rCheckBox>
		</scroll-view>
	</div>
</template>

<script>
	import {dataList}from '@/static/mbcJs/dataJson/dingzhi.js';
	import {xiaomi}from '@/static/mbcJs/dataJson/xiaomi.js';
	import {moduleTemp}from '@/static/mbcJs/dataJson/moduleTemp.js';
	import defaultAddImg from '@/static/mbcImg/publish/createBusiness/defaultAdd.png';
	import iconSrc from '@/static/mbcImg/publish/purchase/delete.png';
	import moduleTitle from '@/components/common/RHX/moduleTitle/moduleTitle';
	import swiperBanner from '@/components/common/RHX/swiperBanner/swiperBanner';
	import singlePicture from '@/components/common/RHX/singlePicture/singlePicture';
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import manageCopyTips from '@/components/common/RHX/manageCopyTips/manageCopyTips';
	import deleteMoveTips from '@/components/common/RHX/deleteMoveTips/deleteMoveTips';
	import moduleList from '@/components/common/RHX/moduleList/moduleList';
	import rCheckBox from '@/components/common/RHX/rCheckBox/rCheckBox';
	import bottom from '@/components/common/RHX/bottom/bottom';
	import rSelect from '@/components/common/RHX/rSelect/rSelect';
	import moduleYlist from '@/components/common/RHX/moduleYlist/moduleYlist';
	import priceEdit from '@/components/common/RHX/madeModule/price/edit';
	
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				titleH: 0, // title高度
				fixedScroll: { // 需要固定定位的东西
					scrollTop: 0,
					topFixedNum: 0,
				},
				defaultAddImg: defaultAddImg, // 默认添加图片
				isrefresh: true, // 强制刷新
				myDataList: dataList,
				moduleTemp: moduleTemp, // 添加模块的接口列表
				info: [
					{
						"picUrl": "http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-imgs-banner-01.jpg",
						"linkUrl": ""
					},
					{
						"picUrl": "http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-imgs-banner-02.jpg",
						"linkUrl": ""
					},
					{
						"picUrl": "http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-imgs-banner-03.jpg",
						"linkUrl": ""
					},
					{
						"picUrl": "http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-imgs-banner-04.jpg",
						"linkUrl": ""
					}
				],
				deleteMoveTipsShow: false, // 控制deleteMoveTips组件显示隐藏
				manageType: 0, // 0展示管理 和 复制； 1只展示复制
				"dataList" : [  // 模拟模块组件
					{
						"content" : "这里是您的1",
						imgUrl : "http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-imgs-banner-02.jpg"
					}, 
					{
						"content" : "这里是您的2",
						imgUrl : "http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-imgs-banner-04.jpg"
					}, 
					{
						"content" : "这里是您的3",
						imgUrl : "http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-imgs-banner-03.jpg"
					}
				],
				iconSrc: iconSrc,
				content:[],
				"selectList": [
				    "支付宝",
				    "微信支付",
				    "网上银行",
				    "账期支付",
				    "大额支付",
				    "信用卡"
				],
				dataListXiaomi: xiaomi
			};
		},
		components: {
			moduleTitle,
			swiperBanner,
			singlePicture,
			rTitle,
			manageCopyTips,
			deleteMoveTips,
			moduleList,
			rCheckBox,
			rSelect,
			moduleYlist,
			bottom,
			priceEdit,
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			...mapGetters(['GET_PUBLISH'])
		},
		created() {
			// console.log(this.myDataList)
			this.content = JSON.parse(JSON.stringify(this.myDataList.content)) // 深拷贝数组
		},
		watch: {
			GET_PUBLISH: {
				handler(a, b) {},
				deep: true
			}
		},
		mounted() {},
		beforeDestroy() {},
		methods: {
			...mapMutations({
				setMoreSet: 'setMoreSet'
			}),
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
			// 点击轮播图
			tapBanner(e) {
				console.log(e, '轮播图操作返回的数据');
				this.info = e[0];
			},
			// 点击单张图片
			tabPicture (e) {
				console.log(e, '操作单张图片返回值');
				this.dataList = e;
			},
			// 带点击标题返回
			tabTitle (e) {
				console.log(e,'点击标题返回值----数组');
			},
			// 点击删除、上移、下移
			tapDeleteMoveTips (e) {
				console.log(e[0], e[1], '删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false');
				this.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				e[1] === false ? this.manageType = 1 : this.manageType = 0;
				console.log(this.manageType, '------------------this.manageType-------------------');
			},
			// 点击管理、复制、完成组件
			tapManageCopyTips (e) {
				console.log(e, '管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值');
				this.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
			},
			// 点击模块List组件
			tapModuleList (e) {
				console.log(e, '++++++++++++++++++++++++++++点击模块List组件+++++++++++++++++++++++++++');
				this.content.context.tempCon.modules = e;
			}
		}
	};
</script>

<style>
	.mode-list{
		position: relative;
		width: 100%;
	}
	.mode-items{
		position: relative;
		width: 100%;
	}
	.scroll-Y{
		position: relative;
		height: 100vh;
	}
</style>
