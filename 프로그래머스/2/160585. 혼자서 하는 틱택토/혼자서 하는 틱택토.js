function solution(board) {
    var o = 0, x = 0;    
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j] === "O") o++;
            else if (board[i][j] === "X") x++;
        }
    }
    if (x > o || o-x > 1) return 0;
    if (o < 3) return 1;
    
    const checkXBingo = (v, i) => board[i][1] === v && board[i][2] === v;
    const checkYBingo = (v, i) => board[1][i] === v && board[2][i] === v;
    const checkUDBingo = (v) => board[1][1] === v && board[2][2] === v;
    const checkDUBingo = (v) => board[1][1] === v && board[2][0] === v;
    
    var o_b = false, x_b = false;
    for (var i = 0; i < 3; i++) {
        if (!o_b && i === 0 && board[0][0] === "O") o_b = checkUDBingo("O");
        if (!x_b && i === 0 && board[0][0] === "X") x_b = checkUDBingo("X");
        if (!o_b && i === 2 && board[0][2] === "O") o_b = checkDUBingo("O");
        if (!x_b && i === 2 && board[0][2] === "X") x_b = checkDUBingo("X");
        if (!o_b && board[i][0] === "O") o_b = checkXBingo("O", i);
        else if (!x_b && board[i][0] === "X") x_b = checkXBingo("X", i);
        if (!o_b && board[0][i] === "O") o_b = checkYBingo("O", i);
        else if (!x_b && board[0][i] === "X") x_b = checkYBingo("X", i);
    }
    
    if ((!o_b&&x_b&&o!==x) || (o_b&&x_b) || (o_b&&o-x!==1)) return 0;
    return 1;
}

