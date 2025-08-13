function solution(arr) {
    if (arr.length == 1) return [-1];
    var min = Math.min(...arr);
    return arr.filter((a) => a !== min);
}