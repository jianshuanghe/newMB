<template>
	<view class="Already-details">
		<!-- 已发留言详情 -->
		<view class="my-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<!-- 我的留言详情 -->
			<div class="search-Fd left">{{ i18n.message4 }}</div>
		</view>
		<view class="tian"></view>
		<view class="Already-details-GL">
			<view>关联供应：{{list.instrucTitl}}</view>
			<view>{{list.compUserName}}·{{list.compTel}}·{{list.compName}}</view>
		</view>
		<view class="Already-details-XS"></view>
		<view class="Already-details-title">{{list.instrucTitl}}</view>
		<view class="Already-details-time">{{list.msgTime|formatDate}}</view>
		<view class="Already-details-zi">{{list.msgContent}}</view>
		<view class="Already-details-LX">联系人: {{list.name}}</view>
		<view class="Already-details-DH">联系电话: <span @tap="phone(list.mobile)">{{list.mobile}}</span></view>
		<view class="Buyer-details-tian"></view>
		<view class="Already-details-del" @tap="del()">删除此留言</view>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list:[],
			}
		},
		components: {
			quickBtn,
			navigation
		},
		computed: {
			i18n () {
			  return this.$t('Mypersonal')  
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO'])
		},
		created() {
			this.shareEachPage(); // 分享
		},
		onLoad:function(opcito){
			console.log(opcito)
			this.id=opcito.id,
			uni.setNavigationBarTitle({
				title: this.i18n.message1
			});
			this.Already();
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
				return y + '.' + MM + '.' + d ;
			}
		},
		methods:{
			phone(e){
				uni.makePhoneCall({
					phoneNumber: e //仅为示例
				});
			},
			gotoGood(index) {
				this.num = index;
			},
			del(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/msg/' + this.id, //接口地址。
						// data: params,
						method: 'DELETE',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.Alreadys();
							uni.navigateBack({});
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
			Alreadys(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/msg/selectList?myUserId='+landRegistLG.user.id+'&page=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.Alr = response.data.content.list
							this.$store.commit('setAlr', this.Alr);
							// this.lists = response.data.content.instKeys
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
			Already(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/msg/selectInfo?id=' + this.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list=response.data.content
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
		}
		
	}
</script>

<style>
	.Already-details{
		width: 100%;
		min-height: 100%;
		background: #FFFFFF;
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
	.Already-details-title{
		width: 90%;
		font-size: 40upx;
		font-weight: bold;
		color: #2E2E30;
		margin: -10upx auto auto auto;
	}
	.Already-details-time{
		width: 90%;
		font-size: 28upx;
		color: #9B9B9B;
		margin: 20upx auto auto auto;
	}
	.Already-details-zi{
		width: 90%;
		font-size: 32upx;
		color: #2E2E30;
		margin: 20upx auto auto auto;
		line-height: 24px;
	}
	.Already-details-LX{
		width: 90%;
		font-size: 28upx;
		color: #2E2E30;
		margin: 30upx auto auto auto;
	}
	.Already-details-DH{
		width: 90%;
		font-size: 28upx;
		color: #2E2E30;
		margin: 10upx auto auto auto;
	}
	.Already-details-DH>span{
		color: #02C2A2;
		margin-left: 10upx;
	}
	.Already-details-GL{
		width: 90%;
		height: 146upx;
		background: #F2FEFC;
		border-left: 4upx solid #02C2A2;
		margin: 30upx auto auto auto;
	}
	.Already-details-GL>view{
		width: 90%;
		height: 50%;
		font-size: 28upx;
		color: #02C2A2;
		margin-left: 20upx;
		line-height: 73upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.Already-details-del{
		width: 100%;
		height: 88upx;
		text-align: center;
		line-height: 88upx;
		font-size: 32upx;
		color: #2E2E30;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		border-top: 2upx solid #F5F5F5;
	}
	.Already-details-XS{
		width: 90%;
		margin: 40upx auto;
		height: 2upx;
		border-bottom: 2upx dashed #E2E2E2;
	}
	.Buyer-details-tian{
		width: 100%;
		height: 100upx;
	}
</style>
