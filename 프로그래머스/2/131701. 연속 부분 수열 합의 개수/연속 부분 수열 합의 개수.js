function solution(elements) {
    var answer = new Set();
    var total = elements.reduce((a, c) => a+c, 0);
    answer.add(total);
    var nums = Array(elements.length).fill(0);
    var eL = elements.length;
    
    for (var i = 0; i <= eL/2-1; i++) {
        nums = nums.map((n, j) => n+elements[(j+i)%eL]);
        nums.forEach((n) => {
            answer.add(n);
            answer.add(total-n);
        })
    }
    
    return answer.size;
}