<template>
	<view class="Purchase-aggA">
		<view class="Purchase-listA" @tap="gotoPurchasedetails(item.purcId)" v-for="(item,index) in arr" :key="index" v-if="item.imgList.length!=1">
			<!-- 采购中 -->
			<image class="wimage" :src="wa" v-if="item.purcState ==1"></image>
			<!-- 待发布 -->
			<image class="wimage" :src="wb" v-if="item.purcState ==0"></image>
			<!-- 已停止 -->
			<image class="wimage" :src="wc" v-if="item.purcState ==2"></image>
			<!-- 已完成 -->
			<image class="wimage" :src="yiover" v-if="item.purcState ==3"></image>
			<!-- 已下架 -->
			<image class="wimage" :src="xia" v-if="item.purcState ==4"></image>
			<view class="Purchase-listA-zi">{{item.purcTitle|ellipsis}}</view>
			<view class="Purchase-listA-edit">
				<span v-if="item.purcSpec!==''">{{item.purcSpec}}</span>
				<span v-if="item.purcInvo==0">报价不含税</span>
				<span v-if="item.purcInvo==1">报价含税</span>
				<span v-if="item.purcFrei==0">报价不含运费</span>
				<span v-if="item.purcFrei==1">报价包含运费</span>
			</view>
			<view class="Purchase-listA-img" v-if="item.imgList.length!==0">
				<image v-for="(ites,index) in item.imgList" :key="index" :src="ites" mode=""></image>
			</view>
			<view class="Purchase-listA-time">
				<view>{{item.createTimeStr}}</view>
				<view v-if="item.purcState !=0"><image :src="Images" v-if="item.pcodeStr!==''"></image><span>{{item.pcodeStr}}{{item.ccodeStr}}</span></view>
				<view v-if="item.purcState !=0"><image :src="Image" v-if="item.purcEndTimeStr!==''"></image><span><span>{{item.purcEndTimeStr}}</span></span></view>
			</view>
			<view class="myproduct-list-edit">
				<view class="product-book-BA one">
					<image :src="look"></image>
					<span>{{item.infoCount}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="phone"></image>
					<span>{{item.telCount}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="liu"></image>
					<span>{{item.chatCount}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="zan"></image>
					<span>{{item.likeCnt}}</span>
				</view>
				<view class="product-book-BA shou">
					<image :src="shou"></image>
					<span>{{item.followCount}}</span>
				</view>
				<view class="product-book-BA right shou">
					<image :src="fen"></image>
					<span>{{item.shareCnt}}</span>
				</view>
			</view>
		</view>
		<view class="Purchase-listB" @tap="gotoPurchasedetails(ite.purcId)" v-for="(ite,index) in arr" :key="index" v-if="ite.imgList.length==1">
			<!-- 采购中 -->
			<image class="wimage" :src="wa" v-if="ite.purcState ==1"></image>
			<!-- 待发布 -->
			<image class="wimage" :src="wb" v-if="ite.purcState ==0"></image>
			<!-- 已停止 -->
			<image class="wimage" :src="wc" v-if="ite.purcState ==2"></image>
			<!-- 已完成 -->
			<image class="wimage" :src="yiover" v-if="ite.purcState ==3"></image>
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
					<view v-if="ite.purcState !=0"><image :src="Images" v-if="ite.pcodeStr!==''"></image><span>{{ite.pcodeStr}}{{ite.ccodeStr}}</span></view>
					<view v-if="ite.purcState !=0"><image :src="Image" v-if="ite.purcEndTimeStr!==''"></image><span><span>{{ite.purcEndTimeStr}}</span></span></view>
				</view>
			</view>
			<view class="myproduct-list-edit">
				<view class="product-book-BA one">
					<image :src="look"></image>
					<span>{{ite.infoCount}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="phone"></image>
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
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				Images: this.Static+'my/Images.png',
				Image: this.Static+'my/Image.png',
				zan: this.Static+'my/zan.png',
				look: this.Static+'my/look.png',
				phone: this.Static+'my/phone.png',
				liu: this.Static+'my/liu.png',
				shou: this.Static+'my/shou.png',
				fen: this.Static+'my/fen.png',
				arr:[],
				wa: this.Static+'my/w-a.png',
				wb: this.Static+'my/w-b.png',
				wc: this.Static+'my/w-c.png',
				wd: this.Static+'my/w-d.png',
				yiover: this.Static+'my/yiover.png',
				xia: this.Static+'my/xia.png',
			}
		},
		watch: {
			GET_MY: {
				handler(a, b) {
					console.log(a)
					this.arr=a.PurchaseB
				},
				deep: true
			}
		},
		created(){
			this.arr=this.GET_MY.PurchaseB
			console.log(this.arr)
		},
		mounted(){
			
		},
		methods: {
			gotoPurchasedetails(e){
				console.log('to我的采购-详情')
				uni.navigateTo({
					url: '/modules/InstructionsPrice/Purchase/Purchase-details/Purchase-details?id='+e,
				});
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
	.Purchase-aggA{
		width: 100%;
		min-height: 100%;
	}
	.Purchase-listA{
		width: 100%;
		min-height: 288upx;
		background: #FFFFFF;
		margin-top: 20upx;
		position: relative;
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
	.Purchase-listA-img{
		width: 91%;
		height: 166upx;
		margin: 42upx auto auto auto;
		overflow: hidden;
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
		margin-left: 40upx;
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
		margin-left:10upx;
	}
	.product-book-BA>span{
		margin-left: 28upx;
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
		margin-top: 20upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.Purchase-listB-header-edit>span{
		font-size: 24upx;
		color: #9B9B9B;
		padding: 4upx 14upx 4upx 14upx;
		background: #F5F5F5;
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
		margin-left: 40upx;
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
</style>
