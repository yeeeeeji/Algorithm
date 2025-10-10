function solution(s1, s2) {
    return s1.reduce((a, c) => {
        if (s2.includes(c)) return a+1;
        return a;
    }, 0);
}