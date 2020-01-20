<template>
	<div class="listModules">
		<!-- 展示模块的内容 -->
		<div class="listContent"  :list='options'>
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
	</div>
</template>

<script>
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
	export default {
		components: {
			businessService,
			capital,
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
