<template>
	<div class="memberCenterAccount-contnet">
		<div class="memberCenterAccount-box">
			<div class="memberCenterAccount">
				<img class="MCA-person-box-Img" :src="vipBackground" alt="" />
				<div class="MCA-person-box" style="">
					<!-- {{userDatas}} -->
					<!-- 已是会员》》已付款界面 -->
					<div v-if="this.userDatas.vipState == '1'">
						<div class="vip-state"><div class="open"></div></div>
						<div class="vipUser">
							<div class='vipUserImg'>
								<img v-if="this.userDatas.compLogo" :src="this.userDatas.compLogo" alt="">
								<img v-else :src="userLogo" alt="">
							</div>
							<div class="vipUserContent">
								<div>
									<div>{{this.userDatas.userName}}</div>
									<div>银卡会员</div>
								</div>
								<div>{{this.userDatas.compName}}</div>	
							</div>
						</div>
						<div class="time">
							<div class="progress">
								<div class="progressEnd" :style="{width:this.progress}"></div>
							</div>
							<div class="time-youxiao">有效至&nbsp;{{this.userDatas.endTimeStr | formatDate()}}</div>
						</div>
						<div class="save">
							会员特权累计已节省{{this.userDatas.moeny}}元
						</div>
						<div class="buybtn" @click="goToBuyMember">立即续费</div>
					</div>
					<!-- 不是会员》》是孵化器会员》》孵化器会员 -->
					<div v-else-if="this.userDatas.vipState == '2'">
						<div class="vip-state"><div class="open"></div></div>
						<div class="vipUser">
							<div class='vipUserImg'>
								<img v-if="this.userDatas.compLogo" :src="this.userDatas.compLogo" alt="">
								<img v-else :src="userLogo" alt="">
							</div>
							<div class="vipUserContent">
								<div>
									<div>{{this.userDatas.userName}}</div>
									<div>孵化器会员</div>
								</div>
								<div>{{this.userDatas.compName}}</div>	
							</div>
						</div>
						<div class="time">
							<div class="progress">
								<div class="progressEnd" :style="{width:this.progress}"></div>
							</div>
							<div class="time-youxiao">有效至&nbsp;{{this.userDatas.endTimeStr | formatDate()}}</div>
						</div>
						<div class="save">
							会员特权累计已节省{{this.userDatas.moeny}}元
						</div>
						<div class="buybtn" @click="goToBuyMember">立即续费</div>
					</div>
					<!-- 不是会员》》会员过期 -->
					<div v-else-if="this.userDatas.vipState == '3'">
						<div class="vip-state"><div class="expired">已到期</div></div>
						<div class="vipUser">
							<div class='vipUserImg'>
								<img v-if="this.userDatas.compLogo" :src="this.userDatas.compLogo" alt="">
								<img v-else :src="userLogo" alt="">
							</div>
							<div class="vipUserContent">
								<div>
									<div>{{this.userDatas.userName}}</div>
									<div>银卡会员</div>
								</div>
								<div>{{this.userDatas.compName}}</div>	
							</div>
						</div>
						<div class="time">
							<div class="progress">
								<div class="progressEnd" :style="{width:this.progress}"></div>
							</div>
							<div class="time-youxiao">{{this.userDatas.endTimeStr | formatDate()}}&nbsp;已到期</div>
						</div>
						<div class="save">
							预估每月可为您节省{{this.userDatas.moeny}}元
						</div>
						<div class="buybtn" @click="goToBuyMember">立即续费</div>
					</div>
					<div v-else-if="this.userDatas.vipState == '0'">
						<!-- 未申请会员》》会员中心 -->
						<div v-if="this.userDatas.applyNum == ''">
							<div class="vip-state"><div class="close">未开通</div></div>
							<div class="vip-kind"><div>银卡会员</div></div>
							<div class="price">
								<span>￥199/年</span>
								<span>原价¥999/年</span>
							</div>
							<div class="privilege">6大会员特权</div>
							<div class="savemoney">预计每月至少可节省320元</div>
							<div class="buybtn" @click="openVip">立即开通</div>
						</div>
						<div v-else>
							<!-- 不是孵化器会员》》已申请会员》》待付款页面 -->
							<div class="vip-state"><div class="pay">待付款</div></div>
							<div class="vipUser">
								<div class='vipUserImg'>
									<img v-if="this.userDatas.compLogo" :src="this.userDatas.compLogo" alt="">
									<img v-else :src="userLogo" alt="">
								</div>
								<div class="vipUserContent">
									<div>
										<div>{{this.userDatas.userName}}</div>
										<div>银卡会员</div>
									</div>
									<div>{{this.userDatas.compName}}</div>	
								</div>
							</div>
							<div class="time">
								<div class="progress">
									<div class="progressEnd"></div>
								</div>
								<div class="time-youxiao">银卡会员：时长1年</div>
							</div>
							<div class="save">
								预估每月可为您节省{{this.userDatas.moeny}}元
							</div>
							<div class="buybtn" @click="goToBuyMember">立即开通</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { mapMutations, mapGetters } from 'vuex';
// import { Toast } from 'mint-ui';
// import axios from 'axios';
export default {
	name: 'memberCenterAccount',
	components: {},
	props: [
		'userDatas',
		'selected'
		],
	data() {
		return {
			user:[],
			userLogo: this.Static+'my/sasf.png',
			vipBackground:  this.Static+'images/business/home/personCenter/银卡.png', //会员背景图片
			overdueDay: '', // 过期天数
			effectiveTime: '', // 有效时间
			progress:'',
		};
	},
	created() {
		// if(this.userDatas.vipState == '1'){
		// 	console.log('this.progress = ');
		// }
		this.getDay();
	},
	computed: {},
	watch: {},
	filters: {
		/* 格式化时间戳 */
		formatDate(val) {
			return val.replace(/\//g, '.');
		}
	},
	mounted() {
	},
	methods: {
		getDay() {
			var startTime = this.userDatas.starTime;
			var nowTime = new Date().getTime();
			var endTime = this.userDatas.endTime;
			console.log(startTime,nowTime,endTime);
			var allTime = endTime-startTime;
			var sliceTime = endTime-nowTime;
			var time = sliceTime/allTime;
			var str = time.toFixed(6)*100+"%"
			console.log(endTime-startTime,endTime-nowTime,sliceTime/allTime)
			console.log(str,'还有多少时间');
			if(this.userDatas.vipState == '1' || this.userDatas.vipState == '2'){
				this.progress = str;
			}else if(this.userDatas.vipState == '3'){
				this.progress = '0%';
			}
		},
		goToBuyMember(){
			console.log('to购买会员');
			if (uni.getStorageSync('browserType') === 'WX') {
				this.createOrder();
			} else if (uni.getStorageSync('browserType') === 'FWX') {
				this.FWXcreateOrder();
			}
		},
		createOrder() {
			console.log('创建订单');
			if (this.userDatas.applyNum) {
				location.href = this.api2 + '/rest-rp/vip/createWxPayOrder?applyVipNum=' + this.userDatas.applyNum;
			} else {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					uni.showLoading({
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/vip/vipApply?userId=' + landRegistLG.user.id + '&lvId=' + this.userDatas.lvId, //接口地址。
						method: 'GET',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							uni.hideLoading();
							console.log(response.data.content,'会员订单号');
							let params = response.data.content;
							location.href = this.api2 + '/rest-rp/vip/createWxPayOrder?applyVipNum=' + params;
						},
						fail: error => {
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
			}
		},
		FWXcreateOrder(){
			if(this.userDatas.applyNum){
				uni.redirectTo({
				    url: './memberCenterItems/buyMember/buyMember'
				});
			}else{
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/vip/vipApply?userId=' + landRegistLG.user.id + '&lvId=' + this.userDatas.lvId, //接口地址。
						method: 'GET',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							uni.hideLoading();
							console.log(response.data.content,'会员订单号');
							uni.redirectTo({
							    url: './memberCenterItems/buyMember/buyMember'
							});
						},
						fail: error => {
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
			}
		},
		openVip(){
			console.log(this.selected,'155555555555555')
			if(this.selected == true){
				this.goToBuyMember();
			}else{
				this.$emit('scrollTo');
				uni.showToast({
					icon:'none',
				    title: '  请勾选并同意用户协议哦  ',
				    duration: 800
				});
			}
		}
	}
};
</script>

<style scoped>
.memberCenterAccount-contnet {
	position: relative;
	width: 100vw;
	padding: 30upx 4vw;
	background: #f9f9f9;
}
.memberCenterAccount-box {
	position: relative;
	width: 100%;
}
.memberCenterAccount {
	position: relative;
	width: 100%;
	/* height: 356upx; */
	height: 47.2vw;
	box-shadow: 0 4upx 20upx 0 rgba(124, 122, 135, 0.35);
	border-radius: 24upx;
}
.MCA-person-box {
	position: relative;
	width: 100%;
	z-index: 1;
	font-family: PingFangSC-Semibold;
	color: #FFFFFF;
}
.MCA-person-box-Img {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 0;
}
/* -----------------------------------------------未申请会员》》会员中心 */
.vip-state {
	display: flex;
	justify-content: flex-end;
}
.vip-state div{
	border-radius: 0 12px 0 12px;
	border-radius: 0px 12px 0px 12px;
	width: 112upx;
	height: 44upx;
	font-family: PingFangSC-Medium;
	font-size: 24upx;
	letter-spacing: 0;
	line-height: 24upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.vip-state .close {
	background: #02c2a2;
}
.vip-state .open{
	width: 112upx;
	height: 44upx;
}
.vip-state .expired{
	background: #ABAEB9;
}
.vip-state .pay{
	background: #FAB100;
}
.vip-kind{
	margin-top: 16upx;
}
.vip-kind div{
	font-size: 60upx;
	line-height: 60upx;
	margin-left: 40upx;
}
.price{
	margin-top: 64upx;
	height: 36upx;
}
.price span:nth-child(1){
	font-size: 36upx;
	letter-spacing: 0;
	line-height: 36upx;
	padding-left: 34upx;
}
.price span:nth-child(2){
	font-size: 24upx;
	letter-spacing: 0;
	line-height: 24upx;
	padding-left: 10upx;
	text-decoration:line-through;
}
.privilege{
	margin-top: 20upx;
	font-size: 28upx;
	letter-spacing: 0;
	line-height: 28upx;
	padding-left: 40upx;
}
.savemoney{
	margin-top: 20upx;
	font-size: 28upx;
	letter-spacing: 0;
	line-height: 28upx;
	padding-left: 40upx;
	font-family: PingFangSC-Regular;
}
.buybtn{
	position: absolute;
	top: 252upx;
	left: 458upx;
	width: 192upx;
	height: 64upx;
	background: #FFFFFF;
	border-radius: 81upx;
	border-radius: 33upx;
	color: #ABAEB9;
	display: flex;
	justify-content: center;
	align-items: center;
}
/* ***********************************************已是会员》》已付款界面 */
.vipUser{
	padding-top: 16upx;
	padding-left: 40upx;
	display: flex;
}
.vipUserImg{
	width: 100upx;
	height: 100upx;
	border-radius: 50%;
}
.vipUserImg img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.vipUserContent{
	margin-left: 10upx;
}
.vipUserContent div:nth-child(1){
	display: flex;
	align-items: center;
	font-family: PingFangSC-Medium;
	font-size: 36upx;
	color: #FFFFFF;
	text-align: center;
	line-height: 36upx;
	height: 40upx;
}
.vipUserContent>div:nth-child(1)>div:nth-child(2){
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	line-height: 24upx;
	border: 2upx solid #FFFFFF;
	border-radius: 4upx;
	width: 108upx;
	height: 36upx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 10upx;
}
.vipUserContent>div:nth-child(2){
	font-size: 28upx;
	letter-spacing: 0;
	line-height: 28upx;
	margin-top: 20upx;
}
.time{
	margin-top: 31upx;
	margin-left: 40upx;
	margin-right: 40upx;
	display: flex;
	align-items: center;
}
.time-youxiao{
	font-size: 20upx;
}
.progress{
	width: 420upx;
	height: 8upx;
	margin-right: 15upx;
	background: rgb(176,176,186);
	border-radius: 4upx;
}
.progressEnd{
	height: 100%;
	background: #FFFFFF;
	border-radius: 4upx;
}
.save{
	font-size: 28upx;
	letter-spacing: 0;
	line-height: 28upx;
	margin-top: 46upx;
	padding-left: 40upx;
}
</style>
