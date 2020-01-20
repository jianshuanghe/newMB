import {api1,api2,api3} from '@/static/mbcJs/api';
import {isWeiXin} from '@/static/mbcJs/browserType';
import {shareSdkConfig} from './H5Share/shareSdkConfig';
import {shareH5params} from './H5Share/shareH5params';
import {platformAccount} from '@/static/mbcJs/platformAccount';
console.log(api1, api2, api3);
console.log(isWeiXin);
// H5分享
async function H5Share (defaultParams, customParams, needCount, needCountParams, isFlow) {
	// defaultParams 默认分享参数
	// CustomParams 自定义分享参数
	console.log('H5分享！');
	var jweixin = require('jweixin-module');
	let sdkConfig = await shareSdkConfig();
	console.log(sdkConfig, 'sdkConfig');
	jweixin.config({
		debug: true,
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
		var shareData = {
			title: customParams && customParams.shareTitle ? customParams.shareTitle : defaultParams.shareTitle,
			desc: customParams && customParams.shareIntro ? customParams.shareIntro : defaultParams.shareIntro,
			link: customParams && customParams.shareLink ? customParams.shareLink : defaultParams.shareLink,
			imgUrl: customParams && customParams.shareImg ? customParams.shareImg : defaultParams.shareImg,
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
		};
		//分享给朋友接口  
		jweixin.onMenuShareAppMessage(shareData);
		 //分享到朋友圈接口  
		jweixin.onMenuShareTimeline(shareData);
	});
}
// 小程序分享
function MPShare () {
	console.log('小程序分享！');
}
function shareEachPage (customSharParams, needCount, needCountParams, isFlow) {
	// CustomSharParams 自定义分享参数
	console.log(customSharParams, needCount, needCountParams, isFlow, '分享需要的参数！');
	console.log('分享');
	// #ifdef H5
		console.log('进入H5分享');
		if (isWeiXin === true) {
			H5Share(shareH5params, customSharParams, needCount, needCountParams, isFlow);
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