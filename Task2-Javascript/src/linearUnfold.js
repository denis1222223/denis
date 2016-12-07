define(function() {

    function linearUnfold(callback, initialState) {
        var currentState = callback(initialState);
        var currentArray = [];
        while (currentState) {
            currentArray.push(currentState);
            currentState = callback(currentState);
        }
        return currentArray;
    }

    return linearUnfold;
});