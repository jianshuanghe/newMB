function VwVhToPx (num, type) {
	let wWidth = uni.getStorageSync('getSystemInfo').windowWidth;
	let wHeight = uni.getStorageSync('getSystemInfo').windowHeight;
	if (type === 'vh') {
		return num * wHeight * 0.01;
	} else if (type === 'vw') {
		return num * wWidth * 0.01
	}
}
export {
	VwVhToPx
}