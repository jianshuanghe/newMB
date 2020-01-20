<template>
	<view class="my-CollectiononBrowseonPoints">
		<view class="my-CollectiononBrowseonPoints-header">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<view class="my-CollectiononBrowseonPoints-title">
				<view v-for="(item,index) in list" :key="index" :class="num==index?'changeColor':''" @tap="gotoGood(index)">{{item}}</view>
			</view>
		</view>
		<!-- 已收藏 -->
		<Collection v-if = "num === 1" ></Collection>
		<!-- 浏览 -->
		<Browse v-if = "num === 0" ></Browse>
		<!-- 点赞 -->
		<Points v-if = "num === 2" ></Points>
		<!-- 弹出层 -->
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import Collection from "./CollectiononBrowseonPoints/my-Collection";
	import Browse from "./CollectiononBrowseonPoints/my-Browse";
	import Points from "./CollectiononBrowseonPoints/my-Points";
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list: [],//用来盛放标题的数组
				num: 0, //页面显示 0是已收藏 1是浏览 2是点赞
			}
		},
		components: {
			quickBtn,
			navigation,
			Collection,
			Browse,
			Points
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
				uni.setNavigationBarTitle({//标题 已收藏
					title: this.i18n.title3
				});
				this.num = 1;
			}else if(this.id === '2'){//标题 浏览
				uni.setNavigationBarTitle({
					title: this.i18n.title4
				});
				this.num = 0;
			}else if(this.id === '3'){//标题 点赞
				uni.setNavigationBarTitle({
					title: this.i18n.title5
				});
				this.num = 2;
			}
			this.list.push(this.i18n.title4)
			this.list.push(this.i18n.title3)
			this.list.push(this.i18n.title5)
		},
		methods:{
			gotoGood(index) {
				this.num = index;
				if(index === 0){ //通过 index 来控制顶部title的切换 0是收藏 1是浏览 2是点赞
					uni.setNavigationBarTitle({
						title: this.i18n.title3
					});
				}else if (index === 1){
					uni.setNavigationBarTitle({
						title: this.i18n.title4
					});
				}else if (index === 2){
					uni.setNavigationBarTitle({
						title: this.i18n.title5
					});
				}
			}
		}
		
	}
</script>

<style>
	.my-CollectiononBrowseonPoints{
		width: 100%;
		height: 100%;
	}
	.my-CollectiononBrowseonPoints-header{
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
	.my-CollectiononBrowseonPoints-title{
		margin: 0 auto;
		width: 40%;
		height: 100%;
		display: flex;
	}
	.my-CollectiononBrowseonPoints-title>view{
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
