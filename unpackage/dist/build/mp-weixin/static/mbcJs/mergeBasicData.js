// 功能模块数据返回合并到原始数据上
function mergeBasicData (data, type, newsItems, indexNum) {
	console.log(data, '---------------接口返回的最原始数据------------------');
	console.log(type, '------------------当前模块的type------------------');
	console.log(newsItems, '-------------------更改后的模块数据---------------');
	console.log(indexNum, '当前需要更改的数据所处的位置')
	data.map((items, index)=>{
		if(items.type === type && index === indexNum) {
			// items = null;
			// items = newsItems;
			data.splice(index,1,newsItems);
		}
	});
	return data
}

export {
	mergeBasicData
}