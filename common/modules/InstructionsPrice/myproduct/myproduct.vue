<template>
	<!-- 我的产品 -->
	<view class="myproduct">
		<view class="my-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<view class="myproduct-title">
				<span v-for="(item,index) in tile" :key="index" :class="num==index?'changeColora':''" @tap="gotoGood(index)">{{item}}</span>
			</view>
			
		</view>
		<view class="tian"></view>
		<!-- 全部 -->
		<all v-if="num === 0"></all>
		<!-- 产品 -->
		<product v-if="num === 1"></product>
		<!-- 定制 -->
		<Customized v-if="num === 2"></Customized>
		<!-- 資訊 -->
		<inf v-if="num === 3"></inf>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";

	import all from './myproduct-list/product-all';
	import Customized from './myproduct-list/product-Customized';
	import inf from './myproduct-list/product-inf';
	import product from './myproduct-list/product-product';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		props:['dataa'],
		data() {
			return {
				tile:['全部','产品','定制','资讯'],
				num:0, 
				lists:[]
			};
		},
		components: {
			quickBtn,
			navigation,
			all,
			Customized,
			inf,
			product
		},
		computed: {
			i18n () {
			  return this.$t('Howtoshow')  
			},
		  ...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
		created() {
			this.shareEachPage(); // 分享
		},
		mounted(){
			if(this.dataa == 1){
				this.num = 3;
			}else{
				this.num = 1;
			}
		},
		methods: {
			gotoGood(index) {
				this.num = index;
				
			},
			
		}
	};
</script>

<style>
	.myproduct{
		width: 100%;
		min-height: 100%;
		background: #FFFFFF;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.my-title {
		width: 100%;
		height: 88upx;
		background: #ffffff;
		border-bottom: 2upx solid #f5f5f5;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.quickBtn-Fd {
		width: 5%;
		margin-left: 38upx;
	}
	.myproduct-title{
		width: 60%;
		height: 100%;
		margin-left: 120upx;
		line-height: 90upx;
		float: left;
	}
	.myproduct-title>span{
		font-size: 32upx;
		color: #9B9B9B;
		margin-left: 40upx;
	}
	.changeColora{
		color: #02C2A2!important;
	}
	
	
</style>
