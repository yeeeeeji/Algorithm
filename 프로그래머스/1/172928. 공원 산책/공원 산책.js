function solution(park, routes) {
    var answer = [];
    var h = park.length, w = park[0].length;
    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            if (park[y][x] === "S") {
                answer = [y, x];
                break;
            }
        }
    }
    var moves = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1]
    }
    const checkLimit = (x, y) => {
        if (x < 0 || y < 0 || x >= w || y >= h || park[y][x] === "X") return false;
        return true;
    }
    routes.forEach((route) => {
        var [op, n] = route.split(" ");
        n = Number(n);
        var [y, x] = moves[op];
        var [newY, newX] = answer;
        while (n > 0) {
            newY += y;
            newX += x;
            if (!checkLimit(newX, newY)) break;
            n--
        }
        if (n === 0) answer = [newY, newX];
    })
    return answer;
}