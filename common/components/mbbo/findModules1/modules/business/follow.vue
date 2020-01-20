<template>
	<view class="find-Purchase">
		<view v-for="(item,index) in arr" :key="index">
			<view class="find-Purchase-head" v-if="item.userAuth==1" @tap="gotocomp(item.userId)">
				<view class="find-Purchase-head-one">
					<image :src="item.userLogo"></image>
				</view>
				<view class="find-Purchase-head-two">
					<view>{{item.userName}}</view>
					<view>{{item.userTypeStr}}</view>
				</view>
				<view class="find-Purchase-head-thr" v-if="item.type!=='invest'&&item.isUserFollow==0"><span>+</span> 关注</view>
				<view class="find-Purchase-head-thr" v-if="item.type!=='invest'&&item.isUserFollow==1">已关注</view>
			</view>
			<view class="find-Purchase-con" @tap="tiaozhuan(item.type,item.id)">
				<view class="find-Purchase-con-one">
					<view class="find-Purchase-conA" v-if="item.title!==''">
						<view>{{item.title |ellipsis}}</view>
						<view v-if="item.purcState==1&&item.type=='purc'">采购中</view>
						<view v-if="item.purcState==0&&item.type=='purc'" style="color: #9B9B9B;">待发布</view>
						<view v-if="item.purcState==2&&item.type=='purc'" style="color: #9B9B9B;">已停止</view>
						<view v-if="item.purcState==3&&item.type=='purc'" style="color: #9B9B9B;">已完成</view>
						<view v-if="item.purcState==4&&item.type=='purc'" style="color: #9B9B9B;">已下架</view>
					</view>
					<view class="find-Purchase-conB" v-if="item.typeNames.length!==0">
						<view v-for="(ites,index) in item.typeNames" :key="index">{{ites}}</view>
					</view>
					<view class="find-Purchase-conC">
						<image :src="locat" mode="" v-if="item.sendAddr!==''"></image>
						<span v-if="item.sendAddr!==''">{{item.sendAddr}}</span>
						<image :src="time" mode="" v-if="item.type=='purc'"></image>
						<span v-if="item.type=='purc'">{{item.endTimeStr}}</span>
					</view>
					<!-- 当有三张图片时 -->
					<view class="find-Purchase-con-img" v-if="item.type=='inst'&&item.instStyleType==2||item.type=='purc'&&item.instStyleType==2">
						<image :src="item.banner01" mode=""></image>
						<image :src="item.banner02" mode=""></image>
						<image :src="item.banner03" mode=""></image>
					</view>
					<!-- 一张大图 -->
					<view class="find-Purchase-con-image" v-if="item.type=='inst'&&item.instStyleType==0||item.type=='invest'&&item.banner01!==''">
						<image :src="item.banner01"></image>
					</view>
					<view class="find-Purchase-conE" v-if="item.type=='inst'">{{item.moneyStr}}</view>
					<view class="find-Purchase-conD" v-if="item.type!=='compService'">
						<view v-if="item.labelStr=='供应'" style="color: #02C2A2;border-color: #02C2A2;">{{item.labelStr}}</view>
						<view v-if="item.labelStr=='资讯'" style="color:#3893FF;border-color: #3893FF;">{{item.labelStr}}</view>
						<view v-if="item.labelStr=='资本'" style="color:#9B9B9B;border-color: #9B9B9B;">{{item.labelStr}}</view>
						<view v-if="item.labelStr=='采购'">{{item.labelStr}}</view>
						<view>{{item.createTimeStr}}</view>
					</view>
					<div class="location" v-if="item.type=='compService'">
						<div class="loca-text left">{{item.slogan|ellipsiss}}</div>
						<div class="clear"></div>
					</div>
					<div class="price" v-if="item.type=='compService'">
						<p class="price-text">¥{{item.moneyStr}}/{{i18n.month}}</p>
					</div>
					<div class="member-price" v-if="item.type=='compService'">
						<p class="member-price-text">会员最低价 ¥{{item.vipMoneyStr}}/{{i18n.month}}</p>
					</div>
				</view>
				<view class="find-Purchase-con-two" v-if="item.type=='news'||item.type=='compService'||item.type=='purc'&&item.purcStyleType==1||item.type=='inst'&&item.instStyleType==1">
					<image :src="item.banner01" v-if="item.type=='news'||item.type=='compService'||item.type=='purc'&&item.purcStyleType==1||item.type=='inst'&&item.instStyleType==1"></image>
					<view v-if="item.type=='inst'&&item.instStyleType==3">立即联系</view>
				</view>
			</view>
			<!-- 除采购 资本 企业服务外 -->
			<view class="myproduct-list-edit" v-if="item.type!=='compService'&&item.type!=='invest'&&item.type!=='purc'">
				<!-- 看过 -->
				<view class="product-book-BA one" v-if="item.isInfo==0">
					<image :src="look"></image>
					<span>{{item.infoCount}}</span>
				</view>
				<view class="product-book-BA one" v-if="item.isInfo==1">
					<image :src="looks"></image>
					<span>{{item.infoCount}}</span>
				</view>
				<!-- 电话 -->
				<view class="product-book-BA" @tap="playphone(item.userPhone)" v-if="item.isTel==0">
					<image :src="phone"></image>
					<span>{{item.telCount}}</span>
				</view>
				<view class="product-book-BA" @tap="playphone(item.userPhone)" v-if="item.isTel==1">
					<image :src="phones"></image>
					<span>{{item.telCount}}</span>
				</view>
				<!-- 留言 -->
				<view class="product-book-BA" v-if="item.isMsg==0" @tap="liuyan(item.id,item.type)">
					<image :src="liu"></image>
					<span>{{item.msgCount}}</span>
				</view>
				<view class="product-book-BA" v-if="item.isMsg==1" @tap="liuyan(item.id,item.type)">
					<image :src="lius"></image>
					<span>{{item.msgCount}}</span>
				</view>
				<!-- 点赞 -->
				<view class="product-book-BA" v-if="item.isLike==0" @tap="dianzan(item.id,item.type,item.likeCount)">
					<image :src="zan"></image>
					<span>{{item.likeCount}}</span>
				</view>
				<view class="product-book-BA" v-if="item.isLike==1">
					<image :src="zanss"></image>
					<span>{{item.likeCount}}</span>
				</view>
				<!-- 收藏 -->
				<view class="product-book-BA shou" v-if="item.isFollow==0" @tap="shoucang(item.id,item.type)">
					<image :src="shou"></image>
					<span>{{item.followCount}}</span>
				</view>
				<view class="product-book-BA shou" v-if="item.isFollow==1" @tap='shoucangs(item.id,item.type)'>
					<image :src="shous"></image>
					<span>{{item.followCount}}</span>
				</view>
				<!-- 分享 -->
				<view class="product-book-BA right shou" v-if="item.isShare==0">
					<image :src="fen"></image>
					<span>{{item.isShare}}</span>
				</view>
				<view class="product-book-BA right shou" v-if="item.isShare==1">
					<image :src="fens"></image>
					<span>{{item.isShare}}</span>
				</view>
			</view>
			<!-- 采购 -->
			<view class="myproduct-list-edit" v-if="item.type=='purc'">
				<!-- 看过 -->
				<view class="product-book-BAs one" v-if="item.isInfo==0">
					<image :src="look"></image>
					<span>{{item.infoCount}}</span>
				</view>
				<view class="product-book-BAs one" v-if="item.isInfo==1">
					<image :src="looks"></image>
					<span>{{item.infoCount}}</span>
				</view>
				<!-- 电话 -->
				<view class="product-book-BAs" @tap="playphone(item.userPhone)" v-if="item.isTel==0">
					<image :src="phone"></image>
					<span>{{item.telCount}}</span>
				</view>
				<view class="product-book-BAs" @tap="playphone(item.userPhone)" v-if="item.isTel==1">
					<image :src="phones"></image>
					<span>{{item.telCount}}</span>
				</view>
				<!-- 点赞 -->
				<view class="product-book-BAs" v-if="item.isLike==0" @tap="dianzan(item.id,item.type)">
					<image :src="zan"></image>
					<span>{{item.likeCount}}</span>
				</view>
				<view class="product-book-BAs" v-if="item.isLike==1">
					<image :src="zanss"></image>
					<span>{{item.likeCount}}</span>
				</view>
				<!-- 收藏 -->
				<view class="product-book-BAs shou" v-if="item.isFollow==0">
					<image :src="shou"></image>
					<span>{{item.followCount}}</span>
				</view>
				<view class="product-book-BAs shou" v-if="item.isFollow==1">
					<image :src="shous"></image>
					<span>{{item.followCount}}</span>
				</view>
				<!-- 分享 -->
				<view class="product-book-BAs right shou" v-if="item.isShare==0">
					<image :src="fen"></image>
					<span>{{item.isShare}}</span>
				</view>
				<view class="product-book-BAs right shou" v-if="item.isShare==1">
					<image :src="fens"></image>
					<span>{{item.isShare}}</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zan:  this.Static+'my/zan.png',
				look:  this.Static+'my/look.png',
				phone:  this.Static+'my/phone.png',
				liu:  this.Static+'my/liu.png',
				shou:  this.Static+'my/shou.png',
				fen:  this.Static+'my/fen.png',
				zanss:  this.Static+'my/zanss.png',
				looks:  this.Static+'my/looks.png',
				phones:  this.Static+'my/phones.png',
				lius:  this.Static+'my/lius.png',
				shous:  this.Static+'my/shous.png',
				fens:  this.Static+'my/fens.png',
				arr: [],
				time: this.Static+'my/Image.png',
				locat: this.Static+'my/Images.png',
				floow:'',
				floowdata:'',
				likes:'0',
				likenum:'',
				shouc:'0',
				shoucnum:'',
				hea: this.Static+'my/hea.png',
				bigpick: this.Static+'my/bigpick.png',
			};
		},
		components:{
			
		},
		props: {
			msgDatas: {
				type: Object
			}
		},
		computed: {
			i18n () {
			  return this.$t('listModules')  
			},
		},
		filters: {
			ellipsis: function(value) {
				if (!value) return '';
				if (value.length > 9) {
					return value.slice(0, 9) + '...';
				}
				return value;
			},
			ellipsiss: function(value) {
				if (!value) return '';
				if (value.length > 15) {
					return value.slice(0, 15) + '...';
				}
				return value;
			}
		},
		created() {
			this.arr.push(this.msgDatas);
		},
		mounted() {},
		methods: {
			//收藏
			shoucang(a,b){
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					if(b=='inst'){//供应
						var types='0';
					}else if(b=='purc'){//采购
						var types='1';
					}else if(b=='news'){//资讯
						var types='2';
					}
					uni.request({
						url: this.api2 + '/rest-rp/follow/user?userId='+landRegistLG.user.id+'&modelId='+a+'&type='+types, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							console.log(response.data, '---------------response.data--------------');
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								uni.showToast({
									title: '收藏成功！',
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
							console.log(error, '网络繁忙，请稍后');
						}
					});
				}else{
					
				}
			},
			//取消收藏
			shoucangs(a,b){
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					if(b=='inst'){//供应
						var types='0';
					}else if(b=='purc'){//采购
						var types='1';
					}else if(b=='news'){//资讯
						var types='2';
					}
					uni.request({
						url: this.api2 + '/rest-rp/follow/cancelUser?userId='+landRegistLG.user.id+'&modelId='+a+'&type='+types, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							console.log(response.data, '---------------response.data--------------');
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								uni.showToast({
									title: '取消收藏成功！',
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
							console.log(error, '网络繁忙，请稍后');
						}
					});
				}else{
					
				}
			},
			// 电话
			playphone(e) {
				uni.makePhoneCall({
					phoneNumber: e //仅为示例
				});
			},
			//点赞
			dianzan(a,b,f){
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					if(b=='inst'){
						var mode='0';
					}else if(b=='purc'){
						var mode='1';
					}else if(b=='news'){
						var mode='2';
					}
					uni.request({
						url: this.api2 + '/rest-rp/like/submit?userId='+landRegistLG.user.id+'&modelId='+a+'&type='+mode, //接口地址。
						// data: params,
						method: 'GET',
						success: (response) => {
							console.log(response.data, '---------------response.data--------------');
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								uni.showToast({
									title: '点赞成功！',
									icon: 'none',
									duration: 1000
								});
								f++;
								console.log(f)
							} else {
								uni.hideLoading(); // 隐藏 loading
								uni.showToast({
									title: response.data.msg,
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
							console.log(error, '网络繁忙，请稍后');
						}
					});
				}else if (uni.getStorageSync('UUID')) {
					let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
					console.log(UUID);
					if(b=='inst'){
						var mode='0';
					}else if(b=='purc'){
						var mode='1';
					}else if(b=='news'){
						var mode='2';
					}
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/like/submit?userId='+landRegistLG.user.id+'&modelId='+a+'&type='+mode, //接口地址。
						// data: params,
						method: 'GET',
						success: (response) => {
							console.log(response.data, '---------------response.data--------------');
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								uni.showToast({
									title: '点赞成功！',
									icon: 'none',
									duration: 1000
								});
								f++;
								console.log(f)
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
							console.log(error, '网络繁忙，请稍后');
						}
					});
				}
			},
			gotocomp(e){
				console.log(e+'to商家详情')
			},
			//留言
			liuyan(a,b){
				let obj={
					id:a,
					type:b,
					Leaving:'1'
				}
				this.$store.commit('setmessage', obj);
			},
			tiaozhuan(a,b){
				console.log(a,b)
				if(a=='invest'){//跳转资本详情
					uni.navigateTo({
						url:'/modules/find/findlist/find-capital?id='+b
					})
				}else if(a=='compService'){//跳转企业服务详情
					uni.navigateTo({
						url:'/modules/find/findlist/find-cloud?id='+b
					})
				}else if(a=='inst'){//跳转供应详情
					
				}else if(a=='purc'){//跳转采购详情
					
				}else if(a=='news'){//跳转资讯详情
					
				}
			}
		}
	};
</script>

<style>
	.find-Purchase{
		width: 100%;
		min-height: 200upx;
	}
	.widthas{
		width: 300upx!important;
	}
	.find-Purchase-head{
		width: 100%;
		height: 70upx;
	}
	.find-Purchase-head-one{
		width: 68upx;
		height: 68upx;
		border-radius: 50%;
		float: left;
	}
	.find-Purchase-head-one>image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.find-Purchase-head-two{
		width: 60%;
		height: 100%;
		float: left;
		margin-left: 20upx;
	}
	.find-Purchase-head-two>view:nth-of-type(1){
		width: 100%;
		height: 50%;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 35upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.find-Purchase-head-two>view:nth-of-type(2){
		width: 100%;
		height: 50%;
		font-size: 22upx;
		color: #9B9B9B;
		line-height: 35upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.find-Purchase-head-thr{
		width: 20%;
		height: 100%;
		line-height: 70upx;
		float: right;
		text-align: center;
		font-size: 28upx;
		color: #2E2E30;
	}
	.find-Purchase-head-thr>span{
		color: #02C2A2;
		padding-right: 10upx;
	}
	.find-Purchase-con{
		width: 100%;
		min-height: 200upx;
		display: flex;
		justify-content: space-between;
	}
	.find-Purchase-con-one{
		width: 100%;
		min-height: 200upx;
		position:relative;
	}
	.find-Purchase-con-two{
		min-width: 226upx;
		height: 166upx;
		margin-top: 20upx;
	}
	.find-Purchase-con-two>image{
		width: 100%;
		height: 100%;
	}
	.find-Purchase-con-two>view{
		width: 152upx;
		height: 68upx;
		border: 2upx solid #D2D2D2;
		border-radius: 4upx;
		margin: 0 auto;
		text-align: center;
		line-height: 68upx;
		margin-top: 58upx;
		font-size: 28upx;
		color: #2E2E30;
	}
	.find-Purchase-conA{
		width: 100%;
		height: 40upx;
		display: flex;
		margin-top: 20upx;
	}
	.find-Purchase-conA>view:nth-of-type(1){
		width: 80%;
		height: 100%;
		line-height: 40upx;
		font-size: 34upx;
		color: #2E2E30;
	}
	.find-Purchase-conA>view:nth-of-type(2){
		width: 25%;
		height: 100%;
		font-size: 28upx;
		color: #02C2A2;
		text-align: center;
		line-height: 40upx;
	}
	.find-Purchase-conB{
		width: 100%;
		height: 42upx;
		overflow: hidden;
		margin-top: 10upx;
	}
	
	.find-Purchase-conB>view{
		padding: 0upx 10upx 0upx 10upx;
		background: #FFF7E5;
		border-radius: 4upx;
		font-size: 20upx;
		color: #FE9D08;
		float: left;
		text-align: center;
		margin-left: 10upx;
	}
	.find-Purchase-conB>view:nth-of-type(1){
		margin-left: 0;
	}
	.find-Purchase-conC{
		width: 100%;
		height: 30upx;
		font-size: 22upx;
		color: #9B9B9B;
		line-height: 30upx;
		margin-top: 10upx;
	}
	.find-Purchase-conC>image:nth-of-type(1){
		height: 22upx;
		width: 20upx;
		display: block;
		float: left;
		margin-top: 5upx;
	}
	.find-Purchase-conC>span:nth-of-type(1){
		display: block;
		float: left;
		margin-left: 5upx;
	}
	.find-Purchase-conC>image:nth-of-type(2){
		height: 20upx;
		width: 20upx;
		display: block;
		float: left;
		margin-top: 4upx;
		margin-left: 10upx;
	}
	.find-Purchase-conC>span:nth-of-type(2){
		display: block;
		float: left;
		margin-left: 5upx;
	}
	.find-Purchase-conD{
		width: 100%;
		height: 35upx;
		/* position: absolute;
		bottom: 0; */
		margin-top: 20upx;
	}
	.find-Purchase-conD>view:nth-of-type(1){
		width: 52upx;
		height: 28upx;
		border: 2upx solid #FAB100;
		border-radius: 4upx;
		text-align: center;
		line-height: 28upx;
		font-size: 20upx;
		color: #FAB100;
		float: left;
	}
	.find-Purchase-conD>view:nth-of-type(2){
		float: left;
		font-size: 22upx;
		color: #9B9B9B;
		line-height: 35upx;
		margin-left: 20upx;
	}
	.find-Purchase-con-img{
		width: 100%;
		height: 166upx;
		display: flex;
		justify-content:  space-between;
	}
	.find-Purchase-con-img>image{
		width: 220upx;
		height: 166upx;
		margin-left: 20upx;
	}
	.find-Purchase-con-img>image:nth-of-type(1){
		margin-left: 0;
	}
	.product-book-BA {
		width: 12.5%;
		height: 26upx;
		margin-top: 20upx;
		line-height: 26upx;
		font-size: 24upx;
		color: #9b9b9b;
		border-right: 2upx solid #e2e2e2;
		float: left;
		margin-left: 24upx;
	}
	.product-book-BAs {
		width: 15.5%;
		height: 26upx;
		margin-top: 20upx;
		line-height: 26upx;
		font-size: 24upx;
		color: #9b9b9b;
		border-right: 2upx solid #e2e2e2;
		float: left;
		margin-left: 30upx;
	}
	.right {
		border: 0;
	}
	.one {
		margin-left: 20upx;
	}
	.shou > image {
		width: 24upx !important;
		height: 24upx !important;
		margin-top: 0upx !important;
	}
	.product-book-BA > image {
		width: 24upx;
		height: 20upx;
		margin-top: 2upx;
		display: block;
		float: left;
		margin-left: 10upx;
	}.product-book-BAs > image {
		width: 24upx;
		height: 20upx;
		margin-top: 2upx;
		display: block;
		float: left;
		margin-left: 10upx;
	}
	.product-book-BA > span {
		margin-left: 20upx;
		display: block;
		float: left;
	}.product-book-BAs > span {
		margin-left: 20upx;
		display: block;
		float: left;
	}
	.find-Purchase-con-image{
		width: 100%;
		height: 340upx;
		margin-top: 5upx;
	}
	.find-Purchase-con-image>image{
		width: 100%;
		height: 100%;
	}
	.find-Purchase-conE{
		width: 100%;
		height: 30upx;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 30upx;
		padding-top: 10upx;
	}
	.price {
		position: relative;
		width: 100%;
	}
	.price > p {
		font-family: PingFang-SC-Bold;
		position: relative;
		width: 100%;
		font-size: 3.5vw;
		line-height: 5vw;
		color: #2e2e30;
		margin-top: 10upx;
		font-weight: bold;
	}
	.member-price{
		position: relative;
		width: 100%;
	}
	.member-price > p {
		font-family: PingFang-SC-Bold;
		position: relative;
		width: 100%;
		font-size: 20upx;
		color: #FAB100;
		line-height: 5vw;
	}
	.location {
		position: relative;
		width:50%;
		/* padding: 1.5vw 0 1vw 0; */
		transform: scale(0.9);
		margin-left: -3.5vw;
		margin-top: -30upx;
	}
	.loca-text {
		font-family: PingFang-SC-Medium;
		width: 170%;
		position: relative;
		font-size: 3.2vw;
		line-height: 5vw;
		margin-left: 20upx;
		color: #9b9b9b;
	}
</style>

