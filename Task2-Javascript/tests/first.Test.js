define(['test-functions-lib', '../src/first'], function(testLib) {

    describe('first', function () {

        it('find first even number', function () {
            expect(first([1, 5, 77, 4, 8], testLib.isEven)).toBe(4);
        });
		
		it('find first even number. [1, 5, 77] -> undefined', function () {
            expect(first([1, 5, 77], testLib.isEven)).toBe(undefined);
        });
        
        it('find first divisible by 5 number', function () {
            expect(first([1, 5, 77, 4, 8], testLib.isDivisibleByFive)).toBe(5);
        });
        
        it('find first less than 10 number', function () {
            expect(first([1, 5, 77, 4, 8], testLib.isLessThanTen)).toBe(1);
        });
        
    });

})