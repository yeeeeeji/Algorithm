function solution(id_list, report, k) {
    var answer = Array(id_list.length).fill(0);
    var idx = {};
    var infos = {};
    id_list.forEach((id, i) => {
        idx[id] = i;
        infos[id] = new Set();
    })
    report.forEach((r) => {
        var [from, to] = r.split(" ");
        infos[to].add(idx[from]);
    })
    for (info of Object.values(infos)) {
        if (info.size >= k) {
            info.forEach((i) => {
                answer[i] += 1;
            })
        }
    }
    return answer;
}