function solution(arr) {
    arr = arr.sort((a, b) => a-b);
    
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i]*arr[i-1]/euclidean(arr[i], arr[i-1]);
    }
    
    return arr.pop();
}

function euclidean(a, b) {
    var c = a%b;
    while (c) {
        a = b;
        b = c;
        c = a%b;
    }
    return b;
}