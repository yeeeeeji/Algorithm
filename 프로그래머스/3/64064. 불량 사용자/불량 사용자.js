function solution(user_id, banned_id) {
    var answer = new Set();
    var regexs = [];
    for (b of banned_id) {
        regexs.push(b.replaceAll("*", "."));
    }
    var infos = new Object();
    regexs.forEach(a => {
        infos[a] = [];
        user_id.forEach(b => {
            if (b.length == a.length && !b.search(new RegExp(a))) {
                infos[a].push(b)
            }
        })
    })
    
    dfs(regexs, 0, [], infos, answer);
    
    return answer.size;
}

function dfs(bans, i, comb, infos, answer) {
    if (i >= bans.length) {
        if (comb.length == bans.length) answer.add(comb.sort().join("/"));
        return;
    }
    
    for (id of infos[bans[i]]) {
        if (!comb.includes(id)) {
            dfs(bans, i+1, [...comb, id], infos, answer);
        }
    }
}