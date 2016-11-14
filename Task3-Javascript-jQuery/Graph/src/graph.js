function Graph(matrix) {
    this.nodesCount = matrix.length;
    this.relationsMatrix = matrix;
    this.initialize();
    this.shortestWays();
}

Graph.prototype.initialize = function() {
    this.distances = [];
    this.visitedNodes = [];
    for (var i = 0; i < this.nodesCount; i++) {
        this.distances[i] = 10000;
        this.visitedNodes[i] = 1;
    }
    this.distances[0] = 0;
}

Graph.prototype.shortestWayTo = function(index) {
    return this.distances[index-1];
}

Graph.prototype.shortestWays = function() {
    do {
        var minindex = 10000;
        var min = 10000;
        for (var i = 0; i < this.nodesCount; i++) {
            if ((this.visitedNodes[i] == 1) && (this.distances[i] < min)) {
                min = this.distances[i];
                minindex = i;
            }
        }
        if (minindex != 10000) {
            for (var i = 0; i < this.nodesCount; i++) {
                if (this.relationsMatrix[minindex][i] > 0) {
                    var temp = min + this.relationsMatrix[minindex][i];
                    if (temp < this.distances[i])
                        this.distances[i] = temp;
                }
            }
            this.visitedNodes[minindex] = 0;
        }
    } while (minindex < 10000);
    return this.distances;
}