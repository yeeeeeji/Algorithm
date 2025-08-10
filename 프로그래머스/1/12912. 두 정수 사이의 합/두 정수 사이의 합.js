function solution(a, b) {
    var answer = 0;
    if (a > b) [a, b] = [b, a]
    for (var i = a; i <= b; i++) {
        answer += i;
    }
    return answer;
}