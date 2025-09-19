function solution(k, d) {
    var answer = 0;
    for (var i = 0; i <= d; i+=k) {
        answer += Math.floor(Math.floor(Math.sqrt(d*d-i*i))/k)+1
    }
    return answer;
}