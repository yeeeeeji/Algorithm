function solution(expression) {
    var priorities = [
            ["+", "-", "*"], ["+", "*", "-"], 
            ["-", "+", "*"], ["-", "*", "+"], 
            ["*", "+", "-"], ["*", "-", "+"]
    ];
    expression = expression.split("");
    var infos = [""];
    expression.forEach((p) => {
        if (isNaN(p)) {
            infos.push(p);
            infos.push("");
        } else {
            infos[infos.length-1] += p;
        }
    })
    infos = infos.map((info) => {
        if (isNaN(info)) return info;
        return Number(info);
    })
    var answer = 0;
    var op;
    priorities.forEach((priority) => {
        var total = 0;
        var newInfos = infos.slice();
        priority.forEach((p) => {
            var newExp = [];
            for (var i = 0; i < newInfos.length; i++) {
                if (newInfos[i] == p) {
                    newExp.push(calculate(newExp.pop(), newInfos[i+1], p));
                    i++;
                } else {
                    newExp.push(newInfos[i]);
                }
            }
            newInfos = newExp.slice();
        })
        total = newInfos[0];
        total = total > 0 ? total : -total;
        if (total > answer) {
            answer = total;
            op = priority;
        }
    })
    return answer;
}

function calculate(a, b, o) {
    if (o == "+") return a+b;
    if (o == "-") return a-b;
    if (o == "*") return a*b;
}