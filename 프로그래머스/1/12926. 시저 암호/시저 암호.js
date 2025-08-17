function solution(s, n) {
    var answer = '';
    s.split("").forEach((x) => {
        if (x !== " ") answer += convertChar(x, n);
        else answer += x;
    })
    return answer;
}

function convertChar(a, n) {
    var code = a.charCodeAt();
    if (code <= 90) {  // 대문자
        return String.fromCharCode(code+n <= 90 ? code+n : code+n-26)
    } else {  // 소문자
        return String.fromCharCode(code+n <= 122 ? code+n : code+n-26)
    }
} 