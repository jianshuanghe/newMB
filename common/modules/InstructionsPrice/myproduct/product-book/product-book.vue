<template>
	<view class="product-book">
		<view class="product-book-title">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<div class="search-Fd left">
			  {{i18n.product2}}
			</div>
		</view>
		<!-- 顶部填充 -->
		<view class="tian"></view>
		<view class="product-book-header">
			<view class="product-book-A" @tap='goToTemplatePro'>
				<view class="product-book-image">
					<image :src="GET_MY.detailed.bannerImg" mode="center" ></image>
					<!-- 未上线 -->
					<image :src="yi" class="tishis" v-if="GET_MY.detailed.instrucState === '0'"></image>
					<!-- 已上线 -->
					<image :src="shag" class="tishis" v-if="GET_MY.detailed.instrucState === '1'"></image>
					<!-- 已下架 -->
					<image :src="xia" class="tishis" v-if="GET_MY.detailed.instrucState === '2'"></image>
				</view>
				<view class="product-book-zi">
					<view class="product-book-ding">{{GET_MY.detailed.instrucTitle|ellipsis}}</view>
					<view class="product-book-zhong">{{GET_MY.detailed.instrucIntro||'暂无'}}</view>
					<view class="product-book-time">更新于 {{GET_MY.detailed.updateTime}}</view>
				</view>
			</view>
			<view class="product-book-B" @tap="gotodataReport()">
				<view class="product-book-BA one">
					<image :src="look"></image>
					<span>{{GET_MY.detailed.pv}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="phone"></image>
					<span>{{GET_MY.detailed.telCount}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="liu"></image>
					<span>{{GET_MY.detailed.msgCnt}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="zan"></image>
					<span>{{GET_MY.detailed.likeCn}}</span>
				</view>
				<view class="product-book-BA shou">
					<image :src="shou"></image>
					<span>{{GET_MY.detailed.followCount}}</span>
				</view>
				<view class="product-book-BA right shou">
					<image :src="fen"></image>
					<span>{{GET_MY.detailed.shareCnt}}</span>
				</view>
			</view>
		</view>
		<view class="product-book-con">
			二维码
		</view>
		<!-- 二维码 -->
		<!-- <QRcode :data="this.GET_MY.detailed"  v-if="this.GET_MY.detailed.instrucState === '1'"></QRcode>
		<view class="erwe" v-if="this.GET_MY.detailed.instrucState === '0'|| this.GET_MY.detailed.instrucState === '2'">
			您的说明书未发布</br>还没有生成说明书二维码哦~~
		</view> -->
		<view class="qrShare-list">
			<rQrCode 
			:dataList="GET_MY.detailed.qrImgs" 
			:longTapSave='true'
			:previewImage='true'
			:isSaveBtn='false'
			nextMargin='100px'
			marginLeft='38%'
			:qrState="GET_MY.detailed.instrucState"
			@tap-RQrCode='tapRQrCode'
			></rQrCode>
		</view>
		<view class="dibu">
			
		</view>
		<!-- 頁面底部功能按鍵 -->
		<view class="QRcode-sub">
			<view  @tap='goToTemplatePro' v-if="GET_MY.detailed.isPut!==1">
				<view>
					<image :src="bian"></image>
				</view>
				<view>编辑</view>
			</view>
			<view v-if="GET_MY.detailed.isPut == 1">
				<view style="background: #F5F5F5;">
					<image :src="bian2"></image>
				</view>
				<view style="color: #D2D2D2;">编辑</view>
			</view>
			<view @tap="gotoedit(id)" v-if="GET_MY.detailed.isPut!==1">
				<view>
					<image :src="wan"></image>
				</view>
				<view>完善</view>
			</view>
			<view  v-if="GET_MY.detailed.isPut == 1">
				<view style="background: #F5F5F5;">
					<image :src="wan2"></image>
				</view>
				<view style="color: #D2D2D2;">完善</view>
			</view>
			<view @tap="xiajiaadd()" v-if="GET_MY.detailed.instrucState == 1 && GET_MY.detailed.isPut !== 1">
				<view>
					<image :src="xias"></image>
				</view>
				<view>下架</view>
			</view>
			<view v-if="GET_MY.detailed.isPut == 1">
				<view style="background: #F5F5F5;">
					<image :src="shan2"></image>
				</view>
				<view style="color: #D2D2D2;">下架</view>
			</view>
			<view @tap="fabuadd()" v-if="GET_MY.detailed.instrucState == 2 || GET_MY.detailed.instrucState == 0">
				<view>
					<image :src="add"></image>
				</view>
				<view>发布</view>
			</view>
			<view v-if="GET_MY.detailed.instrucState == 1&&GET_MY.detailed.isPut == 0" @tap="tuig">
				<view>
					<image :src="tui"></image>
				</view>
				<view>推广</view>
			</view>
			<view v-if="GET_MY.detailed.instrucState == 2||GET_MY.detailed.instrucState == 0 || GET_MY.detailed.isPut == 1">
				<view style="background: #F5F5F5;">
					<image :src="tui2"></image>
				</view>
				<view style="color: #D2D2D2;">推广</view>
			</view>
			<!-- <view @tap="fenxiang()" v-if="this.GET_MY.detailed.instrucState == 1">
				<view>
					<image :src="feng"></image>
				</view>
				<view>分享</view>
			</view> -->
			<!-- <view v-if="this.GET_MY.detailed.instrucState == 0 || this.GET_MY.detailed.instrucState == 2">
				<view style="background: #F5F5F5;">
					<image :src="feng2"></image>
				</view>
				<view style="color: #D2D2D2;">分享</view>
			</view> -->
			<view @tap="deleadd()" v-if="GET_MY.detailed.isPut !== 1">
				<view>
					<image :src="shan"></image>
				</view>
				<view>删除</view>
			</view>
			<view v-if="GET_MY.detailed.isPut == 1">
				<view style="background: #F5F5F5;">
					<image :src="shan2"></image>
				</view>
				<view style="color: #D2D2D2;">删除</view>
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
								<swiper-item style="margin-left: 40%;" v-for="(item,index) in this.GET_MY.detailed.qrImgs" :key="index">
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
	import QRcode from './QRcodeandinquiry/QRcode';
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import { mapMutations,mapGetters } from 'vuex';
	import rQrCode from '@/components/common/RHX/rQrCode/rQrCode';
	export default {
		props:[
			'data',
			'dataList',
		],
		data() {
			return {
				array:[{
					mode: 'center',
					text: 'center：不缩放图片，只显示图片的中间区域'
				}],
				zan: this.Static+'my/zan.png',
				look: this.Static+'my/look.png',
				phone: this.Static+'my/phone.png',
				liu: this.Static+'my/liu.png',
				shou: this.Static+'my/shou.png',
				fen: this.Static+'my/fen.png',
				lists:[],
				yi: this.Static+'my/yi.png',
				add: this.Static+'my/add.png',
				shag: this.Static+'my/shag.png',
				xia: this.Static+'my/xia.png',
				wei: this.Static+'my/wei.png',
				peng: this.Static+'my/peng.png',
				bian: this.Static+'my/bianji.png',
				bian2: this.Static+'my/72209.png',
				wan: this.Static+'my/wanshang.png',
				wan2: this.Static+'my/xiajia.png',
				xias: this.Static+'my/xiajia.png',
				tui: this.Static+'my/tuiguang.png',
				tui2: this.Static+'my/tuiguang2.png',
				feng: this.Static+'my/fengxiang.png',
				feng2: this.Static+'my/fengxiang2.png',
				shan: this.Static+'my/shanchu.png',
				shan2: this.Static+'my/44.png',
				Mask:0,
				id:'',
				idd:'',
			}
		},
		components:{
			quickBtn,
			navigation,
			QRcode,
			rQrCode,
		},
		onLoad(ops) {
			uni.setNavigationBarTitle({
				title: this.i18n.product2
			});
			
		},
		created() {
			
			
		},
		mounted(){
			// this.GET_MY.detailed=this.dataList;
			console.log(this.GET_MY.detailed,'11111111111111111111111111111',this.data)
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 28) {
				return value.slice(0,28) + '...'
			  }
			  return value
			}
		},
		methods: {
			tuig(){
				console.log('触发投放商机按钮');
				uni.navigateTo({
					url: '/modules/aLittle/putInBusiness/putInBusinessList/putInList/putInList?id='+this.data
				});
			},
			goToTemplatePro(e) {
				console.log(this.dataList, 'to投放商机');
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
					id: this.dataList.tempId, // 模板id
					instrucCustType: this.dataList.instrucCustType, // 模板类型
					isMenu: this.dataList.isMenu, // 横向导航
					instrucId:  this.dataList.instrucId, // 说明书id
					lookUserId: lookUserId, // 浏览者
					creatorId: this.dataList.userId, // 说明书创建者
					instrucState: this.dataList.instrucState, // 说明书状态
					isPut: this.dataList.isPut
				};
				uni.navigateTo({
					url: '/modules/createBusiness/templatePro/templatePro?urlParams=' + this.urlCrypto(urlParams, 0)
				});
			},
			xiajiaadd(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc/isPublic/'+ this.data +'?instrucState=2', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.book();
							this.myproduct();
							this.product();
							this.Cus();
							this.inf();
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
			fabuadd(){
				console.log(this.dataList)
				let _this=this
				uni.showModal({
					title: '提示',
					content: '您确定要发布该说明书吗？',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							
							let params={
								context:_this.dataList.context,
								keylist:_this.dataList.keys,
								tempId:_this.dataList.tempId,
								userId:_this.dataList.userId,
								instrucCategory:_this.dataList.instrucCategory,
								instrucIntro:_this.dataList.instrucIntro,
								instrucState:_this.dataList.instrucState,
								instrucTitle:_this.dataList.instrucTitle,
								instrucCategoryStr:_this.dataList.instrucCategoryStr,
							}
							let paramsUrl=[params, 0];
							console.log(paramsUrl)
							uni.setStorageSync('urlParamsTemp', JSON.stringify(_this.urlCrypto(paramsUrl, 0))); // 缓存用户登录信息
							uni.navigateTo({
								url: '/modules/createBusiness/templateFinish/templateFinish'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			deleadd(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc/'+ this.data, //接口地址。
						// data: params,
						method: 'DELETE',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.myproduct();
							this.product();
							this.Cus();
							this.inf();
							uni.navigateBack({})
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
			book(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc/'+this.data, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.lists = response.data.content
							this.$store.commit('setdetailed', this.lists);
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
			myproduct(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content.list
							this.$store.commit('setproduct', this.list);
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
			product(){//产品
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1&instrucCustType=0', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.chan = response.data.content.list
							this.$store.commit('setchan', this.chan);
							
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
			Cus(){//定制
				console.log(123)
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1&instrucCustType=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							let ding=[];
							ding = response.data.content.list
							this.$store.commit('setding', ding);
							
							
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
			inf(){//资讯
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1&instrucCustType=2', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.zi = response.data.content.list
							this.$store.commit('setzi', this.zi);
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
					url:'/modules/InstructionsPrice/myproduct/product-book/dataReport/dataReport?id='+this.data
				})
			},
			gotoedit(e){
				console.log('to完善信息')
				uni.navigateTo({
					url:'/modules/InstructionsPrice/myproduct/product-book/QRcodeandinquiry/QRcode-list/QRcodelist-edit?id='+this.GET_MY.detailed.instrucId
				})
			},
			child(){//阻止遮罩层的事件冒泡
				
			},
			fenxiang(){
				console.log('分享说明书')
				this.Mask = 1;
			},
			boss(){
				this.Mask = 0;
			},
		},
		computed: {
			i18n () {
			  return this.$t('Howtoshow')  
			},
			...mapGetters(['GET_MY','GET_HOME', 'QUICKNAVCO'])
		},
	}
</script>

<style>
	.product-book{
		width: 100%;
		min-height: 100%;
	}
	.product-book-title{
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
		width: 30%;
		margin-left: 36%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
		float: left;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.product-book-header{
		width: 100%;
		height: 360upx;
		background: #FFFFFF;
		overflow: hidden;
	}
	.product-book-A{
		width: 92%;
		height: 240upx;
		margin: 20upx auto auto auto;
	}
	.product-book-image{
		width: 240upx;
		height: 240upx;
		float: left;
		position: relative;
	}
	.qrShare-list{
		position: relative;
		width: 690upx;
		height: 720upx;
		margin: -10upx auto;
		background: #F9F9F9;
		/* padding: -10upx 0; */
	}
	.dibu{
		width: 100%;
		height: 162upx;
	}
	.product-book-image>image:nth-of-type(1){
		width: 100%;
		height: 100%;
	}
	.tishis{
		width: 100upx;
		height: 100upx;
		position: absolute;
		top: 0;
		right: 0;
	}
	.product-book-zi{
		width: 430upx;
		height: 240upx;
		float: right;
		position: relative;
	}
	.product-book-ding{
		font-size: 14px;
		color: #2E2E30;
		line-height: 44upx;
		min-height: 44upx;
	}
	.product-book-zhong{
		font-size: 12px;
		color: #9B9B9B;
		line-height: 36upx;
		margin-top: 10upx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.product-book-time{
		font-size: 24upx;
		color: #9B9B9B;
		position: absolute;
		bottom: 0;
	}
	.product-book-B{
		width: 92%;
		height: 80upx;
		margin: 30upx auto auto auto;
		border-top: 2upx solid  #F5F5F5;
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
		margin-left: 24upx;
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
	}
	.product-book-BA>span{
		margin-left: 20upx;
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
	.QRcode-sub{
		width: 100%;
		height: 162upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.QRcode-sub>view{
		width: 16%;
		height: 100%;
		text-align: center;
		float: left;
		margin-left: 22upx;
	}
	.QRcode-sub>view>view:nth-child(1){
		width: 72upx;
		height: 72upx;
		border-radius: 50%;
		background: #F0FCFA;
		margin: 20upx auto auto auto;
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
	.erwe{
		width: 100%;
		text-align: center;
		height: 100upx;
		font-size: 12px;
		color: #9B9B9B;
		line-height: 36upx;
		padding-top: 290upx;
	}
</style>
