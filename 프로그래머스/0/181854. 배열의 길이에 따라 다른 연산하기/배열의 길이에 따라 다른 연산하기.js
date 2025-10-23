function solution(arr, n) {
    return arr.map((x, i) => arr.length%2 ? (i%2 ? x : x+n) : (i%2 ? x+n : x));
}