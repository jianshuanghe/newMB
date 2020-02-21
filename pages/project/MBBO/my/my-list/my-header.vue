<template>
	<view class="my-headers">
		<view class="my-header-img" @tap="gotomyheader()">
			<image :src="GET_MY.headers.headImg" v-if="GET_MY.headers.headImg!==''"></image>
			<image :src="sasf" v-if="GET_MY.headers.headImg==''"></image>
			<image :src="VIP" v-if="GET_MY.headers.vipState === 1 || GET_MY.headers.vipState === 2"></image>
		</view>
		<view class="my-header-content">
			<p class="header-content-name" @tap="gotomyheader()">{{GET_MY.headers.nickname}}</p>
			<p class="header-content-img" v-if="GET_MY.headers.authState==2"><image :src="renzheng"></image></p>
			<p class="header-content-img" v-if="GET_MY.headers.authState!=2"><image :src="weirenzheng"></image></p>
			<p class="header-content-zi" @tap="gotomybusiness()">{{GET_MY.headers.companyName|ellipsis}}
				<span class="header-content-zis" v-if="GET_MY.headers.userType == 0&&GET_MY.headers.authState==2">品牌商</span>
				<span class="header-content-zis" v-if="GET_MY.headers.userType == 1&&GET_MY.headers.authState==2">经销商</span>
				<span class="header-content-zis" v-if="GET_MY.headers.userType == 2&&GET_MY.headers.authState==2">厂家</span>
				<span class="header-content-zis" v-if="GET_MY.headers.userType == 3&&GET_MY.headers.authState==2">其他</span>
				<image class="header-content-zia" :src="rightArrow"></image>
			</p>
		</view>
	</view>
</template>

<script>
	import { mapMutations,mapGetters } from 'vuex';
	export default {
		data() {
			return {
				logo: this.Static+'my/logo.png',
				rightArrow: this.Static+ 'my/rightArrow.png',
				renzheng: this.Static+ 'my/renzheng.png',
				list:[],
				VIP: this.Static+'my/VIP.png',
				sasf: this.Static+'my/sasf.png',
				weirenzheng: this.Static+'my/weirenzheng.png',
			}
		},
		mounted() {
			
		},
		created() {
			
		},
		watch: {
			GET_MY: {
				handler(a, b) {
					console.log(a, b, 'header----list');
				},
				deep: true
			}
		},
		filters: {
			ellipsis: function(value) {
				if (!value) return '';
				if (value.length > 13) {
					return value.slice(0, 13) + '...';
				}
				return value;
			}
		},
		created() {
		},
		methods: {
			gotomyheader(){
				console.log('个人资料');
				uni.navigateTo({
					url: '/modules/myCompany/myList/myheader',
				});
			},
			gotomybusiness(){
				if(this.GET_MY.headers.companyName==''){
					console.log('基本信息编辑');
					uni.navigateTo({
						url:'/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor'
					})
				}else{
					console.log('商家详情');
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					uni.navigateTo({
						url: '/modules/myCompany/mybusiness/my-business?id='+landRegistLG.user.id,
					});
				}
				
			},
		},
		computed: {
			...mapGetters(['GET_MY'])
		},
	}
</script>

<style>
	.my-headers{
		width: 100%;
		height: 240upx;
		background: #FFFFFF;
		border-bottom: 2upx solid #F5F5F5;
		margin-top: 88upx;
	}
	.my-header-img{
		width: 168upx;
		height: 100%;
		line-height: 240upx;
		position: relative;
		float: left;
	}
	.my-header-img>image:nth-of-type(1){
		width: 120upx;
		height: 120upx;
		display: block;
		right: 0;
		top: 60upx;
		border-radius: 50%;
		position: absolute;
	}
	.my-header-img>image:nth-of-type(2){
		width: 40upx;
		height: 28upx;
		position: absolute;
		right: 0;
		bottom: 58upx;
	}
	.my-header-content{
		width: 70%;
		height: 100%;
		float: left;
		margin-left:30upx ;
	}
	.header-content-name{
		max-width: 320upx;
		font-size: 40upx;
		color: #3C3D3F;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-top:55upx;
		float: left;
		font-weight: bold;
	}
	.header-content-img{
		width: 135upx;
		height: 36upx;
		margin-top: 75upx;
		margin-left: 10upx;
		float: left;
	}
	.header-content-img>image{
		width: 100%;
		height: 100%;
	}
	.header-content-zi{
		font-size: 26upx;
		color: #9B9B9B;
		clear: both;
		padding: 0.1upx;
	}
	.header-content-zis{
		/* padding: 0upx 0upx 0upx 0upx; */
		border: 2upx solid #9B9B9B;
		border-radius: 4upx;
		font-size: 20upx;
		color: #9B9B9B;
		height: 20upx;
		margin-left: 10upx;
	}
	.header-content-zia{
		font-size: 30upx;
		width: 22upx;
		height: 20upx;
		color: #9B9B9B;
		margin-left: 10upx;
		margin-top: 5upx;
	}
</style>
