function solution(arr, divisor) {
    arr = arr.filter((a) => !(a%divisor)).sort((a, b) => a-b);
    return arr.length > 0 ? arr : [-1]
}