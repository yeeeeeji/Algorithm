function solution(num_list) {
    return Math.max(...num_list.reduce((a, c, i) => i%2 ? [a[0], a[1]+c] : [a[0]+c, a[1]], [0, 0]));
}