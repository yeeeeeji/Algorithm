function solution(numbers) {
    var answer = new Set();
    numbers.forEach((a, i) => {
        numbers.forEach((b, j) => {
            if (i !== j) answer.add(a+b);
        })
    })
    return [...answer].sort((a, b) => a-b);
}