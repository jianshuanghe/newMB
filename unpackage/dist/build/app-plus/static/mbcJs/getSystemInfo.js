// 获取用户手机相关信息
function getSystemInfo () {
	uni.getSystemInfo({
	    success: function (res) {
			uni.setStorageSync('getSystemInfo',res); // 缓存用户getSystemInfo
			
			// let shareConfigUrl =  window.location.href.split('#')[0];
			// uni.setStorageSync('shareConfigUrl',shareConfigUrl);
	    }
	});
}

export{
	getSystemInfo
}