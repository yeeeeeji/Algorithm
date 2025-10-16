function solution(n) {
    var answer = [1];
    for (var i = 2; i <= n; i++) if (n%i === 0) answer.push(i);
    return answer;
}