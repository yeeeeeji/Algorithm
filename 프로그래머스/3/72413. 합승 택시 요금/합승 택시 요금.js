function solution(n, s, a, b, fares) {
    const I = new Map();
    
    fares.forEach((f) => {
        I.get(f[0]) == undefined ? I.set(f[0], [[f[1], f[2]]]) : I.get(f[0]).push([f[1], f[2]]);
        I.get(f[1]) == undefined ? I.set(f[1], [[f[0], f[2]]]) : I.get(f[1]).push([f[0], f[2]]);
    })
    
    const S = new Array(n+1).fill(Infinity);
    const A = new Array(n+1).fill(Infinity);
    const B = new Array(n+1).fill(Infinity);
    
    for ([L, start] of [[S, s], [A, a], [B, b]]) {
        var Q = [start];
        L[start] = 0;
        while (Q.length) {
            var P = Q.shift();
            for ([r, e] of I.get(P)) {
                if (L[r] > L[P]+e) {
                    L[r] = L[P]+e;
                    Q.push(r);
                }
            }
        }
    }
    
    var answer = Infinity;
    
    for (var i = 1; i <= n; i++) {
        var T = S[i]+A[i]+B[i]
        answer = answer > T ? T : answer;
    }
    
    return answer;
}