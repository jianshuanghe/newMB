<template>
	<div class="templatePro-content">
		<!-- <div class="moNiWeb">
			<iframe src="http://so.iambuyer.com" id="mobsf" scrolling="no" frameborder="0" style="position:absolute;top:80px;left: 120px;"></iframe>
		</div> -->
		<div class="templatePro">
			<!-- 内容区 -->
			<moduleTemPro
			:isEditTemp='isEditTemp'
			:pageStatus='pageStatus'
			:statusTemp='statusTemp'
			:sourceTemp='sourceTemp'
			:routeParam='routeParam'
			:isMenu='isMenu'
			:moduleDateList='moduleDateList'
			:moduleTempList='moduleTempList'
			:moduleCustTempList='moduleCustTempList'
			:moduleAIDateList='moduleAIDateList'
			:setFixedShow='setFixedShow'
			@tap-SetFixedTemp='tapSetFixedTemp'
			@tap-ModuleTemPro='tapModuleTemPro'></moduleTemPro>
			<!-- 底部按钮区域 -->
			<moduleBtnPro
			:bottomLoca='bottomLoca'
			:isEditTemp='isEditTemp'
			:statusTemp='statusTemp'
			:sourceTemp='sourceTemp'
			:idTemp='Number(idTemp)'
			:routeParam='routeParam'
			:moduleTempList='moduleTempList'
			:businessTemList='businessTemList'
			:moduleDateList='moduleDateList'
			:setFixedShow='setFixedShow'
			:isNewsAShow='isNewsAShow'
			@tap-UpDataBusiness='tapUpDataBusiness'
			@tap-ModuleBtnPro='tapModuleBtnPro'></moduleBtnPro>
		</div>
		
		<!-- 快捷导航 -->
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</div>
</template>

<script>
	// import {isData}from '@/static/mbcJs/dataJson/putong.js';
	// import {isData}from '@/static/mbcJs/dataJson/dingzhi.js';
	// import {isData}from '@/static/mbcJs/dataJson/gongcheng.js';
	// import {isData}from '@/static/mbcJs/dataJson/huagong.js';
	// import {isData}from '@/static/mbcJs/dataJson/gangcai.js';
	// import {isData}from '@/static/mbcJs/dataJson/zixun.js';
	// import {isData}from '@/static/mbcJs/dataJson/shouhoufuwu.js';
	import {isData}from '@/static/mbcJs/dataJson/FAQ.js';
	import {moduleTemp}from '@/static/mbcJs/dataJson/moduleTemp.js';
	import moduleTemPro from './moduleTemPro/moduleTemPro';
	import moduleBtnPro from './moduleBtnPro/moduleBtnPro';
	import navigation from '@/components/mbbo/navigation/navigation.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		name: 'editQualificatCert',
		components: {
			moduleTemPro,
			moduleBtnPro,
			navigation,
		},
		data() {
			return {
				bottomLoca: '13vw', // 上层按钮的bottom值
				isNewsAShow: true,
				isMenu: null, // 是否展示中间横向导航
				pageStatus: true, // 页面加载时展示
				setFixedShow: true,
				isEditTemp: false, // 当前说明书是否可编辑, 默认可编辑，先去判断当前发布者id和说明书id一致性，再看发布状态
				idTemp: null, // 模板id， 45：普通模板，65：定制模板，68：工程机械模板， 69：化工模板， 71：资讯模板， 72：....
				aiListTemp: 1, // 是否展示AI列表，1展示， 0不展示
				statusTemp: 1, // 当前模板的状态；0代表：编辑，1代表：预览，2代表，3代表：.....
				sourceTemp: 0, // 从哪里进来的：0代表：模板列表，1代表：AI推送列表，2代表:发现列表，3代表：流量承载页， 4代表：我的说明书列表， 5代表.....
				routeParam: null, // 路由参数；
				userStopTime: 0, // 记录用户再页面停留时间
				businessTemList: null, // 商机信息数据------真实接口数据
				moduleDateList: null, // 当前模板的数据---------此数据是真实接口返回的数据
				moduleTempList: null, // 当前添加模块的数据------此数据是真实接口返回的数据
				moduleCustTempList: null, // 特殊模板下拉去添加模块的数据----此数据真实接口返回
				moduleAIDateList: null, // AI列表数据
			};
		},
		onLoad (optionParams) {
			// option说明：
			// id: 说明书id,
			// instrucCustType // 模板类型 1定制， 2普通、。。。3，咨询
			// isMenu: 是否存在中间的横向导航
			// isFlow: 是否来自流量平台 0否， 1是
			// aiListTemp： 是否展示AI列表，1展示， 0不展示
			// orderType: 0定制订单 1标品订单
			// lookUserId: 用户id 选填 谁在看这个说明书 用于用户交互行为
			// sourceTemp： 从哪里进来的：0代表：模板列表，1代表：AI推送列表，2代表:发现列表，3代表：流量承载页， 4代表：我的说明书列表， 5代表公共模式,  6代表采购列表
			// sourceScan: 1, // 1扫码进来，0或者不填写走原有逻辑
			// instrucId: 说明书id
			// lookUserId: 查看者id
			// creatorId: 说明书创建者
			// instrucState： 说明书状态
			let option = this.urlCrypto(optionParams.urlParams, 1);
			// this.resetURL('/modules/createBusiness/templatePro/templatePro', '/modules/createBusiness/templatePro/templatePro?urlParams=' + optionParams.urlParams);
			this.routeParam = option; // 链接上所有参数；
			console.log(this.routeParam, '---------------------------------------this.routeParam----------------')
			this.isMenu = option.isMenu; // 是否展示中间横向导航 
			this.sourceTemp = Number(option.sourceTemp); // 来源
			this.idTemp = option.id; // 模板id， 目前以此来判断底部按钮如何展示，后期底部按钮实现模板化，这个就不需要了
			if (this.sourceTemp === 0) { // 来源模板列表，此处获取模板详情
				this.getBusinessList(this.routeParam.creatorId); // 拉去商家信息数据
				this.getTempList(option.id); // 根据id拉去模板信息
				if (Number(option.instrucCustType) === 1) { // 定制模板下需要拉去基本信息用户可添加的模块
					this.getCustModuleTempList(option.id); // 根据id 拉去用户可添加的模块信息
				};
				this.shareEachPage(); // 分享
			} else if (this.sourceTemp === 1) { // 来源我的说明书列表，此处获取说明书详情
				this.getBusinessList(this.routeParam.creatorId); // 拉去商家信息数据
				this.getInstructionsList(this.routeParam);
			} else if (this.sourceTemp === 2) { // 来源平台，此处获取说明书详情
				this.getBusinessList(this.routeParam.creatorId); // 拉去商家信息数据
				this.getInstructionsList(this.routeParam);
				if (this.routeParam.sourceScan === 1) { // 是否来源扫码
					if (uni.getStorageSync('landRegist')) {    
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						// console.log(landRegistLG.user.id);
						this.routeParam.lookUserId = landRegistLG.user.id;
					} else {
						this.routeParam.lookUserId = uni.getStorageSync('UUID');
					};
				};
			} else if (this.sourceTemp === 4) { // 来源我的说明书列表，此处获取说明书详情
				this.getBusinessList(this.routeParam.creatorId); // 拉去商家信息数据
				this.getInstructionsList(this.routeParam);
				this.getTempList(option.id); // 根据id拉去模板信息
				if (Number(option.instrucCustType) === 1) { // 定制模板下需要拉去基本信息用户可添加的模块
					this.getCustModuleTempList(option.id); // 根据id 拉去用户可添加的模块信息
				};
			} else if (this.sourceTemp === 5) { // 来源公共，此处获取说明书详情
				this.getBusinessList(this.routeParam.creatorId); // 拉去商家信息数据
				this.getInstructionsList(this.routeParam);
			}
		},
		computed: {
			i18n() {
				return this.$t('qualificatCert');
			},
			...mapGetters(['GET_PUBLISH', 'QUICKNAVCO'])
		},
		watch: {
			GET_PUBLISH: {
				handler(a, b) {
				},
				deep: true
			}
		},
		mounted() {
			setInterval(() => {
			  this.userStopTime++;
			}, 1000);
			// #ifdef H5
			//这里监听键盘收起，然后滚动顶部
			document.body.addEventListener('focusout', () => { 
			  //软键盘收起的事件处理 
			  let ua = navigator.userAgent.toLowerCase();
			  if (ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0) { 
			    //键盘收齐页面空白问题 
			    document.body.scrollTop = document.body.scrollHeight; 
			  }
			})
			// #endif
			console.log(isData, 'isData');
		},
		beforeDestroy () {
			// console.log('页面销毁之前缓存数据更新-----------setImgList、setCaiGouList');
			if (this.routeParam.sourceTemp === 2 || this.routeParam.sourceTemp === 3) {
				// 先去判断是否来自流量承载页，或者是平台
				let parmas = {
					userId: this.routeParam.lookUserId,
					id: this.routeParam.instrucId,
					type: 0,
					stopTime: this.userStopTime
				};
				this.platformAccount(this.routeParam.isFlow, 0, parmas, this.routeParam);
			}
		},
		methods: {
			...mapMutations({}),
			// 拉去模板详情
			getTempList(id){
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/temp/' + id, //接口地址。
					data: params,
					method: 'GET',
					header: {
						Authorization: '' //将token放到请求头中
					},
					success: response => {
						// console.log(response.data, '---------------response.data--------------')
						if (response.data.ret === '200') {
							// this.moduleDateList = response.data;
							this.moduleDateList = isData; // 测试
							if (Number(this.routeParam.instrucCustType)=== 1) {
								this.getModuleTempList(id); // 根据id 拉去用户可添加的模块信息
								this.getCustModuleTempList(id); 
							} else {
								this.getModuleTempList(id); // 根据id 拉去用户可添加的模块信息
							}
							let _this = this;
							setTimeout(() => {
								_this.pageStatus = false,
								uni.hideLoading(); // 隐藏 loading
							}, 150);
						} else if (response.data.ret === '202') {
							uni.removeStorageSync('landRegist');
							uni.removeStorageSync('clickItems');
							this.$store.commit('setHome', 1);
							this.$store.commit('setLandRegist', 0);
							uni.showToast({
								title: '登录已过期，请重新登录',
								icon: 'none',
								duration: 1000
							});
							if (!uni.getStorageSync('landRegist')) {
								this.landRegistra(); // 判断登录状态
							}
						} else if (response.data.ret === '400') {
							uni.showToast({
								title: response.data.msg,
								icon: 'none',
								duration: 1000
							});
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
						// console.log(error, '网络繁忙，请稍后');
					}
				});
			},
			// 在编辑状态拉去当前模板可添加的模块-----不针对特殊模板（例如定制模板有定制信息部分，这里需要再次去拉去相关模块）
			getModuleTempList(id){
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/temp/selectModulesByTempId?tempId=' + id, //接口地址。
					data: params,
					method: 'GET',
					header: {
						Authorization: '' //将token放到请求头中
					},
					success: response => {
						// console.log(response.data, '---------------response.data--------------')
						if (response.data.ret === '200') {
							uni.hideLoading(); // 隐藏 loading
							// this.moduleTempList = response.data;
							this.moduleTempList = moduleTemp; // 测试使用
							this.loadEnd = true; // 加载完成
						} else if (response.data.ret === '202') {
							uni.removeStorageSync('landRegist');
							uni.removeStorageSync('clickItems');
							this.$store.commit('setHome', 1);
							this.$store.commit('setLandRegist', 0);
							uni.showToast({
								title: '登录已过期，请重新登录',
								icon: 'none',
								duration: 1000
							});
							if (!uni.getStorageSync('landRegist')) {
								this.landRegistra(); // 判断登录状态
							}
						} else if (response.data.ret === '400') {
							uni.showToast({
								title: response.data.msg,
								icon: 'none',
								duration: 1000
							});
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
						// console.log(error, '网络繁忙，请稍后');
					}
				});
			},
			getCustModuleTempList(id){
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/temp/selectModulesByTempId?custType=1&tempId=' + id, //接口地址。
					data: params,
					method: 'GET',
					header: {
						Authorization: '' //将token放到请求头中
					},
					success: response => {
						// console.log(response.data, '---------------response.data--------------')
						if (response.data.ret === '200') {
							uni.hideLoading(); // 隐藏 loading
							this.moduleCustTempList = response.data;
							this.loadEnd = true; // 加载完成
						} else if (response.data.ret === '202') {
							uni.removeStorageSync('landRegist');
							uni.removeStorageSync('clickItems');
							this.$store.commit('setHome', 1);
							this.$store.commit('setLandRegist', 0);
							uni.showToast({
								title: '登录已过期，请重新登录',
								icon: 'none',
								duration: 1000
							});
							if (!uni.getStorageSync('landRegist')) {
								this.landRegistra(); // 判断登录状态
							}
						} else if (response.data.ret === '400') {
							uni.showToast({
								title: response.data.msg,
								icon: 'none',
								duration: 1000
							});
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
						// console.log(error, '网络繁忙，请稍后');
					}
				});
			},
			// 拉去说明书详情
			getInstructionsList(option){
				// console.log(option, '链接上的参数')
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/instruc/' + option.instrucId + '?' + "lookUserId=" + option.lookUserId, //接口地址。
					data: params,
					method: 'GET',
					header: {
						Authorization: '' //将token放到请求头中
					},
					success: response => {
						// console.log(response.data, '---------------response.data--------------')
						if (response.data.ret === '200') {
							this.moduleDateList = response.data;
							if (this.routeParam.aiListTemp === 1) {
								// 拉去AI列表
								this.getAIList();
							};
							uni.setNavigationBarTitle({
								title: this.moduleDateList.content.instrucTitle
							});
							// 分享
							if (this.moduleDateList.content.instrucState !== '1') {
								this.shareEachPage(null, null, null, null, null); // 分享
							} else {
								let params = { // 分享参数
									shareTitle: this.moduleDateList.content.instrucTitle, // 分享标题
									shareIntro: this.moduleDateList.content.instrucIntro || '陌拜一下，每天都有新商机', // 分享文字介绍
									shareImg: this.moduleDateList.content.bannerImg, // 分享图片
									shareLink: this.origin + '/#/modules/createBusiness/templatePro/templatePro?urlParams=' + encodeURIComponent(this.urlCrypto(this.routeParam, 0))// 分享链接
								};
								let paramsNeed = { // 计数参数
									userId: this.routeParam.lookUserId,
									id: this.routeParam.instrucId,
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
						}  else if (response.data.ret === '202') {
							uni.removeStorageSync('landRegist');
							uni.removeStorageSync('clickItems');
							this.$store.commit('setHome', 1);
							this.$store.commit('setLandRegist', 0);
							uni.showToast({
								title: '登录已过期，请重新登录',
								icon: 'none',
								duration: 1000
							});
							if (!uni.getStorageSync('landRegist')) {
								this.landRegistra(); // 判断登录状态
							}
						} else if (response.data.ret === '400') {
							uni.showToast({
								title: response.data.msg,
								icon: 'none',
								duration: 1000
							});
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
						// console.log(error, '网络繁忙，请稍后');
					}
				});
			},
			// 获取AI列表数据
			getAIList () {
				let lookUserId = null;
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					// console.log(landRegistLG.user.id);
					lookUserId = landRegistLG.user.id;
				} else {
					lookUserId = uni.getStorageSync('UUID');
				};
				if (lookUserId) {
					let params = {
						instId: this.moduleDateList.content.instrucId,
						cateId: this.moduleDateList.content.instrucCategory,
						lookUserId: lookUserId
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instPush/pushByInstId', //接口地址。
						data: params,
						method: 'GET',
						header: {
						},
						success: response => {
							if (response.data.ret === '200') {
								this.moduleAIDateList = response.data;
							} else if (response.data.ret === '202') {
							 	uni.removeStorageSync('landRegist');
							 	uni.removeStorageSync('clickItems');
							 	this.$store.commit('setHome', 1);
							 	this.$store.commit('setLandRegist', 0);
								uni.showToast({
									title: '登录已过期，请重新登录',
									icon: 'none',
									duration: 1000
								});
								if (!uni.getStorageSync('landRegist')) {
									this.landRegistra(); // 判断登录状态
								}
							} else if (response.data.ret === '400') {
								uni.showToast({
									title: response.data.msg,
									icon: 'none',
									duration: 1000
								});
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
							// console.log(error, '网络繁忙，请稍后');
						}
					});
				}
			},
			tapUpDataBusiness(e) {
				if (e === true) {
					this.getBusinessList(this.routeParam.creatorId)
				}
			},
			// 拉去商家信息详情
			getBusinessList(e){
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/instruc/userInfo?userId=' + e, //接口地址。
					data: params,
					method: 'GET',
					header: {
						Authorization: '' //将token放到请求头中
					},
					success: response => {
						// console.log(response.data, '---------------response.data--------------')
						if (response.data.ret === '200') {
							uni.hideLoading(); // 隐藏 loading
							this.businessTemList = response.data;
							this.loadEnd = true; // 加载完成
						} else if (response.data.ret === '202') {
							uni.removeStorageSync('landRegist');
							uni.removeStorageSync('clickItems');
							this.$store.commit('setHome', 1);
							this.$store.commit('setLandRegist', 0);
							uni.showToast({
								title: '登录已过期，请重新登录',
								icon: 'none',
								duration: 1000
							});
							if (!uni.getStorageSync('landRegist')) {
								this.landRegistra(); // 判断登录状态
							}
						} else if (response.data.ret === '400') {
							uni.showToast({
								title: response.data.msg,
								icon: 'none',
								duration: 1000
							});
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
						// console.log(error, '网络繁忙，请稍后');
					}
				});
			},
			// 用户操作模板之后返回的新数据
			tapModuleTemPro (e) {
				console.log(e, '用户操作模板之后返回的新数据');
				this.moduleDateList = e;
			},
			tapSetFixedTemp (e) {
				// console.log(e, '哈哈哈哈，不好弄呀！')
				this.setFixedShow = e.setFixedShow; // 处理fixed定位从父原则遮挡问题
				if(this.setFixedShow === true) {
					this.bottomLoca = '13vw';
					this.isNewsAShow = true;
				} else {
					this.bottomLoca = '0px';
					this.isNewsAShow = false;
				}
			},
			// 用户操作按钮之后返回的新数据
			tapModuleBtnPro (e) {
				// console.log(e, '用户操作按钮之后返回的新数据');
				this.setFixedShow = e.setFixedShow; // 处理fixed定位从父原则遮挡问题
				if(this.setFixedShow === true) {
					this.bottomLoca = '13vw';
				} else {
					this.bottomLoca = '0px'
				}
				this.statusTemp = e.statusTemp; // 当前模板的状态；0代表：编辑，1代表：预览，2代表，3代表：.....
				this.sourceTemp = e.sourceTemp; // 从哪里进来的：0代表：模板列表，1代表：，2代表，3代表：.....
				// this.moduleDateList = e.moduleDateList; // 当前模板的数据---------此数据是真实接口返回的数据
			},
		}
	};
</script>

<style>
	.templatePro-content{
		position: relative;
		width: 100%;
	}
	.templatePro{
		position: relative;
		width: 100%;
	}
</style>
