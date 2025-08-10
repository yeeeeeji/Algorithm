function solution(x) {
    return !(x%(x+"").split("").reduce((a, c) => a+Number(c), 0))
}