define(function() {

    function bind(func) {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments, 1);
        return function () {
            return func.apply(null, args.concat(slice.call(arguments, 0)));
        };
    }

    return bind;
});