function solution(myString) {
    return myString.split("").reduce((a, c) => c === "a" || c === "A" ? a+"A" : a+c.toLowerCase(), "");
}