function solution(m, n, puddles) {
    
    var V = Array.from({length: n}, () => new Array(m).fill(0));
    puddles.forEach((x) => {
        V[x[1]-1][x[0]-1] = -1;
    });
    V[0][0] = 1;
    
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (V[i][j] != -1) {
                V[i][j] += ((i > 0 ? Math.max(V[i-1][j], 0) : 0)+(j > 0 ? Math.max(V[i][j-1], 0) : 0))%1000000007;
            }
        }
    }

    return V[n-1][m-1];
}