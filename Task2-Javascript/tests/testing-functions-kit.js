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