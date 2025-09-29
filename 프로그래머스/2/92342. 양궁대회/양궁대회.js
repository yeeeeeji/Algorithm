function solution(n, info) {
    var answer = [], gap = 0;
    
    const findComb = (idx, arrow, apeach, lion, comb) => {
        if (arrow < 0) return;
        if (comb.length === 11 && lion-apeach > gap) {
            if (arrow > 0) comb[10] = arrow;
            answer = [...comb], gap = lion-apeach;
        } 
        for (var i = idx+1; i < 11; i++) {
            // 쏘거나 안쏘거나
            findComb(i, arrow-info[10-i]-1, apeach, lion+i, [info[10-i]+1, ...comb]);
            findComb(i, arrow, info[10-i] > 0 ? apeach+i : apeach, lion, [0, ...comb]);
        }
    }
    
    findComb(-1, n, 0, 0, []);
    
    return answer.length !== 11 ? [-1] : answer;
}