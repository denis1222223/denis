define(['../src/averageEven'], function(averageEven) {

	describe('average of even numbers', function () {

		it('[1, 2, 3, 4, 5, 6] -> [2, 4, 6] -> 4', function () {
			expect(averageEven([1, 2, 3, 4, 5, 6])).toBe(4);
		});
		
		it('[1, 3, 5] -> [] -> NaN', function () {
			expect(averageEven([1, 3, 5])).toEqual(NaN);
		});
		
		it('[] -> [] -> NaN', function () {
			expect(averageEven([])).toEqual(NaN);
		});
		
		it('[2, 4, 6, 6, 4] -> [2, 4, 6, 6, 4] -> 4.4', function () {
			expect(averageEven([2, 4, 6, 6, 4])).toBe(4.4);
		});
		
	});

})