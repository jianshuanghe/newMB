<template>
	<!-- 粉丝 -->
	<view class="my-Fans">
		<view class="my-Focus-list" v-for="(item,index) in list" :key="index">
			<view class="my-Focus-list-box">
				<view class="my-Focus-list-con">
					<view class="my-Focus-list-img" @tap="gotocomp(item.userId)">
						<image :src="item.compLogo" v-if="item.compLogo!==''"></image>
						<image :src="comp" v-if="item.compLogo==''"></image>
					</view>
					<view class="my-Focus-list-name">
						<view @tap="gotocomp(item.userId)">{{item.compName}}</view>
						<view class="my-Focus-list-name-two" v-if="item.authState==2" @tap="gotocomp(item.userId)">资质认证</view>
						<view class="my-Focus-list-name-thr" v-if="item.isFollow === '1'" @tap="guanzhu(item)">已关注</view>
						<view class="my-Focus-list-name-thrs" v-if="item.isFollow === '0'" @tap="quxiao(item)">+关注</view>
					</view>
					<view class="my-Focus-list-edit" @tap="gotocomp(item.userId)">
						<!-- 商家类别 -->
						<span v-if="item.userType === '1'">经销商</span>
						<span v-if="item.userType === '0'">品牌商</span>
						<span v-if="item.userType === '2'">厂家</span>
						<span v-if="item.userType === '3'">其他</span>
						<span v-if="item.userType !== null" class="gang">|</span>
						<!-- 省市 -->
						<span>{{item.pcodeStr}}{{item.ccodeStr}}</span>
						<span class="gang" v-if="item.pcodeStr||item.ccodeStr !== null">|</span>
						<!-- 行业 -->
						<span>{{item.compTypeCodeStr}}</span>
						<span class="gang" v-if="item.compTypeCodeStr !== null">|</span>
						<!-- 时间 -->
						<span>{{item.createTime|formatDate}}加入</span>
					</view>
				</view>
			</view>
			<view class="my-Focus-list-gong" @tap="gotocomp(item.userId)">
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0">
					<view class="my-Focus-list-xiang">推广商机数：{{item.instCount}}</view>
					<view class="my-Focus-list-xiang ">采购数：{{item.purcCount}}</view>
					<view class="my-Focus-list-xiang">留言数：{{item.msgCount}}</view>
					<view class="my-Focus-list-xiang" @tap="Callphone()">拨打电话：{{item.phoneCount}}</view>
				</scroll-view>
			</view>
		</view>
		<view class="meirenkanwo" v-if="list.length == 0">
			<image :src="kong" mode=""></image>
			暂无！
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logo: this.Static+'my/logo.png',
				list:[],
				kong: this.Static+'my/kong.png',
			}
		},
		mounted() {
			
		},
		onLoad() {
			
		},
		created() {
			this.getFocus();
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
			guanzhu(e){//取消关注
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
								// this.floowdata=0;
								this.getFocus();
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
			quxiao(e){//关注
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
								// this.floowdata=1;
								this.getFocus();
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
			Callphone(){
				// uni.makePhoneCall({
				// 	phoneNumber: '17600121378' //仅为示例
				// });
			},
			gotocomp(e){
				console.log(e+'to商家详情')
				uni.navigateTo({
					url: '/modules/myCompany/mybusiness/my-business?id='+e,
				});
			},
			getFocus() {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/follow/selectMyFansList?page=1&userId='+landRegistLG.user.id, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content.list
							console.log(this.list)
							// this.$store.commit('setMation', this.List); // 更新vuex
							
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
		},
	}
</script>

<style>
	.my-Fans{
		width: 100%;
		min-height: 100%;
	}
	.my-Focus-list{
		width: 100%;
		height: 266upx;
		background: #FFFFFF;
		margin-top: 20upx;
		padding: 0.1rem;
	}
	.my-Focus-list-box{
		width: 90%;
		margin: 0 auto;
		height: 180upx;
		border-bottom: 2upx solid #F5F5F5;
		padding: 0.1upx;
	}
	.my-Focus-list-con{
		width: 100%;
		height: 100upx;
		margin-top: 6%;
	}
	.my-Focus-list-img{
		width: 100upx;
		height: 100%;
		float: left;
	}
	.my-Focus-list-img>image{
		width: 100%;
		height: 100%;
		border: 8upx;
	}
	.my-Focus-list-name{
		width: 82%;
		height: 50%;
		float: right;
		margin-top: -5upx;
	}
	.my-Focus-list-name>view:nth-of-type(1){
		max-width: 278upx;
		height: 100%;
		font-size: 34upx;
		color: #2E2E30;
		font-weight: bold;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		float: left;
	}
	.my-Focus-list-name-two{
		background: #DFF7F3;
		border-radius: 4upx;
		padding: 2upx 10upx 2upx 10upx;
		font-size: 20upx;
		color: #02C2A2;
		float:left;
		margin-top: 8upx;
		margin-left: 20upx;
	}
	.my-Focus-list-name-thr{
		width: 106upx;
		height: 46upx;
		border: 2upx solid #BDBDBD;
		border-radius: 4upx;
		float: right;
		text-align: center;
		line-height: 46upx;
		color: #BDBDBD;
		font-size: 30upx;
		margin-top:-2upx ;
	}
	.my-Focus-list-name-thrs{
		width: 106upx;
		height: 46upx;
		border: 2upx solid #02C2A2;
		border-radius: 4upx;
		float: right;
		text-align: center;
		line-height: 46upx;
		color: #02C2A2;
		font-size: 30upx;
		margin-top:-2upx ;
	}
	.my-Focus-list-edit{
		width: 82%;
		height: 50%;
		float: right;
		font-size: 24upx;
		color: #5D5D5D;
		line-height: 50upx;
		margin-top: 10upx;
	}
	.gang{
		padding-left: 10upx;
		padding-right: 10upx;
	}
	.my-Focus-list-gong{
		overflow: auto;
	}
	.scroll-view_H{
		width: 90%;
		margin: 0 auto;
		height: 84upx;
	}
	.my-Focus-list-xiang{
		font-size: 22upx;
		color: #9B9B9B;
		line-height: 84upx;
		float: left;
	}
	.my-Focus-list-xiang:nth-of-type(2){
		margin-left: 40upx;
	}
	.my-Focus-list-xiang:nth-of-type(3){
		margin-left: 40upx;
	}
	.my-Focus-list-xiang:nth-of-type(4){
		margin-left: 40upx;
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
