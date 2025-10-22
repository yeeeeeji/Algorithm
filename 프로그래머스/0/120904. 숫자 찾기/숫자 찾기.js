function solution(num, k) {
    var answer = (num+"").indexOf(k);
    return answer > -1 ? answer+1 : answer;
}