define(['../tests/test-functions-lib'], function(testLib) { 
    
    function sumRandom(count, low, high) {      
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(testLib.getRandomNumber(low, high));
        }
        return testLib.sum.apply(null, arr);
    }
    
    return sumRandom;
})