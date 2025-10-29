function solution(my_strings, parts) {
    return parts.reduce((a, [x, y], i) => a+my_strings[i].slice(x, y+1), "");
}