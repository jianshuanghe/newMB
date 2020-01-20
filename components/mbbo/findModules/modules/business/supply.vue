<template>
	<view class="find-Purchase">
		<view v-for="(item,index) in arr" :key="index">
			<view class="find-Purchase-head" v-if="item.userAuth==2">
				<view class="find-Purchase-head-one" @tap="gotocomp(item.userId)">
					<image :src="item.userLogo" v-if="item.userLogo!==''"></image>
					<image :src="hea" v-if="item.userLogo==''"></image>
				</view>
				<view class="find-Purchase-head-two" @tap="gotocomp(item.userId)">
					<view :class="item.userTypeStr==''?'classtop':''">{{item.userName}}</view>
					<view v-if="item.userTypeStr!==''">{{item.userTypeStr}}</view>
				</view>
				<!-- <view class="find-Purchase-head-thr" v-if="item.isUserFollow==0" @tap="guanzhu(item.userId)"><span>+</span> 关注</view>
				<view class="find-Purchase-head-thr" v-if="item.isUserFollow==1" @tap="quguan(item.userId)">已关注</view> -->
				<view class="find-Purchase-head-thr" v-if="item.type!=='invest'" @tap="guanzhu(item)" :class="floow=='已关注'?'huise':''"><span v-if="floow=='关注'">+</span>{{floow}}</view>
			</view>
			<view class="find-Purchase-con">
				<view class="find-Purchase-con-one" @tap="gongying(item)">
					<view class="find-Purchase-conA">
						<view>{{item.title}}</view>
					</view>
					<view class="find-Purchase-conB"  v-if="item.typeNames.length!==0">
						<view v-for="(ites,index) in item.typeNames" :key="index">{{ites}}</view>
					</view>
					<view class="find-Purchase-conC" v-if="item.sendAddr!==''">
						<image :src="locat" mode="" v-if="item.sendAddr!==''"></image>
						<span>{{item.sendAddr}}</span>
					</view>
					<!-- 当有三张图片时 -->
					<view class="find-Purchase-con-img" v-if="item.instStyleType==2">
						<image :src="item.banner01" mode=""></image>
						<image :src="item.banner02" mode=""></image>
						<image :src="item.banner03" mode=""></image>
					</view>
					<!-- 一张大图 -->
					<view class="find-Purchase-con-image" v-if="item.instStyleType==0">
						<image :src="item.banner01"></image>
					</view>
					<view class="find-Purchase-conE" v-if="item.moneyStr!==''">{{item.moneyStr}}</view>
					<view class="find-Purchase-conD">
						<view>{{item.labelStr}}</view>
						<view>{{item.createTimeStr}}</view>
					</view>
				</view>
				<view class="find-Purchase-con-two" v-if="item.instStyleType==1||item.instStyleType==3">
					<image :src="item.banner01" v-if="item.instStyleType==1"></image>
					<view v-if="item.instStyleType==3" @tap="playphone(item.userPhone)">立即联系</view>
				</view>
			</view>
			<view class="myproduct-list-edit">
				<!-- 看过 -->
				<view class="product-book-BA one" v-if="item.isInfo==0" @tap="gongying(item)">
					<image :src="look"></image>
					<span>{{item.infoCount}}</span>
				</view>
				<view class="product-book-BA one" v-if="item.isInfo==1" @tap="gongying(item)">
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
				<view class="product-book-BA" v-if="likes==0" @tap="dianzan(item.id,item.type,item.likeCount)">
					<image :src="zan"></image>
					<span>{{likenum||'0'}}</span>
				</view>
				<view class="product-book-BA" v-if="likes==1">
					<image :src="zanss"></image>
					<span>{{likenum||'0'}}</span>
				</view>
				<!-- 收藏 -->
				<view class="product-book-BA shou" v-if="shouc==0" @tap="shoucang(item.id,item.type)">
					<image :src="shou"></image>
					<span>{{shoucnum||'0'}}</span>
				</view>
				<view class="product-book-BA shou" v-if="shouc==1" @tap='shoucangs(item.id,item.type)'>
					<image :src="shous"></image>
					<span>{{shoucnum||'0'}}</span>
				</view>
				<!-- 分享 -->
				<view class="product-book-BA right shou" v-if="item.isShare==0" @tap="gongying(item)">
					<image :src="fen"></image>
					<span>{{item.isShare}}</span>
				</view>
				<view class="product-book-BA right shou" v-if="item.isShare==1" @tap="gongying(item)">
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
				hea: this.Static+'my/hea.png',
				bigpick: this.Static+'my/bigpick.png',
				floow:'',
				floowdata:'',
				likes:'0',
				likenum:'',
				shouc:'0',
				shoucnum:'',
			};
		},
		props: {
			msgDatas: {
				type: Object
			}
		},
		computed: {},
		filters: {
			ellipsis: function(value) {
				if (!value) return '';
				if (value.length > 8) {
					return value.slice(0, 8) + '...';
				}
				return value;
			}
		},
		created() {
			// this.arr.push(this.msgDatas);
			
		},
		mounted() {
			this.arr.push(this.msgDatas);
			// console.log(this.arr)
			this.arr.map((item,index)=>{
				if(item.isUserFollow==0){
					this.floow='关注';
					this.floowdata=0;
				}else{
					this.floow='已关注';
					this.floowdata=1;
				};
				//点赞
				if(item.isLike==0){
					this.likes=0;
					this.likenum=item.likeCount;
				}else{
					this.likes=1;
					this.likenum=item.likeCount;
				}
				//收藏
				if(item.isFollow==0){
					this.shouc=0;
					this.shoucnum=item.followCount;
				}else{
					this.shouc=1;
					this.shoucnum=item.followCount;
				}
			})
		},
		methods: {
			guanzhu(e){//关注
				if(this.floowdata==0){//未关注
					if(uni.getStorageSync('landRegist')){
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/follow/user?userId='+landRegistLG.user.id+'&modelId='+e.userId+'&type=4', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								console.log(response.data, '---------------response.data--------------');
								if (response.data.ret === '200') {
									uni.hideLoading(); // 隐藏 loading
									this.floow='已关注';
									this.floowdata=1;
								}else if (response.data.ret === '202') {
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
					}else if (!uni.getStorageSync('landRegist')) {
						this.landRegistra(); // 判断登录状态
					}
				}else if(this.floowdata==1){//取消关注
					if(uni.getStorageSync('landRegist')){
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/follow/cancelUser?userId='+landRegistLG.user.id+'&modelId='+e.userId+'&type=4', //接口地址。
							// data: params,
							method: 'GET',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								console.log(response.data, '---------------response.data--------------');
								if (response.data.ret === '200') {
									uni.hideLoading(); // 隐藏 loading
									this.floow='关注';
									this.floowdata=0;
								}else if (response.data.ret === '202') {
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
					}else if (!uni.getStorageSync('landRegist')) {
						this.landRegistra(); // 判断登录状态
					}
				}
			},
			gotocomp(e){
				console.log(e+'to商家详情')
				uni.navigateTo({
					url: '/modules/myCompany/mybusiness/my-business?id='+e,
				});
			},
			gongying(e){
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
						tempType: 0, // 说明书类型
						orderType: 0, // 订单类型
						sourceTemp: 2, // 说明书来源
						aiListTemp: 1, // 是否展示ai
						id: e.tempId, // 模板id
						isMenu: e.isMenu, // 横向导航
						instrucId:  e.id, // 说明书id
						lookUserId: lookUserId, // 浏览者
						creatorId: e.userId, // 说明书创建者
						instrucState: e.instrucState ,// 说明书状态
						instrucCustType: e.instCustType, // 模板类型
						}
					uni.navigateTo({
						url: '/modules/createBusiness/templatePro/templatePro?urlParams=' + this.urlCrypto(urlParams, 0)
					});
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
							uni.hideLoading();
							console.log(response.data, '---------------response.data--------------');
							if (response.data.ret === '200') {
								 // 隐藏 loading
								this.shoucnum++;
								this.shouc=1;
							}else if (response.data.ret === '202') {
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
				}else if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
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
							uni.hideLoading();
							console.log(response.data, '---------------response.data--------------');
							if (response.data.ret === '200') {
								this.shouc=0;
							}else if (response.data.ret === '202') {
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
				}else if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
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
								this.likenum++;
								this.likes=1;
								console.log(f)
							}else if (response.data.ret === '202') {
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
						url: this.api2 + '/rest-rp/like/submit?userId='+UUID+'&modelId='+a+'&type='+mode, //接口地址。
						// data: params,
						method: 'GET',
						success: (response) => {
							console.log(response.data, '---------------response.data--------------');
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								this.likenum++;
								this.likes=1;
								console.log(f)
							}else if (response.data.ret === '202') {
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
				}
			},
		}
	};
</script>

<style>
	.find-Purchase{
		width: 100%;
		min-height: 260upx;
	}
	.widthas{
		width: 300upx!important;
	}
	.classtop{
		margin-top: 18upx;
	}
	.huise{
		color: #BDBDBD!important;
	}
	.find-Purchase-head{
		width: 100%;
		height: 70upx;
		margin-top: 30upx;
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
		width: 67%;
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
		margin-top: 30upx;
	}
	.find-Purchase-con-two>image{
		width: 100%;
		height: 100%;
		background-image: url('http://style.iambuyer.com/mbc/my/bigpick.png');
		background-size: 100% 100%;
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
		width: 95%;
		/* height: 40upx; */
		display: flex;
		margin-top: 30upx;
		
	}
	.find-Purchase-conA>view:nth-of-type(1){
		width: 100%;
		height: 100%;
		line-height: 56upx;
		font-size: 34upx;
		color: #2E2E30;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
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
		margin-top: 16upx;
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
		margin-top: 16upx;
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
		margin-top: 16upx;
	}
	.find-Purchase-conD>view:nth-of-type(1){
		width: 52upx;
		height: 28upx;
		border: 2upx solid #02C2A2;
		border-radius: 4upx;
		text-align: center;
		line-height: 28upx;
		font-size: 20upx;
		color: #02C2A2;
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
		margin-top: 16upx;
	}
	.find-Purchase-con-img>image{
		width: 220upx;
		height: 166upx;
		margin-left: 20upx;
		background-image: url('http://style.iambuyer.com/mbc/my/bigpick.png');
		background-size: 100% 100%;
	}
	.find-Purchase-con-img>image:nth-of-type(1){
		margin-left: 0;
	}
	.product-book-BA {
		width: 12.5%;
		height: 26upx;
		margin-top: 30upx;
		line-height: 26upx;
		font-size: 24upx;
		color: #9b9b9b;
		border-right: 2upx solid #e2e2e2;
		float: left;
		margin-left: 24upx;
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
		width: 28upx;
		height: 24upx;
		margin-top: 2upx;
		display: block;
		float: left;
		margin-left: 4upx;
	}
	.product-book-BA > span {
		margin-left: 20upx;
		display: block;
		float: left;
	}
	.find-Purchase-con-image{
		width: 100%;
		height: 340upx;
		margin-top: 16upx;
		background-image: url('http://style.iambuyer.com/mbc/my/bigpick.png');
		background-size: 100% 100%;
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
		padding-top: 16upx;
	}
	.meirenkanwo{
		width: 330upx;
		height: 280upx;
		display: block;
		margin: 120upx auto auto auto;
		font-size: 28upx;
		text-align: center;
		color: #9B9B9B;
		clear: both;
	}
	.meirenkanwo>image {
		width: 92%;
		height: 80%;
	}
</style>

