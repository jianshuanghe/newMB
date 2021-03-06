
var api1 = ''; // 短信
var api2 = ''; // 业务
var api3 = ''; // 图片
// uEnvDev
if (process.env.NODE_ENV === 'development') {
    // api1 = 'http://192.168.131.204:8090'; // 短信
    // api2 = 'https://hc360cyd.mynatapp.cc'; // 业务
    // api3 = 'https://img01.iambuyer.com'; // 图片
	//测试
	// api1 = 'https://api.iambuyer.com.cn';
	// api2 = 'https://open.iambuyer.com.cn/invest-rest';
	// api3 = 'https://img01.iambuyer.com.cn';
	//正式
	api1 = 'https://api.iambuyer.com.cn';
	api2 = 'https://zhaojie0001.mynatapp.cc';
	api3 = 'https://img01.iambuyer.com'; // 图片
}

// uEnvProd
if (process.env.NODE_ENV === 'production') {
	// api1 = 'http://192.168.131.203:8090'; // 短信
	// api2 = 'https://hc360cyd.mynatapp.cc'; // 业务
	// api3 = 'https://img01.iambuyer.com'; // 图片
    
	api1 = 'https://api.iambuyer.com';
    api2 = 'https://api.ruhexiu.com';
	api3 = 'https://img01.iambuyer.com'; // 图片
}
export {api1, api2, api3};