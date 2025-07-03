function solution(topping) {
    var answer = 0;
    var A = new Map();
    var B = new Map();
    var C = [];
    for (var i = 0; i < topping.length-1; i++) {
        var T = topping[i];
        A.get(T) === undefined ? A.set(T, 1) : A.set(T, A.get(T)+1);
        C.push(A.size);
    }
    for (var i = topping.length-1; i > 0; i--) {
        var T = topping[i];
        B.get(T) === undefined ? B.set(T, 1) : B.set(T, B.get(T)+1);
        if (B.size == C[i-1]) answer += 1;
    }
    
    return answer;
}