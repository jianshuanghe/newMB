let isWeiXinFn = () => {
	return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
};

function isWeiXin() {
	if (isWeiXinFn()) {
		isWeiXin = true;
		uni.setStorageSync('browserType', 'WX');
	} else {
		isWeiXin = false;
		uni.setStorageSync('browserType', 'FWX');
	};
};
export {
	isWeiXin
};
