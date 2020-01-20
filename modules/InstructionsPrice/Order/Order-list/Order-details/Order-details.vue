<template>
	<view class="Order-details">
		<view class="news-system-title">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<!-- 系统通知 -->
			<div class="search-Fd left">
			  {{i18n.product7}}
			</div>
		</view>
		<view class="tian"></view>
		<view class="Order-details-A">
			<view>提醒：进行操作前请确认您已收到买家的货款或者您与买家已达成协议，平台对买家是否支付货款不做监督。</view>
		</view>
		<!-- 交易信息 -->
		<view class="Order-details-B">
			<!-- 标品 -->
			<image :src="biao" class="Supply-order-tu" v-if="list.orderType == 1"></image>
			<!-- 定制 -->
			<image :src="ding" class="Supply-order-tu" v-if="list.orderType == 0"></image>
			<view>交易信息</view>
			<view v-if="list.orderState == 0">待确认</view>
			<view v-if="list.orderState == 1" style="color: #02C2A2;">待发货</view>
			<view v-if="list.orderState == 2" style="color: #02C2A2;">待收货</view>
			<view v-if="list.orderState == 3" style="color: #FF4D6A;">已完成</view>
			<view v-if="list.orderState == 4" style="color: #2E2E30;">已关闭</view>
		</view>
		<view class="Order-details-C">
			<view>订单编号: {{list.orderOrder}}</view>
			<view>下单账号：<span @tap="playphone(list.myUserPhone)">{{list.myUserPhone}}</span></view>
			<view class="Order-details-C-time">下单时间：{{list.createTime|formatDate}}</view>
			<view class="Order-details-C-time" v-if="list.confirmTime!==0&&alltime==true">确认时间：{{list.confirmTime|formatDate}}</view>
			<view class="Order-details-C-time" v-if="list.sendTime!==0&&alltime==true">发货时间：{{list.sendTime|formatDate}}</view>
			<view class="Order-details-C-time" v-if="list.finishTime!==0&&alltime==true">完成时间：{{list.finishTime|formatDate}}</view>
			<view class="Order-details-C-img" @tap="upall()"><image :src="up"></image></view>
		</view>
		<!-- 商家名称 -->
		<view class="Order-details-D">
			<view class="Order-details-D-img">
				<image :src="list.companyLogo" mode=""></image>
			</view>
			<view class="Order-details-D-zi">
				{{list.companyName}}
			</view>
		</view>
		<view class="Order-details-E">
			<view class="Order-details-E-img">
				<image :src="list.bannerImg"></image>
			</view>
			<view class="Order-details-E-zi">
				<view>{{list.instrucTitle}}</view>
				<view>{{list.instrucIntro}}</view>
				<view>{{list.moneyStr}}&nbsp;&nbsp;x{{list.orderSpCount}}</view>
			</view>
		</view>
		<!-- 定制信息 -->
		<view class="Order-details-F">
			<view class="Order-details-F-header">
				定制信息
			</view>
			<view class="Order-details-F-ji" v-for="(item,index) in thid" :key="index">
				<view>{{item.iconTitle}}</view>
				<view v-for="(ite,index) in item.dataList" v-if="item.iconTitle === '基本信息'">{{ite.key1}}:{{ite.value || '--'}} {{ite.key2}}</view>
				<image :src="ite.imgUrl" v-for="(ite,index) in item.dataList" v-if="item.iconTitle === '图片选择'" class="images">
				</image>
				<view v-for="(ite,index) in item.dataList" v-if="item.iconTitle === '样式选择'">{{ite.content3}}</view>
				<view v-for="(ite,index) in item.dataList" v-if="item.iconTitle === '采购数量'">{{ite.key || '--'}} : {{ite.count}}</view>
				<view v-if="item.iconTitle === '添加照片'">
					<image :src="ite.imgUrl" class="images" v-for="(ite,index) in item.dataList"></image>
				</view>
				<view v-if="item.iconTitle === '添加照片'&&item.dataList.length==0">暂无照片</view>
				<view v-if="item.iconTitle === '备注说明'">{{item.content || '--'}}</view>
			</view>
		</view>
		<!-- 收货地址 -->
		<view class="Order-details-G">
			<view>收货地址</view>
			<view>{{list.receivUser}} {{list.receivPhone}}</view>
			<view>{{list.receivPcodeStr}} {{list.receivCcodeStr}} {{list.receivAcodeStr}} {{list.receivName}}</view>
		</view>
		<!-- 关闭原因 -->
		<view class="Order-details-G" v-if="list.closeContent !== ''">
			<view>关闭原因</view>
			<view>{{list.closeContent}}</view>
			<view>订单关闭者：{{list.closeOrderUser}}</view>
		</view>
		<!-- 总价 运费 优惠 -->
		<view class="Order-details-H">
			<view class="Order-details-H-one">
				<view>商品总额</view>
				<view>￥{{list.orderDjMoneyStr}}</view>
			</view>
			<view class="Order-details-H-two">
				<view>运费总计</view>
				<view>￥{{list.orderYfMoneyStr}}</view>
			</view>
<!-- 			<view class="Order-details-H-thr">
				<view>优惠</view>
				<view>-¥5000.00</view>
			</view> -->
		</view>
		<view class="Order-details-tian"></view>
		<view class="Order-details-Z">
			<view class="Order-details-Z-header">
				<view>订单总额</view>
				<view>￥{{list.orderYfMoney+list.orderSpMoney | numFilter}}</view>
			</view>
			<view class="Order-details-Z-foot" v-if="list.orderState == 0">
				<view class="Order-details-Z-one" @tap="phones()">
					<image :src="phone"></image><span>联系</span><span>|</span>
				</view>
				<view class="Order-details-Z-two" @tap="guanbis()">关闭交易</view>
				<view class="Order-details-Z-thr" @tap="gotoqueren()">确认定制信息</view>
			</view>
			<!-- 待发货 -->
			<view class="Order-details-Z-foot" v-if="list.orderState == 1">
				<view class="Order-details-Z-one" @tap="phones()">
					<image :src="phone"></image><span>联系</span><span>|</span>
				</view>
				<view class="Order-details-Z-two" @tap="guanbis()">关闭交易</view>
				<view class="Order-details-Z-thr" @tap="fahuo()">去发货</view>
			</view>
			<!-- 待收货 -->
			<view class="Order-details-Z-foot" v-if="list.orderState == 2">
				<view class="Order-details-Z-ones" @tap="phones()">
					<image :src="phone"></image><span>联系</span>
				</view>
				<view class="Order-details-Z-thrs" @tap="shou()">确认收货</view>
			</view>
		</view>
		<!-- 关闭交易 -->
		<view class="guanbi" v-if="guan == 1">
			<view class="guanbi-A">
				<view class="guanbi-B">订单关闭原因</view>
				<view class="guanbi-C">
					<input type="text" placeholder="请填写您关闭订单的原因" placeholder-style="color: #D2D2D2;" v-model="guanbi"/>
				</view>
				<view class="guanbi-D">
					<view @tap="qu()">取消</view>
					<view @tap="ti(list.myUserId)">提交</view>
				</view>
			</view>
		</view>
		<!-- 联系 -->
		<view class="lianxis" v-if="lian">
			<view @tap="ping()">联系平台</view>
			<view @tap="jia(list.bUserPhone)">联系商家</view>
		</view>
		<view class="Mask-ming" v-if="lian" @tap="ming"></view>
		<!-- 物流信息 -->
		<view class="logistics" v-if="logistics">
			<view class="logistics-mask">
				<view class="logistics-mask-hea">
					<view @tap="fahuo()">取消</view>
					<view>物流信息</view>
					<view @tap="addlogistics()">保存</view>
				</view>
				<view class="logistics-mask-wu">
					<view>物流单号</view>
					<view><input type="text" v-model="danhao" placeholder="请填写物流单号" placeholder-style="color: #D2D2D2;"></view>
				</view>
				<view class="logistics-mask-wu">
					<view>物流公司</view>
					<view><input type="text" v-model="gongsi" placeholder="请填写您发货的物流公司" placeholder-style="color: #D2D2D2;"></view>
				</view>
				<view class="logistics-mask-liu">
					<view>物流凭证</view>
					<view class="logistics-mask-shan" v-if="!logo">上传物流凭证</view>
					<view class="Img-Upload">
						<imageUploadOne 
						v-model="imageData" 
						:server-url="serverUrl" 
						limit=1 
						@delete="deleteImage" 
						@add="addImage" 
						:images="2">
						</imageUploadOne>
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
	import biao from '@/static/mbcImg/my/biao.png';
	import ding from '@/static/mbcImg/my/ding.png';
	import phone from '@/static/mbcImg/my/phone.png';
	import up from '@/static/mbcImg/my/up-arrow.png';
	import imageUploadOne from '@/components/common/imageUpload/imageUploadOne.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list: [],
				num: 0,
				biao:biao,
				ding:ding,
				up:up,
				phone:phone,
				id:'',
				thid:[],
				guanbi:'',
				guan:0,
				gong:[],
				shu:[],
				lian:false,
				imageData: '',
				logo: '',
				logos: '',
				serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload',
				logistics:false,
				danhao:'',
				gongsi:'',
				alltime:false,
				moneyzong:null,
				moneyyun:null
			}
		},
		components: {
			quickBtn,
			navigation,
			imageUploadOne,
		},
		computed: {
			i18n () {
			  return this.$t('Howtoshow')  
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO'])
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
				return y + '-' + MM + '-' + d +' ' + h + ':' + m + ':' + s; 
			},
			numFilter (value) {
				let realVal = ''
				if (value) {
					// 截取当前数据到小数点后三位
					let tempVal = parseFloat(value).toFixed(3)
					realVal = tempVal.substring(0, tempVal.length - 1)
				} else {
					realVal = '--'
				}
				return realVal
			}
		},
		onLoad:function(options){
			this.id = options.id
			console.log(this.id)
			uni.setNavigationBarTitle({
				title: this.i18n.product7
			});
			this.details();
		},
		created(){
			// this.details();
		},
		methods:{
			ming(){
				this.lian = !this.lian;
			},
			upall(){
				this.alltime=!this.alltime
			},
			// 物流消息
			addlogistics(){
				if(this.danhao==''){
					uni.showToast({
						title: '请填写物流单号',
						icon: 'none',
						duration: 1000
					});
				}else if(this.gongsi==''){
					uni.showToast({
						title: '请填写物流公司',
						icon: 'none',
						duration: 1000
					});
				}else if(this.logo==''){
					uni.showToast({
						title: '请上传物流凭证',
						icon: 'none',
						duration: 1000
					});
				}else {
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						let params = {
							"state":"2",
							//0卖家 1买家
							"orderUserType":"0",
							"expressNo":this.danhao,
							"expressCompany":this.gongsi,
							"expressImg":this.logo,
							"orderUser":String(landRegistLG.user.id),
						}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/updateOrderState?orderId=' +this.id, //接口地址。
							data: params,
							method: 'POST',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								this.details();
								this.Supply();
								this.Purchase();
								this.fahuo();
								// this.$store.commit('setSupply', this.gong);
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
				}
				
			},
			fahuo(){
				this.logistics=!this.logistics
			},
			deleteImage: function(e) {
				console.log(e, '删除图片')
				this.logo = ''; // 清空数据
			},
			addImage: function(e) {
				console.log(e, '添加图片')
				if (e.allImages) { // 上传成功
					this.logo = (e.allImages[0].imgName);
					this.logos = (e.allImages[0].imgUrl)
					console.log(this.logo)
				}
			},
			//确认定制信息
			gotoqueren(){
				uni.navigateTo({
					url: '/modules/InstructionsPrice/Order/Order-list/Order-details/Order-confirm?id='+this.id,
				});
			},
			phones(){
				this.lian = !this.lian;
			},
			ping(){
				this.lian = !this.lian;
				uni.makePhoneCall({
					phoneNumber: '4006182288' //仅为示例
				});
			},
			playphone(e){
				uni.makePhoneCall({
					phoneNumber: e //仅为示例
				});
			},
			jia(e){
				this.lian =!this.lian;
				uni.makePhoneCall({
					phoneNumber: e //仅为示例
				});
			},
			shou(){
				var _this=this
				uni.showModal({
					title: '提示',
					content: '确认收货前请与您的买家确认是否已收到货哦',
					confirmColor:' #02C2A2',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							if (uni.getStorageSync('landRegist')) {
								let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
								console.log(landRegistLG.user.id);
								let params = {
									"state":"3",
									//0卖家 1买家
									"orderUserType":"0",
									"orderUser":String(landRegistLG.user.id),
								}; // 请求总数居时 参数为空
								uni.showLoading({ // 展示loading
									title: '加载中'
								});
								uni.request({
									url: _this.api2 + '/rest-rp/order/updateOrderState?orderId=' +_this.id, //接口地址。
									data: params,
									method: 'POST',
									header: {
										Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
									},
									success: (response) => {
										uni.hideLoading();
										console.log(response.data);
										_this.details();
										_this.Supply();
										_this.Purchase();
										// this.$store.commit('setSupply', this.gong);
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
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			guanbis(){
				this.guan=1;
			},
			qu(){
				this.guan=0;
			},
			ti(e){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						"state":"4",
						//0卖家 1买家
						"orderUserType":"0",
						//备注
						"content":this.guanbi,
						"orderUser":String(landRegistLG.user.id),
					}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/order/updateOrderState?orderId=' +this.id, //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.guan=0;
							this.details();
							this.Supply();
							this.Purchase()
							// this.$store.commit('setSupply', this.gong);
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
			Supply(){//供应订单
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/order/selectMyToBOrder?userId='+landRegistLG.user.id+'&page=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							// console.log(111111111111111111111111111111111111)
							this.gong = response.data.content.list
							this.$store.commit('setSupply', this.gong);
							// console.log(this.arr)
							// console.log(this.arr1)
							// console.log(this.arr2)
							// console.log(this.arr3)
							// console.log(this.arr4)
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
			Purchase(){//采购订单
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId='+landRegistLG.user.id+'&page=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.shu = response.data.content.list
							this.$store.commit('setPurchase', this.shu);
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
			playphone(e){
				console.log(e,123)
				uni.makePhoneCall({
					phoneNumber: e //仅为示例
				});
			},
			details(){
				console.log(this.id)
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/order/selectOrderInfo?orderId=' + this.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content;
							// this.moneyzong=parseInt(this.list.orderDjMoneyStr);
							// this.moneyyun=parseInt(this.list.orderYfMoneyStr);
							this.thid = response.data.content.context.custModules
							console.log(this.thid)
							// this.$store.commit('setSupply', this.gong);
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
		}
		
	}
</script>

<style>
	.Order-details{
		width: 100%;
		min-height: 100%;
		overflow: hidden;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.news-system-title{
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
		width: 20%;
		margin-left: 40%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
		float: left;
	}
	.Order-details-A{
		width: 100%;
		height: 120upx;
		background: #FEEEC7;
		
	}
	.Order-details-A>view{
		width: 90%;
		margin: 0 auto;
		font-size: 24upx;
		color: #FAB100;
		line-height: 36upx;
		padding-top: 24upx;
	}
	.Order-details-B{
		width: 100%;
		height: 100upx;
		border-bottom: 2upx solid #EFEFEF;
		background: #FFFFFF;
		position: relative;
	}
	.Supply-order-tu{
		left: 0;
		top: 0;
		width: 100upx;
		height: 100upx;
		position: absolute;
	}
	.Order-details-B>view:nth-of-type(1){
		font-size: 32upx;
		color: #2E2E30;
		line-height: 100upx;
		padding-left: 70upx;
		float: left;
		font-weight: bold;
	}
	.Order-details-B>view:nth-of-type(2){
		font-size: 32upx;
		color: #FAB100;
		line-height: 100upx;
		float: right;
		padding-right: 30upx;
	}
	.Order-details-C{
		width: 100%;
		min-height: 264upx;
		background: #FFFFFF;
	}
	.Order-details-C>view:nth-of-type(1){
		font-size: 28upx;
		color: #5D5D5D;
		padding-left: 30upx;
		padding-top: 40upx;
	}
	.Order-details-C>view:nth-of-type(2){
		font-size: 28upx;
		color: #5D5D5D;
		padding-left: 30upx;
		padding-top: 10upx;
	}
	.Order-details-C>view:nth-of-type(2)>span{
		color: #02C2A2;
	}
	.Order-details-C-time{
		font-size: 28upx;
		color: #5D5D5D;
		padding-left: 30upx;
		padding-top: 10upx;
	}
	.Order-details-C-img{
		width: 100%;
		height: 14upx;
		text-align: center;
		line-height: 14upx;
		padding-top: 20upx;
		padding-bottom: 20upx;
	}
	.Order-details-C-img>image{
		width: 24upx;
		height: 20upx;
	}
	.Order-details-D{
		width: 100%;
		height: 100upx;
		border-bottom: 2upx solid #EFEFEF;
		background: #FFFFFF;
		margin-top: 20upx;
		overflow: hidden;
	}
	.Order-details-D-img{
		width: 36upx;
		height: 36upx;
		margin-top: 30upx;
		margin-left: 30upx;
		float: left;
	}
	.Order-details-D-img>image{
		width: 100%;
		height: 100%;
	}
	.Order-details-D-zi{
		float: left; 
		height: 100%;
		width: 50%;
		line-height: 100upx;
		font-size: 32upx;
		color: #2E2E30;
		margin-left: 12upx;
		font-weight: bold;
	}
	.Order-details-E{
		width: 100%;
		height: 250upx;
		background: #FFFFFF;
		overflow: hidden;
	}
	.Order-details-E-img{
		width: 168upx;
		height: 174upx;
		margin-left: 36upx;
		margin-top: 24upx;
		float: left;
	}
	.Order-details-E-img>image{
		width: 100%;
		height: 100%;
	}
	.Order-details-E-zi{
		width: 67%;
		height: 174upx;
		margin-top: 24upx;
		float: right;
		margin-right: 24upx;
		position: relative;
	}
	.Order-details-E-zi>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.Order-details-E-zi>view:nth-of-type(2){
		font-size: 28upx;
		color: #9B9B9B;
		line-height: 34upx;
		display: -webkit-box;
		-webkit-line-clamp:2;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
	}
	.Order-details-E-zi>view:nth-of-type(3){
		font-size: 28upx;
		height: 30upx;
		line-height: 30upx;
		color: #9B9B9B;
		position: absolute;
		bottom: 0;
	}
	.Order-details-F{
		width: 100%;
		min-height:1000upx;
		background: #FFFFFF;
		margin-top: 20upx;
	}
	.Order-details-F-header{
		width: 100%;
		height: 100upx;
		border-bottom: 2upx solid #EFEFEF;
		font-size: 32upx;
		color: #2E2E30;
		font-weight: bold;
		line-height: 100upx;
		padding-left: 40upx;
	}
	.Order-details-F-ji{
		width: 90%;
		min-height: 172upx;
		margin: 0 auto;
		border-bottom: 2upx solid #EFEFEF;
		padding-bottom: 20upx;
	}
	.Order-details-F-ji>view:nth-of-type(1){
		font-size: 28upx;
		color: #3C3D3F;
		padding-top: 40upx;
		font-weight: bold;
	}
	.Order-details-F-ji>view:nth-of-type(2){
		font-size: 28upx;
		color: #9B9B9B;
		padding-top: 20upx;
	}
	.Order-details-F-ji>view:nth-of-type(3){
		font-size: 28upx;
		color: #9B9B9B;
	}
	.Order-details-F-ji>view:nth-of-type(4){
		font-size: 28upx;
		color: #9B9B9B;
	}
	.Order-details-F-ji>view:nth-of-type(5){
		font-size: 28upx;
		color: #9B9B9B;
	}
	.Order-details-F-kuan{
		width: 90%;
		height: 180upx;
		margin: 0 auto;
		border-bottom: 2upx solid #EFEFEF;
	}
	.Order-details-F-kuan>view:nth-of-type(1){
		font-size: 28upx;
		color: #3C3D3F;
		padding-top: 40upx;
		font-weight: bold;
	}
	.Order-details-F-kuan>view:nth-of-type(2){
		font-size: 28upx;
		color: #9B9B9B;
		padding-top: 20upx;
	}
	.Order-details-F-tian{
		width: 90%;
		height: 368upx;
		border-bottom: 2upx solid #EFEFEF;
		margin: 0 auto;
	}
	.Order-details-F-tian>view:nth-of-type(1){
		font-size: 28upx;
		color: #3C3D3F;
		padding-top: 40upx;
		font-weight: bold;
	}
	.images{
		width: 176upx;
		height: 140upx;
		margin-top: 20upx;
		margin-left: 20upx;
	}
	.Order-details-G{
		width: 100%;
		height: 260upx;
		background: #FFFFFF;
		margin-top: 20upx;
	}
	.Order-details-G>view:nth-of-type(1){
		width: 100%;
		height: 100upx;
		border-bottom: 2upx solid #EFEFEF;
		font-size: 32upx;
		color: #2E2E30;
		font-weight: bold;
		line-height: 100upx;
		padding-left: 40upx;
	}
	.Order-details-G>view:nth-of-type(2){
		font-size: 32upx;
		color: #2E2E30;
		width: 90%;
		height: 35upx;
		line-height: 35upx;
		margin: 40upx auto auto auto;
	}
	.Order-details-G>view:nth-of-type(3){
		font-size: 28upx;
		color: #9B9B9B;
		width: 90%;
		height: 30upx;
		line-height: 30upx;
		margin: 20upx auto auto auto;
	}
	.Order-details-H{
		width: 100%;
		height: 122upx;
		background: #FFFFFF;
		margin-top: 40upx;
	}
	.Order-details-H-one{
		width: 90%;
		height: 30upx;
		font-size: 28upx;
		color: #9B9B9B;
		padding-top: 30upx;
		margin: 0 auto auto auto;
	}
	.Order-details-H-one>view:nth-of-type(1){
		float: left;
		line-height: 30upx;
	}
	.Order-details-H-one>view:nth-of-type(2){
		float: right;
		line-height: 30upx;
	}
	.Order-details-H-two{
		width: 90%;
		height: 30upx;
		font-size: 28upx;
		color: #9B9B9B;
		padding-top: 10upx;
		margin: 0 auto auto auto;
	}
	.Order-details-H-two>view:nth-of-type(1){
		line-height: 30upx;
		float: left;
	}
	.Order-details-H-two>view:nth-of-type(2){
		float: right;
		line-height: 30upx;
	}
	.Order-details-H-thr{
		width: 90%;
		height: 30upx;
		font-size: 28upx;
		color: #9B9B9B;
		padding-top: 10upx;
		margin: 0 auto auto auto;
	}
	.Order-details-H-thr>view:nth-of-type(1){
		line-height: 30upx;
		float: left;
	}
	.Order-details-H-thr>view:nth-of-type(2){
		float: right;
		line-height: 30upx;
		color: #FF4D6A;
	}
	.Order-details-Z{
		width: 100%;
		min-height: 90upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.Order-details-Z-header{
		width: 100%;
		height: 90upx;
		border-bottom: 2upx solid #EFEFEF;
		border-top: 2upx solid #EFEFEF;
	}
	.Order-details-Z-header>view:nth-of-type(1){
		line-height: 90upx;
		margin-left: 36upx;
		font-size: 14px;
		color: #2E2E30;
		float: left;
		font-weight: bold; 
	}
	.Order-details-Z-header>view:nth-of-type(2){
		line-height: 90upx;
		margin-right: 36upx;
		font-size: 14px;
		color: #2E2E30;
		float: right;
		font-weight: bold;
	}
	.Order-details-Z-foot{
		width: 100%;
		height: 100upx;
		
	}
	.Order-details-Z-one{
		width: 34%;
		height: 100%;
		font-size: 32upx;
		color: #2E2E30;
		text-align: center;
		line-height: 100upx;
		float: left;
	}
	.Order-details-Z-one>image{
		width: 32upx;
		height: 32upx;
		display: block;
		float: left;
		margin-left: 70upx;
		margin-top: 34upx;
	}
	.Order-details-Z-one>span:nth-of-type(1){
		display: block;
		float: left;
		margin-left: 10upx;
	}
	.Order-details-Z-one>span:nth-of-type(2){
		color: #E2E2E2;
		display: block;
		float: right;
	}.Order-details-Z-ones{
		width: 50%;
		height: 100%;
		font-size: 32upx;
		color: #2E2E30;
		text-align: center;
		line-height: 100upx;
		float: left;
	}
	.Order-details-Z-ones>image{
		width: 32upx;
		height: 32upx;
		display: block;
		float: left;
		margin-left: 124upx;
		margin-top: 34upx;
	}
	.Order-details-Z-ones>span:nth-of-type(1){
		display: block;
		float: left;
		margin-left: 10upx;
	}
	.Order-details-Z-two{
		width: 33%;
		height: 100%;
		font-size: 32upx;
		color: #FF4D6A;
		text-align: center;
		line-height: 100upx;
		float: left;
	}
	.Order-details-Z-thr{
		width: 33%;
		height: 100%;
		font-size: 32upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 100upx;
		float: left;
		background-image: linear-gradient(134deg, #15D49F 0%, #57D6CF 100%);
	}
	.Order-details-Z-thrs{
		width: 50%;
		height: 100%;
		font-size: 32upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 100upx;
		float: left;
		background-image: linear-gradient(134deg, #15D49F 0%, #57D6CF 100%);
	}
	.Order-details-tian{
		width: 100%;
		height: 190upx;
	}
	.guanbi{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		background:rgba(0,0,0,0.5);
	}
	.guanbi-A{
		width: 100%;
		height: 488upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.guanbi-B{
		width: 100%;
		height: 112upx;
		border-bottom: 2upx solid #E2E2E2;
		text-align: center;
		line-height: 112upx;
		font-size: 32upx;
		color: #2E2E30;
	}
	.guanbi-C{
		width: 90%;
		height: 100upx;
		margin: 60upx auto;
		border-bottom: 2upx solid #D2D2D2;
	}
	.guanbi-C>input{
		width: 100%;
		height: 100%;
	}
	.guanbi-D{
		width: 100%;
		height: 100upx;
		position: fixed;
		bottom: 0;
	}
	.guanbi-D>view:nth-of-type(1){
		width: 50%;
		height: 100%;
		text-align: center;
		line-height: 100upx;
		font-size: 32upx;
		color: #030303;
		float: left;
	}
	.guanbi-D>view:nth-of-type(2){
		width: 50%;
		height: 100%;
		text-align: center;
		line-height: 100upx;
		font-size: 32upx;
		color: #FFFFFF;
		background-image: linear-gradient(134deg, #15D49F 0%, #57D6CF 100%);
		float: left;
	}
	.lianxis{
		width: 300upx;
		height: 218upx;
		background: #2E2E30;
		position: fixed;
		left: 20upx;
		bottom: 120upx;
		border-radius: 8upx;
		z-index: 99999;
	}
	.Mask-ming{
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
	}
	.lianxis>view:nth-of-type(1){
		width: 80%;
		height: 50%;
		text-align: center;
		line-height: 109upx;
		border-bottom: 2upx solid #444444;
		font-size: 28upx;
		color: #FFFFFF;
		margin: 0 auto;
	}
	.lianxis>view:nth-of-type(2){
		width: 100%;
		height: 50%;
		text-align: center;
		line-height: 109upx;
		font-size: 28upx;
		color: #FFFFFF;
	}
	.logistics{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		background: rgba(0,0,0,0.7);
	}
	.logistics-mask{
		width: 100%;
		height: 736upx;
		background: #FFFFFF;
		position: absolute;
		bottom: 0;
	}
	.logistics-mask-hea{
		width: 100%;
		height: 110upx;
		border-bottom: 2upx solid  #E2E2E2;
	}
	.logistics-mask-hea>view:nth-of-type(1){
		width: 20%;
		height: 100%;
		text-align: center;
		line-height: 110upx;
		font-size: 32upx;
		color: #9B9B9B;
		float: left;
	}
	.logistics-mask-hea>view:nth-of-type(2){
		width: 60%;
		height: 100%;
		text-align: center;
		line-height: 110upx;
		font-size: 32upx;
		color: #2E2E30;
		float: left;
	}
	.logistics-mask-hea>view:nth-of-type(3){
		width: 20%;
		height: 100%;
		text-align: center;
		line-height: 110upx;
		font-size: 32upx;
		color: #02C2A2;
		float: left;
	}
	.logistics-mask-wu{
		width: 92%;
		height: 172upx;
		border-bottom: 2upx solid #EFEFEF;
		margin: 0 auto;
	}
	.logistics-mask-wu>view:nth-of-type(1){
		font-size: 32upx;
		color: #2E2E30;
		padding-top: 40upx;
	}
	.logistics-mask-wu>view:nth-of-type(2){
		width: 100%;
		height: 60upx;
		padding-top: 10upx;
	}.logistics-mask-wu>view:nth-of-type(2)>input{
		width: 100%;
		height: 100%;
	}
	.logistics-mask-liu{
		width: 92%;
		height: 220upx;
		margin: 30upx auto auto auto;
	}
	.logistics-mask-liu>view:nth-of-type(1){
		font-size: 32upx;
		color: #2E2E30;
		padding-top: 10upx;
	}
	.logistics-mask-shan{
		width: 100%;
		height: 96upx;
		border: 1px solid #EFEFEF;
		border-radius: 4upx;
		text-align: center;
		line-height: 96upx;
		font-size: 28upx;
		color: #02C2A2;
		margin-top: 20upx;
	}
	.Img-Upload {
		width: 304upx;
		height: 80upx;
		position: absolute;
		border-radius: 50%;
		right: 220upx;
		bottom: 70upx;
	}
</style>
