function solution(babbling) {
    var answer = 0;
    var words = ["aya", "ye", "woo", "ma"];
    
    for (bab of babbling) {
        var flag = false;
        for (w of words) {
            var regex = new RegExp(`(?:${w}){2,}`, "g")
            if (bab.match(regex)) {
                flag = true;
                break;
            }
        }
        if (flag) continue;
        var regex = new RegExp(`(aya|ye|woo|ma)+`, "g")
        if (bab.replaceAll(regex, "").length == 0) answer += 1;
    }
    return answer;
}