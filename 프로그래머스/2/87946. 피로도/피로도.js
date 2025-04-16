function solution(k, dungeons) {
    
    var visited = new Array(dungeons.length).fill(false);
    var answer = [];
    
    dfs(k, dungeons, visited, 0, answer)
    
    return Math.max(...answer);
}

function dfs(K, D, V, A, AR) {
    for (let i = 0; i < D.length; i++) {
        if (!V[i] && K >= D[i][0]) {
            V[i] = true;
            AR.push(A+1)
            dfs(K-D[i][1], D, V, A+1, AR);
            V[i] = false;
        }
    }
}