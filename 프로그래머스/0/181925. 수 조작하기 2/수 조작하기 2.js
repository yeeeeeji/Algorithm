function solution(numLog) {
    var answer = '';
    for (var i = 1; i < numLog.length; i++) {
        var diff = numLog[i]-numLog[i-1];
        if (diff === 1) answer += "w";
        else if (diff === -1) answer += "s";
        else if (diff === 10) answer += "d";
        else answer += "a"
    }
    return answer;
}