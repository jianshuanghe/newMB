<template>
	<!-- 全部 -->
	<view class="Buyer-whole">
		<scroll-view class="scroll-v list" scroll-y="true" @scrolltolower="loadMore()">
		<view class="my-Buyer-header-list" @tap="gotoxi(item.id)" v-for="(item,index) in this.GET_NEWS.Message" :key="index">
			<view class="my-Buyer-header-list1">
				<view v-if="item.readeState == 0"></view>
			</view>
			<view class="my-Buyer-header-list2">
				<view class="my-Buyer-header-list2-zi">{{item.instrucTitl}}</view>
				<view class="my-Buyer-header-list2-nei">{{item.msgContent}}</view>
				<view class="my-Buyer-header-list2-xin">
					<view>{{item.name}}<span>|</span>{{item.mobile}}</view>
					<view>{{item.msgTime|formatDate}}</view>
				</view>
			</view>
			<view class="cler"></view>
		</view>
		<view class="meirenkanwo" v-if="this.GET_NEWS.Message.length === 0">
			<image :src="kong" mode=""></image>
			您还没有留言！
		</view>
		</scroll-view>
	</view>
</template>

<script>
	import { mapMutations,mapGetters } from 'vuex';
	import kong from '@/static/mbcImg/my/kong.png';
	export default {
		data() {
			return {
				kong:kong,
				pages:'2',
				Mess:[],
			}
		},
		
		onLoad() {
			
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
			}
		},
		methods: {
			loadMore:function(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/msg/selectList?userId='+landRegistLG.user.id+'&page='+this.pages, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							if(response.data.content.list==0){
								uni.showToast({
									title: '没有数据啦',
									icon: 'none',
									duration: 1000
								});
							}else if(response.data.content.list.length!==0){
								response.data.content.list.map((item,index)=>{
									this.Mess.push(item)
								})
								this.pages++;
								this.$store.commit('setnews', this.Mess);
							}
							
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
			gotoxi(e){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/msg/read/' + e, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							// this.list=response.data.content
							// this.$store.commit('setMation', this.List); // 更新vuex
							this.Message();
							this.Unread();
							console.log('to已发留言详情')
							uni.navigateTo({
								url: '/modules/myCompany/myBuyeronAlready/my-BuyeronAlready/Message-details/Buyer-details?id='+ e,
							});
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
			// 消息列表
			Message(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/msg/selectList?userId='+landRegistLG.user.id+'&page=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.lists = response.data.content.list
							this.$store.commit('setnews', this.lists);
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
			Unread(){//消息数量
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/notice/index?userId='+landRegistLG.user.id+'', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.num = response.data.content
							this.$store.commit('setnum', this.num);
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
		computed: {
			...mapGetters(['GET_NEWS'])
		},
	}
</script>

<style>
	.my-Buyer-header-list{
		width: 90%;
		min-height: 200upx;
		height: auto;
		border-bottom: 2upx solid #F5F5F5;
		margin: 0 auto;
		padding-bottom: 40upx;
	}
	.my-Buyer-header-list1{
		width: 6%;
		/* height: 100%; */
		/* position: relative; */
		float: left;
	}
	.my-Buyer-header-list1>view{
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		margin-top: 92upx;
		background: red;
	}
	.my-Buyer-header-list2{
		width: 94%;
		/* height: 100%; */
		float: right;
	}
	.my-Buyer-header-list2-zi{
		font-size: 20px;
		color: #2E2E30;
		padding-top: 66upx;
		line-height: 64upx;
	}
	.my-Buyer-header-list2-nei{
		font-size: 28upx;
		color: #2E2E30;
		line-height: 42upx;
		padding-top: 32upx;
		overflow:hidden;
		text-overflow:ellipsis;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
	}
	.my-Buyer-header-list2-xin{
		width: 100%;
		height: 30upx;
		
		padding-top: 32upx;
	}
	.my-Buyer-header-list2-xin>view:nth-of-type(1){
		width: 50%;
		/* height: 100%; */
		font-size: 26upx;
		color: #9B9B9B;
		line-height: 30upx;
		float: left;
	}
	.my-Buyer-header-list2-xin>view:nth-of-type(1)>span{
		padding-left: 10upx;
		padding-right: 10upx;
	}
	.my-Buyer-header-list2-xin>view:nth-of-type(2){
		width: 40%;
		/* height: 100%; */
		line-height: 30upx;
		font-size: 26upx;
		color: #9B9B9B;
		float: right;
		text-align: right;
	}
	.cler{
		clear: both;
	}
	.meirenkanwo{
		width: 330upx;
		height: 280upx;
		display: block;
		margin: 120upx auto auto auto;
		font-size: 28upx;
		text-align: center;
		color: #9B9B9B;
	}
	.meirenkanwo>image {
		width: 92%;
		height: 80%;
	}
	.scroll-v {
		flex: 1;
		/* #ifndef MP-ALIPAY */
		flex-direction: column;
		/* #endif */
		width: 750upx;
		height: 92vh;
		padding-bottom: 0vh;
	}
</style>
