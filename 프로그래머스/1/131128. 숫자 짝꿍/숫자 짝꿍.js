function solution(X, Y) {
    var answer = '';
    var numbers = Array(11).fill(0);
    for (x of X) {
        numbers[Number(x)] += 1;
    }
    Y = Y.split("").map((y) => Number(y)).sort((a, b) => b-a);
    Y.forEach((y) => {
        if (numbers[y] > 0) {
            numbers[y] -= 1;
            answer += y;
        }
    })
    return answer == "" ? "-1" : answer[0] == "0" ? "0" : answer;
}