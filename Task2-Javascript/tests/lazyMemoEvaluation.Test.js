define(['../src/lazyMemoEvaluation'], function() {

    var counterInc = 0;
    var counterSum = 0;

    function incFive(arg) {
        counterInc++;
        switch (arg) { 
            case "undefined": return undefined;
            case "NaN": return NaN;
            default: return arg + 5;
        }
    }

    function sum(obj) {
        counterSum++;
        var result = 0;
        for (var p in obj) {
            result += obj[p];
        }
        return result;
    }

    var memoInc = lazyMemoEvaluation(incFive);
    var memoSum = lazyMemoEvaluation(sum);

    describe('memoization', function() {

        it('memo evaluation of inc 4+5', function () {
            expect(memoInc(4)).toBe(9);
        });
        
        it('3 times more of inc 4+5', function () {
            memoInc(4);
            memoInc(4);
            memoInc(4);
            
            expect(counterInc).toBe(1);
        });
        
        it('NaN result', function() {
            expect(memoInc("NaN")).toEqual(NaN);
        });
        
        it('NaN result 2 times more', function() {
            memoInc("NaN");
            memoInc("NaN");
            
            expect(counterInc).toBe(2);
        });

        it('memo evaluation of sum {a:1, b:2}', function () {
            expect(memoSum({a:1, b:2})).toBe(3);
        });

        it('3 times more of sum {a:1, b:2}', function () {
            memoSum({a:1, b:2});
            memoSum({a:1, b:2});
            memoSum({a:1, b:2});

            expect(counterSum).toBe(1);
        });

        it('memo evaluation of sum {a:2, b:3}', function () {
            expect(memoSum({a:2, b:3})).toBe(5);
        });

        it('2 more times memo evaluation of sum {a:2, b:3}', function () {
            memoSum({a:2, b:3});
            memoSum({a:2, b:3});

            expect(counterSum).toBe(2);
        });

        it('undefined', function () {
            expect(memoSum(undefined)).toBe(0);
        });

        it('undefined again', function () {
            memoSum(undefined);
            expect(counterSum).toBe(3);
        });

        it('null', function () {
            expect(memoSum(null)).toBe(0);
        });

        it('null again', function () {
            memoSum(null);
            expect(counterSum).toBe(4);
        })

        var circularObj = {
            a: 3,
            obj: circularObj
        }

        it('circular reference', function () {
            expect(memoSum(circularObj)).toEqual(NaN);
        });

        it('3 times more circular reference', function () {
            memoSum(circularObj);
            memoSum(circularObj);
            memoSum(circularObj);
            expect(counterSum).toBe(5);
        });

    });

})