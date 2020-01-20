<template>
	<view class="myheader-Personal">
		<view class="my-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">{{ i18n.title3 }}</div>
		</view>
		<view class="myheader-Personals">
			<textarea placeholder="请编辑您的个人介绍" maxlength="300" @input="descInput" v-model="desc" />
			<span class="numberV">{{remnane}}/300</span>
		</view>
		<view class="myheader-btn" @tap="Preservations()">保存</view>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				txtVal: 0,
				desc:"",
				remnane:0,
				list:[]
			};
		},
		components: {
			quickBtn,
			navigation
		},
		computed: {
			i18n() {
				return this.$t('Mypersonal');
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
			
		},
		created() {
			this.list=this.GET_MY.headers;
			this.desc = this.list.content
			this.remnane = this.GET_MY.headers.content.length;
			this.shareEachPage(); // 分享
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.title1
			});
		},
		methods: {
			descInput(){
				var txtVal = this.desc.length;
				this.remnane = 1 + txtVal;
			},
			Preservations(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						"content":this.desc,
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
							this.GET_MY.headers.content = this.desc;
							this.$store.commit('setMy', this.GET_MY.headers); // 更新vuex
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
		}
	};
</script>

<style>
	.myheader-Personal {
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		padding: 0.1upx;
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
	.myheader-Personals{
		width: 90%;
		height: 370upx;
		margin: 30upx auto 30upx auto;
		position: relative;
		padding-top: 100upx;
	}
	.myheader-Personals>textarea{
		width: 100%;
		height: 100%;
		background: #F9F9F9;
		padding: 20upx;
		padding-bottom: 50upx;
	}
	.numberV{
		font-size: 28upx;
		color: #D2D2D2;
		position: absolute;
		bottom: 0;
		right: 40upx;
	}
	.myheader-btn{
		width: 90%;
		height: 90upx;
		background: #02C2A2;
		margin: 80upx auto auto auto;
		text-align: center;
		line-height: 90upx;
		font-size: 32upx;
		color: #FFFFFF;
	}
</style>
