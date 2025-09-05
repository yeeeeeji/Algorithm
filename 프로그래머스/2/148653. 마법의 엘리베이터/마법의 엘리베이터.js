function solution(storey) {
    var answer = 0;
    var digits = (storey+"").length-1;
    while (storey !== 0) {
        var a = Math.floor(storey/(10**digits));
        if (a < 5 || (a === 5 && digits === 0) || (a === 5 && digits > 0 && (storey+"")[1] < 5)) {
            answer += a;
            storey %= 10**digits;
            digits--;
        } else {
            answer += 1;
            storey = 10**(digits+1)-storey;
        }
    }
    return answer;
}