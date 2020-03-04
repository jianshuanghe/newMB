<template>
	<!-- 说明书详情 完善说明书 -->
	<view class="QRcodelist-edit">
		<view class="product-book-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">分享二维码(4/4)</div>
			<div class="skipBtn" @tap='clickSkipBtn' v-if='false'>跳过</div>
		</view>
		<div class="finishShare-content">
			<div class="shareBox">
				<div class="title">分享说明书</div>
				<div class="qrShare-list">
					<rQrCode 
					:dataList="dataLists.qrList" 
					:longTapSave='true'
					:previewImage='true'
					:isSaveBtn='true'
					nextMargin='118px'
					marginLeft='38%'
					tempType='1'
					:qrState="dataLists.instrucState"
					@tap-RQrCode='tapRQrCode'
					></rQrCode>
				</div>
				<div class="linkShare">
					<rClipBoard
					:clipBoardTitle="'【' + dataLists.instrucTitle + '】'"
					:clipBoardLink='dataLists.instrucUrl'
					:cbState='dataLists.instrucState'
					@tap-RClicpBoard='tapRClicpBoard'
					></rClipBoard>
				</div>
			</div>
			<div class="tempIntro">
				<div class="introTitle">说明书介绍</div>
				<div class="introBox">{{dataLists.instrucIntro}}</div>
			</div>
			<div class="tempIntro">
				<div class="introTitle">所属行业</div>
				<div class="introBox">{{dataLists.instrucCategoryStr}}</div>
			</div>
			<div class="tempKey" v-if='dataLists.keyList.length > 0'>
				<div class="tempKeyTitle">说明书关键词</div>
				<div class="tempKeyList">
					<div 
					class="tempKeyItems"
					v-for="(items, index) in dataLists.keyList" 
					:key="index"
					>{{items}}</div>
				</div>
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
					name: '我的说明书',
					style: {}
				},
				{
					type: 1,
					tempType: 0,
					name: '继续创建',
					style: {}
				},
				{
					type: 2,
					tempType: 0,
					name: '立即投放',
					style: {
						backgroundImage: 'linear-gradient(134deg, #15D49F 0%, #57D6CF 100%)',
						color:  '#FFFFFF'
					}
				}
			]
		};
	},
	components: {
		quickBtn,
		navigation,
		rQrCode,
		rClipBoard
	},
	onLoad(option) {
		this.dataLists = this.urlCrypto(option.urlParams, 1);
		// console.log(this.dataLists, '----------------------------------------------------')
	},
	created() {
		this.shareEachPage(); // 分享
		this.Statistics();
	},
	computed: {
		...mapGetters(['GET_MY', 'QUICKNAVCO'])
	},
	methods: {
		tapRQrCode (e) {
			// console.log(e, '触发二维码组件');
		},
		tapRClicpBoard(e) {
			// console.log(e, '剪切板');
		},
		Statistics(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				// console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/user/' + landRegistLG.user.id, //接口地址。
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						if (response.data.ret === '200') {
							uni.hideLoading();
							// console.log(response.data);
							this.list = response.data.content;
						} else if (response.data.ret === '202') {
							uni.hideLoading(); // 隐藏 loading
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
							uni.hideLoading(); // 隐藏 loading
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
					fail: (error) => {
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
		goToPutInBusiness() {
			// console.log(this.list.authState, 'to投放商机');
			if (Number(this.list.authState) !== 2) {
				uni.showModal({
					title: '提示',
					content: '您的公司还未认证，无法进行广告投放，快去提交公司认证信息吧～',
					confirmColor: ' #02C2A2',
					confirmText: '去认证',
					cancelText: '暂不认证',
					success: function(res) {
						if (res.confirm) {
							// console.log('用户点击确定');
							let e=1;
							uni.navigateTo({
								url: '/modules/myCompany/personAndCompany/companyInfor/companyInforEdit?id='+e
							});
						} else if (res.cancel) {
							// console.log('用户点击取消');
						}
					}
				});
			} else {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					// console.log(landRegistLG.user.id);
					let params = {
						page: String(1),
						userId: landRegistLG.user.id
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
							// console.log(response.data);
							this.putInBusinessData = response.data.content.list;
							// this.list = response.data.content
							this.$store.commit('setputInBusinessData', this.putInBusinessData); // 更新vuex
							if (response.data.ret == 200) {
								uni.navigateTo({
									url: '/modules/aLittle/putInBusiness/putInBusinessList/putInList/putInList?id=' + this.dataLists.id
								});
							} else if (response.data.ret === '202') {
								uni.hideLoading(); // 隐藏 loading
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
								uni.hideLoading(); // 隐藏 loading
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
			}
		},
		btnItems (e) {
			// console.log(e, '按钮');
			if (e.type === 0) {
				// console.log('我的说明书');
				uni.navigateTo({
					url: '/modules/InstructionsPrice/myproduct/myproduct-shu'
				});
			} else if (e.type === 1) {
				// console.log('继续创建');
				uni.navigateTo({
					url: '/modules/createBusiness/selectTemplate'
				});
			} else if (e.type === 2) {
				// console.log('发布');
				if (this.dataLists.instrucState === '1') {
					this.goToPutInBusiness();
				} else {
					uni.showToast({
						title: '当前说明书未发布，只有发布的说明书才可以投放！',
						icon: 'none',
						duration: 1000
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
		padding-bottom: 10vh;
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
		margin-top: 60upx;
	}
	.introTitle{
		font-size: 32upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 72upx;
		font-weight: bold;
	}
	.introBox{
		position: relative;
		width: 100%;
		font-size: 28upx;
		color: #9B9B9B;
		letter-spacing: 0;
		line-height: 40upx;
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
		line-height: 72upx;
		font-weight:bold;
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
		padding: 0 14upx;
		float: left;
		margin-right: 2vw;
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
