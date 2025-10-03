function solution(line) {
    var points = [];
    for (var i = 0; i < line.length-1; i++) {
        for (var j = i+1; j < line.length; j++) {
            var [A, B, E] = line[i], [C, D, F] = line[j];
            if (A*D-B*C !== 0) {
                var [x, y] = [(B*F-E*D)/(A*D-B*C), (E*C-A*F)/(A*D-B*C)];
                if (Number.isInteger(x) && Number.isInteger(y)) points.push([x, y]);
            }
        }
    }
    var [minX, maxX, minY, maxY] = [points[0][0], points[0][0], points[0][1], points[0][1]];
    points.forEach(([x, y]) => {
        minX = Math.min(minX, x), maxX = Math.max(maxX, x);
        minY = Math.min(minY, y), maxY = Math.max(maxY, y);
    })
    points = points.map(([x, y]) => [x-minX, y-maxY]);
    var answer = Array.from({length: maxY-minY+1}, (_) => Array(maxX-minX+1).fill("."));
    for (var [x, y] of points) {
        answer[-y][x] = "*";
    }
    return answer.map((a) => a.join(""));
}