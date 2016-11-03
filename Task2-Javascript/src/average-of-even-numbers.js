
function averageEven(arr) {
	var arrEven = filter(arr, isEven);		
	return average(arrEven);
}