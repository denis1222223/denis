describe('sum of random numbers', function () {

    it('sum of 10 random numbers from 1 to 5', function () {
		expect(0 <= sumRandom(10, 1, 5) <= 50).toBeTruthy();
    });
	
	it('sum of 5 random numbers from 1 to 2', function () {
		expect(0 <= sumRandom(5, 1, 2) <= 10).toBeTruthy();
    });
	
});