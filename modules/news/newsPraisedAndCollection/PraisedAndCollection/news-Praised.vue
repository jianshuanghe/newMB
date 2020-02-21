<template>
	<view class="news-Praised">
		<!-- 消息 已获赞 -->
		<view class="news-Praised-title">
			共收到<span>{{nums||'0'}}</span>个赞
		</view>
		<view class="news-Praised-con" v-for="(item,index) in list" :key="index">
			<view class="news-Praised-conOne">
				<view class="news-Praised-head">
					<image :src="item.compLogo" v-if="item.compLogo!==''"></image>
					<image :src="comp" v-if="item.compLogo==''"></image>
				</view>
				<view class="news-Praised-body">
					<view class="news-Praised-body-shang">
						<view>{{item.compName}}</view>
						<view>点赞了您的商机</view>
						<view>
							<image :src="zan2"></image>
						</view>
					</view>
					<view class="news-Praised-body-xia">
						<view class="news-Praised-body-xia-nei">
							{{item.title}}
						</view>
						<view class="news-Praised-body-xia-img">
							<image :src="item.img"></image>
						</view>
						<view class="news-Praised-body-xias">{{item.createTime|formatDate}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="news-Praised-con">
			<view class="news-Praised-conOne">
				<view class="news-Praised-head">
					<image :src="logo"></image>
				</view>
				<view class="news-Praised-body">
					<view class="news-Praised-body-shang">
						<view>商家名称</view>
						<view>点赞了您的商机</view>
						<view>
							<image v-if="num === 0" :src="zan2" @tap="xuan(0)"></image>
							<image v-if="num === 1" :src="zan1" @tap="xuan(1)"></image>
						</view>
					</view>
					<view class="news-Praised-body-xia">
						<view class="news-Praised-body-xia-neis">
							阿萨德hi一会茪那就看到阿萨德健康好的可较好地加速阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德度阿萨德阿萨德阿萨德
						</view>
						<view class="news-Praised-body-xias">2小时前</view>
					</view>
				</view>
			</view>
		</view> -->
		<view class="meirenkanwo" v-if="list.length === 0">
			<image :src="kong" mode=""></image>
			暂无！
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logo:this.Static+'my/logo.png',
				zan1:this.Static+'news/zan1.png',
				zan2:this.Static+'news/zan2.png',
				num:0,
				ce:this.Static+'my/2.png',
				list:[],
				nums:'',
				kong:this.Static+'my/kong.png',
				comp:this.Static+'my/comp.png',
			}
		},
		mounted() {
	
		},
		onLoad() {
			
		},
		created() {
			// 被赞列表
			this.Praised();
			this.shareEachPage(); // 分享
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
			xuan(e){
				if(e === 0){
					this.num = 1;
				}else if(e = 1){
					this.num = 0;
				}
			},
			Praised(){//被赞列表
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/myLikeOrFollowList?userId='+landRegistLG.user.id+'&page=1&type=2', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.nums=response.data.content.count
							this.list=response.data.content.list
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
	.news-Praised{
		width: 100%;
		min-height: 100%;
	}
	.news-Praised-title{
		width: 90%;
		height: 72upx;
		font-size: 24upx;
		color: #2E2E30;
		margin: 0 auto;
		line-height: 72upx;
	}
	.news-Praised-title>span{
		font-size: 24upx;
		color: #02C2A2;
	}
	.news-Praised-con{
		width: 100%;
		height: 246upx;
		background: #FFFFFF;
	}
	.news-Praised-conOne{
		width: 90%;
		height: 100%;
		margin: 0 auto;
		border-bottom: 2upx solid #F5F5F5;
		margin-top:2upx ;
	}
	.news-Praised-head{
		width: 72upx;
		height: 100%;
		float: left;
		border-radius: 50%;
	}
	.news-Praised-head>image{
		width: 72upx;
		height: 72upx;
		margin-top: 30upx;
		border-radius: 50%;
	}
	.news-Praised-body{
		width: 87%;
		height: 100%;
		float: right;
	}
	.news-Praised-body-shang{
		width: 100%;
		height: 110upx;
		overflow: hidden;
	}
	.news-Praised-body-shang>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		margin-top: 25upx;
	}
	.news-Praised-body-shang>view:nth-of-type(2){
		font-size: 24upx;
		color: #9B9B9B;
		float: left;
	}
	.news-Praised-body-shang>view:nth-of-type(3){
		width: 30upx;
		height: 30upx;
		float: right;
		margin-top: -20upx;
	}
	.news-Praised-body-shang>view:nth-of-type(3)>image{
		width: 100%;
		height: 100%;
	}
	.news-Praised-body-xia{
		width: 100%;
		height: 120upx;
		margin-top: 20upx;
		position: relative;
	}
	.news-Praised-body-xia-nei{
		width: 78%;
		font-size: 26upx;
		color: #2E2E30;
		line-height: 34upx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		float: left;
	}
	.news-Praised-body-xia-neis{
		font-size: 26upx;
		color: #2E2E30;
		line-height: 34upx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		float: left;
	}
	.news-Praised-body-xia-img{
		float: right;
		width: 94upx;
		height: 94upx;
	}
	.news-Praised-body-xia-img>image{
		width: 100%;
		height: 100%;
	}
	.news-Praised-body-xias{
		width: 20%;
		font-size: 11px;
		color: #9B9B9B;
		clear: both;
		bottom: 30upx;
		position: absolute;
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
