function solution(wallpaper) {
    var [lux, luy, rdx, rdy] = [Infinity, Infinity, 0, 0]
    for (var i = 0; i < wallpaper.length; i++) {
        for (var j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] === "#") {
                lux = lux > i ? i : lux;
                luy = luy > j ? j : luy;
                rdx = rdx < i ? i : rdx;
                rdy = rdy < j ? j : rdy;
            }
        }
    }
    return [lux, luy, rdx+1, rdy+1];
}