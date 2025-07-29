function solution(numbers) {
    var answer = Array(numbers.length).fill(-1);
    var stack = [];
    for (var i = 0; i < numbers.length; i++) {
        while (stack.length > 0 && numbers[i] > numbers[stack[stack.length-1]]) {
            var idx = stack.pop();
            answer[idx] = numbers[i];
        }
        stack.push(i);
    }
    return answer;
}