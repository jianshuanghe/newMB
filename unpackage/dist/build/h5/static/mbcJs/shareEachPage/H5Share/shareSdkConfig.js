import {api1,api2,api3} from '@/static/mbcJs/api';
console.log(api1, api2, api3);
import {landRegistra} from '@/static/mbcJs/landRegistra';
function shareSdkConfig () {
	let urlParams = window.location.href.split('#')[0];
	if (uni.getStorageSync('getSystemInfo').data.platform === 'ios') { // ios
		urlParams = uni.getStorageSync(shareConfigUrl)
		uni.showToast({
			title: '当前ios平台' + urlParams,
			icon: 'none',
			duration: 1000
		});
	} else {
		uni.showToast({
			title: '当前安卓平台' + urlParams,
			icon: 'none',
			duration: 1000
		});
	};
	let params = {
		url: urlParams
	}; // 请求总数居时 参数为空
	return new Promise(resolve => {
		uni.showLoading({
			// 展示loading
			title: '加载中'
		});
		uni.request({
			url: api2 + '/rest-rp/wechat/portal/createJsapiSignature', //接口地址。
			data: params,
			method: 'POST',
			header: {
				Authorization: 'Bearer ' //将token放到请求头中
			},
			success: response => {
				console.log(response.data, '---------------response.data--------------')
				if (response.data.ret === '200') {
					uni.hideLoading(); // 隐藏 loading
					console.log('分享SDK配置')
					resolve(response.data.content);
				} else {
					uni.hideLoading(); // 隐藏 loading
					uni.showToast({
						title: '网络开小差了，请稍后重试',
						icon: 'none',
						duration: 1000
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
	});
}

export {
	shareSdkConfig
}