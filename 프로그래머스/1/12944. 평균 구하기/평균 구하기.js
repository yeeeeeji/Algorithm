function solution(arr) {
    var answer = 0;
    return arr.reduce((a, c) => a+c, 0)/arr.length;
}