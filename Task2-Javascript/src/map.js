function map(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++ ) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}