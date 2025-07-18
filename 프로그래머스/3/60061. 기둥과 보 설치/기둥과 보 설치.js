function solution(n, build_frame) {
    var answer = [];
    var pillars = Array.from({length: n+1}, () => Array(n+1).fill(false));
    var beams = Array.from({length: n+1}, () => Array(n+1).fill(false));
    
    const checkP = (x, y) => {
        x = checkI(x), y = checkI(y);
        if (!pillars[y][x]) return true;
        var newX = checkI(x-1), newY = checkI(y-1);
        if (y == 0 || pillars[newY][x] == true || beams[y][newX] == true || beams[y][x] == true) {
            return true;
        }
        return false;
    }
    
    const checkB = (x, y) => {
        x = checkI(x), y = checkI(y);
        if (!beams[y][x]) return true;
        var newXP = checkI(x+1), newXD = checkI(x-1), newY = checkI(y-1);
        if (pillars[y-1][x] == true || pillars[y-1][x+1] == true || (beams[y][x-1] == true && beams[y][x+1] == true)) {
            return true;
        }
        return false;
    }
    
    const checkI = (num) => {
        if (num < 0) return 0;
        if (num > n) return n;
        return num;
    }
    
    build_frame.forEach((build) => {
        var [x, y, a, b] = build;
        if (b == 1) {  // 구조물 설치
            if (a == 0) {
                pillars[y][x] = true;
                pillars[y][x] = checkP(x, y);
            } else {
                beams[y][x] = true;
                beams[y][x] = checkB(x, y);
            }
        } else {  // 구조물 삭제
            if (a == 0) {
                pillars[y][x] = false;
                if (!(checkB(x-1, y+1) && checkB(x, y+1) && checkP(x, y+1))) pillars[y][x] = true;
            } else {
                beams[y][x] = false;
                if (!(checkB(x-1, y) && checkB(x+1, y) && checkP(x, y) && checkP(x+1, y))) beams[y][x] = true;
            }
        }
    })
    for (var x = 0; x <= n; x++) {
        for (var y = 0; y <= n; y++) {
            if (pillars[y][x]) answer.push([x, y, 0]);
            if (beams[y][x]) answer.push([x, y, 1]);
        }
    }
    
    return answer;
}