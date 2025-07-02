function solution(n) {
    var infos = Array(n+1);
    infos[0] = 0;
    infos[1] = 1;
    for (var i = 2; i <= n; i++) {
        infos[i] = (infos[i-1] + infos[i-2])%1234567;
    }
    return infos[n];
}