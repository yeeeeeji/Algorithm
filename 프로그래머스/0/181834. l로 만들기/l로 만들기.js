function solution(myString) {
    return myString.split("").reduce((a, c) => a+(c < "l" ? "l" : c), "");
}