function solution(priorities, location) {
 
    var answer = 0;
    var A = [];
    var nP = priorities.map((x, i) => [x, i]);
    
    while (nP.length > 0) {
        
        var V = nP.shift();
        if (nP.some((x) => V[0] < x[0])) {
            nP.push(V);
        } else {
            if (V[1] == location) return ++answer
            A.push(V);
            answer++;
        }
    }

    return answer+1;
}