function solution(players, callings) {
    var answer = [...players];
    var infos = {};
    players.forEach((p, i) => { infos[p] = i });
    callings.forEach((c) => {
        var prev = answer[infos[c]-1];
        answer[infos[c]-1] = c;
        answer[infos[c]] = prev;
        infos[c] -= 1;
        infos[prev] += 1;
    })
    return answer;
}