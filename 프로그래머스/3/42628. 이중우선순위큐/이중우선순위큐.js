function solution(operations) {
    var Q = [];
    
    for (o of operations) {
        if (o === "D 1") {
            if (Q.length) Q.pop();
        } else if (o === "D -1") {
            if (Q.length) Q.shift();
        } else {
            Q.push(Number(o.split(" ")[1]));
            Q.sort((a, b) => a-b)
        }
    }
    
    return Q.length ? [Math.max(...Q), Math.min(...Q)] : [0, 0];
}