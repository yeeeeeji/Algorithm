function solution(n, results) {
    var answer = 0;
    var infos = Array.from({length: n}, () => Array(n).fill(0));
    results.forEach(([w, l]) => {
        infos[w-1][l-1] = 1;
    })
    for (var k = 0; k < n; k++) {
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                if (infos[i][j] === 0 && infos[i][k] === 1 && infos[k][j] === 1) {
                    infos[i][j] = 1;
                }
            }
        }
    }
    for (var i = 0; i < n; i++) {
        var x = infos[i].reduce((a, c) => a+c, 0);
        var y = 0;
        for (var j = 0; j < n; j++) y += infos[j][i];
        if (x+y === n-1) answer++
    }
    return answer;
}