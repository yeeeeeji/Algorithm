function solution(num_str) {
    var answer = 0;
    return [...num_str].reduce((a, c) => a+1*c, 0);
}