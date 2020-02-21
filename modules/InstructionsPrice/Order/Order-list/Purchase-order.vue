<template>
	<view class="Purchase-order">
		<!-- 导航栏 agents导航栏标题 -->
		<view class="my-Already-header">
			<view class="my-Already-headerone">
				<span v-for="(item,index) in List" :key="index" :class="numa==index?'changeColors':''" @tap="gotoGood(index)">{{item}}</span>
			</view>
		</view>
		<view class="tian"></view>
		<scroll-view class="scroll-v list" scroll-y="true" @scrolltolower="loadMore()">
		<!-- 采购订单列表 -->
		<view class="Purchase-order-list" v-for="(item,index) in shu" :key="index">
			<!-- 标品 -->
			<image :src="biao" class="Purchase-order-tu" v-if="item.orderType == 1"></image>
			<!-- 定制 -->
			<image class="Purchase-order-tu" :src="ding" v-if="item.orderType == 0" @tap="gotodetails(item.id)"></image>
			<view class="Purchase-order-listA" @tap="gotodetails(item.id)">
				<view>订单号:{{item.orderOrder}}</view>
				<view v-if="item.orderState == 0">待确认</view>
				<view v-if="item.orderState == 1" style="color: #02C2A2;">待发货</view>
				<view v-if="item.orderState == 2" style="color: #02C2A2;">待收货</view>
				<view v-if="item.orderState == 3" style="color: #FF4D6A;">已完成</view>
				<view v-if="item.orderState == 4" style="color: #2E2E30;">已关闭</view>
			</view>
			<view class="Purchase-order-listB" @tap="gotodetails(item.id)">
				<view class="Purchase-order-listB-img">
					<image :src="item.bannerImg" mode=""></image>
				</view>
				<view class="Purchase-order-listB-zi">
					<view>{{item.instrucTitle}}</view>
					<view>{{item.instrucIntro}}</view>
					<view>{{item.moneyStr}}&nbsp;&nbsp;X{{item.orderSpCount}}</view>
					
				</view>
			</view>
			<view class="Purchase-order-listC">
				<view>订单总额约：<span>￥{{item.orderSpMoney}}</span></view>
				<!-- <view v-if="item.orderState === '0'">修改定制信息</view> -->
				<view v-if="item.orderState === '3' || item.orderState === '4'" @tap="gotoAgain(item)">再来一单</view>
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
				shu:[],
				pages:'1',
			}
		},
		onLoad() {
			
		},
		watch: {
			GET_MY: {
				handler(a, b) {
					// console.log(a,b,'asdasdasd')
					this.shu = a.Purchase;
				},
				deep: true
			}
		},
		
		created(){
			
			this.Purchase();
		},
		mounted(){
		},
		methods: {
			gotoAgain(e){
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
					 sourceTemp: 4, // 说明书来源
					 aiListTemp: 0, // 是否展示ai
					 id: e.id, // 模板id
					 instrucCustType: e.instCustType, // 模板类型
					 isMenu: e.isMenu, // 横向导航
					 instrucId:  e.instId, // 说明书id
					 lookUserId: lookUserId, // 浏览者
					 creatorId: e.userId, // 说明书创建者
					 instrucState: e.instState // 说明书状态
				};
				uni.navigateTo({
				 url: '/modules/createBusiness/templatePro/templatePro?urlParams=' + this.urlCrypto(urlParams, 0)
				});
			},
			loadMore:function(){
				if(this.numa == 0){
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages, //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								
								this.pages++;
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
									return false;
								}else{
									response.data.content.list.map((item,index)=>{
										console.log(item)
										this.shu.push(item)
									})
									console.log(this.shu)
								}
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
				}else if(this.numa==1){
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=0', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.pages++;
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
									return false;
								}else{
									response.data.content.list.map((item,index)=>{
										console.log(item)
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
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=1', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.pages++;
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
									return false;
								}else{
									response.data.content.list.map((item,index)=>{
										console.log(item)
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
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=2', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.pages++;
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
									return false;
								}else{
									response.data.content.list.map((item,index)=>{
										console.log(item)
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
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=3', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.pages++;
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
									return false;
								}else{
									response.data.content.list.map((item,index)=>{
										console.log(item)
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
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=4', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.pages++;
								if(response.data.content.list.length==0){
									uni.showToast({
										title: '没有数据啦',
										icon: 'none',
										duration: 1000
									});
									return false;
								}else{
									response.data.content.list.map((item,index)=>{
										console.log(item)
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
				this.pages=1;
					// this.$store.commit('setPurchase', this.arr);
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages, //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.shu = response.data.content.list;
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
				}else if(index == 1){//待发货
				console.log(this.arr1)
				this.pages=1;
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=0', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.shu = response.data.content.list;
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
				}else if(index == 2){//待收货
				this.pages=1;
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=1', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.shu = response.data.content.list;
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
				}else if(index == 3){//已完成
				this.pages=1;
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=2', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.shu = response.data.content.list;
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
				}else if(index == 4){//已关闭
				this.pages=1;
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=3', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.shu = response.data.content.list;
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
				}else if(this.numa == 5){//已关闭
				this.pages=1;
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						// let params = {}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages+'&state=4', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.shu = response.data.content.list;
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
				}
			},
			gotodetails(e){
				console.log('订单详情')
				uni.navigateTo({
					url: '/modules/InstructionsPrice/Order/Order-list/Order-details/Order-detailsh?id='+e,
				});
			},
			Purchase(){//采购订单
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page='+this.pages, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.shu = response.data.content.list;
							this.pages++;
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
		},
		computed: {
			...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
	}
</script>

<style>
	.scroll-v {
		flex: 1;
		/* #ifndef MP-ALIPAY */
		flex-direction: column;
		/* #endif */
		width: 750upx;
		height: 87vh;
		padding-bottom: 0vh;
	}
	.Purchase-order{
		width: 100%;
		min-height: 100%;
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
	.Purchase-order-list{
		width: 100%;
		height: 500upx;
		background: #FFFFFF;
		margin-top: 40upx;
		position: relative;
	}
	.Purchase-order-tu{
		left: 0;
		top: 0;
		width: 100upx;
		height: 100upx;
		position: absolute;
	}
	.Purchase-order-listA{
		width: 100%;
		height: 96upx;
		border-bottom: 2upx solid #F5F5F5;
		
	}
	.Purchase-order-listA>view:nth-of-type(1){
		font-size: 32upx;
		color: #2E2E30;
		line-height: 96upx;
		padding-left: 70upx;
		float: left;
	}
	.Purchase-order-listA>view:nth-of-type(2){
		font-size: 32upx;
		color: #FAB100;
		line-height: 96upx;
		padding-right: 30upx;
		float: right;
		font-weight: bold;
	}
	.Purchase-order-listB{
		width: 90%;
		height: 260upx;
		margin: 0 auto;
		border-bottom: 2upx solid #EFEFEF;
		overflow: hidden;
	}
	.Purchase-order-listB-img{
		width: 168upx;
		height: 174upx;
		margin-top: 44upx;
		float: left;
	}
	.Purchase-order-listB-img>image{
		width: 100%;
		height: 100%;
	}
	.Purchase-order-listB-zi{
		width: 72%;
		height: 174upx;
		float: right;
		margin-top: 44upx;
		position: relative;
	}
	.Purchase-order-listB-zi>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.Purchase-order-listB-zi>view:nth-of-type(2){
		font-size: 28upx;
		color: #9B9B9B;
		line-height: 42upx;
		display: -webkit-box;
		-webkit-line-clamp:2;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
	}
	
	.Purchase-order-listB-zi>view:nth-of-type(3){
		font-size: 28upx;
		color: #9B9B9B;
		position: absolute;
		bottom: -12upx;
	}
	.Purchase-order-listC{
		width: 90%;
		height: 136upx;
		margin: 0 auto;
		overflow: hidden;
	}
	.Purchase-order-listC>view:nth-of-type(1){
		font-size: 28upx;
		color: #9B9B9B;
		line-height: 136upx;
		width: 50%;
		float: left;
	}
	.Purchase-order-listC>view:nth-of-type(1)>span{
		color: #FF4D6A;
		font-weight: bold;
	}
	.Purchase-order-listC>view:nth-of-type(2){
		width:  208upx;
		height: 64upx;
		border: 2upx solid #2E2E30;
		border-radius: 4upx;
		float: right;
		text-align: center;
		line-height: 68upx;
		font-size: 14px;
		color: #2E2E30;
		margin-top: 36upx;
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
