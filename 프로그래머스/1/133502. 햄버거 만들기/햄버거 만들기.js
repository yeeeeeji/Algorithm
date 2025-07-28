function solution(ingredient) {
    var answer = 0;
    var stack = [];
    for (var i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        var sL = stack.length;
        if (sL >= 4 && stack[sL-1] == 1 && stack[sL-2] == 3 && stack[sL-3] == 2 && stack[sL-4] == 1) {
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            answer += 1;
        }
    }
    
    return answer;
}