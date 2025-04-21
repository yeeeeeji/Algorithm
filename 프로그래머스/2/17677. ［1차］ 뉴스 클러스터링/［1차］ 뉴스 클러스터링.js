function solution(str1, str2) {
    var answer = 0;
    var A = new Object();
    var B = new Object();
    
    makeM(str1.toUpperCase(), A);
    makeM(str2.toUpperCase(), B);
    
    if (Object.keys(A).length == 0 && Object.keys(B).length == 0) return 65536;
    
    // 교집합
    var I = 0;
    for (k of Object.keys(A)) {
        if (Object.hasOwn(B, k)) {
            I += A[k] < B[k] ? A[k] : B[k];
        }
    }
    
    // 합집합
    for (k of Object.keys(A)) {
        B[k] = Object.hasOwn(B, k) && (B[k] > A[k]) ? B[k] : A[k];
    }
    var U = Object.values(B).reduce((a, c) => a+c, 0);
    
    return parseInt((I/U)*65536);
}

function makeM(S, O) {
    for (var i = 0; i < S.length-1; i++) {
        var newS = S[i]+S[i+1];
        if (/^[A-Z]+$/.test(newS)) {
            O[newS] = Object.hasOwn(O, newS) ? O[newS]+1 : 1;
        }
    }
}