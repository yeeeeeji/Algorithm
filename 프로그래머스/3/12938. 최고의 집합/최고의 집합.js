function solution(n, s) {
    if (n > s) return [-1];
    
    var a = s%n;
    var b = Math.floor(s/n);
    
    return [...Array(n-a).fill(b), ...Array(a).fill(b+1)];
}