function solution(myString, pat) {
    return myString.split("").reduce((a, c) => c === "A" ? a+"B" : a+"A", "").includes(pat) ? 1 : 0;
}
