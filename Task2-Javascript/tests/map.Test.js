describe('map', function () {
	
    it('increase by 1:  [1, 2, 3] -> [2, 3, 4]', function () {
        expect(map([1, 2, 3], inc)).toEqual([2, 3, 4]);
    });

	it('decrease by 3:  [7, 4, 11] -> [4, 1, 8]', function () {
        expect(map([7, 4, 11], dec)).toEqual([6, 3, 10]);
    });
	
	it('build-in mapping', function () {
        expect([1, 1, 1].map(inc)).toEqual([2, 2, 2]);
    });
	
});