function solution(dartResult) {
    var answer = 0;
    var points = [[], [], []];
    var idx = -1
    for (var i = 0; i < dartResult.length; i++) {
        var value = dartResult[i];
        if (!isNaN(value)) {
            idx += 1;
            value = parseInt(value);
            if (value == "1" && dartResult[i+1] == "0") {
                i++;
                value = 10;
            }
        }
        points[idx].push(value);
    }
    points.forEach((point, i) => {
        point.forEach((p) => {
            if (p === "D") {
                points[i][0] **= 2;
            } else if (p === "T") {
                points[i][0] **= 3;
            } else if (p === "*") {
                if (i > 0) points[i-1][0] *= 2;
                points[i][0] *= 2;
            } else if (p === "#") {
                points[i][0] *= -1;
            }
        })
    })
    points.forEach((point) => {answer += point[0]});
    return answer;
}