describe('first', function () {

    it('find first even number', function () {
		expect(findFirst([1, 5, 77, 4, 8], isEven)).toBe(4);
    });
	
	it('find first divisible by 5 number', function () {
		expect(findFirst([1, 5, 77, 4, 8], isDivisibleByFive)).toBe(5);
    });
	
	it('find first less than 10 number', function () {
		expect(findFirst([1, 5, 77, 4, 8], isLessThanTen)).toBe(1);
    });
});