<template>
	<view class="news-Collection">
		<view class="news-Collection-title">
			您的商机已被收藏<span>{{nums||'0'}}</span>次
		</view>
		<view class="news-Collection-con" v-for="(item,index) in list" :key="index">
			<view class="news-Collection-conOne">
				<view class="news-Collection-head">
					<image :src="item.compLogo" v-if="item.compLogo!==''"></image>
					<image :src="comp" v-if="item.compLogo==''"></image>
				</view>
				<view class="news-Collection-body">
					<view class="news-Collection-body-shang">
						<view>{{item.compName}}</view>
						<view>收藏了您的商机</view>
						<view><image :src="shouc"></image></view>
					</view>
					<view class="news-Collection-body-xia">
						<view class="news-Collection-body-xia-nei">
							{{item.title}}
						</view>
						<view class="news-Collection-body-xia-img">
							<image :src="item.img"></image>
						</view>
						<view class="news-Collection-body-xias">{{item.createTime|formatDate}}</view>
					</view>
				</view>
			</view>
		</view>
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
				ce:this.Static+'my/2.png',
				shouc:this.Static+'news/shouc.png',
				zan2:this.Static+'news/zan2.png',
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
		created() {
			//被收藏列表
			this.Collection();
			this.shareEachPage(); // 分享
		},
		methods: {
			Collection(){//被收藏列表
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/myLikeOrFollowList?userId='+landRegistLG.user.id+'&page=1&type=1', //接口地址。
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
	.news-Collection{
		width: 100%;
		min-height: 100%;
	}
	.news-Collection-title{
		width: 90%;
		height: 72upx;
		font-size: 24upx;
		color: #2E2E30;
		margin: 0 auto;
		line-height: 72upx;
	}
	.news-Collection-title>span{
		font-size: 24upx;
		color: #02C2A2;
	}
	.news-Collection-con{
		width: 100%;
		height: 274upx;
		background: #FFFFFF;
	}
	.news-Collection-conOne{
		width: 90%;
		height: 100%;
		margin: 0 auto;
		border-bottom: 2upx solid #F5F5F5;
		margin-top:2upx ;
	}
	.news-Collection-head{
		width: 72upx;
		height: 100%;
		float: left;
		border-radius: 50%;
	}
	.news-Collection-head>image{
		width: 72upx;
		height: 72upx;
		margin-top: 30upx;
		border-radius: 50%;
	}
	.news-Collection-body{
		width: 87%;
		height: 100%;
		float: right;
	}
	.news-Collection-body-shang{
		width: 100%;
		height: 110upx;
		overflow: hidden;
	}
	.news-Collection-body-shang>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		margin-top: 25upx;
	}
	.news-Collection-body-shang>view:nth-of-type(2){
		font-size: 24upx;
		color: #9B9B9B;
		float: left;
	}
	.news-Collection-body-shang>view:nth-of-type(3){
		width: 30upx;
		height: 30upx;
		float: right;
		margin-top: -20upx;
	}
	.news-Collection-body-shang>view:nth-of-type(3)>image{
		width: 100%;
		height: 100%;
	}
	.news-Collection-body-xia{
		width: 100%;
		height: 120upx;
		margin-top: 20upx;
	}
	.news-Collection-body-xia-nei{
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
	.news-Collection-body-xia-img{
		float: right;
		width: 94upx;
		height: 94upx;
	}
	.news-Collection-body-xia-img>image{
		width: 100%;
		height: 100%;
	}
	.news-Collection-body-xias{
		width: 20%;
		font-size: 11px;
		color: #9B9B9B;
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
		clear: both;
	}
	.meirenkanwo>image {
		width: 92%;
		height: 80%;
	}
</style>
