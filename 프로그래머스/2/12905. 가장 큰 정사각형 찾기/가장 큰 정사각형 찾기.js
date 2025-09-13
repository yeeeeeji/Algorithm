function solution(board) {
    var newB = Array.from({length: board.length}, () => Array(board[0].length).fill(0));
    var max = 0;
    board.forEach((b, i) => {
        b.forEach((x, j) => {
            if (x === 1) {
                if (i === 0 || j === 0) {
                    newB[i][j] = x;
                    if (max === 0) max = 1;
                } else {
                    newB[i][j] = Math.min(newB[i-1][j], newB[i][j-1], newB[i-1][j-1]) + 1;
                    if (max < newB[i][j]) max = newB[i][j];
                }
            } else {
                newB[i][j] = 0;
            }
        })
    })
    return max**2;
}