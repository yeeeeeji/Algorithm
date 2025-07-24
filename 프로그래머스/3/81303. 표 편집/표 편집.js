function solution(n, k, cmd) {
    var prev = Array(n).fill().map((_, i) => i-1);
    var next = Array(n).fill().map((_, i) => i+1);
    var index = k;
    var bin = [];
    cmd.forEach((c) => {
        if (c == "C") {
            bin.push([index, prev[index], next[index]]);
            if (prev[index] !== -1) next[prev[index]] = next[index];
            if (next[index] !== n) prev[next[index]] = prev[index];
            index = next[index] < n ? next[index] : prev[index];
        } else if (c == "Z") {
            var [zI, prevZ, nextZ] = bin.pop();
            if (prevZ !== -1) next[prevZ] = zI;
            if (nextZ !== -1) prev[nextZ] = zI;
        } else {
            var [dir, move] = c.split(" ");
            if (dir == "D") {
                while (move > 0) {
                    index = next[index];
                    move--;
                }
            } else {
                while (move > 0) {
                    index = prev[index];
                    move--;
                }
            }
        }
    })
    var answer = Array(n).fill("O");
    bin.forEach((b) => {
        answer[b[0]] = "X";
    })
    return answer.join("");
}