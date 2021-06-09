export const modifyPrice = (price) => {
	if (!price) return '';
	return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export function generateArrayOfYears(range) {
	var max = new Date().getFullYear();
	var min = max - range;
	var years = [];

	for (var i = max; i >= min; i--) {
		years.push(i);
	}
	return years;
}

export function daysInMonth(month, year) {
	// Use 1 for January, 2 for February, etc.
	return new Date(Number(year), Number(month), 0).getDate();
}
