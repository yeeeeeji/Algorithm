function solution(n) {
    var answer = 1;
    var numbers = Array(n+1).fill(false).map((_, i) => i%2 === 0 ? true : false);
    for (var i = 3; i <= n; i+=2) {
        if (!numbers[i]) {
            var flag = true;
            for (var j = 3; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    flag = false;
                    break;
                }
            }
            if (flag) answer += 1;
            for (var j = 1; i*j <= n; j++) {
                numbers[i*j] = true;
            }
        }
    }
    return answer;
}