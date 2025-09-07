function solution(maps) {
    // E -> L / L -> S
    var answer = -1;
    var EtoL = 0;
    var steps = [], visitedL = false; height = maps.length, width = maps[0].length;
    var mapsS = maps.map((m) => m.split(""));
    maps = maps.map((m) => m.split(""));
    
    maps.forEach((h, y) => {
        h.forEach((w, x) => {
            if (maps[y][x] === "E") {
                steps.push([y, x, 0]);
                maps[y][x] = "X";
            } 
        })
    })
    
    const checkL = ([y, x, t], action, p) => {
        if (action(p) && maps[y][x] !== "X") {
            steps.push([y, x, t]);
            if (maps[y][x] === "O") maps[y][x] = "X";
        }
    }
    
    const checkS = ([y, x, t], action, p) => {
        if (action(p) && mapsS[y][x] !== "X") {
            steps.push([y, x, t]);
            if (mapsS[y][x] === "O") mapsS[y][x] = "X";
        }
    }
    
    while (steps.length > 0) {
        var [y, x, t] = steps.shift();
        if (maps[y][x] === "L") {
            EtoL = t;
            steps = [[y, x, 0]];
            mapsS[y][x] = "X";
            break;
        };
        checkL([y+1, x, t+1], checkYP, y+1);
        checkL([y, x+1, t+1], checkXP, x+1);
        checkL([y-1, x, t+1], checkN, y-1);
        checkL([y, x-1, t+1], checkN, x-1);
    }
    
    if (EtoL === 0) return -1;
    
    while (steps.length > 0) {
        var [y, x, t] = steps.shift();
        if (maps[y][x] === "S") return t+EtoL;
        checkS([y+1, x, t+1], checkYP, y+1);
        checkS([y, x+1, t+1], checkXP, x+1);
        checkS([y-1, x, t+1], checkN, y-1);
        checkS([y, x-1, t+1], checkN, x-1);
    }
    
    return -1;
}

function checkYP(y) { return y < height };
function checkXP(x) { return x < width };
function checkN(n) { return n >= 0 };