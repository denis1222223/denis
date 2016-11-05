define(['../src/linearFold'], function() {

    function first(arr, condition) {
        
        function findFirst(prev, currentValue, i, array) {
            if (condition(currentValue)) {
                if (i < array.length - 1) {
                    array[i + 1] = currentValue;
                }
                return currentValue;
            }
        }

        return linearFold(arr.slice(0), findFirst, 0);
    }
    
    return first;
    
})