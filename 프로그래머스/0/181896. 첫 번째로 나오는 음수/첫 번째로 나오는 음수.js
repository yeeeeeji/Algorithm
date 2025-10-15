function solution(num_list) {
    return num_list.reduce((a, c, i) => a === -1 && c < 0 ? i : a, -1);
}