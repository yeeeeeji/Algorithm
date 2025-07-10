function solution(n, k) {
    var answer = [];
    var nums = Array.from({length: n}, (_, i) => i+1);
    var total = nums.reduce((a, c) => a*c, 1)
    
    k -= 1;
    for (var i = n; i > 0; i--) {
        total /= i;
        var index = Math.floor(k/total);
        answer.push(nums.splice(index, 1)[0]);
        k %= total;
    }    
    return answer;
}
