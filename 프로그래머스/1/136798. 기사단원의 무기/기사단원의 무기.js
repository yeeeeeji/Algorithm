function solution(number, limit, power) {
    var answer = 0;
    for (var i = 1; i <= number; i++) {
        var count = 0;
        if (Number.isInteger(Math.sqrt(i))) count += 1;
        for (var j = 1; j < Math.sqrt(i); j++) {
            if (i % j == 0) count += 2;
            if (count > limit) {
                count = power;
                break;
            }
        }
        answer += count;
    }
    return answer;
}