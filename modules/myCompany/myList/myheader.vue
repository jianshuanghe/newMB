<template>
	<view class="myheader">
		<view class="my-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">{{ i18n.title2 }}</div>
		</view>
		<!-- 顶部填充 -->
		<view class="tian"></view>
		<!-- 关于你，我们想多了解一点 -->
		<view class="myheader-Tips">{{i18n.title5}}</view>
		<!-- 头像 -->
		<view class="myheader-portrait">
			<view class="myheader-portrait-con">
				<view class="myheader-portrait-con-zi">{{i18n.title6}}</view>
				<view class="right BI-items-right">
					<view class="BI-text-right">
						<image class="ziti" v-if="!logo" :src="list.headImg"></image>
						<view class="Img-logo">
							<!-- 图片上传 -->
							<view class="Img-Upload">
								<imageUploadOne v-model="imageData" :server-url="serverUrl" limit=1 @delete="deleteImage" @add="addImage" :images="1">
								</imageUploadOne>
							</view>
						</view>
						<image :src="right" class="BI-rightArrow"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 姓名 -->
		<view class="myheader-portrait">
			<view class="myheader-portrait-con">
				<view class="myheader-portrait-con-zi">{{i18n.title7}}</view>
				<view class="myheader-portrait-con-juti"><input type="text" placeholder="请填写" placeholder-style="color:#D2D2D2" v-model="name"/></view>
				<view class="myheader-portrait-con-img"><image :src="right"></image></view>
			</view>
		</view>
		<!-- 个人简介 -->
		<view class="myheader-portrait">
			<view class="myheader-portrait-con" @tap="gotoPersonal">
				<view class="myheader-portrait-con-zi">{{i18n.title8}}</view>
				<view class="myheader-portrait-con-juti">
					<span class="Pleasefillin" v-if="GET_MY.headers.content === ''">{{i18n.title4}}</span>
					<span class="Pleasefillins" v-if="GET_MY.headers.content !== ''">{{GET_MY.headers.content}}</span>
				</view>
				<view class="myheader-portrait-con-img"><image :src="right"></image></view>
			</view>
		</view>
		<!-- 感兴趣的行业 -->
		<view class="myheader-portrait bott">
			<view class="myheader-portrait-con" @tap="gotoPurchase">
				<view class="myheader-portrait-con-zi">感兴趣的关键词</view>
				<view class="myheader-portrait-con-juti">
					<span class="Pleasefillin" v-if="GET_MY.headers.allKeys.length == 0">{{i18n.title4}}</span>
					<span class="Pleasefillins" v-if="GET_MY.headers.allKeys.length == 3 || GET_MY.headers.allKeys.length == 2 || GET_MY.headers.allKeys.length == 1">{{GET_MY.headers.allKeys[0]}}</span>
					<span class="Pleasefillins" v-if="GET_MY.headers.allKeys.length == 2 || GET_MY.headers.allKeys.length == 3">、{{GET_MY.headers.allKeys[1]}}</span>
					<span class="Pleasefillins" v-if="GET_MY.headers.allKeys.length == 3">、{{GET_MY.headers.allKeys[2]}}</span>
					<span class="Pleasefillins" v-if="GET_MY.headers.allKeys.length > 3" v-for="(itas,index) in GET_MY.headers.allKeys" :key="index">{{itas}}、</span>
				</view>
				<view class="myheader-portrait-con-img"><image :src="right"></image></view>
			</view>
		</view>
		<!-- 添加供应关键词 -->
		<!-- <view class="myheader-portrait">
			<view class="myheader-portrait-con" @tap="gotoPurchase">
				<view class="myheader-portrait-con-zi">{{i18n.title10}}</view>
				<view class="myheader-portrait-con-juti">
					<span class="Pleasefillin" v-if="this.GET_MY.headers.instKeys[0] == ''||this.GET_MY.headers.instKeys.length == 0">{{i18n.title4}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.instKeys.length == 1 || this.GET_MY.headers.instKeys.length == 2|| this.GET_MY.headers.instKeys.length == 3|| this.GET_MY.headers.instKeys.length == 4|| this.GET_MY.headers.instKeys.length == 5|| this.GET_MY.headers.instKeys.length == 6|| this.GET_MY.headers.instKeys.length == 7|| this.GET_MY.headers.instKeys.length == 8|| this.GET_MY.headers.instKeys.length == 9|| this.GET_MY.headers.instKeys.length == 10">{{GET_MY.headers.instKeys[0]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.instKeys.length == 2|| this.GET_MY.headers.instKeys.length == 3|| this.GET_MY.headers.instKeys.length == 4|| this.GET_MY.headers.instKeys.length == 5|| this.GET_MY.headers.instKeys.length == 6|| this.GET_MY.headers.instKeys.length == 7|| this.GET_MY.headers.instKeys.length == 8|| this.GET_MY.headers.instKeys.length == 9|| this.GET_MY.headers.instKeys.length == 10">、{{GET_MY.headers.instKeys[1]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.instKeys.length == 3|| this.GET_MY.headers.instKeys.length == 4|| this.GET_MY.headers.instKeys.length == 5|| this.GET_MY.headers.instKeys.length == 6|| this.GET_MY.headers.instKeys.length == 7|| this.GET_MY.headers.instKeys.length == 8|| this.GET_MY.headers.instKeys.length == 9|| this.GET_MY.headers.instKeys.length == 10">、{{GET_MY.headers.instKeys[2]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.instKeys.length == 4|| this.GET_MY.headers.instKeys.length == 5|| this.GET_MY.headers.instKeys.length == 6|| this.GET_MY.headers.instKeys.length == 7|| this.GET_MY.headers.instKeys.length == 8|| this.GET_MY.headers.instKeys.length == 9|| this.GET_MY.headers.instKeys.length == 10">、{{GET_MY.headers.instKeys[3]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.instKeys.length == 5|| this.GET_MY.headers.instKeys.length == 6|| this.GET_MY.headers.instKeys.length == 7|| this.GET_MY.headers.instKeys.length == 8|| this.GET_MY.headers.instKeys.length == 9|| this.GET_MY.headers.instKeys.length == 10">、{{GET_MY.headers.instKeys[4]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.instKeys.length == 6|| this.GET_MY.headers.instKeys.length == 7|| this.GET_MY.headers.instKeys.length == 8|| this.GET_MY.headers.instKeys.length == 9|| this.GET_MY.headers.instKeys.length == 10">、{{GET_MY.headers.instKeys[5]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.instKeys.length == 7|| this.GET_MY.headers.instKeys.length == 8|| this.GET_MY.headers.instKeys.length == 9|| this.GET_MY.headers.instKeys.length == 10">、{{GET_MY.headers.instKeys[6]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.instKeys.length == 8|| this.GET_MY.headers.instKeys.length == 9|| this.GET_MY.headers.instKeys.length == 10">、{{GET_MY.headers.instKeys[7]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.instKeys.length == 9|| this.GET_MY.headers.instKeys.length == 10">、{{GET_MY.headers.instKeys[8]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.instKeys.length == 10">、{{GET_MY.headers.instKeys[9]}}</span>
				</view>
				<view class="myheader-portrait-con-img"><image :src="right"></image></view>
			</view>
		</view> -->
		<!-- 添加采购关键词 -->
		<!-- <view class="myheader-portrait">
			<view class="myheader-portrait-con" @tap="gotoKeyword">
				<view class="myheader-portrait-con-zi">{{i18n.title10s}}</view>
				<view class="myheader-portrait-con-juti">
					<span class="Pleasefillin" v-if="this.GET_MY.headers.purcKeys[0] == ''||this.GET_MY.headers.purcKeys.length == 0">{{i18n.title4}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.purcKeys.length == 1 || this.GET_MY.headers.purcKeys.length == 2|| this.GET_MY.headers.purcKeys.length == 3|| this.GET_MY.headers.purcKeys.length == 4|| this.GET_MY.headers.purcKeys.length == 5|| this.GET_MY.headers.purcKeys.length == 6|| this.GET_MY.headers.purcKeys.length == 7|| this.GET_MY.headers.purcKeys.length == 8|| this.GET_MY.headers.purcKeys.length == 9|| this.GET_MY.headers.purcKeys.length == 10">{{GET_MY.headers.purcKeys[0]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.purcKeys.length == 2|| this.GET_MY.headers.purcKeys.length == 3|| this.GET_MY.headers.purcKeys.length == 4|| this.GET_MY.headers.purcKeys.length == 5|| this.GET_MY.headers.purcKeys.length == 6|| this.GET_MY.headers.purcKeys.length == 7|| this.GET_MY.headers.purcKeys.length == 8|| this.GET_MY.headers.purcKeys.length == 9|| this.GET_MY.headers.purcKeys.length == 10">、{{GET_MY.headers.purcKeys[1]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.purcKeys.length == 3|| this.GET_MY.headers.purcKeys.length == 4|| this.GET_MY.headers.purcKeys.length == 5|| this.GET_MY.headers.purcKeys.length == 6|| this.GET_MY.headers.purcKeys.length == 7|| this.GET_MY.headers.purcKeys.length == 8|| this.GET_MY.headers.purcKeys.length == 9|| this.GET_MY.headers.purcKeys.length == 10">、{{GET_MY.headers.purcKeys[2]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.purcKeys.length == 4|| this.GET_MY.headers.purcKeys.length == 5|| this.GET_MY.headers.purcKeys.length == 6|| this.GET_MY.headers.purcKeys.length == 7|| this.GET_MY.headers.purcKeys.length == 8|| this.GET_MY.headers.purcKeys.length == 9|| this.GET_MY.headers.purcKeys.length == 10">、{{GET_MY.headers.purcKeys[3]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.purcKeys.length == 5|| this.GET_MY.headers.purcKeys.length == 6|| this.GET_MY.headers.purcKeys.length == 7|| this.GET_MY.headers.purcKeys.length == 8|| this.GET_MY.headers.purcKeys.length == 9|| this.GET_MY.headers.purcKeys.length == 10">、{{GET_MY.headers.purcKeys[4]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.purcKeys.length == 6|| this.GET_MY.headers.purcKeys.length == 7|| this.GET_MY.headers.purcKeys.length == 8|| this.GET_MY.headers.purcKeys.length == 9|| this.GET_MY.headers.purcKeys.length == 10">、{{GET_MY.headers.purcKeys[5]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.purcKeys.length == 7|| this.GET_MY.headers.purcKeys.length == 8|| this.GET_MY.headers.purcKeys.length == 9|| this.GET_MY.headers.purcKeys.length == 10">、{{GET_MY.headers.purcKeys[6]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.purcKeys.length == 8|| this.GET_MY.headers.purcKeys.length == 9|| this.GET_MY.headers.purcKeys.length == 10">、{{GET_MY.headers.purcKeys[7]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.purcKeys.length == 9|| this.GET_MY.headers.purcKeys.length == 10">、{{GET_MY.headers.purcKeys[8]}}</span>
					<span class="Pleasefillins" v-if="this.GET_MY.headers.purcKeys.length == 10">、{{GET_MY.headers.purcKeys[9]}}</span>
				</view>
				<view class="myheader-portrait-con-img"><image :src="right"></image></view>
			</view>
		</view> -->
		<!-- 保存 -->
		<view class="myheader-btn" @tap="Preservation">{{i18n.title11}}</view>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
import navigation from "@/components/mbbo/navigation/navigation.vue";
import right from '@/static/mbcImg/my/right.png';
import imageUploadOne from '@/components/common/imageUpload/imageUploadOne.vue'
import { mapMutations, mapGetters } from 'vuex';
export default {
	data() {
		return {
			right: right,
			Listdata: [],
			imageData: '',
			logo: '',
			logos: '',
			serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload',
			list:[],
			name:'',
		};
	},
	components: {
		quickBtn,
		navigation,
		imageUploadOne
	},
	computed: {
		i18n () {
		  return this.$t('Mypersonal')  
		},
	  ...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: this.i18n.title1
		});
	},
	watch: {
		GET_MY: {
			handler(a, b) {
				console.log(a, b, 'header----list');
				this.list=a.headers;
				this.name = this.list.nickname;
			},
			deep: true
		}
	},
	created() {
		this.list = this.GET_MY.headers;
		this.shareEachPage(); // 分享
		console.log(this.list, 'myheader');
		this.getmy();
	},
	methods: {
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
		deleteImage: function(e) {
			console.log(e, '删除图片')
			this.logo = ''; // 清空数据
		},
		addImage: function(e) {
			console.log(e, '添加图片')
			if (e.allImages) { // 上传成功
				this.logo = (e.allImages[0].imgName);
				this.logos = (e.allImages[0].imgUrl)
				console.log(this.logo)
			}
		},
		gotoPersonal(){
			console.log('简单介绍');
			uni.navigateTo({
				url: '/modules/myCompany/myList/myheader-list/myheader-Personal',
			});
		},
		gotointerested(){
			console.log('感兴趣的行业');
			uni.navigateTo({
				url: '/modules/myCompany/myList/myheader-list/myheader-interested',
			});
		},
		gotoKeyword(){
			console.log('采购关键词');
			uni.navigateTo({
				url: '/modules/myCompany/myList/myheader-list/myheader-Keyword',
			});
		},
		gotoPurchase(){
			console.log('供应关键词');
			// uni.navigateTo({
			// 	url: '/modules/myCompany/myList/myheader-list/myheader-Purchase',
			// });
			uni.navigateTo({
				url: '/modules/myCompany/myList/myheader-list/KeyWords',
			});
			
		},
		Preservation(){//保存
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					"nickname": this.name,
					"headImg":this.logo,
					// "content":this.desc,
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/user/'+landRegistLG.user.id, //接口地址。
					data: params,
					method: 'POST',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						console.log(response.data);
						// this.GET_MY.headers.content = this.desc;
						this.GET_MY.headers.nickname = this.name;
						if(!this.logo){
							this.GET_MY.headers.headImg = this.list.headImg;
						}else{
							this.GET_MY.headers.headImg = this.logos;
						}
						this.$store.commit('setMy', this.GET_MY.headers); // 更新vuex
						uni.navigateBack({});
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
		}
	}
};
</script>

<style>
	.myheader {
		width: 100%;
		height: 100%;
	}
	.tian{
		width: 100%;
		height: 88upx;
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
	.myheader-Tips {
		width: 100%;
		height: 64upx;
		font-size: 24upx;
		color: #9b9b9b;
		text-align: center;
		line-height: 64upx;
	}
	.myheader-portrait {
		width: 100%;
		height: 116upx;
		background: #ffffff;
	}
	.myheader-portrait-con {
		width: 90%;
		height: 100%;
		border-bottom: 2upx solid #f5f5f5;
		margin: 0 auto;
		position: relative;
	}
	.myheader-portrait-con-zi {
		width: 30%;
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
		width: 45%;
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
	.bott{
		margin-top: 20upx;
	}
	.Pleasefillin{
		color: #D2D2D2;
	}
	.Pleasefillins{
		color: black;
	}
	.myheader-btn{
		width: 90%;
		height: 90upx;
		background: #02C2A2;
		margin: 80upx auto auto auto;
		text-align: center;
		line-height: 90upx;
		font-size: 32upx;
		color: #FFFFFF;
	}
	
	/* 图片 */
	.ziti {
		position: absolute;
		right: 40upx;
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		top: -20upx;
		font-size: 30upx;
	}
	.BI-items-right {
		position: relative;
		width: 64%;
	}
	
	.BI-text-right {
		position: relative;
		width: 100%;
		margin-top: 44upx;
		margin-bottom: 44upx
	}
	
	.BI-picker {
		position: relative;
		font-family: PingFang-SC-Medium;
		font-size: 28upx;
		color: #D2D2D2;
		overflow: hidden;
		text-overflow: clip;
		white-space: pre;
		word-break: keep-all;
		letter-spacing: 0;
		padding: 0px;
		margin-top: 44upx;
		margin-bottom: 44upx;
		line-height: 36upx;
		margin-left: 24upx;
		text-align: right;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: right;
		padding-right: 24upx;
		margin-left: 0px;
	}
	
	.BI-pickered {
		color: #2E2E30 !important;
	}
	
	.Img-Upload {
		width: 120upx;
		height: 80upx;
		position: absolute;
		border-radius: 50%;
		right: 40upx;
		top: -20upx;
	}
	
	.BI-picker-Img {
		width: 80upx;
		height: 80upx;
		position: absolute;
		right: 28upx;
		top: -20upx;
	}
	.BI-rightArrow {
		position: absolute;
		width: 18upx;
		height: 18upx;
		right: 0upx;
		top: 6upx;
	}
	/* 图片 */
</style>
