describe('graph tests', function () {

    var matrix = [
        [0, 7, 9, 0, 0, 14],
        [7, 0, 10, 15, 0, 0],
        [9, 10, 0, 11, 0, 2],
        [0, 15, 11, 0, 6, 0],
        [0, 0, 0, 6, 0, 9],
        [14, 0, 2, 0, 9, 0]
    ]

    var graph = new Graph(matrix);

    it('find shortest way from 1th to 1th node', function () {
        expect(graph.shortestWayTo(1)).toBe(0);
    });

    it('find shortest way from 1th to 3th node', function () {
        expect(graph.shortestWayTo(3)).toBe(9);
    });

    it('find shortest way from 1th to 6th node', function () {
        expect(graph.shortestWayTo(6)).toBe(11);
    });
    
});