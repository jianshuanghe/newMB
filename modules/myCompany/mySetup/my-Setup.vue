<template>
	<view class="my-setup">
		<view class="my-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">{{ i18n.title12 }}</div>
		</view>
		<!-- 地址管理 -->
		<view class="myheader-portrait top">
			<view class="myheader-portrait-con" @tap="gotoSetupaddress()">
				<view class="myheader-portrait-con-zi">{{i18n.title13}}</view>
				<view class="myheader-portrait-con-juti"></view>
				<view class="myheader-portrait-con-img"><image :src="right"></image></view>
			</view>
		</view>
		<!-- 联系电话 -->
		<view class="myheader-portrait tops">
			<view class="myheader-portrait-con" @tap="gotoSetupphone()">
				<view class="myheader-portrait-con-zi">{{i18n.title14}}</view>
				<!-- 请填写 -->
				<view class="myheader-portrait-con-juti">
					<span class="Pleasefillin" v-if="this.GET_MY.headers.userPhone==''">{{i18n.title4}}</span>
					<span v-if="this.GET_MY.headers.userPhone!=''">{{this.GET_MY.headers.userPhone}}</span>
				</view>
				<view class="myheader-portrait-con-img"><image :src="right"></image></view>
			</view>
		</view>
		<!-- 联系邮箱 -->
		<view class="myheader-portrait" @tap="gotoSetupmailbox()">
			<view class="myheader-portrait-con">
				<view class="myheader-portrait-con-zi">{{i18n.title15}}</view>
				<!-- 请填写 -->
				<view class="myheader-portrait-con-juti">
					<span class="Pleasefillin" v-if="this.GET_MY.headers.userEmail==''">{{i18n.title4}}</span>
					<span v-if="this.GET_MY.headers.userEmail!=''">{{this.GET_MY.headers.userEmail}}</span>
				</view>
				<view class="myheader-portrait-con-img"><image :src="right"></image></view>
			</view>
		</view>
		<!-- 微信号 -->
		<view class="myheader-portrait" @tap="gotoSetupWX()">
			<view class="myheader-portrait-con">
				<view class="myheader-portrait-con-zi">{{i18n.title16}}</view>
				<!-- 请填写 -->
				<view class="myheader-portrait-con-juti">
					<span class="Pleasefillin" v-if="this.GET_MY.headers.wxId==''">{{i18n.title4}}</span>
					<span v-if="this.GET_MY.headers.wxId!=''">{{this.GET_MY.headers.wxId}}</span>
				</view>
				<view class="myheader-portrait-con-img"><image :src="right"></image></view>
			</view>
		</view>
		<!-- #ifdef H5 -->
		<!-- 修改密码 -->
		<view class="myheader-portrait" @tap="gotoSetuppass()">
			<view class="myheader-portrait-con">
				<view class="myheader-portrait-con-zi">{{i18n.title17}}</view>
				<view class="myheader-portrait-con-juti"><span class="Pleasefillin">去修改</span></view>
				<view class="myheader-portrait-con-img"><image :src="right"></image></view>
			</view>
		</view>
		<!-- #endif -->
		<!-- 退出登录 -->
		<view class="my-setup-out" @tap="clickBackNav">
			{{i18n.title22}}
		</view>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import right from '@/static/mbcImg/my/right.png';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				right: right
			};
		},
		components: {
			quickBtn,
			navigation
		},
		computed: {
			i18n () {
			  return this.$t('Mypersonal')  
			},
		  ...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.title12
			});
			this.getmy();
		},
		methods: {
			clickBackNav (){
				uni.removeStorageSync('landRegist');
				uni.removeStorageSync('clickItems');
				this.$store.commit('setHome', 1);
				this.$store.commit('setLandRegist', 0);
				uni.redirectTo({
					url: '/pages/project/MBBO/home'
				});
				this.clickCloseMask();
			},
			getmy() {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/'+landRegistLG.user.id, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							// console.log(response.data);
							this.list = response.data.content
							this.$store.commit('setMy', this.list); // 更新vuex
							// this.$store.commit('setMation', this.List); // 更新vuex
							
						},
						fail: (error) => {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络繁忙，请稍后',
								icon: 'none',
								duration: 1000
							});
							console.log(error, '网络繁忙，请稍后');
						}
					});
				}
			},
			gotoSetupphone(){
				console.log('修改手机号');
				uni.navigateTo({
					url: '/modules/myCompany/mySetup/mySetups/mySetup-phone',
				});
			},
			gotoSetupmailbox(){
				console.log('邮箱绑定');
				uni.navigateTo({
					url: '/modules/myCompany/mySetup/mySetups/mySetup-mailbox',
				});
			},
			gotoSetupWX(){
				console.log('微信绑定');
				uni.navigateTo({
					url: '/modules/myCompany/mySetup/mySetups/mySetup-WX',
				});
			},
			gotoSetupaddress(){
				console.log('地址管理');
				uni.navigateTo({
					url: '/modules/myCompany/mySetup/mySetups/mySetup-address',
				});
			},
			gotoSetuppass(){
				console.log(' 修改密码');
				uni.navigateTo({
					url: '/modules/myCompany/mySetup/mySetups/mySetup-pass',
				});
			}
				
		}
	};
</script>

<style>
	.my-setup{
		width: 100%;
		height: 100%;
		overflow: hidden;
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
	.search-Fd {
		position: relative;
		width: 100%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2e2e30;
	}
	.myheader-portrait {
		width: 100%;
		height: 116upx;
		background: #ffffff;
	}
	.top{
		margin-top: 88upx;
	}
	.tops{
		margin-top: 20upx;
	}
	.myheader-portrait-con {
		width: 90%;
		height: 100%;
		border-bottom: 2upx solid #f5f5f5;
		margin: 0 auto;
		position: relative;
	}
	.myheader-portrait-con-zi {
		width: 25%;
		height: 100%;
		line-height: 118upx;
		font-size: 28upx;
		color: #2e2e30;
		float: left;
	}
	.myheader-portrait-con-img {
		height: 100%;
		width: 18upx;
		position: absolute;
		right: 0;
		top: 0;
		line-height: 116upx;
	}
	.myheader-portrait-con-img > image {
		width: 18upx;
		height: 18upx;
	}
	.myheader-portrait-con-juti {
		width: 65%;
		height: 100%;
		float: right;
		margin-right: 38upx;
		text-align: right;
		line-height: 116upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.myheader-portrait-con-juti > input {
		width: 100%;
		height: 100%;
	}
	.Pleasefillin{
		color: #D2D2D2;
	}
	.my-setup-out{
		width: 100%;
		height: 90upx;
		background: #FFFFFF;
		font-size: 32upx;
		color: #FF4D6A;
		text-align: center;
		line-height: 90upx;
		margin-top: 20upx;
	}
</style>
