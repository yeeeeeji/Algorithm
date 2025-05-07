function solution(A, B) {
    var answer = 0;
    
    // 이길 땐 적은 차이로, 질 땐 큰 차이로
    A = A.sort((a, b) => a-b);
    B = B.sort((a, b) => a-b);
    var AI = 0;
    var BI = 0;
    
    while (BI < B.length) {
        if (A[AI] < B[BI]) {
            answer += 1;
            AI += 1;
            BI += 1;
        } else {
            BI += 1;
        }
    }
    
    return answer;
}