define(['test-functions-lib', '../src/bind'], function(testLib) {
	
	var customSum = bind(testLib.sum, 5);
	var customSumExtended = bind(testLib.sum, 1, 2, 3);
	var customMult = bind(testLib.mult, 5);

	describe('partial application', function () {

		it('sum of 5 and 2 should be equal 7', function () {
			expect(customSum(2)).toBe(7);
		});

		it('sum of 5 and 1, 2, 3 should be equal 11', function () {
			expect(customSum(1, 2, 3)).toBe(11);
		});

		it('sum of 1, 2, 3 and 4, 10 should be equal 20', function () {
			expect(customSumExtended(4, 10)).toBe(20);
		});
		
		it('multiplying of 5 and 5 should be equal 25', function () {
			expect(customMult(5)).toBe(25);
		});
		
		it('multiplying of 5 and 2,10 should be equal 100', function () {
			expect(customMult(2, 10)).toBe(100);
		});
		
		it('build-in binding. 2 + 3 = 5.', function () {
			var customSum = testLib.sum.bind(null, 2);
			expect(customSum(3)).toBe(5);
		});
	});

})