function lazyMemoEvaluation(func) {
    var storage = [];
    return function(arg) {
        if (!(arg in storage)) {        
            storage[arg] = func(arg);
        }
        return storage[arg];
    }
}