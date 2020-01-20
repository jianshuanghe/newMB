<template>
	<view class="my-PraisedAndCollection">
		<view class="my-PraisedAndCollection-header">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<view class="my-PraisedAndCollection-title">
				<view v-for="(item,index) in list" :key="index" :class="num==index?'changeColor':''" @tap="gotoGood(index)">{{item}}</view>
			</view>
		</view>
		<view class="tian"></view>
		<!-- 获赞 -->
		<Praised v-if="num === 0"></Praised>
		<!-- 已收藏 -->
		<Collection v-if="num === 1"></Collection>
		
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import Collection from "./PraisedAndCollection/news-Collection";
	import Praised from "./PraisedAndCollection/news-Praised";
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list: [],
				num: 0,
				Message:[]
			}
		},
		components: {
			quickBtn,
			navigation,
			Collection,
			Praised
		},
		computed: {
			i18n () {
			  return this.$t('News')  
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO'])
		},
		onLoad:function(options){
			this.id = options.id
			console.log(this.id)
			if(this.id === '1'){
				uni.setNavigationBarTitle({
					title: this.i18n.title2
				});
				this.num = 0;
			}else if(this.id === '2'){
				uni.setNavigationBarTitle({
					title: this.i18n.title3
				});
				this.num = 1;
			}
			this.list.push(this.i18n.title2)
			this.list.push(this.i18n.title3)
		},
		created() {
			this.shareEachPage(); // 分享
		},
		methods:{
			gotoGood(index) {
				this.num = index;
				console.log(index)
				if(index === 0){
					uni.setNavigationBarTitle({
						title: this.i18n.title2
					});
				}else if (index === 1){
					uni.setNavigationBarTitle({
						title: this.i18n.title3
					});
				}
			},
			
		}
		
	}
</script>

<style>
	.my-PraisedAndCollection{
		width: 100%;
		min-height: 100%;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.my-PraisedAndCollection-header{
		width: 100%;
		height: 88upx;
		background: #FFFFFF;
		border-bottom: 2upx solid #F5F5F5;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.quickBtn-Fd{
		width: 5%;
		margin-left: 38upx;
	}
	.my-PraisedAndCollection-title{
		margin: 0 auto;
		width: 40%;
		height: 100%;
		display: flex;
	}
	.my-PraisedAndCollection-title>view{
		width: 50%;
		height: 100%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
		position: relative;
	}
	.changeColor {
		color: #02C2A2!important;
		font-weight: bold;
		font-size: 32upx;
	}
	
	.changeColor:before {
		content: '';
		position: absolute;
		left: 36%;
		top: 70upx;
		bottom: auto;
		right: auto;
		height: 7upx;
		width: 30%;
		background-color: #02C2A2;
		color: #02C2A2;
	}
</style>
