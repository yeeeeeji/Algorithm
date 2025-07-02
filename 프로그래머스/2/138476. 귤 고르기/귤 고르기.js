function solution(k, tangerine) {
    var infos = new Array(10000001).fill(0);
    tangerine.forEach((t) => {infos[t] += 1});
    infos = infos.sort((a, b) => a-b);
    var count = 0;
    var answer = 0;
    while (count < k) {
        count += infos.pop();
        answer += 1;
    }
    return answer;
}