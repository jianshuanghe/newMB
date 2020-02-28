import {api1,api2,api3} from '@/static/mbcJs/api';
console.log(api1, api2, api3);
import {landRegistra} from '@/static/mbcJs/landRegistra';
function resetUrl (url) {
	let A = 'from=singlemessage&isappinstalled=0'; // 分享给朋友自动添加的
	let B = 'from=timeline&isappinstalled=0'; // 分享给朋友圈自动添加的
	let C = 'groupmessage&isappinstalled=0'; // 分享给微信群自动添加的
	if (url.indexOf(A) !== -1) {
		return url.split(A)[0] + encodeURIComponent(A);
	} else if (url.indexOf(B) !== -1) {
		return url.split(B)[0] +  encodeURIComponent(B);
	} else if (url.indexOf(C) !== -1) {
		return url.split(C)[0] +  encodeURIComponent(C);
	} else {
		return url;
	}
};
function shareSdkConfig () {
	// let resetUrls = resetUrl(window.location.href);
	let urlParams = window.location.href.split("#")[0];
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isAndroid === true) {
		// alert('安卓027:' + urlParams);
	} else {
		// urlParams =  uni.getStorageSync('shareConfigUrl');
		// alert('ios:027' + urlParams);
	}
	urlParams = urlParams.replace(/\&/g, '%26');
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