function solution(arr1, arr2) {
    return arr2.map((y, i) => y.map((x, j) => x+arr1[i][j]));
}