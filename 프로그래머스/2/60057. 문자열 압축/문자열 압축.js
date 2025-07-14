function solution(s) {
    var answer = s.length;
    for (var i = 1; i <= s.length; i++) {
        var str = "", unit = "", count = 0;
        for (var j = 0; j < s.length; j+=i) {
            var x = s.substr(j, i);
            if (j == 0) {
                unit = x;
                count = 1;
            } else {
                if (x === unit) {
                    count += 1;
                } else {
                    str += count > 1 ? count + unit : unit;
                    unit = x;
                    count = 1;
                }
            }
        }
        str += count > 1 ? count + unit : unit;
        answer = Math.min(answer, str.length);
    }
    return answer;
}