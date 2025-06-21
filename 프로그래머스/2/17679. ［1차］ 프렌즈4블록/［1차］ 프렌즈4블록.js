function solution(m, n, board) {
    board = board.map((b) => b.split(""))
    
    var NB = Array.from(Array(n), () => new Array(m).fill(""))
    board.forEach((b, i) => {
        b.forEach((bb, j) => NB[j][m-1-i] = bb)
    })
    board = NB.slice();
    
    var flag = true;
    while (flag) {
        flag = false;
        var B = board.slice().map((b) => b.map((bb) => true));
        for (var i = n-1; i > 0; i--) {
            var BL = board[i].length;
            if (BL == 1) B[i][0] = true;
            for (var j = 0; j < BL-1; j++) {
                var W = board[i][j];
                if (new Set([board[i][j], board[i][j+1], board[i-1][j], board[i-1][j+1]]).size === 1) {
                    [B[i][j], B[i][j+1], B[i-1][j], B[i-1][j+1]] = [false, false, false, false];
                    flag = true;
                }
            }
        }
        board = board.map((b, i) => {
            if (b.length <= 1) return b
            return b.filter((bb, j) => B[i][j])
        });
    }
    var answer = m*n;
    board.forEach((b) => answer -= b.length)
    
    return answer;
}