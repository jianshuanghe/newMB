<template>
	<view class="Purchase-details">
		<view class="my-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<view class="myproduct-title">
				{{i18n.product11}}
			</view>
		</view>
		<view class="tian"></view>
		<view class="Purchase-listA">
			<div class="purchase-content-box" @tap='goToPurchaseDeitle'>
				<!-- 采购中 -->
				<image class="wimage" :src="wa" v-if="list.purcState ==1"></image>
				<!-- 待发布 -->
				<image class="wimage" :src="wb" v-if="list.purcState ==0"></image>
				<!-- 已停止 -->
				<image class="wimage" :src="wc" v-if="list.purcState ==2"></image>
				<!-- 已完成 -->
				<image class="wimage" :src="wd" v-if="list.purcState ==3"></image>
				<!-- 已下架 -->
				<image class="wimage" :src="xia" v-if="list.purcState ==4"></image>
				
				<view class="Purchase-listA-zi">{{list.purcTitle|ellipsis}}</view>
				<view class="Purchase-listA-edit">
					<span v-if="list.purcSpec!==''">{{list.purcSpec}}</span>
					<span v-if="list.purcInvo==0">报价不含税</span>
					<span v-if="list.purcInvo==1">报价含税</span>
					<span v-if="list.purcFrei==0">报价不含运费</span>
					<span v-if="list.purcFrei==1">报价包含运费</span>
				</view>
				<view class="Purchase-listA-time">
					<view>{{list.createTimeStr}}</view>
					<view><image :src="Images" v-if="list.purcCcodeStr!=''"></image><span>{{list.purcCcodeStr|ellipsiss}}</span></view>
					<view><image :src="Image" v-if="list.purcEndTimeStr!=''"></image><span><span>{{list.purcEndTimeStr}}</span></span></view>
				</view>
			</div>
			<view class="myproduct-list-edit" @tap="gotodataReport()">
				<view class="product-book-BA one">
					<image :src="look"></image>
					<span>{{list.infoCount}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="phone"></image>
					<span>{{list.telCount}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="liu"></image>
					<span>{{list.chatCount}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="zan"></image>
					<span>{{list.likeCnt}}</span>
				</view>
				<view class="product-book-BA shou">
					<image :src="shou"></image>
					<span>{{list.followCount}}</span>
				</view>
				<view class="product-book-BA right shou">
					<image :src="fen"></image>
					<span>{{list.shareCnt}}</span>
				</view>
			</view>
		</view>
		<view class="product-book-con">
			二维码
		</view>
		<!-- <QRcode :data="this.qrImgs" v-if="list.purcState==1 || list.purcState==3"></QRcode> -->
		<!-- <view class="tishiyu" v-if="list.purcState!=1 || list.purcState!=3">您的说明书未发布</br>还没有生成说明书二维码哦～</view> -->
		<view class="qrShare-list">
			<rQrCode 
			:dataList="this.qrImgs" 
			:longTapSave='true'
			:previewImage='true'
			:isSaveBtn='true'
			nextMargin='100px'
			marginLeft='38%'
			:qrState="list.purcState"
			@tap-RQrCode='tapRQrCode'
			></rQrCode>
		</view>
		<view class="dibu">
			
		</view>
		<!-- 頁面底部功能按鍵 -->
		<view class="QRcode-sub">
			<view @tap="goToPurchaseDeitle" v-if="list.purcState==0 || list.purcState==2|| list.purcState==4 ">
				<view>
					<image :src="bian"></image>
				</view>
				<view>编辑</view>
			</view>
			<view  v-if="list.purcState==1 || list.purcState==3 ">
				<view class="bei">
					<image :src="bian2"></image>
				</view>
				<view class="beizi">编辑</view>
			</view>
			<view  v-if="list.purcState==1" @tap="stopadd(list.id)">
				<view>
					<image :src="stop"></image>
				</view>
				<view>停止</view>
			</view>
			<view  v-if="list.purcState==1" @tap="okadd(list.id)">
				<view>
					<image :src="stopicon"></image>
				</view>
				<view>完成</view>
			</view>
			<view v-if="list.purcState== 1" @tap="xiajia(list.id)">
				<view>
					<image :src="xias"></image>
				</view>
				<view>下架</view>
			</view>
			<view v-if="list.purcState== 0 || list.purcState==2 ||list.purcState==4 " @tap="fabuadd(list.id)">
				<view>
					<image :src="fabu"></image>
				</view>
				<view>发布</view>
			</view>
			<!-- <view>
				<view>
					<image :src="tui"></image>
				</view>
				<view>复制</view>
			</view> -->
			<!-- <view @tap="fenxiang()" v-if="list.purcState==3 || list.purcState==1 ">
				<view>
					<image :src="feng"></image>
				</view>
				<view>分享</view>
			</view>
			<view v-if="list.purcState==0 || list.purcState==2 || list.purcState==4">
				<view class="bei">
					<image :src="feng2"></image>
				</view>
				<view class="beizi">分享</view>
			</view> -->
			<view @tap="delet(list.id)" v-if="list.purcState==0 || list.purcState==2 || list.purcState==3 || list.purcState==4">
				<view>
					<image :src="shan"></image>
				</view>
				<view>删除</view>
			</view>
			<view v-if="list.purcState==1">
				<view class="bei">
					<image :src="shan2"></image>
				</view>
				<view class="beizi">删除</view>
			</view>
		</view>
		<!-- 分享遮罩 -->
		<view class="QRcode-Mask" v-if="Mask === 1"  @click="boss()">
			<view class="QRcode-Mask-con" v-on:click.stop='child'>
				<view class="QRcode-Mask-con-header">
					分享海报
				</view>
				<view class="QRcode-Mask-con-lun">
					<div class="swiper-container" ref="slider" style="margin-top: 40upx;">
						<div class="swiper-wrapper">
							<swiper class="swiper-box" next-margin='130px'>
								<swiper-item style="margin-left: 40%;" v-for="(item,index) in qrImgs" :key="index">
									<view class="swiper-item">
										<div class="swiper-slide left">
											<image :src="item"></image>
										</div>
									</view>
								</swiper-item>
							</swiper>
						</div>
					</div>
				</view>
				<view class="QRcode-Mask-con-di">
					<view>
						<view>
							<image :src="wei"></image>
						</view>
						<view>微信好友</view>
					</view>
					<view>
						<view>
							<image :src="peng"></image>
						</view>
						<view>朋友圈</view>
					</view>
				</view>
			</view>
		</view>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import Images from '@/static/mbcImg/my/Images.png';
	import Image from '@/static/mbcImg/my/Image.png';
	//看過 電話 聊天 點讚..
	import zan from '@/static/mbcImg/my/zan.png';
	import look from '@/static/mbcImg/my/look.png';
	import phone from '@/static/mbcImg/my/phone.png';
	import liu from '@/static/mbcImg/my/liu.png';
	import shou from '@/static/mbcImg/my/shou.png';
	import fen from '@/static/mbcImg/my/fen.png';
	import wa from '@/static/mbcImg/my/w-a.png';
	import wb from '@/static/mbcImg/my/w-b.png';
	import wc from '@/static/mbcImg/my/w-c.png';
	import wd from '@/static/mbcImg/my/w-d.png';
	//結束
	import yi from '@/static/mbcImg/my/yi.png';
	import add from '@/static/mbcImg/my/add.png';
	import shag from '@/static/mbcImg/my/shag.png';
	import xia from '@/static/mbcImg/my/xia.png';
	import wei from '@/static/mbcImg/my/wei.png';
	import peng from '@/static/mbcImg/my/peng.png';
	import bian from '@/static/mbcImg/my/bianji.png';
	import bian2 from '@/static/mbcImg/my/72209.png';
	import wan from '@/static/mbcImg/my/wanshang.png';
	import xias from '@/static/mbcImg/my/xiajia.png';
	import tui from '@/static/mbcImg/my/fuicon.png';
	import feng from '@/static/mbcImg/my/fengxiang.png';
	import feng2 from '@/static/mbcImg/my/fengxiang2.png';
	import shan from '@/static/mbcImg/my/shanchu.png';
	import shan2 from '@/static/mbcImg/my/44.png';
	import stopicon from '@/static/mbcImg/my/stopicon.png';
	import stop from '@/static/mbcImg/my/stop.png';
	import fabu from '@/static/mbcImg/my/fabu.png';
	import QRcode from './QRcode';
	import rQrCode from '@/components/common/RHX/rQrCode/rQrCode';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list:[],
				Images:Images,
				Image:Image,
				zan:zan,
				look:look,
				phone:phone,
				liu:liu,
				shou:shou,
				fen:fen,
				zi:'我是采购名称的标题二十个字限制阿萨德阿萨德',
				yi:yi,
				add:add,
				shag:shag,
				xia:xia,
				wei:wei,
				peng:peng,
				bian:bian,
				bian2:bian2,
				wan:wan,
				xias:xias,
				tui:tui,
				feng:feng,
				feng2:feng2,
				shan:shan,
				shan2:shan2,
				stopicon:stopicon,
				stop:stop,
				Mask:0,
				id:'',
				wa:wa,
				wb:wb,
				wc:wc,
				wd:wd,
				qrImgs:[],//二维码
				fabu:fabu,
			}
		},
		components:{
			quickBtn,
			navigation,
			QRcode,
			rQrCode,
		},
		onLoad(ops) {
			this.id=ops.id
			uni.setNavigationBarTitle({
				title: this.i18n.product11
			});
			this.details();
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 15) {
				return value.slice(0,15) + '...'
			  }
			  return value
			},
			ellipsiss (value) {
			  if (!value) return ''
			  if (value.length > 8) {
				return value.slice(0,8) + '...'
			  }
			  return value
			}
		},
		methods:{
			goToPurchaseDeitle () {
				console.log('去发布采购的详情页！');
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
					tempType: 1, // 采购类型
					orderType: 0, // 订单类型
					sourceTemp: 4, // 说明书来源
					aiListTemp: 0, // 是否展示ai
					purcId:  this.list.id, // 说明书id
					lookUserId: lookUserId, // 浏览者
					creatorId: this.list.userId, // 说明书创建者
					purcState: this.list.purcState ,// 说明书状态
					isPut: this.list.isPut
				};
				uni.navigateTo({
					url: '/modules/publishPurchase/publishPurchase?urlParams=' + this.urlCrypto(urlParams, 0)
				});
			},
			fabuadd(e){//发布
				var that=this
				uni.showModal({
					title: '提示',
					content: '是否进行发布',
					confirmColor:' #02C2A2',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							if (uni.getStorageSync('landRegist')) {
								let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
								console.log(landRegistLG.user.id);
								// let params = {}; // 请求总数居时 参数为空
								uni.showLoading({ // 展示loading
									title: '加载中'
								});
								uni.request({
									url: that.api2 + '/rest-rp/purc/setPurcState?purcState=1&id=' + e, //接口地址。
									// data: params,
									method: 'GET',
									header: {
										Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
									},
									success: (response) => {
										uni.hideLoading();
										console.log(response.data);
										that.Purchas();
										that.PurchasB();
										that.PurchasC();
										that.PurchasD();
										that.PurchasE();
										that.PurchasF();
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
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			xiajia(e){//下架
				var _this=this;
				uni.showModal({
					title: '提示',
					content: '是否下架您的采购',
					confirmColor:' #02C2A2',
					confirmText:'确认',
					cancelText:'取消',
					success: function (res) {
						if (res.confirm) {
							if (uni.getStorageSync('landRegist')) {
								let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
								console.log(landRegistLG.user.id);
								// let params = {}; // 请求总数居时 参数为空
								uni.showLoading({ // 展示loading
									title: '加载中'
								});
								uni.request({
									url: _this.api2 + '/rest-rp/purc/setPurcState?purcState=4&id=' + e, //接口地址。
									// data: params,
									method: 'GET',
									header: {
										Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
									},
									success: (response) => {
										uni.hideLoading();
										console.log(response.data);
										_this.Purchas();
										_this.PurchasB();
										_this.PurchasC();
										_this.PurchasD();
										_this.PurchasE();
										_this.PurchasF();
										_this.details();
										// uni.navigateBack({});
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
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			okadd(e){//完成
				var _this=this;
				uni.showModal({
					title: '提示',
					content: '是否完成您的采购',
					confirmColor:' #02C2A2',
					confirmText:'确认',
					cancelText:'取消',
					success: function (res) {
						if (res.confirm) {
							if (uni.getStorageSync('landRegist')) {
								let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
								console.log(landRegistLG.user.id);
								// let params = {}; // 请求总数居时 参数为空
								uni.showLoading({ // 展示loading
									title: '加载中'
								});
								uni.request({
									url: _this.api2 + '/rest-rp/purc/setPurcState?purcState=3&id=' + e, //接口地址。
									// data: params,
									method: 'GET',
									header: {
										Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
									},
									success: (response) => {
										uni.hideLoading();
										console.log(response.data);
										_this.Purchas();
										_this.PurchasB();
										_this.PurchasC();
										_this.PurchasD();
										_this.PurchasE();
										_this.PurchasF();
										_this.details();
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
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
			},
			stopadd(e){//停止
				var _this=this;
				uni.showModal({
					title: '提示',
					content: '是否停止您的采购',
					confirmColor:' #02C2A2',
					confirmText:'确认',
					cancelText:'取消',
					success: function (res) {
						if (res.confirm) {
							if (uni.getStorageSync('landRegist')) {
								let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
								console.log(landRegistLG.user.id);
								// let params = {}; // 请求总数居时 参数为空
								uni.showLoading({ // 展示loading
									title: '加载中'
								});
								uni.request({
									url: _this.api2 + '/rest-rp/purc/setPurcState?purcState=2&id=' + e, //接口地址。
									// data: params,
									method: 'GET',
									header: {
										Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
									},
									success: (response) => {
										uni.hideLoading();
										console.log(response.data);
										_this.Purchas();
										_this.PurchasB();
										_this.PurchasC();
										_this.PurchasD();
										_this.PurchasE();
										_this.PurchasF();
										// uni.navigateBack({});
										_this.details();
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
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
			},
			delet(e){//删除
				var _this=this;
				uni.showModal({
					title: '提示',
					content: '是否删除您的采购',
					confirmColor:' #02C2A2',
					confirmText:'确认',
					cancelText:'取消',
					success: function (res) {
						if (res.confirm) {
							if (uni.getStorageSync('landRegist')) {
								let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
								console.log(landRegistLG.user.id);
								// let params = {}; // 请求总数居时 参数为空
								uni.showLoading({ // 展示loading
									title: '加载中'
								});
								uni.request({
									url: _this.api2 + '/rest-rp/purc/del?ids=' + e, //接口地址。
									// data: params,
									method: 'GET',
									header: {
										Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
									},
									success: (response) => {
										uni.hideLoading();
										console.log(response.data);
										_this.Purchas();
										_this.PurchasB();
										_this.PurchasC();
										_this.PurchasD();
										_this.PurchasE();
										_this.PurchasF();
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
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
			},
			Purchas(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/purc/selectList?page=1&userId='+landRegistLG.user.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content.list
							this.$store.commit('setPurchaseA', this.list);
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
			PurchasB(){//待发布
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/purc/selectList?page=1&userId='+landRegistLG.user.id+'&purcState=0', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list1 = response.data.content.list
							this.$store.commit('setPurchaseB', this.list1);
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
			},PurchasC(){//采购中
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/purc/selectList?page=1&userId='+landRegistLG.user.id+'&purcState=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list2 = response.data.content.list
							this.$store.commit('setPurchaseC', this.list2);
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
			},PurchasD(){//已停止
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/purc/selectList?page=1&userId='+landRegistLG.user.id+'&purcState=2', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list3 = response.data.content.list
							this.$store.commit('setPurchaseD', this.list3);
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
			},PurchasE(){//已完成
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/purc/selectList?page=1&userId='+landRegistLG.user.id+'&purcState=3', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list4 = response.data.content.list
							this.$store.commit('setPurchaseE', this.list4);
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
			},PurchasF(){//已下架
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/purc/selectList?page=1&userId='+landRegistLG.user.id+'&purcState=4', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list5 = response.data.content.list
							this.$store.commit('setPurchaseF', this.list5);
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
			gotodataReport(){
				console.log('to数据看表')
				uni.navigateTo({
					url:'/modules/InstructionsPrice/Purchase/Purchase-details/dataReport/dataReport?id='+this.id
				})
			},
			child(){},
			fenxiang(){
				console.log('分享说明书')
				this.Mask = 1;
			},
			boss(){
				this.Mask = 0;
			},
			details(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/purc/selectInfo?id=' + this.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content
							this.qrImgs=response.data.content.qrImgs
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
		computed: {
			i18n () {
			  return this.$t('Howtoshow')  
			},
			...mapGetters(['GET_NEWS','GET_HOME', 'QUICKNAVCO'])
		},
	}
</script>

<style>
	.Purchase-details{
		width: 100%;
		min-height: 100%;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.qrShare-list{
		position: relative;
		width: 690upx;
		height: 720upx;
		margin: -10upx auto auto auto;
		background: #F9F9F9;
		/* padding: -10upx 0; */
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
	.myproduct-title{
		width: 67%;
		height: 100%;
		margin-left: 120upx;
		line-height: 90upx;
		float: left;
		text-align: center;
	}
	.Purchase-listA{
		width: 100%;
		min-height: 288upx;
		background: #FFFFFF;
		position: relative;
		margin-top: 20upx;
	}
	.wimage{
		width: 100upx;
		height: 100upx;
		right: 0;
		top: 0;
		position: absolute;
	}
	.Purchase-listA-zi{
		font-size: 32upx;
		color: #2E2E30;
		padding-left: 30upx;
		padding-top: 20upx;
	}
	.Purchase-listA-edit{
		width: 91%;
		height: 50upx;
		margin: 10upx auto;
	}
	.Purchase-listA-edit>span{
		font-size: 24upx;
		color: #9B9B9B;
		padding: 4upx 14upx 4upx 14upx;
		background: #F5F5F5;
		border-radius: 4upx;
		display: block;
		float: left;
		margin-left: 10upx;
	}
	.Purchase-listA-edit>span:nth-of-type(1){
		margin-left: 0;
	}
	.Purchase-listA-time{
		width: 91%;
		height: 30upx;
		margin:30upx auto;
		line-height: 30upx;
	}
	.Purchase-listA-time>view:nth-of-type(1){
		font-size: 24upx;
		color: #9B9B9B;
		float: left;
	}
	.Purchase-listA-time>view:nth-of-type(2){
		float: left;
		width: 270upx;
		height: 42upx;
		font-size: 24upx;
		color: #9B9B9B;
		margin-left: 60upx;
	}
	.Purchase-listA-time>view:nth-of-type(2)>image{
		width: 22upx;
		height: 22upx;
		display: block;
		float: left;
		margin-top: 6upx;
	}
	.Purchase-listA-time>view:nth-of-type(2)>span{
		display: block;
		float: left;
		margin-top: -5upx;
		margin-left: 10upx;
	}
	.Purchase-listA-time>view:nth-of-type(3){
		float: right;
		font-size: 24upx;
		color: #9B9B9B;
	}
	.Purchase-listA-time>view:nth-of-type(3)>image{
		width: 22upx;
		height: 22upx;
		display: block;
		float: left;
		margin-top: 6upx;
	}
	.Purchase-listA-time>view:nth-of-type(3)>span{
		display: block;
		float: left;
		margin-top: -5upx;
		margin-left: 10upx;
	}
	.Purchase-listA-time>view:nth-of-type(3)>span>span{
		color: #02C2A2;
	}
	.myproduct-list-edit{
		width: 91%;
		margin: -5upx auto;
		height: 60upx;
		border-top: 2upx solid #EFEFEF;
	}
	.one{
		margin-left: 8upx!important;
	}
	.product-book-BA{
		width: 13.5%;
		height: 26upx;
		margin-top: 20upx;
		line-height: 26upx;
		font-size: 24upx;
		color: #9B9B9B;
		border-right: 2upx solid #E2E2E2;
		float: left;
		margin-left: 22upx;
	}
	.right{
		border: 0;
	}
	.one{
		margin-left: 0;
	}
	.shou>image{
		width: 24upx!important;
		height: 24upx!important;
		margin-top: 0upx !important;
		
	}
	.product-book-BA>image{
		width: 24upx;
		height: 20upx;
		margin-top: 2upx;
		display: block;
		float: left;
		margin-left: 10upx;
	}
	.product-book-BA>span{
		margin-left: 24upx;
		display: block;
		float: left;
	}
	.product-book-con{
		width: 100%;
		height: 112upx;
		text-align: center;
		line-height: 112upx;
		font-size: 16px;
		color: #02C2A2;
		background: #FFFFFF;
		margin-top: 20upx;
		font-weight: bold;
	}
	.tishiyu{
		width: 100%;
		text-align: center;
		height: 100upx;
		font-size: 12px;
		color: #9B9B9B;
		line-height: 36upx;
		padding-top: 290upx;
	}
	
	.dibu{
		width: 100%;
		height: 162upx;
	}
	.QRcode-sub{
		width: 100%;
		height: 162upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content:center;
	}
	.QRcode-sub>view{
		width: 16%;
		height: 100%;
		text-align: center;
		margin-left: 20upx;
	}
	.QRcode-sub>view:nth-of-type(1){
		margin-left: 0upx!important;
	}
	.QRcode-sub>view>view:nth-child(1){
		width: 72upx;
		height: 72upx;
		border-radius: 50%;
		background: #F0FCFA;
		margin: 20upx auto auto auto;
	}
	.bei{
		background: #F5F5F5!important;
	}
	.QRcode-sub>view>view:nth-child(1)>image{
		width: 32upx;
		height: 32upx;
		margin-top: 18upx;
	}
	.QRcode-sub>view>view:nth-child(2){
		font-size: 24upx;
		color: #02C2A2;
		padding-top: 10upx;
	}
	.beizi{
		color:  #D2D2D2!important;
	}
	.QRcode-Mask{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		background: rgba(0,0,0,0.3);
	}
	.QRcode-Mask-con{
		width: 100%;
		height: 1000upx;
		background: #FFFFFF;
		position: absolute;
		bottom: 0;
	}
	.QRcode-Mask-con-header{
		width: 100%;
		height: 110upx;
		text-align: center;
		line-height: 110upx;
		font-size: 32upx;
		color: #2E2E30;
	}
	.QRcode-Mask-con-lun{
		width: 90%;
		height: 600upx;
		margin: 0 auto;
		background: #F9F9F9;
		overflow: hidden;
	}
	
	
	
	.QRcode-Mask-con-di{
		width: 50%;
		height: 150upx;
		margin: 80upx auto auto auto;
	}
	.QRcode-Mask-con-di>view{
		width: 50%;
		height: 100%;
		text-align: center;
		float: left;
	}
	.QRcode-Mask-con-di>view>view:nth-of-type(1){
		width: 80upx;
		height: 80upx;
		border: 2upx solid #E2E2E2;
		border-radius: 50%;
		margin: 0 auto;
	}
	.QRcode-Mask-con-di>view>view:nth-of-type(2){
		font-size: 24upx;
		color: #2E2E30;
		padding-top: 30upx;
	}
	.QRcode-Mask-con-di>view>view:nth-of-type(1)>image{
		width: 32upx;
		height: 32upx;
		text-align: center;
		padding-top: 26upx;
	}
	.swiper-box{
		height: 508upx;
		
	}
	.swiper-slide{
		width: 360upx;
		height: 508upx;
		/* margin-left: 30%; */
	}
	.swiper-slide>image{
		width: 100%;
		height: 100%;
	}
</style>
