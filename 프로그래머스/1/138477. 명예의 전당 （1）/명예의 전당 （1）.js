function solution(k, score) {
    var answer = [];
    var fame = [];
    for (var i = 0; i < score.length; i++) {
        if (i < k) {
            fame.push(score[i]);
            answer.push(Math.min(...fame));
        } else {
            fame.sort((a, b) => b-a);
            if (fame[k-1] < score[i]) {
                fame.pop();
                fame.push(score[i]);
                answer.push(Math.min(fame[k-2], score[i]))
            } else {
                answer.push(fame[k-1]);
            }
        }
    }
    return answer;
}