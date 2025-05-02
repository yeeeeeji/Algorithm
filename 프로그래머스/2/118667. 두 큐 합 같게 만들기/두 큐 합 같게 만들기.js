function solution(queue1, queue2) {
    var answer = 0;
    
    var q1s = queue1.reduce((a, c) => a+c, 0);
    var goal = (q1s + queue2.reduce((a, c) => a+c, 0))/2;
    if (goal.isFloat) return -1;
    if (q1s == goal) return 0;
    
    var q1q2 = queue1.length + queue2.length;
    var maxM = q1q2*2;
    var newQ1 = queue1.concat(queue2);
    var newQ2 = queue2.concat(queue1);
    var xI = 0;
    var yI = 0;
    
    while (answer < maxM) {
        if (q1s == goal) break;
        if (q1s < goal) {
            if (yI < maxM) {
                q1s += newQ2[yI];
                yI++;
            }
        } else {
            if (xI < maxM) {
                q1s -= newQ1[xI];
                xI++;
            }
        }
        answer += 1;
    }
    if (q1s != goal) return -1;
    
    return answer;
}