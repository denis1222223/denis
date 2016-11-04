function linearUnfold(callback, initialState) {
    var currentState = initialState;
    var currentArray = [];
    while (currentState != null) {
        currentArray.push(currentState);
        currentState = callback(currentState);  
    }   
    return currentArray.slice(1);
}