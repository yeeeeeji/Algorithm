function solution(land) {
    var answer = 0;
    var width = land[0].length, height = land.length;
    var infos = {}, idx = 2;
    for (var m = 0; m < width; m++) {
        for (var n = 0; n < height; n++) {
            if (land[n][m] === 1) {
                var points = [[n, m]];
                land[n][m] = idx, infos[idx] = 1;
                while (points.length > 0) {
                    var [i, j] = points.shift();
                    if (i-1 >= 0 && land[i-1][j] === 1) {
                        land[i-1][j] = idx, infos[idx] += 1;
                        points.push([i-1, j]);
                    }
                    if (i+1 < height && land[i+1][j] === 1) {
                        land[i+1][j] = idx, infos[idx] += 1;
                        points.push([i+1, j]);
                    }
                    if (j-1 >= 0 && land[i][j-1] === 1) {
                        land[i][j-1] = idx, infos[idx] += 1;
                        points.push([i, j-1]);
                    }
                    if (j+1 < width && land[i][j+1] === 1) {
                        land[i][j+1] = idx, infos[idx] += 1;
                        points.push([i, j+1]);
                    }
                }
                idx++
            }
        }
    }
    
    for (var m = 0; m < width; m++) {
        var comb = new Set(), sum = 0;
        for (var n = 0; n < height; n++) {
            if (land[n][m] !== 0) comb.add(land[n][m])
        }
        comb.forEach((c) => sum += infos[c]);
        if (answer < sum) answer = sum;
    }
    
    return answer;
}