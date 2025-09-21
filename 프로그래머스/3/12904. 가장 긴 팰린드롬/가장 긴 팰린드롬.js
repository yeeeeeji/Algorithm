function solution(s) {
    var answer = 0;
    for (var i = 0; i < s.length*2-1; i++) {
        var left = Math.floor(i/2);
        var right = left + i%2;  // (개수가) 홀수일 땐 left===right, 짝수일 땐 left===right+1
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            answer = Math.max(answer, right-left+1);
            left--, right++;
        }
    }
    return answer;
}