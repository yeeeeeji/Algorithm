function solution(n, k) {
    var answer = 0;
    
    for (N of n.toString(k).split("0")) {
        if (N != "" && parseInt(N) != 1 && check(parseInt(N))) answer += 1;
    }
    return answer;
}

function check(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n%i==0) return false;
    }
    return true;
}