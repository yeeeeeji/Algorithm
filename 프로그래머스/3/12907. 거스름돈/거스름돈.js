function solution(n, money) {
    var answer = 0;
    var dp = Array(n+1).fill(0);
    dp[0] = 1;
    money.sort((a, b) => a-b).forEach((m) => {
        for (var i = m; i <= n; i++) {
            dp[i] += dp[i-m]%1000000007;
        }
    });
    return dp[n];
}