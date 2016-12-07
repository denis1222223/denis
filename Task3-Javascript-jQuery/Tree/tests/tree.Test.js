describe('tree tests', function () {

    var tree = new Tree(5);
    tree.add(4, 5);
    tree.add(6, 5);
    tree.add(9, 5);
    tree.add(1, 9);

    it('find node', function () {
        expect(tree.findNode(6)).toBe(tree._root.children[1]);
    });

    it('find root node', function () {
        expect(tree.findNode(5)).toBe(tree._root);
    });

    it('remove node', function () {
        tree.remove(9, 5);
        expect(tree.findNode(9)).toBe(undefined);
    });

    it('depth first search', function () {
        tree.depthFirstSearch(function(node) {
            node.data++;
        });
        expect(tree._root.data).toBe(6);
    });
    
});