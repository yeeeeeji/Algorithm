function solution(n, works) {
    if (works.reduce((a, c) => a+c, 0) <= n) return 0
    
    var infos = new Array(50001).fill(0);
    works.forEach(x => infos[x] += 1)
    
    for (var i = 50000; i > 0; i--) {
        if (n == 0) break;
        if (infos[i]) {
            var V = Math.min(infos[i], n);
            infos[i] -= V;
            infos[i-1] += V;
            n -= V;
        }
    }
    return infos.reduce((a, c, i) => {
        if (c) {
            return a+(i*i)*c;
        } else {
            return a;
        }
    }, 0)
}