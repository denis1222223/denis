define(['../src/bind'], function() {
    
    function lazyEvaluation (func) {
        var bindedFunc = bind.apply(null, arguments);
        var result;
        return function() {
            if (result != undefined) {
                return result;
            }
            return result = bindedFunc();
        }
    }
    
    return lazyEvaluation;
})