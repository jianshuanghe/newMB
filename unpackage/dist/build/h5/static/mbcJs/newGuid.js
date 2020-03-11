function newGuid () {
	let s4 = function() {
		return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
	}
	return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
}

export{
	newGuid
}