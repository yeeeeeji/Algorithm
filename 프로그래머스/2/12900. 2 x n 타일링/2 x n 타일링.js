function solution(n) {
    if (n <= 2) return n;
    var counts = [];
    counts[1] = 1, counts[2] = 2;
    for (var i = 3; i <= n; i++) {
        var sum = counts[i-2] + counts[i-1];
        counts[i] = sum > 1000000007 ? sum%1000000007 : sum;
    }
    return counts[n];
}