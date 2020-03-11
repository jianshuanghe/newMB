function resetURL (path, pathAll) {
	console.log(path, '页面所在路径');
	console.log(pathAll, '页面全路径,包括参数');
	// #ifdef H5
		let _href = window.location.href;
		console.log(_href);
		alert(_href);
		if (_href.indexOf(path) <= -1) {
			if (pathAll) {
				return window.location.assign(_href + pathAll);
			} else {
				return window.location.assign(_href + path);
			}
		}
	// #endif
}

export{
	resetURL
}