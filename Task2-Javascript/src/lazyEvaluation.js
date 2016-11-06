define(['../src/bind'], function() {

    function lazyEvaluation (func) {
        
        var bindedLazyEvaluation = bind.apply(null, arguments);
        var noArg;
        var storage = [];
        
        function isExists(arg) {
            if (!arg) {
                if (!noArg) {
                    noArg = bindedLazyEvaluation(); 
                }
                return false;
            }
            return true;
        }
        
        return function(arg) { 
            if (isExists(arg)) {
                if (!(arg in storage)) {
                    storage[arg] = bindedLazyEvaluation(arg);
                }   
                return storage[arg];
            } else {
                return noArg;
            }
        }
    }
    
    return lazyEvaluation;
})