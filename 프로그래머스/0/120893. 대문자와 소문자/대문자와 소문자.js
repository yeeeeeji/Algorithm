function solution(my_string) {
    return my_string.split("").reduce((a, c) => c === c.toUpperCase() ? a+c.toLowerCase() : a+c.toUpperCase(), "");
}