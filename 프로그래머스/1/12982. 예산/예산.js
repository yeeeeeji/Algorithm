function solution(d, budget) {
    var answer = 0;
    d = d.sort((a, b) => a-b);
    for (x of d) {
        budget -= x;
        if (budget >= 0) answer++;
    }
    return answer;
}