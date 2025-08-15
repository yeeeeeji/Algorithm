function solution(t, p) {
    var answer = 0;
    for (var i = 0; i <= t.length-p.length; i++) {
        for (var j = 0; j < p.length; j++) {
            if (t[i+j] < p[j]) {
                answer += 1;
                break;
            } else if (t[i+j] > p[j]) {
                break;
            } else {
                if (j == p.length-1) answer += 1;
            }
        }
    }
    return answer;
}