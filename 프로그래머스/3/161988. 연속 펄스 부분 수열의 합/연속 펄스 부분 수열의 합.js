function solution(sequence) {
    var answer = 0;
    // -로 시작, +로 시작 나눠서
    var sumP = 0, sumN = 0;
    for (var i = 0; i < sequence.length; i++) {
        if (i%2) {
            sumN += sequence[i];
            sumP -= sequence[i];
        } else {
            sumN -= sequence[i];
            sumP += sequence[i];
        }
        if (sumN < 0) sumN = 0;
        if (sumP < 0) sumP = 0;
        answer = Math.max(answer, sumN, sumP);
    }
    return answer;
}