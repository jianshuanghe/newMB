// 功能模块数据返回合并到原始数据上
function mergeBasicData (data, type, newsItems) {
	console.log(data, '---------------接口返回的最原始数据------------------');
	console.log(type, '------------------当前模块的type------------------');
	console.log(newsItems, '-------------------更改后的模块数据---------------');
	data.map((items, index)=>{
		if(items.type === type) {
			items = newsItems
		}
	});
	return data
}

export {
	mergeBasicData
}