<template>
	<view class="find-capital">
		<view class="my-title">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<!-- 个人中心 -->
			<div class="search-Fd left">
			  项目详情
			</div>
		</view>
		<view class="tian"></view>
		<view class="find-capital-header">
			<view class="find-capital-heat">
				<view class="find-capital-heatleft">
					<view class="find-capital-leftA">{{arr.projName}}</view>
					<view class="find-capital-leftB">{{arr.projSlogan}}</view>
					<view class="find-capital-leftC">
						<span>企业服务 |</span><span>{{arr.pcode}}</span>
					</view>
					<view class="find-capital-leftD">上轮获投情况</view>
					<view class="find-capital-leftE">
						{{arr.finanLevelCode || '未融资'}}<span>|</span>{{arr.finanMoneyStr || '金额未披露'}}
					</view>
				</view>
				<view class="find-capital-heatright">
					<image :src="arr.projLogo" mode=""></image>
				</view>
			</view>
			<view class="find-capital-head">
				<view v-for="(item,index) in arr.projLabels" :key="index" v-if="arr.projLabels.length!==0">{{item.labelName}}</view>
				<view v-if="arr.projLabels.length==0">暂无标签</view>
			</view>
		</view>
		<view class="find-capital-XM" v-if="arr.projImgs.length!==0&&arr.projContent!==''&&arr.conentMarket!==''&&arr.conentPortrait!==''">
			<view class="find-capital-XMone">
				<span>项目简介</span>
			</view>
			<view class="find-capital-img" v-if="arr.projImgs.length!==0">
				<img v-for="(ite,index) in arr.projImgs" :key="index" :src="ite.imgName"/>
			</view>
			<view class="find-capital-XMss" v-if="arr.projContent!==''">
				<view>项目介绍</view>
				<view>{{arr.projContent}}</view>
			</view>
			<view class="find-capital-XMss" v-if="arr.conentMarket!==''">
				<view>市场需求</view>
				<view>{{arr.conentMarket}}</view>
			</view>
			<view class="find-capital-XMss" v-if="arr.conentPortrait!==''">
				<view>用户画像</view>
				<view>{{arr.conentPortrait}}</view>
			</view>
		</view>
		<view class="find-cloud-JG"></view>
		<view class="find-capital-XQ">
			<view class="find-capital-XQone">
				<span>融资需求</span>
			</view>
			<view class="find-capital-XQtwo">
				{{arr.finanLevelCode}} {{arr.finanMoneyStr}}
			</view>
		</view>
		<!-- <view class="find-cloud-JG"></view> -->
		<view class="find-capital-XQ" v-if="arr.projCapis.length!==0">
			<view class="find-capital-XQone">
				<span>融资历史</span>
			</view>
			<view class="find-capital-XQsss" v-for="(inte,index) in arr.projCapis" :key="index">
				<view class="find-capital-XQsssa">
					<view>{{inte.capiStartime|formatDate}}月</view>
					<view>{{inte.capiStartime|formatDates}}</view>
				</view>
				<view class="find-capital-XQsssb">
					<view>金额: {{inte.capiMoney}}万</view>
					<view>在融轮次: {{inte.levelCode}}</view>
					<view>{{inte.capiInveCompName}}</view>
				</view>
			</view>
		</view>
		<view class="find-cloud-JG"></view>
		<view class="find-capital-XQ" v-if="arr.projUsers.length!==0">
			<view class="find-capital-XQone">
				<span>团队成员</span>
			</view>
			<view class="find-capital-TD" v-for="(tds,index) in arr.projUsers" :key="index">
				<view class="find-capital-TDimg">
					<image :src="tds.projUserImg" mode=""></image>
				</view>
				<view class="find-capital-TDimgzi">
					<view>{{tds.projUserName}}<span>| {{tds.projUserPosition}}</span></view>
					<view>{{tds.projUserContent}}</view>
				</view>
			</view>
		</view>
		<view class="find-cloud-JG"></view>
		<view class="find-capital-XQ">
			<view class="find-capital-XQone">
				<span>公司信息</span>
			</view>
			<view class="find-capital-XX">
				<view>公司全称</view>
				<view>{{arr.compName}}</view>
			</view>
			<view class="find-capital-XX" v-if="arr.compAddr!==''">
				<view>公司地址</view>
				<view>{{arr.compAddr}}</view>
			</view>
		</view>
		<view class="find-cloud-JGs"></view>
		<view class="find-capital-BUT">
			<view @tap="phone">联系客服</view>
		</view>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				arr:[],
				id:'',
			};
		},
		components: {
			quickBtn,
			navigation
		},
		computed: {
			...mapGetters(['QUICKNAVCO'])
		},
		created() {
			this.capital();
			this.shareEachPage(); // 分享
		},
		mounted() {},
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
				return MM ;
			},
			formatDates: function(value) {
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
				return y ;
			}
		},
		onLoad:function(val){
			console.log(val)
			this.id=val.id
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber: '4006182288' //拨打电话
				});
			},
			capital(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/proj/info/' + this.id + '?lookUserId='+landRegistLG.user.id, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.arr=response.data.content;
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
				} else if (uni.getStorageSync('UUID')) {
					let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
					console.log(UUID);
					 // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/proj/info/' + this.id + '?lookUserId='+UUID, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.arr=response.data.content;
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
	.tian{
		width: 100%;
		height: 88upx;
	}
	.my-title{
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
		width: 100%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
	}
	.find-capital{
		width: 100%;
		min-height: 100%;
		background: #FFFFFF;
		padding: 1upx;
	}
	.find-capital-header{
		width: 90%;
		height: 430upx;
		margin: 30upx auto;
		background: rgba(255,255,255,0.90);
		border: 1px solid rgba(226,226,226,0.50);
		box-shadow: 0 2upx 16upx 0 #EBEBEB;
	}
	.find-capital-heat{
		width: 90%;
		height: 308upx;
		margin: 0 auto;
		border-bottom: 2upx solid #F5F5F5;
	}
	.find-capital-heatleft{
		width: 80%;
		height: 100%;
		float: left;
	}
	.find-capital-leftA{
		font-size: 40upx;
		color: #2E2E30;
		padding-top: 20upx;
	}
	.find-capital-leftB{
		font-size: 24upx;
		color: #9B9B9B;
		margin-top: -10upx;
	}
	.find-capital-leftC{
		font-size: 12px;
		color: #9B9B9B;
		margin-top: 10upx;
	}
	.find-capital-leftC>span:nth-of-type(2){
		margin-left: 10upx;
	}
	.find-capital-leftD{
		font-size: 24upx;
		color: #9B9B9B;
		margin-top: 5upx;
	}
	.find-capital-leftE{
		font-size: 28upx;
		color: #2E2E30;
		margin-top: -5upx;
	}
	.find-capital-leftE>span{
		padding-left: 5upx;
		padding-right: 5upx;
		color: #D2D2D2;
	}
	.find-capital-heatright{
		width: 100upx;
		height: 100upx;
		float: right;
		border: 2upx solid #F5F5F5;
		border-radius: 2upx;
		margin-top: 30upx;
	}
	.find-capital-heatright>image{
		width: 100%;
		height: 100%;
	}
	.find-capital-head{
		width: 90%;
		height: 45upx;
		margin: 40upx auto;
		overflow: hidden;
	}
	.find-capital-head>view:nth-of-type(1){
		padding: 5upx 10upx 5upx 10upx;
		background: rgba(2,194,162,0.10);
		border-radius: 4upx;
		font-size: 20upx;
		color: #02C2A2;
		float: left;
		margin-left: 0upx;
	}
	.find-capital-head>view{
		padding: 5upx 10upx 5upx 10upx;
		background: rgba(2,194,162,0.10);
		border-radius: 4upx;
		font-size: 20upx;
		color: #02C2A2;
		float: left;
		margin-left: 10upx;
	}
	.find-capital-XM{
		width: 90%;
		min-height: 400upx;
		margin: 60upx auto auto auto;
	}
	.find-capital-XMone{
		width: 100%;
		height: 60upx;
		line-height: 60upx;
	}
	.find-capital-XMone>span:nth-of-type(1){
		display: block;
		float: left;
		font-size: 34upx;
		color: #2E2E30;
	}
	.find-capital-XMone>span:nth-of-type(2){
		ont-size: 26upx;
		color: #02C2A2;
		display: block;
		float: right;
	}
	.find-capital-img{
		width: 100%;
		height: 202upx;
		border-bottom: 2upx solid #F5F5F5;
		display: flex;
		justify-content: space-between;
		margin-top: 30upx;
	}
	.find-capital-img>img{
		width: 215upx;
		height: 150upx;
	}
	.find-capital-XMss{
		width: 100%;
		min-height: 150upx;
		border-bottom: 2upx solid #F5F5F5;
		padding-bottom: 40upx;
	}
	.find-capital-XMss>view:nth-of-type(1){
		width: 100%;
		height: 40upx;
		line-height: 40upx;
		font-size: 28upx;
		color: #2E2E30;
		padding-top: 48upx;
	}
	.find-capital-XMss>view:nth-of-type(2){
		font-size: 28upx;
		color: #5D5D5D;
		line-height: 44upx;
		margin-top: 20upx;
	}
	.find-cloud-JG{
		width: 100%;
		height: 20upx;
		background: #F5F5F5;
	}
	.find-capital-XQ{
		width: 90%;
		margin: 0 auto;
		min-height: 200upx;
	}
	.find-capital-XQone{
		width: 100%;
		height: 60upx;
		line-height: 60upx;
		padding-top: 50upx;
		font-weight: bold;
	}
	.find-capital-XQone>span:nth-of-type(1){
		display: block;
		float: left;
		font-size: 34upx;
		color: #2E2E30;
	}
	.find-capital-XQone>span:nth-of-type(2){
		ont-size: 26upx;
		color: #02C2A2;
		display: block;
		float: right;
	}
	.find-capital-XQtwo{
		font-size: 24upx;
		color: #5D5D5D;
		padding-top: 15upx;
	}
	.find-capital-XQsss{
		width: 100%;
		height: 170upx;
		border-bottom: 2upx solid #F5F5F5;
	}
	.find-capital-XQsssa{
		width: 90upx;
		height: 90upx;
		background: #F5F5F5;
		margin-top: 20upx;
		border-radius: 8upx;
		text-align: center;
		float: left;
	}
	.find-capital-XQsssa>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		font-weight: bold;
	}
	.find-capital-XQsssa>view:nth-of-type(2){
		font-size: 28upx;
		color: #9B9B9B;
		margin-top: -10upx;
	}
	.find-capital-XQsssb{
		width: 82%;
		height: 100%;
		float: right;
	}
	.find-capital-XQsssb>view:nth-of-type(1){
		font-size: 26upx;
		color: #5D5D5D;
		padding-top: 10upx;
	}.find-capital-XQsssb>view:nth-of-type(2){
		font-size: 26upx;
		color: #5D5D5D;
	}.find-capital-XQsssb>view:nth-of-type(3){
		font-size: 26upx;
		color: #FAB100;
	}
	.find-capital-TD{
		width: 100%;
		min-height: 176upx;
		border-bottom: 2upx solid #F5F5F5;
		overflow: hidden;
	}
	.find-capital-TDimg{
		width: 88upx;
		height: 88upx;
		border-radius: 50%;
		margin-top: 40upx;
		float: left;
	}
	.find-capital-TDimg>image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.find-capital-TDimgzi{
		width: 84%;
		height: 100%;
		float: right;
	}
	.find-capital-TDimgzi>view:nth-of-type(1){
		font-size: 32upx;
		color: #2E2E30;
		padding-top: 30upx;
	}
	.find-capital-TDimgzi>view:nth-of-type(1)>span{
		font-size: 24upx;
		color: #9B9B9B;
		margin-left: 10upx;
	}
	.find-capital-TDimgzi>view:nth-of-type(2){
		font-size: 12px;
		color: #5D5D5D;
	}
	.find-capital-XX{
		width: 100%;
		height: 180upx;
		border-bottom: 2upx solid #F5F5F5;
	}
	.find-capital-XX>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		padding-top: 40upx;
	}
	.find-capital-XX>view:nth-of-type(2){
		font-size: 28upx;
		color: #5D5D5D;
		padding-top: 10upx;
	}
	.find-cloud-JGs{
		width: 100%;
		height: 20upx;
		background: #F5F5F5;
		padding-bottom: 120upx;
	}
	.find-capital-BUT{
		width: 100%;
		height: 120upx;
		overflow: hidden;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
	}
	.find-capital-BUT>view{
		width: 90%;
		height: 90upx;
		margin: 0 auto;
		background: #02C2A2;
		border-radius: 4upx;
		margin-top: 16upx;
		text-align: center;
		line-height: 90upx;
		font-size: 28upx;
		color: #FFFFFF;
	}
</style>
