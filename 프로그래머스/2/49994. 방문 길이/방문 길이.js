function solution(dirs) {
    var I = [0, 0];
    var visited = new Set();
    var prev = "";
    
    for (d of dirs) {
        var [x, y] = I;
        prev = ""+y+x;
        if (d === "U" && y > -5) y--;
        if (d === "D" && y < 5) y++;
        if (d === "L" && x > -5) x--;
        if (d === "R" && x < 5) x++;
        
        if (prev == ""+y+x) continue;  // 위치 이동이 없었으면 add X

        visited.add(""+prev+y+x);
        visited.add(""+y+x+prev);
        
        I = [x, y];
    }
    return visited.size/2;
}
