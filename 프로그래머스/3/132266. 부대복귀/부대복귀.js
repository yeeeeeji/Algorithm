function solution(n, roads, sources, destination) {
    var R = new Map();
    for ([a, b] of roads) {
        R.get(a) == undefined ? R.set(a, [b]) : R.get(a).push(b);
        R.get(b) == undefined ? R.set(b, [a]) : R.get(b).push(a);
    }
    
    var V = new Array(n+1).fill(-1);
    V[destination] = 0;
    var Q = [[destination, 0]];
    
    while (Q.length) {
        var [P, N] = Q.shift();
        if (R.get(P) == undefined) continue;
        for (r of R.get(P)) {
            if (V[r] == -1) {
                Q.push([r, N+1]);
                V[r] = N+1;
            }
        }
    }
    return sources.map((s) => V[s]);
}