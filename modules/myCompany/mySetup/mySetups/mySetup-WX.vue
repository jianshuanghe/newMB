<template>
	<view class="mySetup-WX">
		<!-- 微信号 -->
		<view class="my-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">{{ i18n.title21 }}</div>
		</view>
		<div class="removeBind">
			<div class="RB-cont">
				<div class="items-RB">
					<!--微信绑定-->
					<div class="" v-if="!UserWxId">
						<div class="input-RB"><wInput name="mobile" placeholder="请输入要绑定的微信账" keyboard="number" :show-clear="false" v-model="UserData"></wInput></div>
						<div :class="UserData ? 'btn-RB' : 'btn-RB2'" @click="clickUpData(2)"><p class="">保存</p></div>
					</div>
					<!--微信解绑-->
					<div class="" v-if="UserWxId">
						<div class="input-RB">
							<wInput name="mobile" disabled placeholder="" keyboard="number" :show-clear="false" v-model="UserData"></wInput>
						</div>
						<div :class="UserData ? 'btn-RB' : 'btn-RB2'" @click="clickUpData(3)"><p class="">解除绑定</p></div>
					</div>
				</div>
			</div>
		</div>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
import navigation from '@/components/mbbo/navigation/navigation.vue';
import { mapMutations, mapGetters } from 'vuex';
import wInput from '@/components/common/watch-login/watch-input.vue';
export default {
	data() {
		return {
			UserData: '',
			UserWxId: true, // 判断用户是否存在微信id
		};
	},
	components: {
		quickBtn,
		navigation,
		wInput
	},
	computed: {
		i18n() {
			return this.$t('Mypersonal');
		},
		...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: this.i18n.title12
		});
		this.UserData=this.GET_MY.headers.wxId;
		if(this.UserData==''){
			this.UserWxId=false;
		}else{
			this.UserWxId=true;
		}
	},
	methods: {
		clickUpData(e) {
			let _this = this;
			if(e === 3){
				uni.showModal({
					title: '提示',
					content: '是否确定解绑微信？',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							_this.UserWxId = false;
							_this.UserData = '';
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
			}else if(e === 2){
				if(!/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(this.UserData)){
					uni.showToast({
						title: '微信号格式有误',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						'wxId':this.UserData,
						// "content":this.desc,
					}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/'+landRegistLG.user.id, //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.getmy();
							uni.navigateBack({});
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
			}
		},
		getmy() {
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
						// console.log(response.data);
						this.list = response.data.content
						this.$store.commit('setMy', this.list); // 更新vuex
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
	}
};
</script>

<style>
.mySetup-WX {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.my-title {
	width: 100%;
	height: 88upx;
	background: #ffffff;
	border-bottom: 2upx solid #f5f5f5;
	position: fixed;
	top: 0;
	z-index: 999;
}
.quickBtn-Fd {
	width: 5%;
	margin-left: 38upx;
}
.search-Fd {
	position: relative;
	width: 100%;
	text-align: center;
	line-height: 88upx;
	font-size: 28upx;
	color: #2e2e30;
}
.removeBind {
	position: relative;
	width: 100%;
	margin-top: 110upx;
}
.RB-cont {
	position: relative;
	width: 100%;
}
.items-RB {
	position: relative;
	width: 100%;
}
.input-RB {
	position: relative;
	width: 100%;
	background: #fff;
	padding: 2vw 5vw 2vw 5vw;
}
.btn-RB {
	position: relative;
	width: 100%;
	padding: 4vw;
	margin-top: 6vw;
}
.btn-RB > p {
	background: #02c2a2;
	text-align: center;
	font-family: PingFangSC-Regular;
	font-size: 4.266vw;
	color: #ffffff;
	letter-spacing: 0;
	line-height: 12vw;
}
.btn-RB2 {
	position: relative;
	width: 100%;
	padding: 4vw;
	margin-top: 6vw;
	opacity: 0.5;
}
.btn-RB2 > p {
	background: #02c2a2;
	text-align: center;
	font-family: PingFangSC-Regular;
	font-size: 4.266vw;
	color: #ffffff;
	letter-spacing: 0;
	line-height: 12vw;
}
</style>
