function filter(arr, callback) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}