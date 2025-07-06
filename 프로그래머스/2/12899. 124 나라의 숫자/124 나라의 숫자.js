function solution(n) {
    var result = "";
    var l = ["4", "1", "2"];
    
    while (n > 0) {
        result = l[n % 3] + result;
        n = Math.floor((n - 1) / 3);
    }

    return result;
}