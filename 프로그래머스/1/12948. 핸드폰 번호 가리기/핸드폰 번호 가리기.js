function solution(phone_number) {
    return phone_number.split("").map((n, i) => i < phone_number.length-4 ? "*" : n).join("");
}