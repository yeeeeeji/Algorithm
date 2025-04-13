function solution(progresses, speeds) {
    var answer = [];
    
    var nA = progresses.map((x, i) => Math.ceil((100-x)/speeds[i]))
    var N = nA[0];
    var C = 1;
    for (let i = 1; i < nA.length; i++) {
        if (N >= nA[i]) {
            C += 1;
        } else {
            answer.push(C);
            C = 1;
            N = nA[i];
        }
    }
    
    answer.push(C);
    
    return answer;
}