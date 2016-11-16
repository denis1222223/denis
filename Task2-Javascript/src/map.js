define(['../src/linearFold'], function(linearFold) {

    function map(arr, callback) {  
    
        function mapCallback(prev, currentValue, i, array) {
            prev.push(callback(currentValue));
            return prev;
        }

        return linearFold(arr, mapCallback, []);
    }

    return map;
})