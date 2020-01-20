<template>
	<view class="find-Purchase">
		<view v-for="(item,index) in arr" :key="index">
			<view class="find-Purchase-head" v-if="item.userAuth==2||item.type=='invest'">
				<view class="find-Purchase-head-one" @tap="gotocomp(item.userId)">
					<image :src="item.userLogo" v-if="item.userLogo!==''"></image>
					<image :src="hea" v-if="item.userLogo==''"></image>
				</view>
				<view class="find-Purchase-head-two" @tap="gotocomp(item.userId)">
					<view :class="item.userTypeStr==''?'classtop':''">{{item.userName}}</view>
					<view v-if="item.userTypeStr!==''">{{item.userTypeStr}}</view>
				</view>
				<view class="find-Purchase-head-thr" v-if="item.type!=='invest'" @tap="guanzhu(item)" :class="floow=='已关注'?'huise':''"><span v-if="floow=='关注'">+</span>{{floow}}</view>
				<!-- <view class="find-Purchase-head-thr" v-if="item.type!=='invest'&&item.isUserFollow==1" @tap="quguan(item.userId)">已关注</view> -->
			</view>
			<view class="find-Purchase-con" @tap="tiaozhuan(item)">
				<view class="find-Purchase-con-one">
					<view class="find-Purchase-conA" v-if="item.title!==''">
						<view v-if="item.type!=='news'">{{item.title }}</view>
						<view v-if="item.type=='news'">{{item.title|elli}}</view>
						<view v-if="item.purcState==1&&item.type=='purc'">采购中</view>
						<view v-if="item.purcState==0&&item.type=='purc'" style="color: #9B9B9B;">待发布</view>
						<view v-if="item.purcState==2&&item.type=='purc'" style="color: #9B9B9B;">已停止</view>
						<view v-if="item.purcState==3&&item.type=='purc'" style="color: #9B9B9B;">已完成</view>
						<view v-if="item.purcState==4&&item.type=='purc'" style="color: #9B9B9B;">已下架</view>
					</view>
					<view class="find-Purchase-conB" v-if="item.typeNames.length!==0">
						<view v-for="(ites,index) in item.typeNames" :key="index">{{ites}}</view>
					</view>
					<view class="find-Purchase-conC" v-if="item.sendAddr!==''||item.endTimeStr!==''">
						<image :src="locat" v-if="item.sendAddr!==''"></image>
						<span v-if="item.sendAddr!==''">{{item.sendAddr}}</span>
						<image :src="time" v-if="item.type=='purc'"></image>
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
					<view class="find-Purchase-conE" v-if="item.type=='inst'&&item.moneyStr!==''">{{item.moneyStr}}</view>
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
					<view v-if="item.type=='inst'&&item.instStyleType==3" @tap="playphone(item.userPhone)">立即联系</view>
				</view>
			</view>
			<!-- 除采购 资本 企业服务外 -->
			<view class="myproduct-list-edit" v-if="item.type!=='compService'&&item.type!=='invest'&&item.type!=='purc'">
				<!-- 看过 -->
				<view class="product-book-BA one" v-if="item.isInfo==0" @tap="tiaozhuan(item)">
					<image :src="look"></image>
					<span>{{item.infoCount}}</span>
				</view>
				<view class="product-book-BA one" v-if="item.isInfo==1" @tap="tiaozhuan(item)">
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
					<span>{{likenum}}</span>
				</view>
				<view class="product-book-BA" v-if="likes==1" @tap="qudianzan(item.id,item.type,item.likeCount)">
					<image :src="zanss"></image>
					<span>{{likenum}}</span>
				</view>
				<!-- 收藏 -->
				<view class="product-book-BA shou" v-if="shouc==0" @tap="shoucang(item.id,item.type)">
					<image :src="shou"></image>
					<span>{{shoucnum}}</span>
				</view>
				<view class="product-book-BA shou" v-if="shouc==1" @tap='shoucangs(item.id,item.type)'>
					<image :src="shous"></image>
					<span>{{shoucnum}}</span>
				</view>
				<!-- 分享 -->
				<view class="product-book-BA right shou" v-if="item.isShare==0" @tap="tiaozhuan(item)">
					<image :src="fen"></image>
					<span>{{item.isShare}}</span>
				</view>
				<view class="product-book-BA right shou" v-if="item.isShare==1" @tap="tiaozhuan(item)">
					<image :src="fens"></image>
					<span>{{item.isShare}}</span>
				</view>
			</view>
			<!-- 采购 -->
			<view class="myproduct-list-edit" v-if="item.type=='purc'">
				<!-- 看过 -->
				<view class="product-book-BAs one" v-if="item.isInfo==0" @tap="tiaozhuan(item)">
					<image :src="look"></image>
					<span>{{item.infoCount}}</span>
				</view>
				<view class="product-book-BAs one" v-if="item.isInfo==1" @tap="tiaozhuan(item)">
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
				<view class="product-book-BAs" v-if="likes==0" @tap="dianzan(item.id,item.type)">
					<image :src="zan"></image>
					<span>{{likenum}}</span>
				</view>
				<view class="product-book-BAs" v-if="likes==1">
					<image :src="zanss"></image>
					<span>{{likenum}}</span>
				</view>
				<!-- 收藏 -->
				<view class="product-book-BAs shou" v-if="shouc==0" @tap="shoucang(item.id,item.type)">
					<image :src="shou"></image>
					<span>{{shoucnum}}</span>
				</view>
				<view class="product-book-BAs shou" v-if="shouc==1" @tap="shoucangs(item.id,item.type)">
					<image :src="shous"></image>
					<span>{{shoucnum}}</span>
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
		<!-- <view class="meirenkanwo" v-if="arr.length == 0">
			<image :src="kong" mode=""></image>
			暂无！
		</view> -->
	</view>
</template>

<script>
	//看過 電話 聊天 點讚..
	import zan from '@/static/mbcImg/my/zan.png';
	import look from '@/static/mbcImg/my/look.png';
	import phone from '@/static/mbcImg/my/phone.png';
	import liu from '@/static/mbcImg/my/liu.png';
	import shou from '@/static/mbcImg/my/shou.png';
	import fen from '@/static/mbcImg/my/fen.png';
	import zanss from '@/static/mbcImg/my/zanss.png';
	import looks from '@/static/mbcImg/my/looks.png';
	import phones from '@/static/mbcImg/my/phones.png';
	import lius from '@/static/mbcImg/my/lius.png';
	import shous from '@/static/mbcImg/my/shous.png';
	import fens from '@/static/mbcImg/my/fens.png';
	import kong from '@/static/mbcImg/my/kong.png';
	import hea from '@/static/mbcImg/my/hea.png';
	import bigpick from '@/static/mbcImg/my/bigpick.png';
	
	//結束
	import time from '@/static/mbcImg/my/Image.png';
	import locat from '@/static/mbcImg/my/Images.png';
	
	export default {
		data() {
			return {
				zan: zan,
				look: look,
				phone: phone,
				kong:kong,
				liu: liu,
				shou: shou,
				fen: fen,
				zanss: zanss,
				looks: looks,
				phones: phones,
				lius: lius,
				shous: shous,
				fens: fens,
				arr: [],
				time:time,
				locat:locat,
				floow:'',
				floowdata:'',
				likes:'0',
				likenum:'',
				shouc:'0',
				shoucnum:'',
				hea:hea,
				bigpick:bigpick,
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
				if (value.length > 8) {
					return value.slice(0, 8) + '...';
				}
				return value;
			},elli: function(value) {
				if (!value) return '';
				if (value.length > 11) {
					return value.slice(0, 11) + '...';
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
			
		},
		mounted() {
			this.arr.push(this.msgDatas);
			//console.log(this.arr)
			if(this.arr.length==0){
				//console.log('加载完成')
			}
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
						//console.log(landRegistLG.user.id);
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
								//console.log(response.data, '---------------response.data--------------');
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
								//console.log(error, '网络繁忙，请稍后');
							}
						});
					}else if (!uni.getStorageSync('landRegist')) {
						this.landRegistra(); // 判断登录状态
					}
				}else if(this.floowdata==1){//取消关注
					if(uni.getStorageSync('landRegist')){
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						//console.log(landRegistLG.user.id);
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
								//console.log(response.data, '---------------response.data--------------');
								if (response.data.ret === '200') {
									uni.hideLoading(); // 隐藏 loading
									this.floow='关注';
									this.floowdata=0;
								} else if (response.data.ret === '202') {
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
								//console.log(error, '网络繁忙，请稍后');
							}
						});
					}else if (!uni.getStorageSync('landRegist')) {
						this.landRegistra(); // 判断登录状态
					}
				}
			},
			//收藏
			shoucang(a,b){
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					//console.log(landRegistLG.user.id);
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
							//console.log(response.data, '---------------response.data--------------');
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								this.shoucnum++;
								this.shouc=1;
							} else if (response.data.ret === '202') {
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
							//console.log(error, '网络繁忙，请稍后');
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
					//console.log(landRegistLG.user.id);
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
							//console.log(response.data, '---------------response.data--------------');
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								this.shouc=0;
							} else if (response.data.ret === '202') {
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
							//console.log(error, '网络繁忙，请稍后');
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
						url: this.api2 + '/rest-rp/like/submit?userId='+landRegistLG.user.id+'&modelId='+a+'&type='+mode, //接口地址。
						// data: params,
						method: 'GET',
						success: (response) => {
							//console.log(response.data, '---------------response.data--------------');
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								this.likenum++;
								this.likes=1;
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
						url: this.api2 + '/rest-rp/like/submit?userId='+UUID+'&modelId='+a+'&type='+mode, //接口地址。
						// data: params,
						method: 'GET',
						success: (response) => {
							//console.log(response.data, '---------------response.data--------------');
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								uni.showToast({
									title: '点赞成功！',
									icon: 'none',
									duration: 1000
								});
								this.likenum++;
								this.likes=1;
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
				//console.log(e+'to商家详情')
				uni.navigateTo({
					url: '/modules/myCompany/mybusiness/my-business?id='+e,
				});
			},
			//留言
			liuyan(a,b,c){
				let obj={
					id:a,
					type:b,
					Leaving:'1',
				}
				this.$store.commit('setmessage', obj);
			},
			tiaozhuan(e){
				//console.log(e, '----------------e-跳转详情-----------------')
				let a = e.type;
				let b = e.id;
				let lookUserId = null;
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					//console.log(landRegistLG.user.id);
					lookUserId = landRegistLG.user.id;
				} else {
					lookUserId = uni.getStorageSync('UUID');
				};
				if(a=='invest'){//跳转资本详情
					uni.navigateTo({
						url:'/modules/find/findlist/find-capital?id='+b
					})
				}else if(a=='compService'){//跳转企业服务详情
					uni.navigateTo({
						url:'/modules/find/findlist/find-cloud?id='+b
					})
				}else if(a=='inst' || a=='news'){//跳转供应详情
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
					};
					uni.navigateTo({
						url: '/modules/createBusiness/templatePro/templatePro?urlParams=' + this.urlCrypto(urlParams, 0)
					});
				}else if(a=='purc'){//跳转采购详情
					let urlParams = {
						isFlow: 0, // 平台来源
						tempType: 1, // 采购类型
						orderType: 0, // 订单类型
						sourceTemp: 2, // 说明书来源
						aiListTemp: 0, // 是否展示ai
						purcId:  e.id, // 说明书id
						lookUserId: lookUserId, // 浏览者
						creatorId: e.userId, // 说明书创建者
						purcState: e.purcState // 说明书状态
					};
					uni.navigateTo({
						url: '/modules/publishPurchase/publishPurchase?urlParams=' + this.urlCrypto(urlParams, 0)
					});
				}
			}
		}
	};
</script>

<style>
	.find-Purchase{
		width: 100%;
		min-height: 40upx;
	}
	.widthas{
		width: 300upx!important;
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
	.classtop{
		margin-top: 18upx;
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
		min-height: 40upx;
		display: flex;
		justify-content: space-between;
	}
	.find-Purchase-con-one{
		width: 100%;
		min-height: 40upx;
		position:relative;
	}
	.find-Purchase-con-two{
		min-width: 226upx;
		height: 166upx;
		margin-top: 30upx;
		background-image: url(../../../../../static/mbcImg/my/bigpick.png);
		background-size: 100% 100%;
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
		width: 95%;
		/* height: 40upx; */
		display: flex;
		margin-top: 30upx;
	}
	.find-Purchase-conA>view:nth-of-type(1){
		/* width: 80%; */
		height: 100%;
		line-height: 52upx;
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
		margin-top: 16upx;
	}
	.find-Purchase-con-img>image{
		width: 220upx;
		height: 166upx;
		margin-left: 20upx;
		background-image: url(../../../../../static/mbcImg/my/bigpick.png);
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
		margin-left: 28upx;
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
		width: 28upx;
		height: 24upx;
		margin-top: 2upx;
		display: block;
		float: left;
		margin-left: 4upx;
	}
	.product-book-BAs > image {
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
	}.product-book-BAs > span {
		margin-left: 20upx;
		display: block;
		float: left;
	}
	.find-Purchase-con-image{
		width: 100%;
		height: 340upx;
		margin-top: 16upx;
		background-image: url(../../../../../static/mbcImg/my/bigpick.png);
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
		/* margin-top: -30upx; */
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

