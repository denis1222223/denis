
var specialAdd = bind(sum, 1000);
var specialMultiply = bind(mult, 2);

describe('partial application', function () {

    it('sum 1000 with  1 gives 1001', function () {
        expect(specialAdd(1)).toBe(1001);
    });

    it('sum 1000 with  1 + 10 + 100 gives 1111', function () {
        expect(specialAdd(1, 10, 100)).toBe(1111);
    });

    it('sum 1000 + 100 with  10 + 1 gives 1111', function () {
        expect(bind(bind(sum, 1000), 100)(11)).toBe(1111);
    });

    it('multiply 2 with 2 gives 4', function () {
        expect(specialMultiply(2)).toBe(4);
    });

    it('multiply 2 with 2*3*4 gives 48', function () {
        expect(specialMultiply(2, 3, 4)).toBe(48);
    });

});