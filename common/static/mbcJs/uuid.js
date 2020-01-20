function generateUUID() { // 生成用户唯一ID
	if (!uni.getStorageSync('UUID')) { // 如果缓存中不存在uuid，则生成唯一uuid，且缓存下来
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
		uni.setStorageSync('UUID', uuid);
	} else {
		console.log('存在UUID');
	}
}

export {
	generateUUID
};
