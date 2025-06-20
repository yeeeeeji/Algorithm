function solution(players, m, k) {
    var answer = 0;
    var servers = [];
    var capacity = m-1;
    
    players.forEach((p, i) => {
        if (servers.length && servers[0][1] == i) {
            servers = servers.filter((s) => {
                if (s[1] <= i) {
                    capacity -= m*s[0]
                    return false;
                }
                return true;
            })
        }
        if (p > capacity) {
            var extra = Math.ceil((p-capacity)/m);
            servers.push([extra, i+k]);
            capacity += m*extra;
            answer += extra;
        }
    })
    
    return answer;
}