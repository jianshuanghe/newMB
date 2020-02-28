<template>
	<view class="information">
		<view v-for="(item, index) in arr" :key="index">
			<view class="information-hea" @tap="gongying(item)">
				<view class="information-hea-ON">{{ item.title}}</view>
				<view class="information-hea-img" v-if="item.banner01 !== ''"><image :src="item.banner01"></image></view>
				<view class="information-hea-TS">
					<view>{{ item.labelStr }}</view>
					<!-- <view>{{item.userName}}</view> -->
					<view>{{ item.createTimeStr }}</view>
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
				<view class="product-book-BA" v-if="likes==1" @tap="qudianzan(item.id,item.type,item.likeCount)">
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
			arr: [],
			zanss:  this.Static+'my/zanss.png',
			looks:  this.Static+'my/looks.png',
			phones:  this.Static+'my/phones.png',
			lius:  this.Static+'my/lius.png',
			shous:  this.Static+'my/shous.png',
			fens:  this.Static+'my/fens.png',
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
			if (value.length > 20) {
				return value.slice(0, 20) + '...';
			}
			return value;
		}
	},
	created() {
		
	},
	mounted() {
		this.arr.push(this.msgDatas);
		this.arr.map((item,index)=>{
			if(item.isUserFollow==0){
				this.floow='+关注';
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
		gongying(e){
			// console.log(e, '----------------e-跳转详情-----------------')
			let a = e.type;
			let b = e.id;
			let lookUserId = null;
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				// console.log(landRegistLG.user.id);
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
						console.log(response.data, '---------------response.data--------------');
						if (response.data.ret === '200') {
							uni.hideLoading(); // 隐藏 loading
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
							uni.showToast({
								title: '点赞成功！',
								icon: 'none',
								duration: 1000
							});
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
								title:  response.data.msg,
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
		//取消点赞
		qudianzan(a,b,f){
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				//console.log(landRegistLG.user.id);
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
					url: this.api2 + '/rest-rp/like/cancel?userId='+landRegistLG.user.id+'&modelId='+a+'&type='+mode, //接口地址。
					// data: params,
					method: 'GET',
					success: (response) => {
						uni.hideLoading(); // 隐藏 loading
						console.log(response.data, '---------------response.data--------------');
						if (response.data.ret === '200') {
							
							this.likes=0;
							//console.log(f)
						}
						 else {
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
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}else if (uni.getStorageSync('UUID')) {
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				//console.log(UUID);
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
					url: this.api2 + '/rest-rp/like/cancel?userId='+UUID+'&modelId='+a+'&type='+mode, //接口地址。
					// data: params,
					method: 'GET',
					success: (response) => {
						uni.hideLoading(); // 隐藏 loading
						//console.log(response.data, '---------------response.data--------------');
						if (response.data.ret === '200') {
							this.likes=0;
							//console.log(f)
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
						 else {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title:  response.data.msg,
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
						//console.log(error, '网络繁忙，请稍后');
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
	}
};
</script>

<style>
.information {
	width: 100%;
	min-height: 160upx;
	margin-top: 30upx;
}
.information-hea {
	position: relative;
	width: 100%;
	min-height: 140upx;
	display: flex;
	justify-content: space-between;
}
.information-hea-ON {
	width: 100%;
	height: 80upx;
	font-size: 34upx;
	color: #2e2e30;
	line-height: 46upx;
	height: 94upx;
	/* overflow: hidden; */
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
.information-hea-img {
	min-width: 226upx;
	height: 166upx;
	background-image: url('http://style.iambuyer.com.cn/mbc/my/bigpick.png');
	background-size: 100% 100%;
}
.information-hea-img > image {
	width: 100%;
	height: 100%;
}
.information-hea-TS {
	position: absolute;
	bottom: 0upx;
}
.information-hea-TS > view:nth-of-type(1) {
	width: 52upx;
	height: 28upx;
	text-align: center;
	line-height: 28upx;
	border: 2upx solid #3893ff;
	border-radius: 4upx;
	font-size: 20upx;
	color: #3893ff;
	float: left;
}
.information-hea-TS > view:nth-of-type(2) {
	font-size: 22upx;
	color: #9b9b9b;
	float: left;
	margin-left: 10upx;
	margin-top: -4upx;
}
.information-hea-TS > view:nth-of-type(3) {
	font-size: 22upx;
	color: #9b9b9b;
	float: left;
	margin-left: 30upx;
	margin-top: -4upx;
}
.product-book-BA {
	width: 13.5%;
	height: 26upx;
	margin-top: 30upx;
	line-height: 26upx;
	font-size: 24upx;
	color: #9b9b9b;
	border-right: 2upx solid #e2e2e2;
	float: left;
	margin-left: 22upx;
}
.right {
	border: 0;
}
.one {
	margin-left: 0;
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
}
.product-book-BA > span {
	margin-left: 20upx;
	display: block;
	float: left;
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
