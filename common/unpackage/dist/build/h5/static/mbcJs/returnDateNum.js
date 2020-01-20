function returnDateNum (start, end) {
	console.log(start, end);
	start = new Date(start.replace(/-/g, "/"));
	end = new Date(end.replace(/-/g, "/"));
	var days = end.getTime() - start.getTime();
	var time = parseInt(days / (1000 * 60 * 60 * 24));
	return time;
}
export {
	returnDateNum
}