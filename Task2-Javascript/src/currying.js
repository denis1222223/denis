function curry(f) {
    var arity = f.length,
        args  = [].slice.call(arguments, 1);
    
    function accumulator() {
        var largs = args;
        
        if (arguments.length > 0) {
            largs = largs.concat([].slice.call(arguments, 0));
        }
        
        if (largs.length >= arity) {
            return f.apply(this, largs);
        } else {
            return curry.apply(this, [f].concat(largs));
        }
    };
    
    return args.length >= arity ? accumulator() : accumulator;
};