define(['../src/linearUnfold'], function() {

    function callbackUnfold1(value) {
        value++;
        return value <= 5 ? value : null;
    }

    describe('linear unfold', function () {

        it('initial value = 0, increasing until 5', function () {
            expect(linearUnfold(callbackUnfold1, 0)).toEqual([1, 2, 3, 4, 5]);
        });

        it('initial value = 2, increasing until 5', function () {
            expect(linearUnfold(callbackUnfold1, 2)).toEqual([3, 4, 5]);
        });
    });

})