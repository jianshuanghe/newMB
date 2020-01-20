<template>
	<!-- 说明书详情 完善说明书 -->
	<view class="QRcodelist-edit">
		<view class="product-book-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">分享二维码(4/4)</div>
			<div class="skipBtn" @tap='clickSkipBtn' v-if='false'>跳过</div>
		</view>
		<div class="finishShare-content">
			<div class="shareBox" v-if="dataLists.purcState === '1'">
				<div class="title">分享链接</div>
				<div class="qrShare-list">
					<rQrCode 
					:dataList="dataLists.qrList" 
					:longTapSave='true'
					:previewImage='true'
					:isSaveBtn='true'
					nextMargin='118px'
					marginLeft='38%'
					@tap-RQrCode='tapRQrCode'
					></rQrCode>
				</div>
				<div class="linkShare">
					<rClipBoard
					:clipBoardTitle="'【' + dataLists.purcTitle + '】'"
					:clipBoardLink='dataLists.purcUrl'
					@tap-RClicpBoard='tapRClicpBoard'
					></rClipBoard>
				</div>
			</div>
			<div class="tempIntro">
				<div class="introTitle">其他信息</div>
				<div class="introBox">商品名称 {{dataLists.purcTitle}}</div>
				<div class="introBox">收货城市 {{dataLists.addrStr}}</div>
				<div class="introBox">报价截止 {{dataLists.purcEndTime}}</div>
			</div>
		</div>
		<div class="finishBtn-box">
			<div 
			class="btnItems left" 
			v-for="(items, index) in btnList" 
			:key="index">
				<div class="btnText" :style='items.style' @tap='btnItems(items)'>{{items.name}}</div>
			</div>
			<div class="clear"></div>
		</div>
		<!-- 快捷导航 -->
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
import navigation from '@/components/mbbo/navigation/navigation.vue';
import rQrCode from '@/components/common/RHX/rQrCode/rQrCode';
import rClipBoard from '@/components/common/RHX/rClipBoard/rClipBoard';
import { mapMutations, mapGetters } from 'vuex';
export default {
	data() {
		return {
			list: null,
			tapIndex: 0,
			dataLists:null, // 链接上的参数
			btnList:[
				{
					type: 0,
					tempType: 0,
					name: '我的采购',
					style: {}
				},
				{
					type: 1,
					tempType: 0,
					name: '复制此采购',
					style: {}
				},
				{
					type: 2,
					tempType: 0,
					name: '创建新采购',
					style: {
						backgroundImage: 'linear-gradient(134deg, #15D49F 0%, #57D6CF 100%)',
						color:  '#FFFFFF'
					}
				}
			],
			templetType: 0, // 采购摸吧类型 0代表简单模板，1代表普通模板
			moreSet: false, // 运费及更多设置 默认不显示
			previceCaiGou: false, // 判断预览状态， 默认是编辑状态
			imageData: {},
			caiGouList:{ // 采购列表数据
				paraList: [
				],
				requList: [
				],
				imgList: [],
				userId: null,
				purcTitle: '',
				purcSpec: '',
				purcCount: 0,
				purcUnit: '',
				purcPcode: '',
				purcCcode: '',
				purcCcodeStr: '', // 省市区页面展示
				purcContent: '',
				purcDefault: '0', // 不是默认模板
				purcInvo: '1', // 默认含税
				purcFrei: '1', // 默认含运费
				purcEndTime: '',
				purcReceTime: '',
				purcState: '',
				purcType: '0' // 0简单采购 1参数采购
			}
		};
	},
	components: {
		quickBtn,
		navigation,
		rQrCode,
		rClipBoard
	},
	computed: {
		...mapGetters(['GET_PUBLISH', 'QUICKNAVCO'])
	},
	onLoad(option) {
		this.dataLists = this.urlCrypto(option.urlParams, 1);
		console.log(this.dataLists, '----------------------------------------------------')
	},
	beforeDestroy () {
		this.$store.commit('setTempletType', 1);
		this.$store.commit('setPreviceCaiGou', false); // 更新setPreviceCaiGou
		this.$store.commit('setMoreSet', false); // 更新setMoreSet
		console.log('页面销毁之前缓存数据更新-----------setImgList、setCaiGouList');
		this.$store.commit('setCaiGouList', this.caiGouList); // 更新setCaiGouList
	},
	created() {
		this.Statistics();
	},
	methods: {
		tapRQrCode (e) {
			console.log(e, '触发二维码组件');
		},
		tapRClicpBoard(e) {
			console.log(e, '剪切板');
		},
		Statistics(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/putIn/760', //接口地址。
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						console.log(response.data);
						this.list = response.data.content;
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
		goToPutInBusiness() {
			console.log('to投放商机');
			if (this.list.rpCompanyAuth == 0) {
				uni.showModal({
					title: '提示',
					content: '您的公司还未认证，无法进行广告投放，快去提交公司认证信息吧～',
					confirmColor: ' #02C2A2',
					confirmText: '去认证',
					cancelText: '暂不认证',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			} else {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						page: String(1),
						userId: 760
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/putIn/selectInstList', //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							this.putInBusinessData = response.data.content.list;
							// this.list = response.data.content
							this.$store.commit('setputInBusinessData', this.putInBusinessData); // 更新vuex
							if (response.data.ret == 200) {
								uni.navigateTo({
									url: '/modules/aLittle/putInBusiness/putInBusiness'
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
		},
		btnItems (e) {
			console.log(e, '按钮');
			if (e.type === 0) {
				console.log('我的采购');
				uni.navigateTo({
					url: '/modules/InstructionsPrice/Purchase/Purchase'
				});
			} else if (e.type === 1) {
				console.log('复制此采购');
				uni.showToast({
					title: '此功能暂未开发，敬请期待！',
					icon: 'none',
					duration: 1000
				});
				// uni.navigateTo({
				// 	url: '/modules/publishPurchase/publishPurchase'
				// });
			} else if (e.type === 2) {
				console.log('创建新采购');
				this.$store.commit('setCaiGouList', {}); // 跟新采购列表数据
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				}
				if (uni.getStorageSync('landRegist')) {
					let lookUserId = null;
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						lookUserId = landRegistLG.user.id;
					}
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
			}
		}
	},
};
</script>

<style>
	.finishBtn-box{
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 100upx;
		background: rgba(255,255,255,1);
		box-shadow: 0 -1px 0 0 #F5F5F5;
	}
	.btnItems{
		position: relative;
		width: 33.33333%;
	}
	.btnText{
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #2E2E30;
		letter-spacing: 0;
		text-align: center;
		line-height: 100upx;
	}
	.finishShare-content{
		position: relative;
		padding: 100upx 0;
		background: #fff;
		margin-bottom: 10vh;
	}
	.title{
		font-family: PingFangSC-Medium;
		font-size: 32upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 40upx;
		margin-top: 40upx;
		padding: 40upx;
	}
	.qrShare-list{
		position: relative;
		width: 690upx;
		margin: auto;
		background: #F9F9F9;
		padding: 40upx 0;
	}
	.linkShare{
		position: relative;
		width: 690upx;
		margin: auto;
		background: #F9F9F9;
		margin-top: 40upx;
		padding: 10upx;
	}
	.tempIntro{
		position: relative;
		width: 690upx;
		margin: auto;
		margin-top: 40upx;
	}
	.introTitle{
		font-size: 32upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 40upx;
		margin-bottom: 18upx;
	}
	.introBox{
		position: relative;
		width: 100%;
		font-size: 28upx;
		color: #9B9B9B;
		letter-spacing: 0;
		line-height: 44upx;
	}
	.tempKey{
		position: relative;
		width: 690upx;
		margin: auto;
		margin-top: 40upx;
	}
	.tempKeyTitle{
		font-size: 32upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 40upx;
	}
	.tempKeyList{
		position: relative;
		width: 100%;
	}
	.tempKeyItems{
		background: #EFEFEF;
		border-radius: 8upx;
		border-radius: 8upx;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		text-align: center;
		line-height: 72upx;
		padding: 0 8upx;
	}
.product-book-title {
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
	width: 30%;
	margin-left: 36%;
	text-align: center;
	line-height: 88upx;
	font-size: 28upx;
	color: #2e2e30;
	float: left;
}
.tian {
	width: 100%;
	height: 88upx;
}
.skipBtn{
	position: absolute;
	width: 10%;
	right: 20upx;
	top: 0;
	line-height: 88upx;
	font-size: 28upx;
	color: #15d49f;
}
.xing{
	position: relative;
	width: 16upx;
	height: 16upx;
	margin-left: 10upx;
	top: -8upx;
}
</style>
