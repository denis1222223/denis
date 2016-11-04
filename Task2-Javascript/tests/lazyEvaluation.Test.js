define(['test-functions-lib', '../src/lazyEvaluation'], function(testLib) {

	describe('lazy evaluation', function () {

		var lazySumTwoAndThree = lazyEvaluation(testLib.sum, 2, 3);
		var lazySumSevenAndEight = lazyEvaluation(testLib.sum, 7, 8);
		var lazyMultTwoAndThree = lazyEvaluation(testLib.mult, 2, 3);
		
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

})