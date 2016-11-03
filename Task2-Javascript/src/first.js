function findFirst(arr, condition) {
	for (var i = 0; i < arr.length; i++) {
		if (condition(arr[i])) {
			return arr[i];
		}
	}
	return null;
}