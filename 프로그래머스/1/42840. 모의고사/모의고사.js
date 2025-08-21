function solution(answers) {
    var answer = [];
    var a = [1, 2, 3, 4, 5], b = [2, 1, 2, 3, 2, 4, 2, 5], c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var points = [0, 0, 0];
    answers.forEach((x, i) => {
        if (x == a[i%5]) points[0] += 1;
        if (x == b[i%8]) points[1] += 1;
        if (x == c[i%10]) points[2] += 1;
    })
    var best = Math.max(...points);
    return points.reduce((a, c, i) => best == c ? [...a, i+1] : a, []);
}