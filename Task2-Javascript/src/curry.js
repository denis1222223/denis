function curry(func) {
    var arity = func.length;
    var args = [].slice.call(arguments, 1);
    
    function accumulator() {
        var largs = args;     
        if (arguments.length > 0) {
            largs = largs.concat([].slice.call(arguments, 0));
        }      
        if (largs.length >= arity) {
            return func.apply(this, largs);
        } else {
            return curry.apply(this, [func].concat(largs));
        }
    };
    
    return args.length >= arity ? accumulator() : accumulator;
};