function solution(arr1, arr2) {
    var answer = Array.from({length: arr1.length}, () => Array());
    for (var i = 0; i < arr2[0].length; i++) {
        arr1.forEach((arr, j) => {
            var total = 0;
            arr.forEach((a, k) => {
                total += a*arr2[k][i];
            })
            answer[j].push(total);
        })
    }
    return answer;
}