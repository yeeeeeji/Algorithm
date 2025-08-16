function solution(s) {
    return s.split(" ").map((word) => word.split("").map((w, i) => i%2 ? w.toLowerCase() :  w.toUpperCase()).join("")).join(" ");
}