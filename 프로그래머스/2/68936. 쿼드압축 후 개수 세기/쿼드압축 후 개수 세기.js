function solution(arr) {
    var answer = [0, 0];
    if (check(arr)) {
        answer[arr[0][0]] += 1;
        return answer;
    }
    var lists = [arr];
    while (lists.length > 0) {
        quarter(lists.pop()).forEach((a) => {
            if (a.length == 1 || check(a)) {
                answer[a[0][0]] += 1;
            } else {
                lists.push(a);
            }
        })
    }
    
    return answer;
}

function quarter(arr) {
    var aL = arr.length/2;
    var [A, B, C, D] = [A, B, C, D].map((a) => Array.from({length: aL}, () => Array()));
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i < aL && j < aL) {
                A[i][j] = arr[i][j];
            } else if (i < aL && j >= aL) {
                B[i][j-aL] = arr[i][j];
            } else if (i >= aL && j < aL) {
                C[i-aL][j] = arr[i][j];
            } else {
                D[i-aL][j-aL] = arr[i][j];
            }
        }
    }
    return [A, B, C, D];
}

function check(arr) {
    var val = arr[0][0];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (val !== arr[i][j]) return false;
        }
    }
    return true;
}