function getDate(e, time) {
	let day = new Date();
	if (time === 'later') { // 时间往后推算
		day.setTime(day.getTime() + e * 24 * 60 * 60 * 1000);
	} else { // 时间往前推算
		day.setTime(day.getTime() - e * 24 * 60 * 60 * 1000);
	};
	let getMonth = '';
	if (Number(day.getMonth() + 1) < 10) {
		getMonth = '0' + String(day.getMonth() + 1);
	} else {
		getMonth = String(day.getMonth() + 1);
	}
	let getDate = '';
	if (Number(day.getDate()) < 10) {
		getDate = '0' + String(day.getDate());
	} else {
		getDate = String(day.getDate());
	}
	return day.getFullYear() + '-' + getMonth + '-' + getDate;
}
export {getDate}