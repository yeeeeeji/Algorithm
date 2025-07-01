function solution(s) {
    return s.split(" ").map((word) => word.split("").map((w, i) => i == 0 ? w.toUpperCase() : w.toLowerCase()).join("")).join(" ")
}