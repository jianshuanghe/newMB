<template>
	<view class="my-tool">
		<!-- 陌拜工具 -->
		<view class="my-tool-Title">{{i18n.tool}}</view>
		<view class="my-tool-gong">
			<scroll-view class="scroll-view_H" scroll-x="true" >
				<view id="demo1" class="my-tool-opportunity" @tap="goToPutInList">
					<!-- 商机投放 -->
					<view class="my-tool-zi">
						<view>{{i18n.tool1}}</view>
						<view>快速投放</view>
					</view>
					<view class="my-tool-img"><image :src="tou"></image></view>
				</view>
				<view id="demo2" class="my-tool-opportunity" @tap="gotocaigou">
					<!-- 发布采购 -->
					<view class="my-tool-zi">
						<view>{{i18n.tool2}}</view>
						<view>一键发布</view>
					</view>
					<view class="my-tool-img"><image :src="qiugou"></image></view>
				</view>
				<view id="demo3" class="my-tool-opportunity" @tap="goToCreateBusiness">
					<!-- 制作说明书 -->
					<view class="my-tool-zi">
						<view>{{i18n.tool3}}</view>
						<view>多场景推广</view>
					</view>
					<view class="my-tool-img"><image :src="shu"></image></view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import { mapMutations,mapGetters } from 'vuex';
	export default {
		data() {
			return {
				tou: this.Static+'my/13.png',
				qiugou: this.Static+'my/12.png',
				shu: this.Static+'my/14.png',
			};
		},
		mounted() {},
		onLoad() {},
		created(){
			console.log(this.GET_MY.headers.authState)
		},
		methods: {
			goToPutInList () {
				
				if(this.GET_MY.headers.authState==0){
					let e=1;
					uni.navigateTo({
						url: '/modules/myCompany/personAndCompany/companyInfor/companyInforEdit?id='+e
					});
				}else if(this.GET_MY.headers.authState=='3'){
					uni.showModal({
						title: '提示',
						content: '您的公司认证审核未通过，无法进行推广，快去重新提交认证信息吧～～～',
						confirmColor:' #02C2A2',
						confirmText:'去认证',
						cancelText:'暂不认证',
						success: function (res) {
							if (res.confirm) {
								// let e=1;
								uni.navigateTo({
									url: '/modules/myCompany/personAndCompany/companyInfor/companyInforEdit'
								});
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}else if(this.GET_MY.headers.authState=='1'){
					uni.showModal({
						title: '提示',
						content: '您的公司认证信息正在审核中,请耐心等待～～～',
						confirmColor:' #02C2A2',
						confirmText:'知道了',
						success: function (res) {
							if (res.confirm) {
								
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
				else if(this.GET_MY.headers.authState=='2'){
					console.log('触发投放商机按钮');
					uni.navigateTo({
						url: '/modules/aLittle/putInBusiness/putInBusinessList/putInList/putInList'
					});
				}
			},
			goToCreateBusiness () {
				console.log('to选择模版(1/4)');
				uni.navigateTo({
					url: '/modules/createBusiness/selectTemplate'
				});
			},
			gotocaigou(){
				let lookUserId = null;
				if (uni.getStorageSync('landRegist')) {
				 let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				 console.log(landRegistLG.user.id);
				 lookUserId = landRegistLG.user.id;
				} else {
				 lookUserId = uni.getStorageSync('UUID');
				};
				let urlParams = {
				 isFlow: 0, // 平台来源
				 orderType: 0, // 订单类型
				 sourceTemp: 0, // 说明书来源
				 aiListTemp: 0, // 是否展示ai
				 purcId:  null, // 说明书id
				 lookUserId: '', // 浏览者
				 creatorId: '', // 说明书创建者
				 purcState: '' // 说明书状态
				};
				uni.navigateTo({
				 url: '/modules/publishPurchase/publishPurchase?urlParams=' + this.urlCrypto(urlParams, 0)
				});
			}
			
		},
		computed: {
			i18n() {
				return this.$t('My');
			},
			...mapGetters(['GET_MY'])
		}
	};
</script>

<style>
.my-tool {
	/* min-width: 150%; */
	height: 280upx;
	background: #ffffff;
	margin-top: 20upx;
}
.my-tool-Title {
	position: relative;
	/* width: 690upx; */
	font-size: 30upx;
	color: #2e2e30;
	font-weight: bold;
	padding-top: 20upx;
	padding-left: 30upx;
}
.my-tool-gong {
	/* width: 118%; */
	overflow: auto;
}
.scroll-view_H {
	width: 128%;
	height: 180upx;
	float: left;
	white-space: nowrap;
}
.my-tool-opportunity {
	background: #ffffff;
	box-shadow: 0 0 10px 0 rgba(226, 226, 226, 0.6);
	border-radius: 8upx;
	width: 276upx;
	height: 132upx;
	margin-top: 30upx;
	margin-left: 30upx;
	float: left;
}
.my-tool-zi {
	width: 52%;
	height: 60%;
	margin-top: 22upx;
	margin-left: 25upx;
	float: left;
}
.my-tool-zi > view:nth-of-type(1) {
	font-size: 28upx;
	color: #2e2e30;
	font-weight: bold;
}
.my-tool-zi > view:nth-of-type(2) {
	font-size: 24upx;
	color: #9b9b9b;
	margin-top: -5upx;
}
.my-tool-img {
	float: left;
	width: 64upx;
	height: 64upx;
	margin-top: 34upx;
	margin-left: 20upx;
}
.my-tool-img > image {
	width: 100%;
	height: 100%;
}
</style>
