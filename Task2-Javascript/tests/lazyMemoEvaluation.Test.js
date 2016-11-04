define(['test-functions-lib', '../src/lazyMemoEvaluation'], function(testLib) {

    describe('memoization', function () {

        var lazyMemoSumTwoAndThree = lazyMemoEvaluation(testLib.sum, 2, 3);
        var lazyMemoSumSevenAndEight = lazyMemoEvaluation(testLib.sum, 7, 8);
        var lazyMemoMultTwoAndThree = lazyMemoEvaluation(testLib.mult, 2, 3);
        
        it('lazy memo evaluation of sum 2 and 3', function () {
            expect(lazyMemoSumTwoAndThree()).toBe(5);
        });
        
        it('lazy memo evaluation of sum 7 and 8', function () {
            expect(lazyMemoSumSevenAndEight()).toBe(15);
        });
        
        it('lazy memo evaluation of sum 2 and 3', function () {
            expect(lazyMemoMultTwoAndThree()).toBe(6);
        });
        
    });

})