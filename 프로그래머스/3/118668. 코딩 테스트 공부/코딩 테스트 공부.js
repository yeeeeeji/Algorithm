function solution(alp, cop, problems) {
    var answer = 0;
    var maxA = alp, maxC = cop;
    problems.forEach((p) => {
        if (p[0] > maxA) maxA = p[0];
        if (p[1] > maxC) maxC = p[1];
    });
    if (maxA <= alp && maxC <= cop) return 0;
    var infos = Array.from({length: maxA+1}, () => Array(maxC+1).fill(Infinity));
    infos[alp][cop] = 0;
    
    for (var i = alp; i <= maxA; i++) {
        for (var j = cop; j <= maxC; j++) {
            // 알고력 up
            if (i < maxA && infos[i+1][j] > infos[i][j]+1) infos[i+1][j] = infos[i][j]+1;
            // 코딩력 up
            if (j < maxC && infos[i][j+1] > infos[i][j]+1) infos[i][j+1] = infos[i][j]+1;
            // 문제 풀기
            problems.forEach((p) => {
                if (p[0] <= i && p[1] <= j) {
                    var newI = i+p[2] > maxA ? maxA : i+p[2];
                    var newC = j+p[3] > maxC ? maxC : j+p[3];
                    if (infos[newI][newC] > infos[i][j]+p[4]) {
                        infos[newI][newC] = infos[i][j]+p[4]
                    }
                }
            })
        }
    }
    
    return infos[maxA][maxC];
}