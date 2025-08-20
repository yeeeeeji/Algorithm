function solution(a, b) {
    var month = [0, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
    var days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    return days[(month[a] + b) % 7]
}