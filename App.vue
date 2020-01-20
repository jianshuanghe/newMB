
<script>
	export default {
		onLaunch: function(optionParams) {
			console.log(optionParams, '---------------dasdsadsa------------');
			if (uni.getStorageSync('UUID') && uni.getStorageSync('UUID') === optionParams.query.uuid) { // 存在UUID，说明是本手机触发的微信登录 校验uuid一致性
			  let landRegist = {
			    token: optionParams.query.token,
			    user: {
			      id: Number(optionParams.query.userId)
			    }
			  };
			  uni.setStorageSync('landRegist', JSON.stringify(landRegist)); // 缓存用户登录信息
			}
			this.getSystemInfo(); // 拉去用户手机相关信息
			this.generateUUID();
			console.log('App Launch');
			// #ifdef H5
			this.isWeiXin(); // h5 判断是否为微信浏览器
			// #endif
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			// 检测升级
			uni.request({
				url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
				data: {
					appid: plus.runtime.appid,
					version: plus.runtime.version,
					imei: plus.device.imei
				},
				success: (res) => {
					console.log('success', res);
					if (res.statusCode == 200 && res.data.isUpdate) {
						let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
						// 提醒用户更新
						uni.showModal({
							title: '更新提示',
							content: res.data.note ? res.data.note : '是否选择更新',
							success: (showResult) => {
								if (showResult.confirm) {
									plus.runtime.openURL(openUrl);
								}
							}
						})
					}
				}
			})
			// #endif
		},
		onShow: function() {
			// this.landRegistra();
		},
		onHide: function() {
			console.log('App Hide')
			
		}
	}
</script>

<style>
    /* #ifndef APP-PLUS-NVUE */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';
	@import url("./common/reset.css");

	/* 以下样式用于 hello uni-app 演示所需 */
	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
	uni-picker .uni-picker-action.uni-picker-action-confirm{color: #02C2A2;}
	.uni-header-logo {
		padding: 30upx;
		text-align: center;
		margin-top: 10upx;
	}

	.uni-header-logo image {
		width: 140upx;
		height: 140upx;
	}

	.uni-hello-text {
		color: #7A7E83;
	}

	.uni-hello-addfile {
		text-align: center;
		line-height: 300upx;
		background: #FFF;
		padding: 50upx;
		margin-top: 10px;
		font-size: 38upx;
		color: #808080;
	}
	.uni-swiper{
		height: 330upx !important;
	}
    /* #endif*/
	.uni-app {
		overflow: hidden !important;
	}
</style>
