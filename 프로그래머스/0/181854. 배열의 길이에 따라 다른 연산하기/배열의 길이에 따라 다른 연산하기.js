function solution(arr, n) {
    return arr.map((x, i) => x + n*(arr.length%2 ? -(i%2-1) : i%2));
}