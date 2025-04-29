function solution(prices) {
    var pL = prices.length;
    var answer = prices.map((x, i) => {
        for (var j = i+1; j < pL; j++) {
            if (x > prices[j]) return j-i;
        }
        return pL-i-1;
    })

    return answer;
}