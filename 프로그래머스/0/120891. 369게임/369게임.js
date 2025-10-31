function solution(order) {
    return (order+"").split("").reduce((a, c) => (c != 0 && c%3 === 0) ? a+1 : a, 0);
}