<template>
	<div class="qualificatCert-content">
		<div class="BIF-top">
			<view class="BIF-top-box">
				<view class="BIF-top-box-img">
					<image :src="this.UserData.compLogo"></image>
				</view>
				<view class="BIF-top-box-zi">
					<p>{{this.UserData.compName|ellipsis}}</p>
					<p><image :src="renzheng" v-if="this.UserData.authState==2"></image></p>
					<p v-if="this.UserData.userType==0">品牌商</p>
					<p v-if="this.UserData.userType==1">经销商</p>
					<p v-if="this.UserData.userType==2">厂家</p>
					<p v-if="this.UserData.userType==3">其他</p>
				</view>
			</view>
		</div>
		<view class="BIF-content">
			<view class="BIF-content-one">
				<span>品牌名称:</span><span style="color: #2E2E30;margin-left: 10upx;">{{this.UserData.authBrandName}}</span>
			</view>
			<view class="BIF-content-ones">
				<view>推广内容:</view><view style="color: #2E2E30;margin-left: 10upx;">{{this.UserData.authBrandContent}}</view>
				<view class="clear"></view>
			</view>
			<view class="BIF-content-one">
				<span>主体类型:</span>
				<span style="color: #2E2E30;margin-left: 10upx;" v-if="this.UserData.authCompType==0">个体</span>
				<span style="color: #2E2E30;margin-left: 10upx;" v-if="this.UserData.authCompType==1">企业</span>
			</view>
			<view class="BIF-content-one">
				<span>主体身份:</span>
				<span style="color: #2E2E30;margin-left: 10upx;" v-if="this.UserData.userType==0">品牌商</span>
				<span style="color: #2E2E30;margin-left: 10upx;" v-if="this.UserData.userType==1">经销商</span>
				<span style="color: #2E2E30;margin-left: 10upx;" v-if="this.UserData.userType==2">厂家</span>
				<span style="color: #2E2E30;margin-left: 10upx;" v-if="this.UserData.userType==3">其他</span>
			</view>
			<view class="BIF-content-one" style="border-bottom: 2upx solid #F5F5F5;padding-bottom: 20upx;">
				<span>统一社会信用代码:</span><span style="color: #2E2E30;margin-left: 10upx;">{{this.UserData.authQualNum}}</span>
			</view>
		</view>
		<view class="BIF-contents">
			<view class="BIF-content-one">营业执照:</view>
			<view class="BIF-contents-image" style="margin-left: 160upx;"><image :src="this.UserData.authQualImg" mode=""></image></view>
			<view class="BIF-content-one">
				<span>有效期:</span><span style="color: #2E2E30;margin-left: 10upx;">{{this.UserData.qualTime|formatDate}}</span>
			</view>
			<view class="BIF-content-one" style="margin-top: -20upx;border-bottom: 2upx solid #F5F5F5;padding-bottom: 10upx;">
				<span>注册地:</span><span style="color: #2E2E30;margin-left: 10upx;">{{this.UserData.regPcodeStr}}-{{this.UserData.regCcodeStr}}-{{this.UserData.regAcodeStr}}</span>
			</view>
		</view>
		<view class="BIF-con">
			<view class="BIF-content-one">法人身份证:</view>
			<view class="BIF-contents-image" style="float:left;margin-left: 160upx;"><image :src="this.UserData.authLegalNum" mode=""></image></view>
			<view class="BIF-contents-image" style="float:left;margin-left: 20upx;"><image :src="this.UserData.authLegalNum01" mode=""></image></view>
		</view>
		<view class="BIF-bottom">
			<view class="BIF-content-one" style="height: 60upx;padding-top: 10upx;">
				<span>审核说明:</span><span style="color: #2E2E30;margin-left: 10upx;">{{this.UserData.authContent}}</span>
			</view>
			<view class="BIF-content-one" style="height: 60upx;">
				<span>审核结果:</span>
				<span style="color: #2E2E30;margin-left: 10upx;" v-if="this.UserData.authState==0">未提交审核</span>
				<span style="color: #2E2E30;margin-left: 10upx;" v-if="this.UserData.authState==1">等待认证</span>
				<span style="color: #2E2E30;margin-left: 10upx;" v-if="this.UserData.authState==2">认证成功</span>
				<span style="color: #2E2E30;margin-left: 10upx;" v-if="this.UserData.authState==3">认证失败</span>
			</view>
			<view class="BIF-content-one" style="height: 60upx;">
				<span>审核时间:</span><span style="color: #2E2E30;margin-left: 10upx;">{{this.UserData.authTimeStr|formatDate}}</span>
			</view>
		</view>
		<view style="height: 140upx;"></view>
		<view class="BIF-footer">
			<view @tap="gotobianji">
				编辑
			</view>
		</view>
	</div>
</template>

<script>
	import renzheng from '@/static/mbcImg/my/renzheng.png';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		name: 'qualificatCert',
		components: {
			
		},
		data() {
			return {
				UserData:[],
				renzheng:renzheng,
			}
		},
		created() {
			
			this.getmy();
		},
		computed: {
			...mapGetters(['GET_MY'])
		},
		watch: {
			GET_MY: {
				handler(a, b) {
					this.UserData = a.Authen; // 认证资质
				},
				deep: true
			}
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 15) {
				return value.slice(0,15) + '...'
			  }
			  return value
			},
			ellipsiss (value) {
			  if (!value) return ''
			  if (value.length > 30) {
				return value.slice(0,30) + '...'
			  }
			  return value
			},
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
		mounted() {},
		methods: {
			getmy() {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/compAuth/'+landRegistLG.user.id, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content
							this.$store.commit('setAuthen', this.list); // 更新vuex
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
			gotobianji(){
				console.log('资质认证')
				uni.navigateTo({
					url: '/modules/myCompany/personAndCompany/companyInfor/companyInforEdit'
				});
			},
		}
	};
</script>

<style scoped>
.qualificatCert-content {
	position: relative;
	width: 100%;
}
.BIF-top{
	width: 100%;
	height: 182upx;
	background: #FFFFFF;
	overflow: hidden;
}
.BIF-top-box{
	width: 90%;
	height: 102upx;
	margin: 40upx auto;
}
.BIF-top-box-img{
	width: 102upx;
	height: 102upx;
	float: left;
}
.BIF-top-box-img>image{
	width: 100%;
	height: 100%;
	border-radius: 6upx;
}
.BIF-top-box-zi{
	width: 82%;
	height: 100%;
	float: right;
}
.BIF-top-box-zi>p:nth-of-type(1){
	height: 40upx;
	line-height: 40upx;
	font-size: 40upx;
	color: #2E2E30;
	float: left;
}
.BIF-top-box-zi>p:nth-of-type(2){
	height: 36upx;
	width: 132upx;
	float: left;
	margin-top: 5upx;
	margin-left: 10upx;
}
.BIF-top-box-zi>p:nth-of-type(2)>image{
	width: 100%;
	height: 100%;
}
.BIF-top-box-zi>p:nth-of-type(3){
	padding-top: 20upx;
	font-size: 26upx;
	color: #9B9B9B;
	clear: both;
}
.BIF-content{
	width: 100%;
	position: relative;
	margin-top: 20upx;
	background: #FFFFFF;
}
.BIF-content-one{
	width: 90%;
	height: 70upx;
	line-height: 70upx;
	margin: 0 auto;
	font-size: 28upx;
	color: #9B9B9B;
	padding-top: 10upx;
}
.BIF-content-ones{
	width: 90%;
	margin: 20upx auto;
	font-size: 28upx;
	color: #9B9B9B;
	background: #FFFFFF;
	min-height: 70%;
}
.BIF-content-ones>view:nth-of-type(1){
	float: left;
}
.BIF-content-ones>view:nth-of-type(2){
	float: left;
	min-height: 90%;
	width: 79%;
}
.clear{
	clear: both;
}
.BIF-contents{
	width: 100%;
	background: #FFFFFF;
	height: 440upx;
}
.BIF-contents-image{
	width: 260upx;
	height: 200upx;
	border: 2upx solid #D2D2D2;
}
.BIF-contents-image>image{
	width: 100%;
	height: 100%;
}

.BIF-con{
	width: 100%;
	height: 328upx;
	background: #FFFFFF;
}
.BIF-bottom{
	width: 100%;
	height: 230upx;
	margin-top: 20upx;
	background: #FFFFFF;
}
.BIF-footer{
	width: 100%;
	height: 120upx;
	background: #FFFFFF;
	overflow: hidden;
	position: fixed;
	bottom: 0;
}
.BIF-footer>view:nth-of-type(1){
	width: 90%;
	height: 90upx;
	background: #02C2A2;
	border-radius: 4upx;
	text-align: center;
	line-height: 90upx;
	font-size: 28upx;
	color: #FFFFFF;
	margin: 16upx auto;
}
</style>
