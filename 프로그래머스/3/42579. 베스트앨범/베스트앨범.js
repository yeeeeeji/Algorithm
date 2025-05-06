function solution(genres, plays) {
    var answer = [];
    
    var gp = new Object();
    
    for (var i = 0; i < genres.length; i++) {
        if (!gp[genres[i]]) {
            gp[genres[i]] = [[i, plays[i]]]
        } else {
            gp[genres[i]].push([i, plays[i]]);
        }
    }
    
    var ranking = Object.keys(gp).sort((a, b) => {
        return gp[b].reduce((c, d) => c+d[1], 0) - gp[a].reduce((c, d) => c+d[1], 0)
    })
    console.log(ranking)
    for (r of ranking) {
        console.log(r)
        if (gp[r].length == 1) answer.push(gp[r][0][0]);
        else {
            gp[r] = gp[r].sort((a, b) => b[1]-a[1])
            answer.push(gp[r][0][0]);
            answer.push(gp[r][1][0]);
        }
    }
    
    return answer;
}