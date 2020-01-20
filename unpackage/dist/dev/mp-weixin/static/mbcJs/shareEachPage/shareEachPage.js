import {api1,api2,api3} from '@/static/mbcJs/api';
import {isWeiXin} from '@/static/mbcJs/browserType';
import {shareSdkConfig} from './H5Share/shareSdkConfig';
import {shareH5params} from './H5Share/shareH5params';
import {platformAccount} from '@/static/mbcJs/platformAccount';
// import {wxJSDK} from '@/static/mbcJs/wxJSDK';
// console.log(wxJSDK, 'wxJSDK');
console.log(api1, api2, api3);
console.log(isWeiXin);
// var origin = location.origin;
// H5分享
async function H5Share (defaultParams, customParams, needCount, needCountParams, isFlow, routeParam) {
	// defaultParams 默认分享参数
	// CustomParams 自定义分享参数
	console.log('H5分享！');
	console.log(uni.getStorageSync('getSystemInfo').platform)
	var jweixin = require('jweixin-module');
	let sdkConfig = await shareSdkConfig();
	console.log(sdkConfig, 'sdkConfig');
	jweixin.config({
		debug: false,
		appId: sdkConfig.appId,
		timestamp: sdkConfig.timestamp,
		nonceStr: sdkConfig.nonceStr,
		signature: sdkConfig.signature,
		jsApiList: [
			'onMenuShareAppMessage', // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
			'onMenuShareTimeline' // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
		]
	});
	console.log(sdkConfig, 'jweixin.config');
	jweixin.ready(function() {
		console.log('jweixin.ready');
		// alert('jweixin.ready');
		if (customParams) {
			// alert('分享详情!');
			//分享给朋友接口
			jweixin.onMenuShareAppMessage({
				title: customParams.shareTitle,
				desc: customParams.shareIntro,
				link: customParams.shareLink,
				imgUrl: customParams.shareImg,
				success: function(res) {
					 //用户点击分享后的回调，这里可以进行统计 
					if (needCount && needCount === 1) {
						console.log('这里转发需要计数');
						console.log(needCountParams, '计数参数');
						platformAccount(isFlow, 1, needCountParams, routeParam).then(res => {
							console.log(res);
						})
						.catch(err => {
							console.log(err);
						});
					}
				},
				cancel: function(res) {}
			});
			 //分享到朋友圈接口  
			jweixin.onMenuShareTimeline({
				title: customParams.shareTitle,
				link: customParams.shareLink,
				imgUrl: customParams.shareImg,
				success: function(res) {
					 //用户点击分享后的回调，这里可以进行统计 
					if (needCount && needCount === 1) {
						console.log('这里转发需要计数');
						console.log(needCountParams, '计数参数');
						platformAccount(isFlow, 1, needCountParams, routeParam).then(res => {
							console.log(res);
						})
						.catch(err => {
							console.log(err);
						});
					}
				},
				cancel: function(res) {}
			});
		} else {
			// alert('分享平台!');
			//分享给朋友接口
			jweixin.onMenuShareAppMessage({
				title: defaultParams.shareTitle,
				desc: defaultParams.shareIntro,
				link: defaultParams.shareLink,
				imgUrl: defaultParams.shareImg,
				success: function(res) { 
					 //用户点击分享后的回调，这里可以进行统计 
					if (needCount && needCount === 1) {
						console.log('这里转发需要计数');
						console.log(needCountParams, '计数参数');
						platformAccount(isFlow, 1, needCountParams, null).then(res => {
							console.log(res);
						})
						.catch(err => {
							console.log(err);
						});
					}
				},
				cancel: function(res) {}
			});
			 //分享到朋友圈接口  
			jweixin.onMenuShareTimeline({
				title: defaultParams.shareTitle,
				link: defaultParams.shareLink,
				imgUrl: defaultParams.shareImg,
				success: function(res) {
					 //用户点击分享后的回调，这里可以进行统计 
					if (needCount && needCount === 1) {
						console.log('这里转发需要计数');
						console.log(needCountParams, '计数参数');
						platformAccount(isFlow, 1, needCountParams, null).then(res => {
							console.log(res);
						})
						.catch(err => {
							console.log(err);
						});
					}
				},
				cancel: function(res) {}
			});
		};
	});
}
// 小程序分享
function MPShare () {
	console.log('小程序分享！');
}
function shareEachPage (customSharParams, needCount, needCountParams, isFlow, routeParam) {
	// CustomSharParams 自定义分享参数
	console.log(customSharParams, needCount, needCountParams, isFlow, routeParam, '分享需要的参数！');
	console.log('分享');
	// #ifdef H5
		console.log('进入H5分享');
		if (isWeiXin === true) {
			H5Share(shareH5params, customSharParams, needCount, needCountParams, isFlow, routeParam);
		}
	// #endif
	// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU || MP-ALIPAY
		console.log('进入小程序分享');
		MPShare();
	// #endif
}
export {
	shareEachPage
}