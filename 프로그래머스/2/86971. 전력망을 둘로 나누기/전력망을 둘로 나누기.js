function solution(n, wires) {
    // 하나의 연결을 끊는다
    
    var answer = n;
    
    wires.forEach((x, i) => {
        var infos = new Map();
        var visited = Array(n+1).fill(false);
        wires.forEach((w, j) => {
            if (i !== j) {
                infos.get(w[0]) === undefined ? infos.set(w[0], [w[1]]) : infos.get(w[0]).push(w[1]);
                infos.get(w[1]) === undefined ? infos.set(w[1], [w[0]]) : infos.get(w[1]).push(w[0]);
            }
        })
        var Q = [1];
        visited[1] = true;
        var C = 1;
        while (Q.length) {
            var P = Q.shift();
            if (infos.get(P) !== undefined) {
                infos.get(P).forEach((p) => {
                    if (!visited[p]) {
                        visited[p] = true;
                        Q.push(p);
                        C += 1
                    }
                })
            }
        }
        var t = Math.abs(C*2-n);
        if (answer > t) answer = t;
    })
    
    return answer;
}