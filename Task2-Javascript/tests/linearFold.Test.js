define(['../src/linearFold'], function(linearFold) {

    function callbackFold1(prev, currentValue, i, array) {
        return prev + currentValue + i;
    }

    function callbackFold2(prev, currentValue, i, array) {
        return prev - currentValue * i;
    }

    describe('linear fold', function() {
        
        it('arr: [1,2,3], result: 0+1+0 -> 1+2+1 -> 4+3+2 = 9', function() {
            expect(linearFold([1, 2, 3], callbackFold1, 0)).toBe(9);
        });
        
        it('arr: [1,2,3], result: 2+1+0 -> 3+2+1 -> 6+3+2 = 11', function() {
            expect(linearFold([1, 2, 3], callbackFold1, 2)).toBe(11);
        });
        
        it('arr: [1,2,3], result: 0-1*0 -> 0-2*1 -> -2-3*2 = -8', function() {
            expect(linearFold([1, 2, 3], callbackFold2, 0)).toBe(-8);
        });
        
        it('build-in variant', function() {
            expect([1, 2, 3].reduce(callbackFold1, 0)).toBe(9);
        });
    });
    
})