<template>
	<view class="my-business">
		<!-- 公司信息 -->
		<view class="my-business-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<!-- 公司信息 -->
			<div class="search-Fd left">{{ i18n.title8 }}</div>
		</view>
		<view class="tian"></view>
		<view class="my-business-introduce">
			<image :src="back"></image>
			<view class="my-business-name">
				<view class="my-business-head">
					<view class="my-business-Img">
						<image :src="lists.compLogo" v-if="lists.compLogo!==''"></image>
						<image :src="hea" v-if="lists.compLogo==''"></image>
					</view>
					<view class="my-business-con">
						<view v-if="lists.companyName!==''">{{lists.companyName}}</view>
						<view v-if="lists.companyName==''">{{lists.nickname}}</view>
						<view>{{lists.createTime|formatDate}} 加入</view>
					</view>
				</view>
				<!-- 粉丝 已关注 已获赞 -->
				<view class="my-business-Tips">
					粉丝 {{lists.fansCount}}&nbsp;&nbsp;&nbsp;&nbsp;已关注 {{lists.followCount}}&nbsp;&nbsp;&nbsp;&nbsp;已获赞 {{lists.getLikeCount}}
				</view>
			</view>
		</view>
		<view class="my-business-detailed">
			<view class="my-business-det">
				<view class="my-business-det-ren">
					<image :src="renzheng" v-if="lists.authState==2"></image>
					<image :src="weirenzheng" v-if="lists.authState==0||lists.authState==1||lists.authState==3"></image>
				</view>
				<view class="my-business-det-from" v-if="lists.compTypePcodeStr!==''||lists.provinceCodeStr!==''||lists.userType!==''">
					{{lists.compTypePcodeStr|ellipsis}} <span v-if="lists.compTypePcodeStr!==''" class="spans">|</span> {{lists.provinceCodeStr}}{{lists.cityCodeStr}} <span class="spans" v-if="lists.provinceCodeStr!==''">|</span><span v-if="lists.userType==0">品牌商</span><span v-if="lists.userType==1">经销商</span><span v-if="lists.userType==2">厂家</span><span v-if="lists.userType==3">其他</span>
				</view>
				<view class="my-business-det-from" v-if="lists.compTypePcodeStr==''&&lists.provinceCodeStr==''&&lists.userType==''">
					暂无信息
				</view>
				<view class="my-business-det-follow" v-if="lists.isUserFollow==0&&this.id!=this.myid" @tap="guanzhu(lists)">+关注</view>
				<view class="my-business-det-follows" v-if="lists.isUserFollow==1&&this.id!=this.myid" @tap="quxiao(lists)">已关注</view>
			</view>
		</view>
		<!-- 简介 求购 供应 资讯 -->
		<view class="my-business-Choice">
			<view class="my-business-Choice-title">
				<view v-for="(item,index) in list" :key="index" :class="num==index?'changeColor':''" @tap="gotoGood(index)">
				{{item.name}}
					<div class="my-business-Choice-num" v-if="item.name!=='简介'">
						{{item.num || '0'}}
					</div>
				</view>
			</view>
		</view>
		<brief v-if="num === 0" :datas='lists' :listid="id"></brief>
		<!-- 求购 -->
		<want v-if="num === 1" :listid="id" :datas='ists'></want>
		<!-- 供应 -->
		<supply v-if="num === 2" :listid="id" :datas='lists'></supply>
		<!-- 资讯 -->
		<information v-if="num === 3" :listid="id":datas='lists'></information>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import information from "./businesslist/mybusiness-information"
	import want from "./businesslist/mybusiness-want"
	import supply from "./businesslist/mybusiness-supply"
	import brief from "./businesslist/mybusiness-brief"
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				renzheng:this.Static+'my/renzheng.png',
				hea:this.Static+'my/hea.png',
				weirenzheng:this.Static+'my/weirenzheng.png',
				erweimamo:this.Static+'my/erweimamo.png',
				lists:[],
				list:[
					{
						name : '简介',
						num: ''
					},
					{
						name : '求购',
						num: ''
					},
					{
						name : '供应',
						num: ''
					},
					{
						name : '资讯',
						num: ''
					},
					],
				back:this.Static+'my/2.png',
				num:0,//默认显示简介
				id:'',
				myid:'',
			}
		},
		components: {
			quickBtn,
			navigation,
			information,
			want,
			supply,
			brief
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
				return y + '.' + MM + '.' + d ;
			},
			ellipsis: function(value) {
				if (!value) return '';
				if (value.length > 5) {
					return value.slice(0, 5) + '...';
				}
				return value;
			},
		},
		watch: {
			GET_MY: {
				handler(a, b) {
					console.log(a,b)
					this.list[1].num = a.PurchaseA.length;
					this.list[2].num = a.chan.length;
					this.list[3].num = a.zi.length;
					console.log(this.list[1].num);
				},
				deep: true
			}
		},
		computed: {
			i18n () {
			  return this.$t('Myfunctions')  
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
		onLoad:function(options){
			uni.setNavigationBarTitle({
				title: this.i18n.title8
			});
			this.id=options.id
			console.log(this.id)
			this.Personal();
			// 求购
			this.Purchas();
			//资讯
			this.inf();
			//供应
			this.product();
			
		},
		created(){
			
			this.shareEachPage(); // 分享
		},
		methods:{
			guanzhu(e){
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/follow/user?userId='+landRegistLG.user.id+'&modelId='+this.id+'&type=4', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading(); // 隐藏 loading
							console.log(response.data, '---------------response.data--------------');
							if (response.data.ret === '200') {
								this.Personal();
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
			quxiao(e){
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/follow/cancelUser?userId='+landRegistLG.user.id+'&modelId='+this.id+'&type=4', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							console.log(response.data, '---------------response.data--------------');
							uni.hideLoading(); // 隐藏 loading
							if (response.data.ret === '200') {
								this.Personal();
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
			gotoGood(index) {//判断不同的数显示不同的组件 0是简介 1是求购 2是供应 3是资讯
				this.num = index;
			},
			Personal(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					this.myid=landRegistLG.user.id
					let idlist=this.id;
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/'+idlist+'?lookUserId='+landRegistLG.user.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data,'----------------------------------------');
							this.lists=response.data.content;
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
					let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
					console.log(UUID);
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/'+this.id+'?lookUserId='+UUID, //接口地址。
						// data: params,
						method: 'GET',
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.lists=response.data.content;
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
			Purchas(){//求购
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/purc/selectList?page=1&userId='+this.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							
							this.chaseA = response.data.content.list
							this.$store.commit('setPurchaseA', this.chaseA);
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
						url: this.api2 + '/rest-rp/purc/selectList?page=1&userId='+this.id, //接口地址。
						// data: params,
						method: 'GET',
						success: (response) => {
							uni.hideLoading();
							
							this.chaseA = response.data.content.list
							this.$store.commit('setPurchaseA', this.chaseA);
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
						url: this.api2 + '/rest-rp/instruc?userId='+this.id+'&page=1&instrucCustType=2', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
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
				}else{
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+this.id+'&page=1&instrucCustType=2', //接口地址。
						// data: params,
						method: 'GET',
						success: (response) => {
							uni.hideLoading();
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
			product(){//供应
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+this.id+'&page=1&instrucCustType=0', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
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
				}else{
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+this.id+'&page=1&instrucCustType=0', //接口地址。
						// data: params,
						method: 'GET',
						success: (response) => {
							uni.hideLoading();
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
		}
	}
</script>

<style>
	.my-business {
		width: 100%;
		height: 100%;
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.my-business-title {
		width: 100%;
		height: 88upx;
		background: #ffffff;
		border-bottom: 2upx solid #f5f5f5;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.quickBtn-Fd {
		width: 5%;
		margin-left: 38upx;
	}
	.search-Fd {
		position: relative;
		width: 100%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2e2e30;
	}
	.my-business-introduce{
		width: 100%;
		height: 312upx;
		position: relative;
	}
	.my-business-introduce>image{
		width: 100%;
		height: 100%;
		
	}
	.my-business-name{
		position: absolute;
		top: 0upx;
		width: 100%;
		height: 100%;
	}
	.spans{
		padding-left: 20upx;
		padding-right: 20upx;
		color: #D2D2D2;
	}
	.my-business-head{
		width: 90%;
		height: 102upx;
		margin: 60upx auto auto auto;
	}
	.my-business-Img{
		width: 102upx;
		height: 100%;
		border: 4upx solid #FFFFFF;
		border-radius: 4upx;
		float: left;
	}
	.my-business-Img>image{
		width: 100%;
		height: 100%;
	}
	.my-business-con{
		width: 80%;
		height: 100%;
		float: right;
	}
	.my-business-con>view:nth-of-type(1){
		max-width: 520upx;
		height: 40upx;
		line-height: 40upx;
		font-size: 40upx;
		color: #FFFFFF;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		padding-top: 10upx;
	}
	.my-business-con>view:nth-of-type(2){
		width: 100%;
		height: 40upx;
		line-height: 40upx;
		font-size: 24upx;
		color: #FFFFFF;
		padding-top: 10upx;
	}
	.my-business-Tips{
		width: 90%;
		height: 40upx;
		line-height: 40upx;
		margin: 40upx auto;
		color: #FFFFFF;
		font-size: 24upx;
	}
	.my-business-detailed{
		width: 100%;
		height: 166upx;
		background: #FFFFFF;
		position: relative;
	}
	.my-business-det{
		width: 90%;
		height: 166upx;
		background: #FFFFFF;
		position: absolute;
		top: -50upx;
		left: 5%;
		border-radius: 10upx;
		box-shadow: darkgrey 0upx 0upx 22upx 0upx ;//边框阴影
	}
	.my-business-det-ren{
		width: 122upx;
		height: 36upx;
		margin-top: 40upx;
		margin-left: 30upx;
	}
	.my-business-det-ren>image{
		width: 100%;
		height: 100%;
	}
	.my-business-det-from{
		width: 91%;
		height: 40upx;
		margin: 20upx auto auto;
		font-size: 26upx;
		color: #5D5D5D;
	}
	.my-business-det-follow{
		width: 114upx;
		height: 54upx;
		border: 2upx solid #02C2A2;
		border-radius: 4upx;
		position: absolute;
		right: 30upx;
		top: 30upx;
		color: #02C2A2;
		text-align: center;
		line-height: 54upx;
	}
	.my-business-det-follows{
		width: 114upx;
		height: 54upx;
		border: 2upx solid #BDBDBD;
		border-radius: 4upx;
		position: absolute;
		right: 30upx;
		top: 30upx;
		color: #BDBDBD;
		text-align: center;
		line-height: 54upx;
	}
	.my-business-Choice{
		width: 100%;
		height: 92upx;
		border-bottom: 2upx solid #F5F5F5;
		background: #FFFFFF;
	}
	.my-business-Choice-title{
		margin: 0 auto;
		width: 100%;
		height: 100%;
		display: flex;
	}
	.my-business-Choice-title>view{
		width: 25%;
		height: 100%;
		text-align: center;
		line-height: 88upx;
		font-size: 30upx;
		color: #2E2E30;
		position: relative;
	}
	.my-CollectiononBrowseonPoints-title>view{
		width: 50%;
		height: 100%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
		position: relative;
	}
	.changeColor {
		color: #02C2A2!important;
		font-weight: bold;
		font-size: 32upx;
	}
	
	.changeColor:before {
		content: '';
		position: absolute;
		left: 41%;
		top: 70upx;
		bottom: auto;
		right: auto;
		height: 7upx;
		width: 20%;
		background-color: #02C2A2;
		color: #02C2A2;
	}
	.my-business-Choice-num{
		position: absolute;
		font-size: 22upx;
		right: 40upx;
		line-height: 62upx;
		top: 0;
		color: #9B9B9B;
	}
</style>
