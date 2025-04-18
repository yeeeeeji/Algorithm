function solution(s) {
    s = s.replaceAll(/[{}]/g, "").split(",");
    
    var answer = [];
    var V = new Array(100001).fill(0);
    
    for (x of s) {
        V[parseInt(x)] += 1;
    }
    
    var T = [];
    for (var i = 1; i <= 100000; i++) {
        if (V[i] != 0) {
            T.push([i, V[i]]);
        }
    }
    
    T.sort((a, b) => b[1]-a[1]);
    for (t of T) {
        answer.push(t[0]);
    }
    
    return answer;
}
