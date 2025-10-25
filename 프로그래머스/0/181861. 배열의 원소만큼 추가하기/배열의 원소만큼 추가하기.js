function solution(arr) {
    var X = [];
    arr.forEach((x, i) => {
        while (x > 0) X.push(arr[i]), x--;
    })
    return X;
}