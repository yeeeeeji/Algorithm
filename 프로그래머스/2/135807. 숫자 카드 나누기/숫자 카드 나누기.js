function solution(arrayA, arrayB) {
    var answer = 0;
    arrayA = arrayA.sort((a, b) => a-b);
    arrayB = arrayB.sort((a, b) => a-b);
    var minA = arrayA[0], minB = arrayB[0];
    var A = [], B = [];
    for (var i = minA; i > 1; i--) {
        if (minA%i === 0) A.push(i);
    }
    for (var i = minB; i > 1; i--) {
        if (minB%i === 0) B.push(i);
    }
    var newA = A.filter((a) => {
        for (var i = 1; i < arrayA.length; i++) {
            if (arrayA[i]%a) return false;
            if (i == arrayA.length-1) return true;
        }
        return true;
    })
    var newB = B.filter((b) => {
        for (var i = 1; i < arrayB.length; i++) {
            if (arrayB[i]%b) return false;
            if (i == arrayB.length-1) return true;
        }
        return true;
    })
    for (a of newA) {
        for (var i = 0; i < arrayB.length; i++) {
            if (arrayB[i] % a === 0) break;
            if (i === arrayB.length-1) {
                answer = a;
            }
        }
        if (answer) break;
    }
    for (b of newB) {
        for (var i = 0; i < arrayA.length; i++) {
            if (arrayA[i] % b === 0) break;
            if (i === arrayA.length-1) {
                return Math.max(answer, b);
            }
        }
    }
    
    return answer;
}