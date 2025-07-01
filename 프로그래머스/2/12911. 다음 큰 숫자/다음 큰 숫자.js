function solution(n) {
    var answer = n + 2**(n.toString(2).split("").reverse().indexOf("1"));
    var c = n.toString(2).split("1").length-1;
    var nc = answer.toString(2).split("1").length-1;
    for (var i = 0; i < c-nc; i++) {
        answer += 2**i;
    }
    return answer;
}