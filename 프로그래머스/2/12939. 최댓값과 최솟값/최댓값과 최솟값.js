function solution(s) {
    var answer = s.split(" ").map((x) => Number(x)).sort((a, b) => a-b);
    return `${answer[0]} ${answer[answer.length-1]}`;
}