function sum() {
	var slice = Array.prototype.slice;
    var array = slice.call(arguments, 0);
    return array.reduce(function (a, b) { return a + b; }, 0);
}

function mult() {
    var slice = Array.prototype.slice;
    var array = slice.call(arguments, 0);
    return array.reduce(function (a, b) { return a * b;}, 1);
}

function bind(fn) {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 1);
    return function () {
        return fn.apply(this, args.concat(slice.call(arguments, 0)));
    };
}