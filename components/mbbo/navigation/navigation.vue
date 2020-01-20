<template>
	<div class="content-quick-content">
		<div class="closeTitle">
			<div class="closeDiv">
				<img :src="close" alt="" class="close" @click="clickCloseMask" />
			</div>
			<div class="maskOpc"></div>
		</div>
		<div class="content-quick">
			<div class="mask-popup" @click="clickCloseMask" @touchmove.stop=""></div>
		</div>
		<div class="quickBox-cont">
			<div class="quickNavigation">
				<div class="navigation">
					<div class="navigation-box">
						<div class="accout-nav" @tap="clickAccoutNav">
							<div class="touxiang-nav"><img :src="UserData.headImg || head" alt="" class="img" /></div>
							<p class="name-nav">{{ UserData.nickname }}</p>
							<p class="company-nav">{{ UserData.companyName || '暂无' }}</p>
							<p class="company-nav">
								{{ userTypeText || ''}} 
								<image class="userImage" v-if="UserData.authState === '2'" :src="authYes"></image>
								<image class="userImagse" v-if="UserData.authState !== '2'||UserData.authState!==undefined":src="authNo"></image>
							</p>
						</div>
						<div class="quick-box">
							<div class="item-quick">
								<div class="text-nav left" @click="tabbarClick(1)">
									<img :src="home" alt="" class="img-nav" />
									<text class="text">{{ i18n.quickNav1 }}</text>
								</div>
								<div class="right-quick-arrow left"><img :src="lineRightArrow" alt="" class="img" /></div>
								<div class="clear"></div>
								<div class="line"></div>
							</div>
							<div class="item-quick">
								<div class="text-nav left" @click="tabbarClick(2)">
									<img :src="find" alt="" class="img-nav" />
									<text class="text">{{ i18n.quickNav2 }}</text>
								</div>
								<div class="right-quick-arrow left"><img :src="lineRightArrow" alt="" class="img" /></div>
								<div class="clear"></div>
								<div class="line"></div>
							</div>
							<div class="item-quick">
								<div class="text-nav left" @click="tabbarClick(5)">
									<img :src="publish" alt="" class="img-nav" />
									<text class="text">+</text>
								</div>
								<div class="right-quick-arrow left"><img :src="lineRightArrow" alt="" class="img" /></div>
								<div class="clear"></div>
								<div class="line"></div>
							</div>

							<div class="item-quick">
								<div class="text-nav left" @click="tabbarClick(3)">
									<img :src="news" alt="" class="img-nav" />
									<text class="text">{{ i18n.quickNav4 }}</text>
								</div>
								<div class="right-quick-arrow left"><img :src="lineRightArrow" alt="" class="img" /></div>
								<div class="clear"></div>
								<div class="line"></div>
							</div>
							<div class="item-quick">
								<div class="text-nav left" @click="tabbarClick(4)">
									<img :src="my" alt="" class="img-nav" />
									<text class="text">{{ i18n.quickNav5 }}</text>
								</div>
								<div class="right-quick-arrow left"><img :src="lineRightArrow" alt="" class="img" /></div>
								<div class="clear"></div>
							</div>
						</div>
						<div class="back-box-nav" @click="clickBackNav" v-if="join">
							<div class="back-nav">
								<p class="">{{ i18n.quickBack }}</p>
							</div>
						</div>
						<div class="back-box-nav" @click="gotoNav" v-if="!join">
							<div class="back-nav">
								<p class="">登录</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
	data() {
		return {
			authImg: null,
			head:  this.Static+'common/nav/head.png',
			authYes:  this.Static+'common/nav/authYes.png',
			authNo:  this.Static+'common/nav/authNo.png',
			close:  this.Static+'common/nav/close.png',
			lineRightArrow:  this.Static+'common/nav/line-right-arrow.png',
			clickItems: null,
			home:  this.Static+'common/nav/home.png', // 首页
			find:  this.Static+'common/nav/find.png', // 发现
			publish:  this.Static+'common/nav/publish.png', // 发布
			news:  this.Static+'common/nav/news.png', // 消息
			my:  this.Static+'common/nav/my.png', // 我的
			join:true,
			quickNav: {
				show: false
			},
			UserData: {
				headImg: '',
				nickname: '',
				companyName: ''
			}
		};
	},
	components: {},
	computed: {
		i18n() {
			return this.$t('navigation');
		},
		...mapGetters(['QUICKNAVCO'])
	},
	watch: {
		QUICKNAVCO: {
			handler(a, b) {
				this.quickNav = a;
			},
			deep: true
		}
	},
	created() {
		if (uni.getStorageSync('landRegist')) {
			this.join=true;
			this.getUserData();
		}else{
			this.join=false;
		}
	},
	mounted() {
		// cosnole.log('9999');
		if (uni.getStorageSync('UserData')) {
			let UserData = JSON.parse(uni.getStorageSync('UserData'));
			console.log(UserData, '这里应该666！');
			this.UserData.companyName = UserData.companyName;
			this.UserData.headImg = UserData.headImg;
			this.UserData.nickname = UserData.nickname;
			if (UserData.authState === '2') {
				this.authStateImage = this.authYes;
			} else {
				this.authStateImage = this.authNo;
			}
			console.log(UserData.userType, 'pppppppppppppppp');
			this.userTypeText = this.userTypeTexts(UserData.userType);
		}
	},
	methods: {
		...mapMutations({
			setQuickNavCO: 'setQuickNavCO'
		}),
		userTypeTexts(val) {
			console.log(val, '这里应该6666');
			if (Number(val) === 0) {
				return '品牌商';
			} else if (Number(val) === 1) {
				return '经销商';
			} else if (Number(val) === 2) {
				return '厂家';
			} else if (Number(val) === 3) {
				return '其他';
			} else if (Number(val) === 4) {
				return '否';
			}
		},
		getUserData() {
			console.log('获取用户信息，全部');
			let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
			console.log(landRegistLG.user.id);
			uni.request({
				url: this.api2 + '/rest-rp/user/' + landRegistLG.user.id, //接口地址。
				data: {},
				header: {
					Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
				},
				success: response => {
					console.log(response.data);
					if (String(response.data.ret) === '200') {
						let UserData = response.data.content;
						uni.setStorageSync('UserData', JSON.stringify(UserData)); // 缓存用户信息
						if (uni.getStorageSync('UserData')) {
							let UserData = JSON.parse(uni.getStorageSync('UserData'));
							console.log(UserData, '这里应该666！');
							this.UserData.companyName = UserData.companyName;
							this.UserData.headImg = UserData.headImg;
							this.UserData.nickname = UserData.nickname;
							if (UserData.authState === '2') {
								this.authStateImage = this.authYes;
							} else {
								this.authStateImage = this.authNo;
							}
							console.log(UserData.userType, '老铁，双击666');
							this.userTypeText = this.userTypeTexts(UserData.userType);
						}
					} else {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: response.data.msg,
							icon: 'none',
							duration: 500
						});
					}
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
		},
		clickCloseMask() {
			this.quickNav.show = false;
			this.$store.commit('setQuickNavCO', this.quickNav); // 更新setAuthShow
		},
		clickAccoutNav() {
			console.log('点击跨界导航');
			if (!uni.getStorageSync('landRegist')) {
				this.landRegistra(); // 判断登录状态
			}
			if (uni.getStorageSync('landRegist')) {
				console.log('哈哈哈，先不做！');
			}
		},
		gotoNav(){
			this.tabbarClick(1);
		},
		tabbarClick(e) {
			this.clickCloseMask();
			console.log(e, '触发tabbar按钮');
			if (e === 1) {
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				}
				if (uni.getStorageSync('landRegist')) {
					this.clickItems = e;
					this.$store.commit('setHome', this.clickItems);
					uni.setStorageSync('clickItems', e);
					this.$store.commit('setPublishShow', false); // 隐藏发布组件
					uni.navigateTo({
						url: '/'
					});
				}
			} else if (e === 2) {
				this.clickItems = e;
				this.$store.commit('setHome', this.clickItems);
				uni.setStorageSync('clickItems', e);
				this.$store.commit('setPublishShow', false); // 隐藏发布组件
				uni.navigateTo({
					url: '/'
				});
			} else if (e === 3) {
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				}
				if (uni.getStorageSync('landRegist')) {
					this.clickItems = e;
					this.$store.commit('setHome', this.clickItems);
					uni.setStorageSync('clickItems', e);
					this.$store.commit('setPublishShow', false); // 隐藏发布组件
					uni.navigateTo({
						url: '/'
					});
				}
			} else if (e === 4) {
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				}
				if (uni.getStorageSync('landRegist')) {
					this.clickItems = e;
					this.$store.commit('setHome', this.clickItems);
					uni.setStorageSync('clickItems', e);
					this.$store.commit('setPublishShow', false); // 隐藏发布组件
					uni.navigateTo({
						url: '/'
					});
				}
			} else if (e === 5) {
				console.log('触发发布按钮');
				this.$store.commit('setPublishShow', true); // 展示发布组件
				uni.navigateTo({
					url: '/'
				});
			}
		},
		// 退出登录
		clickBackNav() {
			let _this = this;
			uni.showModal({
				title: '',
				content: '确认要退出？',
				confirmColor: ' #02C2A2',
				confirmText: '确定',
				cancelText: '取消',
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
						uni.removeStorageSync('landRegist');
						uni.removeStorageSync('clickItems');
						_this.$store.commit('setHome', 2);
						_this.$store.commit('setLandRegist', 0);
						_this.$store.commit('setPublishShow', false); // 隐藏发布组件
						let datauser={};
						uni.setStorageSync('UserData', JSON.stringify(datauser)); 
						uni.redirectTo({
							url: '/pages/project/MBBO/home'
						});
						_this.clickCloseMask();
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
			
		}
	}
};
</script>

<style>
	.content-quick-content{
		
	}
.userImage {
	position: relative;
	width: 124upx;
	height: 36upx;
	top: 8upx;
	padding-left: 10upx;
}
.userImagse {
	position: relative;
	width: 124upx;
	height: 36upx;
	top: 8upx;
	padding-left: 10upx;
}
.closeTitle {
	position: fixed;
	top: 0;
	width: 100vw;
	height: 44px;
	z-index: 999;
}
.closeDiv{
	position: relative;
	width: 16vw;
	background: #fff;
	height: 88upx;
	z-index: 999999;
}
.close {
	position: absolute;
	top: 28upx;
	width: 32upx;
	height: 32upx;
	left: 30upx;
}
.maskOpc{
	position: relative;
	width: 100vw;
	height: 88upx;
	background: #fff;
	opacity: 0;
}
.img-nav {
	position: relative;
	height: 32upx;
	width: 32upx;
	top: 0.5vw;
}
.content-quick {
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 108;
	top: 0;
}
.mask-popup {
	position: relative;
	width: 100%;
	background: rgba(19, 9, 9, 0.59);
	height: 100vh;
}
.quickBox-cont {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 108;
}
.quickNavigation {
	position: relative;
	width: 73vw;
	height: 100vh;
	background: #fff;
}
.navigation {
	position: relative;
	width: 100%;
	padding-top: 16vw;
}
.navigation-box {
	position: relative;
	width: 100%;
}
.accout-nav {
	position: relative;
	/* width: 35vw; */
	margin: 0 auto;
}
.touxiang-nav {
	position: relative;
	width: 16vw;
	margin: 0 auto;
}
.touxiang-nav > img {
	position: relative;
	width: 16vw;
	height: 16vw;
	border-radius: 50%;
}
.name-nav {
	font-family: PingFangSC-Medium;
	font-size: 5.3vw;
	color: #3c3d3f;
	letter-spacing: 0;
	text-align: center;
	line-height: 10vw;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.company-nav {
	ont-family: PingFangSC-Light;
	text-align: center;
	font-size: 3.466vw;
	color: #3c3d3f;
	letter-spacing: 0;
	line-height: 5vw;
}
.quick-box {
	position: relative;
	width: 84%;
	margin-left: 8%;
	margin-top: 5vw;
}
.item-quick {
	position: relative;
	width: 100%;
}
.text-nav {
	position: relative;
	width: 90%;
}
.text-nav .text {
	position: relative;
	width: 100%;
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2e2e30;
	line-height: 100upx;
	margin-left: 30upx;
}
.right-quick-arrow {
	position: relative;
	width: 10%;
}
.right-quick-arrow > img {
	position: relative;
	width: 18upx;
	margin-top: 6vw;
	height: 18upx;
	float: right;
}
.back-box-nav {
	position: fixed;
	bottom: 0;
}
.back-nav {
	position: relative;
	width: 73vw;
	margin: 0 auto;
	background: #f5f5f5;
}
.back-nav > p {
	position: relative;
	width: 100%;
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #9b9b9b;
	line-height: 100upx;
	text-align: center;
}
.teshu {
	width: 30upx;
	height: 34upx;
}
</style>
