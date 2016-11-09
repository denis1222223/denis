define(['test-functions-lib', '../src/lazyEvaluation'], function(testLib, lazyEvaluation) {

    var counter = 0;
    
    function customSum() {
        counter++;
        return testLib.sum.apply(null, arguments);
    }
    
    var lazySumTwoAndThree = lazyEvaluation(customSum, 2, 3);
    var lazySumTwoAndFive = lazyEvaluation(customSum, 2, 5)
    var lazySumTwoAndUndefined = lazyEvaluation(customSum, 2, undefined);
    
    describe('lazy evaluation', function () {

        it('lazy evaluation of sum 2 + 3', function () {
            expect(lazySumTwoAndThree()).toBe(5);
        });

        it('3 times more of sum 2 + 3', function () {
            lazySumTwoAndThree();
            lazySumTwoAndThree(5);
            lazySumTwoAndThree(6, 7);

            expect(counter).toBe(1);
        });

        it('lazy evaluation of sum 2 + 5', function () {
            expect(lazySumTwoAndFive()).toBe(7);
        });

        it('3 times more of sum 2 + 5', function () {
            lazySumTwoAndFive();
            lazySumTwoAndFive(33);
            lazySumTwoAndFive();

            expect(counter).toBe(2);
        });

        it('lazy evaluation of sum 2 + undefined', function () {
            expect(lazySumTwoAndUndefined()).toEqual(NaN);
        });

        it('3 times more of sum 2 + undefined', function () {
            lazySumTwoAndUndefined();
            lazySumTwoAndUndefined();
            lazySumTwoAndUndefined();

            expect(counter).toBe(3);
        });
        
    });

})