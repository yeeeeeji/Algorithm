function solution(myString, pat) {
    var answer = 0;
    return myString.split("").reduce((a, c) => c === "A" ? a+"B" : a+"A", "").includes(pat) ? 1 : 0;
}