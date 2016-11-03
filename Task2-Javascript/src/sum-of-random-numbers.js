function sumRandom(count, low, high) {
	
	function getRandomNumber(low, high) {
		 return Math.random() * (high - low) + low;
	}
	
	var arr = [];
	for (var i = 0; i < count; i++) {
		arr.push(getRandomNumber(low, high));
	}

	return sum.apply(null, arr);
}