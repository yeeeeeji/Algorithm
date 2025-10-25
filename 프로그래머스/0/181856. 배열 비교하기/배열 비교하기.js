function solution(arr1, arr2) {
    var a1l = arr1.length, a2l = arr2.length;
    var a1s = arr1.reduce((a, c) => a+c, 0), a2s = arr2.reduce((a, c) => a+c, 0);
    if (a1l > a2l || (a1l === a2l && a1s > a2s)) return 1;
    if (a1l < a2l || (a1l === a2l && a1s < a2s)) return -1;
    return 0;
}