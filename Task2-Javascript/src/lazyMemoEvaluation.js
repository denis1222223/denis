function lazyMemoEvaluation(func) {
    var storage = {};
    return function(arg) {
        var key = arg;
        if (arg === Object(arg)) {
            key = JSON.stringify(arg);
        }

        if (!(key in storage)) {
            storage[key] = func(arg);
        }

        return storage[key];
    }
}