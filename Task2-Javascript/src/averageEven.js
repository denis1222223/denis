define(['../tests/test-functions-lib'], function(testLib) {
    
    function averageEven(arr) {
        var arrEven = filter(arr, testLib.isEven);      
        return testLib.average(arrEven);
    }

    return averageEven;
})