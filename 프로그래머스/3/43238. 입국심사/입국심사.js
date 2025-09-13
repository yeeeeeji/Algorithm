function solution(n, times) {
    var answer = 0, l = 1, r = n*Math.max(...times);
    while (l <= r) {
        var mid = Math.floor((l+r)/2);
        var sum = times.reduce((a, c) => a+Math.floor(mid/c), 0);
        if (sum >= n) r = mid-1, answer = mid;
        else if (sum < n) l = mid+1;
    }
    return answer;
}