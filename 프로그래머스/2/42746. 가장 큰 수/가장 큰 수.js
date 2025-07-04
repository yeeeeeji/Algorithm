function solution(numbers) {
    numbers.sort((a, b) => {
        var A = a.toString(), B = b.toString();
        return Number(B+A) - Number(A+B)
    });
    return numbers[0] === 0 ? "0" : numbers.join("");
}