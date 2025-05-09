function solution(n, edge) {
    var answer = n-1;
    var visited = new Array(n+1).fill(false);
    
    var connection = Array.from({length: n+1}, () => Array());
    for (e of edge) {
        connection[e[0]].push(e[1]);
        connection[e[1]].push(e[0]);
    }
    
    var E = [1];
    visited[1] = true;
    
    while (E.length) {
        var temp = [];
        for (e of E) {
            for (c of connection[e]) {
                if (!visited[c]) {
                    temp.push(c);
                    visited[c] = true;
                }
            }
            
        }
        if (temp.length == answer) return answer;
        E = [...temp];
        answer -= temp.length;
    }
    
    return answer;
}
