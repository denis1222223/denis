
function averageEven(arr) {
	
	function average(arr) {
		return sum.apply(null, arr) / arr.length;
	}	
	
	var arrEven = filter(arr, isEven);	
	
	return average(arrEven);
}