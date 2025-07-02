function solution(n) {
    if (n <= 2) return n;
    var infos = Array(n+1);
    infos[1] = 1;
    infos[2] = 2;
    for (var i = 3; i <= n; i++) {
        infos[i] = (infos[i-1]+infos[i-2])%1234567;
    }
    return infos.pop();
}