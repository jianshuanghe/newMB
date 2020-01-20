import {
	api1,
	api2,
	api3
} from '@/static/mbcJs/api';
console.log(api1, api2, api3);
import {landRegistra} from '@/static/mbcJs/landRegistra';
let api2Url = api2;
let returnValue = {
	success: false, // 接口返回状态
	data: null, // 接口返回值
	type: null, // 调取的类型
}
let params = null; // 接口参数
function focusStoreCount(way, paramsUrl, paramsUrl2, paramsJSH) {
	// way:方法，get post
	// paramsUrl: 接口地址
	// paramsJSH： 参数
	console.log(way, paramsUrl, paramsUrl2, paramsJSH);
	return new Promise(resolve => {
			// uni.showLoading({
			// 	// 展示loading
			// 	title: '加载中'
			// });
			if (!uni.getStorageSync('landRegist')) {
				landRegistra(); // 判断登录状态
			}
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				uni.request({
					url: api2Url + paramsUrl, //接口地址。
					data: paramsJSH,
					method: way,
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response.data, '---------------response.data--------------')
						// uni.hideLoading(); // 隐藏 loading
						if (response.data.ret === '200') {
							returnValue.success = true;
							resolve(returnValue)
						}  else if (response.data.ret === '202') {
							console.log('202');
							uni.removeStorageSync('landRegist');
							uni.removeStorageSync('clickItems');
							uni.showToast({
								title: '登录已过期，请重新登录',
								icon: 'none',
								duration: 1000
							});
							if (!uni.getStorageSync('landRegist')) {
								landRegistra(); // 判断登录状态
							}
						}else if (response.data.ret === '400') {
							uni.request({
								url: api2Url + paramsUrl2, //接口地址。
								data: paramsJSH,
								method: way,
								header: {
									Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
								},
								success: response => {
									console.log(response.data, '---------------response.data--------------')
									// uni.hideLoading(); // 隐藏 loading
									if (response.data.ret === '200') {
										returnValue.success = false;
										resolve(returnValue)
									}  else if (response.data.ret === '202') {
										console.log('202');
										uni.removeStorageSync('landRegist');
										uni.removeStorageSync('clickItems');
										uni.showToast({
											title: '登录已过期，请重新登录',
											icon: 'none',
											duration: 1000
										});
										if (!uni.getStorageSync('landRegist')) {
											landRegistra(); // 判断登录状态
										}
									}else if (response.data.ret === '400') {
										uni.showToast({
											title: response.data.msg,
											icon: 'none',
											duration: 1000
										});
									};
									returnValue.data = response.data;
									returnValue.type = paramsJSH.type;
									console.log(returnValue, '成功数据返回')
								},
								fail: error => {
									// uni.hideLoading(); // 隐藏 loading
									returnValue.data = 0;
									returnValue.type = paramsJSH.type;
									uni.showToast({
										title: '网络繁忙，请稍后',
										icon: 'none',
										duration: 1000
									});
									console.log(error, '网络繁忙，请稍后');
									console.log(returnValue, '失败数据返回');
									resolve(returnValue)
								}
							});
						};
						returnValue.data = response.data;
						returnValue.type = paramsJSH.type;
						console.log(returnValue, '成功数据返回')
					},
					fail: error => {
						// uni.hideLoading(); // 隐藏 loading
						returnValue.success = false;
						returnValue.data = 0;
						returnValue.type = paramsJSH.type;
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						console.log(error, '网络繁忙，请稍后');
						console.log(returnValue, '失败数据返回');
						resolve(returnValue)
					}
				});
			}
		})
	}

	async function focusStore(CYDparams) {
		params = CYDparams;
		return await focusStoreCount('GET', '/rest-rp/follow/user', '/rest-rp/follow/cancelUser', params);
	}
	export {
		focusStore
	}
