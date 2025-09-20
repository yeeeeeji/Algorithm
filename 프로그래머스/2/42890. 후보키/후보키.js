function solution(relation) {
    var answer = 0;
    var sortR = Array.from({length: relation[0].length}, () => Array());
    var mini = [];

    relation.forEach((x) => {
        x.forEach((y, i) => {
            sortR[i].push(y);
        })
    })
    
    for (var i = 0; i < relation[0].length; i++) {
        if (sortR[i].length === new Set(sortR[i]).size) {
            answer++;
        } else {
            mini.push(i);
        }
    }
    
    var cases = [];
    const findCase = (c, i) => {
        if (c.length > 1) cases.push(c);
        for (var j = i+1; j < mini.length; j++) {
            findCase([...c, mini[j]], j);
        }
    }
    
    for (var i = 0; i < mini.length-1; i++) {
        findCase([mini[i]], i)
    }

    cases.sort((a, b) => b.length-a.length)

    const checkCase = (c) => {
        var newV = Array(relation.length).fill("");
        for (var x of c) {
            relation.forEach((r, j) => {
                newV[j] += r[x];
            })
        }
        if (newV.length === new Set(newV).size) {
            answer++;
            cases = cases.filter((x) => {
                var flag = true;
                for (var i = 0; i < c.length; i++) {
                    if (!x.includes(c[i])) {
                        flag = false;
                        break;
                    }
                }
                return !flag;
            });
        }
    }
    while (cases.length > 0) {
        checkCase(cases.pop());
    }
    
    return answer;
}