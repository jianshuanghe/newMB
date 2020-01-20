<template>
	<view class="my-Opinion">
		<view class="my-Opinion-header">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<view class="my-Opinion-title">
				<view v-for="(item,index) in list" :key="index" :class="num==index?'changeColor':''" @tap="gotoGood(index)">{{item}}</view>
			</view>
		</view>
		<view class="tiancong"></view>
		<!-- 意见反馈 -->
		<feedback v-if="num === 0" v-on:nums="nums"></feedback>
		<!-- 我的反馈 -->
		<myfeedback v-if="num === 1"></myfeedback>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import feedback from './OpinionList/Opinion-feedback';
	import myfeedback from './OpinionList/Opinion-myfeedback';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list: [],
				num: 0,
			}
		},
		components: {
			quickBtn,
			navigation,
			myfeedback,
			feedback
		},
		computed: {
			i18n () {
			  return this.$t('Mypersonal')  
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO'])
		},
		created() {
			this.shareEachPage(); // 分享
		},
		onLoad:function(options){
			uni.setNavigationBarTitle({
				title: this.i18n.title25
			});
			this.list.push(this.i18n.title25)
			this.list.push(this.i18n.title26)
		},
		methods:{
			nums:function(nums){
				console.log(nums)
				this.num=nums
			},
			gotoGood(index) {
				this.num = index;
			}
		}
		
	}
</script>

<style>
	.my-Opinion{
		width: 100%;
		height: 100%;
	}
	.my-Opinion-header{
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
	.my-Opinion-title{
		margin: 0 auto;
		width: 40%;
		height: 100%;
		display: flex;
	}
	.my-Opinion-title>view{
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
	.tiancong{
		width: 100%;
		height: 88upx;
	}
</style>
