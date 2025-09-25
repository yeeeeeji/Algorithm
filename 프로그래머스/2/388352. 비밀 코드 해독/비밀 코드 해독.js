function solution(n, q, ans) {
    var answer = 0;
    
    var cases = [];
    const makeCase = (c, v) => {
        if (c.length === 5) cases.push(c);
        else {
            for (var i = v; i <= n-(4-c.length); i++) {
                makeCase([...c, i], i+1);
            }
        }
    }
    makeCase([], 1);
    
    for (var c of cases) {
        for (var i = 0; i < ans.length; i++) {
            if (10-new Set([...q[i], ...c]).size !== ans[i]) break;
            else if (i === ans.length-1) answer++;
        }
    }

    return answer;
}