function getCurrentYear() {
	var currDate = new Date();
	return currDate.getFullYear();
}

function writeYearsUsed(started) {
	var currYear = getCurrentYear();
	document.write(currYear - started);
}