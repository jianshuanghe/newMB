<template>
	<view class="my-function">
		<!-- 已关注 -->
		<view class="fuction-follow" @tap="gotomyFocusonfans(1)">
			<view>{{GET_MY.headers.followCount}}</view>
			<view>{{i18n.guanzhu}}</view>
		</view>
		<!-- 已收藏 -->
		<view class="fuction-follow" @tap="gotomyCollectiononBrowseonPoints(1)">
			<view>{{GET_MY.headers.followSpCount}}</view>
			<view>{{i18n.shou}}</view>
		</view>
		<!-- 粉丝数 -->
		<view class="fuction-follow" @tap="gotomyFocusonfans(2)">
			<view>{{GET_MY.headers.fansCount}}</view>
			<view>{{i18n.fen}}</view>
		</view>
		<!-- 浏览数 -->
		<view class="fuction-follow" @tap="gotomyCollectiononBrowseonPoints(2)">
			<view>{{GET_MY.headers.footprintCount}}</view>
			<view>{{i18n.liulan}}</view>
		</view>
		<!-- 获赞数 -->
		<view class="fuction-follow" @tap="gotoPraisedAndCollection(1)">
			<view>{{GET_MY.headers.getLikeCount}}</view>
			<view>{{i18n.huo}}</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations,mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list:[]
			}
		},
		mounted() {
	
		},
		watch: {
			GET_MY: {
				handler(a, b) {
					console.log(a, b, 'header----list');
				},
				deep: true
			}
		},
		created() {
			
		},
		methods: {
			gotomyFocusonfans(e){
				console.log('已关注 粉丝');
				uni.navigateTo({
					url: '/modules/myCompany/myFocusonfans/my-Focusonfans?id=' + e,
				});
			},
			gotomyCollectiononBrowseonPoints(e){
				console.log('已收藏 浏览 点赞');
				uni.navigateTo({
					url: '/modules/myCompany/myCollectiononBrowseonPoints/my-CollectiononBrowseonPoints?id=' + e,
				});
			},
			gotoPraisedAndCollection(e){
				console.log('获赞与收藏');
				uni.navigateTo({
					url: '/modules/news/newsPraisedAndCollection/news-PraisedAndCollection?id=' + e,
				});
			}
		},
		computed: {
			i18n() {
			  return this.$t('My')  
			},
			...mapGetters(['GET_MY'])
		},
	}
</script>

<style>
	.my-function{
		width: 100%;
		height: 144upx;
		background: #FFFFFF;
	}
	.fuction-follow{
		width: 19.4%;
		height: 100%;
		text-align: center;
		padding: 0.1upx;
		float: left;
	}
	.fuction-follow>view:nth-of-type(1){
		font-size: 36upx;
		color: #2E2E30;
		font-weight: bold;
		margin-top: 10upx;
	}
	.fuction-follow>view:nth-of-type(2){
		font-size: 24upx;
		color: #5D5D5D;
	}
</style>
