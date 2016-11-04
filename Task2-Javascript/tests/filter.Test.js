define(['test-functions-lib', '../src/filter'], function(testLib) {
		
	describe('filter', function () {

		it('filter all divisible by 5 numbers', function () {
			expect(filter([1, 5, 8, 10, 15, 2], testLib.isDivisibleByFive)).toEqual([5, 10, 15]);
		});

		it('filter all less than 10 numbers', function () {
			expect(filter([1, 5, 8, 10, 15, 2], testLib.isLessThanTen)).toEqual([1, 5, 8, 2]);
		});
		
		it('filter all even numbers', function () {
			expect(filter([1, 5, 8, 10, 15, 2], testLib.isEven)).toEqual([8, 10, 2]);
		});
		
	});

})