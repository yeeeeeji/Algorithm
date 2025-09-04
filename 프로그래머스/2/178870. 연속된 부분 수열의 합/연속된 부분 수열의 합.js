function solution(sequence, k) {
    var [sum, start, end] = [0, sequence.length-1, sequence.length-1];
    while (sum !== k) {
        sum += sequence[start];
        if (sum === k) {
            if (sequence[start] === sequence[end]) {
                var a = sequence.indexOf(sequence[start]);
                return [a, a+(end-start)];
            } else {
                return [start, end];
            }
        } else if (sum > k) {
            sum -= sequence[end];
            end--;
        }
        start--;
    }
}