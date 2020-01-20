<template>
	<div class="content">
		<div class="gadget-box">
			<div class="gadget-title">
				<p class="">{{ i18n.gadget_title }}</p>
			</div>
			<div class="gadget-cont">
				<div class="gadget-toufang left">
					<div class="conten-box" @click="goToPutInBusiness">
						<div class="img"><img :src="toufang" alt="" class="" /></div>
						<div class="text">
							<p class="title">{{ i18n.title1 }}</p>
						</div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="gadget-toufang left">
					<div class="conten-box" @click="goToPutInBusiness">
						<div class="img"><img :src="toufang" alt="" class="" /></div>
						<div class="text">
							<p class="title">{{ i18n.title2 }}</p>
						</div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="gadget-toufang left">
					<div class="conten-box" @click="goToDataReport">
						<div class="img"><img :src="shuju" alt="" class="" /></div>
						<div class="text">
							<p class="title">{{ i18n.title3 }}</p>
						</div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
import toufang from '@/static/mbcImg/home/extendManageList/toufang.png';
import shuju from '@/static/mbcImg/home/extendManageList/shuju.png';
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'gadget',
	data() {
		return {
			toufang: toufang,
			shuju: shuju,
			list:[],
		};
	},
	created() {},
	mounted() {},
	computed: {
		i18n() {
			return this.$t('extendManageList');
		}
	},
	methods: {
		Statistics(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/putIn/'+landRegistLG.user.id, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						console.log(response.data);
						this.list = response.data.content;
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
		goToPutInBusiness() {
			console.log('to投放商机');
			if (this.list.rpCompanyAuth == 0) {
				uni.showModal({
					title: '提示',
					content: '您的公司还未认证，无法进行广告投放，快去提交公司认证信息吧～',
					confirmColor: ' #02C2A2',
					confirmText: '去认证',
					cancelText: '暂不认证',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			} else {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						page: String(1),
						userId: landRegistLG.user.id
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/putIn/selectInstList', //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							this.putInBusinessData = response.data.content.list;
							// this.list = response.data.content
							this.$store.commit('setputInBusinessData', this.putInBusinessData); // 更新vuex
							if (response.data.ret == 200) {
								uni.navigateTo({
									url: '/modules/aLittle/putInBusiness/putInBusiness'
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
				}
			}
		},
		goToDataReport() {
			console.log('to数据报表');
			this.$router.push({
				path: '/dataReport',
				query: {}
			});
		}
	}
};
</script>

<style scoped>
.content {
	position: relative;
	width: 100vw;
	padding: 2vw 4vw;
	background: #fff;
	margin-bottom: 1.5vw;
}
.gadget-box {
	position: relative;
	width: 100%;
	padding-bottom: 2vw;
}
.gadget-title {
	position: relative;
	width: 100%;
}
.gadget-title > p {
	position: relative;
	width: 100%;
	font-family: PingFang-SC-Bold;
	font-size: 4.26vw;
	color: #2e2e30;
	line-height: 6vw;
}
.gadget-cont {
	position: relative;
	width: 100%;
}
.gadget-toufang {
	position: relative;
	width: 33.3333%;
}
.conten-box {
	position: relative;
	width: 100%;
}
.img {
	position: relative;
	width: 30%;
	padding-left: 5%;
	margin: auto;
}
.img > img {
	position: relative;
	width: 6vw;
	height: 6vw;
	margin-top: 2vw;
}
.text {
	position: relative;
	width: 100%;
}
.title {
	font-family: PingFang-SC-Bold;
	font-size: 3.7vw;
	color: #2e2e30;
	line-height: 5vw;
	text-align: center;
}
.text-box {
	font-family: PingFang-SC-Medium;
	font-size: 3.2vw;
	color: #9b9b9b;
	line-height: 6vw;
}
</style>
