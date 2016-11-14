function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

Tree.prototype.depthFirstSearch = function(callback) {
    (function recurse(currentNode) {
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            recurse(currentNode.children[i]);
        }
        callback(currentNode);
    })(this._root);
};

Tree.prototype.print = function() {
    var callback = function(node) {
        console.log(node.data);
    }
    this.depthFirstSearch(callback);
}

Tree.prototype.findNode = function(data) {
    var nodeToFind;
    var callback = function(node) {
        if (node.data === data) {
            nodeToFind = node;
        }
    }
    this.depthFirstSearch(callback);
    return nodeToFind;
};

Tree.prototype.add = function(data, toData) {
    var child = new Node(data),
        parent = null;

    var callback = function(node) {
        if (node.data === toData) {
            parent = node;
        }
    };
    this.depthFirstSearch(callback);

    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};

Tree.prototype.remove = function(data, fromData) {
    var tree = this,
        parent = null,
        index;

    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };
    this.depthFirstSearch(callback);

    if (parent) {
        index = findIndex(parent.children, data);

        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }
};

function findIndex(arr, data) {
    var index;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }
    return index;
}

var tree = new Tree(6);
tree.add(3, 6);
tree.add(7, 6);
tree.add(4, 7);
// tree.remove(3, 6);

console.log(tree.findNode(3));

tree.print();
