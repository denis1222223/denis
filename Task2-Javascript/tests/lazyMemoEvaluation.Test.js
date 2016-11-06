define(['../src/lazyMemoEvaluation'], function() {

    var counter = 0;
    
    function incFive(arg) {
        counter++;
        switch (arg) { 
            case "undefined": return undefined;
            case "NaN": return NaN;
            default: return arg + 5;
        }
    }

    var lazyMemoInc = lazyMemoEvaluation(incFive);

    describe('memoization', function() {

        it('lazy memo evaluation of inc 4+5', function () {
            expect(lazyMemoInc(4)).toBe(9);
        });
        
        it('3 times more of inc 4+5', function () {
            lazyMemoInc(4);
            lazyMemoInc(4);
            lazyMemoInc(4);
            
            expect(counter).toBe(1);
        });
        
        it('NaN result', function() {
            expect(lazyMemoInc("NaN")).toEqual(NaN);
        });
        
        it('NaN result 2 times more', function() {
            lazyMemoInc("NaN");
            lazyMemoInc("NaN");
            
            expect(counter).toBe(2);        
        });
        
    });

})