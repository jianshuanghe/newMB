<template>
	<div class="d">
		<div class="blur-box"></div>
		<div class="publishBox">
			<div class="publish-content">
				<div class="publish">
					<div class="publish-caigou left">
						<div class="conten-box" @click="goToPutInBusiness">
							<div class="img"><img :src="publishGongYing" alt="" class="" /></div>
							<div class="text">
								<p class="title">{{i18n.publish_caigou}}</p>
							</div>
							<div class="clear"></div>
						</div>
					</div>
					<div class="publish-shangji left">
						<div class="conten-box" @click="goToCreateBusiness">
							<div class="img"><img :src="publishQiuGou" alt="" class="" /></div>
							<div class="text">
								<p class="title">{{i18n.publish_shangji}}</p>
							</div>
							<div class="clear"></div>
						</div>
					</div>
				</div>
				<div class="publish-close">
					<div class="imgClose" @tap='publishCloseFn()'><img :src="publishClose" alt="" class="close" /></div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		name: 'gadget',
		data() {
			return {
				publishClose:  this.Static+'home/extendManageList/publishClose.png',
				publishGongYing:  this.Static+'home/extendManageList/publishGongYing.png',
				publishQiuGou:  this.Static+'home/extendManageList/publishQiuGou.png'
			};
		},
		created() {},
		mounted() {},
		computed: {
			i18n () {
			  return this.$t('publish')  
			}
		},
		methods: {
			...mapMutations({
				setPublishShow: 'setPublishShow'
			}),
			goToPutInBusiness() {
				console.log('to投放商机');
				let lookUserId = null;
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					lookUserId = landRegistLG.user.id;
				} else {
					lookUserId = uni.getStorageSync('UUID');
				};
				let urlParams = {
					isFlow: 0, // 平台来源
					orderType: 0, // 订单类型
					sourceTemp: 0, // 说明书来源
					aiListTemp: 0, // 是否展示ai
					purcId:  null, // 说明书id
					lookUserId: lookUserId, // 浏览者
					creatorId: '', // 说明书创建者
					purcState: '' // 说明书状态
				};
				uni.navigateTo({
					url: '/modules/publishPurchase/publishPurchase?urlParams=' + this.urlCrypto(urlParams, 0)
				});
			},
			goToCreateBusiness () {
				console.log('to选择模版(1/4)');
				uni.navigateTo({
					url: '/modules/createBusiness/selectTemplate'
				});
			},
			goToDataReport() {
				console.log('to数据报表');
				this.$router.push({
					path: '/dataReport',
					query: {}
				});
			},
			publishCloseFn() {
				console.log('触发关闭发布组件');
				this.$store.commit('setPublishShow', false); // 关闭发布组件
			}
		}
	};
</script>

<style>
	.blur-box{
		position: fixed;
		z-index: 1000000;
		top: 0;
		width: 100vw;
		height: 100vh;
		background: #fff;
	}
	.publishBox{
		position: fixed;
		z-index: 1000001;
		top: 0;
		width: 100vw;
		height: 100vh;
	}
	.publish-content{
		position: relative;
		width: 100%;
	}
	.publish{
		position: relative;
		width: 100%;
		top: 60vh;
	}
	.publish-caigou{
		position: relative;
		width: 50%;
	}
	.publish-shangji{
		position: relative;
		width: 50%;
	}
	.conten-box {
		position: relative;
		width: 100%;
	}
	.img {
		position: relative;
		width: 124upx;
		margin: 0 auto;
	}
	.img > img {
		position: relative;
		width: 124upx;
		height: 124upx;
		margin-top: 2vw;
		margin: 0 auto;
	}
	.imgClose {
		position: relative;
		width: 32upx;
		margin: 0 auto;
	}
	.imgClose .close{
		position: relative;
		width: 32upx;
		height: 32upx;
		margin-top: 2vw;
		margin: 0 auto;
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
	.publish-close{
		position: fixed;
		bottom: 10vh;
		width: 100vw;
	}
</style>
