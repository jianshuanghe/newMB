<template>
	<view class="news-system">
		<!-- 系统通知列表 -->
		<view class="news-system-title">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<!-- 系统通知 -->
			<div class="search-Fd left">
			  {{i18n.title4}}
			</div>
		</view>
		<view class="tian"></view>
		<view class="news-system-con" v-for="(item,index) in shu" :key="index">
			<view class="news-system-time">
				{{item.createTime|formatDate}}
			</view>
			<view class="news-system-content">
				<view class="news-system-content-one">
					<view>{{item.title}}</view>
					<view>{{item.content}}</view>
				</view>
				<view class="news-system-content-feeling" @tap="gotonewsfeeling(item.id)">
					查看详情<image :src="rightaa"></image>
				</view>
			</view>
		</view>
		<view class="meirenkanwo" v-if="this.GET_NEWS.system.length === 0">
			<image :src="kong" mode=""></image>
			您还没有收到系统通知！
		</view>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import rightArrow from '@/static/mbcImg/my/rightArrow.png'
	import rightaa from '@/static/mbcImg/my/rightaa.png'
	import kong from '@/static/mbcImg/my/kong.png'
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				rightArrow:rightArrow,
				list:[],
				kong:kong,
				shu:[],
				rightaa:rightaa,
			}
		},
		components: {
			quickBtn,
			navigation
		},
		computed: {
			i18n () {
			  return this.$t('News')  
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_NEWS'])
		},
		onLoad:function(){
			
		},
		created() {
			this.shareEachPage(); // 分享
		},
		watch: {
			GET_NEWS: {
				handler(a, b) {
					console.log(a, b)
					this.shu = a.system;
					console.log(this.shu)
				},
				deep: true
			},
		
		},
		filters: {
			formatDate: function(value) {
				let date = new Date(value);
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM;
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				let h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				let m = date.getMinutes();
				m = m < 10 ? ('0' + m) : m;
				let s = date.getSeconds();
				s = s < 10 ? ('0' + s) : s;
				return y + '.' + MM + '.' + d + ' '+ h + '.' +m;
			}
		},
		methods:{
			gotonewsfeeling(e){
				console.log('消息详情');
				uni.navigateTo({
					url: '/modules/news/newssystem/system-feeling/news-feeling?id=' + e,
				});
			},
			
		}
		
	}
</script>

<style>
	.news-system{
		width: 100%;
		min-height:100% ;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.news-system-title{
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
	.search-Fd{
		position: relative;
		width: 20%;
		margin-left: 40%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
		float: left;
	}
	.news-system-con{
		height: 372upx;
		width: 100%;
		padding-bottom: 40upx;
	}
	.news-system-time{
		width: 100%;
		height: 80upx;
		text-align: center;
		line-height: 80upx;
		font-size: 24upx;
		color: #9B9B9B;
	}
	.news-system-content{
		width: 90%;
		height: 292upx;
		background: #FFFFFF;
		border-radius: 10upx;
		margin: 0 auto;
	}
	.news-system-content-one{
		width: 90%;
		height: 204upx;
		margin: 0 auto;
		border-bottom: 2upx solid #F5F5F5;
	}
	.news-system-content-one>view:nth-of-type(1){
		width: 100%;
		height: 60upx;
		line-height: 60upx;
		font-size: 30upx;
		color: #2E2E30;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		padding-top: 26upx;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		/* -webkit-line-clamp: 1;
		-webkit-box-orient: vertical; */
	}
	.news-system-content-one>view:nth-of-type(2){
		font-size: 26upx;
		color: #9B9B9B;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		padding-top: 16upx;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		line-height: 34upx;
	}
	.news-system-content-feeling{
		width: 90%;
		height: 80upx;
		font-size: 26upx;
		color: #2E2E30;
		line-height: 80upx;
		margin: 0 auto;
	}
	.news-system-content-feeling>image{
		width: 22upx;
		height: 24upx;
		display: block;
		float: right;
		margin-top: 32upx;
	}
	.meirenkanwo{
		width: 330upx;
		height: 280upx;
		display: block;
		margin: 120upx auto auto auto;
		font-size: 28upx;
		text-align: center;
		color: #9B9B9B;
	}
	.meirenkanwo>image {
		width: 92%;
		height: 80%;
	}
</style>
