<template>
	<view class="my-Focusonfans">
		<view class="my-Focusonfans-header">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<view class="my-Focusonfans-title">
				<view v-for="(item,index) in list" :key="index" :class="num==index?'changeColor':''" @tap="gotoGood(index)">{{item}}</view>
			</view>
		</view>
		<view class="tian"></view>
		<!-- 已关注 -->
		<myFocus v-if="num === 0"></myFocus>
		<!-- 粉丝 -->
		<myFans v-if="num === 1"></myFans>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import myFocus from './FocusonFans/my-Focus';
	import myFans from './FocusonFans/my-Fans';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
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
			myFocus,
			myFans,
			navigation
		},
		computed: {
			i18n () {
			  return this.$t('Myfunctions')  
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO'])
		},
		created() {
			this.shareEachPage(); // 分享
		},
		onLoad:function(options){
			this.id = options.id
			console.log(this.id)
			if(this.id === '1'){
				uni.setNavigationBarTitle({
					title: this.i18n.title1
				});
				this.num = 0;
			}else if(this.id === '2'){
				uni.setNavigationBarTitle({
					title: this.i18n.title2
				});
				this.num = 1;
			}
			this.list.push(this.i18n.title1)
			this.list.push(this.i18n.title2)
		},
		methods:{
			gotoGood(index) {
				this.num = index;
				console.log(index)
				if(index === 0){
					uni.setNavigationBarTitle({
						title: this.i18n.title1
					});
				}else if (index === 1){
					uni.setNavigationBarTitle({
						title: this.i18n.title2
					});
				}
			}
		}
		
	}
</script>

<style>
	.my-Focusonfans{
		width: 100%;
		min-height: 100%;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.my-Focusonfans-header{
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
	.my-Focusonfans-title{
		margin: 0 auto;
		width: 40%;
		height: 100%;
		display: flex;
	}
	.my-Focusonfans-title>view{
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
