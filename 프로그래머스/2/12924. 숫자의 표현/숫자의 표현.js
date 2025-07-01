function solution(n) {
    var answer = 1;  // 자기 자신
    var value = 0;
    var minN = 1;
    
    for (var i = 1; i < n; i++) {
        value += i;
        while (value > n && minN < i) {
            value -= minN++;
        }
        if (value == n) answer += 1;
    }
    
    return answer;
}