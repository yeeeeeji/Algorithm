function solution(x, y, n) {
    var answer = 0;
    var visited = Array(y+1).fill(false);
    var dp = Array(y+1).fill(Infinity);
    visited[x] = true;
    dp[x] = 0;
    const check = (c, n) => {
        if (n <= y) {
            dp[n] = Math.min(dp[n], dp[c]+1);
            visited[n] = true;
        }
    }
    for (var i = x; i < y; i++) {
        if (visited[i]) {
            check(i, i*2);
            check(i, i*3);
            check(i, i+n);
        }
    }
    return dp[y] == Infinity ? -1 : dp[y];
}