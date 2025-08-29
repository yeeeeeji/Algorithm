function solution(n, m) {
    var min = 0;
    if (n > m) [n, m] = [m, n];
    
    for (var i = n; i > 0; i--) {
        if (n%i === 0 && m%i === 0) {
            min = i;
            break;
        }
    }
    for (var i = 1; i <= n; i++) {
        if (m*i%n === 0) return [min, m*i];
    }
}