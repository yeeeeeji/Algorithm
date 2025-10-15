function solution(num_list) {
    return num_list.reduce((a, c) => a*c, 1) < num_list.reduce((a, c) => a+c, 0)**2 ? 1 : 0;
}