<template>
	<view class="body1">
		<view class="follow" v-if="!disabled">
			<!-- logo -->
			<view class="logo">
				<image v-if="userData.compLogo" :src="userData.compLogo" style="width: 100%; height: 100%;border-radius: 50%;"></image>
				<image v-else-if="userData.headImg" :src="userData.headImg" style="width: 100%; height: 100%;border-radius: 50%;"></image>
				<!-- 默认头像 -->
				<image v-else :src="defaultImg" style="width: 100%; height: 100%;border-radius: 50%;"></image>
			</view>
			<!-- 名称和更新时间 -->
			<view class="content">
				<view class="content-name">
					<view v-if="userData.companyName">{{userData.companyName}}</view>
					<view v-else-if="userData.nickname">{{userData.nickname}}</view>
					<view v-else-if="list.companyName">{{list.companyName}}</view>
					<view v-else>{{list.nickname}}</view>
				</view>
				<view class="content-time" v-if="this.upDataTime.newsUpdateTime">{{this.upDataTime.newsUpdateTime | dateTime}}</view>
				<view class="content-time" v-else>{{upDataTime.updateTime | dateTime}}</view>
			</view>
			<!-- 未关注 -->
			<!-- <view class="focus" @click="addFocus(dataList.userId)" v-if="userData.isUserFollow=='0'">+  关注</view> -->
			<!-- 已关注 -->
			<view class="focus" @click="Focused(dataList.userId)" v-if="userData.isUserFollow">{{focusText}}</view>
			<view class="focus" v-else >+关注</view>
		</view>
	</view>
</template>

<script>
	import date from '@/static/mbcJs/dateTime.js';
	export default{
		components:{
			
		},
		props:[
			'updataTime',
			'disabled',
			'routeParam',
			'dataList'
		],
		created() {
			this.users();
			this.isUserFollow();
		},
		data(){
			return{
				list:[],
				upDataTime:this.updataTime,
				defaultImg: this.Static+'my/hea.png',
				userData:this.dataList.userRetVO,
				focusText: ''
			}
		},
		filters: {
		    /* 格式化时间戳 */
		    dateTime (val) {
		      return date.dateTime('', val);
		    },
		  },
		methods:{
			users(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/'+landRegistLG.user.id, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content
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
			isUserFollow(){
				if(this.userData.isUserFollow=='0'){
					this.focusText="+关注"
				}
				if(this.userData.isUserFollow=='1'){
					this.focusText="已关注"
				}
			},
			Focused(e){
				console.log(e,'点击了关注');
				if(uni.getStorageSync('landRegist')){
				     let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				     console.log(landRegistLG.user.id);
					 let parmas = {
					 	userId: landRegistLG.user.id,
					 	modelId: e,
					 	type: 4
					 };
					if(parmas.userId!=parmas.modelId){
						this.focusStore(parmas).then(res => {
							console.log(res);
							if (res.success === true) {
								this.focusText = '已关注'
							} else {
								this.focusText = '+关注'
							}
						})
						.catch(err => {
							console.log(err);
						});
					}else{
						uni.showToast({
							title: '自己不能关注自己哦',
							icon: 'none',
							duration: 1000
						});
					}
				}else if (!uni.getStorageSync('landRegist')) {
				 this.landRegistra(); // 判断登录状态
				}
			},
			
		}
	}
</script>

<style>
	.body1{
		display: flex;
		justify-content: center;
	}
	.follow{
		width: 92%;
		display: flex;
		align-items: center;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
	.logo{
		width: 96upx;
		height: 96upx;
	}
	.content{
		width: 424upx;
		margin-left: 20upx;
		padding-right: 20upx;
	}
	.content-name view{
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 40upx;
	}
	.content-time{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #9B9B9B;
		letter-spacing: 0;
		line-height: 24upx;
		margin-top: 16upx;
	}
	.focus{
		width: 124upx;
		height: 56upx;
		background: #00C3A2;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: PingFangSC-Medium;
		font-size: 28upx;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 28upx;
	}
</style>
