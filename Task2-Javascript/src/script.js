function sum() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

function add(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

function bindFirstArg(f, a) {
	alert("outside");
	return function (b) {
		alert("inside");
		return f(a, b);
	}
}

// var addOne = bindFirstArg(add, 1);
// var addThree = bindFirstArg(add, 3);
// var multiplyTen = bindFirstArg(multiply, 10);

// alert(multiplyTen(4));

var makeAdder = bindFirstArg(bindFirstArg, add);
var addOne = makeAdder(1);

//alert(addOne(4));