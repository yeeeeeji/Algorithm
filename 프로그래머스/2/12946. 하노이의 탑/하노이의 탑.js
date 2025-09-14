function solution(n) {
    var answer = [];
    
    const hanoi = (plates, start, target, assist) => {
        if (plates === 1) {
            answer.push([start, target]);
            return;
        }
        hanoi(plates-1, start, assist, target);
        answer.push([start, target])
        hanoi(plates-1, assist, target, start);
    }
    hanoi(n, 1, 3, 2);
    
    return answer;
}