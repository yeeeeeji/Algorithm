function solution(weights) {
    var answer = 0;
    var infos = {};
    var ratio = [1, 3/2, 2, 4/3];
    
    weights.sort((a, b) => b-a).forEach((w) => {
        var a;
        ratio.forEach((r) => {
            a = w*r;
            if (infos[a]) answer += infos[a];
        })
        if (!infos[w]) infos[w] = 1;
        else infos[w] += 1;
    })
    return answer;
}