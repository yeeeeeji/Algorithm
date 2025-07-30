function solution(keymap, targets) {
    var answer = [];
    var alphabets = Array(26).fill(Infinity);
    keymap.forEach((key) => {
        key.split("").forEach((k, i) => {
            var idx = k.charCodeAt()-65;
            alphabets[idx] = Math.min(i+1, alphabets[idx])
        });
    })
    targets.forEach((target) => {
        var count = 0;
        for (t of target) {
            var idx = t.charCodeAt()-65;
            if (alphabets[idx] == Infinity) {
                count = 0;
                break;
            } else {
                count += alphabets[idx];
            }
        }
        count == 0 ? answer.push(-1) : answer.push(count)
    })
    return answer;
}