<template>
	<div class="selectTemplate-content">
		<!-- 内容框 -->
		<contontEdit 
		v-if='!GET_PUBLISH.publishPurchase.previceCaiGou'
		:routeParam='routeParam'
		:businessTemList="businessTemList"
		:caiGouDetileData='caiGouDetileData'
		></contontEdit>
		<!-- 预览 -->
		<contontPreview  
		v-if='GET_PUBLISH.publishPurchase.previceCaiGou'
		:routeParam='routeParam'
		:businessTemList='businessTemList'
		:caiGouDetileData='caiGouDetileData'
		></contontPreview>
		<!-- 快捷导航 -->
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</div>
</template>

<script>
	
	import contontEdit from './selectTemplate/contontEdit.vue';
	import contontPreview from './selectTemplate/contontPreview.vue';
	import navigation from '@/components/mbbo/navigation/navigation.vue';
	import date from '@/static/mbcJs/dateTime.js';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		components: {
			navigation,
			contontEdit,
			contontPreview
		},
		data() {
			return {
				loadEnd: false, // 判断所有接口是否加载完成
				routeParam: null, // 路由参数；
				businessTemList: null,
				caiGouDetileData: null,
				listData: {
					serverUrl: "https://img01.iambuyer.com/imgup/upLoad/fileUpload",
					imageData: []
				},
				caiGouList: {
					paraList: [
					],
					requList: [
					],
					imgList: [],
					userId: 760,
					purcTitle: '',
					purcSpec: '',
					purcCount: 1,
					purcUnit: '',
					purcPcode: '',
					purcCcode: '',
					purcCcodeStr: '', // 省市区页面展示
					purcContent: '',
					purcDefault: '0', // 不是默认模板
					purcInvo: '1', // 默认含税
					purcFrei: '1', // 默认含运费
					purcEndTime: '',
					purcReceTime: '0-0-0',
					purcState: '',
					purcType: '0' // 0简单采购 1参数采购
				} // 采购数据
			};
		},
		onLoad(optionParams) {
			this.$store.commit('setPreviceCaiGou', false); // 更新setPreviceCaiGou
			this.$store.commit('setImgList', this.listData); // 更新ssetImgList
			this.$store.commit('setCaiGouList', this.caiGouList); // 跟新采购列表数据
			// option说明：
			// isMenu: 是否存在中间的横向导航
			// isFlow: 是否来自流量平台 0否， 1是
			// aiListTemp： 是否展示AI列表，1展示， 0不展示
			// orderType: 0定制订单 1标品订单
			// lookUserId: 用户id 选填 谁在看这个说明书 用于用户交互行为
			// sourceTemp： 从哪里进来的：0代表：模板列表，1代表：AI推送列表，2代表:发现列表，3代表：流量承载页， 4代表：我的说明书列表， 5代表.....
			// instrucId: 说明书id
			// purcId: 查看者id
			// creatorId: 说明书创建者
			// purcState： 说明书状态
			console.log('加载发布采购');
			let option = this.urlCrypto(optionParams.urlParams, 1);
			console.log(option, '---------------加载发布采购参数-------------')
			this.routeParam = option;
			if (option.sourceTemp === 0) {
				console.log('来源模板！');
				this.caiGouList = this.GET_PUBLISH.publishPurchase.caiGouList;
				this.caiGouList.purcEndTime = this.getDate(3, 'later'); // 报价截至时间，默认三天后又截至
				this.getCaiGouTemplate();
				this.getBusinessList();
				this.shareEachPage(); // 分享
			} else if (option.sourceTemp === 4) {
				this.getPurchaseList(option);
			} else if (option.sourceTemp === 2) {
				this.getPurchaseList(option);
			}
		},
		computed: {
			...mapGetters(['GET_PUBLISH', 'QUICKNAVCO'])
		},
		watch: {
			GET_PUBLISH: {
				handler(a, b) {
					this.caiGouList = a.publishPurchase.caiGouList;
				},
				deep: true
			}
		},
		created () {
			// this.shareEachPage(); // 分享
		},
		mounted () {
		},
		beforeDestroy () {
			console.log('页面销毁之前缓存数据更新-----------setImgList、setCaiGouList');
			if (this.routeParam.sourceTemp === 2 || this.routeParam.sourceTemp === 3) {
				// 先去判断是否来自流量承载页，或者是平台
				// let parmas = {
				// 	userId: this.routeParam.lookUserId,
				// 	id: this.routeParam.purcId,
				// 	type: 0,
				// 	stopTime: this.userStopTime
				// };
				// this.platformAccount(this.routeParam.isFlow, 0, parmas, this.routeParam);
				this.$store.commit('setPreviceCaiGou', false); // 更新setPreviceCaiGou
			}
		},
		methods: {
			...mapMutations({
				setTempletType: 'setTempletType',
				setCaiGouList: 'setCaiGouList'
			}),
			// 拉去商家信息详情
			getBusinessList(e){
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				let UserId = null;
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist'));
					UserId = landRegistLG.user.id;
				}
				if (e && e !== undefined) {
					UserId = e;
				}
				uni.request({
					url: this.api2 + '/rest-rp/instruc/userInfo?userId=' + UserId, //接口地址。
					data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' //将token放到请求头中
					},
					success: response => {
						console.log(response.data, '---------------response.data--------------')
						if (response.data.ret === '200') {
							uni.hideLoading(); // 隐藏 loading
							this.businessTemList = response.data;
							this.loadEnd = true; // 加载完成
						} else {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络开小差了，请稍后重试',
								icon: 'none',
								duration: 1000
							});
						}
					},
					fail: error => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						console.log(error, '网络繁忙，请稍后');
					}
				});
			},
			getPurchaseList(option) {
				console.log('获取采购信息数据！');
				console.log(option, '链接上的参数');
				this.$store.commit('setPreviceCaiGou', true); // 更新setPreviceCaiGou
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/purc/selectInfo?id=' + option.purcId + "&lookUserId=" + option.lookUserId, //接口地址。
					data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' //将token放到请求头中
					},
					success: response => {
						console.log(response.data, '---------------response.data--------------')
						if (response.data.ret === '200') {
							this.caiGouDetileData = response.data.content;
							uni.setNavigationBarTitle({
								title: this.caiGouDetileData.purcTitle
							});
							let content = response.data.content;
							this.caiGouList.purcType = content.purcType;
							this.caiGouList.paraList = content.paraList;
							this.caiGouList.requList = content.requList;
							if (this.caiGouList.purcType === '0') { // 设置简单模板
								this.$store.commit('setTempletType', 0);
								uni.setStorageSync('purcType', 0);
								this.caiGouList.purcDefault = '0'
							} else if (this.caiGouList.purcType === '1') { // 设置普通模板
								this.$store.commit('setTempletType', 1);
								uni.setStorageSync('purcType', 1);
								this.caiGouList.purcDefault = '1'
							};
							this.caiGouList.id = content.id;
							this.caiGouList.purcEndTime = date.dateTime('-', content.purcEndTime);
							this.caiGouList.day = content.day; // 倒计时天数
							this.caiGouList.hour = content.hour; //倒计时小时
							this.caiGouList.minute =content.minute; // 倒计时分钟
							this.caiGouList.purcCcodeStr = content.purcCcodeStr;
							this.caiGouList.purcTitle = content.purcTitle;
							this.caiGouList.purcContent = content.purcContent;
							if (content.purcReceTime === 0) {
								this.caiGouList.purcReceTime = ''
							} else {
								this.caiGouList.purcReceTime = date.dateTime('-', content.purcReceTime);
							}
							let listData = {
								serverUrl: "https://img01.iambuyer.com/imgup/upLoad/fileUpload",
								imageData: []
							};
							content.imgList.map((items, index)=>{
								if (items) {
									let itemsImage={
										imgUrl: items
									};
									listData.imageData.push(itemsImage);
								}
							});
							console.log(listData, '附件数据');
							this.$store.commit('setImgList', listData); // 更新ssetImgList
							this.caiGouList.imgList = content.imgList;
							console.log(this.caiGouList, '------------this.caiGouList-------------')
							this.$store.commit('setCaiGouList', this.caiGouList); // 跟新采购列表数据
							this.loadEnd = true; // 加载完成
							// 分享
							if (this.routeParam.purcState !== '1') {
								this.shareEachPage(null, null, null, null, null); // 分享
							} else {
								let Intro = `采购者:【${this.caiGouDetileData.createMan}】`;
								let params = { // 分享参数
									shareTitle: this.caiGouDetileData.purcTitle, // 分享标题
									shareIntro: Intro, // 分享文字介绍
									shareImg: this.caiGouDetileData.imgList.length > 0 ? this.caiGouDetileData.imgList[0] : 'https://style.iambuyer.com/img/shareimg.png', // 分享图片
									shareLink: this.origin + '/#/modules/publishPurchase/publishPurchase?urlParams=' + this.urlCrypto(this.routeParam, 0)// 分享链接
								};
								let paramsNeed = { // 计数参数
									userId: this.routeParam.lookUserId,
									id: this.routeParam.purcId,
									type: 1
								};
								let isFlow = this.routeParam.isFlow;
								this.shareEachPage(params, 1, paramsNeed, isFlow, this.routeParam); // 分享
							}
							let _this = this;
							setTimeout(() => {
								_this.pageStatus = false,
								uni.hideLoading(); // 隐藏 loading
							}, 150);
							this.getBusinessList(content.userId);
						} else {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络开小差了，请稍后重试',
								icon: 'none',
								duration: 1000
							});
						}
					},
					fail: error => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						console.log(error, '网络繁忙，请稍后');
					}
				});
			},
			clickBusinessPutIn() {
				this.$store.commit('setTempletType', 0);
				console.log('触发商机投放组件按钮');
			},
			getCaiGouTemplate() {
				console.log('记载用户默认采购模板');
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {};
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/purc/getDefault?userId=' + landRegistLG.user.id, //接口地址。
						data: params,
						method: 'GET',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								let content = response.data.content;
								this.caiGouList.purcType = content.purcType;
								this.caiGouList.paraList = content.paraList;
								this.caiGouList.requList = content.requList;
								if (this.caiGouList.purcType === '0') { // 设置简单模板
									this.$store.commit('setTempletType', 0);
								} else if (this.caiGouList.purcType === '1') { // 设置普通模板
									this.$store.commit('setTempletType', 1);
								};
								this.$store.commit('setCaiGouList', this.caiGouList); // 跟新采购列表数据
								this.loadEnd = true; // 加载完成
							} else {
								uni.hideLoading(); // 隐藏 loading
								uni.showToast({
									title: '网络开小差了，请稍后重试',
									icon: 'none',
									duration: 1000
								});
							}
						},
						fail: error => {
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
</style>
