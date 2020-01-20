<template>
	<div class="selectTemplate-content" >
		<!-- 价格明细编辑 -->
		<priceEdit
		:disabled='true'
		:dataList="dataLists"
		@tap-UpDataPrice='tapUpDataPrice'
		@tap-PriceEdit='tapPriceEdit'
		v-if='true'></priceEdit>
		<!-- 出货周期编辑 -->
		<!-- <placeDeliveryEdit
		disabled='true'
		:dataList="dataLists2"
		></placeDeliveryEdit> -->
		<!-- 实例保障 -->
		<caseGuarantee v-if='false'>
			
		</caseGuarantee>
		<pickerButton v-if='false'></pickerButton>
		<!-- 收货地区 -->
		<addressModule v-if='false'></addressModule>
		<basicInformation v-if='false'></basicInformation>
		<imageSelection
		:disabled='true'
		:dataList='dataLists3'
		@tap-BasicInformation='tapBasicInformation'
		v-if='false'></imageSelection>
	</div>
</template>

<script>
	import {dataList}from '@/static/mbcJs/dataJson/dingzhi.js';
	
	import priceEdit from '@/components/common/RHX/madeModule/price/edit';
	import placeDeliveryEdit from '@/components/common/RHX/madeModule/placeDelivery/edit';
	import caseGuarantee from '@/components/common/RHX/madeModule/caseGuarantee/caseGuarantee';
	import addressModule from '@/components/common/RHX/madeModule/address/address';
	import pickerButton from '@/components/common/RHX/pickerButton/pickerButton';
	import basicInformation from '@/components/common/RHX/madeCustModule/basicInformation/basicInformation';
	import imageSelection from '@/components/common/RHX/madeCustModule/imageSelection/imageSelection';
	export default {
		data() {
			return {
				dataListXiaomi: dataList,
				dataLists: {
					"type": "MONEY_A",
					"icon": {
						"notSelected": "https://style.iambuyer.com/img/icon/tuxing_0.png",
						"selected": "https://style.iambuyer.com/img/icon/tuxing_1.png",
						"catalog_white": "https://style.iambuyer.com/img/icon/tuxing_2.png"
					},
					"moduleImg": "http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-public-module/temp-xiaomi-public-module-03.jpg",
					"iconTitle": "价格明细",
					"unit": "件",
					"dataList": [
						{
							"minCount": 1,
							"maxCount": 0,
							"money": 0,
							"errorStr": false
						},
						{
							"minCount": 0,
							"maxCount": 0,
							"money": 0,
							"errorStr": false
						},
						{
							"minCount": 0,
							"maxCount": 0,
							"money": 0,
							"errorStr": false
						},
						{
							"minCount": 0,
							"maxCount": 0,
							"money": 0,
							"errorStr": false
						},
						{
							"minCount": 0,
							"maxCount": 0,
							"money": 0,
							"errorStr": false
						}
					]
				},
				dataLists2:{
					"type": "TABLE_A",
					"icon": {
						"notSelected": "https://style.iambuyer.com/img/icon/tuxing_0.png",
						"selected": "https://style.iambuyer.com/img/icon/tuxing_1.png",
						"catalog_white": "https://style.iambuyer.com/img/icon/tuxing_2.png"
					},
					"moduleImg": "http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-public-module/temp-xiaomi-public-module-03.jpg",
					"iconTitle": "出货周期",
					"dataList": [
						{
							"key": "数量",
							"value": "100-200",
							"unit": "个"
						},
						{
							"key": "预计时间",
							"value": "7",
							"unit": "天"
						}
					]
				},
				dataLists3: {
					"type": "INPUT_CHECK_A",
					"icon": {
						"notSelected": "https://style.iambuyer.com/img/icon/tuxing_0.png",
						"selected": "https://style.iambuyer.com/img/icon/tuxing_1.png",
						"catalog_white": "https://style.iambuyer.com/img/icon/tuxing_2.png"
					},
					"moduleImg": "http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-public-module/temp-xiaomi-public-module-03.jpg",
					"iconTitle": "图片选择",
					"dataList": [
						{
							"imgUrl": "http://style.iambuyer.com/img/temp-cust-imgs/temp-cust-imgs-content-05.png",
							"title": "白色",
							"select": false
						},
						{
							"imgUrl": "http://style.iambuyer.com/img/temp-cust-imgs/temp-cust-imgs-content-05.png",
							"title": "红色",
							"select": false
						},
						{
							"imgUrl": "http://style.iambuyer.com/img/temp-cust-imgs/temp-cust-imgs-content-05.png",
							"title": "绿色",
							"select": false
						}
					]
				},
			};
		},
		components: {
			priceEdit,
			placeDeliveryEdit,
			caseGuarantee,
			addressModule,
			pickerButton,
			basicInformation,
			imageSelection
		},
		computed: {
		},
		created() {
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
			// 更新价格明细
			tapUpDataPrice(e) {
				this.dataLists = e;
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
