function solution(scores) {
    var answer = 1;
    var [w1, w2] = scores[0];
    var wS = w1+w2;
    
    scores = scores.sort((a, b) => {
        if (a[0] == b[0]) return a[1]-b[1];
        return b[0]-a[0]
    });
    
    var maxB = scores[0][1];
    
    for ([A, B] of scores) {
        if (w1 < A && w2 < B) return -1;
        if (B >= maxB) {
            maxB = B;
            if (A+B > wS) answer += 1;
        }
    }
    
    return answer;
}