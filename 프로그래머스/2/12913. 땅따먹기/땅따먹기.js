function solution(land) {
    var answer = 0, landL = land.length;
    var infos = Array.from({length: landL}, () => Array(4).fill(0));
    infos[0] = land[0];
    for (var i = 1; i < landL; i++) {
        for (var j = 0; j < 4; j++) {
            for (var k = 0; k < 4; k++) {
                if (j !== k) {
                    var newV = infos[i-1][k] + land[i][j];
                    if (infos[i][j] < newV) infos[i][j] = newV; 
                }
            }
        }
    }
    return Math.max(...infos[landL-1]);
}