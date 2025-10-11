function solution(num_list) {
    var even = num_list.reduce((a, c) => c%2 ? a : a+c, "")*1;
    var odd = num_list.reduce((a, c) => c%2 ? a+c : a, "")*1;
    return even+odd;
}