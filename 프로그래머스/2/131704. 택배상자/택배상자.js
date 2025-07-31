function solution(order) {
    var answer = 0;
    var stack = [];
    var box = 1;
    for (o of order) {
        if (o === box) {
            answer += 1;
            box += 1;
        } else {
            while (stack.length == 0 || stack[stack.length-1] < o) {
                stack.push(box++);
            }
            if (stack[stack.length-1] > o) {
                break;
            } else {
                answer += 1;
                stack.pop();
            }
        }
    }
    return answer;
}