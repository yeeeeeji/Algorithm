function solution(n, computers) {
    var answer = 0;
    var check = new Array(n).fill(false);
    
    for (var i = 0; i < n; i++) {
        if (!check[i]) {
            var Q = [i];
            while (Q.length) {
                var I = Q.shift();
                check[I] = true
                computers[I].forEach((e, i) => {
                    if (!check[i] && e == 1) Q.push(i);
                })
            }
            answer += 1;
        }
    }
    
    return answer;
}