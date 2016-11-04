function linearFold(array, callback, initialValue) {
    var previousValue = initialValue;
    for (var i = 0; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array);
    }
    return previousValue;
}