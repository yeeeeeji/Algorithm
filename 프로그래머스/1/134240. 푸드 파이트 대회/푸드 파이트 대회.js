function solution(food) {
    var answer = ['', ''];
    food.shift();
    food.forEach((f, i) => {
        var food = (i+1).toString().repeat(Math.floor(f/2));
        answer[0] += food;
        answer[1] = food + answer[1];
    })
    return answer.join("0");
}