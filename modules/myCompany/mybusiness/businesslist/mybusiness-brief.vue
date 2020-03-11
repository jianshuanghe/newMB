<template>
	<view class="mybusiness-brief">
		<!-- 简介 -->
		<view class="qiye-jie" v-if="datas.companyIntro!==''">企业介绍</view>
		<view v-if="datas.companyIntro!==''" class="mybusiness-brief-con" :class="fold ? 'fold' : 'unfold'">
			{{datas.companyIntro}}
		</view>
		<view class="show" @tap="handleFold" v-if="fold&&datas.companyIntro!==''">查看更多 <image :src="downArrow"></image></view>
		<view class="show" @tap="handleFold" v-if="!fold&&datas.companyIntro!==''">收起全部<image :src="uparrow"></image></view>
		<view class="mybusiness-brief-code" :class="datas.companyIntro==''?'codex':''" v-if="datas.wechatQrImg!==''||datas.contactTelphone==''||datas.addressDetail!==''||datas.contactEmail!==''">
			<view class="brief-newcode" v-if="datas.wechatQrImg!==''">
				<view class="brief-newcode-one">
					<view>微信公众号</view>
					<view>长按识别二维码</view>
				</view>
				<view class="brief-newcode-two">
					<image :src="datas.wechatQrImg"></image>
				</view>
			</view>
			<view class="brief-newcode" v-if="datas.contactTelphone!==''">
				<view class="brief-newcode-one">
					<view>练习电话</view>
					<view>{{datas.contactTelphone}}<span style="padding-left: 20upx;" @tap="playphone(datas.contactTelphone)">拨打电话</span></view>
				</view>
			</view>
			<view class="brief-newcode" v-if="datas.contactEmail!==''">
				<view class="brief-newcode-one">
					<view>联系邮箱</view>
					<view>{{datas.contactEmail}}</view>
				</view>
			</view>
			<view class="brief-newcode" v-if="datas.addressDetail!==''">
				<view class="brief-newcode-one">
					<view>联系地址</view>
					<view>{{datas.addressDetail}}
						<!-- #ifdef MP -->
						<span style="padding-left: 20upx;" @tap="copyBT(datas.addressDetail);">复制地址</span>
						<!-- #endif -->
					</view>
				</view>
			</view>
		</view>
		<!-- 底部按钮 -->
		<view class="mybusiness-supply-bot">
			<view class="mybusiness-supply-Customer" @tap="phone(datas.userPhone)" v-if="String(listid)!==String(id)">联系商家</view>
			<view class="mybusiness-supply-Customer" @tap="clickBasicInforEdit" v-if="String(listid)==String(id)">编辑</view>
			<!-- <view class="mybusiness-supply-contact">联系商家</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		props:['datas','listid'],
		data() {
			return {
				fold:true,
				erweima:this.Static+'news/erweima.png',
				downArrow:this.Static+'my/downArrow.png',
				uparrow:this.Static+'my/up-arrow.png',
				erweimamo:this.Static+'my/erweimamo.png',
				list:[],
				id:'',
			}
		},
		created() {
			let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
			
			this.id=landRegistLG.user.id;
			console.log(this.id,this.listid,this.datas);
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
			playphone(e){
				uni.makePhoneCall({
					phoneNumber: e //仅为示例
				});
			},
			addpick(e){
				console.log(e)
				if (this.isSaveBtn === true) {
					this.dataLists.map((items, index)=>{
						let url = "https://" + items.split('://')[1];
						items = url;
						if (Number(index) === Number(this.tabIndex)) {
							uni.downloadFile({
								url: items,
								success: function (res) {
									console.log(res, '||||||||||||||')
									// h5
									// #ifdef H5
									var url = res.tempFilePath;                            // 获取图片地址
									var a = document.createElement('a');          // 创建一个a节点插入的document
									var event = new MouseEvent('click')           // 模拟鼠标click点击事件
									a.download = '说明书二维码'                  // 设置a节点的download属性值
									a.href = url;                                 // 将图片的src赋值给a节点的href
									a.dispatchEvent(event);
									uni.showToast({
										"title":"保存成功",
										duration:1000
									})
									// #endif
									// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU || MP-ALIPAY
									// 小程序
									uni.saveImageToPhotosAlbum({        // 保存图片到本地
										filePath: res.tempFilePath,     // 图片临时路径
										success: function () { 
											uni.showToast({
												"title":"保存成功",
												duration:1000
											})
										},
									})
									// #endif
								}
							});
						}
					});
				};
			},
			copyBT(e){
				uni.setClipboardData({
					data: e,
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
		margin: 10upx auto auto;
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
		min-height: 300upx;
		margin-top: 90upx;
		padding-bottom: 100upx;
	}
	.codex{
		margin-top: 20upx;
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
	.brief-newcode{
		width: 90%;
		height: 78px;
		margin: 0 auto;
	}
	.brief-newcode-one{
		width: 60%;
		height: 100%;
		float: left;
	}
	.brief-newcode-one>view:nth-of-type(1){
		font-size: 32upx;
		color: #2E2E30;
		padding-top: 25upx;
		font-weight: bold;
	}
	.brief-newcode-one>view:nth-of-type(2){
		font-size: 28upx;
		color: #2E2E30;
	}
	.brief-newcode-one>view:nth-of-type(2)>span{
		color: #02C2A2;
	}
	.qiye-jie{
		width: 90%;
		height: 32upx;
		font-size: 32upx;
		color: #2E2E30;
		line-height: 32upx;
		margin: 40upx auto auto auto;
		font-weight: bold;
	}
	.brief-newcode-two{
		width: 156upx;
		height: 156upx;
		float: right;
		background-image: url('http://style.iambuyer.com/mbc/news/erweima.png');
		background-size: 100% 100%;
		text-align: center;
		line-height: 156upx;
	}
	.brief-newcode-two>image{
		width: 85%;
		height: 85%;
		padding-top: 12upx;
	}
</style>
