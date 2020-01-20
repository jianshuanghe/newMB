<template>
	<div class="basicInfor-content">
		
		<div class="basicInfor">
			<div class="BIF-top">
				<view class="BIF-top-box">
					<view class="BIF-top-box-img">
						<image :src="GET_MY.headers.compLogo"></image>
					</view>
					<view class="BIF-top-box-zi">
						<p>{{GET_MY.headers.companyName|ellipsis}}</p>
						<p><image :src="renzheng" v-if="GET_MY.headers.authState==2"></image></p>
						<p v-if="GET_MY.headers.userType==0">品牌商</p>
						<p v-if="GET_MY.headers.userType==1">经销商</p>
						<p v-if="GET_MY.headers.userType==2">厂家</p>
						<p v-if="GET_MY.headers.userType==3">其他</p>
					</view>
				</view>
			</div>
			<div class="BIF-cont">
				<div class="BIF-intro">
					<div class="BIF-intro-box">
						<p class="title-BIF left">公司简介:</p>
						<p class="text-BIF left">{{ GET_MY.headers.companyIntro || '未填写' }}</p>
						<div class="clear"></div>
					</div>
				</div>
				<div class="BIF-intro">
					<div class="BIF-intro-box">
						<p class="title-BIF left">所属行业:</p>
						<p class="text-BIF left">{{ GET_MY.headers.compTypePcodeStr || '未填写' }}</p>
						<div class="clear"></div>
					</div>
				</div>
				<div class="BIF-intro">
					<div class="BIF-intro-box">
						<p class="title-BIF left">联系地址:</p>
						<p class="text-BIF left">{{ GET_MY.headers.addrStr || '未填写' }}</p>
						<div class="clear"></div>
					</div>
				</div>
				<div class="BIF-intro">
					<div class="BIF-intro-box">
						<p class="title-BIFTT">微信公众号二维码:</p>
						<div class="qr-code-BIF"><img :src="GET_MY.headers.wechatQrImg" alt="" class="" /></div>
					</div>
				</div>
				<div class="BIF-intro">
					<div class="BIF-intro-box">
						<p class="title-BIF left">联系人:</p>
						<p class="text-BIF left">{{ GET_MY.headers.contactMan || '未填写' }}</p>
						<div class="clear"></div>
					</div>
				</div>
				<div class="BIF-intro">
					<div class="BIF-intro-box">
						<p class="title-BIF left">联系电话:</p>
						<p class="text-BIF left">{{ GET_MY.headers.contactTelphone || '未填写' }}</p>
						<div class="clear"></div>
					</div>
				</div>
				<div class="BIF-intro">
					<div class="BIF-intro-box">
						<p class="title-BIF left">联系邮箱:</p>
						<p class="text-BIF left">{{ GET_MY.headers.contactEmail || '未填写' }}</p>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="BIF-bottom">
			<div class="BIF-btn" @click="clickBasicInforEdit"><p class="">编辑</p></div>
		</div>
	</div>
</template>

<script>
import logo from '@/static/mbcImg/images/business/home/personCenter/company/logo.jpg';
import certified from '@/static/mbcImg/images/business/home/personCenter/company/certified.png';
import noCertified from '@/static/mbcImg/images/business/home/personCenter/company/noCertified.png';
import qrCodeIcon from '@/static/mbcImg/images/business/home/personCenter/company/qrCodeIcon.png';
import renzheng from '@/static/mbcImg/my/renzheng.png';

import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'basicInfor',
	components: {},
	data() {
		return {
			certified: certified,
			noCertified: noCertified,
			logo: logo,
			renzheng:renzheng,
			addressDetail: '', // 页面显示地址
			companyIntro:'asdasdasd',//公司简介
			compTypePcodeStr:'',//所属行业
			contactEmail:'',//联系邮箱
			contactTelphone:'',//联系电话
			contactMan:'',//联系人
		};
	},
	components:{
		
	},
	created() {
		// this.UserData = this.PERSONCENTER.basicInfor;
		// if (this.EVN === 'production') {
		// 	axios.defaults.baseURL = this.apiProd2;
		// }
		// this.getUserData();
	},
	filters: {
		ellipsis (value) {
		  if (!value) return ''
		  if (value.length > 9) {
			return value.slice(0,9) + '...'
		  }
		  return value
		}
	},
	computed: {
		...mapGetters(['GET_MY', 'QUICKNAVCO'])
	},
	watch: {
		GET_MY: {
			handler(a, b) {
				
			},
			deep: true
		}
	},
	mounted() {},
	methods: {
		getUserData() {
			console.log('获取用户信息，全部');	
		},
		clickBasicInforEdit() {
			console.log('基本信息编辑');
			uni.navigateTo({
				url:'/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor'
			})
		}
	}
};
</script>

<style scoped>
.basicInfor-content {
	position: relative;
	width: 100%;
}

.basicInfor {
	position: relative;
	width: 100vw;
	-webkit-overflow-scrolling: touch;
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




.BIF-cont {
	position: relative;
	width: 100%;
	padding: 4vw;
	background: #fff;
	margin-bottom: 20vw;
	margin-top: 20upx;
}
.BIF-intro {
	position: relative;
	width: 100%;
}
.BIF-intro-box {
	position: relative;
	width: 100%;
	padding-bottom: 3vw;
}
.title-BIF {
	position: relative;
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #9B9B9B;
	line-height: 8vw;
	width: 20%;
}
.text-BIF {
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #5d5d5d;
	line-height: 5.5vw;
	width: 80%;
	padding-top: 1.5vw;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}
.title-BIFTT {
	position: relative;
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #9B9B9B;
	line-height: 8vw;
}
.text-BIFTT {
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #5d5d5d;
	line-height: 5.5vw;
	padding-top: 1.5vw;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}
.BIF-bottom {
	position: fixed;
	width: 100%;
	padding: 1.5vw 4vw 1.5vw 4vw;
	bottom: 0;
	z-index: 105;
	background: #fff;
}
.BIF-btn {
	position: relative;
	width: 100%;
	background: #02c2a2;
	border-radius: 2px;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #ffffff;
	text-align: center;
	letter-spacing: 0;
	line-height: 12vw;
}
.BIF-btn>p{
	line-height: 12vw;
}
.qr-code-BIF {
	position: relative;
	width: 80%;
	margin-left: 20%;
}
.qr-code-BIF > img {
	position: relative;
	width: 19.7vw;
	height: 19.7vw;
}
.contat-BIF {
	position: relative;
	width: 100%;
}
.contat-box {
	position: relative;
	width: 100%;
}
.contat-left {
	position: relative;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #5d5d5d;
	line-height: 8vw;
}
.contat-right {
	position: absolute;
	right: 0;
	top: 0;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #5d5d5d;
	line-height: 8vw;
}
</style>
