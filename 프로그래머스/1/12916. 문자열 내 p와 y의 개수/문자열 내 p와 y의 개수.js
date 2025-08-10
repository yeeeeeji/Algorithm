function solution(s){
    var answer = 0;
    for (x of s) {
        if (x === "p" || x === "P") answer += 1;
        else if (x === "y" || x === "Y") answer -= 1;
    }
    return !answer;
}