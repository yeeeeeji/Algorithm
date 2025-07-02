function solution(k, tangerine) {
    var infos = new Map();
    tangerine.forEach((t) => {
        if (infos.get(t) == undefined) infos.set(t, 1);
        else infos.set(t, infos.get(t)+1);
    })
    var counts = [...infos.values()].sort((a, b) => a-b);
    var count = 0;
    var answer = 0;
    while (count < k) {
        count += counts.pop();
        answer += 1;
    }
    return answer;
}
