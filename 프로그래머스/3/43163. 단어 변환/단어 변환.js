function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    var infos = new Object();
    var newB = begin.split("");
    words = words.map(w => w.split(""));
    words.push(newB);
    
    for (w of words) {
        infos[w.join("")] = [];
        for (x of words) {
            if (x != newB) {
                if (w.filter((a, i) => a!==x[i]).length == 1) infos[w.join("")].push(x.join(""));
            }
        }
    }
    
    if (infos[begin].includes(target)) return 1;
    if (!infos[target].length) return 0;
    
    var wL = words.length;
    var answer = [wL];
    
    dfs(begin, target, infos, 0, wL-1, answer);
    
    return answer[0];
}

function dfs(current, target, infos, count, limit, answer) {
    if (count > answer[0] || count > limit) return;
    if (current == target) {
        answer[0] = count;
        return;
    }
    for (info of infos[current]) {
        dfs(info, target, infos, count+1, limit, answer);
    }
    
}