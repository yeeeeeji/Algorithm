function solution(arr) {
    for (var i = 0; i < arr[0].length-1; i++) {
        for (var j = i+1; j < arr[0].length; j++) {
            if (arr[i][j] !== arr[j][i]) return 0
        }
    }
    return 1;
}