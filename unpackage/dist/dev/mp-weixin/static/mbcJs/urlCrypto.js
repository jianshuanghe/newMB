var md5 = require('md5');
let Base64 = require('js-base64').Base64;

function urlCrypto(params, type) {
	if (type === 0) {
		let paramStr = JSON.stringify(params);
		let base64Str = Base64.encode(paramStr, "UTF-8");
		let signStr = md5(base64Str + 'bjhcyxdsjyxgs0506');
		let endData = {
			"object": base64Str,
			"sign": signStr
		};
		return JSON.stringify(endData); 
	};
	if (type === 1) {
		let paramStr = JSON.parse(params);
		let object = paramStr.object;
		let endData = Base64.decode(object, "UTF-8");
		return JSON.parse(endData);
	}
}
export {
	urlCrypto
};
