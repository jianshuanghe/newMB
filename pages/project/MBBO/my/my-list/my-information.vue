<template>
	<view class="my-information">
		<!-- 公司信息 -->
		<view class="my-information-company" @tap="goToCompanyInfor">
			<view>{{i18n.company1}}</view>
			<view><image :src="right"></image></view>
		</view>
		<!-- 会员中心 -->
		<view class="my-information-company" @tap="goToMemberCenter">
			<view>{{i18n.company2}}</view>
			<view><image :src="right"></image></view>
		</view>
		<!-- 账户中心 -->
		<view class="my-information-company" @tap="goToAccountCenter">
			<view>{{i18n.company3}}</view>
			<view><image :src="right"></image></view>
		</view>
		<!-- 设置 -->
		<view class="my-information-company" @tap="gotomuSetup()">
			<view>{{i18n.company4}}</view>
			<view><image :src="right"></image></view>
		</view>
	</view>
</template>

<script>
	import { mapMutations,mapGetters } from 'vuex';
	export default {
		data() {
			return {
				right: this.Static+ 'my/right.png',
			};
		},
		mounted() {},
		onLoad() {},
		computed: {
			i18n() {
				return this.$t('My');
			},
			...mapGetters(['GET_MY'])
		},
		methods: {
			goToCompanyInfor () {
				// console.log('to公司信息预览');
				// let url= '/modules/myCompany/personAndCompany/companyInfor/companyInfor'; // 默认预览路径
				// if (true) { // 如果用户点击编辑，或者没有认证状态则进入编辑路径
				// 	console.log('to公司信息编辑');
				// 	url = '/modules/myCompany/personAndCompany/companyInfor/companyInforEdit' // 编辑路径
				// };
				if(this.GET_MY.headers.authState==0){
					let e=1;
					uni.navigateTo({
						url: '/modules/myCompany/personAndCompany/companyInfor/companyInforEdit?id='+e
					});
				}else if(this.GET_MY.headers.authState!==0){
					uni.navigateTo({
						url: '/modules/myCompany/personAndCompany/companyInfor/companyInfor'
					});
				}
			},
			goToMemberCenter () {
				console.log('to会员中心');
				uni.navigateTo({
					url: '/modules/myCompany/personAndCompany/memberCenter/memberCenter',
				});
			},
			goToAccountCenter () {
				console.log('to账户中心');
				uni.navigateTo({
					url: '/modules/myCompany/personAndCompany/accountCenter/accountCenter',
				});
			},
			gotomybusiness(){
				console.log('商家详情');
				uni.navigateTo({
					url: '/modules/myCompany/mybusiness/my-business',
				});
			},
			gotomuSetup(){
				console.log('设置');
				uni.navigateTo({
					url: '/modules/myCompany/mySetup/my-Setup',
				});
			}
		}
	};
</script>

<style>
	.my-information{
		width: 100%;
		height: 486upx;
		background: #FFFFFF;
		margin-top: 20upx;
	}
	.my-information-company{
		margin: 0 auto;
		width: 90%;
		height: 120upx;
		border-bottom: 2upx solid #F5F5F5;
	}
	.my-information-company>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		line-height: 120upx;
		float: left;
	}
	.my-information-company>view:nth-of-type(2){
		width: 10%;
		height: 100%;
		float: right;
		line-height: 120upx;
		text-align: center;
	}
	.my-information-company>view:nth-of-type(2)>image{
		width: 18upx;
		height: 18upx;
	}
</style>
