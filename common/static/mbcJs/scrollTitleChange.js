function scrollTitleChange(e, num, datas) {
	console.log('-----------------------根据当前滚动位置判断当前title和横向列表切换-------------------');
	console.log(e, num, datas, '---------e:当前节点---------num：距离顶部多少切换----------------------datas:当前数据和当前index---------------');
	let view = uni.createSelectorQuery().in(this).select('#' + e);
	view.fields({
		size: true,
		scrollOffset: true
	}, data => {}).exec();

	view.boundingClientRect(data => {
		console.log(data, '节点离页面顶部的距离为data')
		console.log(data, "节点离页面顶部的距离为" + data.top);
		let top = Number(data.top);
		if (top <= num) { // 当前组件滚动到顶部了
			this.$emit('tap-ChangeTitle', datas);
		}
	}).exec();
}
export {
	scrollTitleChange
}
