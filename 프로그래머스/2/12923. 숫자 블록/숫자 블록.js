function solution(begin, end) {
    var answer = Array(end-begin+1).fill(1);
    for (var i = answer.length-1; i >= 0; i--) {
        var num = begin+i;
        var max = 1;
        for (var j = 2; j <= Math.sqrt(num); j++) {
            if (num%j === 0) {
                if (num/j <= 10000000) {
                    max = num/j;
                    break;
                } else {
                    if (j <= 10000000) max = Math.max(max, j);
                }
            }
        }
        answer[i] = max;
    }
    if (begin === 1) answer[0] = 0;
    
    return answer;
}