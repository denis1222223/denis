function sum() {
    var args = [].slice.call(arguments, 0);
    return args.reduce(function(a, b) { 
		return a + b; 
	}, 0);
}

function mult() {
    var args = [].slice.call(arguments, 0);
    return args.reduce(function(a, b) { 
		return a * b;
	}, 1);
}

function sum4(n1,n2,n3,n4) {
  var args = [].slice.call(arguments, 0);
    return args.reduce(function(a, b) { 
		return a + b; 
	}, 0);
}

function inc(value) {
	return ++value;
}
	
function dec(value) {
	return --value;
}

function isDivisibleByFive(number) {
	return number % 5 == 0 ? true : false;
}

function isLessThanTen(number) {
	return number < 10 ? true : false;
}

function isEven(number) {
	return number % 2 == 0 ? true : false;
}