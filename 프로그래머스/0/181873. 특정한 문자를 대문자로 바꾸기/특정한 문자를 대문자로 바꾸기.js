function solution(my_string, alp) {
    return [...my_string].reduce((a, c) => c === alp ? a+c.toUpperCase() : a+c, "");
}