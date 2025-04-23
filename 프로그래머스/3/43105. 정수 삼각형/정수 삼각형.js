function solution(triangle) {
    for (var i = triangle.length-2; i >= 0; i--) {
        triangle[i] = triangle[i].map((a, j) => a+Math.max(triangle[i+1][j], triangle[i+1][j+1]))
    }
    return triangle[0][0];
}