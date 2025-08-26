function solution(n, m, section) {
    var answer = 0;
    while (section.length > 0) {
        var wall = section.pop();
        answer += 1;
        while (wall-m < section[section.length-1]) {
            section.pop();
        }
    }
    return answer;
}