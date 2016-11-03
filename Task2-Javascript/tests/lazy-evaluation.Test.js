describe('lazy evaluation', function () {

	var lazySumTwoAndThree = lazyEvaluation(sum, 2, 3);
	var lazySumSevenAndEight = lazyEvaluation(sum, 7, 8);
	var lazyMultTwoAndThree = lazyEvaluation(mult, 2, 3);
	
    it('lazy evaluation of sum 2 and 3', function () {
        expect(lazySumTwoAndThree()).toBe(5);
    });
    
	it('lazy evaluation of sum 7 and 8', function () {
        expect(lazySumSevenAndEight()).toBe(15);
    });
	
	it('lazy evaluation of sum 2 and 3', function () {
        expect(lazyMultTwoAndThree()).toBe(6);
    });
});