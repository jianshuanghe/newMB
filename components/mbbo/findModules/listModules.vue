<template>
	<div class="listModules">
		<!-- 展示模块的内容 -->
		<div class="listContent"  :list='options'>
			<!-- 商机、关注 -->
			<!-- banner -->
			<!-- <businessFollow></businessFollow> -->
			<!-- <banner :msgDatas='options'></banner> -->
			<!-- goodsOne -->
			<!-- <goodsOne :msgDatas='options'></goodsOne> -->
			<!-- goodsTwo -->
			<!-- <goodsTwo :msgDatas='options'></goodsTwo> -->
			<!-- goodsThree -->
			<!-- <goodsThree :msgDatas='options'></goodsThree> -->
			<!-- goodsFour -->
			<!-- <goodsFour></goodsFour> -->
			<!-- contactBusiness -->
			<!-- <contactBusiness></contactBusiness> -->
			<!-- 关注 -->
			<follow :msgDatas='options' v-if="typelist=='follow'"></follow>
			<!-- 推荐 -->
			<Recommend :msgDatas='options' v-if="typelist=='push'"></Recommend>
			<!-- 供应 -->
			<supply :msgDatas='options' v-if="typelist=='inst'"></supply>
			<!-- 采购 -->
			<Purchase :msgDatas='options' v-if="typelist=='purc'"></Purchase>
			<!-- 资讯 -->
			<information :msgDatas='options' v-if="typelist=='news'"></information>
			<!-- 企业服务 -->
			<businessService :msgDatas='options' v-if="typelist=='compService'"></businessService>
			<!-- 资本类型 -->
			<capital :msgDatas='options' v-if="typelist=='invest'"></capital>
		</div>
		<!-- 只有商机且商机为一个时显示 用户行为组件
		<!-- <div class="listBot">
			<behavior :list='options'></behavior>
		</div> -->
	</div>
</template>

<script>
	import businessFollow from "@/components/common/businessFollow/businessFollow.vue";
	// banner
	import banner from "./modules/business/banner.vue";
	// goodsOne
	import goodsOne from "./modules/business/goodsOne.vue";
	// goodsTwo
	import goodsTwo from "./modules/business/goodsTwo.vue";
	// goodsThree
	import goodsThree from "./modules/business/goodsThree.vue";
	// goodsFour
	import goodsFour from "./modules/business/goodsFour.vue";
	// contactBusiness
	import contactBusiness from "./modules/business/contactBusiness.vue";
	// businessService
	import businessService from "./modules/business/businessService.vue";
	// 资本
	import capital from "./modules/business/capital.vue";
	//资讯
	import information from "./modules/business/information.vue";
	//采购
	import Purchase from "./modules/business/Purchase.vue";
	//供应
	import supply from "./modules/business/supply.vue";
	//推荐
	import Recommend from "./modules/business/Recommend.vue";
	//关注
	import follow from "./modules/business/follow.vue";
	// 底部用户行为
	import behavior from "@/components/common/userBehavior/behavior.vue";
	export default {
		components: {
			businessFollow,
			banner,
			goodsOne,
			goodsTwo,
			goodsThree,
			goodsFour,
			contactBusiness,
			businessService,
			capital,
			behavior,
			information,
			Purchase,
			supply,
			Recommend,
			follow,
		},
		props: ['options','typelist'],
		methods: {
			
		},
		created() {
			// console.log(this.typelist,this.options)
		}
	}
</script>

<style>
	.listModules{
		width: 100%;
	}
	.listContent{
		width: 100%;
	}
</style>
