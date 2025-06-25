function solution(maps) {
    var answer = [];
    var xL = maps[0].length;
    var yL = maps.length;
    var visited = Array.from(Array(yL), () => new Array(xL).fill(false));
    maps.forEach((map, i) => {
        map.split("").forEach((m, j) => {
            if (m == "X") visited[i][j] = true;
        })
    })
    
    maps.forEach((map, i) => {
        map.split("").forEach((m, j) => {
            if (!visited[i][j]) {
                var Q = [[i, j]];
                var food = 0;
                while (Q.length) {
                    var [a, b] = Q.shift();
                    if (visited[a][b]) continue;
                    visited[a][b] = true;
                    food += Number(maps[a][b])
                    if (a+1 < yL && !visited[a+1][b]) Q.push([a+1, b]);
                    if (a-1 >= 0 && !visited[a-1][b]) Q.push([a-1, b]);
                    if (b+1 < xL && !visited[a][b+1]) Q.push([a, b+1]);
                    if (b-1 >= 0 && !visited[a][b-1]) Q.push([a, b-1]);
                }
                answer.push(food);
            }
        })
    })
    
    return answer.length ? answer.sort((a, b) => a-b) : [-1];
}