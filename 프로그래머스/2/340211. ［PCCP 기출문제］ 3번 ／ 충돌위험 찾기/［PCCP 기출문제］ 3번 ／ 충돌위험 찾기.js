function solution(points, routes) {
    var [h, w] = [0, 0];
    points.forEach(([x, y]) => {
        h = Math.max(h, x), w = Math.max(w, y);
    })
    var visited = Array.from({length: h}, (_) => Array(w).fill(false));
    
    points = points.map((p) => p.map((x) => x-1)), routes = routes.map((r) => r.map((x) => x-1));
    var robots = routes.map((r) => [[points[r[0]][0]-1, points[r[0]][1]], r.map((x) => points[x])]);  // [[좌표], [목표 포인트]]
    var answer = 0;
    while (robots.length > 1) {
        var visited = Array.from({length: h}, (_) => Array(w).fill(0));
        var newInfo = [];
        for (var i = 0; i < robots.length; i++) {
            var [[x, y], goal] = robots[i];
            if (goal[0][0] !== x) {
                if (goal[0][0] > x) x++;
                else x--;
            } else {
                if (goal[0][1] > y) y++;
                else y--;
            }
            if (visited[x][y] === 0) {
                visited[x][y] = 1;
            } else if (visited[x][y] === 1) {
                visited[x][y] = 2;
                answer++
            }
            if (x !== goal[0][0] || y !== goal[0][1]) {
                newInfo.push([[x, y], [...goal]]);
            } else  {
                if (goal.length > 1) newInfo.push([[x, y], goal.filter((_, i) => i > 0)]);
            }
        }
        robots = newInfo.slice();
    }
     
    
    return answer;
}