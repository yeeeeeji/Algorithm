function solution(n, t, m, p) {
    var answer = '';
    
    var N = 0;  // 숫자 기준
    var A = 1;  // 문자 기준
    
    while (answer.length < t) {
        for (x of N.toString(n)) {
            if (A%m == p%m) {
                answer += x.toUpperCase();
                if (answer.length == t) break;
            }
            A++;
        }
        N++;
    }
    
    return answer;
}