function solution(s) {
    var answer = [];
    var infos = {};
    s.split("").forEach((x, i) => {
        if (infos[x] === undefined) {
            infos[x] = i;
            answer.push(-1);
        } else {
            answer.push(i-infos[x]);
            infos[x] = i;
        }
    })
    return answer;
}