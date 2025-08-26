function solution(k, m, score) {
    var answer = 0;
    score = score.sort((a, b) => b-a);
    var i = m-1;
    while (i < score.length) {
        answer += score[i]*m;
        i += m;
    }
    return answer;
}