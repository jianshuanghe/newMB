<template>
	<div class="memberCenter-content">
		<topBox><p class="title-putIn">会员中心</p></topBox>
		<scroll-view
			class="scroll-v list"
			scroll-y="true"
			:show-scrollbar="false"
			:scroll-top="scrollTop"
			:scroll-with-animation="true"
			@scroll="scroll"
			@scrolltolower="loadMore()"
		>
			<div class="memberCenter-box">
				<div class="MCB-box">
					<!--tips-->
					<!-- <memberCenterTips v-if="UserData.vipState == '0' && !UserData.applyNum"></memberCenterTips> -->
					<!--账户-->
					<memberCenterAccount :userDatas="UserData" :selected="isSelected" @scrollTo="scrollTo"></memberCenterAccount>
					<!--开通-->
					<!-- <memberCenterOpen v-if="UserData.vipState !== '2'"></memberCenterOpen> -->
					<!--权益-->
					<memberCenterEquity></memberCenterEquity>
					<!--创意-->
					<!-- <memberCenterCreate></memberCenterCreate> -->
					<!--广告-->
					<!-- <memberCenterAd></memberCenterAd> -->
					<!--投放-->
					<!-- <memberCenterPutIn></memberCenterPutIn> -->
					<!--监测-->
					<!-- <memberCenterTest></memberCenterTest> -->
					<!--推广-->
					<!-- <memberCenterExtend></memberCenterExtend> -->
					<!-- 陌拜会员协议 -->
					<membershipAgreement :userDatas="UserData" @isvipSelected="vipSelected" id="1"></membershipAgreement>
				</div>
			</div>
		</scroll-view>
		<div class="MCB-btn">
			<!--待付款状态-->
			<memberCenterCancelAtOpen :userDatas="UserData" v-if="UserData.applyNum" @cancelMember="cancelMember"></memberCenterCancelAtOpen>
			<!--立即开通/立即续费-->
			<memberCenterAtOpen 
			v-if="UserData.vipState && !UserData.applyNum" 
			:userDatas="UserData" 
			:selected="isSelected"
			@scrollTo="scrollTo"
			></memberCenterAtOpen>
		</div>
	</div>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import memberCenterTips from './memberCenterItems/memberCenterTips';
import memberCenterAccount from './memberCenterItems/memberCenterAccount';
// import memberCenterOpen from './memberCenterItems/memberCenterOpen';
import memberCenterEquity from './memberCenterItems/memberCenterEquity';
import membershipAgreement from './memberCenterItems/membershipAgreement';
// import memberCenterCreate from './memberCenterItems/memberCenterCreate';
// import memberCenterAd from './memberCenterItems/memberCenterAd';
// import memberCenterPutIn from './memberCenterItems/memberCenterPutIn';
// import memberCenterTest from './memberCenterItems/memberCenterTest';
// import memberCenterExtend from './memberCenterItems/memberCenterExtend';
import memberCenterCancelAtOpen from './memberCenterItems/memberCenterCancelAtOpen';
import memberCenterAtOpen from './memberCenterItems/memberCenterAtOpen';
import { mapMutations, mapGetters } from 'vuex';
// import { Toast } from 'mint-ui';
// import axios from 'axios';
export default {
	name: 'memberCenter',
	components: {
		topBox,
		memberCenterTips,
		memberCenterAccount,
		// memberCenterOpen,
		memberCenterEquity,
		membershipAgreement,
		// memberCenterCreate,
		// memberCenterAd,
		// memberCenterPutIn,
		// memberCenterTest,
		// memberCenterExtend,
		memberCenterCancelAtOpen,
		memberCenterAtOpen
	},
	data() {
		return {
			UserData: null, // 接口返回的会员数据
			isSelected: false,
			//滚动条位置
			scrollTop: 0, //
			old: {
				scrollTop: 0
			}
		};
	},
	created() {
		this.getUserData();
	},
	computed: {},
	watch: {},
	mounted() {},
	methods: {
		loadMore(e) {
			console.log(e);
		},
		//记录滚动条位置
		scroll: function(e) {
			this.old.scrollTop = e.detail.scrollTop;
			// console.log(e)
		},
		goTop() {
			this.scrollTop = this.old.scrollTop;
			// console.log(e)
			//在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。
			this.$nextTick(function() {
				this.scrollTop = 1500;
			});
		},
		cancelMember(e) {
			console.log(e, this.UserData, '撤销申请的返回值');
			this.UserData.applyNum = e;
		},
		vipSelected(e) {
			this.isSelected = e;
			console.log('这是返回的数据=>', this.isSelected);
		},
		getUserData() {
			console.log('获取用户信息，全部');
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/vip/vipInfo?userId=' + landRegistLG.user.id, //接口地址。
					// url: this.api2 + '/rest-rp/vip/vipInfo?userId=760', //接口地址。
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data, '会员页开始请求到的信息');
						this.UserData = response.data.content;
						//"cydVipLv": "",//孵化器ID 级别 3、普通会员 4、高级会员 5、 VIP会员
						//"compName": "",//公司名称
						//"starTime": ,//开始时间
						//"endTime": ,
						//"compLogo": "",//公司logo
						//"userName": "",//昵称
						//"moeny": ,//节省费用
						//"vipMoeny": ,//一年的费用
						//"vipLv":,//vip
						//"vipState": "",//0 未成为会员  1 会员 2 孵化器会员 3 过期
						//"userCount": //成为会员人数
						//"applyMoney": ,//申请的费用
						//"applyNum": "",//申请的订单号
						//"vipTempList": [//vip模板
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
		},
		scrollTo() {
			// console.log('触发了scrollTo');
			// var element = document.getElementById('1'); //利用Id找到对应的需要滚动的区域
			// console.log(element);
			// console.log(element.offsetTop);
			// var height1 = element.offsetTop-44; //获取滚动区域到页面顶部的距离

			// var timer = setTimeout(function(){
			// 	uni.pageScrollTo({
			// 		//uni-app中页面滚动接口
			// 		scrollBottom: 100, //滚动到页面的目标位置（单位px）
			// 		duration: 100 //滚动动画的时长，默认300ms，单位 ms
			// 	});
			// 	console.log('出发了么')
			// 	// clearTimeout(timer);
			// },1000)
			this.goTop();
		}
	}
};
</script>

<style scoped>
.memberCenter-content {
	/* position: fixed; */
	min-height: 100vh;
	background: #f9f9f9;
	position: relative;
}
.MCB-box {
	/* position: fixed; */
	width: 100%;
	height: 86vh;
	/* overflow: scroll; */
	/* padding-bottom: 10vh; */
}
.MCB-btn {
	position: fixed;
	bottom: 0;
	z-index: 106;
	width: 100%;
}
.scroll-v {
	flex: 1;
	/* #ifndef MP-ALIPAY */
	flex-direction: column;
	/* #endif */
	width: 750upx;
	height: 86vh;
	/* padding-bottom: 20vh; */
}
</style>
