function solution(n) {
    var answer = [];
    var snail = Array.from({ length: n }, (_, i) => Array(i+1).fill(0));
    var [a, b] = [0, 0];
    var cV = [[1, 0], [0, 1], [-1, -1]];
    var cI = 0;
    var total = n*(n+1)/2;
    for (var i = 1; i <= total; i++) {
        snail[a][b] = i;
        var [newA, newB] = [a+cV[cI][0], b+cV[cI][1]];
        if (newA < 0 || newA >= n || newB < 0 || newB >= n || snail[newA][newB] > 0) {
            cI = (cI+1)%3;
            [newA, newB] = [a+cV[cI][0], b+cV[cI][1]];
        }
        [a, b] = [newA, newB];
    }
    snail.forEach((s) => {
        s.forEach((ss) => {
            answer.push(ss);
        })
    })
    return answer;
}