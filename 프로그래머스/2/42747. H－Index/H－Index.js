function solution(citations) {
    
    citations.sort((a, b) => b-a);
    
    var P = [];
    var A = 0;
    
    for (var i = 0; i < citations.length; i++) {
        P.push(citations[i])
        if (P.length > citations[i]) return A;
        A++;
    }
    
    return A;
}