<template>
	<view class="Purchase-list">
		<view class="my-Already-header">
			<view class="my-Already-headerone">
				<span v-for="(item,index) in List" :key="index" :class="numa==index?'changeColors':''" @tap="gotoGood(index)">{{item}}</span>
			</view>
		</view>
		<view class="tian"></view>
		<!-- 全部 -->
		<PurchaseaggA v-if="numa == 0"></PurchaseaggA>
		<!-- 待发布 -->
		<PurchaseaggB v-if="numa == 1"></PurchaseaggB>
		<!-- 采购中 -->
		<PurchaseaggC v-if="numa == 2"></PurchaseaggC>
		<!-- 已停止 -->
		<PurchaseaggD v-if="numa == 3"></PurchaseaggD>
		<!-- 已完成 -->
		<PurchaseaggE v-if="numa == 4"></PurchaseaggE>
		<!-- 已下架 -->
		<PurchaseaggF v-if="numa == 5"></PurchaseaggF>
		
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	import PurchaseaggA from './Purchase-agg/Purchase-aggA'
	import PurchaseaggB from './Purchase-agg/Purchase-aggB'
	import PurchaseaggC from './Purchase-agg/Purchase-aggC'
	import PurchaseaggD from './Purchase-agg/Purchase-aggD'
	import PurchaseaggE from './Purchase-agg/Purchase-aggE'
	import PurchaseaggF from './Purchase-agg/Purchase-aggF'
	export default {
		data() {
			return {
				List:['全部','待发布','采购中','已停止','已完成','已下架'],
				numa:0,
			}
		},
		
		watch: {
			GET_MY: {
				handler(a, b) {
					
				},
				deep: true
			}
		},
		components:{
			PurchaseaggA,
			PurchaseaggB,
			PurchaseaggC,
			PurchaseaggD,
			PurchaseaggE,
			PurchaseaggF,
		},
		created(){
			this.shareEachPage(); // 分享
		},
		mounted(){
			
		},
		methods: {
			
			gotoGood(index) {
				this.numa = index;
				console.log(this.numa)
			},
		},
		computed: {
			...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
	}
</script>

<style>
	.Purchase-list{
		width: 100%;
		min-height: 100%;
	}
	.my-Already-header{
		width: 100%;
		height: 72upx;
		border-bottom: 2upx solid #F5F5F5;
		position: fixed;
		top: 88upx;
		background: #FFFFFF;
		z-index: 10;
	}
	.my-Already-headerone{
		width: 100%;
		height: 100%;
		margin-left: 10upx;
		float: left;
	}
	.my-Already-headerone>span{
		font-size: 24upx;
		color: #9B9B9B;
		/* line-height: 72upx; */
		float: left;
		margin-left: 40upx;
		margin-top: 18upx;
	}
	.changeColors{
		padding: 0upx 16upx 0upx 16upx;
		background: #E2E2E2;
		border-radius: 26upx;
		color: #2E2E30!important;
		font-weight: bold;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	
</style>
