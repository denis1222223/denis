describe('memoization', function () {

	var lazyMemoSumTwoAndThree = lazyMemoEvaluation(sum, 2, 3);
	var lazyMemoSumSevenAndEight = lazyMemoEvaluation(sum, 7, 8);
	var lazyMemoMultTwoAndThree = lazyMemoEvaluation(mult, 2, 3);
	
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