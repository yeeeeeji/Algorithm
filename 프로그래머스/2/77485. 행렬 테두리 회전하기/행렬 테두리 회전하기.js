function solution(rows, columns, queries) {
    var answer = [];
    var board = Array.from({length: rows}, (_, i) => Array.from({length: columns}, (_, j) => i*columns+j+1));
    const rotate = ([x1, y1, x2, y2]) => {
        [x1, y1, x2, y2] = [x1-1, y1-1, x2-1, y2-1];
        
        var targets = [];
        for (var i = y1; i < y2; i++) targets.push(board[x1][i]);
        for (var i = x1; i < x2; i++) targets.push(board[i][y2]);
        for (var i = y2; i > y1; i--) targets.push(board[x2][i]);
        for (var i = x2; i > x1; i--) targets.push(board[i][y1]);
        answer.push(Math.min(...targets));
        targets.unshift(targets.pop());
        var idx = 0;
        for (var i = y1; i < y2; i++) board[x1][i] = targets[idx++];
        for (var i = x1; i < x2; i++) board[i][y2] = targets[idx++];
        for (var i = y2; i > y1; i--) board[x2][i] = targets[idx++];
        for (var i = x2; i > x1; i--) board[i][y1] = targets[idx++];
    }
    for (q of queries) {
        rotate(q);
    }
    
    return answer;
}