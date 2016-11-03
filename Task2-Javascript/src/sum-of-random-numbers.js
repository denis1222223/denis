function sumRandom(count, low, high) {
	
	var arr = [];
	for (var i = 0; i < count; i++) {
		arr.push(getRandomNumber(low, high));
	}

	return sum.apply(null, arr);
}