function solution(routes) {
    var answer = 1;
    
    routes = routes.sort((a, b) => a[1]-b[1]);
    
    var camera = routes[0][1];
    for (r of routes) {
        if (r[0] > camera) {
            answer += 1;
            camera = r[1];
        }
    }
    
    return answer;
}