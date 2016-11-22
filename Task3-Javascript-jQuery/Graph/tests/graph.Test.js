describe('graph tests', function () {
    
    var adj = [
        [1, 4],
        [0, 2, 3],
        [1, 3, 4],
        [1, 2],
        [0, 2]
    ];

    var weight = [
        [4, 12],
        [4, 12, 3],
        [12, 18, 7],
        [3, 18],
        [12, 7]
    ];

    var graph = new Graph(adj, weight);

    it('find shortest way from 0th to 0th node', function () {
        expect(graph.distanceTo(0)).toBe(0);
    });

    it('find shortest way from 0th to 2th node', function () {
        expect(graph.distanceTo(2)).toBe(16);
    });

    it('find shortest way from 0th to 4th node', function () {
        expect(graph.distanceTo(4)).toBe(12);
    });

});