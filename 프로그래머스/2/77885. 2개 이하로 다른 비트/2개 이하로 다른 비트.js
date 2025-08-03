function solution(numbers) {
    var answer = [];
    for (number of numbers) {
        if (number === 0) {
            answer.push(1);
            continue;
        }
        var bin = number.toString(2);
        var next = Array(bin.length+1).fill("0");
        var flag = false;
        for (var i = bin.length-1; i >= 0; i--) {
            if (i == 0 && !flag) {
                next[0] = "1";
                next[1] = "0";
                break;
            }
            if (!flag && bin[i] === "0") {
                if (i !== bin.length-1) {
                    next[i+2] = "0";
                    flag = true;
                }
                next[i+1] = "1";
                flag = true;
            } else {
                next[i+1] = bin[i];
            }
        }
        answer.push(parseInt(next.join(""), 2));
    }
    return answer;
}