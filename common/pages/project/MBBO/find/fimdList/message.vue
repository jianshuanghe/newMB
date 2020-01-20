<template>
	<view class="find-message">
		<view class="find-message-header">
			留言<image :src="close" @tap="guanbi()"></image>
		</view>
		<view class="find-message-con">
			<view>直接留言</view>
			<view>如您有任何疑问或者想咨询业务相关，请在下方留言，我们会尽快给您反馈哦～</view>
		</view>
		<view class="find-message-name">
			<view>姓名</view>
			<view><input v-model="name" @blur='onBlur' @confirm='onConfirm' type="text" placeholder="如何称呼您？" placeholder-style="color: #BDBDBD;"/></view>
		</view>
		<view class="find-message-name">
			<view>电话</view>
			<view><input type="text" v-model="phone" @blur='onBlurs' @confirm='onConfirms' maxlength="11" placeholder="请留下您的联系方式..." placeholder-style="color: #BDBDBD;"/></view>
		</view>
		<view class="find-message-names">
			<view>留言</view>
			<view><textarea v-model="liu" maxlength="300" @blur='onBlurss' @confirm='onConfirmss' placeholder="请留下您相对我们说的话..."  placeholder-style="color: #BDBDBD;"/></view>
			<view>{{liu.length}}/300</view>
		</view>
		<view class="find-message-but">
			<view @tap="tijiao()">提交留言</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				close: this.Static+'my/close.png',
				name:'',
				phone:'',
				liu:'',
				list:[],
			};
		},
		computed: {
			...mapGetters(['GET_FIND'])
		},
		created() {
			console.log(this.GET_FIND.message)
			if(uni.getStorageSync('landRegist')){
				this.getmy();
			}
		},
		mounted() {},
		methods:{
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
							console.log(response.data);
							this.list = response.data.content;
							this.phone = this.list.userPhone;
							this.name = this.list.nickname;
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
			onBlur () {
				uni.pageScrollTo({
				 scrollTop: 0,
				 duration: 0
				});
			},
			onConfirm(){
				uni.pageScrollTo({
				 scrollTop: 0,
				 duration: 0
				});
			},onBlurs () {
				uni.pageScrollTo({
				 scrollTop: 0,
				 duration: 0
				});
			},
			onConfirms(){
				uni.pageScrollTo({
				 scrollTop: 0,
				 duration: 0
				});
			},onBlurss () {
				uni.pageScrollTo({
				 scrollTop: 0,
				 duration: 0
				});
			},
			onConfirmss(){
				uni.pageScrollTo({
				 scrollTop: 0,
				 duration: 0
				});
			},
			guanbi(){
				let obj={
					id:'',
					type:'',
					Leaving:'0'
				}
				this.$store.commit('setmessage', obj);
			},
			tijiao(){
				if(this.name==''){
					uni.showToast({
						title: '请输入姓名',
						icon: 'none',
						duration: 1000
					});
				}else if(this.phone==''){
					uni.showToast({
						title: '请输入手机号',
						icon: 'none',
						duration: 1000
					});
				}else if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)){
					uni.showToast({
						title: '手机号格式有误',
						icon: 'none',
						duration: 1000
					});
				}else if(this.liu==''){
					uni.showToast({
						title: '留言内容不能为空',
						icon: 'none',
						duration: 1000
					});
				}else{
					if(uni.getStorageSync('landRegist')){
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						let params = {
							instrucId: this.GET_FIND.message.id, // id
							mobile: this.phone, // 电话
							userName: this.name, // 姓名
							msgContent: this.liu, // 留言内容
							userId: landRegistLG.user.id,
						};
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/msg/add', //接口地址。
							data: params,
							method: 'POST',
							header: {
								'content-type': 'application/x-www-form-urlencoded',
							},
							success: (response) => {
								console.log(response.data, '---------------response.data--------------');
								if (response.data === 'success') {
									uni.hideLoading(); // 隐藏 loading
									uni.showToast({
										title: '留言成功！',
										icon: 'none',
										duration: 1000
									});
									this.guanbi();
								} else {
									uni.hideLoading(); // 隐藏 loading
									uni.showToast({
										title: '网络开小差了，请稍后重试',
										icon: 'none',
										duration: 1000
									});
									this.guanbi();
								}
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
					}else{
						let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
						console.log(UUID);
						let params = {
							instrucId: this.GET_FIND.message.id, // id
							mobile: this.phone, // 电话
							userName: this.name, // 姓名
							msgContent: this.liu, // 留言内容
							userId: UUID,
						};
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/msg/add', //接口地址。
							data: params,
							method: 'POST',
							header: {
								'content-type': 'application/x-www-form-urlencoded',
							},
							success: (response) => {
								console.log(response.data, '---------------response.data--------------');
								if (response.data === 'success') {
									uni.hideLoading(); // 隐藏 loading
									uni.showToast({
										title: '留言成功！',
										icon: 'none',
										duration: 1000
									});
									this.guanbi();
								} else {
									uni.hideLoading(); // 隐藏 loading
									uni.showToast({
										title: '网络开小差了，请稍后重试',
										icon: 'none',
										duration: 1000
									});
									this.guanbi();
								}
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
		}
	};
</script>

<style>
	.find-message{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.find-message-header{
		width: 100%;
		height: 150upx;
		text-align: center;
		line-height: 150upx;
		position: relative;
		font-size: 32upx;
		color: #2E2E30;
	}
	.find-message-header>image{
		position: absolute;
		width: 24upx;
		height: 24upx;
		right: 42upx;
		top: 64upx;
	}
	.find-message-con{
		width: 95%;
		height: 180upx;
		margin: 0 auto;
	}
	.find-message-con>view:nth-of-type(1){
		font-size: 40upx;
		color: #2E2E30;
	}
	.find-message-con>view:nth-of-type(2){
		font-size: 26upx;
		color: #9B9B9B;
		line-height: 40upx;
	}
	.find-message-name{
		width: 95%;
		height: 160upx;
		margin: 0 auto;
	}
	.find-message-name>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
	}
	.find-message-name>view:nth-of-type(2){
		width: 100%;
		height: 74upx;
		border-bottom: 2upx solid #EEEEEE;
	}
	.find-message-name>view:nth-of-type(2)>input{
		width: 100%;
		height: 100%;
	}
	.find-message-names{
		width: 95%;
		min-height: 180upx;
		margin: 0 auto;
		position: relative;
	}
	.find-message-names>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
	}
	.find-message-names>view:nth-of-type(2){
		width: 100%;
		height: 244upx;
		border-bottom: 2upx solid #EEEEEE;
	}
	.find-message-names>view:nth-of-type(2)>textarea{
		width: 100%;
		height: 100%;
		padding-top: 30upx;
		padding-bottom: 50upx;
	}
	.find-message-names>view:nth-of-type(3){
		position: absolute;
		bottom: 0;
		right: 0;
		font-size: 26upx;
		color: #9B9B9B;
	}
	.find-message-but{
		width: 100%;
		height: 120upx;
		position: fixed;
		bottom: 0;
		z-index: 99999999999999999999;
	}
	.find-message-but>view{
		width: 95%;
		height: 90upx;
		background: #02C2A2;
		border-radius: 4upx;
		margin: 16upx auto;
		text-align: center;
		line-height: 90upx;
		color: #FFFFFF;
		font-size: 28upx;
	}
</style>
