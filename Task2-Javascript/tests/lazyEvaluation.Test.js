define(['test-functions-lib', '../src/lazyEvaluation'], function(testLib, lazyEvaluation) {

    var counter = 0;
    var counterEmptyParams = 0;
    
    function customSum() {
        counter++;
        return testLib.sum.apply(null, arguments);
    }
    
    function customSumEmptyParams() {
        counterEmptyParams++;
        return testLib.sum.apply(null, arguments);
    }
    
    var lazySumTwoAndThree = lazyEvaluation(customSum, 2, 3);
    var lazySumTwoAndThreeEmpty = lazyEvaluation(customSumEmptyParams, 2, 3);     
    var lazyMultFive = lazyEvaluation(testLib.mult, 5);
    
    describe('lazy evaluation', function () {

        it('lazy evaluation of sum 2 + 3 + 2', function () {
            expect(lazySumTwoAndThree(2)).toBe(7);
        });
        
        it('3 times more of sum 2 + 3 + 2', function () {
            lazySumTwoAndThree(2);
            lazySumTwoAndThree(2);
            lazySumTwoAndThree(2);
            
            expect(counter).toBe(1);
        });
        
        it('lazy evaluation of sum 2 and 3 and no more params', function () {
            expect(lazySumTwoAndThreeEmpty()).toBe(5);
        });
        
        it('2 times more of sum 2 + 3 and no more params', function () {
            lazySumTwoAndThreeEmpty();
            lazySumTwoAndThreeEmpty();
            
            expect(counterEmptyParams).toBe(1);
        });
        
        it('lazy evaluation of mult 5 and 4', function () {
            expect(lazyMultFive(4)).toBe(20);
        });
        
    });

})