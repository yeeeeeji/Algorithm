function solution(board) {
    var answer = 0;
    var points = [];
    var height = board.length, width = board[0].length;
    var visited = board.map((a, i) => {
        return a.split("").map((b, j) => {
            if (b === "." || b === "G") return false;
            else return true;
        })
    })
    board.forEach((a, i) => {
        a.split("").forEach((b, j) => {
            if (board[i][j] === "R") {
                points.push([i, j, "", 0]);
                visited[i][j] = true;
            } 
        })
    })
    
    while (points.length > 0) {
        var [i, j, d, c] = points.shift();
        if (board[i][j] === "G") return c;
        if (d !== "U" && i+1 < height && board[i+1][j] !== "D") {
            var goD = i+1;
            while (goD < height && board[goD][j] !== "D") {
                goD++;
            }
            if (!visited[goD-1][j]) {
                points.push([goD-1, j, "D", c+1]);
                visited[goD-1][j] = true;
            }
        }
        if (d !== "D" && i-1 >= 0 && board[i-1][j] !== "D") {
            var goU = i-1;
            while (goU >= 0 && board[goU][j] !== "D") {
                goU--;
            }
            if (!visited[goU+1][j]) {
                points.push([goU+1, j, "U", c+1]);
                visited[goU+1][j] - true;
            }
        }
        if (d !== "L" && j+1 < width && board[i][j+1] !== "D") {
            var goR = j+1;
            while (goR < width && board[i][goR] !== "D") {
                goR++;
            }
            if (!visited[i][goR-1]) {
                points.push([i, goR-1, "R", c+1]);
                visited[i][goR-1] = true;
            } 
        }
        if (d !== "R" && j-1 >= 0 && board[i][j-1] !== "D") {
            var goL = j-1;
            while (goL >= 0 && board[i][goL] !== "D") {
                goL--;
            }
            if (!visited[i][goL+1]) {
                points.push([i, goL+1, "L", c+1]);
                visited[i][goL+1] = true;
            } 
        }
    }
    return -1;
}