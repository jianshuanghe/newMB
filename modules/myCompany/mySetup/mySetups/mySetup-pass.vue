<template>
	<view class="password">
		<view class="password-one" v-if="!ispass">
			<view class="password-one-zi">验证手机</view>
			<view class="password-one-inp">
				<input type="text" placeholder="请输入手机号" v-model="phone" maxlength="11"/>
			</view>
			<view class="password-one-inp" style="margin: 10upx auto auto auto;">
				<input type="text" placeholder="请输入验证码" maxlength="4" v-model="Code"/>
				<span @tap="getcode" v-if="Verification">获取验证码</span>
				<span style='color: #BDBDBD;' v-if="!Verification">重新获取({{numwor}})</span>
			</view>
			<view class="password-one-add" v-if="this.phone==''||this.Code==''">提交</view>
			<view class="password-one-adds" v-if="this.phone!==''&&this.Code!==''" @tap="addti()">提交</view>
		</view>
		<view class="password-one" v-if="ispass">
			<view class="password-one-zi">设置密码</view>
			<view class="password-one-inp">
				<input type="password" placeholder="请输入新登录密码" v-model="password"/>
			</view>
			<view class="password-one-inp" style="margin: 10upx auto auto auto;">
				<input type="password" placeholder="请确认新登录密码" v-model="passwords"/>
			</view>
			<view class="password-one-add" v-if="this.password==''||this.passwords==''">提交</view>
			<view class="password-one-adds" v-if="this.password!==''&&this.passwords!==''" @tap="addjiao()">提交</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ispass:false,
				phone:'',
				Code:'',
				password:'',
				passwords:'',
				numwor:60,
				Verification:true,
			};
		},
		components: {
			
		},
		computed: {
			
		},
		onLoad() {
			
		},
		methods: {
			addjiao(){
				if(this.password!==this.passwords){
					uni.showToast({
						title: '前后输入密码不一致',
						icon: 'none',
						duration: 1000
					});
					return false;
				};
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						'passWord':this.passwords,
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
			
			addti(){
				if(this.phone==''){
					uni.showToast({
						title: '请输入手机号',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
				if (!(/^1[34578]\d{9}$/.test(this.phone))) { // 校验手机号格式
					uni.showToast({
						title: '手机号码有误,请重填',
						icon: 'none',
						duration: 500
					});
					return false;
				};
				if (this.Code=='') { // 校验手机号格式
					uni.showToast({
						title: '手机号码有误,请重填',
						icon: 'none',
						duration: 500
					});
					return false;
				};
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						phone: this.phone,
						businessName: '1',
						phoneCode: this.Code,
						portal: 'iambuyer',
					}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api1 + '/rest-sso/phoneSmsVali', //接口地址。
						data: params,
						method: 'POST',
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							if(response.data.ret==200){
								this.ispass=true;
							}else{
								uni.showToast({
									title: '验证码已失效',
									icon: 'none',
									duration: 500
								});
								return false;
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
			},
			getcode(){
				if(this.phone==''){
					uni.showToast({
						title: '请输入手机号',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
				if (!(/^1[34578]\d{9}$/.test(this.phone))) { // 校验手机号格式
					uni.showToast({
						title: '手机号码有误,请重填',
						icon: 'none',
						duration: 500
					});
					return false;
				};
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						phone: this.phone,
						businessName: '1',
						portal: 'iambuyer'
					}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api1 + '/rest-sso/phoneSms', //接口地址。
						data: params,
						method: 'POST',
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							if(response.data.ret==400){
								uni.showToast({
									title: response.data.msg,
									icon: 'none',
									duration: 1000
								});
								return false;
							}else if(response.data.ret==200){
								uni.showToast({
									title: '验证码已发送',
									icon: 'none',
									duration: 1000
								});
								// return false;
								let that=this;
								let time = 60;
								that.Verification=false;
								let sendTimer = setInterval(function() {
									time--;
									that.numwor = time ;
									if (time < 0) {
										that.numwor = 60;
										that.Verification=true;
										clearInterval(sendTimer);
									}
								}, 1000);
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
			},
		}
	};
</script>

<style>
	.password{
		position: relative;
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}
	.password-one{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
	}
	.password-one-zi{
		font-size: 48upx;
		color: #2E2E30;
		padding-top: 82upx;
		padding-left: 56upx;
	}
	.password-one-inp{
		width: 85%;
		height: 100upx;
		border-bottom: 2upx solid #F5F5F5;
		margin: 40upx auto auto auto;
		line-height: 100upx;
		position: relative;
	}
	.password-one-inp>input{
		width: 100%;
		height: 100%;
	}
	.password-one-inp>span{
		font-size: 30upx;
		color: #2E2E30;
		position:absolute;
		right: 0;
		top: 0;
	}
	.password-one-add{
		width: 85%;
		height: 90upx;
		margin: 80upx auto auto auto;
		text-align: center;
		line-height: 90upx;
		font-size: 32upx;
		color: #FFFFFF;
		background: #02C2A2;
		opacity: 0.3;
	}.password-one-adds{
		width: 85%;
		height: 90upx;
		margin: 80upx auto auto auto;
		text-align: center;
		line-height: 90upx;
		font-size: 32upx;
		color: #FFFFFF;
		background: #02C2A2;
	}
</style>
