function solution(num_list) {
    var [a, b] = [num_list[num_list.length-1], num_list[num_list.length-2]];
    return a > b ? [...num_list, a-b] : [...num_list, a*2];
}