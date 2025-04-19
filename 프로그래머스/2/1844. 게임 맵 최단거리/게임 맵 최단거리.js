function solution(maps) {
    var N = maps[0].length-1;
    var M = maps.length-1;
    var Q = [[0, 0, 1]];  // 첫째 칸부터 시작
    
    while (Q.length) {  // 확인해야 할 시작점이 있는 동안
        var [x, y, C] = Q.shift();
        if (x == N && y == M) return C;
        if (maps[y][x]) {  // 벽도 아니고 방문하지도 않았다면
            maps[y][x] = false;  // 들리기

            if (x+1 <= N) Q.push([x+1, y, C+1]);
            if (x-1 >= 0) Q.push([x-1, y, C+1]);
            if (y+1 <= M) Q.push([x, y+1, C+1]);
            if (y-1 >= 0) Q.push([x, y-1, C+1]);
        }

    }
    return -1;  // while문이 진행되는 동안 반환되지 않았다면 도착 불가능 의미
    
}[[1, 1, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 1, 1, 0, 1]]