function solution(tickets) {
    var answer = [];
    
    var cnt = tickets.length+1;
    var infos = new Object();
    for (t of tickets) {
        if (infos[t[0]]) {
            infos[t[0]].push(t[1])
        } else {
            infos[t[0]] = [t[1]];
        }
    }
    
    dfs("ICN", infos, ["ICN"], answer, cnt)
       
    return answer.sort()[0];
}

function dfs(dpt, infos, routes, answer, cnt) {
    if (infos[dpt] == undefined || !infos[dpt].length) {
        if (routes.length == cnt) {
            answer.push(routes);
        }
        return;
    }
    
    for (var i = 0; i < infos[dpt].length; i++) {
        var temp = infos[dpt].shift();
        dfs(temp, infos, [...routes, temp], answer, cnt);
        infos[dpt].push(temp);
    }
}