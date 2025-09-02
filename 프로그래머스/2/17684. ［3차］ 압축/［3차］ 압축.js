function solution(msg) {
    var answer = [];
    var dict = new Map([
        ["A", 1], ["B", 2], ["C", 3], ["D", 4], ["E", 5], ["F", 6], ["G", 7], ["H", 8], ["I", 9],
        ["J", 10], ["K", 11], ["L", 12], ["M", 13], ["N", 14], ["O", 15], ["P", 16], ["Q", 17],
        ["R", 18], ["S", 19], ["T", 20], ["U", 21], ["V", 22], ["W", 23], ["X", 24], ["Y", 25], ["Z", 26]
    ]);
    var maxL = 1;
    for (var i = 0; i < msg.length; i++) {
        var word = "";
        for (var j = Math.min(maxL, msg.length-i+1); j > 0; j--) {
            word = msg.slice(i, i+j);
            if (dict.has(word)) {
                answer.push(dict.get(word));
                if (i+j < msg.length) {
                    word += msg[i+j];
                    dict.set(word, dict.size+1);
                    maxL = word.length > maxL ? word.length : maxL
                } else {
                    return answer;
                }
                break;
            }
        }
        i += word.length-2;
    }
    return answer;
}