<template>
	<view class="mybusiness-brief">
		<!-- 简介 -->
		<view class="mybusiness-brief-con" :class="fold ? 'fold' : 'unfold'">
			{{data.companyIntro}}
		</view>
		<view class="show" @tap="handleFold" v-if="fold">查看更多 <image :src="downArrow"></image></view>
		<view class="show" @tap="handleFold" v-if="!fold">收起全部<image :src="uparrow"></image></view>
		<view class="mybusiness-brief-code">
			<view class="mybusiness-brief-codes">
				<view class="mybusiness-brief-codes-one">
					<view class="mybusiness-brief-codes-er">
						<image :src="erweima" class="erweima"></image>
						<view class="mybusiness-brief-codes-er-img">
							<image :src="data.wechatQrImg" v-if="data.wechatQrImg!==''"></image>
							<image :src="erweimamo" mode="" v-if="data.wechatQrImg==''"></image>
						</view>
					</view>
				</view>
				<view class="mybusiness-brief-codes-two">
					长按识别图中二维码<br/>
					若无法识别，请复制链接在微信中打开
				</view>
			</view>
			<view class="mybusiness-brief-Tips">
				<view>{{data.contactTelphone}}</view>
				<view>{{data.contactEmail}}</view>
				<view>
					<text>{{data.addressDetail}}</text>
					<!-- 复制功能在h5中不适用 -->
					<!-- #ifdef MP -->
					<span class="mybusiness-brief-Tipss" @tap="copyBT();">复制</span>
					<!-- #endif -->
					
				</view>
			</view>
		</view>
		<!-- 底部按钮 -->
		<view class="mybusiness-supply-bot">
			<view class="mybusiness-supply-Customer" @tap="phone(data.userPhone)" v-if="String(this.listid)!==String(this.id)">联系商家</view>
			<view class="mybusiness-supply-Customer" @tap="clickBasicInforEdit" v-if="String(this.listid)==String(this.id)">编辑</view>
			<!-- <view class="mybusiness-supply-contact">联系商家</view> -->
		</view>
	</view>
</template>

<script>
	import erweima from '@/static/mbcImg/news/erweima.png';
	import downArrow from '@/static/mbcImg/my/downArrow.png';
	import uparrow from '@/static/mbcImg/my/up-arrow.png';
	import erweimamo from '@/static/mbcImg/my/erweimamo.png';
	export default {
		props:['data','listid'],
		data() {
			return {
				fold:true,
				erweima:erweima,
				downArrow:downArrow,
				uparrow:uparrow,
				erweimamo:erweimamo,
				list:[],
				id:'',
			}
		},
		created() {
			let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
			
			this.id=landRegistLG.user.id;
			console.log(this.id,this.listid);
		},
		methods:{
			clickBasicInforEdit() {
				console.log('基本信息编辑');
				uni.navigateTo({
					url:'/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor'
				})
			},
			handleFold(){
				this.fold = !this.fold
			},
			phone(e){
				uni.makePhoneCall({
					phoneNumber: e //仅为示例
				});
			},
			copyBT(){
				uni.setClipboardData({
					data: '北京市昌平区沙河镇七里渠慧聪园总部基地',
					success: function () {
						console.log('复制成功');
					}
				});
			}
		}
		
	}
</script>

<style>
	.mybusiness-brief{
		width: 100%;
		background: #FFFFFF;
		padding: 0.1upx;
	}
	.mybusiness-brief-con{
		font-size: 14px;
		color: #5D5D5D;
		width: 90%;
		margin: 50upx auto auto;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
	}
	.fold{
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.show{
		font-size: 26upx;
		color: #02C2A2;
		position: absolute;
		right: 40upx;
		margin-top:10upx ;
	}
	.show>image{
		width: 20upx;
		height: 20upx;
		margin-left: 8upx;
	}
	.mybusiness-brief-code{
		width: 100%;
		height: 1000upx;
	}
	.mybusiness-brief-codes{
		width: 480upx;
		height: 602upx;
		border: 2upx solid #E2E2E2;
		margin: 100upx auto auto;
	}
	.mybusiness-brief-codes-one{
		width: 100%;
		height: 480upx;
		border-bottom: 2upx solid #E2E2E2;
		overflow: auto;
	}
	.mybusiness-brief-codes-two{
		width: 100%;
		height: 120upx;
		text-align: center;
		/* line-height: 120upx; */
		font-size: 12px;
		color: #02C2A2;
		padding-top: 20upx;
	}
	.mybusiness-brief-Tips{
		margin-top: 88upx;
		width: 100%;
		height: 200upx;
		font-size: 26upx;
		color: #2E2E30;
		text-align: center;
	}
	.mybusiness-brief-Tipss{
		color: #02C2A2;
		margin-left: 10upx;
	}
	
	.mybusiness-brief-codes-er{
		width: 80%;
		height: 80%;
		margin: 50upx auto auto auto;
		position: relative;
	}
	.erweima{
		width: 100%;
		height: 100%;
	}
	.mybusiness-brief-codes-er-img{
		width: 85%;
		height: 85%;
		position: absolute;
		top:28upx;
		left: 30upx;
	}
	.mybusiness-brief-codes-er-img>image{
		width: 100%;
		height: 100%;
	}
	.mybusiness-supply-bot{
		width: 100%;
		height: 120upx;
		border-top: 2upx solid #F5F5F5;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
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
