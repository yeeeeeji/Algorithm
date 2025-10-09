function solution(n, m, x, y, r, c, k) {
    var v = k-(Math.abs(x-r)+Math.abs(y-c));
    if (v < 0 || v%2 === 1) return "impossible"
    
    var answer = "", flag = false;
    
    const findRoute = (a, b, route) => {
        if (flag) return;
        if (Math.abs(a-r)+Math.abs(b-c) > k-route.length) return;
        if (route.length >= k) {
            if (a === r && b === c) answer = route, flag = true;
            return;
        }
        // d - l - r - u
        if (a+1 <= n) findRoute(a+1, b, route+"d");
        if (b-1 >= 1) findRoute(a, b-1, route+"l");
        if (b+1 <= m) findRoute(a, b+1, route+"r");
        if (a-1 >= 1) findRoute(a-1, b, route+"u");
    }
    findRoute(x, y, answer);
    
    return flag ? answer : "impossible";
}