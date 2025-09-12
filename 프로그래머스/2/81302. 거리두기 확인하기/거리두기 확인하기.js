function solution(places) {
    var answer = [];
    for (var place of places) {
        var points = [], flag = true;
        place.forEach((p, i) => {
            p.split("").forEach((x, j) => {
                if (x === "P") points.push([i, j]);
            })
        })
        for (var point of points) {
            if(!checkPlace(point, place)) {
                flag = false;
                break;
            }
        }
        flag ? answer.push(1) : answer.push(0);
    }
    return answer;
}

function checkPlace(point, place) {
    var [i, j] = point;
    
    if (place[i][j] === "P") {
        var iN = i-1 >= 0, iP = i+1 < 5, jN = j-1 >= 0, jP = j+1 < 5;
        var U = !iN ? true : place[i-1][j] === "X" ? true : false;
        var D = !iP ? true : place[i+1][j] === "X" ? true : false;
        var L = !jN < 0 ? true : place[i][j-1] === "X" ? true : false;
        var R = !jP >= 5 ? true : place[i][j+1] === "X" ? true : false;

        if (U && D && L && R) return true;
        
        if (iN && jN) {
            if (place[i-1][j-1] === "P" && (!U || !L)) return false;
        }
        if (iN && jP) {
            if (place[i-1][j+1] === "P" && (!U || !R)) return false;
        }
        if (iP && jN) {
            if (place[i+1][j-1] === "P" && (!D || !L)) return false;
        }
        if (iP && jP) {
            if (place[i+1][j+1] === "P" && (!D || !R)) return false;
        }

        if (iN) {
            if (place[i-1][j] === "P") {
                return false;
            } else if (place[i-1][j] !== "X") {
                if (i-2 >= 0 && place[i-2][j] === "P") {
                    return false;
                }
            }
        }
        if (iP) {
            if (place[i+1][j] === "P") {
                return false;
            } else if (place[i+1][j] !== "X") {
                if (i+2 < 5 && place[i+2][j] === "P") {
                    return false;
                }
            }
        }
        if (jN) {
            if (place[i][j-1] === "P") {
                return false;
            } else if (place[i][j-1] !== "X") {
                if (j-2 >= 0 && place[i][j-2] === "P") {
                    return false;
                }
            }
        }
        if (jP) {
            if (place[i][j+1] === "P") {
                return false;
            } else if (place[i][j+1] !== "X") {
                if (j+2 < 5 && place[i][j+2] === "P") {
                    return false;
                }
            }
        }
    }
        
    return true;
}