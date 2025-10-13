function solution(n) {
    var answer = 0;
    for (var i = n%2; i <= n; i+=2) answer += n%2 ? i : i**2;
    return answer;
}