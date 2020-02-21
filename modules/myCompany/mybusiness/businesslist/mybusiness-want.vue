<template>
	<!-- 求购 -->
	<view class="mybusiness-want">
		<view v-for="(ite,index) in arr" :key="index" >
			<view class="Purchase-listA" @tap="gotoPurchasedetails(ite)" v-if="ite.imgList.length!=1">
				<!-- 采购中 -->
				<image class="wimage" :src="wa" v-if="ite.purcState ==1"></image>
				<!-- 待发布 -->
				<image class="wimage" :src="wb" v-if="ite.purcState ==0"></image>
				<!-- 已停止 -->
				<image class="wimage" :src="wc" v-if="ite.purcState ==2"></image>
				<!-- 已完成 -->
				<image class="wimage" :src="wd" v-if="ite.purcState ==3"></image>
				<!-- 已下架 -->
				<image class="wimage" :src="xia" v-if="ite.purcState ==4"></image>
				<view class="Purchase-listA-zi">{{ite.purcTitle|ellipsis}}</view>
				<view class="Purchase-listA-edit">
					<span v-if="ite.purcSpec!==''">{{ite.purcSpec}}</span>
					<span v-if="ite.purcInvo==0">报价不含税</span>
					<span v-if="ite.purcInvo==1">报价含税</span>
					<span v-if="ite.purcFrei==0">报价不含运费</span>
					<span v-if="ite.purcFrei==1">报价包含运费</span>
				</view>
				<view class="Purchase-listA-img" v-if="ite.imgList.length!==0">
					<image v-for="(ites,index) in ite.imgList" :key="index" :src="ites" mode=""></image>
				</view>
				<view class="Purchase-listA-time">
					<view>{{ite.createTimeStr}}</view>
					<view><image :src="Images" v-if="ite.pcodeStr!==''"></image><span>{{ite.pcodeStr}}{{ite.ccodeStr}}</span></view>
					<view v-if="ite.purcEndTimeStr!==''"><image :src="Image"></image><span><span>{{ite.purcEndTimeStr}}</span></span></view>
				</view>
				<view class="myproduct-list-edit">
					<view class="product-book-BA one">
						<image :src="look"></image>
						<span>{{ite.infoCount}}</span>
					</view>
					<view class="product-book-BA">
						<image :src="phones"></image>
						<span>{{ite.telCount}}</span>
					</view>
					<view class="product-book-BA">
						<image :src="liu"></image>
						<span>{{ite.chatCount}}</span>
					</view>
					<view class="product-book-BA">
						<image :src="zan"></image>
						<span>{{ite.likeCnt}}</span>
					</view>
					<view class="product-book-BA shou">
						<image :src="shou"></image>
						<span>{{ite.followCount}}</span>
					</view>
					<view class="product-book-BA right shou">
						<image :src="fen"></image>
						<span>{{ite.shareCnt}}</span>
					</view>
				</view>
			</view>
			<view class="Purchase-listB" @tap="gotoPurchasedetails(ite)" v-if="ite.imgList.length==1">
				<!-- 采购中 -->
				<image class="wimage" :src="wa" v-if="ite.purcState ==1"></image>
				<!-- 待发布 -->
				<image class="wimage" :src="wb" v-if="ite.purcState ==0"></image>
				<!-- 已停止 -->
				<image class="wimage" :src="wc" v-if="ite.purcState ==2"></image>
				<!-- 已完成 -->
				<image class="wimage" :src="wd" v-if="ite.purcState ==3"></image>
				<!-- 已下架 -->
				<image class="wimage" :src="xia" v-if="ite.purcState ==4"></image>
				<view class="Purchase-listB-header">
					<view class="Purchase-listB-header-img">
						<image :src="ite.imgList[0]" mode=""></image>
					</view>
					<view class="Purchase-listB-header-zi">{{ite.purcTitle|ellipsis}}</view>
					<view class="Purchase-listB-header-edit">
						<span v-if="ite.purcSpec!==''">{{ite.purcSpec}}</span>
						<span v-if="ite.purcInvo==0">报价不含税</span>
						<span v-if="ite.purcInvo==1">报价含税</span>
						<span v-if="ite.purcFrei==0">报价不含运费</span>
						<span v-if="ite.purcFrei==1">报价包含运费</span>
					</view>
					<view class="Purchase-listB-header-time">
						<view>{{ite.createTimeStr}}</view>
						<view><image :src="Images" v-if="ite.pcodeStr!==''"></image><span>{{ite.pcodeStr}}{{ite.ccodeStr}}</span></view>
						<view v-if="ite.purcEndTimeStr!==''"><image :src="Image"></image><span><span>{{ite.purcEndTimeStr}}</span></span></view>
					</view>
				</view>
				<view class="myproduct-list-edit">
					<view class="product-book-BA one">
						<image :src="look"></image>
						<span>{{ite.infoCount}}</span>
					</view>
					<view class="product-book-BA">
						<image :src="phones"></image>
						<span>{{ite.telCount}}</span>
					</view>
					<view class="product-book-BA">
						<image :src="liu"></image>
						<span>{{ite.chatCount}}</span>
					</view>
					<view class="product-book-BA">
						<image :src="zan"></image>
						<span>{{ite.likeCnt}}</span>
					</view>
					<view class="product-book-BA shou">
						<image :src="shou"></image>
						<span>{{ite.followCount}}</span>
					</view>
					<view class="product-book-BA right shou">
						<image :src="fen"></image>
						<span>{{ite.shareCnt}}</span>
					</view>
				</view>
			</view>
		</view>
		<view class="meirenkanwo" v-if="arr.length == 0">
			<image :src="kong" mode=""></image>
			暂无！
		</view>
		<!-- 底部按钮 -->
		<view class="mybusiness-want-bot">
			<view class="mybusiness-supply-Customer" @tap="phone(datas.userPhone)" v-if="String(listid)!==String(id)">联系商家</view>
			<view class="mybusiness-supply-Customer" @tap="clickBasicInforEdit" v-if="String(listid)==String(id)">编辑</view>
			<!-- <view class="mybusiness-want-contact">联系商家</view> -->
		</view>
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				Images:this.Static+'my/Images.png',
				Image:this.Static+'my/Image.png',
				zan:this.Static+'my/zan.png',
				look:this.Static+'my/look.png',
				phones:this.Static+'my/phone.png',
				liu:this.Static+'my/liu.png',
				shou:this.Static+'my/shou.png',
				fen:this.Static+'my/fen.png',
				arr:[],
				wa:this.Static+'my/w-a.png',
				wb:this.Static+'my/w-b.png',
				wc:this.Static+'my/w-c.png',
				wd:this.Static+'my/w-d.png',
				xia:this.Static+'my/xia.png',
				id:'',
				kong:this.Static+'my/kong.png',
			}
		},
		
		watch: {
			GET_MY: {
				handler(a, b) {
					console.log(a)
					this.arr=a.PurchaseA
				},
				deep: true
			}
		},
		created(){
			let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
			
			this.id=landRegistLG.user.id;
			console.log(this.id,this.listid);
			// this.arr=this.GET_MY.PurchaseA
			// console.log(this.arr)
			this.Purchas();
		},
		props:['listid','datas'],
		mounted(){
			
		},
		methods: {
			clickBasicInforEdit() {
				console.log('基本信息编辑');
				uni.navigateTo({
					url:'/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor'
				})
			},
			phone(e){
				uni.makePhoneCall({
					phoneNumber: e //仅为示例
				});
			},
			gotoPurchasedetails(e){
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				}else{
					console.log(e, '----------------e-跳转详情-----------------')
					let a = e.type;
					let b = e.id;
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
						sourceTemp: 2, // 说明书来源
						aiListTemp: 1, // 是否展示ai
						purcId:  e.purcId, // 说明书id
						lookUserId: lookUserId, // 浏览者
						creatorId: e.userId, // 说明书创建者
						purcState: e.purcState ,// 说明书状态
						instrucCustType:e.instCustType,
					};
					console.log(urlParams)
					uni.navigateTo({
						url: '/modules/publishPurchase/publishPurchase?urlParams=' + this.urlCrypto(urlParams, 0)
					});
				}
				
			},
			Purchas(){//全部
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/purc/selectList?page=1&userId='+this.listid, //接口地址。
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
				}else{
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/purc/selectList?page=1&userId='+this.listid, //接口地址。
						// data: params,
						method: 'GET',
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
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 15) {
				return value.slice(0,15) + '...'
			  }
			  return value
			}
		},
		computed: {
			...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
	}
	
</script>

<style>
	.mybusiness-want{
		width: 100%;
		min-height: 45%;
		background: #FFFFFF;
		padding-bottom: 140upx;
	}
	
	.tiancong{
		width: 100%;
		height: 120upx;
	}
	.mybusiness-want-bot{
		width: 100%;
		height: 120upx;
		border-top: 2upx solid #F5F5F5;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
	}
	.mybusiness-want-Customer{
		width: 95%;
		height:90upx ;
		background: #02C2A2;
		margin: 15upx auto;
		border-radius: 2px;
		font-size: 32upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 90upx;
	}
	
	.Purchase-listA{
		width: 100%;
		min-height: 288upx;
		background: #FFFFFF;
		margin-top: 20upx;
		position: relative;
	}
	.meirenkanwo{
		width: 330upx;
		height: 280upx;
		display: block;
		margin: 0 auto auto auto;
		font-size: 28upx;
		text-align: center;
		color: #9B9B9B;
		clear: both;
	}
	.meirenkanwo>image {
		width: 92%;
		height: 80%;
		padding-top: 120upx;
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
		margin: 16upx auto;
	}
	.Purchase-listA-edit>span{
		font-size: 24upx;
		color: #FE9D08;
		padding: 4upx 14upx 4upx 14upx;
		background: #FFF7E5;
		border-radius: 4upx;
		display: block;
		float: left;
		margin-left: 10upx;
	}
	.Purchase-listA-edit>span:nth-of-type(1){
		margin-left: 0;
	}
	.Purchase-listA-img{
		width: 91%;
		height: 166upx;
		margin: 16upx auto auto auto;
	}
	.Purchase-listA-img>image{
		width: 220upx;
		height: 166upx;
		margin-left: 10upx;
	}
	.Purchase-listA-img>image:nth-of-type(1){
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
		font-size: 24upx;
		color: #9B9B9B;
		margin-left: 100upx;
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
	}
	.product-book-BA>span{
		margin-left: 10upx;
		display: block;
		float: left;
	}
	.Purchase-listB{
		width: 100%;
		min-height: 340upx;
		background: #FFFFFF;
		margin-top: 20upx;
		position: relative;
	}
	.Purchase-listB-header{
		width: 91%;
		height: 282upx;
		margin: 0 auto;
	}
	.Purchase-listB-header-img{
		width: 226upx;
		height: 166upx;
		padding-top: 30upx;
		float: left;
	}
	.Purchase-listB-header-img>image{
		width: 100%;
		height: 100%;
	}
	.Purchase-listB-header-zi{
		float: left;
		font-size: 32upx;
		width: 436upx;
		color: #2E2E30;
		line-height: 48upx;
		padding-top: 30upx;
		margin-left: 20upx;
	}
	.Purchase-listB-header-edit{
		width: 436upx;
		height: 50upx;
		float: left;
		margin-left: 20upx;
		margin-top: 16upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.Purchase-listB-header-edit>span{
		font-size: 24upx;
		color: #FE9D08;
		padding: 4upx 14upx 4upx 14upx;
		background: #FFF7E5;
		border-radius: 4upx;
		display: block;
		float: left;
		margin-left: 10upx;
	}
	.Purchase-listB-header-edit>span:nth-of-type(1){
		margin-left: 0;
	}
	.Purchase-listB-header-time{
		width: 100%;
		height: 30upx;
		padding-top: 30upx;
		line-height: 30upx;
		clear: both;
	}
	.Purchase-listB-header-time>view:nth-of-type(1){
		font-size: 24upx;
		color: #9B9B9B;
		float: left;
	}
	.Purchase-listB-header-time>view:nth-of-type(2){
		float: left;
		font-size: 24upx;
		color: #9B9B9B;
		margin-left: 100upx;
	}
	.Purchase-listB-header-time>view:nth-of-type(2)>image{
		width: 22upx;
		height: 22upx;
		display: block;
		float: left;
		margin-top: 6upx;
	}
	.Purchase-listB-header-time>view:nth-of-type(2)>span{
		display: block;
		float: left;
		margin-top: -5upx;
		margin-left: 10upx;
	}
	.Purchase-listB-header-time>view:nth-of-type(3){
		float: right;
		font-size: 24upx;
		color: #9B9B9B;
	}
	.Purchase-listB-header-time>view:nth-of-type(3)>image{
		width: 22upx;
		height: 22upx;
		display: block;
		float: left;
		margin-top: 6upx;
	}
	.Purchase-listB-header-time>view:nth-of-type(3)>span{
		display: block;
		float: left;
		margin-top: -5upx;
		margin-left: 10upx;
	}
	.Purchase-listB-header-time>view:nth-of-type(3)>span>span{
		color: #02C2A2;
	}
	.mybusiness-supply-Customer{
		width: 95%;
		height:90upx ;
		background: #02C2A2;
		margin: 15upx auto;
		border-radius: 2px;
		font-size: 32upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 90upx;
	}
</style>
