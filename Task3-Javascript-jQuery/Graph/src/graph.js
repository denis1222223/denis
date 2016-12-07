function Graph(_adj, _weight) {
    var adj = _adj,
        weigth = _weight,
        used = [],
        pred = [],
        distances = [],
        length = adj.length;

    var dejkstra = function(start) {
        distances[start] = 0;
        for (var iter = 0; iter < length; ++iter) {
            var v = -1;
            var distancesV = Infinity;

            for (var i = 0; i < length; ++i) {
                if (used[i]) {
                    continue;
                }
                if (distancesV < distances[i]) {
                    continue;
                }
                v = i;
                distancesV = distances[i];
            }

            for (var i = 0; i < adj[v].length; ++i) {
                var u = adj[v][i];
                var weightU = weigth[v][i];
                if (distances[v] + weightU < distances[u]) {
                    distances[u] = distances[v] + weightU;
                    pred[u] = v;
                }
            }

            used[v] = true;
        }
    };

    this.distanceTo = function(to) {
        console.log(distances);
        return distances[to];
    };

    for (var i = 0; i < length; i++) {
        pred[i] = -1;
        distances[i] = Infinity;
    }

    dejkstra(0);
}