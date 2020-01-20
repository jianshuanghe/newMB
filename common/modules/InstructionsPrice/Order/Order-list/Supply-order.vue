<template>
	<view class="Supply-order">
		<!-- 导航栏 agents导航栏标题 -->
		<view class="my-Already-header">
			<view class="my-Already-headerone">
				<span v-for="(item,index) in List" :key="index" :class="numa==index?'changeColors':''" @tap="gotoGood(index)">{{item}}</span>
			</view>
		</view>
		<view class="tian"></view>
		<scroll-view class="scroll-v list" scroll-y="true" @scrolltolower="loadMore()">
		<!-- 供应订单列表 -->
		<view class="Supply-order-list" @tap="gotodetails(item.id)" v-for="(item,index) in shu" :key="index">
			<!-- 标品 -->
			<image :src="biao" class="Supply-order-tu" v-if="item.orderType == 1"></image>
			<!-- 定制 -->
			<image class="Supply-order-tu" :src="ding" v-if="item.orderType == 0"></image>
			<view class="Supply-order-listA">
				<view>订单号:{{item.orderOrder}}</view>
				<view v-if="item.orderState == 0">待确认</view>
				<view v-if="item.orderState == 1" style="color: #02C2A2;">待发货</view>
				<view v-if="item.orderState == 2" style="color: #02C2A2;">待收货</view>
				<view v-if="item.orderState == 3" style="color: #FF4D6A;">已完成</view>
				<view v-if="item.orderState == 4" style="color: #2E2E30;">已关闭</view>
			</view>
			<view class="Supply-order-listB">
				<view class="Supply-order-listB-img">
					<image :src="item.bannerImg" mode=""></image>
				</view>
				<view class="Supply-order-listB-zi">
					<view>{{item.instrucTitle}}</view>
					<view>{{item.moneyStr}}&nbsp;&nbsp;X{{item.orderSpCount}}</view>
					<view>订单总额约：<span>￥{{item.orderSpMoney}}</span></view>
				</view>
			</view>
			<view class="Supply-order-listC">
				<view>采购方：{{item.userName}}</view>
				<view>联系电话：{{item.ssoUserName}}</view>
			</view>
		</view>
		<view class="meirenkanwo" v-if="shu.length === 0">
			<image :src="kong" mode=""></image>
			暂无！
		</view>
		</scroll-view>
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				List:['全部','待确认','待发货','待收货','已完成','已关闭'],
				numa:0,
				biao: this.Static+'my/biao.png',
				ding: this.Static+'my/ding.png',
				kong: this.Static+'my/kong.png',
				gong:[],
				shu:[],
				pages:'1',
			}
		},
		mounted() {
			
		},
		watch: {
			GET_MY: {
				handler(a, b) {
					this.shu = a.Supply
				},
				deep: true
			}
		},
		onLoad() {
			
		},
		created(){
			this.Supply();
		},
		// onLoad(){
		// 	console.log(123)
		// 	console.log(this.GET_MY.Supply,'asdasd5a6s4d6a5s4d56a4sd65a4d')
		// 	var ins=[];
		// 	ins=this.GET_MY.Supply;
		// 	console.log(ins)
		// },
		methods: {
			loadMore:function(){
				if(this.numa==0){
					this.pages='2';
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages, //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								// console.log(111111111111111111111111111111111111)
								
								
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
									return false;
								}else{
									this.pages++;
									response.data.content.list.map((item,index)=>{
										this.shu.push(item)
									})
									console.log(this.shu)
								}
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
				}else if(this.numa==1){
					this.pages='2';
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=0', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
									return false;
								}else{
									this.pages++;
									response.data.content.list.map((item,index)=>{
										this.shu.push(item)
									})
									console.log(this.shu)
								}
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
				}else if(this.numa==2){
					this.pages='2';
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=1', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
									return false;
								}else{
									this.pages++;
									response.data.content.list.map((item,index)=>{
										this.shu.push(item)
									})
									console.log(this.shu)
								}
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
				}else if(this.numa==3){
					this.pages='2';
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=2', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
									return false;
								}else{
									this.pages++;
									response.data.content.list.map((item,index)=>{
										this.shu.push(item)
									})
									console.log(this.shu)
								}
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
				}else if(this.numa==4){
					this.pages='2';
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=3', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
									return false;
								}else{
									this.pages++;
									response.data.content.list.map((item,index)=>{
										this.shu.push(item)
									})
									console.log(this.shu)
								}
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
				}else if(this.numa==5){
					this.pages='2';
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=4', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
									return false;
								}else{
									this.pages++;
									response.data.content.list.map((item,index)=>{
										this.shu.push(item)
									})
									console.log(this.shu)
								}
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
			},
			gotoGood(index) {
				this.numa = index;
				if(index == 0){//全部
					this.pages='1';
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages, //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.shu=response.data.content.list;
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
					// this.$store.commit('setSupply', this.arr);
				}else if(index == 1){//待确认
				this.pages='1';
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=0', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.shu=response.data.content.list;
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
				}else if(index == 2){//待发货
				this.pages='1';
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=1', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.shu=response.data.content.list;
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
				}else if(index == 3){//已完成
				this.pages='1';
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=2', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.shu=response.data.content.list;
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
				}else if(index == 4){//已完成
				this.pages='1';
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=3', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.shu=response.data.content.list;
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
				}else if(index == 5){//已关闭
					this.pages='1';
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=4', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.shu=response.data.content.list;
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
			},
			Supply(){//供应订单
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page='+this.pages, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.gong = response.data.content.list;
							this.$store.commit('setSupply', this.gong);
							this.pages++;
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
			gotodetails(e){
				console.log('订单详情')
				uni.navigateTo({
					url: '/modules/InstructionsPrice/Order/Order-list/Order-details/Order-details?id='+e,
				});
			}
		},
		computed: {
			...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
	}
</script>

<style>
	.Supply-order{
		width: 100%;
		min-height: 100%;
	}
	.scroll-v {
		flex: 1;
		/* #ifndef MP-ALIPAY */
		flex-direction: column;
		/* #endif */
		width: 750upx;
		height: 87vh;
		padding-bottom: 0vh;
	}
	.my-Already-header{
		width: 100%;
		height: 72upx;
		border-bottom: 2upx solid #F5F5F5;
		position: fixed;
		top: 88upx;
		background: #FFFFFF;
		z-index: 10;
	}
	.my-Already-headerone{
		width: 100%;
		height: 100%;
		margin-left: 10upx;
		float: left;
	}
	.my-Already-headerone>span{
		font-size: 24upx;
		color: #9B9B9B;
		/* line-height: 72upx; */
		float: left;
		margin-left: 40upx;
		margin-top: 18upx;
	}
	.changeColors{
		padding: 0upx 16upx 0upx 16upx;
		background: #E2E2E2;
		border-radius: 26upx;
		color: #2E2E30!important;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.Supply-order-list{
		width: 100%;
		height: 500upx;
		background: #FFFFFF;
		margin-top: 40upx;
		position: relative;
	}
	.Supply-order-tu{
		left: 0;
		top: 0;
		width: 100upx;
		height: 100upx;
		position: absolute;
	}
	.Supply-order-listA{
		width: 100%;
		height: 96upx;
		border-bottom: 2upx solid #F5F5F5;
		
	}
	.Supply-order-listA>view:nth-of-type(1){
		font-size: 32upx;
		color: #2E2E30;
		line-height: 96upx;
		padding-left: 70upx;
		float: left;
	}
	.Supply-order-listA>view:nth-of-type(2){
		font-size: 32upx;
		color: #FAB100;
		line-height: 96upx;
		padding-right: 30upx;
		float: right;
		font-weight: bold;
	}
	.Supply-order-listB{
		width: 90%;
		height: 260upx;
		margin: 0 auto;
		border-bottom: 2upx solid #EFEFEF;
		overflow: hidden;
	}
	.Supply-order-listB-img{
		width: 168upx;
		height: 174upx;
		margin-top: 44upx;
		float: left;
	}
	.Supply-order-listB-img>image{
		width: 100%;
		height: 100%;
	}
	.Supply-order-listB-zi{
		width: 72%;
		height: 174upx;
		float: right;
		margin-top: 44upx;
		position: relative;
	}
	.Supply-order-listB-zi>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.Supply-order-listB-zi>view:nth-of-type(2){
		font-size: 28upx;
		color: #9B9B9B;
	}
	.Supply-order-listB-zi>view:nth-of-type(3){
		font-size: 28upx;
		color: #9B9B9B;
		position: absolute;
		bottom: -10upx;
	}
	.Supply-order-listB-zi>view:nth-of-type(3)>span{
		color: #FF4D6A;
		font-weight: bold;
	}
	.Supply-order-listC{
		width: 90%;
		height: 136upx;
		margin: 0 auto;
		overflow: hidden;
	}
	.Supply-order-listC>view{
		font-size: 28upx;
		color: #9B9B9B;
	}
	.Supply-order-listC>view:nth-of-type(1){
		margin-top: 18upx;
	}
	.meirenkanwo{
		width: 330upx;
		height: 280upx;
		display: block;
		margin: 120upx auto auto auto;
		font-size: 28upx;
		text-align: center;
		color: #9B9B9B;
		clear: both;
	}
	.meirenkanwo>image {
		width: 92%;
		height: 80%;
	}
</style>
