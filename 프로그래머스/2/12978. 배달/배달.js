function solution(N, road, K) {
    var weight = Array.from({length: N+1}, () => Array(N+1).fill(Infinity));
    road.forEach(([x, y, t]) => {
        if (t < weight[x][y]) weight[x][y] = weight[y][x] = t;
    });
    var visited = Array(N+1).fill(false);
    var time = weight[1].filter((x) => true);
    
    const getSmallNode = () => {
        var minV = [Infinity, -1];
        for (var i = 1; i <= N; i++) {
            if (!visited[i] && time[i] < minV[0]) minV = [time[i], i];
        }
        return minV[1]
    }
    
    visited[1] = true, time[1] = 0;
    for (var i = 0; i < N; i++) {
        var node = getSmallNode();
        visited[node] = true;
        for (var j = 1; j <= N; j++) {
            if (!visited[j] && (time[j] > weight[node][j]+time[node])) {
                time[j] = weight[node][j]+time[node];
            }
        }
    }
    
    return time.reduce((a, c) => c > K ? a : a+1, 0);
}