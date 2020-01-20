<template>
	<view class="mySetup-mailbox">
		<!-- 绑定邮箱 -->
		<view class="my-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">{{ i18n.title19 }}</div>
		</view>
		<div class="removeBind">
			<div class="RB-cont">
				<!--邮箱-->
				<div class="items-RB">
					<div class="input-RB"><wInput name="mobile" placeholder="请输入邮箱地址" keyboard="number" :show-clear="false" v-model="UserData"></wInput></div>
					<div :class="UserData ? 'btn-RB' : 'btn-RB2'" @click="clickUpData()"><p class="">保存</p></div>
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
            confirmShow: false,
            confirmBtn: '确定',
            cancelBtn: '取消',
            confirmTitle: '提示',
            confirmText: '是否要解除微信绑定?'
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
		this.UserData=this.GET_MY.headers.userEmail;
	},
	methods: {
		clickUpData(){
			if (this.UserData === '') { // 校验邮箱不能为空
				uni.showToast({
					title: '邮箱不能为空',
					icon: 'none',
					duration: 1000
				});
                return false;
			};
			if (this.UserData) {
				if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.UserData)) { // 校验邮箱格式
					uni.showToast({
						title: '邮箱格式有误',
						icon: 'none',
						duration: 1000
					});
					return false;
				};
			}
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					'userEmail':this.UserData,
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
.mySetup-mailbox {
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
.removeBind{
    position: relative;
    width: 100%;
    margin-top: 110upx;
  }
  .RB-cont{
    position: relative;
    width: 100%;
  }
  .items-RB{
    position: relative;
    width: 100%;
  }
  .input-RB{
    position: relative;
    width: 100%;
    background: #fff;
    padding: 2vw 5vw 2vw 5vw;
  }
  .btn-RB{
    position: relative;
    width: 100%;
    padding: 4vw;
    margin-top: 6vw;
  }
  .btn-RB>p{
    background: #02C2A2;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 4.266vw;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 12vw;
  }
  .btn-RB2{
    position: relative;
    width: 100%;
    padding: 4vw;
    margin-top: 6vw;
    opacity: 0.5;
  }
  .btn-RB2>p{
    background: #02C2A2;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 4.266vw;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 12vw;
  }
</style>
