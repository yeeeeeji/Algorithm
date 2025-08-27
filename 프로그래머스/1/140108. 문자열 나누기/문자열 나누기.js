function solution(s) {
    var answer = 0;
    var a = ["", 0, 0];
    for (x of s) {
        if (a[0] === x) {
            a[1] += 1;
        } else {
            if (a[2] < a[1]) {
                a[2] += 1;
                if (a[2] == a[1]) a = ["", 0, 0];
            } else {
                a = [x, 1, 0];
                answer += 1;
            }
        }
    }
    return answer;
}