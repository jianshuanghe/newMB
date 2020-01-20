<template>
	<!-- 说明书详情 完善说明书 -->
	<view class="QRcodelist-edit">
		<view class="product-book-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">立即定制</div>
		</view>
		<div class="templateFinishMade">
			<div class="address-box">
				<div class="addressLeft left" @tap='gotoSetupaddress'>
					<div class="addressExist" v-if='isSelctOrAddAddress === true'>
						<div class="addressTop">{{addressItems.addrName}} {{addressItems.addrPhone}}</div>
						<div class="addressBot">
						{{addressItems.addrPcodeStr}}
						{{addressItems.addrCcodeStr}}
						{{addressItems.addrAcodeStr}}
						{{addressItems.address}}
						</div>
					</div>
					<div class="addressExistNo" v-if='isSelctOrAddAddress === false'>
						<div class="addressNo">请选择地址</div>
					</div>
				</div>
				<div class="addressRight left">
					<image :src="right" class="imageR"></image>
				</div>
				<div class="clear"></div>
			</div>
			<div class="line"></div>
			<div class="insrBox">
				<div class="business">
					<image class="imageBusi" :src='dataLists.compLogo'></image>
					{{dataLists.companyName}}
				</div>
				<div class="line"></div>
				<div class="insrContent">
					<div class="iC-left left">
						<image class="imageIC" :src='dataLists.bannerImg'></image>
					</div>
					<div class="iC-right left">
						<div class="ic-title">{{dataLists.instrucTitle}}</div>
						<div class="ic-insr">{{dataLists.instrucIntro}}</div>
						<div class="ic-priceNum">¥{{dataLists.orderDjMoney}} x{{dataLists.orderSpCount}}</div>
					</div>
					<div class="clear"></div>
				</div>
				<div class="made-content">
					<div class="made-title" v-if='dataLists.context.custModules.length > 0'>定制信息</div>
					<div class="line"></div>
					<div 
						class="module-box-made" 
						v-for="(items, index) in dataLists.context.custModules" 
						:key="index"
						>
						<div class="module-box" v-if="items.type === 'INPUT_TABLE_A' && items.dataList.length > 0">
							<div class="module-title">{{items.iconTitle}}</div>
							<div class="module-content">
								<div 
								class="items-module" 
								v-for="(item, inde) in items.dataList" 
								:key="inde"
								>{{item.key1}}：{{item.value || '--'}}{{item.key2}}</div>
							</div>
							<div class="line"></div>
						</div>
						<div class="module-box" v-if="items.type === 'INPUT_CHECK_A' && items.dataList.length > 0">
							<div class="module-title">{{items.iconTitle}}</div>
							<div class="module-content">
								<div
								class="items-module" 
								v-for="(item, inde) in items.dataList" 
								:key="inde"
								v-if='item.select === true'
								>{{item.title}}</div>
							</div>
							<div class="line"></div>
						</div>
						<div class="module-box"  v-if="items.type === 'INPUT_CHECK_B' && items.dataList.length > 0">
							<div class="module-title">{{items.iconTitle}}</div>
							<div class="module-content">
								<div
								class="items-module" 
								v-for="(item, inde) in items.dataList" 
								:key="inde"
								v-if='item.select === true'
								>{{item.title}}</div>
							</div>
							<div class="line"></div>
						</div>
						<div class="module-box"  v-if="items.type === 'INPUT_TABLE_B' && items.dataList.length > 0">
							<div class="module-title">{{items.iconTitle}}</div>
							<div class="module-content">
								<div
								class="items-module"
								v-for="(item, inde) in items.dataList" 
								:key="inde"
								>{{item.key}} x{{item.count}}</div>
							</div>
							<div class="line"></div>
						</div>
						<div class="module-box"  v-if="items.type === 'INPUT_IMG_A' && items.dataList.length > 0">
							<div class="module-title">{{items.iconTitle}}</div>
							<div class="module-content">
								<div 
								class="items-module imageModules left"
								v-for="(item, inde) in items.dataList"
								:key="inde"
								>
									<image class="imageModule" :src='item.imgUrl'></image>
								</div>
								<div class="clear"></div>
							</div>
							<div class="line"></div>
						</div>
						<div class="module-box"  v-if="items.type === 'INPUT_TEXT_A' && items.content !== '' ">
							<div class="module-title">{{items.iconTitle}}</div>
							<div class="module-content">
								<div
								class="items-module">{{items.content}}</div>
							</div>
							<div class="line"></div>
						</div>
					</div>
					<div class="custPrice">
						<div class="cp-items">
							商品总额
							<text class="cp-text">¥{{dataLists.orderSpMoney}}</text>
						</div>
						<div class="cp-items">
							运费总计
							<text class="cp-text">--</text>
						</div>
						<div class="cp-items" v-if='false'>
							红包
							<text class="cp-text">-¥500.00</text>
						</div>
						<div class="cp-items">
							订单总额约
							<text class="cp-text">¥{{dataLists.orderSpMoney}}</text>
						</div>
					</div>
				</div>
				<div class="agreement">
					<div class="agreementTips">
						<image class="agreementTipsImg" :src='agreementImg' @tap='agreementTips'></image>
						<text class="textAg" @tap='agreementTips'>勾选即表示您同意平台的</text>
						<text class="textAgRee">《采购协议》</text>
					</div>
				</div>
			</div>
		</div>
		<div class="finishBtn-box">
			<div class="btnItems left"
			v-for="(items, index) in btnList" 
			:key="index" :style="{width: items.width}"
			@tap='clickBtnBox(items)'>
				<div class="btnText" :style='items.style'>
				{{items.name}}
					<text  class="textIM">{{items.text}}</text>
				</div>
			</div>
			<div class="clear"></div>
		</div>
		<!-- 快捷导航 -->
		<navigation v-if="QUICKNAVCO.show"></navigation>
		<madeAddress 
		v-if='madeAddressShow'
		@tap-XuanZeAddress='tapXuanZeAddress'
		></madeAddress>
	</view>
</template>

<script>
import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
import madeAddress from './madeAddress.vue';
import navigation from '@/components/mbbo/navigation/navigation.vue';
import selectEd from '@/static/mbcImg/publish/createBusiness/selectEd.png';
import select from '@/static/mbcImg/publish/createBusiness/select.png';
import right from '@/static/mbcImg/my/right.png';
import { mapMutations, mapGetters } from 'vuex';
export default {
	data() {
		return {
			right: right,
			selectEd: selectEd, // 勾选圆框 黑色
			select: select, // 未勾选圆框 白色
			agreementImg: select,
			list: null,
			tapIndex: 0,
			dataLists:null, // 链接上的参数
			isSelctOrAddAddress: false, // 是否要选择或者添加地址
			addressList: null, // 地址列表
			madeAddressShow: false,
			addressItems: {
				addrAcode: "",
				addrAcodeStr: "",
				addrCcode: "",
				addrCcodeStr: "",
				addrName: "",
				addrPcode: "",
				addrPcodeStr: "",
				addrPhone: "",
				addrState: "",
				address: "",
				createTime: null,
				cteateMan: "",
				id: null,
				states: "",
				updateMan: "",
				updateTime: null,
				userId: null,
			}, // 地址
			btnList:[
				{
					type: 0,
					tempType: 0,
					name: '大约应支付：',
					text: '¥0',
					width: '66.6666%',
					style: {
					}
				},
				{
					type: 1,
					tempType: 0,
					name: '提交',
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
		madeAddress
	},
	onLoad() {
	},
	created() {
		this.shareEachPage(); // 分享
		let madeParams = JSON.parse(uni.getStorageSync('madeParams')); // 读取缓存的用户信息
		this.dataLists = this.urlCrypto(madeParams, 1);
		this.btnList[0].text = '¥' + this.dataLists.orderSpMoney;
		// // console.log(this.dataLists, '----------------------------------------------------')
		this.getUserAddress();
	},
	computed: {
		...mapGetters(['GET_MY', 'QUICKNAVCO'])
	},
	watch: {
		GET_MY: {
			handler(a, b) {
				// // console.log(a,b)
				this.addressList=a.address;
				// // console.log(this.addressList, '地址列表');
				if (this.addressList.length > 0) {
					this.addressList.map((items, index)=>{
						if (items.addrState === '1') {
							this.isSelctOrAddAddress = true;
							this.addressItems = items;
							this.dataLists.receivPcode = items.addrPcode;
							this.dataLists.receivAcode = items.addrAcode;
							this.dataLists.receivCcode = items.addrCcode;
							this.dataLists.receivPhone = items.receivPhone;
							this.dataLists.receivName = items.addrName;
						}
					})
				} else {
					this.isSelctOrAddAddress = false;
				}
			},
			deep: true
		}
	},
	methods: {
		// 获取用户的默认收货地址
		getUserAddress () {
			// // console.log('获取用户的默认收货地址');
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				// // console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/address?userId=' + landRegistLG.user.id, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						
						if (response.data.ret === '200') {
							uni.hideLoading();
							// // console.log(response.data);
							this.addressList = response.data.content;
							// // console.log(this.addressList, '地址列表');
							if (this.addressList.length > 0) {
								this.addressList.map((items, index)=>{
									if (items.addrState === '1') {
										this.isSelctOrAddAddress = true;
										this.addressItems = items;
										this.dataLists.receivPcode = items.addrPcode;
										this.dataLists.receivAcode = items.addrAcode;
										this.dataLists.receivCcode = items.addrCcode;
										this.dataLists.receivPhone = items.addrPhone;
										this.dataLists.receivName = items.address;
										this.dataLists.receivUser = items.addrName;
									}
								})
							} else {
								this.isSelctOrAddAddress = false;
							}
							this.$store.commit('setaddress', this.addressList); // 更新vuex
						}  else if (response.data.ret === '202') {
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
						// // console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		tapXuanZeAddress (e) {
			if (e === true) {
				this.madeAddressShow=false;
				this.getUserAddress();
			}
		},
		// 设置默认收货地址
		gotoSetupaddress(){
			// // console.log('地址管理');
			this.madeAddressShow=true;
		},
		agreementTips() {
			if (this.agreementImg === this.select) {
				this.agreementImg = this.selectEd;
			} else if (this.agreementImg === this.selectEd) {
				this.agreementImg = this.select;
			}
		},
		// 提交
		clickBtnBox (e) {
			// // console.log(e, '提交数据');
			if (e.type === 1) {
				if (this.dataLists.receivPcode === '') {
					uni.showToast({
						title: '请选择收货地址！',
						icon: 'none',
						duration: 1000
					});
					return
				};
				if (this.agreementImg !== this.selectEd) {
					uni.showToast({
						title: '请确认已阅读采购协议！',
						icon: 'none',
						duration: 1000
					});
					return
				};
				// 提交数据前先清除
				delete this.dataLists.bannerImg;
				delete this.dataLists.instrucIntro;
				delete this.dataLists.instrucTitle;
				delete this.dataLists.compLogo;
				delete this.dataLists.companyName;
				delete this.dataLists.expressAddr;
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					// // console.log(landRegistLG.user.id);
					let params = this.dataLists; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/order/createOrder', //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							if (response.data.ret === '200') {
								uni.hideLoading();
								// // console.log(response.data.content);
								uni.showToast({
									title: '提交成功！',
									icon: 'none',
									duration: 1000
								});
								uni.navigateTo({
									url: '/modules/InstructionsPrice/Order/Order?id=2'
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
						fail: (error) => {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络繁忙，请稍后',
								icon: 'none',
								duration: 1000
							});
							// // console.log(error, '网络繁忙，请稍后');
						}
					});
				}
			}
		}
	},
};
</script>

<style>
	.addressNo{
		position: relative;
		width: 100%;
		padding: 1vw 0;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #9B9B9B;
		line-height: 80upx;
	}
	.agreement{
		position: relative;
		width: 100%;
		padding: 40upx 30upx;
		margin-bottom: 10vh;
	}
	.agreementTips{
		position: relative;
		width: 68%;
		margin: auto;
	}
	.agreementTipsImg{
		position: relative;
		width: 24upx;
		height: 24upx;
	}
	.textAg{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #2E2E30;
		letter-spacing: 0;
		text-align: center;
		line-height: 60upx;
	}
	.textAgRee{
		color: #15D49F;
	}
	.made-content{
		position: relative;
		width: 100%;
		background: #fff;
		margin-bottom: 40upx;
	}
	.made-title{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Medium;
		font-size: 32upx;
		color: #2E2E30;
		line-height: 92upx;
		padding: 0 30upx;
	}
	.module-box{
		position: relative;
		width: 100%;
		padding: 0upx 30upx;
	}
	.module-title{
		font-family: PingFangSC-Medium;
		font-size: 28upx;
		color: #3C3D3F;
		letter-spacing: 0;
		line-height: 80upx;
		margin: 20upx 0 0 0;
	}
	.module-content{
		position: relative;
		width: 100%;
		margin: 0 0 30upx 0;
	}
	.items-module{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #9B9B9B;
		letter-spacing: 0;
		line-height: 40upx;
	}
	.imageModules{
		position: relative;
		width: 220upx !important;
		height: 220upx;
	}
	.imageModule{
		position: relative;
		width: 220upx;
		height: 220upx;
	}
	.custPrice{
		position: relative;
		width: 100%;
		background: #fff;
		margin-bottom: 40upx;
		padding: 40upx 30upx;
	}
	.insrBox{
		position: relative;
		width: 100%;
		margin: 20upx 0 0 0;
	}
	.business{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Medium;
		font-size: 32upx;
		color: #2E2E30;
		line-height: 40upx;
		background: #fff;
		padding: 30upx 30upx;
	}
	.imageBusi{
		position: relative;
		width: 60upx;
		height: 40upx;
		top: 6upx;
	}
	.insrContent{
		position: relative;
		width: 100%;
		background: #fff;
		padding: 30upx 30upx;
		margin: 0 0 20upx 0;
	}
	.iC-left{
		position: relative;
		width: 30%;
	}
	.imageIC{
		position: relative;
		width: 100%;
		height: 184upx;
	}
	.iC-right{
		position: relative;
		width: 70%;
		padding: 20upx 20upx 0 20upx;
	}
	.ic-title{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		text-align: justify;
		line-height: 40upx;
	}
	.ic-insr{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #9B9B9B;
		line-height: 40upx;
		margin: 10upx 0;
	}
	.ic-priceNum{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #9B9B9B;
		line-height: 40upx;
		margin: 10upx 0;
	}
	.cp-items{
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 80upx;
	}
	.cp-text{
		position: relative;
		text-align: right;
		float: right;
	}
	.templateFinishMade{
		position: relative;
		padding: 100upx 0;
		margin-bottom: 10vh;
	}
	.address-box{
		position: relative;
		width: 100%;
		background: #fff;
		padding: 30upx 30upx;
	}
	.addressLeft{
		position: relative;
		width: 90%;
	}
	.addressTop{
		position: relative;
		width: 100%;
		padding: 1vw 0;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color:  #2E2E30;
		line-height: 40upx;
	}
	.addressBot{
		position: relative;
		width: 100%;
		padding: 1vw 0;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #9B9B9B;
		line-height: 40upx;
	}
	.addressRight{
		position: relative;
		width: 10%;
	}
	.imageR{
		width: 22upx;
		height: 22upx;
		float: right;
		margin: 26upx 0;;
	}
	.textIM{
		color: #15D49F;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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

</style>
